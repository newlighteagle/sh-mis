# Technical Documentation - Smallholder HUB

## Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Architecture](#architecture)
4. [Features & Components](#features--components)
5. [Configuration](#configuration)
6. [Database Schema](#database-schema)
7. [API Documentation](#api-documentation)
8. [Deployment](#deployment)
9. [Troubleshooting](#troubleshooting)

---

# Introduction

## About MIS - Smallholder HUB

Smallholder HUB - Sawit Swadaya is a Management Information System (MIS) developed by WRI Indonesia to empower smallholder palm oil farmers across Riau Province. The platform provides comprehensive tools for community management, activity tracking, data visualization, and sustainability practices implementation.

**Mission**: To facilitate sustainable palm oil cultivation through technology, education, and community collaboration.

**Geographic Scope**: 4 districts in Riau Province - Kampar, Rokan Hulu, Siak, and Pelalawan, covering 31 farmer groups with over 7,000 registered farmers and 30,000+ hectares of managed land.

## Key Features

### ✅ **Implemented (Phase 1)**

- **Responsive Landing Page**: Modern, mobile-first design with hero carousel and narrative sections
- **Multi-level Navigation**: Dropdown menus for Community (31 farmer groups), Activity (6 categories), and Media (3 types)
- **Bilingual Support**: Complete Indonesian (ID) and English (EN) localization
- **Dark/Light Mode**: User-preference theme switching with localStorage persistence
- **Farmer Group Profiles**: Detailed profile pages with history, geography, statistics, and activity cards
- **Community Overview**: Interactive district cards with member counts and land area statistics
- **Media Gallery**: Curated images showcasing farmer activities and success stories
- **Stakeholder Section**: Partner organization showcase and impact statistics
- **Public Dashboard**: Interactive geospatial dashboard with mill/group distribution and analytics
- **Advanced View Options**: Toggle between Grid (Card) and List views with persistence
- **Restricted Dashboard**: Authenticated area with Reports and Master Data.
- **Master Data Management**: Full CRUD capabilities for Provinces, Districts, Groups, Farmer Groups, and Users.

### 🚧 **Planned (Future Phases)**

- **Database Integration**: PostgreSQL with PostGIS for spatial data
- **Authentication System**: Role-based access control (Admin, Staff, Farmer Leader)
- **Land Mapping**: Interactive Leaflet maps with polygon drawing and area calculation
- **Assessment Forms**: Dynamic forms for BMP, HCV, HSE compliance tracking
- **GeoServer Integration**: WMS layers for deforestation alerts and spatial analysis
- **Reporting Module**: Excel/PDF export for WRI monthly reporting
- **CMS Integration**: Content management for articles and community updates

## Who Should Use This Documentation

- **Developers**: Technical team implementing and maintaining the system
- **Administrators**: WRI staff managing farmer data and system configuration
- **Farmers/Leaders**: Community members accessing their profiles and resources
- **Stakeholders**: Partners and sponsors monitoring project progress

## How to Use This Documentation

This documentation is organized by topics. Developers should start with [Architecture](#architecture) and [Configuration](#configuration). End users should focus on the [User Guide](#user-guide) sections.

## Contacting Support

For technical support or questions:
- **Email**: support@wri-indonesia.org
- **GitHub Issues**: [Project Repository](https://github.com/wri-indonesia/sh-mis)

---

# Getting Started

## System Requirements

### Development Environment
- **Node.js**: v18.17.0 or higher
- **npm**: v9.0.0 or higher
- **Operating System**: Windows 10+, macOS 12+, or Linux (Ubuntu 20.04+)

### Supported Browsers
- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions (macOS/iOS)

### Recommended Hardware
- 8GB RAM minimum
- 2GB available disk space
- Modern multi-core processor

## Installation & Setup

### 1. Clone Repository
```bash
git clone https://github.com/wri-indonesia/sh-mis.git
cd sh-mis
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create `.env.local`:
```env
# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Future: Database
# DATABASE_URL="postgresql://user:password@localhost:5432/sh_mis"

# Future: Authentication
# NEXTAUTH_SECRET="your-secret-key"
# NEXTAUTH_URL="http://localhost:3000"
```

### 4. Run Development Server
```bash
npm run dev
```

Access at: `http://localhost:3000`

### 5. Build for Production
```bash
npm run build
npm start
```

## Access and Authentication

Currently in **prototype phase** - authentication is mocked for demonstration purposes.

**Mock Login State**: Dashboard is always visible (simulated admin access)

Future implementation will include:
- NextAuth.js for authentication
- Role-based access control
- Social login options (optional)

---

# Architecture

## Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **UI Library**: ShadcnUI components
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript
- **State Management**: React Context API
- **Maps**: MapLibre GL JS + React Map GL

### Future Backend
- **Database**: PostgreSQL 15+ with PostGIS extension
- **ORM**: Prisma
- **Authentication**: NextAuth.js
- **API**: Next.js API Routes (RESTful)

## High Level Overview

```mermaid
graph TD
    A[User Browser] --> B[Next.js Frontend]
    B --> C[React Components]
    C --> D[Context Providers]
    D --> E[Language Context]
    D --> F[Theme Context]
    B --> G[Static Assets]
    
    C --> H[Future: API Routes]
    H --> I[Future: Prisma ORM]
    I --> J[Future: PostgreSQL + PostGIS]
```

## Project Structure

```
sh-mis/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── groups/[slug]/     # Dynamic farmer group profiles
│   │   ├── dashboard/         # Public Dashboard
│   │   ├── layout.tsx         # Root layout with Navbar/Footer
│   │   ├── page.tsx           # Landing page
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── Navbar.tsx         # Navigation with dropdowns
│   │   ├── Footer.tsx         # Global footer
│   │   ├── Hero.tsx           # Hero section with carousel
│   │   ├── CommunityProfile.tsx
│   │   ├── MediaActivities.tsx
│   │   ├── Stakeholders.tsx
│   │   └── PhotoCarousel.tsx
│   ├── contexts/              # React Context providers
│   │   ├── LanguageContext.tsx
│   │   └── ThemeContext.tsx
│   └── lib/                   # Data and utilities
│       ├── translations.ts    # Bilingual content
│       ├── menuData.ts        # Navigation structure
│       └── farmerGroupsData.ts # Farmer group profiles
├── public/
│   └── images/
│       ├── hero/             # Hero carousel images
│       ├── media/            # Activity gallery images
│       └── farmer-groups/    # Logo, team photos, activities
├── docs/                     # Documentation
│   ├── plan.md              # Implementation plan
│   └── tech-doc.md          # This file
└── package.json
```

## Component Architecture

### 1. Layout Components
- **Root Layout** (`app/layout.tsx`): Wraps entire app with providers, Navbar, Footer
- **Navbar**: Multi-level dropdown navigation, theme/language toggles
- **Footer**: Brand info, quick links, social media, contact

### 2. Page Components
- **Landing Page** (`app/page.tsx`): Hero, Community, Media, Stakeholders sections
- **Farmer Group Profile** (`app/groups/[slug]/page.tsx`): Dynamic profile pages

### 3. Context Providers
- **LanguageContext**: Manages EN/ID language state with localStorage persistence
- **ThemeContext**: Dark/light mode toggle with system preference detection

### 4. Data Structures
- **menuData.ts**: Centralized navigation menu structure
- **translations.ts**: All translatable strings organized by section
- **farmerGroupsData.ts**: Comprehensive farmer group data (history, stats, activities)

---

# Features & Components

## 1. Navigation System

### Multi-Level Dropdown Menus

**Desktop Behavior**: Hover-activated dropdowns with smooth transitions

**Mobile Behavior**: Click-to-expand accordion menus

#### Community Dropdown (2-Level)
- **Level 1**: 4 Districts (Kampar, Rokan Hulu, Siak, Pelalawan)
- **Level 2**: 31 Farmer Groups nested under districts
- **Navigation**: Links to `/groups/{slug}` profile pages

**Implementation**:
```typescript
// src/lib/menuData.ts
export const menuData = {
  community: {
    kampar: [
      { id: 'fps-sei-garo', name: 'FPS Sei Garo', href: '/groups/fps-sei-garo' },
      // ... 7 more groups
    ],
    rohul: [/* 10 groups */],
    siak: [/* 10 groups */],
    pelalawan: [/* 1 group */]
  },
  // ...
}
```

#### Activity Dropdown (1-Level)
- Training
- Best Management Practice (BMP)
- HSE / K3 (Health, Safety, Environment)
- High Conservation Value (HCV)
- Business Development
- GEDSI (Gender Equality, Disability, and Social Inclusion)

#### Media Dropdown (1-Level)
- Articles / Artikel
- Photos / Foto
- Videos / Video

### Responsive Navigation
- **Desktop**: Horizontal menu with dropdown panels
- **Tablet**: Responsive layout with adjusted spacing
- **Mobile**: Hamburger menu with nested accordions

## 2. Restricted Data Module (New)

### Dashboard Architecture
- **Route**: `/dashboard-restricted/[section]/[slug]` (Dynamic Routing)
- **Layout**: Sidebar navigation (`AppSidebar`) with collapsible groups.
- **Sections**:
  - **Dashboard**: Visual analytics (Basic KPI charts, thematic scorecards).
  - **Report**: Data tables with export functionality.
  - **Master Data**: CRUD interfaces for farmers, groups, and parcels.
  - **Setting**: Configuration for Provinces, Districts, Groups, and Users.
  - **CMS**: Content management for the public landing page.

### Generic View Components
To facilitate rapid prototyping, the system uses generic view components that render content based on the active route slug:

1. **DashboardGenericView**: Renders `recharts` graphs and `shadcn` scorecards based on `dummy-dashboard.ts` themes.
2. **ReportView**: Standardized table layout with "Export to XLS/PDF" actions using `dummy-report.ts`.
3. **MasterDataView**: Reusable CRUD table for master data entities (Farmers, Groups) using `dummy-master.ts`.
4. **CmsView**: Dedicated interface for managing Landing Page content (Home, Community, Activity, Media) using `dummy-cms.ts`.

### Enhanced Master Data Features
- **Farmer Group Detail**: Dedicated page `/master-data/farmer-groups/[uid]` with:
  - **Accordion Layout**: Organized sections for Overview, Map, Farmers List, Training, BMP, HSE, etc.
  - **Score Cards**: Key metrics (Total Farmers, Land Size, Active, Pending) with trend indicators.
  - **Farmers Table**: Client-side filtering, status tags (Registered/Reserved/inActive), **Certificate Management**, and view actions.
- **Farmer Detail Page**: Dedicated page `/master-data/farmers/[uid]` displaying farmer profile, certificate status, and associated land parcels.
- **Global Search**: `DataTable` component supports global filtering across multiple columns (e.g., Short Name, Full Name, District) with real-time status updates (e.g., "Filtered key : xxxx | xxx of xxx Farmer Groups").

### Data Layer (Prototype)
- **Location**: `src/lib/restrict-data/`
- **Purpose**: Static TypeScript objects that mimic future Database schema.
- **Files**:
  - `data-menu.ts`: Sidebar configuration.
  - `data-farmer.ts`: KPI and Chart data.
  - `dummy-dashboard.ts`: Thematic scorecards.
  - `dummy-cms.ts`: Public content data.

## 3. Bilingual Support

### Language Context
```typescript
// src/contexts/LanguageContext.tsx
type Language = 'en' | 'id';
const LanguageContext = createContext<{
  language: Language;
  toggleLanguage: () => void;
}>();
```

### Translation Structure
```typescript
// src/lib/translations.ts
export const translations = {
  en: {
    nav: { ... },
    hero: { ... },
    community: { ... }
  },
  id: { ... }
}
```

### Usage in Components
```tsx
const { language } = useLanguage();
const t = translations[language];
return <h1>{t.hero.title}</h1>;
```

## 3. Theme System

### Dark/Light Mode
- **Detection**: System preference via `prefers-color-scheme`
- **Persistence**: localStorage `theme` key
- **Toggle**: Navbar button with Sun/Moon icons
- **Implementation**: Tailwind CSS `dark:` variants

```typescript
// Theme initialization in layout.tsx
const theme = localStorage.getItem('theme') || 
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
if (theme === 'dark') {
  document.documentElement.classList.add('dark');
}
```

## 4. Farmer Group Profile Pages (CMS-Ready Structure)

### Dynamic Routing
- **Route**: `/groups/[slug]`
- **Params**: `slug` matches farmer group ID (e.g., `fps-sei-garo`)

### Enhanced Profile Data Structure

The farmer group data has been restructured to be **CMS-ready** with standardized, modular sections:

```typescript
interface FarmerGroupProfile {
  // Basic Information
  id: string;
  slug: string;
  name: string;
  district: 'kampar' | 'rohul' | 'siak' | 'pelalawan';
  established: number; // year
  legalStatus: { en: string; id: string };
  
  // Visual Assets
  assets: {
    logo: string;
    managementPhoto: string;
    bannerImage?: string;
  };
  
  // Statistics & Membership
  statistics: {
    totalFarmers: number;
    landParcels: number; // number of individual plots
    totalAreaHa: number;
    landTypes: {
      peat?: number;
      mineral?: number;
      mixed?: number;
    };
  };
  
  // Organizational Structure
  gapoktan: Array<{
    name: string;
    members: number;
    chairman?: string;
  }>;
  
  // Narrative Content (Bilingual)
  content: {
    history: { en: string; id: string };
    geography: { en: string; id: string };
    governance: { en: string; id: string };
    facilities: { en: string; id: string };
  };
  
  // Categorized Activities
  activities: {
    training: Activity[];
    bmp: Activity[];
    hcv: Activity[];
    hse: Activity[];
    businessDev: Activity[];
    gedsi: Activity[];
    sustainableStandards: Activity[];
  };
}

interface Activity {
  id: string;
  title: { en: string; id: string };
  description: { en: string; id: string };
  date: string; // ISO date
  images: string[];
  participants?: number;
  outcomes?: { en: string; id: string };
}
```

### Profile Page Sections

The profile page is organized into **8 main sections**:

#### 1. Header Section
- **Logo**: Farmer group logo with fallback placeholder
- **Title & District**: Name, location, year established
- **Legal Status Badge**: Registration/certification info
- **Quick Stats**: 4 stat badges
  - Total Farmers
  - Total Area (hectares)
  - Number of Gapoktan
  - Land Parcels

#### 2. Management Photo
- Fullscreen team/board photo
- Graceful fallback for missing images

#### 3. Profile Content (2-Column Layout)

**Left Column:**
- **History**: Formation story, milestones, achievements
- **Geography**: Coverage area, villages, land type breakdown
  - Visual badges for peat/mineral/mixed land types

**Right Column:**
- **Governance**: Organizational structure, leadership, decision-making
- **Facilities**: Office, equipment, infrastructure

#### 4. Gapoktan Cards
- Grid display of all associated farmer group associations
- Each card shows:
  - Gapoktan name
  - Number of members
  - Chairman name (if available)

#### 5. Activities Section with Category Filtering

**Activity Categories (8):**
1. **Training** - Capacity building programs
2. **BMP** - Best Management Practices
3. **HCV** - High Conservation Value protection
4. **HSE/K3** - Health, Safety, Environment
5. **Business Development** - Market access, financial literacy
6. **GEDSI** - Gender, Equality, Disability, Social Inclusion
7. **Certification** - RSPO, ISPO, sustainable standards

**Activity Tab Features:**
- Click to filter activities by category
- Badge counts showing number of activities per category
- "All Activities" tab shows chronologically sorted combined list

**Activity Cards Display:**
- Image with hover zoom effect
- Title and description
- Date (formatted per language)
- Participant count
- Outcomes/impact (if available)

### Sample Profiles (5 Groups)

Detailed profile data has been created for:

1. **FPS Sei Garo** (Kampar)
   - 350 farmers, 1,150 ha (peat: 680 ha, mineral: 470 ha)
   - 3 gapoktan, 420 land parcels
   - Activities: Training, BMP, HSE

2. **KP Kusuma Bakti Mandiri** (Kampar)
   - 285 farmers, 920 ha (all mineral)
   - 2 gapoktan, 340 land parcels
   - Activities: Business Dev, Certification (RSPO)

3. **KUD Intan Makmur** (Rokan Hulu)
   - 420 farmers, 1,580 ha (mineral: 1,450 ha, mixed: 130 ha)
   - 3 gapoktan, 530 land parcels
   - Activities: HCV, HSE

4. **KPM Karya Maju** (Siak)
   - 310 farmers, 845 ha (all peat)
   - 2 gapoktan, 380 land parcels
   - Focus: Peatland management, fire prevention

5. **KUD Mulia** (Pelalawan)
   - 145 farmers, 490 ha (mineral: 320 ha, mixed: 170 ha)
   - 1 gapoktan, 180 land parcels
   - Focus: Biodiversity conservation, HCV mapping

### CMS Migration Readiness

This structure is designed for seamless CMS integration (Phase 6):

**Benefits:**
- ✅ Uniform schema across all 31 farmer groups
- ✅ Modular sections (easy to add/remove)
- ✅ Bilingual content throughout
- ✅ Categorized activities with metadata
- ✅ Direct mapping to CMS content types
- ✅ Scalable for new activity categories

**Recommended CMS Platforms:**
- **Strapi** (Headless CMS) - Most flexible
- **Sanity.io** - Excellent for structured content
- **Prisma + Custom Admin** - Self-hosted option
- **Contentful** - Enterprise-grade

**See**: `docs/cms_structure_plan.md` for detailed CMS schema and migration guide.

## 5. Landing Page Components

### Hero Section
- **Background**: Photo carousel with 4 hero images
- **Overlay**: Dark gradient for text readability
- **Content**: Title, subtitle, CTA button
- **Auto-play**: 5-second interval carousel

### Community Profile
- **Layout**: 4 district cards in responsive grid
- **Stats**: Members, land area, farmer groups count
- **Interaction**: Hover effects, click to expand (future)

### Media Activities
- **Gallery**: 3 activity images with captions
- **Cards**: Image, title, description with hover effects
- **Topics**: BMP training, field training, sharing sessions

### Stakeholders
- **Impact Stats**: 4 key metrics (groups, farmers, hectares, partners)
- **Description**: Partnership narrative
- **Future**: Partner logos and testimonials

---

# Configuration

## Environment Variables

```env
# Required
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Future: Database
DATABASE_URL="postgresql://user:pass@host:5432/db"

# Future: Authentication
NEXTAUTH_SECRET="random-secret-32-chars"
NEXTAUTH_URL="http://localhost:3000"

# Future: GeoServer
GEOSERVER_URL="http://localhost:8080/geoserver"
GEOSERVER_USERNAME="admin"
GEOSERVER_PASSWORD="password"
```

## Application Settings

### Theme Configuration
- Default: System preference
- Options: `light`, `dark`
- Storage: localStorage key `theme`

### Language Configuration
- Default: `en` (English)
- Options: `en`, `id` (Indonesian)
- Storage: localStorage key `language`

### Image Configuration
```javascript
// next.config.js
module.exports = {
  images: {
    domains: ['localhost'],
    formats: ['image/avif', 'image/webp'],
  },
}
```

---

# Database Schema

## Current Implementation

### Core Tables

#### tbl-province
- `id`: Int (PK)
- `uid`: UUID
- `kode`: String (Unique)
- `name`: String

#### tbl-district
- `id`: Int (PK)
- `uid`: UUID
- `kode`: String (Unique)
- `name`: String
- `provinceId`: UUID (FK)

#### tbl-farmer-group
- `id`: Int (PK)
- `uid`: UUID
- `fgCode`: String (Unique)
- `shortName`: String
- `fullName`: String
- `districtKode`: String (FK)

#### tbl-group
- `id`: Int (PK)
- `uid`: UUID
- `abrv`: String (Unique)
- `name`: String
- `is_active`: Boolean

#### tbl-user
- `id`: Int (PK)
- `uid`: UUID
- `email`: String (Unique)
- `name`: String
- `groupId`: UUID (FK, Optional)

#### tbl-farmer

- `id`: Int (PK)
- `uid`: UUID
- `fgId`: UUID (FK)
- `displayFarmerID`: String (Unique)
- `name`: String
- `status`: String
- `certificate`: String? (Comma-separated or Single Value)

#### tbl-land-parcel

- `id`: Int (PK)
- `uid`: UUID
- `fid`: UUID (FK)
- `displayLandParcelID`: String
- `size_ha`: Float

## Entity Relationship Diagram

```mermaid
erDiagram
    PROVINCE ||--o{ DISTRICT : contains
    DISTRICT ||--o{ FARMER_GROUP : contains
    ROLE ||--o{ USER : assigned_to
    GROUP ||--o{ USER : belongs_to
    FARMER_GROUP ||--o{ FARMER : has_members
    FARMER ||--o{ LAND_PARCEL : owns
```

---

# API Documentation

## Future RESTful API Endpoints

### Farmer Groups

#### GET /api/groups
Get all farmer groups with filters

**Query Parameters**:
- `district`: Filter by district (kampar, rohul, siak, pelalawan)
- `limit`: Results per page (default: 20)
- `page`: Page number

**Response**:
```json
{
  "data": [
    {
      "id": "uuid",
      "slug": "fps-sei-garo",
      "name": "FPS Sei Garo",
      "district": "Kampar",
      "members": 350,
      "landArea": 1150
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 31
  }
}
```

#### GET /api/groups/:slug
Get single farmer group details

**Response**:
```json
{
  "id": "uuid",
  "slug": "fps-sei-garo",
  "name": "FPS Sei Garo",
  "district": "Kampar",
  "history": {
    "en": "...",
    "id": "..."
  },
  "members": 350,
  "landArea": 1150,
  "gapoktan": [...],
  "activities": [...]
}
```

---

# Deployment

## Production Build

```bash
# Build
npm run build

# Start production server
npm start
```

## Environment Setup

### Vercel (Recommended)
1. Connect GitHub repository
2. Configure environment variables
3. Deploy automatically on push to `main`

### Docker (Alternative)
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

# Troubleshooting

## Common Issues

### Images Not Loading (404)
**Problem**: Images showing 404 errors
**Solution**: 
1. Check folder structure: `public/images/farmer-groups/{group-id}/`
2. Ensure no `{brackets}` in folder names
3. Verify image file extensions match data (`jpg` vs `jpeg`)

### Dark Mode Not Persisting
**Problem**: Theme resets on page refresh
**Solution**:
1. Check localStorage is enabled in browser
2. Verify script in `layout.tsx` runs before render
3. Clear browser cache

### Navigation Dropdowns Disappearing
**Problem**: Nested dropdowns close when hovering
**Solution**:
1. Check spacing between parent and child menus (use `ml-0.5`)
2. Add `padding-right` to parent items for hover area
3. Verify `group-hover` classes are correct

---

# Change Log

## Version 1.0.0 (Phase 1) - January 2026

### Added
- ✅ Next.js 14 setup with App Router
- ✅ Responsive landing page with hero carousel
- ✅ Multi-level dropdown navigation (31 farmer groups)
- ✅ Bilingual support (EN/ID) across entire app
- ✅ Dark/Light mode theme switching
- ✅ CMS-ready farmer group profile structure:
  - 5 sample profiles with comprehensive data
  - Standardized sections: Basic Info, Statistics, Gapoktan, Content, Activities
  - Enhanced fields: Governance, Facilities, Land Parcels, Land Types, Chairman info
  - 8 activity categories with filtering (Training, BMP, HCV, HSE/K3, Business Dev, GEDSI, Certification)
  - Activity outcomes and participant tracking
  - 2-column responsive profile layout
  - Activity tab navigation with badge counts
- ✅ Community profile section with 4 districts
- ✅ Media activities gallery
- ✅ Stakeholder section with impact stats
- ✅ Global Navbar and Footer in root layout
- ✅ Folder structure for farmer group images
- ✅ TypeScript type safety throughout
- ✅ CMS migration documentation and schema

### Planned (Phase 2+)
- [ ] PostgreSQL database integration
- [ ] User authentication and authorization
- [ ] Interactive land mapping with Leaflet

## Version 1.2.0 (Restricted Dashboard) - February 2026

### Added
- ✅ **Restricted Dashboard Module**: New layout with Sidebar navigation.
- ✅ **Dynamic Routing**: Unified router for Dashboard, Report, Master Data, and CMS.
- ✅ **Generic Views**: Reusable components for Charts, Reports, and CRUD tables.
- ✅ **Dummy Data Layer**: Structured static data mimicking future DB schema.
- ✅ **CMS Prototype**: Content management for Home, Community, Activity, and Media sections.
- ✅ **Interactive Charts**: Recharts integration for Farmer & Land data with toggleable series.

## Version 1.1.0 (Phase 1.5) - February 2026

### Added
- ✅ **Public Dashboard**:
  - Full-screen interactive map (MapLibre)
  - Layer toggles (Farmer Groups, Mills, Admin Boundaries)
  - Analytical sidebars (Summary charts, Detail views)
  - Mobile/Tablet responsive adjustments
- ✅ **View System**:
  - Toggle between Card (Grid) and List views
  - Persistent user preference (localStorage)
  - Optmized mobile list layout (compact rows)
- ✅ **Data Updates**:
  - Added new farmer groups (Kampar district)
  - Integrated "Pangkalan Baru Sejahtera"
  - Standardized image fallbacks across the app

---

# Appendices

## Abbreviations

- **BMP**: Best Management Practice
- **HCV**: High Conservation Value
- **HSE / K3**: Health, Safety, Environment / Kesehatan dan Keselamatan Kerja
- **GEDSI**: Gender Equality, Disability, and Social Inclusion
- **WRI**: World Resources Institute
- **MIS**: Management Information System
- **FFB**: Fresh Fruit Bunch
- **RSPO**: Roundtable on Sustainable Palm Oil
- **Gapoktan**: Gabungan Kelompok Tani (Farmer Group Association)

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)
- [WRI Indonesia](https://www.wri-indonesia.org/)

---

**Last Updated**: January 30, 2026  
**Version**: 1.0.0  
**Maintained By**: WRI Indonesia Development Team
