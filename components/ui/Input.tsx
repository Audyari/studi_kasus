import { InputHTMLAttributes } from 'react';
import { FormComponentProps } from '@/utils/interfaces';

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    FormComponentProps<string> {
  label?: string;
}

const Input = ({
  label,
  error,
  helperText,
  className = '',
  id,
  ...props
}: InputProps) => {
  const hasError = !!error;
  const inputId =
    id ||
    (label ? `input-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);
  const errorId = inputId ? `${inputId}-error` : undefined;
  const helperId = inputId ? `${inputId}-helper` : undefined;

  return (
    <div className="w-full">
      {label && inputId && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium mb-2 text-gray-700"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        aria-describedby={
          errorId || helperId
            ? `${errorId || ''} ${helperId || ''}`.trim()
            : undefined
        }
        aria-invalid={hasError}
        className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
          hasError
            ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
            : 'border-gray-300'
        } ${className}`}
        {...props}
      />
      {helperText && !hasError && helperId && (
        <p id={helperId} className="mt-1 text-sm text-gray-500">
          {helperText}
        </p>
      )}
      {hasError && errorId && (
        <p id={errorId} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};

export { Input, type InputProps };
