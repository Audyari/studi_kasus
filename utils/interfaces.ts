// Common TypeScript interfaces for the application

// Common props for UI components
export interface CommonComponentProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  role?: string;
}

// Common props for interactive UI components
export interface InteractiveComponentProps extends CommonComponentProps {
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

// Common props for form components
export interface FormComponentProps<T = unknown> extends CommonComponentProps {
  value?: T;
  onChange?: (value: T) => void;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  helperText?: string;
}

// Common props for layout components
export interface LayoutComponentProps extends CommonComponentProps {
  direction?: 'row' | 'column';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  gap?: number | string;
  padding?: number | string;
  margin?: number | string;
}

// Response interfaces for API calls
export interface ApiResponse<T = unknown> {
  data: T;
  message?: string;
  success: boolean;
  errors?: string[];
}

// Error interface for consistent error handling
export interface AppError {
  message: string;
  code?: string;
  details?: unknown;
  status?: number;
}

// Common interface for a paginated response
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Common interface for metadata
export interface Metadata {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  date?: string;
  modified?: string;
}
