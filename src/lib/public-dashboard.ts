
export interface DashboardSummary {
    totalFarmers: number;
    totalAreaHa: number;
    totalProductionTon: number;
    productivityTonHa: number;
    totalGapoktan: number;
    totalMills: number;
    productionTrend: { month: string; value: number }[];
    topMills: { name: string; value: number }[];
}

export interface Coordinates {
    lat: number;
    lng: number;
}

export interface FarmerGroupFeature {
    id: string;
    name: string;
    coordinates: Coordinates;
    farmers: number;
    area: number;
    production: number;
    district: string;
}

export interface MillFeature {
    id: string;
    name: string;
    coordinates: Coordinates;
    capacity: number;
    company: string;
}

export const DASHBOARD_SUMMARY: DashboardSummary = {
    totalFarmers: 1250,
    totalAreaHa: 3450.5,
    totalProductionTon: 15600,
    productivityTonHa: 4.5,
    totalGapoktan: 45,
    totalMills: 8,
    productionTrend: [
        { month: 'Jan', value: 1200 },
        { month: 'Feb', value: 1350 },
        { month: 'Mar', value: 1250 },
        { month: 'Apr', value: 1400 },
        { month: 'May', value: 1500 },
        { month: 'Jun', value: 1600 },
        { month: 'Jul', value: 1550 },
        { month: 'Aug', value: 1700 },
        { month: 'Sep', value: 1800 },
        { month: 'Oct', value: 1750 },
        { month: 'Nov', value: 1650 },
        { month: 'Dec', value: 1850 },
    ],
    topMills: [
        { name: 'SEJA', value: 4500 },
        { name: 'ALAM', value: 3800 },
        { name: 'RIAU', value: 3200 },
        { name: 'SAWI', value: 2100 },
        { name: 'TANI', value: 1500 },
    ]
};

export const FARMER_GROUPS: FarmerGroupFeature[] = [
    // Kampar (Lat: ~0.1-0.7, Lng: ~101.1-101.6)
    { id: 'fps-sei-garo', name: 'FPS Sei Garo', coordinates: { lat: 0.5234, lng: 101.4521 }, farmers: 350, area: 1150, production: 18400, district: 'Kampar' },
    { id: 'kp-kusuma-bakti', name: 'KP Kusuma Bakti', coordinates: { lat: 0.4892, lng: 101.3812 }, farmers: 180, area: 450, production: 7200, district: 'Kampar' },
    { id: 'apss-sei-galuh', name: 'APSS Sei Galuh', coordinates: { lat: 0.6120, lng: 101.5543 }, farmers: 150, area: 400, production: 0, district: 'Kampar' },
    { id: 'kud-karya-sembada', name: 'KUD Karya Sembada', coordinates: { lat: 0.3540, lng: 101.2567 }, farmers: 200, area: 500, production: 0, district: 'Kampar' },
    { id: 'kud-hasrat-jaya-pagaruyung', name: 'KUD Hasrat Jaya Pagaruyung', coordinates: { lat: 0.5891, lng: 101.6234 }, farmers: 180, area: 450, production: 0, district: 'Kampar' },
    { id: 'fortaski', name: 'FORTASKI', coordinates: { lat: 0.4210, lng: 101.1560 }, farmers: 300, area: 700, production: 0, district: 'Kampar' },
    { id: 'kopsa-tri-manunggal', name: 'Kopsa Tri Manunggal', coordinates: { lat: 0.5512, lng: 101.4889 }, farmers: 160, area: 380, production: 0, district: 'Kampar' },
    { id: 'teratai-sawit-lestari', name: 'Teratai Sawit Lestari', coordinates: { lat: 0.2890, lng: 101.3210 }, farmers: 120, area: 280, production: 0, district: 'Kampar' },

    // Rokan Hulu (Lat: ~0.8-1.3, Lng: ~100.3-100.8)
    { id: 'kpm-karya-maju', name: 'KPM Karya Maju', coordinates: { lat: 1.1523, lng: 100.6542 }, farmers: 500, area: 1200, production: 21600, district: 'Rokan Hulu' },
    { id: 'kud-tujuh-permata', name: 'KUD Tujuh Permata', coordinates: { lat: 0.9845, lng: 100.4521 }, farmers: 250, area: 600, production: 0, district: 'Rokan Hulu' },
    { id: 'kud-sawit-sejahtera', name: 'KUD Sawit Sejahtera', coordinates: { lat: 1.2560, lng: 100.7890 }, farmers: 220, area: 550, production: 0, district: 'Rokan Hulu' },
    { id: 'fpss-semarak-mudo', name: 'FPSS Semarak Mudo', coordinates: { lat: 0.8560, lng: 100.3450 }, farmers: 180, area: 400, production: 0, district: 'Rokan Hulu' },
    { id: 'ppks-tayo-barokah', name: 'PPKS Tayo Barokah', coordinates: { lat: 1.0500, lng: 100.5670 }, farmers: 130, area: 300, production: 0, district: 'Rokan Hulu' },
    { id: 'apkasa-rayon-skpe', name: 'APKASA Rayon SKPE', coordinates: { lat: 1.1890, lng: 100.8210 }, farmers: 140, area: 320, production: 0, district: 'Rokan Hulu' },
    { id: 'aspek-ras', name: 'ASPEK RAS', coordinates: { lat: 0.9120, lng: 100.4120 }, farmers: 110, area: 260, production: 0, district: 'Rokan Hulu' },
    { id: 'aspek-rsb', name: 'ASPEK RSB', coordinates: { lat: 1.0980, lng: 100.6780 }, farmers: 115, area: 270, production: 0, district: 'Rokan Hulu' },
    { id: 'aspek-kre', name: 'ASPEK KRE', coordinates: { lat: 1.2100, lng: 100.5430 }, farmers: 105, area: 250, production: 0, district: 'Rokan Hulu' },
    { id: 'citra-gemilang', name: 'Citra Gemilang', coordinates: { lat: 0.8900, lng: 100.7200 }, farmers: 170, area: 420, production: 0, district: 'Rokan Hulu' },

    // Siak (Lat: ~0.8-1.2, Lng: ~101.8-102.3)
    { id: 'kud-intan-makmur', name: 'KUD Intan Makmur', coordinates: { lat: 0.9540, lng: 102.1230 }, farmers: 120, area: 280, production: 3900, district: 'Siak' },
    { id: 'apkasdu', name: 'APKASDU', coordinates: { lat: 1.1200, lng: 102.2540 }, farmers: 190, area: 460, production: 0, district: 'Siak' },
    { id: 'apksmb', name: 'APKSMB', coordinates: { lat: 0.8500, lng: 102.0120 }, farmers: 185, area: 450, production: 0, district: 'Siak' },
    { id: 'asermisas', name: 'ASERMISAS', coordinates: { lat: 1.0500, lng: 102.1890 }, farmers: 165, area: 400, production: 0, district: 'Siak' },
    { id: 'apkssb', name: 'APKSSB', coordinates: { lat: 0.9800, lng: 101.9500 }, farmers: 175, area: 430, production: 0, district: 'Siak' },
    { id: 'apkasaiber', name: 'APKASAIBER', coordinates: { lat: 1.1500, lng: 102.0800 }, farmers: 145, area: 350, production: 0, district: 'Siak' },
    { id: 'aspeksab', name: 'ASPEKSAB', coordinates: { lat: 0.8900, lng: 102.2900 }, farmers: 155, area: 380, production: 0, district: 'Siak' },
    { id: 'kp-pksj', name: 'KP PKSJ', coordinates: { lat: 0.9200, lng: 102.1500 }, farmers: 200, area: 500, production: 0, district: 'Siak' },
    { id: 'kbj', name: 'KBJ', coordinates: { lat: 1.0800, lng: 102.0500 }, farmers: 160, area: 380, production: 0, district: 'Siak' },
    { id: 'ksj', name: 'KSJ', coordinates: { lat: 0.9400, lng: 101.9800 }, farmers: 0, area: 0, production: 0, district: 'Siak' },

    // Pelalawan (Lat: ~0.2-0.6, Lng: ~101.7-102.2)
    { id: 'kud-mulia', name: 'KUD Mulia', coordinates: { lat: 0.4500, lng: 101.9500 }, farmers: 220, area: 490, production: 7800, district: 'Pelalawan' },
    // Adding dummy Pelalawan points to demonstrate randomness if more data existed, or just ensuring this one is well placed
    // Assuming only 1 Pelalawan group for now as per data
];

export const MILLS: MillFeature[] = [
    { id: 'm-1', name: 'PT Sejahtera Sawit', coordinates: { lat: 0.557, lng: 101.60 }, capacity: 45, company: 'Sejahtera Group' },
    { id: 'm-2', name: 'PT Alam Hijau', coordinates: { lat: 1.057, lng: 100.45 }, capacity: 60, company: 'Alam Group' },
    { id: 'm-3', name: 'PT Riau Makmur', coordinates: { lat: 0.757, lng: 102.00 }, capacity: 30, company: 'Riau Corp' },
    { id: 'm-4', name: 'PT Sawit Jaya', coordinates: { lat: 0.450, lng: 101.20 }, capacity: 40, company: 'Jaya Group' },
    { id: 'm-5', name: 'PT Tani Subur', coordinates: { lat: 1.150, lng: 100.90 }, capacity: 35, company: 'Tani Corp' },
    { id: 'm-6', name: 'PT Karya Maju', coordinates: { lat: 0.850, lng: 101.40 }, capacity: 55, company: 'Karya Group' },
    { id: 'm-7', name: 'PT Harapan Bangsa', coordinates: { lat: 0.650, lng: 101.80 }, capacity: 50, company: 'Harapan Corp' },
    { id: 'm-8', name: 'PT Sinar Mas', coordinates: { lat: 1.250, lng: 100.60 }, capacity: 70, company: 'Sinar Group' },
    { id: 'm-9', name: 'PT Bumi Permai', coordinates: { lat: 0.350, lng: 101.30 }, capacity: 45, company: 'Bumi Corp' },
    { id: 'm-10', name: 'PT Agro Lestari', coordinates: { lat: 0.950, lng: 101.10 }, capacity: 65, company: 'Agro Group' },
];
