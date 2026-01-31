"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { getAllFarmerGroups, getFarmerGroupsByDistrict, districtMetadata } from "@/lib/farmerGroupsData";
import { useState } from "react";
import ContentSidebar, { SidebarCategory } from "@/components/ContentSidebar";
import { Users, MapPin, Sprout, Home, LayoutGrid, List } from "lucide-react";
import Link from "next/link";
import { useViewMode } from "@/hooks/useViewMode";
import Image from "next/image";

export default function CommunityPage() {
    const { language } = useLanguage();
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const { viewMode, setViewMode } = useViewMode();

    // Get all farmer groups
    const allGroups = getAllFarmerGroups();

    // Prepare sidebar categories
    const sidebarCategories: SidebarCategory[] = [
        {
            key: 'kampar',
            label: districtMetadata.kampar,
            icon: MapPin,
            count: getFarmerGroupsByDistrict('kampar').length,
            href: '/community/kampar'
        },
        {
            key: 'rohul',
            label: districtMetadata.rohul,
            icon: MapPin,
            count: getFarmerGroupsByDistrict('rohul').length,
            href: '/community/rohul'
        },
        {
            key: 'siak',
            label: districtMetadata.siak,
            icon: MapPin,
            count: getFarmerGroupsByDistrict('siak').length,
            href: '/community/siak'
        },
        {
            key: 'pelalawan',
            label: districtMetadata.pelalawan,
            icon: MapPin,
            count: getFarmerGroupsByDistrict('pelalawan').length,
            href: '/community/pelalawan'
        }
    ];

    return (
        <main className="min-h-screen bg-neutral-50 dark:bg-neutral-900 pt-24 pb-16">
            <div className="container mx-auto px-6">
                {/* Page Header */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-3">
                        {language === 'en' ? 'Our Community' : 'Komunitas Kami'}
                    </h1>
                    {/* Invisible breadcrumb spacer for consistent height */}
                    <div className="h-5 mb-4 w-full" aria-hidden="true"></div>
                    <p className="text-base text-neutral-600 dark:text-neutral-400 w-full min-h-[3rem]">
                        {language === 'en'
                            ? 'Meet the smallholder farmer groups and cooperatives working towards sustainable palm oil production across Riau province'
                            : 'Kenali kelompok tani swadaya dan koperasi yang bekerja menuju produksi minyak sawit berkelanjutan di seluruh provinsi Riau'
                        }
                    </p>
                </div>

                {/* Layout: Sidebar + Content */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar (1/4) */}
                    <ContentSidebar
                        categories={sidebarCategories}
                        allHref="/community"
                        allLabel={{ en: 'All Groups', id: 'Semua Kelompok' }}
                        allIcon={Users}
                        totalCount={allGroups.length}
                    />

                    {/* Main Content Area (3/4) */}
                    <div className="lg:w-3/4 w-full">
                        {/* View Toggle */}
                        <div className="flex justify-end mb-6">
                            <div className="bg-white dark:bg-neutral-800 rounded-lg p-1 border border-neutral-200 dark:border-neutral-700 inline-flex">
                                <button
                                    onClick={() => setViewMode('card')}
                                    className={`p-2 rounded-md transition-all ${viewMode === 'card'
                                        ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400'
                                        : 'text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300'
                                        }`}
                                    aria-label="Card View"
                                >
                                    <LayoutGrid className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 rounded-md transition-all ${viewMode === 'list'
                                        ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400'
                                        : 'text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300'
                                        }`}
                                    aria-label="List View"
                                >
                                    <List className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Farmer Groups Grid/List */}
                        <div className={`grid gap-6 ${viewMode === 'card' ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
                            {allGroups.map((group) => (
                                <Link
                                    key={group.id}
                                    href={`/community/${group.slug}`}
                                    className="group bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300"
                                >
                                    {viewMode === 'card' ? (
                                        // Card View Layout
                                        <>
                                            {/* Header with Logo */}
                                            <div className="relative h-48 bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/20 dark:to-green-900/20 flex items-center justify-center p-8">
                                                <div className="relative w-32 h-32">
                                                    <Image
                                                        src={group.assets.logo}
                                                        alt={group.name}
                                                        fill
                                                        className="object-contain"
                                                    />
                                                </div>
                                                {/* District Badge */}
                                                <div className="absolute top-4 right-4">
                                                    <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                                                        <MapPin className="w-3 h-3" />
                                                        {districtMetadata[group.district as keyof typeof districtMetadata][language]}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="p-6">
                                                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                                    {group.name}
                                                </h3>

                                                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">
                                                    {language === 'en'
                                                        ? group.content.history.en.substring(0, 150) + '...'
                                                        : group.content.history.id.substring(0, 150) + '...'
                                                    }
                                                </p>

                                                {/* Statistics */}
                                                <div className="grid grid-cols-3 gap-3 mb-4">
                                                    <div className="text-center p-3 bg-neutral-50 dark:bg-neutral-700/50 rounded-lg">
                                                        <Users className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mx-auto mb-1" />
                                                        <div className="text-lg font-bold text-neutral-900 dark:text-white">
                                                            {group.statistics.totalFarmers}
                                                        </div>
                                                        <div className="text-xs text-neutral-500 dark:text-neutral-400">
                                                            {language === 'en' ? 'Farmers' : 'Petani'}
                                                        </div>
                                                    </div>
                                                    <div className="text-center p-3 bg-neutral-50 dark:bg-neutral-700/50 rounded-lg">
                                                        <Sprout className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mx-auto mb-1" />
                                                        <div className="text-lg font-bold text-neutral-900 dark:text-white">
                                                            {group.statistics.totalAreaHa}
                                                        </div>
                                                        <div className="text-xs text-neutral-500 dark:text-neutral-400">
                                                            {language === 'en' ? 'Ha' : 'Ha'}
                                                        </div>
                                                    </div>
                                                    <div className="text-center p-3 bg-neutral-50 dark:bg-neutral-700/50 rounded-lg">
                                                        <Home className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mx-auto mb-1" />
                                                        <div className="text-lg font-bold text-neutral-900 dark:text-white">
                                                            {group.gapoktan.length}
                                                        </div>
                                                        <div className="text-xs text-neutral-500 dark:text-neutral-400">
                                                            Gapoktan
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* View Profile Link */}
                                                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-sm group-hover:gap-3 transition-all">
                                                    {language === 'en' ? 'View Profile' : 'Lihat Profil'}
                                                    <span>→</span>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        // List View Layout
                                        <div className="flex flex-col md:flex-row p-6 items-center gap-6">
                                            {/* Logo (Smaller) */}
                                            <div className="flex-shrink-0 relative w-24 h-24 bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/20 dark:to-green-900/20 rounded-xl flex items-center justify-center p-2">
                                                <Image
                                                    src={group.assets.logo}
                                                    alt={group.name}
                                                    fill
                                                    className="object-contain p-2"
                                                />
                                            </div>

                                            {/* Middle Content */}
                                            <div className="flex-1 text-center md:text-left">
                                                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                                                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                                        {group.name}
                                                    </h3>
                                                    <span className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold rounded-full flex items-center gap-1">
                                                        <MapPin className="w-3 h-3" />
                                                        {districtMetadata[group.district as keyof typeof districtMetadata][language]}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 mb-3">
                                                    {language === 'en'
                                                        ? group.content.history.en.substring(0, 150) + '...'
                                                        : group.content.history.id.substring(0, 150) + '...'
                                                    }
                                                </p>
                                                <div className="flex items-center justify-center md:justify-start gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-sm group-hover:gap-3 transition-all">
                                                    {language === 'en' ? 'View Profile' : 'Lihat Profil'}
                                                    <span>→</span>
                                                </div>
                                            </div>

                                            {/* Right Stats (Horizontal) */}
                                            <div className="flex flex-row md:flex-col gap-4 border-t md:border-t-0 md:border-l border-neutral-100 dark:border-neutral-700 pt-4 md:pt-0 md:pl-6 w-full md:w-auto justify-between md:justify-center">
                                                <div className="text-center">
                                                    <div className="flex items-center justify-center gap-1 text-neutral-900 dark:text-white font-bold">
                                                        <Users className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                                        {group.statistics.totalFarmers}
                                                    </div>
                                                    <div className="text-xs text-neutral-500 dark:text-neutral-400">
                                                        {language === 'en' ? 'Farmers' : 'Petani'}
                                                    </div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="flex items-center justify-center gap-1 text-neutral-900 dark:text-white font-bold">
                                                        <Sprout className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                                        {group.statistics.totalAreaHa}
                                                    </div>
                                                    <div className="text-xs text-neutral-500 dark:text-neutral-400">
                                                        {language === 'en' ? 'Ha' : 'Ha'}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Link>
                            ))}
                        </div>

                        {/* Empty State */}
                        {allGroups.length === 0 && (
                            <div className="text-center py-16">
                                <Users className="w-16 h-16 text-neutral-300 dark:text-neutral-700 mx-auto mb-4" />
                                <p className="text-neutral-500 dark:text-neutral-400">
                                    {language === 'en' ? 'No farmer groups found' : 'Tidak ada kelompok tani ditemukan'}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
