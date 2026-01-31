"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { LucideIcon } from "lucide-react";

export interface SidebarCategory {
    key: string;
    label: { en: string; id: string };
    icon: LucideIcon;
    count: number;
    href: string;
}

interface ContentSidebarProps {
    categories: SidebarCategory[];
    allHref: string;
    allLabel: { en: string; id: string };
    allIcon: LucideIcon;
    totalCount: number;
    activeKey?: string;
    className?: string;
}

export default function ContentSidebar({
    categories,
    allHref,
    allLabel,
    allIcon: AllIcon,
    totalCount,
    activeKey,
    className
}: ContentSidebarProps) {
    const pathname = usePathname();
    const { language } = useLanguage();

    const isActive = (href: string, categoryKey?: string) => {
        // If activeKey is provided and matches the category key, highlight it
        if (activeKey && categoryKey && activeKey === categoryKey) {
            return true;
        }
        // Otherwise, use pathname matching
        return pathname === href;
    };

    return (
        <aside className={`lg:w-1/4 w-full ${className || ''}`}>
            <div className="lg:sticky lg:top-24 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-6">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-4">
                    {language === 'en' ? 'Categories' : 'Kategori'}
                </h3>

                <nav className="space-y-2">
                    {/* All Items Link */}
                    <Link
                        href={allHref}
                        className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all ${isActive(allHref)
                            ? 'bg-emerald-600 text-white shadow-lg'
                            : 'hover:bg-emerald-50 dark:hover:bg-emerald-900/20 text-neutral-700 dark:text-neutral-300'
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <AllIcon className="w-5 h-5" />
                            <span className="font-medium">{language === 'en' ? allLabel.en : allLabel.id}</span>
                        </div>
                        <span className={`text-sm px-2 py-0.5 rounded-full ${isActive(allHref)
                            ? 'bg-white/20'
                            : 'bg-neutral-200 dark:bg-neutral-700'
                            }`}>
                            {totalCount}
                        </span>
                    </Link>

                    {/* Category Links */}
                    {categories.map((category) => {
                        const Icon = category.icon;
                        const active = isActive(category.href, category.key);

                        return (
                            <Link
                                key={category.key}
                                href={category.href}
                                className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all ${active
                                    ? 'bg-emerald-600 text-white shadow-lg'
                                    : 'hover:bg-emerald-50 dark:hover:bg-emerald-900/20 text-neutral-700 dark:text-neutral-300'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <Icon className="w-5 h-5" />
                                    <span className="font-medium">
                                        {language === 'en' ? category.label.en : category.label.id}
                                    </span>
                                </div>
                                <span className={`text-sm px-2 py-0.5 rounded-full ${active
                                    ? 'bg-white/20'
                                    : 'bg-neutral-200 dark:bg-neutral-700'
                                    }`}>
                                    {category.count}
                                </span>
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </aside>
    );
}
