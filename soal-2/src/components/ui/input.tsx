import { forwardRef, type InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  containerClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, containerClassName = '', className = '', ...props }, ref) => {
    return (
      <div className={`space-y-1.75 ${containerClassName}`}>
        {label && (
          <label htmlFor={label} className="inline-block text-xs font-semibold text-foreground">
            <span>{label}</span>
          </label>
        )}

        <input
          id={label}
          ref={ref}
          className={`w-full px-4 py-2.5 bg-input text-foreground border ${error ? 'border-destructive focus:ring-destructive' : 'border-border focus:border-primary'
            } rounded-[10px] text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-all ${className}`}
          {...props}
        />

        {error && (
          <p className="text-xs text-destructive">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
