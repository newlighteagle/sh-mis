"use client";

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, BarChart3, Info, MapPin, Search, ChevronDown, ChevronUp, Users, Factory } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { FarmerGroupFeature, MillFeature, DASHBOARD_SUMMARY } from '@/lib/public-dashboard';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

interface RightSidebarProps {
    selectedFeature: FarmerGroupFeature | MillFeature | null;
    expandedSection: 'summary' | 'details';
    setExpandedSection: (section: 'summary' | 'details') => void;
}

export default function RightSidebar({ selectedFeature, expandedSection, setExpandedSection }: RightSidebarProps) {
    const [isOpen, setIsOpen] = useState(true);
    // Internal state removed, using props now
    const { language } = useLanguage();
    const t = translations[language];

    // Auto-close on mobile
    useEffect(() => {
        if (typeof window !== 'undefined' && window.innerWidth < 768) {
            setIsOpen(false);
        }
    }, []);

    // Stats Cards Data
    const stats = [
        { label: t.dashboard.stats.farmers, value: DASHBOARD_SUMMARY.totalFarmers, unit: 'Org' },
        { label: t.dashboard.stats.area, value: DASHBOARD_SUMMARY.totalAreaHa, unit: 'Ha' },
        { label: t.dashboard.stats.production, value: DASHBOARD_SUMMARY.totalProductionTon, unit: 'Ton' },
        { label: t.dashboard.stats.productivity, value: DASHBOARD_SUMMARY.productivityTonHa, unit: 'Ton/Ha' },
    ];

    return (
        <div className={`absolute top-[70px] right-2 md:top-[80px] md:right-4 z-20 flex transition-all duration-300 pointer-events-none ${isOpen ? 'translate-x-0' : 'translate-x-[calc(100%_-_40px)]'}`}>
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="h-8 w-8 bg-white dark:bg-neutral-800 shadow-lg rounded-l-lg flex items-center justify-center text-neutral-600 dark:text-neutral-300 pointer-events-auto border-y border-l border-neutral-200 dark:border-neutral-700 mt-2"
                aria-label={isOpen ? "Minimize sidebar" : "maximize sidebar"}
            >
                {isOpen ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            </button>

            {/* Sidebar Content */}
            <div className={`w-[75vw] md:w-[320px] h-[calc(100vh-140px)] md:h-[calc(100vh-150px)] bg-white dark:bg-neutral-800 shadow-xl rounded-lg overflow-hidden flex flex-col pointer-events-auto border border-neutral-200 dark:border-neutral-700 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 invisible'}`}>

                <div className="p-2.5 border-b border-neutral-200 dark:border-neutral-700">
                    <h2 className="text-sm font-bold text-neutral-800 dark:text-neutral-100">{t.dashboard.info.title}</h2>
                </div>

                <div className="flex-1 overflow-y-auto no-scrollbar">

                    {/* Section 1: Summary All Data */}
                    <div className="border-b border-neutral-200 dark:border-neutral-700">
                        <button
                            className="w-full px-3 py-2 flex items-center justify-between bg-neutral-50 dark:bg-neutral-900/50 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                            onClick={() => setExpandedSection(expandedSection === 'summary' ? 'details' : 'summary')}
                        >
                            <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-200">{t.dashboard.info.summary}</span>
                            {expandedSection === 'summary' ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        </button>

                        {expandedSection === 'summary' && (
                            <div className="p-3 space-y-4 animate-in slide-in-from-top-2 duration-200">
                                {/* Stats Grid */}
                                <div className="grid grid-cols-2 gap-2">
                                    {stats.map((stat, idx) => (
                                        <div key={idx} className="bg-white dark:bg-neutral-700/50 p-2 rounded-lg border border-neutral-100 dark:border-neutral-600 shadow-sm">
                                            <p className="text-[10px] text-neutral-500 dark:text-neutral-400 mb-0.5 leading-none">{stat.label}</p>
                                            <p className="text-sm font-bold text-neutral-800 dark:text-white leading-tight">
                                                {stat.value.toLocaleString()} <span className="text-[9px] font-normal text-neutral-500">{stat.unit}</span>
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Monthly Production Chart */}
                                <div>
                                    <h3 className="text-[10px] font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">{t.dashboard.charts.productionTrend}</h3>
                                    <div className="h-28 w-full">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <AreaChart data={DASHBOARD_SUMMARY.productionTrend}>
                                                <defs>
                                                    <linearGradient id="colorProd" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                                                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                                    </linearGradient>
                                                </defs>
                                                <CartesianGrid vertical={false} stroke="#e5e5e5" strokeOpacity={0.3} />
                                                <XAxis dataKey="month" tick={{ fontSize: 8 }} axisLine={false} tickLine={false} tickFormatter={(val) => val.charAt(0)} interval={0} />
                                                <YAxis tick={{ fontSize: 8 }} axisLine={false} tickLine={false} width={25} />
                                                <Tooltip
                                                    contentStyle={{ backgroundColor: '#fff', borderRadius: '4px', border: 'none', boxShadow: '0 2px 4px -1px rgb(0 0 0 / 0.1)', padding: '4px 8px' }}
                                                    itemStyle={{ color: '#059669', fontSize: '10px' }}
                                                    labelStyle={{ fontSize: '10px', marginBottom: '2px' }}
                                                />
                                                <Area type="monotone" dataKey="value" stroke="#10b981" fillOpacity={1} fill="url(#colorProd)" strokeWidth={1.5} />
                                            </AreaChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>

                                {/* Supply Chain / Top Mills Chart */}
                                <div>
                                    <h3 className="text-[10px] font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">{t.dashboard.charts.topMills}</h3>
                                    <div className="h-36 w-full">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <BarChart layout="vertical" data={DASHBOARD_SUMMARY.topMills} margin={{ top: 0, right: 10, left: 0, bottom: 15 }}>
                                                <CartesianGrid horizontal={false} vertical={true} stroke="#e5e5e5" strokeOpacity={0.3} />
                                                <XAxis type="number" tick={{ fontSize: 8 }} axisLine={false} tickLine={false} />
                                                <YAxis
                                                    dataKey="name"
                                                    type="category"
                                                    width={30}
                                                    tick={{ fontSize: 8 }}
                                                    axisLine={false}
                                                    tickLine={false}
                                                />
                                                <Tooltip
                                                    cursor={{ fill: 'transparent' }}
                                                    contentStyle={{ backgroundColor: '#fff', borderRadius: '4px', border: 'none', boxShadow: '0 2px 4px -1px rgb(0 0 0 / 0.1)', padding: '4px 8px' }}
                                                    itemStyle={{ fontSize: '10px' }}
                                                    labelStyle={{ fontSize: '10px', marginBottom: '2px' }}
                                                />
                                                <Bar dataKey="value" fill="#3b82f6" radius={[0, 2, 2, 0]} barSize={8} />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Section 2: Info Detail */}
                    <div>
                        <button
                            className="w-full px-3 py-2 flex items-center justify-between bg-neutral-50 dark:bg-neutral-900/50 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                            onClick={() => setExpandedSection(expandedSection === 'details' ? 'summary' : 'details')}
                        >
                            <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-200">{t.dashboard.info.details} {selectedFeature ? t.dashboard.info.active : ''}</span>
                            {expandedSection === 'details' ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        </button>

                        {expandedSection === 'details' && (
                            <div className="p-3 animate-in slide-in-from-top-2 duration-200 min-h-[150px]">
                                {selectedFeature ? (
                                    <div className="space-y-3">
                                        {'farmers' in selectedFeature ? (
                                            // Farmer Group Detail
                                            <>
                                                <div className="flex items-start gap-2.5 mb-2">
                                                    <div className="p-1.5 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
                                                        <Factory size={16} />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-bold text-sm text-neutral-900 dark:text-white leading-tight">{selectedFeature.name}</h3>
                                                        <span className="inline-block px-1.5 py-0.5 bg-green-100 text-green-700 text-[9px] rounded-full mt-0.5">Kelompok Tani</span>
                                                    </div>
                                                </div>

                                                <div className="space-y-1">
                                                    <InfoRow label="District" value={selectedFeature.district} />
                                                    <InfoRow label={t.dashboard.stats.farmers} value={`${selectedFeature.farmers} Org`} />
                                                    <InfoRow label={t.dashboard.stats.area} value={`${selectedFeature.area} Ha`} />
                                                    <InfoRow label={t.dashboard.stats.production} value={`${selectedFeature.production} Ton/Thn`} />
                                                </div>
                                            </>
                                        ) : (
                                            // Mill Detail
                                            <>
                                                <div className="flex items-start gap-2.5 mb-2">
                                                    <div className="p-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                                                        <Factory size={16} />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-bold text-sm text-neutral-900 dark:text-white leading-tight">{selectedFeature.name}</h3>
                                                        <span className="inline-block px-1.5 py-0.5 bg-blue-100 text-blue-700 text-[9px] rounded-full mt-0.5">Pabrik Kelapa Sawit</span>
                                                    </div>
                                                </div>

                                                <div className="space-y-1">
                                                    <InfoRow label="Perusahaan" value={selectedFeature.company} />
                                                    <InfoRow label="Kapasitas" value={`${selectedFeature.capacity} Ton/Jam`} />
                                                    <InfoRow label="Koordinat" value={`${selectedFeature.coordinates.lat.toFixed(4)}, ${selectedFeature.coordinates.lng.toFixed(4)}`} />
                                                </div>
                                            </>
                                        )}
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center text-center h-32 text-neutral-400">
                                        <MapPin size={24} className="mb-2 opacity-50" />
                                        <p className="text-xs">{t.dashboard.info.noSelection}</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}

function InfoRow({ label, value }: { label: string, value: string | number }) {
    return (
        <div className="flex justify-between items-center py-1 border-b border-neutral-100 dark:border-neutral-700/50 last:border-0">
            <span className="text-[10px] text-neutral-500 dark:text-neutral-400">{label}</span>
            <span className="text-xs font-medium text-neutral-800 dark:text-neutral-200">{value}</span>
        </div>
    )
}
