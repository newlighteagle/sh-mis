"use client";

import { Users, MapPin, TrendingUp, LucideIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { getAllFarmerGroups, getDistrictStats } from "@/lib/farmerGroupsData";

// Visual configuration for districts
const DISTRICT_VISUALS: Record<string, { icon: LucideIcon, gradient: string }> = {
    kampar: {
        icon: MapPin,
        gradient: "from-emerald-500 to-teal-600",
    },
    rohul: {
        icon: Users,
        gradient: "from-teal-500 to-cyan-600",
    },
    siak: {
        icon: TrendingUp,
        gradient: "from-cyan-500 to-blue-600",
    },
    pelalawan: {
        icon: MapPin,
        gradient: "from-blue-500 to-indigo-600",
    },
};

export default function CommunityProfile() {
    const { language } = useLanguage();
    const t = translations[language];

    // Calculate Dynamic Stats
    const allGroups = getAllFarmerGroups();
    const totalGroups = allGroups.length;
    const totalFarmers = allGroups.reduce((acc, g) => acc + g.statistics.totalFarmers, 0);

    const districts = ['kampar', 'rohul', 'siak', 'pelalawan'].map(key => {
        const stats = getDistrictStats(key);
        const visual = DISTRICT_VISUALS[key];
        const districtData = t.community.districts[key as keyof typeof t.community.districts];

        return {
            key,
            ...visual,
            name: districtData.name,
            description: districtData.description,
            groups: stats.groups.toString(),
            members: stats.farmers.toLocaleString(language === 'en' ? 'en-US' : 'id-ID'),
            hectares: stats.areaHa.toLocaleString(language === 'en' ? 'en-US' : 'id-ID'),

            // Labels for display
            labels: {
                groups: districtData.groups,
                members: districtData.members,
                hectares: districtData.hectares
            }
        };
    });

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

                {/* Impact Stats */}
                <div className="mb-16 grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                    <div className="text-center">
                        <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                            6
                        </div>
                        <p className="text-neutral-600 dark:text-neutral-400">
                            {language === 'en' ? 'Key Partners' : 'Mitra Kunci'}
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                            4
                        </div>
                        <p className="text-neutral-600 dark:text-neutral-400">
                            {language === 'en' ? 'Districts Covered' : 'Kabupaten Terlayani'}
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                            {totalGroups}
                        </div>
                        <p className="text-neutral-600 dark:text-neutral-400">
                            {language === 'en' ? 'Farmer Groups' : 'Kelompok Petani'}
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                            {totalFarmers.toLocaleString(language === 'en' ? 'en-US' : 'id-ID')}
                        </div>
                        <p className="text-neutral-600 dark:text-neutral-400">
                            {language === 'en' ? 'Farmers Supported' : 'Petani Didampingi'}
                        </p>
                    </div>
                </div>

                {/* Districts Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {districts.map((district) => {
                        const Icon = district.icon;

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
                                        {district.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6 line-clamp-2">
                                        {district.description}
                                    </p>

                                    {/* Stats */}
                                    <div className="space-y-3 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-neutral-600 dark:text-neutral-400">{district.labels.groups}</span>
                                            <span className="text-lg font-bold text-neutral-900 dark:text-white">{district.groups}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-neutral-600 dark:text-neutral-400">{district.labels.members}</span>
                                            <span className="text-lg font-bold text-neutral-900 dark:text-white">{district.members}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-neutral-600 dark:text-neutral-400">{district.labels.hectares}</span>
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
