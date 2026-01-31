// CMS-Ready Farmer Group Data Structure
// Standardized format for all 31 farmer groups

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

// Sample Data for 5 Farmer Groups
export const farmerGroupsData: Record<string, FarmerGroupProfile> = {
    'fps-sei-garo': {
        id: 'fps-sei-garo',
        slug: 'fps-sei-garo',
        name: 'FPS Sei Garo',
        district: 'kampar',
        established: 2015,
        legalStatus: {
            en: 'Registered with Ministry of Cooperatives and SMEs',
            id: 'Terdaftar di Kementerian Koperasi dan UKM'
        },

        assets: {
            logo: '/images/farmer-groups/fps-sei-garo/logo.png',
            managementPhoto: '/images/farmer-groups/fps-sei-garo/team.jpg',
        },

        statistics: {
            totalFarmers: 350,
            landParcels: 420,
            totalAreaHa: 1150,
            landTypes: {
                peat: 680,
                mineral: 470
            }
        },

        gapoktan: [
            { name: 'Sumber Rezeki', members: 120, chairman: 'Pak Budi Santoso' },
            { name: 'Makmur Jaya', members: 110, chairman: 'Pak Ahmad Yani' },
            { name: 'Harapan Baru', members: 120, chairman: 'Pak Suryadi' }
        ],

        content: {
            history: {
                en: 'FPS Sei Garo was established in 2015 by a group of 45 smallholder palm oil farmers in the Sei Garo watershed area of Kampar Regency. Recognizing the need for collective action to improve farming practices and market access, the founding members came together under the guidance of WRI Indonesia. Over the years, the group has grown significantly, now representing over 350 farmers across 8 villages, managing more than 1,150 hectares of palm oil plantations.',
                id: 'FPS Sei Garo didirikan pada tahun 2015 oleh sekelompok 45 petani sawit swadaya di kawasan Daerah Aliran Sungai Sei Garo, Kabupaten Kampar. Menyadari kebutuhan akan aksi kolektif untuk meningkatkan praktik pertanian dan akses pasar, para anggota pendiri berkumpul di bawah bimbingan WRI Indonesia. Selama bertahun-tahun, kelompok ini telah berkembang pesat, kini mewakili lebih dari 350 petani di 8 desa, mengelola lebih dari 1.150 hektar perkebunan kelapa sawit.'
            },
            geography: {
                en: 'Located in the Sei Garo watershed area of Kampar Regency, covering 8 villages across diverse terrain including both peatland (680 ha) and mineral soil areas (470 ha). The region is characterized by its proximity to the Kampar River system and rich biodiversity.',
                id: 'Berlokasi di kawasan Daerah Aliran Sungai Sei Garo, Kabupaten Kampar, mencakup 8 desa di medan yang beragam termasuk lahan gambut (680 ha) dan tanah mineral (470 ha). Wilayah ini ditandai dengan kedekatan dengan sistem Sungai Kampar dan keanekaragaman hayati yang kaya.'
            },
            governance: {
                en: 'FPS Sei Garo operates under a democratic governance structure with elected leadership serving 3-year terms. The management board consists of a Chairman, Vice Chairman, Secretary, Treasurer, and 5 division coordinators (Production, Marketing, Education, Finance, and Sustainability). Monthly meetings ensure transparent decision-making and member participation.',
                id: 'FPS Sei Garo beroperasi di bawah struktur tata kelola demokratis dengan kepemimpinan terpilih yang menjabat selama 3 tahun. Dewan pengurus terdiri dari Ketua, Wakil Ketua, Sekretaris, Bendahara, dan 5 koordinator divisi (Produksi, Pemasaran, Pendidikan, Keuangan, dan Keberlanjutan). Rapat bulanan memastikan pengambilan keputusan yang transparan dan partisipasi anggota.'
            },
            facilities: {
                en: 'The group operates a central office and meeting hall in Desa Sei Garo, equipped with basic office facilities and a capacity for 100 people. Additionally, the group maintains a shared equipment pool including 3 portable sprayers, 2 motorized pruning saws, and a small harvesting tool collection available for member rental at subsidized rates.',
                id: 'Kelompok ini mengoperasikan kantor pusat dan aula pertemuan di Desa Sei Garo, dilengkapi dengan fasilitas kantor dasar dan kapasitas untuk 100 orang. Selain itu, kelompok ini memelihara kolam peralatan bersama termasuk 3 sprayer portabel, 2 gergaji pemangkas bermotor, dan koleksi alat panen kecil yang tersedia untuk sewa anggota dengan tarif bersubsidi.'
            }
        },

        activities: {
            training: [
                {
                    id: 'fps-sg-training-001',
                    title: { en: 'Palm Oil Cultivation Training', id: 'Pelatihan Budidaya Kelapa Sawit' },
                    description: { en: 'Comprehensive training on modern palm oil cultivation techniques including soil management, fertilization, and pest control.', id: 'Pelatihan komprehensif tentang teknik budidaya kelapa sawit modern termasuk pengelolaan tanah, pemupukan, dan pengendalian hama.' },
                    date: '2024-03-15',
                    images: ['/images/farmer-groups/fps-sei-garo/activities/training-cultivation.jpg'],
                    participants: 85,
                    outcomes: { en: '85 farmers trained, 90% reported improved yields within 6 months', id: '85 petani terlatih, 90% melaporkan peningkatan hasil panen dalam 6 bulan' }
                }
            ],
            bmp: [
                {
                    id: 'fps-sg-bmp-001',
                    title: { en: 'Best Management Practices Implementation', id: 'Implementasi Praktik Pengelolaan Terbaik' },
                    description: { en: 'Field training on BMP standards including integrated pest management, water conservation, and soil health monitoring.', id: 'Pelatihan lapangan tentang standar BMP termasuk pengelolaan hama terpadu, konservasi air, dan pemantauan kesehatan tanah.' },
                    date: '2024-05-20',
                    images: ['/images/farmer-groups/fps-sei-garo/activities/bmp-training.jpg'],
                    participants: 120,
                    outcomes: { en: 'Reduced chemical usage by 30%, improved soil quality scores', id: 'Mengurangi penggunaan bahan kimia sebesar 30%, meningkatkan skor kualitas tanah' }
                }
            ],
            hcv: [],
            hse: [
                {
                    id: 'fps-sg-hse-001',
                    title: { en: 'Fire Prevention Workshop', id: 'Workshop Pencegahan Kebakaran' },
                    description: { en: 'Community-led fire prevention and early response training with practical demonstrations.', id: 'Pelatihan pencegahan kebakaran dan respon cepat berbasis komunitas dengan demonstrasi praktis.' },
                    date: '2024-06-10',
                    images: ['/images/farmer-groups/fps-sei-garo/activities/fire-prevention.jpg'],
                    participants: 65,
                    outcomes: { en: 'Established 5 community fire response teams, zero fire incidents in 2024', id: 'Membentuk 5 tim respon kebakaran masyarakat, nol insiden kebakaran di 2024' }
                }
            ],
            businessDev: [],
            gedsi: [],
            sustainableStandards: []
        }
    },

    'kp-kusuma-bakti': {
        id: 'kp-kusuma-bakti',
        slug: 'kp-kusuma-bakti',
        name: 'KP Kusuma Bakti Mandiri',
        district: 'kampar',
        established: 2012,
        legalStatus: {
            en: 'Cooperative registered with Ministry of Cooperatives',
            id: 'Koperasi terdaftar di Kementerian Koperasi'
        },

        assets: {
            logo: '/images/farmer-groups/kp-kusuma-bakti/logo.png',
            managementPhoto: '/images/farmer-groups/kp-kusuma-bakti/team.jpeg',
        },

        statistics: {
            totalFarmers: 285,
            landParcels: 340,
            totalAreaHa: 920,
            landTypes: {
                mineral: 920
            }
        },

        gapoktan: [
            { name: 'Bakti Tani', members: 95, chairman: 'Pak Hendra Wijaya' },
            { name: 'Kusuma Makmur', members: 190, chairman: 'Ibu Siti Rahmawati' }
        ],

        content: {
            history: {
                en: 'Established in 2012, KP Kusuma Bakti Mandiri emerged as a response to market challenges faced by independent smallholder farmers in eastern Kampar. The cooperative was founded on principles of mutual cooperation and self-reliance, with initial membership of 75 farmers. Today, it represents 285 farmers committed to sustainable and profitable palm oil production.',
                id: 'Didirikan pada tahun 2012, KP Kusuma Bakti Mandiri muncul sebagai respons terhadap tantangan pasar yang dihadapi petani swadaya independen di Kampar Timur. Koperasi ini didirikan berdasarkan prinsip gotong royong dan kemandirian, dengan keanggotaan awal 75 petani. Saat ini, mewakili 285 petani yang berkomitmen pada produksi kelapa sawit yang berkelanjutan dan menguntungkan.'
            },
            geography: {
                en: 'Covering 6 villages in eastern Kampar Regency, primarily on mineral soil areas (920 ha) with excellent drainage conditions. The area benefits from good road infrastructure and proximity to local mills.',
                id: 'Mencakup 6 desa di Kampar Timur, terutama di lahan mineral (920 ha) dengan kondisi drainase yang sangat baik. Wilayah ini mendapat manfaat dari infrastruktur jalan yang baik dan kedekatan dengan pabrik lokal.'
            },
            governance: {
                en: 'The cooperative follows standard cooperative governance with an elected board (5 members) and supervisory committee (3 members). Annual member assemblies make major decisions, with quarterly reporting ensuring transparency.',
                id: 'Koperasi mengikuti tata kelola koperasi standar dengan pengurus terpilih (5 anggota) dan dewan pengawas (3 anggota). Rapat anggota tahunan membuat keputusan besar, dengan pelaporan triwulanan memastikan transparansi.'
            },
            facilities: {
                en: 'Cooperative office with meeting room (50-person capacity), 2 motorcycles for field coordination, basic computing equipment, and a shared nursery for oil palm seedlings.',
                id: 'Kantor koperasi dengan ruang rapat (kapasitas 50 orang), 2 sepeda motor untuk koordinasi lapangan, peralatan komputer dasar, dan pembibitan bersama untuk bibit kelapa sawit.'
            }
        },

        activities: {
            training: [],
            bmp: [],
            hcv: [],
            hse: [],
            businessDev: [
                {
                    id: 'kpkb-busdev-001',
                    title: { en: 'Business Development Training', id: 'Pelatihan Pengembangan Usaha' },
                    description: { en: 'Financial literacy and business planning workshop for smallholder farmers covering record-keeping, cost analysis, and profit optimization.', id: 'Workshop literasi keuangan dan perencanaan bisnis untuk petani swadaya mencakup pencatatan, analisis biaya, dan optimasi keuntungan.' },
                    date: '2024-02-10',
                    images: ['/images/farmer-groups/kp-kusuma-bakti/activities/business-training.jpg'],
                    participants: 95
                }
            ],
            gedsi: [],
            sustainableStandards: [
                {
                    id: 'kpkb-rspo-001',
                    title: { en: 'RSPO Certification Preparation', id: 'Persiapan Sertifikasi RSPO' },
                    description: { en: 'Group certification process and RSPO standards compliance workshop including gap analysis and action planning.', id: 'Proses sertifikasi kelompok dan workshop kepatuhan standar RSPO termasuk analisis kesenjangan dan perencanaan tindakan.' },
                    date: '2024-04-22',
                    images: ['/images/farmer-groups/kp-kusuma-bakti/activities/rspo-prep.jpg'],
                    participants: 75,
                    outcomes: { en: 'Completed gap analysis, 80% compliance with RSPO P&C', id: 'Menyelesaikan analisis kesenjangan, 80% kepatuhan dengan P&C RSPO' }
                }
            ]
        }
    },

    'kud-intan-makmur': {
        id: 'kud-intan-makmur',
        slug: 'kud-intan-makmur',
        name: 'KUD Intan Makmur',
        district: 'rohul',
        established: 2008,
        legalStatus: {
            en: 'Village Cooperative Unit registered with Ministry of Cooperatives',
            id: 'Koperasi Unit Desa terdaftar di Kementerian Koperasi'
        },

        assets: {
            logo: '/images/farmer-groups/kud-intan-makmur/logo.png',
            managementPhoto: '/images/farmer-groups/kud-intan-makmur/team.jpg',
        },

        statistics: {
            totalFarmers: 420,
            landParcels: 530,
            totalAreaHa: 1580,
            landTypes: {
                mineral: 1450,
                mixed: 130
            }
        },

        gapoktan: [
            { name: 'Intan Jaya', members: 140, chairman: 'Pak Sutrisno' },
            { name: 'Makmur Sentosa', members: 150, chairman: 'Pak Budiman' },
            { name: 'Sejahtera Bersama', members: 130, chairman: 'Ibu Nurlaila' }
        ],

        content: {
            history: {
                en: 'KUD Intan Makmur was founded in 2008 as one of the pioneering village cooperatives in Rokan Hulu focusing exclusively on palm oil smallholders. With strong community ties and government support, it has become a model for cooperative development in the region, growing from 80 founding members to 420 active farmers today.',
                id: 'KUD Intan Makmur didirikan pada tahun 2008 sebagai salah satu koperasi desa perintis di Rokan Hulu yang fokus eksklusif pada petani sawit swadaya. Dengan ikatan komunitas yang kuat dan dukungan pemerintah, telah menjadi model pengembangan koperasi di wilayah ini, berkembang dari 80 anggota pendiri menjadi 420 petani aktif saat ini.'
            },
            geography: {
                en: 'Spanning 12 villages across central Rokan Hulu, predominantly on mineral soil (1,450 ha) with excellent drainage conditions. Some areas (130 ha) feature mixed soil types in transition zones.',
                id: 'Meliputi 12 desa di Rokan Hulu tengah, dominan di tanah mineral (1.450 ha) dengan kondisi drainase yang sangat baik. Beberapa area (130 ha) memiliki tipe tanah campuran di zona transisi.'
            },
            governance: {
                en: 'Well-established cooperative structure with board of directors (7 members), supervisory board (5 members), and professional management staff. Implements annual audits and transparent financial reporting.',
                id: 'Struktur koperasi yang mapan dengan dewan pengurus (7 anggota), dewan pengawas (5 anggota), dan staf manajemen profesional. Menerapkan audit tahunan dan pelaporan keuangan transparan.'
            },
            facilities: {
                en: 'Two-story cooperative building with office, meeting hall (200-person capacity), small library, 5 motorcycles for field staff, computer lab with 10 units, and a mini warehouse for agricultural supplies.',
                id: 'Gedung koperasi dua lantai dengan kantor, aula pertemuan (kapasitas 200 orang), perpustakaan kecil, 5 sepeda motor untuk staf lapangan, laboratorium komputer dengan 10 unit, dan gudang mini untuk perlengkapan pertanian.'
            }
        },

        activities: {
            training: [],
            bmp: [],
            hcv: [
                {
                    id: 'kim-hcv-001',
                    title: { en: 'HCV Assessment Training', id: 'Pelatihan Asesmen HCV' },
                    description: { en: 'Training on High Conservation Value area identification and protection methods for smallholder contexts.', id: 'Pelatihan identifikasi dan metode perlindungan kawasan Nilai Konservasi Tinggi untuk konteks petani swadaya.' },
                    date: '2024-01-25',
                    images: ['/images/farmer-groups/kud-intan-makmur/activities/hcv-training.jpg'],
                    participants: 110
                }
            ],
            hse: [
                {
                    id: 'kim-hse-001',
                    title: { en: 'Health & Safety Workshop', id: 'Workshop Kesehatan & Keselamatan' },
                    description: { en: 'Occupational health and safety standards for palm oil workers covering PPE usage, chemical handling, and emergency response.', id: 'Standar kesehatan dan keselamatan kerja untuk pekerja kelapa sawit mencakup penggunaan APD, penanganan bahan kimia, dan respons darurat.' },
                    date: '2024-03-30',
                    images: ['/images/farmer-groups/kud-intan-makmur/activities/health-safety.jpg'],
                    participants: 95,
                    outcomes: { en: 'PPE distribution to 95 farmers, zero workplace accidents in 6 months', id: 'Distribusi APD ke 95 petani, nol kecelakaan kerja dalam 6 bulan' }
                }
            ],
            businessDev: [],
            gedsi: [],
            sustainableStandards: []
        }
    },

    'kpm-karya-maju': {
        id: 'kpm-karya-maju',
        slug: 'kpm-karya-maju',
        name: 'KPM Karya Maju',
        district: 'siak',
        established: 2016,
        legalStatus: {
            en: 'Farmer Partnership registered with District Agriculture Office',
            id: 'Kemitraan Petani terdaftar di Dinas Pertanian Kabupaten'
        },

        assets: {
            logo: '/images/farmer-groups/kpm-karya-maju/logo.png',
            managementPhoto: '/images/farmer-groups/kpm-karya-maju/team.jpg',
        },

        statistics: {
            totalFarmers: 310,
            landParcels: 380,
            totalAreaHa: 845,
            landTypes: {
                peat: 845
            }
        },

        gapoktan: [
            { name: 'Maju Bersama', members: 160, chairman: 'Pak Syamsul Bahri' },
            { name: 'Karya Tani', members: 150, chairman: 'Pak Yusuf Rahman' }
        ],

        content: {
            history: {
                en: 'Founded in 2016, KPM Karya Maju represents farmers working primarily on peatland areas in Siak Regency. The partnership was specifically created to address the unique challenges of sustainable palm oil cultivation on peat, becoming a pioneer in peatland best management practices among smallholder communities.',
                id: 'Didirikan pada tahun 2016, KPM Karya Maju mewakili petani yang bekerja terutama di lahan gambut di Kabupaten Siak. Kemitraan ini secara khusus dibuat untuk mengatasi tantangan unik budidaya kelapa sawit berkelanjutan di gambut, menjadi pelopor dalam praktik pengelolaan terbaik lahan gambut di kalangan komunitas petani swadaya.'
            },
            geography: {
                en: 'Concentrated in peatland areas (845 ha) of Siak Regency, covering 9 villages with focus on water table management and fire prevention in sensitive peat ecosystems.',
                id: 'Terkonsentrasi di kawasan lahan gambut (845 ha) Kabupaten Siak, mencakup 9 desa dengan fokus pada manajemen tata air dan pencegahan kebakaran di ekosistem gambut yang sensitif.'
            },
            governance: {
                en: 'Partnership structure with joint management committee representing both gapoktan. Monthly coordination meetings and quarterly financial reviews ensure accountability.',
                id: 'Struktur kemitraan dengan komite manajemen bersama yang mewakili kedua gapoktan. Rapat koordinasi bulanan dan tinjauan keuangan triwulanan memastikan akuntabilitas.'
            },
            facilities: {
                en: 'Shared office space in Siak district, 15 piezometers for water table monitoring across member plots, basic field equipment pool, and a community fire-fighting equipment storage.',
                id: 'Ruang kantor bersama di Kabupaten Siak, 15 piezometer untuk pemantauan tata air di plot anggota, kolam peralatan lapangan dasar, dan penyimpanan peralatan pemadam kebakaran komunitas.'
            }
        },

        activities: {
            training: [],
            bmp: [
                {
                    id: 'kmm-bmp-001',
                    title: { en: 'Peatland Management Training', id: 'Pelatihan Pengelolaan Gambut' },
                    description: { en: 'Best practices for sustainable palm oil cultivation on peatland including water table management, no burning policy, and ecosystem protection.', id: 'Praktik terbaik budidaya kelapa sawit berkelanjutan di lahan gambut termasuk manajemen tata air, kebijakan tanpa bakar, dan perlindungan ekosistem.' },
                    date: '2024-02-18',
                    images: ['/images/farmer-groups/kpm-karya-maju/activities/peatland-mgmt.jpg'],
                    participants: 125,
                    outcomes: { en: 'Water table compliance improved to 85%, zero burning incidents', id: 'Kepatuhan tata air meningkat menjadi 85%, nol insiden pembakaran' }
                }
            ],
            hcv: [],
            hse: [
                {
                    id: 'kmm-hse-001',
                    title: { en: 'Community Fire Brigade Formation', id: 'Pembentukan Regu Pemadam Kebakaran Masyarakat' },
                    description: { en: 'Formation and training of community-based fire response teams with equipment provision and emergency protocols.', id: 'Pembentukan dan pelatihan tim respon kebakaran berbasis masyarakat dengan penyediaan peralatan dan protokol darurat.' },
                    date: '2024-07-20',
                    images: ['/images/farmer-groups/kpm-karya-maju/activities/fire-brigade.jpg'],
                    participants: 45,
                    outcomes: { en: 'Established 3 fire brigades, rapid response time <30 minutes', id: 'Membentuk 3 regu pemadam, waktu respons cepat <30 menit' }
                }
            ],
            businessDev: [],
            gedsi: [],
            sustainableStandards: []
        }
    },

    'kud-mulia': {
        id: 'kud-mulia',
        slug: 'kud-mulia',
        name: 'KUD Mulia',
        district: 'pelalawan',
        established: 2010,
        legalStatus: {
            en: 'Village Cooperative registered with Ministry of Cooperatives',
            id: 'Koperasi Unit Desa terdaftar di Kementerian Koperasi'
        },

        assets: {
            logo: '/images/farmer-groups/kud-mulia/logo.png',
            managementPhoto: '/images/farmer-groups/kud-mulia/team.jpg',
        },

        statistics: {
            totalFarmers: 145,
            landParcels: 180,
            totalAreaHa: 490,
            landTypes: {
                mineral: 320,
                mixed: 170
            }
        },

        gapoktan: [
            { name: 'Mulia Sejahtera', members: 145, chairman: 'Pak Bambang Sutejo' }
        ],

        content: {
            history: {
                en: 'KUD Mulia was established in 2010 in Pelalawan Regency, an area known for its rich biodiversity and forest landscapes. The cooperative emphasizes the balance between agricultural productivity and environmental conservation, working closely with local communities to protect High Conservation Value areas while maintaining viable livelihoods.',
                id: 'KUD Mulia didirikan pada tahun 2010 di Kabupaten Pelalawan, kawasan yang dikenal dengan kekayaan keanekaragaman hayati dan bentang alam hutan. Koperasi ini menekankan keseimbangan antara produktivitas pertanian dan konservasi lingkungan, bekerja erat dengan masyarakat lokal untuk melindungi kawasan Nilai Konservasi Tinggi sambil mempertahankan mata pencaharian yang layak.'
            },
            geography: {
                en: 'Operating in 3 villages in Pelalawan, characterized by proximity to forest areas and biodiversity corridors. Land composition includes mineral soil (320 ha) and mixed transitional areas (170 ha).',
                id: 'Beroperasi di 3 desa di Pelalawan, ditandai dengan kedekatan dengan kawasan hutan dan koridor keanekaragaman hayati. Komposisi lahan meliputi tanah mineral (320 ha) dan area transisi campuran (170 ha).'
            },
            governance: {
                en: 'Single gapoktan structure with 5-member board elected biennially. Strong emphasis on participatory decision-making and conservation compliance.',
                id: 'Struktur gapoktan tunggal dengan pengurus 5 anggota dipilih dua tahunan. Penekanan kuat pada pengambilan keputusan partisipatif dan kepatuhan konservasi.'
            },
            facilities: {
                en: 'Modest office building with meeting space (60-person capacity), 2 motorcycles, basic surveying equipment for HCV mapping, and storage for conservation materials.',
                id: 'Gedung kantor sederhana dengan ruang rapat (kapasitas 60 orang), 2 sepeda motor, peralatan survei dasar untuk pemetaan HCV, dan penyimpanan untuk bahan konservasi.'
            }
        },

        activities: {
            training: [],
            bmp: [],
            hcv: [
                {
                    id: 'km-hcv-001',
                    title: { en: 'Biodiversity Conservation Workshop', id: 'Workshop Konservasi Keanekaragaman Hayati' },
                    description: { en: 'Training on identifying and protecting endangered species in plantation areas including wildlife corridors and buffer zones.', id: 'Pelatihan identifikasi dan perlindungan spesies terancam di area perkebunan termasuk koridor satwa liar dan zona penyangga.' },
                    date: '2024-03-08',
                    images: ['/images/farmer-groups/kud-mulia/activities/biodiversity.jpg'],
                    participants: 55,
                    outcomes: { en: 'Mapped 12 ha of HCV areas, established 3 wildlife corridors', id: 'Memetakan 12 ha kawasan HCV, membentuk 3 koridor satwa liar' }
                }
            ],
            hse: [],
            businessDev: [],
            gedsi: [],
            sustainableStandards: []
        }
    }
};

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


