"use client";

import { Users, MapPin, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function CommunityProfile() {
    const { language } = useLanguage();
    const t = translations[language];

    const districts = [
        {
            key: 'kampar' as const,
            icon: MapPin,
            groups: "10",
            members: "2,838",
            hectares: "9,536",
            gradient: "from-emerald-500 to-teal-600",
        },
        {
            key: 'rohul' as const,
            icon: Users,
            groups: "10",
            members: "1,201",
            hectares: "4,081",
            gradient: "from-teal-500 to-cyan-600",
        },
        {
            key: 'siak' as const,
            icon: TrendingUp,
            groups: "10",
            members: "2,739",
            hectares: "7,359",
            gradient: "from-cyan-500 to-blue-600",
        },
        {
            key: 'pelalawan' as const,
            icon: MapPin,
            groups: "1",
            members: "418",
            hectares: "1,273",
            gradient: "from-blue-500 to-indigo-600",
        },
    ];

    return (
        <section id="community" className="py-24 bg-white dark:bg-neutral-900">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
                        {t.community.title}
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-300">
                        {t.community.subtitle}
                    </p>
                </div>

                {/* Districts Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {districts.map((district) => {
                        const Icon = district.icon;
                        const districtData = t.community.districts[district.key];

                        return (
                            <div
                                key={district.key}
                                className="group relative bg-white dark:bg-neutral-800 rounded-2xl p-6 border-2 border-neutral-200 dark:border-neutral-700 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden"
                            >
                                {/* Background Gradient on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${district.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className={`w-14 h-14 bg-gradient-to-br ${district.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                                        {districtData.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6 line-clamp-2">
                                        {districtData.description}
                                    </p>

                                    {/* Stats */}
                                    <div className="space-y-3 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-neutral-600 dark:text-neutral-400">{districtData.groups}</span>
                                            <span className="text-lg font-bold text-neutral-900 dark:text-white">{district.groups}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-neutral-600 dark:text-neutral-400">{districtData.members}</span>
                                            <span className="text-lg font-bold text-neutral-900 dark:text-white">{district.members}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-neutral-600 dark:text-neutral-400">{districtData.hectares}</span>
                                            <span className="text-lg font-bold text-neutral-900 dark:text-white">{district.hectares}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
