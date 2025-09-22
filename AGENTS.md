# Agent Guidelines for Affleego Frontend

## Build/Lint/Test Commands

- **Development**: `npm run dev` (uses turbopack)
- **Build**: `npm run build`
- **Lint**: `npm run lint` (or `npm run lint:fix`)
- **Format**: `npm run format:fix`
- **Type checking**: `npx tsc --noEmit`

## Code Style

- **Imports**: Follow Prettier import order (React → Next → third-party → @/ aliases)
- **Formatting**: Use Prettier (double quotes, 2 spaces, trailing commas)
- **Types**: Use TypeScript with strict mode, prefer interfaces for props
- **Components**: Install and use Shadcn components UI components, PascalCase naming,
- **Files**: kebab-case for files, camelCase for variables/functions
- **Hooks**: Prefix with "use", return mutation objects from custom hooks
- **Paths**: Use @/ aliases (e.g., @/components, @/lib, @/hooks)

## Architecture

- Next.js 15 app router, TanStack Query for state, NextAuth for auth
- Components: atoms/molecules/organisms pattern + shadcn/ui
- Forms: react-hook-form + Zod validation
- Styling: Tailwind CSS with CVA for component variants
- Error handling: toast notifications with Sonner
