# 🚀 Implementation Plan - WRI Sawit Swadaya MIS

## Phase 0: Setup ✅

- [x] Initialize Next.js 14 (App Router) + ShadcnUI + Lucide Icons.

## Phase 1: Prototype Landing Page ✅

- [x] Navbar & Footer (Mobile Responsive):
  - [x] Navigation Items: Community, Media, Dashboard (conditional - shown when logged in), Login
  - [x] Dropdown Navigation Menus:
    - [x] Community: 4 districts (Kampar-8, Rokan Hulu-10, Siak-10, Pelalawan-1) with 31 farmer groups
    - [x] Activity: 6 categories (Training, BMP, HSE/K3, HCV, Business Dev, GEDSI)
    - [x] Media: 3 categories (Articles, Photos, Videos)
  - [x] Dual Language Toggle (EN-English / ID-Indonesia)
  - [x] Light/Dark Mode Toggle
- [x] Home Page: Hero Carousel + Narrative Sections emphasizing:
  - [x] Hero Section with Photo Carousel Background (overlay design with gradient and blur)
  - [x] Community Profile (4 districts: Kampar, Rohul, Siak, Pelalawan)
  - [x] Media & Activities (photo galleries with 3 generated images, success stories)
  - [x] Stakeholder Support (partners, sponsors, collaborators)
- [x] Farmer Group Profile Pages (CMS-Ready Structure):
  - [x] Created 5 sample profiles (FPS Sei Garo, KP Kusuma Bakti Mandiri, KUD Intan Makmur, KPM Karya Maju, KUD Mulia)
  - [x] Standardized data structure: Basic Info, Statistics, Gapoktan, Content, Categorized Activities
  - [x] Enhanced fields: Governance, Facilities, Land Parcels, Land Types breakdown, Chairman info
  - [x] Bilingual content (EN/ID): History, Geography, Governance, Facilities
  - [x] Activity categorization with filtering: Training, BMP, HCV, HSE/K3, Business Dev, GEDSI, Certification
  - [x] Responsive 2-column layout with organized sections
  - [x] Activity tabs with counts and outcomes
  - [x] Integrated with dropdown navigation
- [x] Community Page: Filter based on 4 Districts.
- [x] Media Page: Activities, events, and community stories.
- [ ] Blog/Article System (CMS integration in Phase 6).

### Restricted Data Prototype (Login Required) ✅

- [x] Authentication Pages:
  - [x] Sign In Page.
  - [x] Sign Up Page.
  - [x] **Restricted Data Module** (Layout: `sidebar-07`):
    - *Implemented using static dummy data in `src/lib/restrict-data` mirroring future DB schema.*
  - [x] **Dashboard**:
    - [x] Basic KPI (Chart & Filter implemented).
    - [x] Thematic Views (Training, BMP, etc.) using `DashboardGenericView`.
  - [x] **Report**: Table view with Export to XLS/PDF actions (`ReportView`).
  - [x] **Master Data**: CRUD tables for Farmers, Groups, Parcels (`MasterDataView`).
  - [x] **CMS**: Content management for Home, Community, Activity, Media (`CmsView`).
  - [x] **Management User**: User management placeholder.
  - [x] **Settings**: Settings placeholder.

## Phase 1.a: Enhanced UX & Dashboard ✅

- [x] View Toggle System:
  - [x] Card vs List view toggle (Community, Activities, Media).
  - [x] View state persistence (localStorage).
  - [x] Mobile optimization for list views (compact rows).
- [x] Public Dashboard:
  - [x] Interactive Map (MapLibre GL JS) with Riau province focus.
  - [x] Farmer Group & Mill locations visualization.
  - [x] Analytical Sidebars (Summary & Details).
  - [x] Dual-language support for dashboard.
  - [x] Responsive layout for Mobile/Tablet.
- [x] Image Management:
  - [x] Fallback system for missing images.
  - [x] Standardized aspect ratios.

## Phase 2: Core Infra & Database

- [ ] Setup PostgreSQL & Enable PostGIS extension: `CREATE EXTENSION postgis;`.
- [x] Prisma Sync: Deploy initial schema (`Province`, `District`, `Group`, `FarmerGroup`, `User`).
- [ ] Auth: Setup Middleware for Role-Based Access (admin, staff, user).

## Phase 3: Master Data & Admin UI

- [x] Create Institution & Farmer Management (CRUD).
    - [x] **Master Data Module**:
        - [x] **Provinces**: CRUD operations for provincial data.
        - [x] **Districts**: CRUD operations linked to Provinces.
        - [x] **Groups**: Management of organization groups.
      - [x] **Farmer Groups**: Data management linked to Districts (including `fgCode`, `shortName`).
        - [x] **Detail Page**: Accordion layout (Map, Overview, List, Activities), Score Cards, Farmers Table with Status Tags.
        - [x] **Certificate Management**: Track RSPO/ISPO certificates for individual farmers.
        - [x] **Search**: Global search (Short Name, Full Name, District) with status text.
      - [x] **Farmers**: Individual farmer management.
        - [x] **Detail Page**: Profile view with personal info, group association, and Land Parcel list.
      - [x] **Users**: User management with Role and Group assignment.
    - [x] **Shared Components**: Reusable `DataTable` with sorting, filtering, pagination, and global search.
    - [x] **Server Actions**: Secure, server-side data mutations.
- [ ] Implement Land Mapping UI:
  - [ ] Map component with Leaflet.
  - [ ] Draw Tools (Polygon) to save to PostGIS.
  - [ ] Area calculation logic ($Area = \text{ST_Area(geom)} / 10000$).

## Phase 4: GeoServer & Spatial Analysis

- [ ] Setup GeoServer Workspace & Stores connected to PostGIS.
- [ ] Publish WMS Layers: `land_parcels`, `deforestation_alerts`, `hotspots`.
- [ ] Integrated Dashboard: Display "Total Area by District" using Prisma GroupBy.

## Phase 5: Assessment & Reporting

- [ ] Build Dynamic Forms for BMP, HCV, and HSE using `react-hook-form` + `zod`.
- [ ] Logic for GHG Estimation: Carbon calculator based on soil type and land area.
- [ ] Export Module: Excel/PDF generator for WRI monthly reporting.

## Phase 6: Landing Page & CMS

- [ ] Public Page: Hero Carousel with Contentful or Local Prisma CMS.
- [ ] District Spotlight: Filterable cards for 4 regions.
- [ ] Discussion Room: Simple threaded comments for farmer groups.