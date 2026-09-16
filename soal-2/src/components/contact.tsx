import React, { useState } from 'react';
import { useLanguage } from '../context/language-context';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Send, CheckCircle, Mail, User, Building, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const contactSchema = z.object({
    name: z.string().min(1, { message: t.contact.form.errorNameRequired }),
    email: z.string().email({ message: t.contact.form.errorEmailInvalid }),
    businessName: z.string().optional(),
    message: z.string().min(1, { message: t.contact.form.errorMessageRequired }),
  });

  type ContactFormData = z.infer<typeof contactSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      businessName: '',
      message: '',
    },
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="py-24 bg-background text-foreground relative overflow-hidden">
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-block px-3.5 py-1 rounded-full bg-accent border border-border text-xs font-bold tracking-widest text-accent-foreground uppercase">
              {t.contact.label}
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
              {t.contact.heading}
            </h2>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-normal">
              {t.contact.description}
            </p>

            <div className="pt-6 space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <div className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-primary shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-medium">Direct Email</div>
                  <div className="font-semibold text-foreground">hello@nexa.com</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-8 backdrop-blur-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-500">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {t.contact.form.successTitle}
                  </h3>
                  <p className="text-muted-foreground text-sm max-w-md mx-auto">
                    {t.contact.form.successMessage}
                  </p>
                  <Button
                    variant="outline"
                    size="md"
                    onClick={() => setSubmitted(false)}
                    className="mt-4"
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Input Component */}
                    <Input
                      label={t.contact.form.name}
                      placeholder={t.contact.form.namePlaceholder}
                      icon={<User className="w-3.5 h-3.5 text-muted-foreground" />}
                      error={errors.name?.message}
                      {...register('name')}
                    />

                    {/* Email Input Component */}
                    <Input
                      type="email"
                      label={t.contact.form.email}
                      placeholder={t.contact.form.emailPlaceholder}
                      icon={<Mail className="w-3.5 h-3.5 text-muted-foreground" />}
                      error={errors.email?.message}
                      {...register('email')}
                    />
                  </div>

                  {/* Business Name Input Component */}
                  <Input
                    label={t.contact.form.businessName}
                    placeholder={t.contact.form.businessPlaceholder}
                    icon={<Building className="w-3.5 h-3.5 text-muted-foreground" />}
                    error={errors.businessName?.message}
                    {...register('businessName')}
                  />

                  {/* Message Textarea Component */}
                  <Textarea
                    rows={4}
                    label={t.contact.form.message}
                    placeholder={t.contact.form.messagePlaceholder}
                    icon={<MessageSquare className="w-3.5 h-3.5 text-muted-foreground" />}
                    error={errors.message?.message}
                    {...register('message')}
                  />

                  {/* Submit Button Component */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      isLoading={isSubmitting}
                      className="w-full flex items-center justify-center gap-2"
                    >
                      <span>{t.contact.form.button}</span>
                      <Send className="w-4 h-4 ml-1" />
                    </Button>

                    <p className="mt-2.5 text-center text-xs text-muted-foreground">
                      {t.contact.form.supportingText}
                    </p>
                  </div>

                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
