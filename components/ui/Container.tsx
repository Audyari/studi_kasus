import React from 'react';

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

const Container = ({
  className = '',
  children,
  maxWidth = '2xl',
}: ContainerProps) => {
  const maxWidthClass = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
  }[maxWidth];

  return (
    <div
      className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${maxWidthClass} ${className}`}
    >
      {children}
    </div>
  );
};

export { Container, type ContainerProps };
