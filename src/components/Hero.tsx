"use client";

import { ArrowRight, Play } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import PhotoCarousel from "@/components/PhotoCarousel";

export default function Hero() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Photo Carousel as Background */}
            <div className="absolute inset-0 z-0">
                <PhotoCarousel />
            </div>

            {/* Gradient Overlay for better text visibility - Light mode uses lighter overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50 dark:from-black/70 dark:via-black/60 dark:to-black/70 z-[1]" />

            {/* Additional overlay with blur effect for even better readability */}
            <div className="absolute inset-0 backdrop-blur-[2px] z-[2]" />

            {/* Content - Now on top of the carousel */}
            <div className="container mx-auto px-6 py-20 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/30 dark:bg-emerald-500/20 backdrop-blur-md border border-emerald-300/50 dark:border-emerald-400/30 text-emerald-100 dark:text-emerald-300 rounded-full text-sm font-medium mb-6 animate-fade-in shadow-lg">
                        <span className="w-2 h-2 bg-emerald-300 dark:bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50 dark:shadow-emerald-500/50" />
                        {t.hero.tagline}
                    </div>

                    {/* Title with text shadow for better visibility */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                        {t.hero.title}
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-gray-50 dark:text-gray-100 mb-10 max-w-2xl mx-auto drop-shadow-lg">
                        {t.hero.subtitle}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#community"
                            className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-lg font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-xl"
                        >
                            {t.hero.cta}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <button className="group px-8 py-4 bg-white/15 dark:bg-white/10 backdrop-blur-md text-white text-lg font-semibold rounded-xl border-2 border-white/40 dark:border-white/30 hover:border-emerald-300 dark:hover:border-emerald-400 hover:bg-white/25 dark:hover:bg-white/20 hover:shadow-lg transition-all duration-300 flex items-center gap-2">
                            <Play className="w-5 h-5" />
                            {t.hero.learnMore}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
