// Validation utility functions

import { VALIDATION_PATTERNS } from './constants';

// Validate email format
export const validateEmail = (email: string): boolean => {
  return VALIDATION_PATTERNS.EMAIL.test(email);
};

// Validate phone number format
export const validatePhone = (phone: string): boolean => {
  return VALIDATION_PATTERNS.PHONE.test(phone);
};

// Validate URL format
export const validateURL = (url: string): boolean => {
  return VALIDATION_PATTERNS.URL.test(url);
};

// Validate required field
export const validateRequired = (value: unknown): boolean => {
  if (value === null || value === undefined) return false;
  if (typeof value === 'string' && value.trim() === '') return false;
  if (Array.isArray(value) && value.length === 0) return false;
  return true;
};

// Validate minimum length
export const validateMinLength = (
  value: string,
  minLength: number
): boolean => {
  if (!value) return false;
  return value.length >= minLength;
};

// Validate maximum length
export const validateMaxLength = (
  value: string,
  maxLength: number
): boolean => {
  if (!value) return true; // Allow empty values to pass max length validation
  return value.length <= maxLength;
};

// Validate password strength
export const validatePasswordStrength = (
  password: string
): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }

  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }

  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }

  if (!/\d/.test(password)) {
    errors.push('Password must contain at least one number');
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push('Password must contain at least one special character');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

// Validate if value is a valid number
export const validateNumber = (value: unknown): boolean => {
  return !isNaN(Number(value)) && isFinite(Number(value));
};

// Validate if value is a positive number
export const validatePositiveNumber = (value: unknown): boolean => {
  const num = Number(value);
  return !isNaN(num) && isFinite(num) && num > 0;
};

// Validate if value is a positive integer
export const validatePositiveInteger = (value: unknown): boolean => {
  const num = Number(value);
  return !isNaN(num) && isFinite(num) && Number.isInteger(num) && num > 0;
};

// Generic validation function that runs multiple validators
export const validate = (
  value: unknown,
  validators: Array<
    (val: unknown) => boolean | { isValid: boolean; errors?: string[] }
  >
): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  for (const validator of validators) {
    const result = validator(value);

    if (typeof result === 'boolean') {
      if (!result) {
        errors.push('Validation failed');
      }
    } else {
      if (!result.isValid) {
        if (result.errors) {
          errors.push(...result.errors);
        } else {
          errors.push('Validation failed');
        }
      }
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};
