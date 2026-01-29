// Farmer group profile data
export const farmerGroupsData = {
    'fps-sei-garo': {
        id: 'fps-sei-garo',
        name: 'FPS Sei Garo',
        district: 'Kampar',
        logo: '/images/farmer-groups/fps-sei-garo/logo.png',
        teamPhoto: '/images/farmer-groups/fps-sei-garo/team.jpg',
        history: {
            en: 'FPS Sei Garo was established in 2015 by a group of smallholder palm oil farmers in the Sei Garo region of Kampar Regency. Born from the need for collective action and mutual support, the group has grown from 45 founding members to now represent over 350 farmers across 8 villages.',
            id: 'FPS Sei Garo didirikan pada tahun 2015 oleh sekelompok petani sawit swadaya di wilayah Sei Garo, Kabupaten Kampar. Lahir dari kebutuhan akan aksi kolektif dan saling mendukung, kelompok ini telah berkembang dari 45 anggota pendiri menjadi lebih dari 350 petani di 8 desa.'
        },
        geography: {
            en: 'Located in the Sei Garo watershed area of Kampar Regency, covering 8 villages with diverse terrain including peatland and mineral soil areas.',
            id: 'Berl okasi di kawasan Daerah Aliran Sungai Sei Garo, Kabupaten Kampar, mencakup 8 desa dengan medan beragam termasuk lahan gambut dan mineral.'
        },
        members: 350,
        landArea: 1150, // in hectares
        gapoktan: [
            { name: 'Sumber Rezeki', members: 120 },
            { name: 'Makmur Jaya', members: 110 },
            { name: 'Harapan Baru', members: 120 }
        ],
        activities: [
            {
                title: { en: 'Best Management Practices Training', id: 'Pelatihan Praktik Pengelolaan Terbaik' },
                description: { en: 'Comprehensive training on sustainable palm oil cultivation techniques', id: 'Pelatihan komprehensif tentang teknik budidaya kelapa sawit berkelanjutan' },
                image: '/images/farmer-groups/fps-sei-garo/activities/bmp-training.jpg',
                date: '2024-03-15'
            },
            {
                title: { en: 'Fire Prevention Workshop', id: 'Workshop Pencegahan Kebakaran' },
                description: { en: 'Community-led fire prevention and early response training', id: 'Pelatihan pencegahan kebakaran dan respon cepat berbasis komunitas' },
                image: '/images/farmer-groups/fps-sei-garo/activities/fire-prevention.jpg',
                date: '2024-05-20'
            },
            {
                title: { en: 'Organic Fertilizer Production', id: 'Produksi Pupuk Organik' },
                description: { en: 'Training and implementation of organic fertilizer production from palm oil waste', id: 'Pelatihan dan implementasi produksi pupuk organik dari limbah kelapa sawit' },
                image: '/images/farmer-groups/fps-sei-garo/activities/organic-fertilizer.jpg',
                date: '2024-07-10'
            }
        ]
    },
    'kp-kusuma-bakti': {
        id: 'kp-kusuma-bakti',
        name: 'KP Kusuma Bakti Mandiri',
        district: 'Kampar',
        logo: '/images/farmer-groups/kp-kusuma-bakti/logo.png',
        teamPhoto: '/images/farmer-groups/kp-kusuma-bakti/team.jpeg',
        history: {
            en: 'Established in 2012, KP Kusuma Bakti Mandiri emerged as a response to market challenges faced by independent smallholder farmers. The cooperative focuses on empowering farmers through collective bargaining, shared resources, and capacity building programs.',
            id: 'Didirikan pada tahun 2012, KP Kusuma Bakti Mandiri muncul sebagai respons terhadap tantangan pasar yang dihadapi petani swadaya. Koperasi ini fokus pada pemberdayaan petani melalui negosiasi kolektif, sumber daya bersama, dan program peningkatan kapasitas.'
        },
        geography: {
            en: 'Covering 6 villages in eastern Kampar Regency, primarily in mineral soil areas with some peat transitions.',
            id: 'Mencakup 6 desa di Kampar Timur, terutama di lahan mineral dengan beberapa transisi gambut.'
        },
        members: 285,
        landArea: 920,
        gapoktan: [
            { name: 'Bakti Tani', members: 95 },
            { name: 'Kusuma Makmur', members: 190 }
        ],
        activities: [
            {
                title: { en: 'Business Development Training', id: 'Pelatihan Pengembangan Usaha' },
                description: { en: 'Financial literacy and business planning for smallholder farmers', id: 'Literasi keuangan dan perencanaan bisnis untuk petani swadaya' },
                image: '/images/farmer-groups/kp-kusuma-bakti/activities/business-training.jpg',
                date: '2024-02-10'
            },
            {
                title: { en: 'RSPO Certification Preparation', id: 'Persiapan Sertifikasi RSPO' },
                description: { en: 'Group certification process and standards compliance workshop', id: 'Proses sertifikasi kelompok dan workshop kepatuhan standar' },
                image: '/images/farmer-groups/kp-kusuma-bakti/activities/rspo-prep.jpg',
                date: '2024-04-22'
            },
            {
                title: { en: 'Harvest Quality Management', id: 'Manajemen Kualitas Panen' },
                description: { en: 'Improving harvest quality and FFB grading standards', id: 'Meningkatkan kualitas panen dan standar grading TBS' },
                image: '/images/farmer-groups/kp-kusuma-bakti/activities/harvest-quality.jpg',
                date: '2024-06-15'
            }
        ]
    },
    'kud-intan-makmur': {
        id: 'kud-intan-makmur',
        name: 'KUD Intan Makmur',
        district: 'Rokan Hulu',
        logo: '/images/farmer-groups/kud-intan-makmur/logo.png',
        teamPhoto: '/images/farmer-groups/kud-intan-makmur/team.jpg',
        history: {
            en: 'KUD Intan Makmur was founded in 2008 as one of the pioneering village cooperatives in Rokan Hulu focusing exclusively on palm oil smallholders. With strong community ties and government support, it has become a model for cooperative development in the region.',
            id: 'KUD Intan Makmur didirikan pada tahun 2008 sebagai salah satu koperasi desa perintis di Rokan Hulu yang fokus eksklusif pada petani sawit swadaya. Dengan ikatan komunitas yang kuat dan dukungan  pemerintah, menjadi model pengembangan koperasi di wilayah ini.'
        },
        geography: {
            en: 'Spanning 12 villages across central Rokan Hulu, predominantly on mineral soil with excellent drainage conditions.',
            id: 'Meliputi 12 desa di Rokan Hulu tengah, dominan di tanah mineral dengan kondisi drainase yang sangat baik.'
        },
        members: 420,
        landArea: 1580,
        gapoktan: [
            { name: 'Intan Jaya', members: 140 },
            { name: 'Makmur Sentosa', members: 150 },
            { name: 'Sejahtera Bersama', members: 130 }
        ],
        activities: [
            {
                title: { en: 'HCV Assessment Training', id: 'Pelatihan Asesmen HCV' },
                description: { en: 'Training on High Conservation Value area identification and protection', id: 'Pelatihan identifikasi dan perlindungan kawasan Nilai Konservasi Tinggi' },
                image: '/images/farmer-groups/kud-intan-makmur/activities/hcv-training.jpg',
                date: '2024-01-25'
            },
            {
                title: { en: 'Health & Safety Workshop', id: 'Workshop Kesehatan & Keselamatan' },
                description: { en: 'Occupational health and safety standards for palm oil workers', id: 'Standar kesehatan dan keselamatan kerja untuk pekerja kelapa sawit' },
                image: '/images/farmer-groups/kud-intan-makmur/activities/health-safety.jpg',
                date: '2024-03-30'
            },
            {
                title: { en: 'Cooperative Governance', id: 'Tata Kelola Koperasi' },
                description: { en: 'Democratic governance and transparent financial management training', id: 'Pelatihan tata kelola demokratis dan manajemen keuangan transparan' },
                image: '/images/farmer-groups/kud-intan-makmur/activities/governance.jpg',
                date: '2024-08-05'
            }
        ]
    },
    'kpm-karya-maju': {
        id: 'kpm-karya-maju',
        name: 'KPM Karya Maju',
        district: 'Siak',
        logo: '/images/farmer-groups/kpm-karya-maju/logo.png',
        teamPhoto: '/images/farmer-groups/kpm-karya-maju/team.jpg',
        history: {
            en: 'Founded in 2016, KPM Karya Maju represents farmers working primarily on peatland areas in Siak Regency. The partnership was specifically created to address the unique challenges of sustainable palm oil cultivation on peat, becoming a pioneer in peatland best management practices.',
            id: 'Didirikan pada tahun 2016, KPM Karya Maju mewakili petani yang bekerja terutama di lahan gambut di Kabupaten Siak. Kemitraan ini secara khusus dibuat untuk mengatasi tantangan unik budidaya kelapa sawit berkelanjutan di gambut, menjadi pelopor dalam praktik pengelolaan terbaik lahan gambut.'
        },
        geography: {
            en: 'Concentrated in peatland areas of Siak Regency, covering 9 villages with focus on water table management and fire prevention.',
            id: 'Terkonsentrasi di kawasan lahan gambut Kabupaten Siak, mencakup 9 desa dengan fokus pada manajemen tata air dan pencegahan kebakaran.'
        },
        members: 310,
        landArea: 845,
        gapoktan: [
            { name: 'Maju Bersama', members: 160 },
            { name: 'Karya Tani', members: 150 }
        ],
        activities: [
            {
                title: { en: 'Peatland Management Training', id: 'Pelatihan Pengelolaan Gambut' },
                description: { en: 'Best practices for sustainable palm oil cultivation on peatland', id: 'Praktik terbaik budidaya kelapa sawit berkelanjutan di lahan gambut' },
                image: '/images/farmer-groups/kpm-karya-maju/activities/peatland-mgmt.jpg',
                date: '2024-02-18'
            },
            {
                title: { en: 'Water Table Monitoring', id: 'Pemantauan Tata Air' },
                description: { en: 'Installation and monitoring of piezometers for water level management', id: 'Instalasi dan pemantauan piezometer untuk manajemen tinggi muka air' },
                image: '/images/farmer-groups/kpm-karya-maju/activities/water-monitoring.jpg',
                date: '2024-05-12'
            },
            {
                title: { en: 'Community Fire Brigade', id: 'Regu Pemadam Kebakaran Masyarakat' },
                description: { en: 'Formation and training of community-based fire response teams', id: 'Pembentukan dan pelatihan tim respon kebakaran berbasis masyarakat' },
                image: '/images/farmer-groups/kpm-karya-maju/activities/fire-brigade.jpg',
                date: '2024-07-20'
            }
        ]
    },
    'kud-mulia': {
        id: 'kud-mulia',
        name: 'KUD Mulia',
        district: 'Pelalawan',
        logo: '/images/farmer-groups/kud-mulia/logo.png',
        teamPhoto: '/images/farmer-groups/kud-mulia/team.jpg',
        history: {
            en: 'KUD Mulia was established in 2010 in Pelalawan Regency, an area known for its rich biodiversity and forest landscapes. The cooperative emphasizes the balance between agricultural productivity and environmental conservation, working closely with local communities to protect HCV areas.',
            id: 'KUD Mulia didirikan pada tahun 2010 di Kabupaten Pelalawan, kawasan yang dikenal dengan kekayaan keanekaragaman hayati dan bentang alam hutan. Koperasi ini menekankan keseimbangan antara produktivitas pertanian dan konservasi lingkungan, bekerja erat dengan masyarakat lokal untuk melindungi kawasan HCV.'
        },
        geography: {
            en: 'Operating in 3 villages in Pelalawan, characterized by proximity to forest areas and biodiversity corridors.',
            id: 'Beroperasi di 3 desa di Pelalawan, ditandai dengan kedekatan dengan kawasan hutan dan koridor keanekaragaman hayati.'
        },
        members: 145,
        landArea: 490,
        gapoktan: [
            { name: 'Mulia Sejahtera', members: 145 }
        ],
        activities: [
            {
                title: { en: 'Biodiversity Conservation Workshop', id: 'Workshop Konservasi Keanekaragaman Hayati' },
                description: { en: 'Training on identifying and protecting endangered species in plantation areas', id: 'Pelatihan identifikasi dan perlindungan spesies terancam di area perkebunan' },
                image: '/images/farmer-groups/kud-mulia/activities/biodiversity.jpg',
                date: '2024-03-08'
            },
            {
                title: { en: 'Agroforestry Systems', id: 'Sistem Agroforestri' },
                description: { en: 'Integrating tree crops with palm oil for enhanced sustainability', id: 'Mengintegrasikan tanaman pohon dengan kelapa sawit untuk keberlanjutan yang lebih baik' },
                image: '/images/farmer-groups/kud-mulia/activities/agroforestry.jpg',
                date: '2024-06-14'
            },
            {
                title: { en: 'Community Mapping', id: 'Pemetaan Masyarakat' },
                description: { en: 'Participatory mapping of land use and conservation areas', id: 'Pemetaan partisipatif penggunaan lahan dan kawasan konservasi' },
                image: '/images/farmer-groups/kud-mulia/activities/mapping.jpg',
                date: '2024-09-22'
            }
        ]
    }
};

export type FarmerGroup = typeof farmerGroupsData[keyof typeof farmerGroupsData];
