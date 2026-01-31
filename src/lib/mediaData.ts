// Media Data Structure - CMS Ready
// This file contains sample media content organized by type

export interface MediaArticle {
    id: string;
    slug: string;
    type: 'article';
    title: { en: string; id: string };
    excerpt: { en: string; id: string };
    content: { en: string; id: string };
    coverImage: string;
    author: string;
    publishDate: string;
    readTime?: string; // e.g., "5 min read"
    tags: string[];
    category?: string; // e.g., "Success Story", "News", "Update"
}

export interface MediaPhoto {
    id: string;
    slug: string;
    type: 'photo';
    title: { en: string; id: string };
    description: { en: string; id: string };
    images: Array<{
        url: string;
        caption: { en: string; id: string };
    }>;
    event: string;
    date: string;
    location: string;
    district?: 'kampar' | 'rohul' | 'siak' | 'pelalawan';
    photographer?: string;
}

export interface MediaVideo {
    id: string;
    slug: string;
    type: 'video';
    title: { en: string; id: string };
    description: { en: string; id: string };
    thumbnail: string;
    videoUrl: string; // YouTube/Vimeo URL or local path
    duration: string; // e.g., "15:30"
    publishDate: string;
    tags: string[];
    category?: string; // e.g., "Documentary", "Training", "Event"
}

export type MediaItem = MediaArticle | MediaPhoto | MediaVideo;

// Articles - Success Stories, News, Updates
const articles: MediaArticle[] = [
    {
        id: 'a-001',
        slug: 'fps-sei-garo-achieves-rspo-certification',
        type: 'article',
        title: {
            en: 'FPS Sei Garo Achieves RSPO Certification Milestone',
            id: 'FPS Sei Garo Meraih Pencapaian Sertifikasi RSPO'
        },
        excerpt: {
            en: 'After two years of preparation, FPS Sei Garo becomes the first farmer group in Kampar to achieve RSPO certification for sustainable palm oil production.',
            id: 'Setelah dua tahun persiapan, FPS Sei Garo menjadi kelompok tani pertama di Kampar yang meraih sertifikasi RSPO untuk produksi minyak sawit berkelanjutan.'
        },
        content: {
            en: 'FPS Sei Garo, a farmer group representing 350 smallholder farmers in Kampar district, has successfully achieved RSPO (Roundtable on Sustainable Palm Oil) certification. This milestone marks the culmination of two years of intensive training, improvements in farming practices, and documentation efforts.\n\nThe certification process involved comprehensive assessments of environmental protection measures, worker safety standards, and community engagement practices. All 350 member farmers participated in multiple training sessions covering Best Management Practices, HCV protection, and occupational health and safety.\n\n"This certification opens new market opportunities for our members," said Pak Ahmad, chairman of FPS Sei Garo. "We can now access premium buyers who value sustainable palm oil and receive better prices for our production."\n\nThe journey to certification was supported by WRI Indonesia and PT. SMART Tbk, who provided technical assistance, training programs, and audit preparation support.',
            id: 'FPS Sei Garo, kelompok tani yang mewakili 350 petani sawit di Kabupaten Kampar, telah berhasil meraih sertifikasi RSPO (Roundtable on Sustainable Palm Oil). Pencapaian ini menandai puncak dari dua tahun pelatihan intensif, peningkatan praktik pertanian, dan upaya dokumentasi.\n\nProses sertifikasi melibatkan penilaian komprehensif terhadap langkah perlindungan lingkungan, standar keselamatan pekerja, dan praktik keterlibatan komunitas. Semua 350 petani anggota berpartisipasi dalam berbagai sesi pelatihan yang mencakup Praktik Pengelolaan Terbaik, perlindungan HCV, dan kesehatan dan keselamatan kerja.\n\n"Sertifikasi ini membuka peluang pasar baru bagi anggota kami," kata Pak Ahmad, ketua FPS Sei Garo. "Kami sekarang dapat mengakses pembeli premium yang menghargai minyak sawit berkelanjutan dan menerima harga yang lebih baik untuk produksi kami."\n\nPerjalanan menuju sertifikasi didukung oleh WRI Indonesia dan PT. SMART Tbk, yang memberikan bantuan teknis, program pelatihan, dan dukungan persiapan audit.'
        },
        coverImage: '/images/media/articles/rspo-certification.jpg',
        author: 'WRI Indonesia Communications Team',
        publishDate: '2024-11-28',
        readTime: '5 min read',
        tags: ['RSPO', 'Certification', 'Success Story', 'Kampar'],
        category: 'Success Story'
    },
    {
        id: 'a-002',
        slug: 'women-farmers-lead-agroforestry-initiative',
        type: 'article',
        title: {
            en: 'Women Farmers Lead Agroforestry Initiative in Rokan Hulu',
            id: 'Petani Perempuan Memimpin Inisiatif Agroforestri di Rokan Hulu'
        },
        excerpt: {
            en: 'A women-led group in KUD Intan Makmur successfully establishes agroforestry plots, diversifying income while protecting biodiversity.',
            id: 'Kelompok pimpinan perempuan di KUD Intan Makmur berhasil mendirikan plot agroforestri, mendiversifikasi pendapatan sambil melindungi keanekaragaman hayati.'
        },
        content: {
            en: 'Twenty-five women farmers from KUD Intan Makmur have pioneered an innovative agroforestry initiative that combines palm oil cultivation with indigenous fruit trees, vegetables, and medicinal plants. The project, launched six months ago, is already showing promising results in both economic returns and environmental benefits.\n\nThe women\'s group, led by Ibu Sari, secured a small grant through the GEDSI program to establish demonstration plots. "We wanted to show that we could earn additional income without clearing more forest land," explains Ibu Sari. The plots now feature durian, rambutan, and petai trees interspersed with palm oil, along with ground-level crops like ginger and turmeric.\n\nEarly harvest results show a 30% increase in household income from the sale of fruits and vegetables, while maintaining palm oil productivity. The diverse vegetation has also attracted more bird species and beneficial insects, improving natural pest control.\n\nThis initiative has inspired other farmer groups in the district to explore similar approaches, demonstrating the leadership role women can play in sustainable agriculture innovation.',
            id: 'Dua puluh lima petani perempuan dari KUD Intan Makmur telah mempelopori inisiatif agroforestri inovatif yang menggabungkan budidaya kelapa sawit dengan pohon buah asli, sayuran, dan tanaman obat. Proyek yang diluncurkan enam bulan lalu ini sudah menunjukkan hasil yang menjanjikan baik dalam pengembalian ekonomi maupun manfaat lingkungan.\n\nKelompok perempuan yang dipimpin oleh Ibu Sari mendapatkan hibah kecil melalui program GEDSI untuk mendirikan plot demonstrasi. "Kami ingin menunjukkan bahwa kami bisa mendapatkan pendapatan tambahan tanpa membuka lahan hutan lebih banyak," jelas Ibu Sari. Plot sekarang menampilkan pohon durian, rambutan, dan petai yang diselingi dengan kelapa sawit, bersama dengan tanaman tingkat tanah seperti jahe dan kunyit.\n\nHasil panen awal menunjukkan peningkatan 30% dalam pendapatan rumah tangga dari penjualan buah dan sayuran, sambil mempertahankan produktivitas kelapa sawit. Vegetasi yang beragam juga telah menarik lebih banyak spesies burung dan serangga menguntungkan, meningkatkan pengendalian hama alami.\n\nInisiatif ini telah menginspirasi kelompok tani lain di kabupaten untuk mengeksplorasi pendekatan serupa, mendemonstrasikan peran kepemimpinan yang dapat dimainkan perempuan dalam inovasi pertanian berkelanjutan.'
        },
        coverImage: '/images/media/articles/women-agroforestry.jpg',
        author: 'Dewi Lestari, Field Coordinator',
        publishDate: '2024-10-15',
        readTime: '6 min read',
        tags: ['GEDSI', 'Agroforestry', 'Women Empowerment', 'Biodiversity'],
        category: 'Success Story'
    },
    {
        id: 'a-003',
        slug: 'peatland-restoration-project-reduces-fire-risk',
        type: 'article',
        title: {
            en: 'Peatland Restoration Project Reduces Fire Risk by 70% in Siak',
            id: 'Proyek Restorasi Lahan Gambut Mengurangi Risiko Kebakaran 70% di Siak'
        },
        excerpt: {
            en: 'Community-led peatland management initiative in KPM Karya Maju demonstrates significant reduction in fire incidents through water table management.',
            id: 'Inisiatif pengelolaan lahan gambut yang dipimpin komunitas di KPM Karya Maju menunjukkan pengurangan signifikan insiden kebakaran melalui manajemen muka air tanah.'
        },
        content: {
            en: 'KPM Karya Maju, operating in peatland areas of Siak district, has achieved remarkable success in fire prevention through a comprehensive peatland restoration and management program. Over the past year, fire incidents in their managed area have decreased by 70% compared to the previous three-year average.\n\nThe program focuses on maintaining optimal water table levels through canal blocking, creating fire breaks, establishing early warning systems, and training community fire brigades. "Understanding peatland hydrology was key," explains Pak Budi, the group\'s environmental coordinator. "We learned that keeping the water table high prevents peat from drying out and becoming flammable."\n\nThe group installed 15 canal blocks and established monitoring wells to track water levels throughout the year. During the dry season, community members patrol vulnerable areas and maintain fire breaks. A WhatsApp-based early warning system allows rapid response to any smoke sightings.\n\nBeyond fire prevention, the improved water management has benefited palm oil productivity. "Healthier peat soil means healthier palms," notes Pak Budi. The project has attracted interest from neighboring districts and may become a model for peatland management across Riau province.',
            id: 'KPM Karya Maju, yang beroperasi di area lahan gambut Kabupaten Siak, telah mencapai kesuksesan luar biasa dalam pencegahan kebakaran melalui program restorasi dan pengelolaan lahan gambut yang komprehensif. Selama setahun terakhir, insiden kebakaran di area yang mereka kelola telah menurun 70% dibandingkan rata-rata tiga tahun sebelumnya.\n\nProgram ini berfokus pada pemeliharaan tingkat muka air tanah yang optimal melalui penyekatan kanal, pembuatan sekat bakar, penetapan sistem peringatan dini, dan pelatihan brigade kebakaran komunitas. "Memahami hidrologi lahan gambut adalah kuncinya," jelas Pak Budi, koordinator lingkungan kelompok. "Kami belajar bahwa menjaga muka air tanah tetap tinggi mencegah gambut mengering dan menjadi mudah terbakar."\n\nKelompok ini memasang 15 sekat kanal dan mendirikan sumur pemantauan untuk melacak tingkat air sepanjang tahun. Selama musim kemarau, anggota komunitas melakukan patroli area rentan dan memelihara sekat bakar. Sistem peringatan dini berbasis WhatsApp memungkinkan respons cepat terhadap setiap pengamatan asap.\n\nSelain pencegahan kebakaran, manajemen air yang lebih baik telah menguntungkan produktivitas kelapa sawit. "Tanah gambut yang lebih sehat berarti sawit yang lebih sehat," catat Pak Budi. Proyek ini telah menarik minat dari kabupaten tetangga dan mungkin menjadi model untuk pengelolaan lahan gambut di seluruh Provinsi Riau.'
        },
        coverImage: '/images/media/articles/peatland-restoration.jpg',
        author: 'Dr. Anwar Rahman, Peatland Specialist',
        publishDate: '2024-09-30',
        readTime: '7 min read',
        tags: ['Peatland', 'Fire Prevention', 'HSE', 'Environment'],
        category: 'Success Story'
    }
];

// Photo Galleries
const photos: MediaPhoto[] = [
    {
        id: 'p-001',
        slug: 'bmp-training-workshop-kampar-2024',
        type: 'photo',
        title: {
            en: 'Best Management Practices Training Workshop - Kampar 2024',
            id: 'Workshop Pelatihan Praktik Pengelolaan Terbaik - Kampar 2024'
        },
        description: {
            en: 'Photo gallery from the comprehensive BMP training covering production, fertilization, pest management, and harvesting techniques. Farmers from FPS Sei Garo and KP Kusuma Bakti participated in this 3-day intensive workshop.',
            id: 'Galeri foto dari pelatihan BMP komprehensif yang mencakup produksi, pemupukan, pengelolaan hama, dan teknik panen. Petani dari FPS Sei Garo dan KP Kusuma Bakti berpartisipasi dalam workshop intensif 3 hari ini.'
        },
        images: [
            { url: '/images/media/photos/bmp-training-01.jpg', caption: { en: 'Workshop opening ceremony', id: 'Upacara pembukaan workshop' } },
            { url: '/images/media/photos/bmp-training-02.jpg', caption: { en: 'Field demonstration of pruning techniques', id: 'Demonstrasi lapangan teknik pruning' } },
            { url: '/images/media/photos/bmp-training-03.jpg', caption: { en: 'Farmers learning fertilization calculations', id: 'Petani belajar perhitungan pemupukan' } },
            { url: '/images/media/photos/bmp-training-04.jpg', caption: { en: 'Integrated Pest Management session', id: 'Sesi Pengelolaan Hama Terpadu' } },
            { url: '/images/media/photos/bmp-training-05.jpg', caption: { en: 'Group photo with certificates', id: 'Foto bersama dengan sertifikat' } }
        ],
        event: 'BMP Training Workshop',
        date: '2024-11-15',
        location: 'Kampar',
        district: 'kampar',
        photographer: 'WRI Indonesia Documentation Team'
    },
    {
        id: 'p-002',
        slug: 'hcv-conservation-field-visit-pelalawan',
        type: 'photo',
        title: {
            en: 'HCV Conservation Area Field Visit and Mapping - Pelalawan',
            id: 'Kunjungan Lapangan dan Pemetaan Area Konservasi HCV - Pelalawan'
        },
        description: {
            en: 'Documentation of HCV identification and mapping activities in Pelalawan. Community members from KUD Mulia participated in biodiversity surveys and conservation area delineation.',
            id: 'Dokumentasi kegiatan identifikasi dan pemetaan HCV di Pelalawan. Anggota komunitas dari KUD Mulia berpartisipasi dalam survei keanekaragaman hayati dan delimitasi area konservasi.'
        },
        images: [
            { url: '/images/media/photos/hcv-mapping-01.jpg', caption: { en: 'Community members identifying wildlife habitats', id: 'Anggota komunitas mengidentifikasi habitat satwa liar' } },
            { url: '/images/media/photos/hcv-mapping-02.jpg', caption: { en: 'GPS mapping of conservation boundaries', id: 'Pemetaan GPS batas konservasi' } },
            { url: '/images/media/photos/hcv-mapping-03.jpg', caption: { en: 'Bird species observation activity', id: 'Kegiatan observasi spesies burung' } },
            { url: '/images/media/photos/hcv-mapping-04.jpg', caption: { en: 'Indigenous tree species documentation', id: 'Dokumentasi spesies pohon asli' } }
        ],
        event: 'HCV Mapping Workshop',
        date: '2024-06-20',
        location: 'Pelalawan',
        district: 'pelalawan',
        photographer: 'Hendra Saputra'
    },
    {
        id: 'p-003',
        slug: 'women-empowerment-workshop-siak',
        type: 'photo',
        title: {
            en: 'Women\'s Economic Empowerment Workshop - Siak',
            id: 'Workshop Pemberdayaan Ekonomi Perempuan - Siak'
        },
        description: {
            en: 'Highlights from the GEDSI workshop empowering women farmers with entrepreneurship skills, business planning, and access to microfinance opportunities.',
            id: 'Sorotan dari workshop GEDSI memberdayakan petani perempuan dengan keterampilan kewirausahaan, perencanaan bisnis, dan akses ke peluang keuangan mikro.'
        },
        images: [
            { url: '/images/media/photos/women-workshop-01.jpg', caption: { en: 'Entrepreneurship training session', id: 'Sesi pelatihan kewirausahaan' } },
            { url: '/images/media/photos/women-workshop-02.jpg', caption: { en: 'Women developing business ideas', id: 'Perempuan mengembangkan ide bisnis' } },
            { url: '/images/media/photos/women-workshop-03.jpg', caption: { en: 'Microfinance information session', id: 'Sesi informasi keuangan mikro' } },
            { url: '/images/media/photos/women-workshop-04.jpg', caption: { en: 'Networking and support group formation', id: 'Pembentukan jaringan dan kelompok dukungan' } }
        ],
        event: 'Women Empowerment Workshop',
        date: '2024-09-28',
        location: 'Siak',
        district: 'siak',
        photographer: 'Siti Nurhaliza'
    }
];

// Videos
const videos: MediaVideo[] = [
    {
        id: 'v-001',
        slug: 'sawit-swadaya-impact-documentary',
        type: 'video',
        title: {
            en: 'Sawit Swadaya Program: Transforming Smallholder Communities',
            id: 'Program Sawit Swadaya: Mentransformasi Komunitas Petani Kecil'
        },
        description: {
            en: 'A 15-minute documentary showcasing the impact of the Sawit Swadaya program across four districts in Riau. Features interviews with farmers, community leaders, and program facilitators highlighting success stories in sustainable palm oil production, conservation, and livelihood improvement.',
            id: 'Dokumenter 15 menit yang menampilkan dampak program Sawit Swadaya di empat kabupaten di Riau. Menampilkan wawancara dengan petani, pemimpin komunitas, dan fasilitator program yang menyoroti kisah sukses dalam produksi minyak sawit berkelanjutan, konservasi, dan peningkatan mata pencaharian.'
        },
        thumbnail: '/images/media/videos/documentary-thumbnail.jpg',
        videoUrl: 'https://youtube.com/watch?v=example1',
        duration: '15:30',
        publishDate: '2024-11-01',
        tags: ['Documentary', 'Impact', 'Success Story'],
        category: 'Documentary'
    },
    {
        id: 'v-002',
        slug: 'pruning-techniques-training-video',
        type: 'video',
        title: {
            en: 'Proper Oil Palm Pruning Techniques - Training Video',
            id: 'Teknik Pruning Kelapa Sawit yang Tepat - Video Pelatihan'
        },
        description: {
            en: 'Educational training video demonstrating proper pruning techniques for oil palm trees. Covers safety procedures, tool selection, cutting angles, and best practices to optimize palm health and fruit accessibility.',
            id: 'Video pelatihan edukatif yang mendemonstrasikan teknik pruning yang tepat untuk pohon kelapa sawit. Mencakup prosedur keselamatan, pemilihan alat, sudut pemotongan, dan praktik terbaik untuk mengoptimalkan kesehatan sawit dan aksesibilitas buah.'
        },
        thumbnail: '/images/media/videos/pruning-thumbnail.jpg',
        videoUrl: 'https://youtube.com/watch?v=example2',
        duration: '8:45',
        publishDate: '2024-09-12',
        tags: ['Training', 'BMP', 'Pruning', 'Tutorial'],
        category: 'Training'
    },
    {
        id: 'v-003',
        slug: 'fire-prevention-peatland-management-guide',
        type: 'video',
        title: {
            en: 'Fire Prevention and Peatland Management Guide',
            id: 'Panduan Pencegahan Kebakaran dan Pengelolaan Lahan Gambut'
        },
        description: {
            en: 'Comprehensive video guide on fire prevention strategies for peatland areas, including water table management, canal blocking techniques, and community fire brigade organization. Features real examples from Siak district.',
            id: 'Panduan video komprehensif tentang strategi pencegahan kebakaran untuk area lahan gambut, termasuk manajemen muka air tanah, teknik penyekatan kanal, dan organisasi brigade kebakaran komunitas. Menampilkan contoh nyata dari Kabupaten Siak.'
        },
        thumbnail: '/images/media/videos/fire-prevention-thumbnail.jpg',
        videoUrl: 'https://youtube.com/watch?v=example3',
        duration: '12:20',
        publishDate: '2024-07-25',
        tags: ['HSE', 'Fire Prevention', 'Peatland', 'Training'],
        category: 'Training'
    }
];

// Export all media
export const mediaData = {
    articles,
    photos,
    videos
};

// Helper functions
export const getAllMedia = (): MediaItem[] => {
    return [...articles, ...photos, ...videos].sort(
        (a, b) => new Date(b.publishDate || b.date).getTime() - new Date(a.publishDate || a.date).getTime()
    );
};

export const getMediaByType = (type: 'article' | 'photo' | 'video'): MediaItem[] => {
    switch (type) {
        case 'article': return articles;
        case 'photo': return photos;
        case 'video': return videos;
        default: return [];
    }
};

export const getMediaBySlug = (slug: string): MediaItem | undefined => {
    return getAllMedia().find(item => item.slug === slug);
};

// Media type metadata
export const mediaTypes = {
    article: {
        en: 'Articles',
        id: 'Artikel',
        description: {
            en: 'News, success stories, and program updates',
            id: 'Berita, kisah sukses, dan update program'
        }
    },
    photo: {
        en: 'Photo Galleries',
        id: 'Galeri Foto',
        description: {
            en: 'Photo documentation from events and activities',
            id: 'Dokumentasi foto dari acara dan kegiatan'
        }
    },
    video: {
        en: 'Videos',
        id: 'Video',
        description: {
            en: 'Training videos, documentaries, and event recordings',
            id: 'Video pelatihan, dokumenter, dan rekaman acara'
        }
    }
};
