"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Photo {
    src: string;
    alt: string;
}

const photos: Photo[] = [
    {
        src: "/images/plantation-farmers.png",
        alt: "Palm oil plantation with farmers working",
    },
    {
        src: "/images/bmp-training.png",
        alt: "Farmer group training on Best Management Practices",
    },
    {
        src: "/images/fertilizer-discussion.png",
        alt: "Group discussion on fertilizer business development",
    },
    {
        src: "/images/women-nursery.png",
        alt: "Women and girls working on palm seedling nursery",
    },
    {
        src: "/images/riverside-buffer.png",
        alt: "Pristine riverside with conservation buffer zone",
    },
];

export default function PhotoCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % photos.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const goToPrevious = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
    };

    const goToNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev + 1) % photos.length);
    };

    const goToSlide = (index: number) => {
        setIsAutoPlaying(false);
        setCurrentIndex(index);
    };

    return (
        <div
            className="relative w-full h-full group"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            {/* Main Image Container - Fullscreen */}
            <div className="relative w-full h-full overflow-hidden">
                {photos.map((photo, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <Image
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                    </div>
                ))}

                {/* Navigation Buttons - More subtle for background carousel */}
                <button
                    onClick={goToPrevious}
                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-md rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:bg-white/20 border border-white/20"
                    aria-label="Previous photo"
                >
                    <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                    onClick={goToNext}
                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-md rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:bg-white/20 border border-white/20"
                    aria-label="Next photo"
                >
                    <ChevronRight className="w-6 h-6 text-white" />
                </button>
            </div>

            {/* Dots Navigation - Positioned at bottom for background use */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center gap-2 z-10">
                {photos.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                ? "w-8 bg-white shadow-lg"
                                : "w-2 bg-white/50 hover:bg-white/80"
                            }`}
                        aria-label={`Go to photo ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
