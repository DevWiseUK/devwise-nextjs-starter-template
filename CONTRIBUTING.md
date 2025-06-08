# Contributing to DevWise Projects

Thank you for your interest in contributing! This guide outlines the development standards and practices for DevWise projects.

## 📋 Code Standards

### TypeScript

- Use strict TypeScript configuration
- Define explicit types for all props and functions
- Prefer interfaces over type aliases for object shapes
- Use proper generics where applicable

### React Components

- Use functional components with hooks
- Define clear prop interfaces
- Implement proper error boundaries
- Follow the component structure:

  ```typescript
  interface ComponentProps {
    // props definition
  }

  export function Component({ prop1, prop2 }: ComponentProps) {
    // component logic
    return (
      // JSX
    );
  }
  ```

### Styling

- Use Tailwind CSS classes for styling
- Follow the DevWise design system
- Use CSS custom properties for theming
- Implement responsive design from mobile-first

### File Organization

- Group related files in folders
- Use index.ts files for clean exports
- Follow naming conventions:
  - Components: PascalCase (e.g., `UserProfile.tsx`)
  - Utilities: camelCase (e.g., `formatDate.ts`)
  - Constants: UPPER_SNAKE_CASE

## 🧪 Testing

### Testing Requirements

- Write tests for all components
- Test utility functions thoroughly
- Maintain high test coverage (>80%)
- Use descriptive test names

### Testing Patterns

```typescript
// Component tests
describe('ComponentName', () => {
  it('should render correctly', () => {
    // test implementation
  });

  it('should handle user interactions', () => {
    // interaction tests
  });
});

// Utility tests
describe('utilityFunction', () => {
  it('should return expected result for valid input', () => {
    // test implementation
  });

  it('should handle edge cases', () => {
    // edge case tests
  });
});
```

## 🔧 Development Workflow

### Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Run tests: `npm test`

### Before Committing

1. Run linting: `npm run lint`
2. Fix formatting: `npm run format`
3. Run type checking: `npm run typecheck`
4. Run tests: `npm test`
5. Build project: `npm run build`

### Commit Messages

Use conventional commit format:

```
type(scope): description

[optional body]

[optional footer]
```

Types:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

Examples:

```
feat(components): add tooltip component with positioning options
fix(utils): resolve date formatting issue for edge cases
docs(readme): update installation instructions
```

## 📝 Pull Request Process

1. **Create a feature branch**

   ```bash
   git checkout -b feat/your-feature-name
   ```

2. **Make your changes**

   - Follow the code standards above
   - Write tests for new functionality
   - Update documentation as needed

3. **Test your changes**

   ```bash
   npm run lint
   npm run typecheck
   npm test
   npm run build
   ```

4. **Create a pull request**
   - Use a descriptive title
   - Include a detailed description
   - Reference any related issues
   - Request review from team members

### Pull Request Template

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing

- [ ] Tests pass locally
- [ ] Added tests for new functionality
- [ ] Manual testing completed

## Checklist

- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No console.log statements
```

## 🚫 Common Pitfalls

### Avoid These Patterns

- Don't use `any` type
- Don't ignore TypeScript errors
- Don't skip writing tests
- Don't commit console.log statements
- Don't use inline styles instead of Tailwind
- Don't create deeply nested component structures

### Performance Considerations

- Use React.memo for expensive components
- Implement proper key props for lists
- Avoid unnecessary re-renders
- Optimize bundle size with proper imports

## 🌐 DevWise Core Integration

When using DevWise Core components:

1. **Import from the main package**

   ```typescript
   import { Button, Card } from '@devwise/core';
   ```

2. **Follow component API patterns**

   - Use consistent prop naming
   - Implement proper TypeScript interfaces
   - Support all standard HTML attributes

3. **Extend components properly**
   ```typescript
   interface CustomButtonProps extends ComponentProps<typeof Button> {
     customProp?: string;
   }
   ```

## 📞 Getting Help

- Review existing components in DevWise Core
- Check the documentation site
- Ask questions in team discussions
- Refer to this contributing guide

---

Thank you for contributing to DevWise projects! 🚀
