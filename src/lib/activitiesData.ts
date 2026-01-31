// Activity Data Structure - CMS Ready
// This file contains sample activity data organized by category

export interface Activity {
    id: string;
    slug: string;
    category: 'training' | 'bmp' | 'hse' | 'hcv' | 'businessDev' | 'gedsi';
    trainingPackage?: 'bmp-rspo-hcv' | 'mk' | 'hse' | 'gedsi-finlit-busdev-altliv';
    title: { en: string; id: string };
    excerpt: { en: string; id: string };
    content: { en: string; id: string };
    coverImage: string;
    gallery: string[];
    date: string;
    location: string;
    district?: 'kampar' | 'rohul' | 'siak' | 'pelalawan';
    participants?: number;
    facilitator?: string;
    duration?: string; // e.g., "2 days", "1 week"
    tags: string[];
    relatedGroups?: string[]; // farmer group IDs
}

// Training Activities - 4 Packages, 2 items each = 8 total
const trainingActivities: Activity[] = [
    // Package 1: BMP, P&C RSPO, HCV (2 items)
    {
        id: 't-001',
        slug: 'best-management-practices-oil-palm-kampar',
        category: 'training',
        trainingPackage: 'bmp-rspo-hcv',
        title: {
            en: 'Best Management Practices for Sustainable Oil Palm',
            id: 'Praktik Pengelolaan Terbaik untuk Kelapa Sawit Berkelanjutan'
        },
        excerpt: {
            en: 'Comprehensive training covering production, fertilization, pest management, pruning, and harvesting best practices.',
            id: 'Pelatihan komprehensif mencakup produksi, pemupukan, pengelolaan hama, pruning, dan praktik panen terbaik.'
        },
        content: {
            en: 'This intensive training program covered six critical BMP topics: Production optimization, Land clearing (Pembabatan), Fertilization management (Pemupukan), Integrated Pest Management - HPT, Pruning techniques, and Harvesting best practices. Farmers learned sustainable methods to increase productivity while protecting the environment.',
            id: 'Program pelatihan intensif ini mencakup enam topik BMP kritis: Optimalisasi produksi, Pembabatan lahan, Manajemen pemupukan, Pengelolaan Hama Terpadu (HPT), Teknik pruning, dan Praktik panen terbaik. Para petani mempelajari metode berkelanjutan untuk meningkatkan produktivitas sambil melindungi lingkungan.'
        },
        coverImage: '/images/activities/training/bmp-training.jpg',
        gallery: [],
        date: '2024-11-15',
        location: 'Kampar',
        district: 'kampar',
        participants: 45,
        facilitator: 'PT. Sinar Mas Agro Resources and Technology (SMART) Tbk',
        duration: '3 days',
        tags: ['BMP', 'Produksi', 'Pemupukan', 'HPT', 'Pruning', 'Panen'],
        relatedGroups: ['fps-sei-garo', 'kp-kusuma-bakti']
    },
    {
        id: 't-002',
        slug: 'rspo-principles-criteria-hcv-training',
        category: 'training',
        trainingPackage: 'bmp-rspo-hcv',
        title: {
            en: 'RSPO Principles & Criteria and HCV Assessment Training',
            id: 'Pelatihan Prinsip & Kriteria RSPO dan Penilaian HCV'
        },
        excerpt: {
            en: 'Training on RSPO certification requirements and High Conservation Value area identification and protection.',
            id: 'Pelatihan tentang persyaratan sertifikasi RSPO dan identifikasi serta perlindungan area Nilai Konservasi Tinggi (HCV).'
        },
        content: {
            en: 'Participants learned the RSPO Principles and Criteria for sustainable palm oil production, including environmental protection, social responsibility, and economic viability. The training also covered HCV identification methodologies, conservation strategies, and compliance requirements for certification.',
            id: 'Peserta mempelajari Prinsip dan Kriteria RSPO untuk produksi minyak sawit berkelanjutan, termasuk perlindungan lingkungan, tanggung jawab sosial, dan kelayakan ekonomi. Pelatihan juga mencakup metodologi identifikasi HCV, strategi konservasi, dan persyaratan kepatuhan untuk sertifikasi.'
        },
        coverImage: '/images/activities/training/rspo-hcv-training.jpg',
        gallery: [],
        date: '2024-10-20',
        location: 'Rokan Hulu',
        district: 'rohul',
        participants: 38,
        facilitator: 'RSPO Indonesia & WRI Indonesia',
        duration: '2 days',
        tags: ['RSPO', 'HCV', 'Certification', 'Conservation'],
        relatedGroups: ['kud-intan-makmur']
    },

    // Package 2: MK - Manajemen Kelompok (2 items)
    {
        id: 't-003',
        slug: 'farmer-group-governance-management-training',
        category: 'training',
        trainingPackage: 'mk',
        title: {
            en: 'Farmer Group Governance and Management',
            id: 'Tata Kelola dan Manajemen Kelompok Tani'
        },
        excerpt: {
            en: 'Strengthening organizational structure, leadership skills, and decision-making processes in farmer groups.',
            id: 'Memperkuat struktur organisasi, keterampilan kepemimpinan, dan proses pengambilan keputusan dalam kelompok tani.'
        },
        content: {
            en: 'This training focused on improving farmer group management through effective governance structures, transparent financial management, participatory decision-making, and conflict resolution. Leaders and members learned best practices for running efficient and democratic organizations.',
            id: 'Pelatihan ini berfokus pada peningkatan manajemen kelompok tani melalui struktur tata kelola yang efektif, manajemen keuangan yang transparan, pengambilan keputusan partisipatif, dan penyelesaian konflik. Para pemimpin dan anggota mempelajari praktik terbaik untuk menjalankan organisasi yang efisien dan demokratis.'
        },
        coverImage: '/images/activities/training/group-management.jpg',
        gallery: [],
        date: '2024-09-10',
        location: 'Siak',
        district: 'siak',
        participants: 30,
        facilitator: 'Dinas Pertanian Provinsi Riau',
        duration: '2 days',
        tags: ['Manajemen Kelompok', 'Governance', 'Leadership', 'Organization'],
        relatedGroups: ['kpm-karya-maju']
    },
    {
        id: 't-004',
        slug: 'cooperative-administration-financial-record-keeping',
        category: 'training',
        trainingPackage: 'mk',
        title: {
            en: 'Cooperative Administration and Financial Record Keeping',
            id: 'Administrasi Koperasi dan Pembukuan Keuangan'
        },
        excerpt: {
            en: 'Training on proper bookkeeping, financial reporting, and administrative procedures for farmer cooperatives.',
            id: 'Pelatihan tentang pembukuan yang tepat, pelaporan keuangan, dan prosedur administrasi untuk koperasi petani.'
        },
        content: {
            en: 'Participants learned essential skills in maintaining accurate financial records, preparing annual reports, managing cooperative assets, and ensuring compliance with legal requirements. The training included practical exercises using simple accounting software and manual bookkeeping systems.',
            id: 'Peserta mempelajari keterampilan penting dalam memelihara catatan keuangan yang akurat, menyiapkan laporan tahunan, mengelola aset koperasi, dan memastikan kepatuhan terhadap persyaratan hukum. Pelatihan mencakup latihan praktis menggunakan software akuntansi sederhana dan sistem pembukuan manual.'
        },
        coverImage: '/images/activities/training/financial-admin.jpg',
        gallery: [],
        date: '2024-08-25',
        location: 'Kampar',
        district: 'kampar',
        participants: 25,
        facilitator: 'Kementerian Koperasi dan UKM',
        duration: '3 days',
        tags: ['Administrasi', 'Keuangan', 'Pembukuan', 'Koperasi'],
        relatedGroups: ['kud-karya-sembada', 'kud-hasrat-jaya']
    },

    // Package 3: HSE / K3 (2 items)
    {
        id: 't-005',
        slug: 'occupational-health-safety-plantation-workers',
        category: 'training',
        trainingPackage: 'hse',
        title: {
            en: 'Occupational Health and Safety for Plantation Workers',
            id: 'Kesehatan dan Keselamatan Kerja untuk Pekerja Perkebunan'
        },
        excerpt: {
            en: 'Comprehensive K3 training covering safe working practices, personal protective equipment, and emergency response.',
            id: 'Pelatihan K3 komprehensif mencakup praktik kerja aman, alat pelindung diri, dan tanggap darurat.'
        },
        content: {
            en: 'Workers learned critical safety protocols including proper use of PPE, safe handling of tools and equipment, chemical safety, ergonomic work practices, and emergency first aid. The training emphasized prevention of common plantation injuries and occupational health hazards.',
            id: 'Pekerja mempelajari protokol keselamatan kritis termasuk penggunaan APD yang tepat, penanganan alat dan peralatan yang aman, keselamatan kimia, praktik kerja ergonomis, dan pertolongan pertama darurat. Pelatihan menekankan pencegahan cedera perkebunan umum dan bahaya kesehatan kerja.'
        },
        coverImage: '/images/activities/training/hse-safety.jpg',
        gallery: [],
        date: '2024-11-01',
        location: 'Pelalawan',
        district: 'pelalawan',
        participants: 50,
        facilitator: 'PT. Astra Agro Lestari & WRI Indonesia',
        duration: '1 day',
        tags: ['K3', 'HSE', 'Safety', 'Health', 'PPE'],
        relatedGroups: ['kud-mulia']
    },
    {
        id: 't-006',
        slug: 'fire-prevention-peatland-management',
        category: 'training',
        trainingPackage: 'hse',
        title: {
            en: 'Fire Prevention and Peatland Management',
            id: 'Pencegahan Kebakaran dan Pengelolaan Lahan Gambut'
        },
        excerpt: {
            en: 'Training on fire risk assessment, prevention strategies, and sustainable peatland management practices.',
            id: 'Pelatihan tentang penilaian risiko kebakaran, strategi pencegahan, dan praktik pengelolaan lahan gambut berkelanjutan.'
        },
        content: {
            en: 'This critical training addressed fire prevention in peat areas, including water table management, creating fire breaks, early warning systems, and community fire brigades. Participants learned sustainable peatland cultivation techniques that reduce fire risk while maintaining productivity.',
            id: 'Pelatihan kritis ini membahas pencegahan kebakaran di lahan gambut, termasuk manajemen muka air tanah, pembuatan sekat bakar, sistem peringatan dini, dan brigade kebakaran komunitas. Peserta mempelajari teknik budidaya lahan gambut berkelanjutan yang mengurangi risiko kebakaran sambil mempertahankan produktivitas.'
        },
        coverImage: '/images/activities/training/fire-prevention.jpg',
        gallery: [],
        date: '2024-07-18',
        location: 'Siak',
        district: 'siak',
        participants: 42,
        facilitator: 'BPBD Riau & WRI Indonesia',
        duration: '2 days',
        tags: ['Fire Prevention', 'Peatland', 'HSE', 'Environment'],
        relatedGroups: ['kpm-karya-maju']
    },

    // Package 4: GEDSI, Financial Literacy, Business Development, Alternative Livelihood (2 items)
    {
        id: 't-007',
        slug: 'gender-equality-social-inclusion-agriculture',
        category: 'training',
        trainingPackage: 'gedsi-finlit-busdev-altliv',
        title: {
            en: 'Gender Equality and Social Inclusion in Agriculture',
            id: 'Kesetaraan Gender dan Inklusi Sosial dalam Pertanian'
        },
        excerpt: {
            en: 'GEDSI training promoting equal participation, decision-making rights, and economic opportunities for women and marginalized groups.',
            id: 'Pelatihan GEDSI mempromosikan partisipasi setara, hak pengambilan keputusan, dan peluang ekonomi bagi perempuan dan kelompok marginal.'
        },
        content: {
            en: 'Participants explored gender roles in agriculture, women\'s economic empowerment, disability inclusion, and strategies to ensure all community members can participate equally in farmer group activities and benefit fairly from programs. The training included action planning for more inclusive group governance.',
            id: 'Peserta mengeksplorasi peran gender dalam pertanian, pemberdayaan ekonomi perempuan, inklusi disabilitas, dan strategi untuk memastikan semua anggota komunitas dapat berpartisipasi setara dalam kegiatan kelompok tani dan mendapat manfaat yang adil dari program. Pelatihan mencakup perencanaan aksi untuk tata kelola kelompok yang lebih inklusif.'
        },
        coverImage: '/images/activities/training/gedsi.jpg',
        gallery: [],
        date: '2024-10-05',
        location: 'Rokan Hulu',
        district: 'rohul',
        participants: 35,
        facilitator: 'UN Women & WRI Indonesia',
        duration: '2 days',
        tags: ['GEDSI', 'Gender', 'Inclusion', 'Women Empowerment'],
        relatedGroups: ['kud-tujuh-permata']
    },
    {
        id: 't-008',
        slug: 'financial-literacy-business-development-alternative-livelihood',
        category: 'training',
        trainingPackage: 'gedsi-finlit-busdev-altliv',
        title: {
            en: 'Financial Literacy, Business Development & Alternative Livelihoods',
            id: 'Literasi Keuangan, Pengembangan Bisnis & Mata Pencaharian Alternatif'
        },
        excerpt: {
            en: 'Integrated training on financial management, entrepreneurship, market access, and income diversification strategies.',
            id: 'Pelatihan terintegrasi tentang manajemen keuangan, kewirausahaan, akses pasar, dan strategi diversifikasi pendapatan.'
        },
        content: {
            en: 'This comprehensive training covered household financial planning, savings and credit management, business opportunity identification, value-added processing, and alternative livelihood options such as agroforestry, fisheries, and cottage industries. Farmers developed business plans for income diversification beyond oil palm.',
            id: 'Pelatihan komprehensif ini mencakup perencanaan keuangan rumah tangga, manajemen tabungan dan kredit, identifikasi peluang bisnis, pengolahan nilai tambah, dan pilihan mata pencaharian alternatif seperti agroforestri, perikanan, dan industri rumah tangga. Para petani mengembangkan rencana bisnis untuk diversifikasi pendapatan di luar kelapa sawit.'
        },
        coverImage: '/images/activities/training/financial-literacy.jpg',
        gallery: [],
        date: '2024-09-22',
        location: 'Kampar',
        district: 'kampar',
        participants: 40,
        facilitator: 'Bank Indonesia & LPDB-KUMKM',
        duration: '3 days',
        tags: ['Financial Literacy', 'Business Development', 'Entrepreneurship', 'Alternative Livelihood'],
        relatedGroups: ['fps-sei-garo', 'kud-karya-sembada']
    }
];

// BMP Activities - 6 topics (Produksi, Pembabatan, Pemupukan, HPT, Pruning, Panen)
const bmpActivities: Activity[] = [
    {
        id: 'b-001',
        slug: 'sustainable-production-optimization-workshop',
        category: 'bmp',
        title: {
            en: 'Sustainable Production Optimization Workshop',
            id: 'Workshop Optimalisasi Produksi Berkelanjutan'
        },
        excerpt: {
            en: 'Hands-on workshop on maximizing oil palm yield through sustainable production techniques.',
            id: 'Workshop praktis tentang memaksimalkan hasil kelapa sawit melalui teknik produksi berkelanjutan.'
        },
        content: {
            en: 'Farmers participated in field demonstrations of production optimization techniques including proper planting density, soil health management, and integrated nutrient management to increase yields sustainably.',
            id: 'Para petani berpartisipasi dalam demonstrasi lapangan teknik optimalisasi produksi termasuk kepadatan tanam yang tepat, manajemen kesehatan tanah, dan manajemen nutrisi terpadu untuk meningkatkan hasil secara berkelanjutan.'
        },
        coverImage: '/images/activities/bmp/production.jpg',
        gallery: [],
        date: '2024-08-12',
        location: 'Kampar',
        district: 'kampar',
        participants: 28,
        duration: '1 day',
        tags: ['BMP', 'Produksi', 'Optimization'],
        relatedGroups: ['kp-kusuma-bakti']
    },
    {
        id: 'b-002',
        slug: 'proper-land-clearing-techniques-pembabatan',
        category: 'bmp',
        title: {
            en: 'Proper Land Clearing Techniques (Pembabatan)',
            id: 'Teknik Pembabatan Lahan yang Tepat'
        },
        excerpt: {
            en: 'Training on environmentally responsible land clearing methods without burning.',
            id: 'Pelatihan tentang metode pembabatan lahan yang bertanggung jawab terhadap lingkungan tanpa pembakaran.'
        },
        content: {
            en: 'Participants learned zero-burning land clearing techniques, organic matter management, and equipment operation to prepare land sustainably while preserving soil health and complying with environmental regulations.',
            id: 'Peserta mempelajari teknik pembabatan tanpa bakar, manajemen bahan organik, dan operasi peralatan untuk menyiapkan lahan secara berkelanjutan sambil menjaga kesehatan tanah dan mematuhi peraturan lingkungan.'
        },
        coverImage: '/images/activities/bmp/land-clearing.jpg',
        gallery: [],
        date: '2024-07-05',
        location: 'Rokan Hulu',
        district: 'rohul',
        participants: 22,
        duration: '1 day',
        tags: ['BMP', 'Pembabatan', 'Land Clearing'],
        relatedGroups: ['kud-intan-makmur']
    },
    {
        id: 'b-003',
        slug: 'integrated-fertilization-management-pemupukan',
        category: 'bmp',
        title: {
            en: 'Integrated Fertilization Management (Pemupukan)',
            id: 'Manajemen Pemupukan Terpadu'
        },
        excerpt: {
            en: 'Training on optimal fertilizer application based on soil analysis and palm nutritional needs.',
            id: 'Pelatihan tentang aplikasi pupuk optimal berdasarkan analisis tanah dan kebutuhan nutrisi sawit.'
        },
        content: {
            en: 'This training covered soil testing interpretation, calculating fertilizer requirements, application timing and methods, and using organic amendments to improve soil fertility and reduce chemical inputs.',
            id: 'Pelatihan ini mencakup interpretasi tes tanah, menghitung kebutuhan pupuk, waktu dan metode aplikasi, serta menggunakan bahan organik untuk meningkatkan kesuburan tanah dan mengurangi input kimia.'
        },
        coverImage: '/images/activities/bmp/fertilization.jpg',
        gallery: [],
        date: '2024-09-14',
        location: 'Siak',
        district: 'siak',
        participants: 32,
        duration: '2 days',
        tags: ['BMP', 'Pemupukan', 'Fertilization'],
        relatedGroups: ['kpm-karya-maju']
    },
    {
        id: 'b-004',
        slug: 'integrated-pest-management-hpt',
        category: 'bmp',
        title: {
            en: 'Integrated Pest Management (HPT)',
            id: 'Pengelolaan Hama Terpadu (HPT)'
        },
        excerpt: {
            en: 'IPM training for sustainable pest control using biological and cultural methods.',
            id: 'Pelatihan PHT untuk pengendalian hama berkelanjutan menggunakan metode biologis dan budidaya.'
        },
        content: {
            en: 'Farmers learned to identify common oil palm pests and diseases, implement preventive cultural practices, use biological control agents, and apply pesticides only as a last resort following IPM principles.',
            id: 'Para petani belajar mengidentifikasi hama dan penyakit kelapa sawit umum, menerapkan praktik budidaya preventif, menggunakan agen pengendalian biologis, dan menerapkan pestisida hanya sebagai pilihan terakhir mengikuti prinsip PHT.'
        },
        coverImage: '/images/activities/bmp/pest-management.jpg',
        gallery: [],
        date: '2024-10-18',
        location: 'Pelalawan',
        district: 'pelalawan',
        participants: 26,
        duration: '2 days',
        tags: ['BMP', 'HPT', 'Pest Management', 'IPM'],
        relatedGroups: ['kud-mulia']
    },
    {
        id: 'b-005',
        slug: 'proper-pruning-techniques-training',
        category: 'bmp',
        title: {
            en: 'Proper Pruning Techniques Training',
            id: 'Pelatihan Teknik Pruning yang Tepat'
        },
        excerpt: {
            en: 'Field training on correct pruning methods to optimize palm health and productivity.',
            id: 'Pelatihan lapangan tentang metode pruning yang benar untuk mengoptimalkan kesehatan dan produktivitas sawit.'
        },
        content: {
            en: 'This practical field session taught participants when and how to prune oil palms, including frond removal schedules, proper cutting angles, tool maintenance, and safety procedures to improve light penetration and fruit access.',
            id: 'Sesi lapangan praktis ini mengajarkan peserta kapan dan bagaimana melakukan pruning kelapa sawit, termasuk jadwal pembuangan pelepah, sudut pemotongan yang tepat, perawatan alat, dan prosedur keselamatan untuk meningkatkan penetrasi cahaya dan akses buah.'
        },
        coverImage: '/images/activities/bmp/pruning.jpg',
        gallery: [],
        date: '2024-08-30',
        location: 'Kampar',
        district: 'kampar',
        participants: 35,
        duration: '1 day',
        tags: ['BMP', 'Pruning', 'Field Training'],
        relatedGroups: ['fps-sei-garo']
    },
    {
        id: 'b-006',
        slug: 'best-harvesting-practices-training-panen',
        category: 'bmp',
        title: {
            en: 'Best Harvesting Practices Training (Panen)',
            id: 'Pelatihan Praktik Panen Terbaik'
        },
        excerpt: {
            en: 'Training on optimal harvest timing, techniques, and post-harvest handling for quality FFB.',
            id: 'Pelatihan tentang waktu panen optimal, teknik, dan penanganan pasca panen untuk TBS berkualitas.'
        },
        content: {
            en: 'Participants learned to identify fruit ripeness, use proper harvesting tools and techniques, minimize fruit damage, and follow post-harvest protocols to deliver high-quality Fresh Fruit Bunches (FFB) and receive premium prices.',
            id: 'Peserta belajar mengidentifikasi kematangan buah, menggunakan alat dan teknik panen yang tepat, meminimalkan kerusakan buah, dan mengikuti protokol pasca panen untuk menghasilkan Tandan Buah Segar (TBS) berkualitas tinggi dan menerima harga premium.'
        },
        coverImage: '/images/activities/bmp/harvesting.jpg',
        gallery: [],
        date: '2024-11-08',
        location: 'Rokan Hulu',
        district: 'rohul',
        participants: 30,
        duration: '1 day',
        tags: ['BMP', 'Panen', 'Harvesting', 'FFB'],
        relatedGroups: ['kud-tujuh-permata']
    }
];

// HCV Activities
const hcvActivities: Activity[] = [
    {
        id: 'h-001',
        slug: 'hcv-area-identification-mapping-workshop',
        category: 'hcv',
        title: {
            en: 'HCV Area Identification and Mapping Workshop',
            id: 'Workshop Identifikasi dan Pemetaan Area HCV'
        },
        excerpt: {
            en: 'Participatory workshop on identifying and mapping High Conservation Value areas.',
            id: 'Workshop partisipatif tentang identifikasi dan pemetaan area Nilai Konservasi Tinggi.'
        },
        content: {
            en: 'Community members learned HCV assessment methodologies, participated in field surveys to identify biodiversity hotspots, water catchment areas, and culturally significant sites, and helped create conservation management plans.',
            id: 'Anggota komunitas mempelajari metodologi penilaian HCV, berpartisipasi dalam survei lapangan untuk mengidentifikasi hotspot keanekaragaman hayati, area tangkapan air, dan situs yang signifikan secara budaya, serta membantu membuat rencana manajemen konservasi.'
        },
        coverImage: '/images/activities/hcv/mapping.jpg',
        gallery: [],
        date: '2024-06-20',
        location: 'Pelalawan',
        district: 'pelalawan',
        participants: 24,
        duration: '3 days',
        tags: ['HCV', 'Conservation', 'Mapping', 'Biodiversity'],
        relatedGroups: ['kud-mulia']
    },
    {
        id: 'h-002',
        slug: 'hcv-protection-monitoring-training',
        category: 'hcv',
        title: {
            en: 'HCV Protection and Monitoring Training',
            id: 'Pelatihan Perlindungan dan Pemantauan HCV'
        },
        excerpt: {
            en: 'Training on establishing protection measures and monitoring systems for HCV areas.',
            id: 'Pelatihan tentang penetapan langkah perlindungan dan sistem pemantauan untuk area HCV.'
        },
        content: {
            en: 'Participants developed skills in setting up buffer zones, creating patrol schedules, documenting threats, and reporting mechanisms to ensure long-term protection of identified HCV areas.',
            id: 'Peserta mengembangkan keterampilan dalam menetapkan zona penyangga, membuat jadwal patroli, mendokumentasikan ancaman, dan mekanisme pelaporan untuk memastikan perlindungan jangka panjang area HCV yang teridentifikasi.'
        },
        coverImage: '/images/activities/hcv/protection.jpg',
        gallery: [],
        date: '2024-07-12',
        location: 'Siak',
        district: 'siak',
        participants: 20,
        duration: '2 days',
        tags: ['HCV', 'Conservation', 'Monitoring', 'Protection'],
        relatedGroups: ['kpm-karya-maju']
    }
];

// HSE Activities
const hseActivities: Activity[] = [
    {
        id: 's-001',
        slug: 'chemical-safety-handling-training',
        category: 'hse',
        title: {
            en: 'Chemical Safety and Handling Training',
            id: 'Pelatihan Keselamatan dan Penanganan Bahan Kimia'
        },
        excerpt: {
            en: 'Training on safe storage, handling, and application of agricultural chemicals.',
            id: 'Pelatihan tentang penyimpanan, penanganan, dan aplikasi bahan kimia pertanian yang aman.'
        },
        content: {
            en: 'Workers learned proper chemical storage procedures, PPE requirements, safe mixing and application techniques, disposal of empty containers, and emergency response for chemical exposure incidents.',
            id: 'Pekerja mempelajari prosedur penyimpanan bahan kimia yang tepat, persyaratan APD, teknik pencampuran dan aplikasi yang aman, pembuangan wadah kosong, dan respons darurat untuk insiden paparan bahan kimia.'
        },
        coverImage: '/images/activities/hse/chemical-safety.jpg',
        gallery: [],
        date: '2024-09-08',
        location: 'Rokan Hulu',
        district: 'rohul',
        participants: 33,
        duration: '1 day',
        tags: ['HSE', 'K3', 'Chemical Safety', 'PPE'],
        relatedGroups: ['kud-sawit-sejahtera']
    },
    {
        id: 's-002',
        slug: 'emergency-response-first-aid-training',
        category: 'hse',
        title: {
            en: 'Emergency Response and First Aid Training',
            id: 'Pelatihan Tanggap Darurat dan Pertolongan Pertama'
        },
        excerpt: {
            en: 'First aid and emergency response training for common plantation accidents.',
            id: 'Pelatihan pertolongan pertama dan tanggap darurat untuk kecelakaan perkebunan umum.'
        },
        content: {
            en: 'Participants received hands-on training in treating cuts, burns, snake bites, heat exhaustion, and other common plantation injuries, as well as emergency evacuation procedures and communication protocols.',
            id: 'Peserta menerima pelatihan praktis dalam mengobati luka, luka bakar, gigitan ular, kelelahan panas, dan cedera perkebunan umum lainnya, serta prosedur evakuasi darurat dan protokol komunikasi.'
        },
        coverImage: '/images/activities/hse/first-aid.jpg',
        gallery: [],
        date: '2024-10-25',
        location: 'Kampar',
        district: 'kampar',
        participants: 28,
        duration: '2 days',
        tags: ['HSE', 'K3', 'First Aid', 'Emergency Response'],
        relatedGroups: ['fortaski', 'teratai-sawit']
    }
];

// Business Development Activities
const businessDevActivities: Activity[] = [
    {
        id: 'd-001',
        slug: 'market-linkage-value-chain-development',
        category: 'businessDev',
        title: {
            en: 'Market Linkage and Value Chain Development',
            id: 'Pengembangan Keterkaitan Pasar dan Rantai Nilai'
        },
        excerpt: {
            en: 'Workshop connecting farmers with buyers and exploring value-added opportunities.',
            id: 'Workshop menghubungkan petani dengan pembeli dan mengeksplorasi peluang nilai tambah.'
        },
        content: {
            en: 'This session brought together farmers, mills, and potential buyers to discuss market requirements, pricing mechanisms, quality standards, and opportunities for value-added products such as palm sugar and organic certification.',
            id: 'Sesi ini mempertemukan petani, pabrik, dan calon pembeli untuk membahas persyaratan pasar, mekanisme penetapan harga, standar kualitas, dan peluang produk nilai tambah seperti gula aren dan sertifikasi organik.'
        },
        coverImage: '/images/activities/business/market-linkage.jpg',
        gallery: [],
        date: '2024-11-20',
        location: 'Kampar',
        district: 'kampar',
        participants: 42,
        duration: '1 day',
        tags: ['Business Development', 'Market Access', 'Value Chain'],
        relatedGroups: ['kud-karya-sembada', 'fps-sei-garo']
    },
    {
        id: 'd-002',
        slug: 'cooperative-business-planning-training',
        category: 'businessDev',
        title: {
            en: 'Cooperative Business Planning and Strategy',
            id: 'Perencanaan dan Strategi Bisnis Koperasi'
        },
        excerpt: {
            en: 'Training on developing business plans and growth strategies for farmer cooperatives.',
            id: 'Pelatihan tentang pengembangan rencana bisnis dan strategi pertumbuhan untuk koperasi petani.'
        },
        content: {
            en: 'Cooperative leaders learned business planning fundamentals, market analysis, competitive positioning, financial projections, and strategic planning to grow their cooperatives and better serve members.',
            id: 'Para pemimpin koperasi mempelajari dasar-dasar perencanaan bisnis, analisis pasar, positioning kompetitif, proyeksi keuangan, dan perencanaan strategis untuk mengembangkan koperasi mereka dan melayani anggota dengan lebih baik.'
        },
        coverImage: '/images/activities/business/business-planning.jpg',
        gallery: [],
        date: '2024-08-17',
        location: 'Rokan Hulu',
        district: 'rohul',
        participants: 18,
        duration: '2 days',
        tags: ['Business Development', 'Planning', 'Strategy', 'Cooperative'],
        relatedGroups: ['kud-intan-makmur']
    }
];

// GEDSI Activities
const gedsiActivities: Activity[] = [
    {
        id: 'g-001',
        slug: 'womens-economic-empowerment-workshop',
        category: 'gedsi',
        title: {
            en: 'Women\'s Economic Empowerment Workshop',
            id: 'Workshop Pemberdayaan Ekonomi Perempuan'
        },
        excerpt: {
            en: 'Workshop empowering women farmers with business skills and access to resources.',
            id: 'Workshop memberdayakan petani perempuan dengan keterampilan bisnis dan akses ke sumber daya.'
        },
        content: {
            en: 'Women farmers participated in entrepreneurship training, learned about microfinance opportunities, developed small business ideas, and created support networks for women in agriculture.',
            id: 'Petani perempuan berpartisipasi dalam pelatihan kewirausahaan, belajar tentang peluang keuangan mikro, mengembangkan ide bisnis kecil, dan menciptakan jaringan dukungan untuk perempuan di bidang pertanian.'
        },
        coverImage: '/images/activities/gedsi/women-empowerment.jpg',
        gallery: [],
        date: '2024-09-28',
        location: 'Siak',
        district: 'siak',
        participants: 36,
        duration: '2 days',
        tags: ['GEDSI', 'Women Empowerment', 'Entrepreneurship'],
        relatedGroups: ['kpm-karya-maju']
    },
    {
        id: 'g-002',
        slug: 'inclusive-governance-disability-awareness',
        category: 'gedsi',
        title: {
            en: 'Inclusive Governance and Disability Awareness',
            id: 'Tata Kelola Inklusif dan Kesadaran Disabilitas'
        },
        excerpt: {
            en: 'Training on creating inclusive farmer groups and accommodating persons with disabilities.',
            id: 'Pelatihan tentang menciptakan kelompok tani inklusif dan mengakomodasi penyandang disabilitas.'
        },
        content: {
            en: 'Group leaders learned about disability rights, accessibility improvements, inclusive decision-making processes, and practical accommodations to ensure all community members can participate fully in farmer group activities.',
            id: 'Para pemimpin kelompok belajar tentang hak-hak penyandang disabilitas, peningkatan aksesibilitas, proses pengambilan keputusan inklusif, dan akomodasi praktis untuk memastikan semua anggota komunitas dapat berpartisipasi penuh dalam kegiatan kelompok tani.'
        },
        coverImage: '/images/activities/gedsi/disability-inclusion.jpg',
        gallery: [],
        date: '2024-07-22',
        location: 'Pelalawan',
        district: 'pelalawan',
        participants: 25,
        duration: '1 day',
        tags: ['GEDSI', 'Disability', 'Inclusion', 'Governance'],
        relatedGroups: ['kud-mulia']
    }
];

// Export all activities
export const activitiesData = {
    training: trainingActivities,
    bmp: bmpActivities,
    hcv: hcvActivities,
    hse: hseActivities,
    businessDev: businessDevActivities,
    gedsi: gedsiActivities
};

// Helper function to get all activities
export const getAllActivities = (): Activity[] => {
    return [
        ...trainingActivities,
        ...bmpActivities,
        ...hcvActivities,
        ...hseActivities,
        ...businessDevActivities,
        ...gedsiActivities
    ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// Helper function to get activities by category
export const getActivitiesByCategory = (category: Activity['category']): Activity[] => {
    switch (category) {
        case 'training': return trainingActivities;
        case 'bmp': return bmpActivities;
        case 'hcv': return hcvActivities;
        case 'hse': return hseActivities;
        case 'businessDev': return businessDevActivities;
        case 'gedsi': return gedsiActivities;
        default: return [];
    }
};

// Helper function to get activity by slug
export const getActivityBySlug = (slug: string): Activity | undefined => {
    return getAllActivities().find(activity => activity.slug === slug);
};

// Category metadata
export const activityCategories = {
    training: {
        en: 'Training',
        id: 'Pelatihan',
        description: {
            en: '4 comprehensive training packages covering essential skills',
            id: '4 paket pelatihan komprehensif mencakup keterampilan penting'
        }
    },
    bmp: {
        en: 'Best Management Practices',
        id: 'Praktik Pengelolaan Terbaik',
        description: {
            en: 'Sustainable palm oil production techniques',
            id: 'Teknik produksi minyak sawit berkelanjutan'
        }
    },
    hcv: {
        en: 'High Conservation Value',
        id: 'Nilai Konservasi Tinggi',
        description: {
            en: 'Biodiversity protection and conservation activities',
            id: 'Kegiatan perlindungan dan konservasi keanekaragaman hayati'
        }
    },
    hse: {
        en: 'Health, Safety & Environment',
        id: 'Kesehatan, Keselamatan & Lingkungan',
        description: {
            en: 'K3 and environmental protection programs',
            id: 'Program K3 dan perlindungan lingkungan'
        }
    },
    businessDev: {
        en: 'Business Development',
        id: 'Pengembangan Bisnis',
        description: {
            en: 'Market access and entrepreneurship programs',
            id: 'Program akses pasar dan kewirausahaan'
        }
    },
    gedsi: {
        en: 'GEDSI',
        id: 'GEDSI',
        description: {
            en: 'Gender, equality, disability and social inclusion',
            id: 'Gender, kesetaraan, disabilitas dan inklusi sosial'
        }
    }
};
