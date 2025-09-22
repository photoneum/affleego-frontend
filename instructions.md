# User Dashboard Refactoring - Implementation Plan

## Overview

This document outlines the complete refactoring of the user dashboard with a phased approach that allows concurrent frontend/backend development. Each phase specifies required backend API support before frontend implementation begins.

## Technical Stack Requirements

- Next.js 15 app router
- TanStack Query for data fetching
- shadcn/ui components
- NextAuth for authentication
- Tailwind CSS with CVA variants
- OpenAPI contract-first development

## Phase 1: Core Dashboard Infrastructure (Week 1-2)

### Backend API Requirements

```yaml
# Required API endpoints before Phase 1 implementation
GET /api/v1/dashboard/overview
- User greeting data (name, last_login)
- Community stats (weekly FTDs, top GEO)
- User timezone/locale preferences

GET /api/v1/user/profile
- Complete user profile data
- Avatar URL, preferences
- External affiliate IDs status
```

### Frontend Implementation

1. **Dashboard Home Page**

   - Update `app/dashboard/page.tsx`
   - Implement greeting bar component
   - Add community stats cards
   - Use TanStack Query for data fetching

2. **Update Sidebar Navigation Component**
   - Update `components/nav-main.tsx` and `components/nav-main.tsx` with new routes defined in the plan (Page Structure)

## Phase 2: Deals & Deals System (Week 3-4)

### Backend API Requirements

```yaml
# Required API endpoints before Phase 2 implementation
GET /api/v1/deals
- Paginated deals list
- Filter by category, status, GEO
- Include deals metrics (CR, EPC, etc.)

GET /api/v1/deals/featured
- Featured/hot deal of the week
- Promotional content and CTAs

GET /api/v1/deals/top
- Top performing deals (ranked)
- Weekly performance metrics
```

### Frontend Implementation

1. **Deals Overview Page**

   - Create `app/dashboard/deals/page.tsx`
   - Implement deals grid with shadcn/ui Cards
   - Add filtering and search functionality

2. **Hot Deal Component**

   - Create `components/dashboard/hot-deal-card.tsx`
   - Implement spotlight card design
   - Add CTA buttons with tracking

3. **Deals Data Layer**
   - Create `hooks/use-deals.ts` with TanStack Query
   - Implement caching and background updates
   - Add error handling with Sonner toasts

## Phase 3: Announcements & Promotions (Week 5)

### Backend API Requirements

```yaml
# Required API endpoints before Phase 3 implementation
GET /api/v1/announcements
- Active announcements/promotions
- Banner images and content
- Priority/ordering for carousel

GET /api/v1/promotions/webinars
- Upcoming webinar promotions
- Registration links and details
```

### Frontend Implementation

1. **Announcement Carousel**

   - Create `components/dashboard/announcement-carousel.tsx`
   - Implement auto-rotating banner
   - Add manual navigation controls

2. **Promotion Cards**
   - Create reusable promotion card components
   - Implement webinar promotion display
   - Add click tracking and analytics

## Phase 4: Support System (Week 6)

### Backend API Requirements

```yaml
# Required API endpoints before Phase 4 implementation
GET /api/v1/support/faq
- Categorized FAQ content
- Search functionality

POST /api/v1/support/contact
- Contact form submission
- File upload support for attachments

GET /api/v1/support/contacts
- Support contact methods
- Telegram/WhatsApp links
- Manager assignment
```

### Frontend Implementation

1. **Support Pages**

   - Create `app/dashboard/support/page.tsx`
   - Implement FAQ with search and categories
   - Add contact manager interface

2. **Contact Form**
   - Create `components/dashboard/contact-form.tsx`
   - Use react-hook-form with Zod validation
   - Implement file upload functionality

## Phase 5: Profile & Account Management (Week 7)

### Backend API Requirements

```yaml
# Required API endpoints before Phase 5 implementation
PUT /api/v1/user/profile
- Update user profile data
- Avatar upload support

GET /api/v1/user/external-affiliates
- External network connections
- Verification status

POST /api/v1/user/external-affiliates/verify
- Verify external affiliate accounts
- Handle verification process
```

### Frontend Implementation

1. **Profile Management**

   - Create `app/dashboard/profile/page.tsx`
   - Implement profile edit form
   - Add avatar upload with preview

2. **External Affiliates Management**
   - Create external affiliates verification flow
   - Implement status indicators
   - Add connection management UI

## Phase 6: Future Features Preparation (Week 8)

### Backend API Requirements (Coming Soon)

```yaml
# Placeholder endpoints for future implementation
GET /api/v1/academy/courses     # Affiliate Academy
GET /api/v1/webinars           # Webinars system
GET /api/v1/news               # News & Alerts
```

### Frontend Implementation

1. **Coming Soon Components**

   - Create `components/dashboard/coming-soon.tsx`
   - Implement placeholder pages for:
     - Affiliate Academy (`app/dashboard/academy/page.tsx`)
     - Webinars (`app/dashboard/webinars/page.tsx`)
     - News & Alerts (`app/dashboard/news/page.tsx`)

2. **Navigation Updates**
   - Add disabled states for coming soon features
   - Implement tooltips explaining future availability

## Implementation Guidelines

### Component Structure

```
components/dashboard/
├── sidebar-navigation.tsx
├── greeting-bar.tsx
├── community-stats.tsx
├── announcement-carousel.tsx
├── hot-deal-card.tsx
├── deals-grid.tsx
├── contact-form.tsx
├── profile-form.tsx
├── coming-soon.tsx
└── external-affiliates.tsx
```

### Data Layer Structure

```
hooks/
├── use-dashboard-overview.ts
├── use-deals.ts
├── use-announcements.ts
├── use-support.ts
├── use-profile.ts
└── use-external-affiliates.ts
```

### Page Structure

```
app/dashboard/
├── layout.tsx
├── page.tsx (home)
├── deals/
│   └── page.tsx
├── academy/
│   └── page.tsx
├── webinars/
│   └── page.tsx
├── news/
│   └── page.tsx
├── support/
│   └── page.tsx
└── profile/
    └── page.tsx
```

### Development Workflow

1. **Backend First**: Ensure API endpoints are available and documented in OpenAPI schema
2. **Type Generation**: Run `npm run types:generate:dev` after backend updates
3. **Frontend Implementation**: Build components using generated types
4. **Testing**: Test with real API integration
5. **Error Handling**: Implement proper error states and loading indicators

### Design System Compliance

- Use shadcn/ui components consistently
- Follow existing color scheme and spacing
- Implement responsive design patterns
- Use CVA for component variants
- Follow accessibility guidelines

## Success Criteria

- [ ] All dashboard sections functional and responsive
- [ ] Proper error handling and loading states
- [ ] Type-safe API integration
- [ ] Consistent design system usage
- [ ] Performance optimized with proper caching
- [ ] Accessible navigation and interactions

## Notes

- Each phase can begin only after required backend APIs are implemented and tested
- Frontend implementation should include proper TypeScript types from OpenAPI schema
- All components must be responsive and accessible
- Use TanStack Query for all API calls with proper cache management
- Implement proper error boundaries and toast notifications
