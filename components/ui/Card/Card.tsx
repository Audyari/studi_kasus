import React from 'react';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  title?: string;
  description?: string;
  role?: string;
  'aria-label'?: string;
}

const Card = ({
  className = '',
  children,
  title,
  description,
  role = 'region',
  'aria-label': ariaLabel,
}: CardProps) => {
  return (
    <div
      role={role}
      aria-label={ariaLabel || (title ? title : undefined)}
      className={`rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm ${className}`}
    >
      {(title || description) && (
        <div className="p-6 pb-4">
          {title && <h3 className="text-lg font-semibold mb-1">{title}</h3>}
          {description && (
            <p className="text-gray-600 text-sm">{description}</p>
          )}
        </div>
      )}
      <div className={title || description ? 'p-6 pt-0' : 'p-6'}>
        {children}
      </div>
    </div>
  );
};

export { Card, type CardProps };
