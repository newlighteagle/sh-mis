"use client";

import Link from "next/link";
import { Menu, X, Sprout, Globe, Users, Image, LayoutDashboard, LogIn, Sun, Moon, Calendar, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { translations } from "@/lib/translations";
import { menuData } from "@/lib/menuData";
import { useState } from "react";

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = translations[language];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Mock admin login state

  // Mobile accordion states
  const [mobileCommunityOpen, setMobileCommunityOpen] = useState(false);
  const [mobileActivityOpen, setMobileActivityOpen] = useState(false);
  const [mobileMediaOpen, setMobileMediaOpen] = useState(false);
  const [mobileDistrictOpen, setMobileDistrictOpen] = useState<string | null>(null);

  const districtNames = {
    kampar: language === 'en' ? 'Kampar' : 'Kampar',
    rohul: language === 'en' ? 'Rokan Hulu' : 'Rokan Hulu',
    siak: language === 'en' ? 'Siak' : 'Siak',
    pelalawan: language === 'en' ? 'Pelalawan' : 'Pelalawan',
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg">
              <Sprout className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-neutral-900 dark:text-white">Smallholder HUB</h1>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Sawit Swadaya</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {/* Community Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-2">
                <Users className="w-4 h-4" />
                {t.nav.community}
                <ChevronDown className="w-3 h-3" />
              </button>
              {/* Dropdown Panel */}
              <div className="absolute top-full left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-xl border border-neutral-200 dark:border-neutral-700 py-2">
                  {Object.entries(menuData.community).map(([districtKey, groups]) => (
                    <div key={districtKey} className="group/district relative">
                      <div className="px-4 pr-8 py-2 text-sm font-semibold text-neutral-900 dark:text-white hover:bg-emerald-50 dark:hover:bg-emerald-900/20 cursor-pointer flex items-center justify-between">
                        {districtNames[districtKey as keyof typeof districtNames]}
                        <ChevronDown className="w-3 h-3 -rotate-90" />
                      </div>
                      {/* Nested submenu with small gap */}
                      <div className="hidden group-hover/district:block absolute left-full top-0 ml-0.5 w-64 bg-white dark:bg-neutral-800 rounded-lg shadow-xl border border-neutral-200 dark:border-neutral-700 py-2">
                        {groups.map((group) => (
                          <Link
                            key={group.id}
                            href={group.href || `#${group.id}`}
                            className="block px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 dark:hover:text-emerald-400"
                          >
                            {group.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Activity Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-2">
                <Calendar className="w-4 h-4" />
                {t.nav.activity}
                <ChevronDown className="w-3 h-3" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-xl border border-neutral-200 dark:border-neutral-700 py-2">
                  {menuData.activity.map((item) => (
                    <a
                      key={item.id}
                      href={`#activity-${item.id}`}
                      className="block px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 dark:hover:text-emerald-400"
                    >
                      {language === 'en' ? item.nameEn : item.nameId}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Media Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-2">
                <Image className="w-4 h-4" />
                {t.nav.media}
                <ChevronDown className="w-3 h-3" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-xl border border-neutral-200 dark:border-neutral-700 py-2">
                  {menuData.media.map((item) => (
                    <a
                      key={item.id}
                      href={`#media-${item.id}`}
                      className="block px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 dark:hover:text-emerald-400"
                    >
                      {language === 'en' ? item.nameEn : item.nameId}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Dashboard Link */}
            {isLoggedIn && (
              <a href="#dashboard" className="flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                <LayoutDashboard className="w-4 h-4" />
                {t.nav.dashboard}
              </a>
            )}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4" />
              <span className="font-semibold">{language.toUpperCase()}</span>
            </button>

            <button className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200">
              <LogIn className="w-4 h-4" />
              {t.nav.login}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-neutral-200 dark:border-neutral-800 pt-4 space-y-2">
            {/* Community Accordion */}
            <div>
              <button
                onClick={() => setMobileCommunityOpen(!mobileCommunityOpen)}
                className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
              >
                <span className="flex items-center gap-3">
                  <Users className="w-5 h-5" />
                  {t.nav.community}
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileCommunityOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileCommunityOpen && (
                <div className="ml-4 mt-2 space-y-1">
                  {Object.entries(menuData.community).map(([districtKey, groups]) => (
                    <div key={districtKey}>
                      <button
                        onClick={() => setMobileDistrictOpen(mobileDistrictOpen === districtKey ? null : districtKey)}
                        className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg"
                      >
                        {districtNames[districtKey as keyof typeof districtNames]}
                        <ChevronDown className={`w-3 h-3 transition-transform ${mobileDistrictOpen === districtKey ? 'rotate-180' : ''}`} />
                      </button>
                      {mobileDistrictOpen === districtKey && (
                        <div className="ml-4 mt-1 space-y-1">
                          {groups.map((group) => (
                            <Link
                              key={group.id}
                              href={group.href || `#${group.id}`}
                              className="block px-4 py-2 text-sm text-neutral-600 dark:text-neutral-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg"
                            >
                              {group.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Activity Accordion */}
            <div>
              <button
                onClick={() => setMobileActivityOpen(!mobileActivityOpen)}
                className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
              >
                <span className="flex items-center gap-3">
                  <Calendar className="w-5 h-5" />
                  {t.nav.activity}
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileActivityOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileActivityOpen && (
                <div className="ml-4 mt-2 space-y-1">
                  {menuData.activity.map((item) => (
                    <a
                      key={item.id}
                      href={`#activity-${item.id}`}
                      className="block px-4 py-2 text-sm text-neutral-600 dark:text-neutral-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg"
                    >
                      {language === 'en' ? item.nameEn : item.nameId}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Media Accordion */}
            <div>
              <button
                onClick={() => setMobileMediaOpen(!mobileMediaOpen)}
                className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
              >
                <span className="flex items-center gap-3">
                  <Image className="w-5 h-5" />
                  {t.nav.media}
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileMediaOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileMediaOpen && (
                <div className="ml-4 mt-2 space-y-1">
                  {menuData.media.map((item) => (
                    <a
                      key={item.id}
                      href={`#media-${item.id}`}
                      className="block px-4 py-2 text-sm text-neutral-600 dark:text-neutral-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg"
                    >
                      {language === 'en' ? item.nameEn : item.nameId}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Dashboard Link */}
            {isLoggedIn && (
              <a href="#dashboard" className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors">
                <LayoutDashboard className="w-5 h-5" />
                {t.nav.dashboard}
              </a>
            )}

            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              <span>{theme === 'light' ? (language === 'en' ? 'Dark Mode' : 'Mode Gelap') : (language === 'en' ? 'Light Mode' : 'Mode Terang')}</span>
            </button>

            {/* Language Toggle Mobile */}
            <button
              onClick={toggleLanguage}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
            >
              <Globe className="w-5 h-5" />
              <span>Language: <span className="font-semibold">{language === 'en' ? 'English' : 'Indonesia'}</span></span>
            </button>

            <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all duration-200">
              <LogIn className="w-5 h-5" />
              {t.nav.login}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
