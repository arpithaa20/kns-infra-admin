# KNS Infra Admin
---

**Title:** KNS Infra Admin  
**Date:** 19/11/2026

---

## Version Information

- **Node.js version:** 24+
- **React.js version:** 19+


## Getting Started

First, install dependencies and run the development server:

```bash
npm install
npm run dev
```

## Required VS Code Extensions

1. **Prettier** — Code formatting
2. **ESLint** — Code linting and error checking

## File Naming Conventions

- Use PascalCase for component folders and component files.
- Use camelCase for utility files, Redux slices, and JavaScript functions.
- Use consistent and meaningful names.

Examples:
- `ProjectList`
- `CreateProject`
- `getWebProjectSlice.js`
- `apiServices.js`

## Folder Responsibilities

- **assets** → Static assets and images
- **components** → Reusable UI components
- **pages** → Application pages
- **store/slices** → Individual Redux slices for API operations
- **store/store.js** → Redux store configuration
- **utils/apiServices.js** → Centralized API service
- **App.jsx** → Application routing
- **main.jsx** → Application entry point

## Main Principles

- Keep the architecture simple.
- Keep components focused.
- Keep API logic separate.
- Use Redux Toolkit for state management.
- Use a centralized API service.
- Maintain separate slices for API operations.
- Use SCSS for styling.
- Avoid unnecessary abstractions.
- Keep components reusable and maintainable.
- Follow consistent coding conventions.