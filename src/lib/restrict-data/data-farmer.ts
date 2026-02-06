export interface KPI {
  id: string;
  label: string;
  value: number | string;
  icon: string;
}

// KPI Data per District
export const kpiDataByDistrict: Record<string, KPI[]> = {
  'all': [
    { id: '1', label: 'Parcel Data - Provide by UL', value: 20306, icon: 'Map' },
    { id: '2', label: 'Parcel Data - Verified by WRI', value: 11986, icon: 'ShieldCheck' },
    { id: '2a', label: 'Mapped Area - Provide by UL (ha)', value: 45200, icon: 'Map' },
    { id: '2b', label: 'Mapped Area - Verified by WRI (ha)', value: 22150, icon: 'ShieldCheck' },
    { id: '3', label: 'Total Farmer - Provide by UL', value: 9852, icon: 'Users' },
    { id: '4', label: 'Total Farmer - Registered', value: 6787, icon: 'UserCheck' },
    { id: '5', label: 'ICS Established', value: 30, icon: 'Building' },
    { id: '6', label: 'ICS Certified RSPO', value: 4, icon: 'Award' },
  ],
  'kampar': [
    { id: '1', label: 'Parcel Data - Provide by UL', value: 5400, icon: 'Map' },
    { id: '2', label: 'Parcel Data - Verified by WRI', value: 3200, icon: 'ShieldCheck' },
    { id: '2a', label: 'Mapped Area - Provide by UL (ha)', value: 12500, icon: 'Map' },
    { id: '2b', label: 'Mapped Area - Verified by WRI (ha)', value: 6100, icon: 'ShieldCheck' },
    { id: '3', label: 'Total Farmer - Provide by UL', value: 2100, icon: 'Users' },
    { id: '4', label: 'Total Farmer - Registered', value: 1800, icon: 'UserCheck' },
    { id: '5', label: 'ICS Established', value: 9, icon: 'Building' },
    { id: '6', label: 'ICS Certified RSPO', value: 2, icon: 'Award' },
  ],
  'rokan-hulu': [
    { id: '1', label: 'Parcel Data - Provide by UL', value: 8100, icon: 'Map' },
    { id: '2', label: 'Parcel Data - Verified by WRI', value: 4500, icon: 'ShieldCheck' },
    { id: '2a', label: 'Mapped Area - Provide by UL (ha)', value: 18200, icon: 'Map' },
    { id: '2b', label: 'Mapped Area - Verified by WRI (ha)', value: 9300, icon: 'ShieldCheck' },
    { id: '3', label: 'Total Farmer - Provide by UL', value: 3500, icon: 'Users' },
    { id: '4', label: 'Total Farmer - Registered', value: 2400, icon: 'UserCheck' },
    { id: '5', label: 'ICS Established', value: 10, icon: 'Building' },
    { id: '6', label: 'ICS Certified RSPO', value: 1, icon: 'Award' },
  ],
  'siak': [
    { id: '1', label: 'Parcel Data - Provide by UL', value: 4200, icon: 'Map' },
    { id: '2', label: 'Parcel Data - Verified by WRI', value: 2800, icon: 'ShieldCheck' },
    { id: '2a', label: 'Mapped Area - Provide by UL (ha)', value: 9500, icon: 'Map' },
    { id: '2b', label: 'Mapped Area - Verified by WRI (ha)', value: 4100, icon: 'ShieldCheck' },
    { id: '3', label: 'Total Farmer - Provide by UL', value: 2500, icon: 'Users' },
    { id: '4', label: 'Total Farmer - Registered', value: 1500, icon: 'UserCheck' },
    { id: '5', label: 'ICS Established', value: 10, icon: 'Building' },
    { id: '6', label: 'ICS Certified RSPO', value: 1, icon: 'Award' },
  ],
  'pelalawan': [
    { id: '1', label: 'Parcel Data - Provide by UL', value: 2606, icon: 'Map' },
    { id: '2', label: 'Parcel Data - Verified by WRI', value: 1486, icon: 'ShieldCheck' },
    { id: '2a', label: 'Mapped Area - Provide by UL (ha)', value: 5000, icon: 'Map' },
    { id: '2b', label: 'Mapped Area - Verified by WRI (ha)', value: 2650, icon: 'ShieldCheck' },
    { id: '3', label: 'Total Farmer - Provide by UL', value: 1752, icon: 'Users' },
    { id: '4', label: 'Total Farmer - Registered', value: 1087, icon: 'UserCheck' },
    { id: '5', label: 'ICS Established', value: 1, icon: 'Building' },
    { id: '6', label: 'ICS Certified RSPO', value: 0, icon: 'Award' },
  ],
};

export const chartData = [
  { name: 'IT 1', mapped_ul: 6000, mapped_wri: 2500, farmer_ul: 1500, farmer_wri: 600 },
  { name: 'IT 2', mapped_ul: 7200, mapped_wri: 3000, farmer_ul: 2000, farmer_wri: 800 },
  { name: 'IT 3', mapped_ul: 10400, mapped_wri: 5000, farmer_ul: 2500, farmer_wri: 1000 },
  { name: '2026', mapped_ul: 20000, mapped_wri: 10000, farmer_ul: 3500, farmer_wri: 1500 },
  { name: '2027', mapped_ul: 25000, mapped_wri: 10000, farmer_ul: 5500, farmer_wri: 2000 },
  { name: '2028', mapped_ul: 30000, mapped_wri: 15000, farmer_ul: 7500, farmer_wri: 2500 },
];

// Trained Farmer Data per District
export const trainedFarmerDataByDistrict: Record<string, KPI[]> = {
  'all': [
    { id: 'tf-1', label: 'BMP, P&C RSPO, HCV', value: 6787, icon: 'Leaf' },
    { id: 'tf-2', label: 'Group Dynamics', value: 6787, icon: 'MessagesSquare' },
    { id: 'tf-3', label: 'Health, Safety, Environment', value: 6787, icon: 'HeartPulse' },
    { id: 'tf-4', label: 'GEDSI, Financial Literacy,', value: 3500, icon: 'Banknote' },
  ],
  'kampar': [
    { id: 'tf-1', label: 'BMP, P&C RSPO, HCV', value: 1800, icon: 'Leaf' },
    { id: 'tf-2', label: 'Group Dynamics', value: 1800, icon: 'MessagesSquare' },
    { id: 'tf-3', label: 'Health, Safety, Environment', value: 1800, icon: 'HeartPulse' },
    { id: 'tf-4', label: 'GEDSI, Financial Literacy,', value: 900, icon: 'Banknote' },
  ],
  'rokan-hulu': [
    { id: 'tf-1', label: 'BMP, P&C RSPO, HCV', value: 2400, icon: 'Leaf' },
    { id: 'tf-2', label: 'Group Dynamics', value: 2400, icon: 'MessagesSquare' },
    { id: 'tf-3', label: 'Health, Safety, Environment', value: 2400, icon: 'HeartPulse' },
    { id: 'tf-4', label: 'GEDSI, Financial Literacy,', value: 1200, icon: 'Banknote' },
  ],
  'siak': [
    { id: 'tf-1', label: 'BMP, P&C RSPO, HCV', value: 1500, icon: 'Leaf' },
    { id: 'tf-2', label: 'Group Dynamics', value: 1500, icon: 'MessagesSquare' },
    { id: 'tf-3', label: 'Health, Safety, Environment', value: 1500, icon: 'HeartPulse' },
    { id: 'tf-4', label: 'GEDSI, Financial Literacy,', value: 800, icon: 'Banknote' },
  ],
  'pelalawan': [
    { id: 'tf-1', label: 'BMP, P&C RSPO, HCV', value: 1087, icon: 'Leaf' },
    { id: 'tf-2', label: 'Group Dynamics', value: 1087, icon: 'MessagesSquare' },
    { id: 'tf-3', label: 'Health, Safety, Environment', value: 1087, icon: 'HeartPulse' },
    { id: 'tf-4', label: 'GEDSI, Financial Literacy,', value: 600, icon: 'Banknote' },
  ],
};

// Keep specific exports for other pages if needed, defaulting to 'all'
export const kpiData = kpiDataByDistrict['all'];
export const trainedFarmerData = trainedFarmerDataByDistrict['all'];

export const trainingData = [
  { id: 't-1', topic: 'GAP (Good Agricultural Practices)', date: '2025-10-15', participants: 45, status: 'Completed' },
  { id: 't-2', topic: 'Financial Literacy', date: '2025-11-02', participants: 30, status: 'Completed' },
  { id: 't-3', topic: 'Sustainable Pest Management', date: '2025-12-10', participants: 50, status: 'Planned' },
  { id: 't-4', topic: 'RSPO Certification', date: '2026-01-20', participants: 40, status: 'Planned' },
];

export const riskData = [
  { id: 'r-1', risk: 'Deforestation Encroachment', level: 'High', location: 'Siak', status: 'Monitoring' },
  { id: 'r-2', risk: 'Fire Hotspots', level: 'Medium', location: 'Pelalawan', status: 'Resolved' },
  { id: 'r-3', risk: 'Land Dispute', level: 'Low', location: 'Kampar', status: 'Investigating' },
  { id: 'r-4', risk: 'Water Pollution', level: 'Medium', location: 'Rokan Hulu', status: 'Investigating' },
];
