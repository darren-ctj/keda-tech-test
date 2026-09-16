import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/language-context';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { X, Eye, EyeOff, Layers, CheckCircle, AlertCircle } from 'lucide-react';

export const LoginModal: React.FC = () => {
  const { isLoginModalOpen, handleCloseLoginModal, t } = useLanguage();

  const [showPassword, setShowPassword] = useState(false);
  const [forgotMsg, setForgotMsg] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  const loginSchema = z.object({
    email: z.string().email({ message: t.loginModal.errorEmail }),
    password: z.string().min(1, { message: t.loginModal.errorPassword }),
    rememberMe: z.boolean().optional(),
  });

  type LoginFormData = z.infer<typeof loginSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: true,
    },
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleCloseLoginModal();
    };

    if (isLoginModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isLoginModalOpen, handleCloseLoginModal]);

  const onSubmit = async () => {
    setForgotMsg(false);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSuccessMsg(true);

    setTimeout(() => {
      setSuccessMsg(false);
      reset();
      handleCloseLoginModal();
    }, 1200);
  };

  const handleForgotPassword = () => setForgotMsg(true);

  if (!isLoginModalOpen) return <></>

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="absolute inset-0"
        onClick={handleCloseLoginModal}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-md bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-2xl z-10 space-y-6 animate-in zoom-in-95 duration-200">
        <button
          onClick={handleCloseLoginModal}
          className="absolute top-4 right-4 p-1.5 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-2">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground mx-auto shadow-md">
            <Layers className="w-5 h-5" />
          </div>
          <h3 className="text-2xl font-semibold text-foreground tracking-tight">
            {t.loginModal.title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {t.loginModal.subtitle}
          </p>
        </div>

        {successMsg && (
          <div className="p-3.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-500 text-xs font-semibold flex items-center gap-2 animate-in fade-in">
            <CheckCircle className="w-4 h-4 shrink-0" />
            <span>{t.loginModal.successMsg}</span>
          </div>
        )}

        {forgotMsg && !successMsg && (
          <div className="p-3.5 rounded-xl bg-accent border border-border text-accent-foreground text-xs font-medium flex items-center gap-2 animate-in fade-in">
            <AlertCircle className="w-4 h-4 text-primary shrink-0" />
            <span>{t.loginModal.forgotNotice}</span>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          <Input
            type="email"
            label={t.loginModal.emailLabel}
            placeholder={t.loginModal.emailPlaceholder}
            error={errors.email?.message}
            {...register('email')}
          />

          <div className="space-y-1.5">
            <label htmlFor={t.loginModal.passwordLabel} className="text-xs font-semibold text-foreground flex items-center gap-1.5">
              {t.loginModal.passwordLabel}
            </label>

            <div className="relative">
              <input
                id={t.loginModal.passwordLabel}
                type={showPassword ? 'text' : 'password'}
                placeholder={t.loginModal.passwordPlaceholder}
                className={`w-full px-4 py-2.5 pr-10 bg-input text-foreground border ${errors.password ? 'border-destructive focus:ring-destructive' : 'border-border focus:border-primary'
                  } rounded-[10px] text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-all`}
                {...register('password')}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {errors.password && (
              <p className="text-xs text-destructive flex items-center gap-1 pt-0.5">
                <AlertCircle className="w-3 h-3 shrink-0" />
                <span>{errors.password.message}</span>
              </p>
            )}
          </div>

          <div className="flex items-center justify-between text-xs pt-1">
            <label className="flex items-center gap-2 text-muted-foreground cursor-pointer select-none">
              <input
                type="checkbox"
                className="w-4 h-4 rounded bg-input border-border text-primary focus:ring-ring cursor-pointer"
                {...register('rememberMe')}
              />
              <span>{t.loginModal.rememberMe}</span>
            </label>

            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-primary hover:underline cursor-pointer font-medium"
            >
              {t.loginModal.forgotPassword}
            </button>
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="md"
              isLoading={isSubmitting}
              className="w-full"
            >
              {t.loginModal.loginButton}
            </Button>
          </div>

        </form>

        <div className="pt-4 border-t border-border text-center text-xs text-muted-foreground">
          <span>{t.loginModal.noAccount} </span>
          <button
            onClick={() => {
              handleCloseLoginModal();
              const el = document.getElementById('pricing');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-primary hover:underline font-semibold cursor-pointer"
          >
            {t.loginModal.getStarted}
          </button>
        </div>

      </div>
    </div>
  );
};
