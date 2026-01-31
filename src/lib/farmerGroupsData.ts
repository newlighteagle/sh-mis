// CMS-Ready Farmer Group Data Structure
// Standardized format for all 31 farmer groups
import { farmerGroupsData } from "./data";

export interface Activity {
    id: string;
    title: { en: string; id: string };
    description: { en: string; id: string };
    date: string; // ISO date format
    images: string[];
    participants?: number;
    outcomes?: { en: string; id: string };
}

export interface Gapoktan {
    name: string;
    members: number;
    chairman?: string;
}

export interface FarmerGroupProfile {
    // Basic Information
    id: string;
    slug: string;
    name: string;
    district: 'kampar' | 'rohul' | 'siak' | 'pelalawan';
    established: number;
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
        landParcels: number;
        totalAreaHa: number;
        productionTbs?: number; // ton/year
        productivity?: number; // ton/ha/year
        landTypes: {
            peat?: number;
            mineral?: number;
            mixed?: number;
        };
    };

    // Organizational Structure
    gapoktan: Gapoktan[];

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

export { farmerGroupsData };

// Helper function to get all farmer groups as array
export const getAllFarmerGroups = (): FarmerGroupProfile[] => {
    return Object.values(farmerGroupsData);
};

// Helper function to get farmer groups by district
export const getFarmerGroupsByDistrict = (district: 'kampar' | 'rohul' | 'siak' | 'pelalawan'): FarmerGroupProfile[] => {
    return getAllFarmerGroups().filter(group => group.district === district);
};

// Helper function to get farmer group by slug
export const getFarmerGroupBySlug = (slug: string): FarmerGroupProfile | undefined => {
    return farmerGroupsData[slug];
};

// District metadata for UI
export const districtMetadata = {
    kampar: {
        en: 'Kampar',
        id: 'Kampar',
        description: {
            en: 'Farmer groups working in Kampar Regency',
            id: 'Kelompok tani yang beroperasi di Kabupaten Kampar'
        }
    },
    rohul: {
        en: 'Rokan Hulu',
        id: 'Rokan Hulu',
        description: {
            en: 'Farmer groups working in Rokan Hulu Regency',
            id: 'Kelompok tani yang beroperasi di Kabupaten Rokan Hulu'
        }
    },
    siak: {
        en: 'Siak',
        id: 'Siak',
        description: {
            en: 'Farmer groups working in Siak Regency',
            id: 'Kelompok tani yang beroperasi di Kabupaten Siak'
        }
    },
    pelalawan: {
        en: 'Pelalawan',
        id: 'Pelalawan',
        description: {
            en: 'Farmer groups working in Pelalawan Regency',
            id: 'Kelompok tani yang beroperasi di Kabupaten Pelalawan'
        }
    }
};


export function getDistrictStats(district: string) {
    const groups = getFarmerGroupsByDistrict(district as any);
    const totalFarmers = groups.reduce((acc, curr) => acc + curr.statistics.totalFarmers, 0);
    const totalAreaHa = groups.reduce((acc, curr) => acc + curr.statistics.totalAreaHa, 0);

    return {
        groups: groups.length,
        farmers: totalFarmers,
        areaHa: totalAreaHa
    };
}
