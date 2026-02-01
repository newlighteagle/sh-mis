"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { getAllActivities, activityCategories } from "@/lib/activitiesData";
import ContentSidebar, { SidebarCategory } from "@/components/ContentSidebar";
import { Calendar, MapPin, Users, Clock, Tag, GraduationCap, Sprout, Leaf, Shield, TrendingUp, Heart, LayoutGrid, List } from "lucide-react";
import Link from "next/link";
import { useViewMode } from "@/hooks/useViewMode";
import Image from "next/image";
import { getActivitiesByCategory } from "@/lib/activitiesData";

export default function ActivitiesPage() {
    const { language } = useLanguage();
    const { viewMode, setViewMode } = useViewMode('activities_view_mode');
    const activities = getAllActivities();

    // Prepare sidebar categories
    const sidebarCategories: SidebarCategory[] = [
        {
            key: 'training',
            label: activityCategories.training,
            icon: GraduationCap,
            count: getActivitiesByCategory('training').length,
            href: '/activities/training'
        },
        {
            key: 'bmp',
            label: activityCategories.bmp,
            icon: Sprout,
            count: getActivitiesByCategory('bmp').length,
            href: '/activities/bmp'
        },
        {
            key: 'hcv',
            label: activityCategories.hcv,
            icon: Leaf,
            count: getActivitiesByCategory('hcv').length,
            href: '/activities/hcv'
        },
        {
            key: 'hse',
            label: activityCategories.hse,
            icon: Shield,
            count: getActivitiesByCategory('hse').length,
            href: '/activities/hse'
        },
        {
            key: 'businessDev',
            label: activityCategories.businessDev,
            icon: TrendingUp,
            count: getActivitiesByCategory('businessDev').length,
            href: '/activities/business-development'
        },
        {
            key: 'gedsi',
            label: activityCategories.gedsi,
            icon: Heart,
            count: getActivitiesByCategory('gedsi').length,
            href: '/activities/gedsi'
        }
    ];

    return (
        <main className="min-h-screen bg-neutral-50 dark:bg-neutral-900 pt-24 pb-16">
            <div className="container mx-auto px-6">
                {/* Page Header */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-3">
                        {language === 'en' ? 'Activities & Programs' : 'Kegiatan & Program'}
                    </h1>
                    {/* Invisible breadcrumb spacer for consistent height */}
                    <div className="h-5 mb-4 w-full" aria-hidden="true"></div>
                    <p className="text-base text-neutral-600 dark:text-neutral-400 w-full min-h-[3rem]">
                        {language === 'en'
                            ? 'Explore our comprehensive training programs and field activities supporting sustainable palm oil smallholders'
                            : 'Jelajahi program pelatihan dan kegiatan lapangan komprehensif kami yang mendukung petani sawit kecil berkelanjutan'
                        }
                    </p>
                </div>

                {/* Layout: Sidebar + Content */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <ContentSidebar
                        categories={sidebarCategories}
                        allHref="/activities"
                        allLabel={{ en: 'All Activities', id: 'Semua Kegiatan' }}
                        allIcon={Calendar}
                        totalCount={activities.length}
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

                        {/* Activities Grid */}
                        <div className={`grid gap-6 ${viewMode === 'card' ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
                            {activities.map((activity) => (
                                <article
                                    key={activity.id}
                                    className={`group bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300 ${viewMode === 'list' ? 'flex flex-row' : ''}`}
                                >
                                    {/* Cover Image */}
                                    <div className={`relative bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 ${viewMode === 'list' ? 'w-16 h-16 md:w-72 md:h-auto shrink-0' : 'w-full h-48'}`}>
                                        {activity.coverImage ? (
                                            <Image
                                                src={activity.coverImage}
                                                alt={language === 'en' ? activity.title.en : activity.title.id}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-300"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <Calendar className="w-8 h-8 md:w-16 md:h-16 text-emerald-300 dark:text-emerald-700" />
                                            </div>
                                        )}
                                        {/* Category Badge */}
                                        <div className={`absolute top-4 left-4 ${viewMode === 'list' ? 'hidden md:block' : ''}`}>
                                            <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full">
                                                {language === 'en'
                                                    ? activityCategories[activity.category].en
                                                    : activityCategories[activity.category].id}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className={`${viewMode === 'list' ? 'p-2 md:p-6' : 'p-6'} flex flex-col flex-1`}>
                                        <div className="mb-auto">
                                            <h2 className={`${viewMode === 'list' ? 'text-sm md:text-xl' : 'text-xl'} font-bold text-neutral-900 dark:text-white mb-1 md:mb-3 line-clamp-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors`}>
                                                {language === 'en' ? activity.title.en : activity.title.id}
                                            </h2>

                                            <p className={`text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3 ${viewMode === 'list' ? 'hidden md:block' : ''}`}>
                                                {language === 'en' ? activity.excerpt.en : activity.excerpt.id}
                                            </p>
                                        </div>

                                        {/* Meta Information */}
                                        <div className={`space-y-1 md:space-y-2 mb-2 md:mb-4 ${viewMode === 'list' ? 'hidden md:block' : ''}`}>
                                            <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-500">
                                                <Calendar className="w-4 h-4" />
                                                <span>
                                                    {new Date(activity.date).toLocaleDateString(language === 'en' ? 'en-US' : 'id-ID', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric'
                                                    })}
                                                </span>
                                            </div>
                                            {activity.location && (
                                                <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-500">
                                                    <MapPin className="w-4 h-4" />
                                                    <span>{activity.location}</span>
                                                </div>
                                            )}
                                            {activity.participants && (
                                                <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-500">
                                                    <Users className="w-4 h-4" />
                                                    <span>
                                                        {activity.participants} {language === 'en' ? 'participants' : 'peserta'}
                                                    </span>
                                                </div>
                                            )}
                                            {activity.duration && (
                                                <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-500">
                                                    <Clock className="w-4 h-4" />
                                                    <span>{activity.duration}</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Tags */}
                                        {activity.tags && activity.tags.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {activity.tags.slice(0, 3).map((tag, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 text-xs rounded-md"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        {/* Read More Link */}
                                        <div className="mt-2">
                                            <Link
                                                href={`/activities/${activity.slug}`}
                                                className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-sm hover:gap-3 transition-all"
                                            >
                                                {language === 'en' ? 'Read More' : 'Baca Selengkapnya'}
                                                <span>→</span>
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* No Activities Message */}
                        {activities.length === 0 && (
                            <div className="text-center py-16">
                                <Calendar className="w-16 h-16 text-neutral-300 dark:text-neutral-700 mx-auto mb-4" />
                                <p className="text-neutral-500 dark:text-neutral-400">
                                    {language === 'en' ? 'No activities found' : 'Tidak ada kegiatan ditemukan'}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
