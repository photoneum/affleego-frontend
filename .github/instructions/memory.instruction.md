---
applyTo: "**"
---

# User Memory

## User Preferences

- Programming languages: TypeScript, JavaScript
- Code style preferences: Prettier, double quotes, 2 spaces, trailing commas, PascalCase for components, kebab-case for files, camelCase for variables/functions
- Development environment: Next.js 15, TanStack Query, shadcn/ui, Tailwind CSS, VS Code
- Communication style: Concise, thorough, minimal repetition
- DON'T EVER run build to check code OR run development server, use lint and type check first, unless I suspect build issues and request a build check
- For Tanstack query and mutations hooks, put them in the /hooks and the nested /hooks/(queries or mutations) folders. Query functions should be in the services folder.
- Any hook that is used in a page, that page should be marked as "use client", use client components should be minimized, use server components where possible.
- Destructure import objects from React rather than importing the entire React object e.g. { useEffect, useState }.
- Always ensure dashboard stat cards and overview components are fully mobile responsive using Tailwind best practices.
- Don't fix any linting or type errors just focus on implementing the requested feature or fix.

## Project Context

- Current project type: Affiliate dashboard web app
- Tech stack: Next.js 15 app router, TanStack Query, shadcn/ui, NextAuth, Tailwind CSS, CVA, OpenAPI contract-first
- Architecture patterns: Atoms/molecules/organisms, hooks for data, app router pages
- Key requirements: Responsive, accessible, type-safe, error handling with Sonner
- Phase 1 (Core Dashboard Infrastructure) is fully implemented and validated
- CommunityStats component refactored to use shadcn/ui Card, Lucide icons, color accents, bold/animated numbers (framer-motion), and accessibility/responsiveness
- All lint and build errors resolved; type safety for stat config is robust
- HotDealCard and DealsCard now both render the company logo from logo_url in a perfectly rounded container, with fallback Award icon if logo_url is missing or empty. Both use alt text and aria-label for accessibility. Container size, border, and shadow are visually consistent (48x48px, bg-white, p-1, shadow-lg, ring-yellow-300/40). Type safety is robust (logo_url is always a string, fallback checks for empty string). Implementation follows OpenAPI schema and shadcn/ui best practices.
- DealsOverview, InfoCardSkeleton, FeaturedDealsSection, and DealsSection components are now fully mobile responsive using Tailwind grid and spacing best practices.
- PromotionCard component now implemented with sleek design, Memphis fallback background, framer-motion animations, and full responsiveness/accessibility
- WebinarsPage completely refactored with mobile-responsive design, DashboardPageHeader integration, enhanced coming soon card with framer-motion animations, Memphis design background elements, features preview section, and full Tailwind responsiveness
- ProfilePage completely implemented with full profile management functionality: useUpdateProfile mutation hook, file upload with 3MB validation, edit mode toggle, form fields for first_name/last_name/phone_number/country, comprehensive error handling, mobile-responsive design with surprise animated gradient background, avatar management with fallback initials, and complete integration with OpenAPI UserProfile schema
- Badge component created for profile status indicators and form feedback

## Coding Patterns

- Preferred patterns and practices: Custom hooks for data, shadcn/ui for UI, CVA for variants, TanStack Query for API
- Code organization preferences: Feature folders, hooks in /hooks, components in /components
- Documentation style: Inline comments, OpenAPI types
- PromotionCard pattern: Background image with dark overlay OR Memphis design fallback, framer-motion entrance/hover animations, gradient CTA buttons, responsive text sizing (md: breakpoints)

## Research History

- Libraries or topics researched: TanStack Query, shadcn/ui, Next.js 15, OpenAPI integration, dashboard stat card UI best practices, framer-motion, Memphis design patterns
- Best practices discovered: Use generated types, error boundaries, toast notifications, stat cards with icons/color/animation, Memphis geometric shapes for visual interest
- Implementation patterns used: Custom hooks, CVA, responsive design, stat card config with type-safe access, promotion cards with background image/fallback design
- Version-specific findings: Next.js 15 app router, TanStack Query v5, shadcn/ui Card, framer-motion
- Sonner toast should be imported from "sonner" package, not local UI

## Conversation History

- Important decisions made: Contract-first API, phased dashboard refactor, Sonner toast import fix, stat card UI/UX enhancement, HotDealCard/DealsCard logo integration, PromotionCard with Memphis fallback design
- Recurring questions or topics: API types, error handling, responsive UI, stat card best practices, promotion card aesthetics
- Solutions that worked well: Custom hooks, shadcn/ui, Sonner toasts, TanStack Query for API, stat card config, logo container consistency, Memphis design patterns with geometric shapes and icons
- Things to avoid or that didn't work: Placeholder logic, inconsistent error handling, incorrect Sonner import, use of `any` in stat config

## Notes

- Always use generated OpenAPI types for API responses
- Ensure all dashboard features are responsive and accessible
- Use Sonner for error notifications (import from "sonner")
- Sidebar navigation must reflect new dashboard routes
- Phase 1 user dashboard is complete and ready for next phase
- CommunityStats stat cards now visually "pop" and are fully accessible/responsive
- HotDealCard/DealsCard logo integration is complete and robust
- DealsOverview, InfoCardSkeleton, FeaturedDealsSection, and DealsSection components are now fully mobile responsive
- PromotionCard component ready for announcement carousel integration with props: title, content, imageUrl?, ctaText?, onCtaClick?, className?, ctaProps?
- AnnouncementCarousel component implemented with flexible card type support (PromotionCard, HotDealCard, DealsCard), auto-rotation with configurable timing, manual navigation (arrows, dots), pause-on-hover, keyboard navigation (arrows, spacebar, home/end), progress indicator, and accessibility features
- Carousel architecture uses ReactElement[] for cards prop with single card optimization, framer-motion for smooth animations, and comprehensive prop customization

## Admin Dashboard Implementation

- ✅ Admin Dashboard Phase 1 (Core Admin Infrastructure) implementation COMPLETE
- Admin routes use `/admin` prefix with user type validation (`type: "admin"`)
- Admin layout extends existing user dashboard layout with conditional rendering
- Uses placeholder data for overview metrics (APIs not ready yet)
- Admin users can access both admin and regular user dashboard sections
- Implements server-side auth validation for admin routes
- All components created: AdminOverviewCards, AdminQuickActions, AdminActivityFeed
- TypeScript errors resolved, lint issues fixed, fully responsive design implemented
- Admin sidebar navigation with Shield icon and admin-specific menu items
