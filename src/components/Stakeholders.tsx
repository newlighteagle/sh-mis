"use client";

import { Award, Handshake } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function Stakeholders() {
    const { language } = useLanguage();
    const t = translations[language];

    const partners = [
        { name: 'WRI Indonesia', role: language === 'en' ? 'Lead Partner' : 'Mitra Utama' },
        { name: 'RSPO', role: language === 'en' ? 'Certification Body' : 'Badan Sertifikasi' },
        { name: 'Local Government', role: language === 'en' ? 'Regulatory Support' : 'Dukungan Regulasi' },
        { name: 'Financial Institutions', role: language === 'en' ? 'Funding Support' : 'Dukungan Pendanaan' },
        { name: 'Research Institutions', role: language === 'en' ? 'Technical Support' : 'Dukungan Teknis' },
        { name: 'NGO Partners', role: language === 'en' ? 'Community Development' : 'Pengembangan Komunitas' },
    ];

    return (
        <section className="py-24 bg-white dark:bg-neutral-900">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-medium mb-4">
                        <Handshake className="w-4 h-4" />
                        {t.stakeholders.partnership}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
                        {t.stakeholders.title}
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-300">
                        {t.stakeholders.subtitle}
                    </p>
                </div>

                {/* Partners Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="group relative bg-gradient-to-br from-neutral-50 to-emerald-50 dark:from-neutral-800 dark:to-neutral-800 rounded-2xl p-8 border-2 border-neutral-200 dark:border-neutral-700 hover:border-emerald-500 dark:hover:border-emerald-400 hover:shadow-xl transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Award className="w-7 h-7 text-white" />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                                {partner.name}
                            </h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                {partner.role}
                            </p>

                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
