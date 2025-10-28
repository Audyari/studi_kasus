import React from 'react';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label';
  className?: string;
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label' | 'div';
}

const Typography = ({
  variant = 'p',
  className = '',
  children,
  as,
}: TypographyProps) => {
  const Component = as || variant;

  const baseClasses = 'text-gray-900';
  const variantClasses = {
    h1: 'text-4xl font-bold tracking-tight',
    h2: 'text-3xl font-bold tracking-tight',
    h3: 'text-2xl font-bold',
    h4: 'text-xl font-medium',
    h5: 'text-lg font-medium',
    h6: 'text-base font-medium',
    p: 'text-base',
    span: 'text-base',
    label: 'text-sm font-medium',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return <Component className={classes}>{children}</Component>;
};

export { Typography, type TypographyProps };
