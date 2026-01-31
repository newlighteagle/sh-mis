"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { getAllMedia, mediaTypes } from "@/lib/mediaData";
import ContentSidebar, { SidebarCategory } from "@/components/ContentSidebar";
import { Newspaper, Camera, Video, Calendar, User, Clock, MapPin, Eye, LayoutGrid, List } from "lucide-react";
import Link from "next/link";
import { useViewMode } from "@/hooks/useViewMode";
import Image from "next/image";
import { getMediaByType } from "@/lib/mediaData";

export default function MediaPage() {
    const { language } = useLanguage();
    const { viewMode, setViewMode } = useViewMode('media_view_mode');
    const mediaItems = getAllMedia();

    // Prepare sidebar categories
    const sidebarCategories: SidebarCategory[] = [
        {
            key: 'article',
            label: mediaTypes.article,
            icon: Newspaper,
            count: getMediaByType('article').length,
            href: '/media/articles'
        },
        {
            key: 'photo',
            label: mediaTypes.photo,
            icon: Camera,
            count: getMediaByType('photo').length,
            href: '/media/photos'
        },
        {
            key: 'video',
            label: mediaTypes.video,
            icon: Video,
            count: getMediaByType('video').length,
            href: '/media/videos'
        }
    ];

    return (
        <main className="min-h-screen bg-neutral-50 dark:bg-neutral-900 pt-24 pb-16">
            <div className="container mx-auto px-6">
                {/* Page Header */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-3">
                        {language === 'en' ? 'Media & Stories' : 'Media & Cerita'}
                    </h1>
                    {/* Invisible breadcrumb spacer for consistent height */}
                    <div className="h-5 mb-4 w-full" aria-hidden="true"></div>
                    <p className="text-base text-neutral-600 dark:text-neutral-400 w-full min-h-[3rem]">
                        {language === 'en'
                            ? 'News, success stories, photo galleries, and videos documenting our journey towards sustainable palm oil'
                            : 'Berita, kisah sukses, galeri foto, dan video yang mendokumentasikan perjalanan kami menuju minyak sawit berkelanjutan'
                        }
                    </p>
                </div>

                {/* Layout: Sidebar + Content */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <ContentSidebar
                        categories={sidebarCategories}
                        allHref="/media"
                        allLabel={{ en: 'All Media', id: 'Semua Media' }}
                        allIcon={Eye}
                        totalCount={mediaItems.length}
                    />

                    {/* Main Content Area (3/4) */}
                    <div className="lg:w-3/4 w-full">
                        {/* View Toggle */}
                        <div className="flex justify-end mb-6">
                            <div className="bg-white dark:bg-neutral-800 rounded-lg p-1 border border-neutral-200 dark:border-neutral-700 inline-flex">
                                <button
                                    onClick={() => setViewMode('card')}
                                    className={`p-2 rounded-md transition-all ${viewMode === 'card'
                                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                                        : 'text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300'
                                        }`}
                                    aria-label="Card View"
                                >
                                    <LayoutGrid className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 rounded-md transition-all ${viewMode === 'list'
                                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                                        : 'text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300'
                                        }`}
                                    aria-label="List View"
                                >
                                    <List className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Media Grid */}
                        <div className={`grid gap-6 ${viewMode === 'card' ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
                            {mediaItems.map((item) => {
                                const isArticle = item.type === 'article';
                                const isPhoto = item.type === 'photo';
                                const isVideo = item.type === 'video';

                                return (
                                    <article
                                        key={item.id}
                                        className={`group bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300 ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''}`}
                                    >
                                        {/* Cover Image/Thumbnail */}
                                        <div className={`relative bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 ${viewMode === 'list' ? 'w-full md:w-72 h-56 md:h-auto shrink-0' : 'w-full h-56'}`}>
                                            {(isArticle && item.coverImage) || (isPhoto && item.images[0]?.url) || (isVideo && item.thumbnail) ? (
                                                <>
                                                    <Image
                                                        src={isArticle ? item.coverImage : isPhoto ? item.images[0].url : item.thumbnail}
                                                        alt={language === 'en' ? item.title.en : item.title.id}
                                                        fill
                                                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                                                    />
                                                    {/* Video Play Icon Overlay */}
                                                    {isVideo && (
                                                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                                            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                                                <Video className="w-8 h-8 text-neutral-900" />
                                                            </div>
                                                        </div>
                                                    )}
                                                </>
                                            ) : (
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    {isArticle && <Newspaper className="w-16 h-16 text-blue-300 dark:text-blue-700" />}
                                                    {isPhoto && <Camera className="w-16 h-16 text-cyan-300 dark:text-cyan-700" />}
                                                    {isVideo && <Video className="w-16 h-16 text-purple-300 dark:text-purple-700" />}
                                                </div>
                                            )}

                                            {/* Type Badge */}
                                            <div className="absolute top-4 left-4">
                                                <span className={`px-3 py-1 text-white text-xs font-semibold rounded-full ${isArticle ? 'bg-blue-600' : isPhoto ? 'bg-cyan-600' : 'bg-purple-600'
                                                    }`}>
                                                    {language === 'en' ? mediaTypes[item.type].en : mediaTypes[item.type].id}
                                                </span>
                                            </div>

                                            {/* Photo Count Badge */}
                                            {isPhoto && (
                                                <div className="absolute top-4 right-4">
                                                    <span className="px-3 py-1 bg-black/50 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                                                        <Camera className="w-3 h-3" />
                                                        {item.images.length}
                                                    </span>
                                                </div>
                                            )}

                                            {/* Video Duration Badge */}
                                            {isVideo && (
                                                <div className="absolute bottom-4 right-4">
                                                    <span className="px-2 py-1 bg-black/70 text-white text-xs font-semibold rounded">
                                                        {item.duration}
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex flex-col flex-1">
                                            <div className="mb-auto">
                                                <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                    {language === 'en' ? item.title.en : item.title.id}
                                                </h2>

                                                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3">
                                                    {language === 'en'
                                                        ? (isArticle ? item.excerpt.en : item.description.en)
                                                        : (isArticle ? item.excerpt.id : item.description.id)
                                                    }
                                                </p>
                                            </div>

                                            {/* Meta Information */}
                                            <div className="space-y-2 mb-4">
                                                <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-500">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>
                                                        {new Date(item.type === 'photo' ? item.date : item.publishDate).toLocaleDateString(language === 'en' ? 'en-US' : 'id-ID', {
                                                            year: 'numeric',
                                                            month: 'long',
                                                            day: 'numeric'
                                                        })}
                                                    </span>
                                                </div>

                                                {isArticle && item.author && (
                                                    <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-500">
                                                        <User className="w-4 h-4" />
                                                        <span>{item.author}</span>
                                                    </div>
                                                )}

                                                {isArticle && item.readTime && (
                                                    <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-500">
                                                        <Clock className="w-4 h-4" />
                                                        <span>{item.readTime}</span>
                                                    </div>
                                                )}

                                                {isPhoto && item.location && (
                                                    <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-500">
                                                        <MapPin className="w-4 h-4" />
                                                        <span>{item.location}</span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Tags */}
                                            {isArticle && item.tags && item.tags.length > 0 && (
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {item.tags.slice(0, 3).map((tag, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 text-xs rounded-md"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Read/View More Link */}
                                            <div className="mt-2">
                                                <Link
                                                    href={`/media/${item.slug}`}
                                                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm hover:gap-3 transition-all"
                                                >
                                                    {language === 'en'
                                                        ? (isVideo ? 'Watch Video' : isPhoto ? 'View Gallery' : 'Read Article')
                                                        : (isVideo ? 'Tonton Video' : isPhoto ? 'Lihat Galeri' : 'Baca Artikel')
                                                    }
                                                    <span>→</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>

                        {/* No Media Message */}
                        {mediaItems.length === 0 && (
                            <div className="text-center py-16">
                                <Eye className="w-16 h-16 text-neutral-300 dark:text-neutral-700 mx-auto mb-4" />
                                <p className="text-neutral-500 dark:text-neutral-400">
                                    {language === 'en' ? 'No media found' : 'Tidak ada media ditemukan'}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
