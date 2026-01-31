"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import {
    getAllFarmerGroups,
    getFarmerGroupsByDistrict,
    getFarmerGroupBySlug,
    districtMetadata
} from "@/lib/farmerGroupsData";
import ContentSidebar, { SidebarCategory } from "@/components/ContentSidebar";
import { Users, MapPin, Sprout, Home } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function CommunitySlugPage() {
    const params = useParams();
    const { language } = useLanguage();
    const slugParam = params.slug as string;

    // Valid districts
    const validDistricts = ['kampar', 'rohul', 'siak', 'pelalawan'];

    // Check if param is a valid district
    const isValidDistrict = validDistricts.includes(slugParam);

    // If not a valid district, check if it's a farmer group slug
    if (!isValidDistrict) {
        const groupData = getFarmerGroupBySlug(slugParam);
        if (groupData) {
            // This is a farmer group slug - show comprehensive profile page
            // Count total activities
            const totalActivities = Object.values(groupData.activities).flat().length;

            // Prepare sidebar categories (same as main community page)
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
                                {groupData.name}
                            </h1>
                            {/* Breadcrumb */}
                            <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                                <Link href="/community" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                                    {language === 'en' ? 'Community' : 'Komunitas'}
                                </Link>
                                <span>/</span>
                                <Link href={`/community/${groupData.district}`} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                                    {districtMetadata[groupData.district][language]}
                                </Link>
                                <span>/</span>
                                <span className="text-neutral-900 dark:text-white font-medium">
                                    {groupData.name}
                                </span>
                            </div>
                            <p className="text-base text-neutral-600 dark:text-neutral-400 max-w-3xl min-h-[3rem]">
                                {language === 'en'
                                    ? `Established in ${groupData.established}, ${groupData.name} represents ${groupData.statistics.totalFarmers} smallholder farmers managing ${groupData.statistics.totalAreaHa} hectares of palm oil plantations in ${districtMetadata[groupData.district]['en']}.`
                                    : `Didirikan pada ${groupData.established}, ${groupData.name} mewakili ${groupData.statistics.totalFarmers} petani swadaya yang mengelola ${groupData.statistics.totalAreaHa} hektar perkebunan kelapa sawit di ${districtMetadata[groupData.district]['id']}.`
                                }
                            </p>
                        </div>

                        {/* Layout with Sidebar */}
                        <div className="flex flex-col lg:flex-row gap-8">
                            {/* Sidebar (1/4) */}
                            <ContentSidebar
                                categories={sidebarCategories}
                                allHref="/community"
                                allLabel={{ en: "All Groups", id: "Semua Kelompok" }}
                                allIcon={Users}
                                totalCount={getAllFarmerGroups().length}
                                activeKey={groupData.district}
                                className="hidden lg:block"
                            />

                            {/* Main Content (3/4) */}
                            <div className="lg:w-3/4 w-full">
                                {/* Logo Card */}
                                <div className="mb-8">
                                    <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/10 dark:to-green-900/10 rounded-2xl p-6 border border-emerald-100 dark:border-emerald-800">
                                        <div className="flex items-center gap-6">
                                            {/* Logo */}
                                            <div className="relative w-24 h-24 flex-shrink-0">
                                                <Image
                                                    src={groupData.assets.logo}
                                                    alt={groupData.name}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>

                                            {/* Info */}
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-medium">
                                                        <MapPin className="w-3.5 h-3.5" />
                                                        {districtMetadata[groupData.district][language]}
                                                    </div>
                                                    <span className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-xs font-medium">
                                                        {language === 'en' ? groupData.legalStatus.en : groupData.legalStatus.id}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                                    {language === 'en' ? 'Established' : 'Didirikan'} {groupData.established}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Statistics Grid */}
                                <div className="mb-12">
                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                                        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700">
                                            <Users className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mb-3" />
                                            <div className="text-3xl font-bold text-neutral-900 dark:text-white mb-1">
                                                {groupData.statistics.totalFarmers}
                                            </div>
                                            <div className="text-sm text-neutral-600 dark:text-neutral-400">
                                                {language === 'en' ? 'Total Farmers' : 'Total Petani'}
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700">
                                            <Sprout className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mb-3" />
                                            <div className="text-3xl font-bold text-neutral-900 dark:text-white mb-1">
                                                {groupData.statistics.totalAreaHa}
                                            </div>
                                            <div className="text-sm text-neutral-600 dark:text-neutral-400">
                                                {language === 'en' ? 'Hectares' : 'Hektar'}
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700">
                                            <MapPin className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mb-3" />
                                            <div className="text-3xl font-bold text-neutral-900 dark:text-white mb-1">
                                                {groupData.statistics.landParcels}
                                            </div>
                                            <div className="text-sm text-neutral-600 dark:text-neutral-400">
                                                {language === 'en' ? 'Land Parcels' : 'Bidang Lahan'}
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700">
                                            <Home className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mb-3" />
                                            <div className="text-3xl font-bold text-neutral-900 dark:text-white mb-1">
                                                {groupData.gapoktan.length}
                                            </div>
                                            <div className="text-sm text-neutral-600 dark:text-neutral-400">
                                                Gapoktan
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Management Photo */}
                                <div className="mb-8">
                                    <div className="relative w-full h-80 rounded-2xl overflow-hidden">
                                        <Image
                                            src={groupData.assets.managementPhoto}
                                            alt={`${groupData.name} Management Team`}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                                            <p className="text-white font-semibold text-lg">
                                                {language === 'en' ? 'Management Team' : 'Tim Pengurus'}
                                            </p>
                                            <p className="text-white/80 text-sm">
                                                {language === 'en'
                                                    ? 'Leading sustainable palm oil initiatives in the community'
                                                    : 'Memimpin inisiatif kelapa sawit berkelanjutan di komunitas'
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Sections */}
                                <div className="grid md:grid-cols-3 gap-8">
                                    {/* Main Content (2/3) */}
                                    <div className="md:col-span-2 space-y-8">
                                        {/* History */}
                                        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-700">
                                            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                                                {language === 'en' ? 'History' : 'Sejarah'}
                                            </h2>
                                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                                {language === 'en' ? groupData.content.history.en : groupData.content.history.id}
                                            </p>
                                        </div>

                                        {/* Geography */}
                                        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-700">
                                            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                                                {language === 'en' ? 'Geography' : 'Geografi'}
                                            </h2>
                                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                                                {language === 'en' ? groupData.content.geography.en : groupData.content.geography.id}
                                            </p>
                                            {/* Land Types Breakdown */}
                                            <div className="grid grid-cols-3 gap-4 mt-4">
                                                {groupData.statistics.landTypes.peat && (
                                                    <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4">
                                                        <div className="text-2xl font-bold text-amber-700 dark:text-amber-400">
                                                            {groupData.statistics.landTypes.peat}
                                                        </div>
                                                        <div className="text-sm text-amber-600 dark:text-amber-500">
                                                            {language === 'en' ? 'Ha Peatland' : 'Ha Gambut'}
                                                        </div>
                                                    </div>
                                                )}
                                                {groupData.statistics.landTypes.mineral && (
                                                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                                                        <div className="text-2xl font-bold text-blue-700 dark:text-blue-400">
                                                            {groupData.statistics.landTypes.mineral}
                                                        </div>
                                                        <div className="text-sm text-blue-600 dark:text-blue-500">
                                                            {language === 'en' ? 'Ha Mineral' : 'Ha Mineral'}
                                                        </div>
                                                    </div>
                                                )}
                                                {groupData.statistics.landTypes.mixed && (
                                                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                                                        <div className="text-2xl font-bold text-purple-700 dark:text-purple-400">
                                                            {groupData.statistics.landTypes.mixed}
                                                        </div>
                                                        <div className="text-sm text-purple-600 dark:text-purple-500">
                                                            {language === 'en' ? 'Ha Mixed' : 'Ha Campuran'}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Governance */}
                                        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-700">
                                            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                                                {language === 'en' ? 'Governance' : 'Tata Kelola'}
                                            </h2>
                                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                                {language === 'en' ? groupData.content.governance.en : groupData.content.governance.id}
                                            </p>
                                        </div>

                                        {/* Facilities */}
                                        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-700">
                                            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                                                {language === 'en' ? 'Facilities' : 'Fasilitas'}
                                            </h2>
                                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                                {language === 'en' ? groupData.content.facilities.en : groupData.content.facilities.id}
                                            </p>
                                        </div>

                                        {/* Recent Activities */}
                                        {totalActivities > 0 && (
                                            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-700">
                                                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                                                    {language === 'en' ? 'Recent Activities' : 'Kegiatan Terkini'}
                                                </h2>

                                                {/* Activity Grid */}
                                                <div className="space-y-6">
                                                    {/* Training Activities */}
                                                    {groupData.activities.training.map((activity) => (
                                                        <div key={activity.id} className="border border-neutral-200 dark:border-neutral-700 rounded-xl overflow-hidden">
                                                            {activity.images && activity.images.length > 0 && (
                                                                <div className="relative w-full h-48">
                                                                    <Image
                                                                        src={activity.images[0]}
                                                                        alt={language === 'en' ? activity.title.en : activity.title.id}
                                                                        fill
                                                                        className="object-cover"
                                                                    />
                                                                </div>
                                                            )}
                                                            <div className="p-4">
                                                                <div className="flex items-center gap-2 mb-2">
                                                                    <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded text-xs font-medium">
                                                                        {language === 'en' ? 'Training' : 'Pelatihan'}
                                                                    </span>
                                                                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                                                                        {new Date(activity.date).toLocaleDateString(language === 'en' ? 'en-US' : 'id-ID', { year: 'numeric', month: 'short', day: 'numeric' })}
                                                                    </span>
                                                                </div>
                                                                <h3 className="font-bold text-neutral-900 dark:text-white mb-2">
                                                                    {language === 'en' ? activity.title.en : activity.title.id}
                                                                </h3>
                                                                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                                                                    {language === 'en' ? activity.description.en : activity.description.id}
                                                                </p>
                                                                {activity.participants && (
                                                                    <div className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400">
                                                                        <Users className="w-3.5 h-3.5" />
                                                                        <span>{activity.participants} {language === 'en' ? 'participants' : 'peserta'}</span>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}

                                                    {/* BMP Activities */}
                                                    {groupData.activities.bmp.map((activity) => (
                                                        <div key={activity.id} className="border border-neutral-200 dark:border-neutral-700 rounded-xl overflow-hidden">
                                                            {activity.images && activity.images.length > 0 && (
                                                                <div className="relative w-full h-48">
                                                                    <Image
                                                                        src={activity.images[0]}
                                                                        alt={language === 'en' ? activity.title.en : activity.title.id}
                                                                        fill
                                                                        className="object-cover"
                                                                    />
                                                                </div>
                                                            )}
                                                            <div className="p-4">
                                                                <div className="flex items-center gap-2 mb-2">
                                                                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded text-xs font-medium">
                                                                        BMP
                                                                    </span>
                                                                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                                                                        {new Date(activity.date).toLocaleDateString(language === 'en' ? 'en-US' : 'id-ID', { year: 'numeric', month: 'short', day: 'numeric' })}
                                                                    </span>
                                                                </div>
                                                                <h3 className="font-bold text-neutral-900 dark:text-white mb-2">
                                                                    {language === 'en' ? activity.title.en : activity.title.id}
                                                                </h3>
                                                                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                                                                    {language === 'en' ? activity.description.en : activity.description.id}
                                                                </p>
                                                                {activity.participants && (
                                                                    <div className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400">
                                                                        <Users className="w-3.5 h-3.5" />
                                                                        <span>{activity.participants} {language === 'en' ? 'participants' : 'peserta'}</span>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}

                                                    {/* HCV Activities */}
                                                    {groupData.activities.hcv.map((activity) => (
                                                        <div key={activity.id} className="border border-neutral-200 dark:border-neutral-700 rounded-xl overflow-hidden">
                                                            {activity.images && activity.images.length > 0 && (
                                                                <div className="relative w-full h-48">
                                                                    <Image
                                                                        src={activity.images[0]}
                                                                        alt={language === 'en' ? activity.title.en : activity.title.id}
                                                                        fill
                                                                        className="object-cover"
                                                                    />
                                                                </div>
                                                            )}
                                                            <div className="p-4">
                                                                <div className="flex items-center gap-2 mb-2">
                                                                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded text-xs font-medium">
                                                                        HCV
                                                                    </span>
                                                                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                                                                        {new Date(activity.date).toLocaleDateString(language === 'en' ? 'en-US' : 'id-ID', { year: 'numeric', month: 'short', day: 'numeric' })}
                                                                    </span>
                                                                </div>
                                                                <h3 className="font-bold text-neutral-900 dark:text-white mb-2">
                                                                    {language === 'en' ? activity.title.en : activity.title.id}
                                                                </h3>
                                                                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                                                                    {language === 'en' ? activity.description.en : activity.description.id}
                                                                </p>
                                                                {activity.participants && (
                                                                    <div className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400">
                                                                        <Users className="w-3.5 h-3.5" />
                                                                        <span>{activity.participants} {language === 'en' ? 'participants' : 'peserta'}</span>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}

                                                    {/* HSE Activities */}
                                                    {groupData.activities.hse.map((activity) => (
                                                        <div key={activity.id} className="border border-neutral-200 dark:border-neutral-700 rounded-xl overflow-hidden">
                                                            {activity.images && activity.images.length > 0 && (
                                                                <div className="relative w-full h-48">
                                                                    <Image
                                                                        src={activity.images[0]}
                                                                        alt={language === 'en' ? activity.title.en : activity.title.id}
                                                                        fill
                                                                        className="object-cover"
                                                                    />
                                                                </div>
                                                            )}
                                                            <div className="p-4">
                                                                <div className="flex items-center gap-2 mb-2">
                                                                    <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded text-xs font-medium">
                                                                        HSE
                                                                    </span>
                                                                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                                                                        {new Date(activity.date).toLocaleDateString(language === 'en' ? 'en-US' : 'id-ID', { year: 'numeric', month: 'short', day: 'numeric' })}
                                                                    </span>
                                                                </div>
                                                                <h3 className="font-bold text-neutral-900 dark:text-white mb-2">
                                                                    {language === 'en' ? activity.title.en : activity.title.id}
                                                                </h3>
                                                                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                                                                    {language === 'en' ? activity.description.en : activity.description.id}
                                                                </p>
                                                                {activity.participants && (
                                                                    <div className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400">
                                                                        <Users className="w-3.5 h-3.5" />
                                                                        <span>{activity.participants} {language === 'en' ? 'participants' : 'peserta'}</span>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}

                                                    {/* Business Development Activities */}
                                                    {groupData.activities.businessDev.map((activity) => (
                                                        <div key={activity.id} className="border border-neutral-200 dark:border-neutral-700 rounded-xl overflow-hidden">
                                                            {activity.images && activity.images.length > 0 && (
                                                                <div className="relative w-full h-48">
                                                                    <Image
                                                                        src={activity.images[0]}
                                                                        alt={language === 'en' ? activity.title.en : activity.title.id}
                                                                        fill
                                                                        className="object-cover"
                                                                    />
                                                                </div>
                                                            )}
                                                            <div className="p-4">
                                                                <div className="flex items-center gap-2 mb-2">
                                                                    <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded text-xs font-medium">
                                                                        {language === 'en' ? 'Business Dev' : 'Pengembangan Usaha'}
                                                                    </span>
                                                                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                                                                        {new Date(activity.date).toLocaleDateString(language === 'en' ? 'en-US' : 'id-ID', { year: 'numeric', month: 'short', day: 'numeric' })}
                                                                    </span>
                                                                </div>
                                                                <h3 className="font-bold text-neutral-900 dark:text-white mb-2">
                                                                    {language === 'en' ? activity.title.en : activity.title.id}
                                                                </h3>
                                                                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                                                                    {language === 'en' ? activity.description.en : activity.description.id}
                                                                </p>
                                                                {activity.participants && (
                                                                    <div className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400">
                                                                        <Users className="w-3.5 h-3.5" />
                                                                        <span>{activity.participants} {language === 'en' ? 'participants' : 'peserta'}</span>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}

                                                    {/* GEDSI Activities */}
                                                    {groupData.activities.gedsi.map((activity) => (
                                                        <div key={activity.id} className="border border-neutral-200 dark:border-neutral-700 rounded-xl overflow-hidden">
                                                            {activity.images && activity.images.length > 0 && (
                                                                <div className="relative w-full h-48">
                                                                    <Image
                                                                        src={activity.images[0]}
                                                                        alt={language === 'en' ? activity.title.en : activity.title.id}
                                                                        fill
                                                                        className="object-cover"
                                                                    />
                                                                </div>
                                                            )}
                                                            <div className="p-4">
                                                                <div className="flex items-center gap-2 mb-2">
                                                                    <span className="px-2 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400 rounded text-xs font-medium">
                                                                        GEDSI
                                                                    </span>
                                                                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                                                                        {new Date(activity.date).toLocaleDateString(language === 'en' ? 'en-US' : 'id-ID', { year: 'numeric', month: 'short', day: 'numeric' })}
                                                                    </span>
                                                                </div>
                                                                <h3 className="font-bold text-neutral-900 dark:text-white mb-2">
                                                                    {language === 'en' ? activity.title.en : activity.title.id}
                                                                </h3>
                                                                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                                                                    {language === 'en' ? activity.description.en : activity.description.id}
                                                                </p>
                                                                {activity.participants && (
                                                                    <div className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400">
                                                                        <Users className="w-3.5 h-3.5" />
                                                                        <span>{activity.participants} {language === 'en' ? 'participants' : 'peserta'}</span>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}

                                                    {/* Sustainable Standards Activities */}
                                                    {groupData.activities.sustainableStandards.map((activity) => (
                                                        <div key={activity.id} className="border border-neutral-200 dark:border-neutral-700 rounded-xl overflow-hidden">
                                                            {activity.images && activity.images.length > 0 && (
                                                                <div className="relative w-full h-48">
                                                                    <Image
                                                                        src={activity.images[0]}
                                                                        alt={language === 'en' ? activity.title.en : activity.title.id}
                                                                        fill
                                                                        className="object-cover"
                                                                    />
                                                                </div>
                                                            )}
                                                            <div className="p-4">
                                                                <div className="flex items-center gap-2 mb-2">
                                                                    <span className="px-2 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 rounded text-xs font-medium">
                                                                        {language === 'en' ? 'Standards' : 'Standar'}
                                                                    </span>
                                                                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                                                                        {new Date(activity.date).toLocaleDateString(language === 'en' ? 'en-US' : 'id-ID', { year: 'numeric', month: 'short', day: 'numeric' })}
                                                                    </span>
                                                                </div>
                                                                <h3 className="font-bold text-neutral-900 dark:text-white mb-2">
                                                                    {language === 'en' ? activity.title.en : activity.title.id}
                                                                </h3>
                                                                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                                                                    {language === 'en' ? activity.description.en : activity.description.id}
                                                                </p>
                                                                {activity.participants && (
                                                                    <div className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400">
                                                                        <Users className="w-3.5 h-3.5" />
                                                                        <span>{activity.participants} {language === 'en' ? 'participants' : 'peserta'}</span>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Right Sidebar (1/3) */}
                                    <div className="space-y-6">
                                        {/* Gapoktan Structure */}
                                        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700">
                                            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
                                                {language === 'en' ? 'Gapoktan Structure' : 'Struktur Gapoktan'}
                                            </h3>
                                            <div className="space-y-4">
                                                {groupData.gapoktan.map((gapoktan, index) => (
                                                    <div key={index} className="border-l-4 border-emerald-500 pl-4 py-2">
                                                        <div className="font-semibold text-neutral-900 dark:text-white">
                                                            {gapoktan.name}
                                                        </div>
                                                        <div className="text-sm text-neutral-600 dark:text-neutral-400">
                                                            {gapoktan.members} {language === 'en' ? 'members' : 'anggota'}
                                                        </div>
                                                        {gapoktan.chairman && (
                                                            <div className="text-sm text-neutral-500 dark:text-neutral-500">
                                                                {language === 'en' ? 'Chair:' : 'Ketua:'} {gapoktan.chairman}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Quick Facts */}
                                        <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-6 border border-emerald-200 dark:border-emerald-800">
                                            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
                                                {language === 'en' ? 'Quick Facts' : 'Fakta Singkat'}
                                            </h3>
                                            <div className="space-y-3 text-sm">
                                                <div className="flex justify-between">
                                                    <span className="text-neutral-600 dark:text-neutral-400">
                                                        {language === 'en' ? 'Established' : 'Didirikan'}
                                                    </span>
                                                    <span className="font-semibold text-neutral-900 dark:text-white">
                                                        {groupData.established}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-neutral-600 dark:text-neutral-400">
                                                        {language === 'en' ? 'District' : 'Kabupaten'}
                                                    </span>
                                                    <span className="font-semibold text-neutral-900 dark:text-white">
                                                        {districtMetadata[groupData.district][language]}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-neutral-600 dark:text-neutral-400">
                                                        {language === 'en' ? 'Total Activities' : 'Total Kegiatan'}
                                                    </span>
                                                    <span className="font-semibold text-neutral-900 dark:text-white">
                                                        {totalActivities}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Back Link */}
                                <div className="mt-12 text-center">
                                    <Link
                                        href="/community"
                                        className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:underline font-medium"
                                    >
                                        ← {language === 'en' ? 'Back to All Groups' : 'Kembali ke Semua Kelompok'}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            );
        }
    }

    // Get all farmer groups
    const allGroups = getAllFarmerGroups();

    // Get current district groups
    const filteredGroups = getFarmerGroupsByDistrict(slugParam as 'kampar' | 'rohul' | 'siak' | 'pelalawan');
    const districtMeta = districtMetadata[slugParam as keyof typeof districtMetadata];

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

    if (!districtMeta) {
        return (
            <main className="min-h-screen bg-neutral-50 dark:bg-neutral-900 pt-24 pb-16">
                <div className="container mx-auto px-6">
                    <div className="text-center py-16">
                        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                            {language === 'en' ? 'District Not Found' : 'Kabupaten Tidak Ditemukan'}
                        </h1>
                        <Link href="/community" className="text-emerald-600 dark:text-emerald-400 hover:underline">
                            {language === 'en' ? 'Back to All Groups' : 'Kembali ke Semua Kelompok'}
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-neutral-50 dark:bg-neutral-900 pt-24 pb-16">
            <div className="container mx-auto px-6">
                {/* Page Header */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-3">
                        {language === 'en' ? districtMeta.en : districtMeta.id}
                    </h1>
                    {/* Breadcrumb - inline below title */}
                    <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-500 h-5 mb-4">
                        <Link href="/community" className="hover:text-emerald-600 dark:hover:text-emerald-400">
                            {language === 'en' ? 'Community' : 'Komunitas'}
                        </Link>
                        <span>›</span>
                        <span className="text-neutral-700 dark:text-neutral-400">
                            {language === 'en' ? districtMeta.en : districtMeta.id}
                        </span>
                    </div>
                    <p className="text-base text-neutral-600 dark:text-neutral-400 max-w-3xl min-h-[3rem]">
                        {language === 'en' ? districtMeta.description.en : districtMeta.description.id}
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
                        {/* Farmer Groups Grid */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {filteredGroups.map((group) => (
                                <Link
                                    key={group.id}
                                    href={`/community/${group.slug}`}
                                    className="group bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300"
                                >
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
                                </Link>
                            ))}
                        </div>

                        {/* Empty State */}
                        {filteredGroups.length === 0 && (
                            <div className="text-center py-16">
                                <Users className="w-16 h-16 text-neutral-300 dark:text-neutral-700 mx-auto mb-4" />
                                <p className="text-neutral-500 dark:text-neutral-400">
                                    {language === 'en' ? 'No farmer groups found in this district' : 'Tidak ada kelompok tani ditemukan di kabupaten ini'}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
