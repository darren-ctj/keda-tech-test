import { type HTMLAttributes, type ReactNode } from 'react';

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'destructive';
  children: ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'accent',
  children,
  className = '',
  ...props
}) => {
  const variantStyles = {
    primary: 'bg-primary text-primary-foreground',
    secondary: 'bg-secondary text-secondary-foreground',
    accent: 'bg-accent text-accent-foreground border border-border',
    outline: 'border border-border text-foreground bg-transparent',
    destructive: 'bg-destructive text-destructive-foreground',
  };

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
