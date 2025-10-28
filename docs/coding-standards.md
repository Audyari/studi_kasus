# Coding Standards

This document outlines the coding standards and best practices to be followed in this project.

## TypeScript Standards

### Naming Conventions

- Use PascalCase for React components: `UserProfile`, `HeaderNavigation`
- Use camelCase for variables, functions, and properties: `userName`, `getUserData`
- Use UPPER_SNAKE_CASE for constants: `API_BASE_URL`, `MAX_FILE_SIZE`
- Use descriptive names that convey the purpose clearly
- Use singular form for most variables, plural for arrays/collections

### Type Definitions

- Always define TypeScript interfaces for props and complex data structures
- Use strict typing wherever possible
- Prefer type aliases over interfaces unless inheritance is needed
- Export interfaces/types that might be reused

```typescript
// Good
interface User {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
}

interface UserCardProps {
  user: User;
  onEdit: (userId: string) => void;
  onDelete: (userId: string) => void;
}

// Avoid
interface User {
  id: any;
  name: string;
  // Missing other properties
}
```

### Component Structure

- Use functional components with TypeScript
- Define props interface outside the component
- Use React.FC only when necessary (usually not needed)
- Destructure props in function signature when possible
- Prefer explicit return types when the function is complex

```typescript
// Good
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary'
}) => {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
```

## React Best Practices

### Component Organization

- Keep components focused on a single responsibility
- Extract complex logic into custom hooks
- Use React.memo for components that render frequently with the same props
- Use useCallback for functions passed to memoized children
- Use useMemo for expensive computations

### State Management

- Use useState for component local state
- Use useReducer for complex state logic
- Use Context for global state when appropriate
- Consider using external state management libraries for complex apps

### Effects and Lifecycle

- Always include dependencies in useEffect
- Clean up subscriptions and event listeners in useEffect
- Avoid unnecessary effects that run on every render
- Use separate effects for separate concerns

## Styling Standards

### Tailwind CSS

- Use Tailwind utility classes for styling
- Follow Mobile-First approach with responsive classes
- Use consistent spacing and sizing scales
- Create reusable component classes when needed
- Use dark mode variants where appropriate

```jsx
// Good
<div className="p-4 md:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
    Title
  </h2>
</div>

// Avoid
<div className="p-4 bg-white rounded-lg shadow-md text-gray-900 dark:text-white dark:bg-gray-800">
  <h2 className="text-lg font-semibold">
    Title
  </h2>
</div>
```

## Accessibility

### ARIA Attributes

- Always provide meaningful alt text for images
- Use semantic HTML elements when possible
- Add proper labels for form elements
- Use ARIA attributes when necessary for complex components
- Ensure proper heading hierarchy (H1, H2, H3, etc.)

### Keyboard Navigation

- Ensure all interactive elements are keyboard accessible
- Use proper focus management
- Implement skip navigation links
- Test keyboard navigation regularly

## Performance

### Component Optimization

- Implement code splitting where appropriate
- Use React.lazy and Suspense for dynamic imports
- Optimize images for web usage
- Implement proper loading states
- Minimize bundle size by treeshaking unused code

### Data Fetching

- Use Next.js data fetching methods appropriately
- Implement proper caching strategies
- Optimize API calls and implement proper error handling
- Use client-side caching when appropriate

## Testing

### Naming Test Files

- Use `.test.tsx` or `.spec.tsx` extensions
- Place tests close to the component being tested
- Use descriptive test names

### Test Structure

- Follow the AAA (Arrange, Act, Assert) pattern
- Test functionality, not implementation
- Write both happy path and error case tests
- Use proper test utilities from React Testing Library

## Documentation

### Code Comments

- Write clear, concise comments that explain the "why" not the "what"
- Document complex business logic
- Comment exported functions and components with JSDoc
- Keep comments up to date when code changes

### File Documentation

- Include a brief description at the top of complex files
- Document non-obvious design decisions
- Keep README files updated as the project evolves
