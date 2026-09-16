import { type HTMLAttributes, type ReactNode } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  showGradient?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', showGradient = true, ...props }) => {
  return (
    <div
      className={`relative bg-card text-card-foreground border rounded-2xl p-6 shadow-md transition-all duration-300 overflow-hidden ${className}`}
      {...props}
    >
      {showGradient && <div
        className="
          absolute 
          inset-0
          bg-gradient-to-t
          from-primary/5
          from-0%
          via-card
          via-50%
          to-card
          pointer-events-none
        "
      />
      }

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export const CardHeader: React.FC<CardProps> = ({ children, className = '', ...props }) => {
  return (
    <div className={`flex flex-col space-y-1.5 pb-4 ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardTitle: React.FC<HTMLAttributes<HTMLHeadingElement> & { children: ReactNode }> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <h3 className={`text-xl font-semibold text-foreground tracking-tight ${className}`} {...props}>
      {children}
    </h3>
  );
};

export const CardDescription: React.FC<HTMLAttributes<HTMLParagraphElement> & { children: ReactNode }> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <p className={`text-sm text-muted-foreground leading-relaxed ${className}`} {...props}>
      {children}
    </p>
  );
};

export const CardContent: React.FC<CardProps> = ({ children, className = '', ...props }) => {
  return <div className={`pt-2 ${className}`} {...props}>{children}</div>;
};

export const CardFooter: React.FC<CardProps> = ({ children, className = '', ...props }) => {
  return (
    <div className={`flex items-center pt-6 border-t border-border ${className}`} {...props}>
      {children}
    </div>
  );
};
