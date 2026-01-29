"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { farmerGroupsData, type FarmerGroup } from "@/lib/farmerGroupsData";
import Image from "next/image";
import { MapPin, Users, Sprout, Calendar, Building2 } from "lucide-react";
import { useParams } from "next/navigation";

export default function FarmerGroupProfilePage() {
    const params = useParams();
    const { language } = useLanguage();
    const groupId = params.slug as string;
    const group: FarmerGroup | undefined = farmerGroupsData[groupId as keyof typeof farmerGroupsData];

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

    return (
        <main className="min-h-screen bg-white dark:bg-neutral-900 pt-24 pb-16">
            <div className="container mx-auto px-6">
                {/* Header Section */}
                <div className="max-w-5xl mx-auto mb-12">
                    <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <div className="w-32 h-32 relative bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl flex items-center justify-center overflow-hidden border-2 border-emerald-200 dark:border-emerald-800">
                                {group.logo ? (
                                    <Image
                                        src={group.logo}
                                        alt={`${group.name} logo`}
                                        width={128}
                                        height={128}
                                        className="object-contain"
                                    />
                                ) : (
                                    <Sprout className="w-16 h-16 text-emerald-600" />
                                )}
                            </div>
                        </div>

                        {/* Title & District */}
                        <div className="flex-1 text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-3">
                                {group.name}
                            </h1>
                            <div className="flex items-center justify-center md:justify-start gap-2 text-emerald-600 dark:text-emerald-400 text-lg font-medium mb-4">
                                <MapPin className="w-5 h-5" />
                                <span>{group.district}</span>
                            </div>

                            {/* Quick Stats */}
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                                <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                                    <Users className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                    <span className="text-sm font-semibold text-neutral-900 dark:text-white">
                                        {group.members} {language === 'en' ? 'Members' : 'Anggota'}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                                    <Sprout className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                                    <span className="text-sm font-semibold text-neutral-900 dark:text-white">
                                        {group.landArea.toLocaleString()} {language === 'en' ? 'Hectares' : 'Hektar'}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg">
                                    <Building2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                                    <span className="text-sm font-semibold text-neutral-900 dark:text-white">
                                        {group.gapoktan.length} {language === 'en' ? 'Gapoktan' : 'Gapoktan'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Photo */}
                <div className="max-w-5xl mx-auto mb-16">
                    <div className="relative w-full h-96 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-700">
                        {group.teamPhoto ? (
                            <Image
                                src={group.teamPhoto}
                                alt={`${group.name} team`}
                                fill
                                className="object-cover"
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <Users className="w-16 h-16 text-neutral-400 dark:text-neutral-600 mx-auto mb-4" />
                                    <p className="text-neutral-500 dark:text-neutral-400 font-medium">
                                        {language === 'en' ? 'Team Photo Coming Soon' : 'Foto Tim Segera Hadir'}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* About Section */}
                <div className="max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">
                        {language === 'en' ? 'About Us' : 'Tentang Kami'}
                    </h2>

                    {/* History */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
                            {language === 'en' ? 'Our History' : 'Sejarah Kami'}
                        </h3>
                        <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                            {language === 'en' ? group.history.en : group.history.id}
                        </p>
                    </div>

                    {/* Geography */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
                            {language === 'en' ? 'Geographic Coverage' : 'Cakupan Geografis'}
                        </h3>
                        <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                            {language === 'en' ? group.geography.en : group.geography.id}
                        </p>
                    </div>

                    {/* Gapoktan */}
                    <div>
                        <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400 mb-4">
                            {language === 'en' ? 'Associated Farmer Group Associations (Gapoktan)' : 'Gabungan Kelompok Tani (Gapoktan) yang Bergabung'}
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {group.gapoktan.map((gapok, index) => (
                                <div
                                    key={index}
                                    className="p-4 bg-emerald-50 dark:bg-emerald-900/10 rounded-lg border border-emerald-200 dark:border-emerald-800"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="font-semibold text-neutral-900 dark:text-white">
                                            {gapok.name}
                                        </span>
                                        <span className="text-sm text-neutral-600 dark:text-neutral-400">
                                            {gapok.members} {language === 'en' ? 'members' : 'anggota'}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Activities Section */}
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">
                        {language === 'en' ? 'Our Activities' : 'Kegiatan Kami'}
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {group.activities.map((activity, index) => (
                            <div
                                key={index}
                                className="group bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300"
                            >
                                {/* Activity Image */}
                                <div className="relative w-full h-48 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 overflow-hidden">
                                    {activity.image ? (
                                        <Image
                                            src={activity.image}
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
                                    <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400">
                                        <Calendar className="w-4 h-4" />
                                        <span>{new Date(activity.date).toLocaleDateString(language === 'en' ? 'en-US' : 'id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
