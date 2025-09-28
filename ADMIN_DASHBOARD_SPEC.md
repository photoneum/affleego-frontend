# Admin Dashboard Implementation Specification

## Overview

This document outlines the complete implementation specification for the admin dashboard system. The admin dashboard extends the existing user dashboard layout with admin-only functionality, accessible only to users with `type: "admin"`.

## Technical Stack Requirements

- Next.js 15 app router with `/admin` route prefix
- TanStack Query for data fetching and mutations
- shadcn/ui components (Data Tables, Modals, Forms)
- NextAuth for authentication with admin type validation
- Tailwind CSS with CVA variants
- React Hook Form + Zod for form validation
- File upload handling for images
- OpenAPI contract-first development

## Authentication & Authorization

### User Type Validation

```typescript
// User object structure
interface User {
  type: "admin" | "user";
  // ... other user fields
}
```

### Access Control Rules

- Users with `type: "admin"` can access `/admin` routes
- Users with `type: "user"` are redirected to `/dashboard`
- Admin users can perform all CRUD operations without additional role checks
- Session validation on each admin route access

## Architecture Overview

### Route Structure

```
app/admin/
├── layout.tsx                 # Admin dashboard layout
├── page.tsx                   # Admin dashboard home
├── deals/
│   ├── page.tsx              # Deals management table
│   ├── create/
│   │   └── page.tsx          # Create deal form (optional)
│   └── [id]/
│       └── edit/
│           └── page.tsx      # Edit deal form (optional)
├── promotions/
│   ├── page.tsx              # Promotions management table
│   ├── create/
│   │   └── page.tsx          # Create promotion form (optional)
│   └── [id]/
│       └── edit/
│           └── page.tsx      # Edit promotion form (optional)
├── users/
│   ├── page.tsx              # Users management table
│   └── [id]/
│       └── page.tsx          # User detail view
└── analytics/
    └── page.tsx              # Analytics dashboard
```

### Layout Extension Strategy

- Extend existing `app/dashboard/layout.tsx`
- Conditionally render admin sidebar items based on user type
- Maintain consistent design system and navigation patterns
- Add admin-specific styling and branding elements

## Phase 1: Core Admin Infrastructure (Week 1-2)

### Backend API Requirements

```yaml
# Admin Dashboard Overview
GET /api/v1/admin/dashboard/overview
- System-wide statistics
- Recent activity logs
- Quick metrics (total deals, users, promotions)
```

### Frontend Implementation

1. **Admin Layout Component**

   - Create `app/admin/layout.tsx`
   - Implement admin type validation middleware
   - Extend existing sidebar with admin navigation items
   - Add admin-specific header/branding

2. **Admin Home Dashboard**

   - Create `app/admin/page.tsx`
   - Implement overview cards with key metrics
   - Add recent admin activity feed
   - Quick action buttons to major sections

3. **Navigation Updates**
   - Update `components/app-sidebar.tsx` to include admin items
   - Implement conditional rendering based on user type
   - Add admin-only navigation section

## Phase 2: Deals Management System (Week 3-4)

### Backend API Requirements

```yaml
# Deals CRUD Operations
GET /api/v1/admin/deals
- Paginated deals list with advanced filtering
- Search by name, category, status, affiliate
- Sort by creation date, performance metrics

POST /api/v1/admin/deals
- Create new deal with image upload
- Validation for required fields

PUT /api/v1/admin/deals/{id}
- Update existing deal
- Handle logo image replacement

DELETE /api/v1/admin/deals/{id}
- Soft delete deal
- Cascade handling for related data

# Bulk Operations
POST /api/v1/admin/deals/bulk
- Bulk status updates (active/inactive)
- Bulk delete operations
- Bulk category assignments

# Featured Deals Management
GET /api/v1/admin/deals/featured
- List of currently featured deals
- Featured deal scheduling

POST /api/v1/admin/deals/{id}/feature
- Set deal as featured
- Configure featured period/priority

# File Upload
POST /api/v1/admin/deals/upload
- Deal logo image upload
- Image validation and resizing
- Return secure image URLs
```

### Frontend Implementation

1. **Deals Management Page**

   - Create `app/admin/deals/page.tsx`
   - Implement data table with shadcn/ui Table component
   - Add pagination, filtering, and search functionality
   - Include bulk action controls

2. **Deal Create/Edit Modals**

   - Create `components/admin/deals/deal-form-modal.tsx`
   - Implement React Hook Form with Zod validation
   - Add image upload with preview functionality
   - Handle create/edit mode switching

3. **Featured Deals Management**

   - Create `components/admin/deals/featured-deals-section.tsx`
   - Implement drag-and-drop priority ordering
   - Add featured deal scheduling controls

4. **Data Layer**
   - Create `hooks/admin/use-admin-deals.ts`
   - Implement TanStack Query mutations for CRUD operations
   - Add optimistic updates and error handling

### Component Structure

```
components/admin/deals/
├── deals-data-table.tsx        # Main data table
├── deal-form-modal.tsx         # Create/Edit modal
├── deal-actions-dropdown.tsx   # Row action menu
├── featured-deals-section.tsx  # Featured deals management
├── bulk-actions-toolbar.tsx    # Bulk operations
└── deal-image-upload.tsx       # Image upload component
```

## Phase 3: Promotions Management System (Week 5-6)

### Backend API Requirements

```yaml
# Promotions CRUD Operations
GET /api/v1/admin/promotions
- Paginated promotions list
- Filter by type, status, date range
- Search by title, description

POST /api/v1/admin/promotions
- Create new promotion with image upload
- Support for different promotion types

PUT /api/v1/admin/promotions/{id}
- Update existing promotion
- Handle background image replacement

DELETE /api/v1/admin/promotions/{id}
- Remove promotion
- Archive vs permanent delete options

# Bulk Operations
POST /api/v1/admin/promotions/bulk
- Bulk status updates
- Bulk scheduling changes
- Bulk delete operations

# File Upload
POST /api/v1/admin/promotions/upload
- Promotion background image upload
- Multiple image format support
- Image optimization and CDN integration
```

### Frontend Implementation

1. **Promotions Management Page**

   - Create `app/admin/promotions/page.tsx`
   - Implement promotions data table
   - Add status indicators and scheduling info
   - Include promotion preview functionality

2. **Promotion Create/Edit Modals**

   - Create `components/admin/promotions/promotion-form-modal.tsx`
   - Support multiple promotion types
   - Rich text editor for description content
   - Image upload with background preview

3. **Promotion Scheduling**
   - Create `components/admin/promotions/promotion-scheduler.tsx`
   - Date/time picker for start/end dates
   - Timezone handling and conversion
   - Conflict detection for overlapping promotions

### Component Structure

```
components/admin/promotions/
├── promotions-data-table.tsx
├── promotion-form-modal.tsx
├── promotion-scheduler.tsx
├── promotion-preview.tsx
├── bulk-actions-toolbar.tsx
└── promotion-image-upload.tsx
```

## Phase 4: User Management System (Week 7-8)

### Backend API Requirements

```yaml
# User Management (Affiliates Directory)
GET /api/v1/admin/users
- Paginated users list with role filtering
- Search by name, email, affiliate ID
- Performance metrics per user

GET /api/v1/admin/users/{id}
- Detailed user profile information
- Activity history and statistics
- Associated deals and performance data

PUT /api/v1/admin/users/{id}
- Update user profile information
- Change user type/status
- Reset password functionality

DELETE /api/v1/admin/users/{id}
- Deactivate user account
- Data retention policies

# Bulk Operations
POST /api/v1/admin/users/bulk
- Bulk status updates
- Bulk email notifications
- Bulk role assignments

# User Analytics
GET /api/v1/admin/users/{id}/analytics
- User performance metrics
- Conversion statistics
- Revenue attribution
```

### Frontend Implementation

1. **Users Management Page**

   - Create `app/admin/users/page.tsx`
   - Implement users data table with advanced filtering
   - Add user status indicators and metrics
   - Include quick action buttons

2. **User Detail View**

   - Create `app/admin/users/[id]/page.tsx`
   - Comprehensive user profile display
   - Activity timeline and statistics
   - Associated deals and performance charts

3. **User Management Actions**
   - Create `components/admin/users/user-actions-modal.tsx`
   - Status change functionality
   - Password reset options
   - Account deactivation workflows

### Component Structure

```
components/admin/users/
├── users-data-table.tsx
├── user-detail-card.tsx
├── user-actions-modal.tsx
├── user-performance-chart.tsx
├── user-activity-timeline.tsx
└── bulk-user-actions.tsx
```

## Phase 5: Analytics & Reporting Dashboard (Week 9-10)

### Backend API Requirements

```yaml
# System Analytics
GET /api/v1/admin/analytics/overview
- System-wide KPIs and metrics
- Performance trends and comparisons
- Real-time statistics

GET /api/v1/admin/analytics/deals
- Deal performance analytics
- Conversion rates and revenue metrics
- Geographic distribution

GET /api/v1/admin/analytics/users
- User engagement metrics
- Registration and retention rates
- Performance distribution

GET /api/v1/admin/analytics/promotions
- Promotion effectiveness metrics
- Click-through and conversion rates
- ROI analysis

# Reporting
GET /api/v1/admin/reports/export
- Exportable reports in multiple formats
- Scheduled report generation
- Custom date range filtering
```

### Frontend Implementation

1. **Analytics Dashboard**

   - Create `app/admin/analytics/page.tsx`
   - Implement interactive charts and graphs
   - Add date range selectors and filters
   - Real-time data updates

2. **Reporting System**

   - Create `components/admin/analytics/report-generator.tsx`
   - Export functionality (PDF, Excel, CSV)
   - Scheduled report configuration
   - Custom report builder

3. **Data Visualization**
   - Integrate chart library (Chart.js or Recharts)
   - Implement responsive chart components
   - Add drill-down capabilities

### Component Structure

```
components/admin/analytics/
├── analytics-overview.tsx
├── performance-charts.tsx
├── report-generator.tsx
├── export-controls.tsx
├── date-range-picker.tsx
└── metric-cards.tsx
```

## Phase 6: Bulk Operations & Advanced Features (Week 11-12)

### Backend API Requirements

```yaml
# Advanced Bulk Operations
POST /api/v1/admin/bulk/operations
- Cross-entity bulk operations
- Batch job processing
- Operation status tracking

GET /api/v1/admin/bulk/jobs/{id}
- Bulk operation progress tracking
- Error reporting and rollback options
- Completion notifications

# System Management
GET /api/v1/admin/system/logs
- System activity logs
- Error tracking and monitoring
- Performance metrics

POST /api/v1/admin/system/maintenance
- System maintenance mode toggle
- Backup and restore operations
- Cache management
```

### Frontend Implementation

1. **Bulk Operations Interface**

   - Enhanced bulk action modals
   - Progress tracking with real-time updates
   - Error handling and retry mechanisms

2. **System Management Tools**
   - Create `app/admin/system/page.tsx`
   - System health monitoring
   - Maintenance mode controls
   - Log viewer with filtering

## Implementation Guidelines

### Component Architecture

```
components/admin/
├── layout/
│   ├── admin-sidebar.tsx
│   ├── admin-header.tsx
│   └── admin-breadcrumb.tsx
├── shared/
│   ├── data-table.tsx           # Reusable data table
│   ├── bulk-actions.tsx         # Bulk operations UI
│   ├── form-modal.tsx           # Generic form modal
│   ├── image-upload.tsx         # Image upload component
│   └── confirmation-dialog.tsx  # Confirmation dialogs
├── deals/
├── promotions/
├── users/
└── analytics/
```

### Data Layer Architecture

```
hooks/admin/
├── use-admin-auth.ts           # Admin authentication
├── use-admin-deals.ts          # Deals management
├── use-admin-promotions.ts     # Promotions management
├── use-admin-users.ts          # User management
├── use-admin-analytics.ts      # Analytics data
├── use-bulk-operations.ts      # Bulk operations
└── use-file-upload.ts          # File upload handling
```

### Type Definitions

```typescript
// Admin-specific types
interface AdminUser extends User {
  type: "admin";
  permissions?: string[];
}

interface Deal {
  id: string;
  title: string;
  description: string;
  category: string;
  status: "active" | "inactive" | "pending";
  logoUrl?: string;
  featured: boolean;
  featuredPriority?: number;
  createdAt: string;
  updatedAt: string;
  metrics: {
    clicks: number;
    conversions: number;
    revenue: number;
  };
}

interface Promotion {
  id: string;
  title: string;
  description: string;
  type: "banner" | "popup" | "email" | "webinar";
  status: "active" | "inactive" | "scheduled";
  backgroundImageUrl?: string;
  startDate?: string;
  endDate?: string;
  createdAt: string;
  updatedAt: string;
}

interface BulkOperation {
  id: string;
  type: "deals" | "promotions" | "users";
  action: string;
  status: "pending" | "processing" | "completed" | "failed";
  total: number;
  processed: number;
  errors?: string[];
}
```

### Authentication Flow

```typescript
// Admin route protection
const AdminLayout = async () => {
  const session = await auth();

  if (!session?.user) {
    redirect('/auth/login');
  }

  if (session.user.type !== 'admin') {
    redirect('/dashboard');
  }

  return <AdminLayoutContent />;
};
```

### File Upload Handling

```typescript
// Image upload configuration
const UPLOAD_CONFIG = {
  deals: {
    maxSize: 5 * 1024 * 1024, // 5MB
    allowedTypes: ["image/jpeg", "image/png", "image/webp"],
    dimensions: { width: 400, height: 300 },
  },
  promotions: {
    maxSize: 10 * 1024 * 1024, // 10MB
    allowedTypes: ["image/jpeg", "image/png", "image/webp"],
    dimensions: { width: 1200, height: 600 },
  },
};
```

## Development Workflow

### Phase-by-Phase Implementation

1. **Backend API First**: Ensure all required endpoints are implemented and tested
2. **Type Generation**: Update generated types from OpenAPI schema
3. **Component Development**: Build reusable components with shadcn/ui
4. **Data Layer**: Implement TanStack Query hooks with proper error handling
5. **Integration Testing**: Test full CRUD workflows
6. **UI Polish**: Add loading states, error boundaries, and animations

### Quality Standards

- TypeScript strict mode compliance
- Comprehensive error handling with user-friendly messages
- Responsive design for all screen sizes
- Accessibility compliance (WCAG 2.1 AA)
- Performance optimization with proper caching
- Security considerations for admin operations

### Testing Strategy

- Unit tests for utility functions and hooks
- Integration tests for CRUD operations
- E2E tests for critical admin workflows
- Security testing for authorization flows

## Success Criteria

### Functional Requirements

- [ ] Admin users can access all management features
- [ ] Non-admin users are properly redirected
- [ ] Full CRUD operations work for deals, promotions, and users
- [ ] File uploads work reliably with proper validation
- [ ] Data tables support pagination, filtering, and search
- [ ] Bulk operations process efficiently with progress tracking
- [ ] Analytics provide meaningful insights with export capabilities

### Technical Requirements

- [ ] Type-safe API integration with proper error handling
- [ ] Consistent design system usage across all components
- [ ] Performance optimized with proper caching strategies
- [ ] Responsive design works on all device sizes
- [ ] Accessibility standards met for all interactions
- [ ] Security measures prevent unauthorized access
- [ ] File uploads handle edge cases gracefully

### User Experience Requirements

- [ ] Intuitive navigation between admin sections
- [ ] Fast loading times with proper loading states
- [ ] Clear feedback for all user actions
- [ ] Efficient bulk operation workflows
- [ ] Comprehensive search and filtering capabilities
- [ ] Export functionality works reliably
- [ ] Mobile-responsive admin interface

## Security Considerations

### Authentication & Authorization

- Server-side validation of admin user type on every request
- Session timeout handling for security
- CSRF protection for all admin operations
- Rate limiting for sensitive operations

### File Upload Security

- File type validation and sanitization
- Malware scanning for uploaded files
- Secure file storage with CDN integration
- Image processing and optimization

### Data Protection

- Audit logging for all admin actions
- Sensitive data encryption in transit and at rest
- Proper error messages that don't leak sensitive information
- Regular security audits and penetration testing

## Performance Considerations

### Data Loading

- Implement proper pagination for large datasets
- Use TanStack Query for efficient caching and background updates
- Optimize database queries with proper indexing
- Implement virtual scrolling for very large tables

### File Uploads

- Client-side image compression before upload
- Progress tracking for large file uploads
- Resumable uploads for better user experience
- CDN integration for fast image delivery

### Real-time Updates

- WebSocket connections for real-time analytics
- Optimistic updates for better perceived performance
- Background data synchronization
- Efficient re-rendering with React optimization techniques

## Monitoring & Analytics

### System Monitoring

- Error tracking and alerting
- Performance monitoring and optimization
- User activity tracking and analytics
- System health checks and uptime monitoring

### Business Intelligence

- Admin action tracking and reporting
- System usage analytics and insights
- Performance metrics and KPI dashboards
- Custom report generation and scheduling

---

This specification provides a comprehensive roadmap for implementing a robust admin dashboard system that extends the existing user dashboard while maintaining consistency in design and architecture. The phased approach ensures manageable development cycles while delivering value incrementally.
