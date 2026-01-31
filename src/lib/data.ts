import type { FarmerGroupProfile } from "./farmerGroupsData";

export const farmerGroupsData: Record<string, FarmerGroupProfile> = {
    'fps-sei-garo': {
        id: 'fps-sei-garo',
        slug: 'fps-sei-garo',
        name: 'FPS Sei Garo',
        district: 'kampar',
        established: 2012,
        legalStatus: {
            en: 'Cooperative',
            id: 'Koperasi'
        },
        assets: {
            logo: '/images/farmer-groups/fps-sei-garo/logo.png',
            managementPhoto: '/images/farmer-groups/fps-sei-garo/team.jpg'
        },
        statistics: {
            totalFarmers: 350,
            landParcels: 420,
            totalAreaHa: 1150,
            productionTbs: 18400,
            productivity: 16,
            landTypes: {
                peat: 680,
                mineral: 470
            }
        },
        gapoktan: [
            { name: 'Tani Jaya', members: 120 },
            { name: 'Mekar Sari', members: 110 },
            { name: 'Sejahtera Bersama', members: 120 }
        ],
        content: {
            history: {
                en: 'FPS Sei Garo was established in 2012 by a group of independent smallholders in Tapung Sub-district. Initially formed to address challenges in fertilizer access and fresh fruit bunch (FFB) sales, the cooperative has grown into a leading example of sustainable peatland management.',
                id: 'FPS Sei Garo didirikan pada tahun 2012 oleh sekelompok petani swadaya di Kecamatan Tapung. Awalnya dibentuk untuk mengatasi tantangan akses pupuk dan penjualan tandan buah segar (TBS), koperasi ini telah berkembang menjadi contoh utama pengelolaan lahan gambut berkelanjutan.'
            },
            geography: {
                en: 'Located in the Kampar peat dome landscape, the area features deep peat soils requiring careful water management. The landscape includes a mix of palm oil plantations and conserved peat swamp forest patches.',
                id: 'Terletak di lanskap kubah gambut Kampar, wilayah ini memiliki tanah gambut dalam yang memerlukan pengelolaan air yang cermat. Lanskap ini mencakup campuran perkebunan kelapa sawit dan petak-petak hutan rawa gambut yang dilestarikan.'
            },
            governance: {
                en: 'The organization is led by a democratically elected board serving 3-year terms. Regular member meetings ensure transparency in decision-making and benefit distribution.',
                id: 'Organisasi ini dipimpin oleh dewan yang dipilih secara demokratis dengan masa jabatan 3 tahun. Rapat anggota rutin memastikan transparansi dalam pengambilan keputusan dan distribusi manfaat.'
            },
            facilities: {
                en: 'The cooperative operates a centralized collection point (weighbridge), a fertilizer warehouse, and a small training center for member capacity building.',
                id: 'Koperasi mengoperasikan titik pengumpulan terpusat (timbangan), gudang pupuk, dan pusat pelatihan kecil untuk pengembangan kapasitas anggota.'
            }
        },

        activities: {
            training: [
                {
                    id: 'trn-001',
                    title: { en: 'Peatland Water Management', id: 'Pengelolaan Tata Air Gambut' },
                    description: { en: 'Technical training on maintaining water tables to prevent peat degradation and fire risks.', id: 'Pelatihan teknis tentang menjaga tinggi muka air untuk mencegah degradasi gambut dan risiko kebakaran.' },
                    date: '2024-01-15',
                    images: ['/images/farmer-groups/fps-sei-garo/activities/water-mgmt.jpg'],
                    participants: 45
                },
                {
                    id: 'trn-002',
                    title: { en: 'GAP for Peat Soils', id: 'GAP untuk Lahan Gambut' },
                    description: { en: 'Best practices for fertilization and pest management specific to peat soil conditions.', id: 'Praktik terbaik pemupukan dan pengendalian hama khusus untuk kondisi lahan gambut.' },
                    date: '2023-11-20',
                    images: ['/images/farmer-groups/fps-sei-garo/activities/gap.jpg'],
                    participants: 60
                }
            ],
            bmp: [],
            hcv: [],
            hse: [
                {
                    id: 'hse-001',
                    title: { en: 'PPE Usage & Safety', id: 'Penggunaan APD & Keselamatan' },
                    description: { en: 'Workshop on proper personal protective equipment usage during harvesting and spraying.', id: 'Lokakarya penggunaan alat pelindung diri yang benar selama panen dan penyemprotan.' },
                    date: '2024-02-10',
                    images: ['/images/farmer-groups/fps-sei-garo/activities/ppe.jpg'],
                    participants: 80
                }
            ],
            businessDev: [],
            gedsi: [
                {
                    id: 'g-001',
                    title: { en: 'Women in Agriculture', id: 'Wanita dalam Pertanian' },
                    description: { en: 'Empowerment program identifying roles for women in alternative livelihood activities.', id: 'Program pemberdayaan yang mengidentifikasi peran perempuan dalam kegiatan mata pencaharian alternatif.' },
                    date: '2023-12-05',
                    images: ['/images/farmer-groups/fps-sei-garo/activities/women.jpg'],
                    participants: 30
                }
            ],
            sustainableStandards: []
        }
    },
    'kp-kusuma-bakti': {
        id: 'kp-kusuma-bakti',
        slug: 'kp-kusuma-bakti',
        name: 'KP Kusuma Bakti',
        district: 'kampar',
        established: 2015,
        legalStatus: {
            en: 'Farmers Group',
            id: 'Kelompok Tani'
        },
        assets: {
            logo: '/images/farmer-groups/kp-kusuma-bakti/logo.png',
            managementPhoto: '/images/farmer-groups/kp-kusuma-bakti/team.jpg'
        },
        statistics: {
            totalFarmers: 180,
            landParcels: 210,
            totalAreaHa: 450,
            productionTbs: 7200,
            productivity: 16,
            landTypes: {
                mineral: 450
            }
        },
        gapoktan: [
            { name: 'Kusuma I', members: 90 },
            { name: 'Kusuma II', members: 90 }
        ],
        content: {
            history: {
                en: 'Founded in 2015, KP Kusuma Bakti focuses on improving yield quality through better harvesting standards. The group has successfully partnered with local mills to secure fair pricing for members.',
                id: 'Didirikan pada tahun 2015, KP Kusuma Bakti berfokus pada peningkatan kualitas hasil panen melalui standar panen yang lebih baik. Kelompok ini telah berhasil bermitra dengan pabrik lokal untuk memastikan harga yang adil bagi anggota.'
            },
            geography: {
                en: 'Situated in the mineral soil plains of Siak, the area is suitable for high-yield palm cultivation. The landscape is predominantly agricultural with integrated cattle grazing areas.',
                id: 'Terletak di dataran tanah mineral Siak, wilayah ini cocok untuk budidaya sawit hasil tinggi. Lanskap didominasi pertanian dengan area penggembalaan ternak terintegrasi.'
            },
            governance: {
                en: 'Managed by a young and dynamic team focused on digitalizing harvest records and payment transparency.',
                id: 'Dikelola oleh tim muda dan dinamis yang berfokus pada digitalisasi catatan panen dan transparansi pembayaran.'
            },
            facilities: {
                en: 'Office with internet connectivity, digital weighing station, and community hall.',
                id: 'Kantor dengan konektivitas internet, stasiun timbang digital, dan aula komunitas.'
            }
        },

        activities: {
            training: [],
            bmp: [
                {
                    id: 'bmp-kb-001',
                    title: { en: 'Integrated Cattle-Palm', id: 'Integrasi Sapi-Sawit' },
                    description: { en: 'Demonstration plot showing benefits of integrating cattle grazing for weed control and organic fertilizer.', id: 'Plot demonstrasi menunjukkan manfaat integrasi penggembalaan sapi untuk pengendalian gulma dan pupuk organik.' },
                    date: '2024-03-01',
                    images: ['/images/farmer-groups/kp-kusuma-bakti/activities/cattle.jpg'],
                    participants: 40
                }
            ],
            hcv: [],
            hse: [],
            businessDev: [
                {
                    id: 'bd-kb-001',
                    title: { en: 'Financial Literacy', id: 'Literasi Keuangan' },
                    description: { en: 'Training for members on household financial planning and saving for replanting.', id: 'Pelatihan bagi anggota tentang perencanaan keuangan rumah tangga dan menabung untuk peremajaan.' },
                    date: '2024-01-20',
                    images: ['/images/farmer-groups/kp-kusuma-bakti/activities/finance.jpg'],
                    participants: 55
                }
            ],
            gedsi: [],
            sustainableStandards: []
        }
    },
    'kpm-karya-maju': {
        id: 'kpm-karya-maju',
        slug: 'kpm-karya-maju',
        name: 'KPM Karya Maju',
        district: 'rohul',
        established: 2010,
        legalStatus: {
            en: 'Cooperative',
            id: 'Koperasi'
        },
        assets: {
            logo: '/images/farmer-groups/kpm-karya-maju/logo.png',
            managementPhoto: '/images/farmer-groups/kpm-karya-maju/team.jpg'
        },
        statistics: {
            totalFarmers: 500,
            landParcels: 650,
            totalAreaHa: 1200,
            productionTbs: 21600,
            productivity: 18,
            landTypes: {
                mineral: 1000,
                mixed: 200
            }
        },
        gapoktan: [
            { name: 'Karya Maju A', members: 150 },
            { name: 'Karya Maju B', members: 180 },
            { name: 'Karya Maju C', members: 170 }
        ],
        content: {
            history: {
                en: 'One of the oldest cooperatives in Rokan Hulu, KPM Karya Maju has a strong track record of supporting farmers through replanting cycles. They implemented a collective savings scheme for replanting in 2018.',
                id: 'Salah satu koperasi tertua di Rokan Hulu, KPM Karya Maju memiliki rekam jejak kuat dalam mendukung petani melalui siklus peremajaan. Mereka menerapkan skema tabungan kolektif untuk peremajaan pada tahun 2018.'
            },
            geography: {
                en: 'Located in rolling terrain with mostly mineral soils. The area faces challenges with soil erosion, requiring terracing and cover crop management.',
                id: 'Terletak di medan bergelombang dengan sebagian besar tanah mineral. Wilayah ini menghadapi tantangan erosi tanah, memerlukan terasering dan pengelolaan tanaman penutup tanah.'
            },
            governance: {
                en: 'Well-structured organization with dedicated divisions for replanting, agronomy, and social welfare.',
                id: 'Organisasi terstruktur baik dengan divisi khusus untuk peremajaan, agronomi, dan kesejahteraan sosial.'
            },
            facilities: {
                en: 'Large office complex, nursery for seedlings, heavy equipment for land preparation, and a clinic for members.',
                id: 'Kompleks kantor besar, pembibitan, alat berat untuk penyiapan lahan, dan klinik untuk anggota.'
            }
        },

        activities: {
            training: [],
            bmp: [],
            hcv: [],
            hse: [],
            businessDev: [],
            gedsi: [],
            sustainableStandards: [
                {
                    id: 'std-km-001',
                    title: { en: 'ISPO Certification Prep', id: 'Persiapan Sertifikasi ISPO' },
                    description: { en: 'Gap analysis and document preparation workshop for upcoming ISPO audit.', id: 'Analisis kesenjangan dan lokakarya persiapan dokumen untuk audit ISPO mendatang.' },
                    date: '2024-02-15',
                    images: ['/images/farmer-groups/kpm-karya-maju/activities/ispo.jpg'],
                    participants: 25
                }
            ]
        }
    },
    'kud-intan-makmur': {
        id: 'kud-intan-makmur',
        slug: 'kud-intan-makmur',
        name: 'KUD Intan Makmur',
        district: 'siak',
        established: 2018,
        legalStatus: {
            en: 'Cooperative',
            id: 'Koperasi'
        },
        assets: {
            logo: '/images/farmer-groups/kud-intan-makmur/logo.png',
            managementPhoto: '/images/farmer-groups/kud-intan-makmur/team.jpg'
        },
        statistics: {
            totalFarmers: 120,
            landParcels: 140,
            totalAreaHa: 280,
            productionTbs: 3900,
            productivity: 14,
            landTypes: {
                peat: 280
            }
        },
        gapoktan: [
            { name: 'Intan Satu', members: 60 },
            { name: 'Intan Dua', members: 60 }
        ],
        content: {
            history: {
                en: 'Established to formalize land tenure and improve bargaining power for peatland farmers in Siak. KUD Intan Makmur actively collaborates with NGOs on paludiculture projects.',
                id: 'Didirikan untuk memformalkan kepemilikan lahan dan meningkatkan posisi tawar bagi petani lahan gambut di Siak. KUD Intan Makmur aktif berkolaborasi dengan LSM dalam proyek paludikultur.'
            },
            geography: {
                en: 'Exclusively on peatlands. The group is pioneering intercropping with pineapple and other peat-friendly crops to diversify income.',
                id: 'Sepenuhnya di lahan gambut. Kelompok ini memelopori tumpangsari dengan nanas dan tanaman ramah gambut lainnya untuk mendiversifikasi pendapatan.'
            },
            governance: {
                en: 'Small but agile governance team focused on rapid response to fire threats and market fluctuations.',
                id: 'Tim tata kelola kecil namun gesit yang berfokus pada respons cepat terhadap ancaman kebakaran dan fluktuasi pasar.'
            },
            facilities: {
                en: 'Shared meeting hall, basic firefighting equipment storage, and a demonstration plot for paludiculture.',
                id: 'Aula pertemuan bersama, penyimpanan peralatan pemadam kebakaran dasar, dan plot demonstrasi untuk paludikultur.'
            }
        },

        activities: {
            training: [
                {
                    id: 'trn-im-001',
                    title: { en: 'Fire Prevention & Control', id: 'Pencegahan & Pengendalian Kebakaran' },
                    description: { en: 'Practical drill on using pumps and hoses for rapid fire suppression on peatlands.', id: 'Latihan praktis penggunaan pompa dan selang untuk pemadaman kebakaran cepat di lahan gambut.' },
                    date: '2023-09-10',
                    images: ['/images/farmer-groups/kud-intan-makmur/activities/fire-drill.jpg'],
                    participants: 35
                }
            ],
            bmp: [],
            hcv: [],
            hse: [],
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
            en: 'Cooperative',
            id: 'Koperasi'
        },
        assets: {
            logo: '/images/farmer-groups/kud-mulia/logo.png',
            managementPhoto: '/images/farmer-groups/kud-mulia/team.jpg'
        },
        statistics: {
            totalFarmers: 220,
            landParcels: 280,
            totalAreaHa: 490,
            productionTbs: 7800,
            productivity: 16,
            landTypes: {
                mineral: 320,
                mixed: 170
            }
        },
        gapoktan: [
            { name: 'Mulia Abadi', members: 220 }
        ],
        content: {
            history: {
                en: 'KUD Mulia was established in 2010 in Pelalawan Regency, an area known for its rich biodiversity and forest landscapes. The cooperative emphasizes balancing agricultural productivity with environmental conservation, working closely with local communities to protect High Conservation Value areas while maintaining sustainable livelihoods.',
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
    },
    // Kampar Groups
    'apss-sei-galuh': {
        id: 'apss-sei-galuh',
        slug: 'apss-sei-galuh',
        name: 'APSS Sei Galuh',
        district: 'kampar',
        established: 2018,
        legalStatus: { en: 'Association', id: 'Asosiasi' },
        assets: { logo: '', managementPhoto: '' },
        statistics: { totalFarmers: 150, landParcels: 200, totalAreaHa: 400, landTypes: { mineral: 400 } },
        gapoktan: [{ name: 'Gapoktan Sei Galuh', members: 150 }],
        content: {
            history: { en: 'History details to be added.', id: 'Detail sejarah akan ditambahkan.' },
            geography: { en: 'Geography details to be added.', id: 'Detail geografi akan ditambahkan.' },
            governance: { en: 'Governance details to be added.', id: 'Detail tata kelola akan ditambahkan.' },
            facilities: { en: 'Facilities details to be added.', id: 'Detail fasilitas akan ditambahkan.' }
        },
        activities: { training: [], bmp: [], hcv: [], hse: [], businessDev: [], gedsi: [], sustainableStandards: [] }
    },
    'kud-karya-sembada': {
        id: 'kud-karya-sembada',
        slug: 'kud-karya-sembada',
        name: 'KUD Karya Sembada',
        district: 'kampar',
        established: 2010,
        legalStatus: { en: 'Cooperative', id: 'Koperasi' },
        assets: { logo: '', managementPhoto: '' },
        statistics: { totalFarmers: 200, landParcels: 250, totalAreaHa: 500, landTypes: { mineral: 500 } },
        gapoktan: [{ name: 'Karya Sembada', members: 200 }],
        content: {
            history: { en: 'History details to be added.', id: 'Detail sejarah akan ditambahkan.' },
            geography: { en: 'Geography details to be added.', id: 'Detail geografi akan ditambahkan.' },
            governance: { en: 'Governance details to be added.', id: 'Detail tata kelola akan ditambahkan.' },
            facilities: { en: 'Facilities details to be added.', id: 'Detail fasilitas akan ditambahkan.' }
        },
        activities: { training: [], bmp: [], hcv: [], hse: [], businessDev: [], gedsi: [], sustainableStandards: [] }
    },
    'kud-hasrat-jaya-pagaruyung': {
        id: 'kud-hasrat-jaya-pagaruyung',
        slug: 'kud-hasrat-jaya-pagaruyung',
        name: 'KUD Hasrat Jaya Pagaruyung',
        district: 'kampar',
        established: 2012,
        legalStatus: { en: 'Cooperative', id: 'Koperasi' },
        assets: { logo: '', managementPhoto: '' },
        statistics: { totalFarmers: 180, landParcels: 220, totalAreaHa: 450, landTypes: { mineral: 450 } },
        gapoktan: [{ name: 'Hasrat Jaya', members: 180 }],
        content: {
            history: { en: 'History details to be added.', id: 'Detail sejarah akan ditambahkan.' },
            geography: { en: 'Geography details to be added.', id: 'Detail geografi akan ditambahkan.' },
            governance: { en: 'Governance details to be added.', id: 'Detail tata kelola akan ditambahkan.' },
            facilities: { en: 'Facilities details to be added.', id: 'Detail fasilitas akan ditambahkan.' }
        },
        activities: { training: [], bmp: [], hcv: [], hse: [], businessDev: [], gedsi: [], sustainableStandards: [] }
    },
    'fortaski': {
        id: 'fortaski',
        slug: 'fortaski',
        name: 'FORTASKI',
        district: 'kampar',
        established: 2015,
        legalStatus: { en: 'Forum', id: 'Forum' },
        assets: { logo: '', managementPhoto: '' },
        statistics: { totalFarmers: 300, landParcels: 350, totalAreaHa: 700, landTypes: { mineral: 700 } },
        gapoktan: [{ name: 'Forum Tani', members: 300 }],
        content: {
            history: { en: 'History details to be added.', id: 'Detail sejarah akan ditambahkan.' },
            geography: { en: 'Geography details to be added.', id: 'Detail geografi akan ditambahkan.' },
            governance: { en: 'Governance details to be added.', id: 'Detail tata kelola akan ditambahkan.' },
            facilities: { en: 'Facilities details to be added.', id: 'Detail fasilitas akan ditambahkan.' }
        },
        activities: { training: [], bmp: [], hcv: [], hse: [], businessDev: [], gedsi: [], sustainableStandards: [] }
    },
    'kopsa-tri-manunggal': {
        id: 'kopsa-tri-manunggal',
        slug: 'kopsa-tri-manunggal',
        name: 'Kopsa Tri Manunggal',
        district: 'kampar',
        established: 2014,
        legalStatus: { en: 'Cooperative', id: 'Koperasi' },
        assets: { logo: '', managementPhoto: '' },
        statistics: { totalFarmers: 160, landParcels: 190, totalAreaHa: 380, landTypes: { mineral: 380 } },
        gapoktan: [{ name: 'Tri Manunggal', members: 160 }],
        content: {
            history: { en: 'History details to be added.', id: 'Detail sejarah akan ditambahkan.' },
            geography: { en: 'Geography details to be added.', id: 'Detail geografi akan ditambahkan.' },
            governance: { en: 'Governance details to be added.', id: 'Detail tata kelola akan ditambahkan.' },
            facilities: { en: 'Facilities details to be added.', id: 'Detail fasilitas akan ditambahkan.' }
        },
        activities: { training: [], bmp: [], hcv: [], hse: [], businessDev: [], gedsi: [], sustainableStandards: [] }
    },
    'teratai-sawit-lestari': {
        id: 'teratai-sawit-lestari',
        slug: 'teratai-sawit-lestari',
        name: 'Teratai Sawit Lestari',
        district: 'kampar',
        established: 2019,
        legalStatus: { en: 'Group', id: 'Kelompok' },
        assets: { logo: '', managementPhoto: '' },
        statistics: { totalFarmers: 120, landParcels: 140, totalAreaHa: 280, landTypes: { mineral: 280 } },
        gapoktan: [{ name: 'Teratai Lestari', members: 120 }],
        content: {
            history: { en: 'History details to be added.', id: 'Detail sejarah akan ditambahkan.' },
            geography: { en: 'Geography details to be added.', id: 'Detail geografi akan ditambahkan.' },
            governance: { en: 'Governance details to be added.', id: 'Detail tata kelola akan ditambahkan.' },
            facilities: { en: 'Facilities details to be added.', id: 'Detail fasilitas akan ditambahkan.' }
        },
        activities: { training: [], bmp: [], hcv: [], hse: [], businessDev: [], gedsi: [], sustainableStandards: [] }
    },

    // Rokan Hulu Groups
    'kud-tujuh-permata': {
        id: 'kud-tujuh-permata',
        slug: 'kud-tujuh-permata',
        name: 'KUD Tujuh Permata',
        district: 'rohul',
        established: 2009,
        legalStatus: { en: 'Cooperative', id: 'Koperasi' },
        assets: { logo: '', managementPhoto: '' },
        statistics: { totalFarmers: 250, landParcels: 300, totalAreaHa: 600, landTypes: { mineral: 600 } },
        gapoktan: [{ name: 'Tujuh Permata', members: 250 }],
        content: {
            history: { en: 'History details to be added.', id: 'Detail sejarah akan ditambahkan.' },
            geography: { en: 'Geography details to be added.', id: 'Detail geografi akan ditambahkan.' },
            governance: { en: 'Governance details to be added.', id: 'Detail tata kelola akan ditambahkan.' },
            facilities: { en: 'Facilities details to be added.', id: 'Detail fasilitas akan ditambahkan.' }
        },
        activities: { training: [], bmp: [], hcv: [], hse: [], businessDev: [], gedsi: [], sustainableStandards: [] }
    },
    'kud-sawit-sejahtera': {
        id: 'kud-sawit-sejahtera',
        slug: 'kud-sawit-sejahtera',
        name: 'KUD Sawit Sejahtera',
        district: 'rohul',
        established: 2011,
        legalStatus: { en: 'Cooperative', id: 'Koperasi' },
        assets: { logo: '', managementPhoto: '' },
        statistics: { totalFarmers: 220, landParcels: 280, totalAreaHa: 550, landTypes: { mineral: 550 } },
        gapoktan: [{ name: 'Sawit Sejahtera', members: 220 }],
        content: {
            history: { en: 'History details to be added.', id: 'Detail sejarah akan ditambahkan.' },
            geography: { en: 'Geography details to be added.', id: 'Detail geografi akan ditambahkan.' },
            governance: { en: 'Governance details to be added.', id: 'Detail tata kelola akan ditambahkan.' },
            facilities: { en: 'Facilities details to be added.', id: 'Detail fasilitas akan ditambahkan.' }
        },
        activities: { training: [], bmp: [], hcv: [], hse: [], businessDev: [], gedsi: [], sustainableStandards: [] }
    },
    'fpss-semarak-mudo': {
        id: 'fpss-semarak-mudo',
        slug: 'fpss-semarak-mudo',
        name: 'FPSS Semarak Mudo',
        district: 'rohul',
        established: 2016,
        legalStatus: { en: 'Forum', id: 'Forum' },
        assets: { logo: '', managementPhoto: '' },
        statistics: { totalFarmers: 180, landParcels: 200, totalAreaHa: 400, landTypes: { mineral: 400 } },
        gapoktan: [{ name: 'Semarak Mudo', members: 180 }],
        content: {
            history: { en: 'History details to be added.', id: 'Detail sejarah akan ditambahkan.' },
            geography: { en: 'Geography details to be added.', id: 'Detail geografi akan ditambahkan.' },
            governance: { en: 'Governance details to be added.', id: 'Detail tata kelola akan ditambahkan.' },
            facilities: { en: 'Facilities details to be added.', id: 'Detail fasilitas akan ditambahkan.' }
        },
        activities: { training: [], bmp: [], hcv: [], hse: [], businessDev: [], gedsi: [], sustainableStandards: [] }
    },
    'ppks-tayo-barokah': {
        id: 'ppks-tayo-barokah',
        slug: 'ppks-tayo-barokah',
        name: 'PPKS Tayo Barokah',
        district: 'rohul',
        established: 2017,
        legalStatus: { en: 'Association', id: 'Asosiasi' },
        assets: { logo: '', managementPhoto: '' },
        statistics: { totalFarmers: 130, landParcels: 150, totalAreaHa: 300, landTypes: { mineral: 300 } },
        gapoktan: [{ name: 'Tayo Barokah', members: 130 }],
        content: {
            history: { en: 'History details to be added.', id: 'Detail sejarah akan ditambahkan.' },
            geography: { en: 'Geography details to be added.', id: 'Detail geografi akan ditambahkan.' },
            governance: { en: 'Governance details to be added.', id: 'Detail tata kelola akan ditambahkan.' },
            facilities: { en: 'Facilities details to be added.', id: 'Detail fasilitas akan ditambahkan.' }
        },
        activities: { training: [], bmp: [], hcv: [], hse: [], businessDev: [], gedsi: [], sustainableStandards: [] }
    },
    'apkasa-rayon-skpe': {
        id: 'apkasa-rayon-skpe',
        slug: 'apkasa-rayon-skpe',
        name: 'APKASA Rayon SKPE',
        district: 'rohul',
        established: 2015,
        legalStatus: { en: 'Association', id: 'Asosiasi' },
        assets: { logo: '', managementPhoto: '' },
        statistics: { totalFarmers: 140, landParcels: 160, totalAreaHa: 320, landTypes: { mineral: 320 } },
        gapoktan: [{ name: 'Rayon SKPE', members: 140 }],
        content: {
            history: { en: 'History details to be added.', id: 'Detail sejarah akan ditambahkan.' },
            geography: { en: 'Geography details to be added.', id: 'Detail geografi akan ditambahkan.' },
            governance: { en: 'Governance details to be added.', id: 'Detail tata kelola akan ditambahkan.' },
            facilities: { en: 'Facilities details to be added.', id: 'Detail fasilitas akan ditambahkan.' }
        },
        activities: { training: [], bmp: [], hcv: [], hse: [], businessDev: [], gedsi: [], sustainableStandards: [] }
    },
    'aspek-ras': {
        id: 'aspek-ras',
        slug: 'aspek-ras',
        name: 'ASPEK RAS',
        district: 'rohul',
        established: 2018,
        legalStatus: { en: 'Association', id: 'Asosiasi' },
        assets: { logo: '', managementPhoto: '' },
        statistics: { totalFarmers: 110, landParcels: 130, totalAreaHa: 260, landTypes: { mineral: 260 } },
        gapoktan: [{ name: 'ASPEK RAS', members: 110 }],
        content: {
            history: { en: 'History details to be added.', id: 'Detail sejarah akan ditambahkan.' },
            geography: { en: 'Geography details to be added.', id: 'Detail geografi akan ditambahkan.' },
            governance: { en: 'Governance details to be added.', id: 'Detail tata kelola akan ditambahkan.' },
            facilities: { en: 'Facilities details to be added.', id: 'Detail fasilitas akan ditambahkan.' }
        },
        activities: { training: [], bmp: [], hcv: [], hse: [], businessDev: [], gedsi: [], sustainableStandards: [] }
    },
    'aspek-rsb': {
        id: 'aspek-rsb',
        slug: 'aspek-rsb',
        name: 'ASPEK RSB',
        district: 'rohul',
        established: 2018,
        legalStatus: { en: 'Association', id: 'Asosiasi' },
        assets: { logo: '', managementPhoto: '' },
        statistics: { totalFarmers: 115, landParcels: 135, totalAreaHa: 270, landTypes: { mineral: 270 } },
        gapoktan: [{ name: 'ASPEK RSB', members: 115 }],
        content: {
            history: { en: 'History details to be added.', id: 'Detail sejarah akan ditambahkan.' },
            geography: { en: 'Geography details to be added.', id: 'Detail geografi akan ditambahkan.' },
            governance: { en: 'Governance details to be added.', id: 'Detail tata kelola akan ditambahkan.' },
            facilities: { en: 'Facilities details to be added.', id: 'Detail fasilitas akan ditambahkan.' }
        },
        activities: { training: [], bmp: [], hcv: [], hse: [], businessDev: [], gedsi: [], sustainableStandards: [] }
    },
    'aspek-kre': {
        id: 'aspek-kre',
        slug: 'aspek-kre',
        name: 'ASPEK KRE',
        district: 'rohul',
        established: 2019,
        legalStatus: { en: 'Association', id: 'Asosiasi' },
        assets: { logo: '', managementPhoto: '' },
        statistics: { totalFarmers: 105, landParcels: 125, totalAreaHa: 250, landTypes: { mineral: 250 } },
        gapoktan: [{ name: 'ASPEK KRE', members: 105 }],
        content: {
            history: { en: 'History details to be added.', id: 'Detail sejarah akan ditambahkan.' },
            geography: { en: 'Geography details to be added.', id: 'Detail geografi akan ditambahkan.' },
            governance: { en: 'Governance details to be added.', id: 'Detail tata kelola akan ditambahkan.' },
            facilities: { en: 'Facilities details to be added.', id: 'Detail fasilitas akan ditambahkan.' }
        },
        activities: { training: [], bmp: [], hcv: [], hse: [], businessDev: [], gedsi: [], sustainableStandards: [] }
    },
    'citra-gemilang': {
        id: 'citra-gemilang',
        slug: 'citra-gemilang',
        name: 'Citra Gemilang',
        district: 'rohul',
        established: 2014,
        legalStatus: { en: 'Group', id: 'Kelompok' },
        assets: { logo: '', managementPhoto: '' },
        statistics: { totalFarmers: 170, landParcels: 210, totalAreaHa: 420, landTypes: { mineral: 420 } },
        gapoktan: [{ name: 'Citra Gemilang', members: 170 }],
        content: {
            history: { en: 'History details to be added.', id: 'Detail sejarah akan ditambahkan.' },
            geography: { en: 'Geography details to be added.', id: 'Detail geografi akan ditambahkan.' },
            governance: { en: 'Governance details to be added.', id: 'Detail tata kelola akan ditambahkan.' },
            facilities: { en: 'Facilities details to be added.', id: 'Detail fasilitas akan ditambahkan.' }
        },
        activities: { training: [], bmp: [], hcv: [], hse: [], businessDev: [], gedsi: [], sustainableStandards: [] }
    },

    // Siak Groups
    'apkasdu': {
        id: 'apkasdu',
        slug: 'apkasdu',
        name: 'APKASDU',
        district: 'siak',
        established: 2017,
        legalStatus: { en: 'Association', id: 'Asosiasi' },
        assets: { logo: '', managementPhoto: '' },
        statistics: { totalFarmers: 190, landParcels: 230, totalAreaHa: 460, landTypes: { mineral: 460 } },
        gapoktan: [{ name: 'APKASDU', members: 190 }],
        content: {
            history: { en: 'History details to be added.', id: 'Detail sejarah akan ditambahkan.' },
            geography: { en: 'Geography details to be added.', id: 'Detail geografi akan ditambahkan.' },
            governance: { en: 'Governance details to be added.', id: 'Detail tata kelola akan ditambahkan.' },
            facilities: { en: 'Facilities details to be added.', id: 'Detail fasilitas akan ditambahkan.' }
        },
        activities: { training: [], bmp: [], hcv: [], hse: [], businessDev: [], gedsi: [], sustainableStandards: [] }
    },
    'apksmb': {
        id: 'apksmb',
        slug: 'apksmb',
        name: 'APKSMB',
        district: 'siak',
        established: 2016,
        legalStatus: { en: 'Association', id: 'Asosiasi' },
        assets: { logo: '', managementPhoto: '' },
        statistics: { totalFarmers: 185, landParcels: 225, totalAreaHa: 450, landTypes: { mineral: 450 } },
        gapoktan: [{ name: 'APKSMB', members: 185 }],
        content: {
            history: { en: 'History details to be added.', id: 'Detail sejarah akan ditambahkan.' },
            geography: { en: 'Geography details to be added.', id: 'Detail geografi akan ditambahkan.' },
            governance: { en: 'Governance details to be added.', id: 'Detail tata kelola akan ditambahkan.' },
            facilities: { en: 'Facilities details to be added.', id: 'Detail fasilitas akan ditambahkan.' }
        },
        activities: { training: [], bmp: [], hcv: [], hse: [], businessDev: [], gedsi: [], sustainableStandards: [] }
    },
    'asermisas': {
        id: 'asermisas',
        slug: 'asermisas',
        name: 'ASERMISAS',
        district: 'siak',
        established: 2018,
        legalStatus: { en: 'Association', id: 'Asosiasi' },
        assets: { logo: '', managementPhoto: '' },
        statistics: { totalFarmers: 165, landParcels: 200, totalAreaHa: 400, landTypes: { mineral: 400 } },
        gapoktan: [{ name: 'ASERMISAS', members: 165 }],
        content: {
            history: { en: 'History details to be added.', id: 'Detail sejarah akan ditambahkan.' },
            geography: { en: 'Geography details to be added.', id: 'Detail geografi akan ditambahkan.' },
            governance: { en: 'Governance details to be added.', id: 'Detail tata kelola akan ditambahkan.' },
            facilities: { en: 'Facilities details to be added.', id: 'Detail fasilitas akan ditambahkan.' }
        },
        activities: { training: [], bmp: [], hcv: [], hse: [], businessDev: [], gedsi: [], sustainableStandards: [] }
    },
    'apkssb': {
        id: 'apkssb',
        slug: 'apkssb',
        name: 'APKSSB',
        district: 'siak',
        established: 2017,
        legalStatus: { en: 'Association', id: 'Asosiasi' },
        assets: { logo: '', managementPhoto: '' },
        statistics: { totalFarmers: 175, landParcels: 215, totalAreaHa: 430, landTypes: { mineral: 430 } },
        gapoktan: [{ name: 'APKSSB', members: 175 }],
        content: {
            history: { en: 'History details to be added.', id: 'Detail sejarah akan ditambahkan.' },
            geography: { en: 'Geography details to be added.', id: 'Detail geografi akan ditambahkan.' },
            governance: { en: 'Governance details to be added.', id: 'Detail tata kelola akan ditambahkan.' },
            facilities: { en: 'Facilities details to be added.', id: 'Detail fasilitas akan ditambahkan.' }
        },
        activities: { training: [], bmp: [], hcv: [], hse: [], businessDev: [], gedsi: [], sustainableStandards: [] }
    },
    'apkasaiber': {
        id: 'apkasaiber',
        slug: 'apkasaiber',
        name: 'APKASAIBER',
        district: 'siak',
        established: 2019,
        legalStatus: { en: 'Association', id: 'Asosiasi' },
        assets: { logo: '', managementPhoto: '' },
        statistics: { totalFarmers: 145, landParcels: 175, totalAreaHa: 350, landTypes: { mineral: 350 } },
        gapoktan: [{ name: 'APKASAIBER', members: 145 }],
        content: {
            history: { en: 'History details to be added.', id: 'Detail sejarah akan ditambahkan.' },
            geography: { en: 'Geography details to be added.', id: 'Detail geografi akan ditambahkan.' },
            governance: { en: 'Governance details to be added.', id: 'Detail tata kelola akan ditambahkan.' },
            facilities: { en: 'Facilities details to be added.', id: 'Detail fasilitas akan ditambahkan.' }
        },
        activities: { training: [], bmp: [], hcv: [], hse: [], businessDev: [], gedsi: [], sustainableStandards: [] }
    },
    'aspeksab': {
        id: 'aspeksab',
        slug: 'aspeksab',
        name: 'ASPEKSAB',
        district: 'siak',
        established: 2018,
        legalStatus: { en: 'Association', id: 'Asosiasi' },
        assets: { logo: '', managementPhoto: '' },
        statistics: { totalFarmers: 155, landParcels: 190, totalAreaHa: 380, landTypes: { mineral: 380 } },
        gapoktan: [{ name: 'ASPEKSAB', members: 155 }],
        content: {
            history: { en: 'History details to be added.', id: 'Detail sejarah akan ditambahkan.' },
            geography: { en: 'Geography details to be added.', id: 'Detail geografi akan ditambahkan.' },
            governance: { en: 'Governance details to be added.', id: 'Detail tata kelola akan ditambahkan.' },
            facilities: { en: 'Facilities details to be added.', id: 'Detail fasilitas akan ditambahkan.' }
        },
        activities: { training: [], bmp: [], hcv: [], hse: [], businessDev: [], gedsi: [], sustainableStandards: [] }
    },
    'kp-pksj': {
        id: 'kp-pksj',
        slug: 'kp-pksj',
        name: 'KP PKSJ',
        district: 'siak',
        established: 2015,
        legalStatus: { en: 'Cooperative', id: 'Koperasi' },
        assets: { logo: '', managementPhoto: '' },
        statistics: { totalFarmers: 200, landParcels: 250, totalAreaHa: 500, landTypes: { mineral: 500 } },
        gapoktan: [{ name: 'PKSJ', members: 200 }],
        content: {
            history: { en: 'History details to be added.', id: 'Detail sejarah akan ditambahkan.' },
            geography: { en: 'Geography details to be added.', id: 'Detail geografi akan ditambahkan.' },
            governance: { en: 'Governance details to be added.', id: 'Detail tata kelola akan ditambahkan.' },
            facilities: { en: 'Facilities details to be added.', id: 'Detail fasilitas akan ditambahkan.' }
        },
        activities: { training: [], bmp: [], hcv: [], hse: [], businessDev: [], gedsi: [], sustainableStandards: [] }
    },
    'kbj': {
        id: 'kbj',
        slug: 'kbj',
        name: 'KBJ',
        district: 'siak',
        established: 2016,
        legalStatus: { en: 'Group', id: 'Kelompok' },
        assets: { logo: '', managementPhoto: '' },
        statistics: { totalFarmers: 160, landParcels: 190, totalAreaHa: 380, landTypes: { mineral: 380 } },
        gapoktan: [{ name: 'KBJ', members: 160 }],
        content: {
            history: { en: 'History details to be added.', id: 'Detail sejarah akan ditambahkan.' },
            geography: { en: 'Geography details to be added.', id: 'Detail geografi akan ditambahkan.' },
            governance: { en: 'Governance details to be added.', id: 'Detail tata kelola akan ditambahkan.' },
            facilities: { en: 'Facilities details to be added.', id: 'Detail fasilitas akan ditambahkan.' }
        },
        activities: { training: [], bmp: [], hcv: [], hse: [], businessDev: [], gedsi: [], sustainableStandards: [] }
    },
    'ksj': {
        id: 'ksj',
        slug: 'ksj',
        name: 'KSJ',
        district: 'siak',
        established: 2017,
        legalStatus: { en: 'Group', id: 'Kelompok' },
        assets: { logo: '', managementPhoto: '' },
        statistics: { totalFarmers: 150, landParcels: 180, totalAreaHa: 360, landTypes: { mineral: 360 } },
        gapoktan: [{ name: 'KSJ', members: 150 }],
        content: {
            history: { en: 'History details to be added.', id: 'Detail sejarah akan ditambahkan.' },
            geography: { en: 'Geography details to be added.', id: 'Detail geografi akan ditambahkan.' },
            governance: { en: 'Governance details to be added.', id: 'Detail tata kelola akan ditambahkan.' },
            facilities: { en: 'Facilities details to be added.', id: 'Detail fasilitas akan ditambahkan.' }
        },
        activities: { training: [], bmp: [], hcv: [], hse: [], businessDev: [], gedsi: [], sustainableStandards: [] }
    },
};
