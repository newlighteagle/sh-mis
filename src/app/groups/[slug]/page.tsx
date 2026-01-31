"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { farmerGroupsData, type FarmerGroupProfile } from "@/lib/farmerGroupsData";
import Image from "next/image";
import { MapPin, Users, Sprout, Calendar, Building2, Award, Briefcase, Shield, Leaf, TrendingUp, Heart, CheckCircle2, Scale } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function FarmerGroupProfilePage() {
    const params = useParams();
    const { language } = useLanguage();
    const groupId = params.slug as string;
    const group: FarmerGroupProfile | undefined = farmerGroupsData[groupId as keyof typeof farmerGroupsData];
    const [activeActivityTab, setActiveActivityTab] = useState<string>('all');

    if (!group) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                        {language === 'en' ? 'Farmer Group Not Found' : 'Kelompok Tani Tidak Ditemukan'}
                    </h1>
                    <p className="text-neutral-600 dark:text-neutral-400">
                        {language === 'en' ? 'The requested farmer group could not be found.' : 'Kelompok tani yang diminta tidak ditemukan.'}
                    </p>
                </div>
            </div>
        );
    }

    // Combine all activities for "All" tab
    const allActivities = [
        ...group.activities.training.map(a => ({ ...a, category: 'training' })),
        ...group.activities.bmp.map(a => ({ ...a, category: 'bmp' })),
        ...group.activities.hcv.map(a => ({ ...a, category: 'hcv' })),
        ...group.activities.hse.map(a => ({ ...a, category: 'hse' })),
        ...group.activities.businessDev.map(a => ({ ...a, category: 'businessDev' })),
        ...group.activities.gedsi.map(a => ({ ...a, category: 'gedsi' })),
        ...group.activities.sustainableStandards.map(a => ({ ...a, category: 'sustainableStandards' })),
    ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const getActivitiesByTab = () => {
        if (activeActivityTab === 'all') return allActivities;
        return group.activities[activeActivityTab as keyof typeof group.activities].map(a => ({ ...a, category: activeActivityTab }));
    };

    const activityTabs = [
        { key: 'all', label: { en: 'All Activities', id: 'Semua Kegiatan' }, icon: Calendar },
        { key: 'training', label: { en: 'Training', id: 'Pelatihan' }, icon: Users, count: group.activities.training.length },
        { key: 'bmp', label: { en: 'BMP', id: 'BMP' }, icon: Sprout, count: group.activities.bmp.length },
        { key: 'hcv', label: { en: 'HCV', id: 'HCV' }, icon: Leaf, count: group.activities.hcv.length },
        { key: 'hse', label: { en: 'HSE/K3', id: 'HSE/K3' }, icon: Shield, count: group.activities.hse.length },
        { key: 'businessDev', label: { en: 'Business Dev', id: 'Pengembangan Usaha' }, icon: TrendingUp, count: group.activities.businessDev.length },
        { key: 'gedsi', label: { en: 'GEDSI', id: 'GEDSI' }, icon: Heart, count: group.activities.gedsi.length },
        { key: 'sustainableStandards', label: { en: 'Certification', id: 'Sertifikasi' }, icon: Award, count: group.activities.sustainableStandards.length },
    ];

    const districtNames = {
        kampar: 'Kampar',
        rohul: 'Rokan Hulu',
        siak: 'Siak',
        pelalawan: 'Pelalawan'
    };

    return (
        <main className="min-h-screen bg-white dark:bg-neutral-900 pt-24 pb-16">
            <div className="container mx-auto px-6">
                {/* Header Section */}
                <div className="max-w-5xl mx-auto mb-12">
                    <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <div className="w-32 h-32 relative bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl flex items-center justify-center overflow-hidden border-2 border-emerald-200 dark:border-emerald-800">
                                <Image
                                    src={group.assets.logo || "/images/no-data/default-logo.png"}
                                    alt={`${group.name} logo`}
                                    width={128}
                                    height={128}
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Title & District */}
                        <div className="flex-1 text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-3">
                                {group.name}
                            </h1>
                            <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-lg font-medium">
                                    <MapPin className="w-5 h-5" />
                                    <span>{districtNames[group.district]}</span>
                                </div>
                                <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 text-sm">
                                    <Calendar className="w-4 h-4" />
                                    <span>{language === 'en' ? 'Est.' : 'Berdiri'} {group.established}</span>
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                                <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                                    <Users className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                    <div className="text-left">
                                        <p className="text-xs text-neutral-600 dark:text-neutral-400">{language === 'en' ? 'Farmers' : 'Petani'}</p>
                                        <p className="text-sm font-bold text-neutral-900 dark:text-white">{group.statistics.totalFarmers.toLocaleString()}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                                    <Sprout className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                                    <div className="text-left">
                                        <p className="text-xs text-neutral-600 dark:text-neutral-400">{language === 'en' ? 'Area (ha)' : 'Luas (ha)'}</p>
                                        <p className="text-sm font-bold text-neutral-900 dark:text-white">{group.statistics.totalAreaHa.toLocaleString()}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg">
                                    <Building2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                                    <div className="text-left">
                                        <p className="text-xs text-neutral-600 dark:text-neutral-400">Gapoktan</p>
                                        <p className="text-sm font-bold text-neutral-900 dark:text-white">{group.gapoktan.length}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                                    <Briefcase className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                                    <div className="text-left">
                                        <p className="text-xs text-neutral-600 dark:text-neutral-400">{language === 'en' ? 'Parcels' : 'Bidang'}</p>
                                        <p className="text-sm font-bold text-neutral-900 dark:text-white">{group.statistics.landParcels.toLocaleString()}</p>
                                    </div>
                                </div>
                                {group.statistics.productionTbs && (
                                    <div className="flex items-center gap-2 px-4 py-2 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                                        <Scale className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                                        <div className="text-left">
                                            <p className="text-xs text-neutral-600 dark:text-neutral-400">{language === 'en' ? 'Production (TBS)' : 'Produksi (TBS)'}</p>
                                            <p className="text-sm font-bold text-neutral-900 dark:text-white">{group.statistics.productionTbs.toLocaleString()} <span className="text-xs font-normal text-neutral-500">ton/yr</span></p>
                                        </div>
                                    </div>
                                )}
                                {group.statistics.productivity && (
                                    <div className="flex items-center gap-2 px-4 py-2 bg-rose-50 dark:bg-rose-900/20 rounded-lg">
                                        <TrendingUp className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                                        <div className="text-left">
                                            <p className="text-xs text-neutral-600 dark:text-neutral-400">{language === 'en' ? 'Productivity' : 'Produktivitas'}</p>
                                            <p className="text-sm font-bold text-neutral-900 dark:text-white">{group.statistics.productivity} <span className="text-xs font-normal text-neutral-500">ton/ha/yr</span></p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Legal Status Badge */}
                    <div className="flex justify-center md:justify-start">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-200 dark:border-blue-800">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
                                {language === 'en' ? group.legalStatus.en : group.legalStatus.id}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Management Photo */}
                <div className="max-w-5xl mx-auto mb-16">
                    <div className="relative w-full h-96 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-700">
                        <Image
                            src={group.assets.managementPhoto || "/images/no-data/no-picture.jpg"}
                            alt={`${group.name} management`}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* About Section - 2 Column Layout */}
                <div className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8 text-center">
                        {language === 'en' ? 'Profile' : 'Profil'}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div className="space-y-8">
                            {/* History */}
                            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700">
                                <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-2">
                                    <Calendar className="w-5 h-5" />
                                    {language === 'en' ? 'History' : 'Sejarah'}
                                </h3>
                                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                    {language === 'en' ? group.content.history.en : group.content.history.id}
                                </p>
                            </div>

                            {/* Geography */}
                            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700">
                                <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-2">
                                    <MapPin className="w-5 h-5" />
                                    {language === 'en' ? 'Geographic Coverage' : 'Cakupan Geografis'}
                                </h3>
                                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                                    {language === 'en' ? group.content.geography.en : group.content.geography.id}
                                </p>
                                {/* Land Type Breakdown */}
                                <div className="flex flex-wrap gap-2">
                                    {group.statistics.landTypes.peat && (
                                        <div className="px-3 py-1 bg-amber-100 dark:bg-amber-900/20 rounded-full text-xs font-medium text-amber-800 dark:text-amber-200">
                                            {language === 'en' ? 'Peat' : 'Gambut'}: {group.statistics.landTypes.peat} ha
                                        </div>
                                    )}
                                    {group.statistics.landTypes.mineral && (
                                        <div className="px-3 py-1 bg-green-100 dark:bg-green-900/20 rounded-full text-xs font-medium text-green-800 dark:text-green-200">
                                            {language === 'en' ? 'Mineral' : 'Mineral'}: {group.statistics.landTypes.mineral} ha
                                        </div>
                                    )}
                                    {group.statistics.landTypes.mixed && (
                                        <div className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 rounded-full text-xs font-medium text-blue-800 dark:text-blue-200">
                                            {language === 'en' ? 'Mixed' : 'Campuran'}: {group.statistics.landTypes.mixed} ha
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-8">
                            {/* Governance */}
                            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700">
                                <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-2">
                                    <Building2 className="w-5 h-5" />
                                    {language === 'en' ? 'Governance' : 'Tata Kelola'}
                                </h3>
                                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                    {language === 'en' ? group.content.governance.en : group.content.governance.id}
                                </p>
                            </div>

                            {/* Facilities */}
                            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700">
                                <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-2">
                                    <Briefcase className="w-5 h-5" />
                                    {language === 'en' ? 'Facilities & Infrastructure' : 'Sarana & Prasarana'}
                                </h3>
                                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                    {language === 'en' ? group.content.facilities.en : group.content.facilities.id}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gapoktan Section */}
                <div className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8 text-center">
                        {language === 'en' ? 'Farmer Group Associations (Gapoktan)' : 'Gabungan Kelompok Tani (Gapoktan)'}
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {group.gapoktan.map((gapok, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 rounded-2xl p-6 border border-emerald-200 dark:border-emerald-800"
                            >
                                <h4 className="font-bold text-lg text-neutral-900 dark:text-white mb-2">
                                    {gapok.name}
                                </h4>
                                <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 text-sm mb-2">
                                    <Users className="w-4 h-4" />
                                    <span>{gapok.members} {language === 'en' ? 'members' : 'anggota'}</span>
                                </div>
                                {gapok.chairman && (
                                    <p className="text-xs text-neutral-500 dark:text-neutral-500">
                                        {language === 'en' ? 'Chairman' : 'Ketua'}: {gapok.chairman}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Activities Section with Tabs */}
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8 text-center">
                        {language === 'en' ? 'Activities & Programs' : 'Kegiatan & Program'}
                    </h2>

                    {/* Activity Category Tabs */}
                    <div className="flex flex-wrap gap-2 mb-8 justify-center">
                        {activityTabs.map((tab) => {
                            const Icon = tab.icon;
                            const isActive = activeActivityTab === tab.key;
                            const count = tab.key === 'all' ? allActivities.length : (tab.count || 0);

                            return (
                                <button
                                    key={tab.key}
                                    onClick={() => setActiveActivityTab(tab.key)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${isActive
                                        ? 'bg-emerald-600 text-white shadow-lg'
                                        : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:border-emerald-400'
                                        }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    <span>{language === 'en' ? tab.label.en : tab.label.id}</span>
                                    {count > 0 && (
                                        <span className={`text-xs px-2 py-0.5 rounded-full ${isActive ? 'bg-white/20' : 'bg-neutral-200 dark:bg-neutral-700'
                                            }`}>
                                            {count}
                                        </span>
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Activities Grid */}
                    {getActivitiesByTab().length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {getActivitiesByTab().map((activity, index) => (
                                <div
                                    key={index}
                                    className="group bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300"
                                >
                                    {/* Activity Image */}
                                    <div className="relative w-full h-48 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 overflow-hidden">
                                        {activity.images && activity.images[0] ? (
                                            <Image
                                                src={activity.images[0]}
                                                alt={language === 'en' ? activity.title.en : activity.title.id}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-300"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <Calendar className="w-12 h-12 text-emerald-300 dark:text-emerald-700" />
                                            </div>
                                        )}
                                    </div>

                                    {/* Activity Content */}
                                    <div className="p-5">
                                        <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2 line-clamp-2">
                                            {language === 'en' ? activity.title.en : activity.title.id}
                                        </h3>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3 line-clamp-3">
                                            {language === 'en' ? activity.description.en : activity.description.id}
                                        </p>
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400">
                                                <Calendar className="w-4 h-4" />
                                                <span>{new Date(activity.date).toLocaleDateString(language === 'en' ? 'en-US' : 'id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                            </div>
                                            {activity.participants && (
                                                <div className="flex items-center gap-1 text-xs text-neutral-600 dark:text-neutral-400">
                                                    <Users className="w-4 h-4" />
                                                    <span>{activity.participants}</span>
                                                </div>
                                            )}
                                        </div>
                                        {activity.outcomes && (
                                            <div className="pt-3 border-t border-neutral-200 dark:border-neutral-700">
                                                <p className="text-xs text-neutral-500 dark:text-neutral-500 italic">
                                                    {language === 'en' ? activity.outcomes.en : activity.outcomes.id}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <Calendar className="w-16 h-16 text-neutral-300 dark:text-neutral-700 mx-auto mb-4" />
                            <p className="text-neutral-500 dark:text-neutral-400">
                                {language === 'en' ? 'No activities in this category yet' : 'Belum ada kegiatan di kategori ini'}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
