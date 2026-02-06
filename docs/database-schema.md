# Database Schema

## Core Tables

### Province (`tbl-province`)
- `id`: Int (Autoincrement, PK)
- `uid`: String (UUID, Unique)
- `kode`: String (Unique) - Administrative code
- `name`: String
- `districts`: Relation to District[]

### District (`tbl-district`)
- `id`: Int (Autoincrement, PK)
- `uid`: String (UUID, Unique)
- `kode`: String (Unique) - Administrative code
- `name`: String
- `provinceId`: String (FK -> Province.uid)
- `province`: Relation to Province
- `farmerGroups`: Relation to FarmerGroup[]

### Group (`tbl-group`)
- `id`: Int (Autoincrement, PK)
- `uid`: String (UUID, Unique)
- `abrv`: String (Unique) - Abbreviation
- `name`: String
- `is_active`: Boolean
- `users`: Relation to User[]

### Farmer Group (`tbl-farmer-group`)
- `id`: Int (Autoincrement, PK)
- `uid`: String (UUID, Unique)
- `fgCode`: String (Unique) - Farmer Group Code/Slug
- `abrv`: String
- `shortName`: String
- `fullName`: String
- `districtKode`: String (FK -> District.kode)
- `district`: Relation to District

### Role (`tbl-role`)
- `id`: Int (Autoincrement, PK)
- `uid`: String (UUID, Unique)
- `name`: String (Unique)
- `users`: Relation to User[]

### User (`tbl-user`)
- `id`: Int (Autoincrement, PK)
- `uid`: String (UUID, Unique)
- `email`: String (Unique)
- `name`: String
- `password`: String
- `roleId`: String (FK -> Role.uid)
- `role`: Relation to Role
- `groupId`: String? (FK -> Group.uid) - Optional
- `group`: Relation to Group?

## Entity Relationship Diagram

```mermaid
erDiagram
    PROVINCE ||--o{ DISTRICT : contains
    DISTRICT ||--o{ FARMER_GROUP : contains
    ROLE ||--o{ USER : assigned_to
    GROUP ||--o{ USER : belongs_to

    PROVINCE {
        string uid PK
        string kode
        string name
    }

    DISTRICT {
        string uid PK
        string kode
        string name
        string provinceId FK
    }

    FARMER_GROUP {
        string uid PK
        string fgCode
        string shortName
        string fullName
        string districtKode FK
    }

    GROUP {
        string uid PK
        string abrv
        string name
        boolean is_active
    }

    ROLE {
        string uid PK
        string name
    }

    USER {
        string uid PK
        string email
        string name
        string roleId FK
        string groupId FK
    }
```