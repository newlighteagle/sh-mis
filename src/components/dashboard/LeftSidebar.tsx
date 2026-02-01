"use client";

import { useState, useEffect } from 'react';
import { Map, Users, Factory, ChevronLeft, ChevronRight } from 'lucide-react';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

interface LeftSidebarProps {
    layers: {
        admin: boolean;
        farmers: boolean;
        mills: boolean;
    };
    toggleLayer: (layer: 'admin' | 'farmers' | 'mills') => void;
}

export default function LeftSidebar({ layers, toggleLayer }: LeftSidebarProps) {
    const [isOpen, setIsOpen] = useState(true);
    const { language } = useLanguage();
    const t = translations[language];

    // Auto-close on mobile
    useEffect(() => {
        if (typeof window !== 'undefined' && window.innerWidth < 768) {
            setIsOpen(false);
        }
    }, []);

    return (
        <div className={`absolute top-[70px] left-2 md:top-[90px] md:left-4 z-20 flex transition-all duration-300 pointer-events-none ${isOpen ? 'translate-x-0' : 'translate-x-[calc(-100%_+_40px)]'}`}>
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="h-9 w-9 bg-white dark:bg-neutral-800 shadow-lg rounded-r-lg flex items-center justify-center text-neutral-600 dark:text-neutral-300 pointer-events-auto border-y border-r border-neutral-200 dark:border-neutral-700 mt-2 order-2"
                aria-label={isOpen ? "Minimize sidebar" : "maximize sidebar"}
            >
                {isOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
            </button>

            {/* Sidebar Content */}
            <div className={`w-[75vw] md:w-[280px] max-h-[calc(100vh-140px)] md:max-h-[calc(100vh-150px)] overflow-y-auto bg-white dark:bg-neutral-800 shadow-xl rounded-lg flex flex-col pointer-events-auto border border-neutral-200 dark:border-neutral-700 transition-opacity duration-300 order-1 ${isOpen ? 'opacity-100' : 'opacity-0 invisible'}`}>
                <div className="p-3 border-b border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/50">
                    <h2 className="text-sm font-bold text-neutral-800 dark:text-neutral-100">{t.dashboard.layers.title}</h2>
                    <p className="text-[10px] text-neutral-500">{t.dashboard.layers.subtitle}</p>
                </div>

                <div className="p-3 space-y-2">
                    {/* Layer Item: Admin Boundary */}
                    <label className="flex items-center justify-between cursor-pointer hover:bg-neutral-50 dark:hover:bg-gray-800/50 p-1.5 -mx-1.5 rounded-lg transition-colors">
                        <div className="flex items-center gap-2.5">
                            <div className={`p-1.5 rounded-md ${layers.admin ? 'bg-orange-100 text-orange-600' : 'bg-neutral-100 text-neutral-400'}`}>
                                <Map size={16} />
                            </div>
                            <div className={`transition-opacity duration-200 ${layers.admin ? 'opacity-100' : 'opacity-40'}`}>
                                <h3 className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">{t.dashboard.layers.admin.title}</h3>
                                <p className="text-[10px] text-neutral-500">{t.dashboard.layers.admin.subtitle}</p>
                            </div>
                        </div>
                        <div className="relative inline-flex items-center">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={layers.admin}
                                onChange={() => toggleLayer('admin')}
                            />
                            <div className="w-8 h-4.5 bg-neutral-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-neutral-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                        </div>
                    </label>

                    {/* Layer Item: Farmer Groups */}
                    <label className="flex items-center justify-between cursor-pointer hover:bg-neutral-50 dark:hover:bg-gray-800/50 p-1.5 -mx-1.5 rounded-lg transition-colors">
                        <div className="flex items-center gap-2.5">
                            <div className={`p-1.5 rounded-md ${layers.farmers ? 'bg-green-100 text-green-600' : 'bg-neutral-100 text-neutral-400'}`}>
                                <Users size={16} />
                            </div>
                            <div className={`transition-opacity duration-200 ${layers.farmers ? 'opacity-100' : 'opacity-40'}`}>
                                <h3 className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">{t.dashboard.layers.farmers.title}</h3>
                                <p className="text-[10px] text-neutral-500">{t.dashboard.layers.farmers.subtitle}</p>
                            </div>
                        </div>
                        <div className="relative inline-flex items-center">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={layers.farmers}
                                onChange={() => toggleLayer('farmers')}
                            />
                            <div className="w-8 h-4.5 bg-neutral-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-neutral-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                        </div>
                    </label>

                    {/* Layer Item: Mills */}
                    <label className="flex items-center justify-between cursor-pointer hover:bg-neutral-50 dark:hover:bg-gray-800/50 p-1.5 -mx-1.5 rounded-lg transition-colors">
                        <div className="flex items-center gap-2.5">
                            <div className={`p-1.5 rounded-md ${layers.mills ? 'bg-blue-100 text-blue-600' : 'bg-neutral-100 text-neutral-400'}`}>
                                <Factory size={16} />
                            </div>
                            <div className={`transition-opacity duration-200 ${layers.mills ? 'opacity-100' : 'opacity-40'}`}>
                                <h3 className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">{t.dashboard.layers.mills.title}</h3>
                                <p className="text-[10px] text-neutral-500">{t.dashboard.layers.mills.subtitle}</p>
                            </div>
                        </div>
                        <div className="relative inline-flex items-center">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={layers.mills}
                                onChange={() => toggleLayer('mills')}
                            />
                            <div className="w-8 h-4.5 bg-neutral-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-neutral-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                        </div>
                    </label>

                </div>
            </div>
        </div>
    );
}
