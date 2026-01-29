import { MapPin, Users, BarChart3, Leaf, Database, Shield } from "lucide-react";

const features = [
    {
        icon: MapPin,
        title: "Pemetaan Lahan",
        description: "Teknologi GIS untuk pemetaan kebun kelapa sawit dengan akurasi tinggi dan perhitungan luas otomatis.",
        color: "from-emerald-500 to-teal-600"
    },
    {
        icon: Users,
        title: "Manajemen Petani",
        description: "Database terintegrasi untuk mengelola data petani dan lembaga pendamping dengan mudah.",
        color: "from-teal-500 to-cyan-600"
    },
    {
        icon: BarChart3,
        title: "Analisis & Pelaporan",
        description: "Dashboard analytics dan generator laporan otomatis untuk monitoring dan evaluasi program.",
        color: "from-cyan-500 to-blue-600"
    },
    {
        icon: Leaf,
        title: "Asesmen Berkelanjutan",
        description: "Form dinamis untuk BMP, HCV, HSE, dan kalkulator estimasi emisi gas rumah kaca (GHG).",
        color: "from-green-500 to-emerald-600"
    },
    {
        icon: Database,
        title: "Data Spasial",
        description: "Integrasi PostGIS untuk analisis spasial lanjutan dan monitoring deforestasi real-time.",
        color: "from-blue-500 to-indigo-600"
    },
    {
        icon: Shield,
        title: "Akses Aman",
        description: "Sistem autentikasi berbasis role (Staff & Leader) untuk menjaga keamanan data.",
        color: "from-indigo-500 to-purple-600"
    }
];

export default function Features() {
    return (
        <section id="features" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
                        Fitur Unggulan Platform
                    </h2>
                    <p className="text-lg text-neutral-600">
                        Solusi lengkap untuk manajemen informasi komunitas petani kelapa sawit swadaya dengan teknologi terkini.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="group p-8 bg-neutral-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-neutral-200"
                            >
                                {/* Icon */}
                                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="w-7 h-7 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-neutral-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
