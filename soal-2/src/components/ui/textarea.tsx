import { forwardRef, type TextareaHTMLAttributes, type ReactNode } from 'react';
import { AlertCircle } from 'lucide-react';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  icon?: ReactNode;
  containerClassName?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, containerClassName = '', className = '', ...props }, ref) => {
    return (
      <div className={`space-y-1.75 ${containerClassName}`}>
        {label && (
          <label htmlFor={label} className="text-xs font-semibold text-foreground flex items-center gap-1.5">
            {label}
          </label>
        )}

        <textarea
          id={label}
          ref={ref}
          className={`w-full px-4 py-2.5 bg-input text-foreground border ${error ? 'border-destructive focus:ring-destructive' : 'border-border focus:border-primary'
            } rounded-[10px] text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-all resize-none ${className}`}
          {...props}
        />

        {error && (
          <p className="text-xs text-destructive flex items-center gap-1 pt-0.5">
            <AlertCircle className="w-3 h-3 shrink-0" />
            <span>{error}</span>
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
