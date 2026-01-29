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
- [x] Farmer Group Profile Pages:
    - [x] Created 5 sample profiles (FPS Sei Garo, KP Kusuma Bakti Mandiri, KUD Intan Makmur, KPM Karya Maju, KUD Mulia)
    - [x] Bilingual content with history, geography, members, land area, gapoktan associations
    - [x] Activity cards with descriptions
    - [x] Responsive design with logo, team photo sections
    - [x] Integrated with dropdown navigation
- [ ] Community Page: Filter based on 4 Districts.
- [ ] Media Page: Activities, events, and community stories.
- [ ] Blog/Article System (CMS integration in Phase 6).

## Phase 2: Core Infra & Database
- [ ] Setup PostgreSQL & Enable PostGIS extension: `CREATE EXTENSION postgis;`.
- [ ] Prisma Sync: Deploy initial schema and handle `geometry` types via migration.
- [ ] Auth: Setup Middleware for Role-Based Access (Staff vs Leader).

## Phase 3: Master Data & Admin UI
- [ ] Create Institution & Farmer Management (CRUD).
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