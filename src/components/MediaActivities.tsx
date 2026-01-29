"use client";

import { Calendar, Image as ImageIcon, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function MediaActivities() {
    const { language } = useLanguage();
    const t = translations[language];

    const activities = [
        {
            title: language === 'en' ? 'Sustainable Farming Workshop' : 'Workshop Pertanian Berkelanjutan',
            date: language === 'en' ? 'December 2024' : 'Desember 2024',
            location: 'Kampar',
            image: '/images/farming-workshop.png',
        },
        {
            title: language === 'en' ? 'Community Field Training' : 'Pelatihan Lapangan Komunitas',
            date: language === 'en' ? 'November 2024' : 'November 2024',
            location: 'Siak',
            image: '/images/field-training.png',
        },
        {
            title: language === 'en' ? 'Best Practices Sharing Session' : 'Sesi Berbagi Praktik Terbaik',
            date: language === 'en' ? 'October 2024' : 'Oktober 2024',
            location: 'Rokan Hulu',
            image: '/images/sharing-session.png',
        },
    ];

    return (
        <section id="media" className="py-24 bg-gradient-to-br from-neutral-50 to-emerald-50 dark:from-neutral-800 dark:to-neutral-900">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
                        {t.media.title}
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-300">
                        {t.media.subtitle}
                    </p>
                </div>

                {/* Activities Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {activities.map((activity, index) => (
                        <div
                            key={index}
                            className="group bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        >
                            {/* Real Image */}
                            <div className="relative h-56 overflow-hidden">
                                <Image
                                    src={activity.image}
                                    alt={activity.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/30 transition-colors" />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                                    <Calendar className="w-4 h-4" />
                                    <span>{activity.date}</span>
                                    <span className="text-neutral-400 dark:text-neutral-600">•</span>
                                    <span>{activity.location}</span>
                                </div>

                                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                    {activity.title}
                                </h3>

                                <button className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-sm group-hover:gap-3 transition-all">
                                    {t.media.readMore}
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View Gallery CTA */}
                <div className="text-center">
                    <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
                        <ImageIcon className="w-5 h-5" />
                        {t.media.viewGallery}
                    </button>
                </div>
            </div>
        </section>
    );
}
