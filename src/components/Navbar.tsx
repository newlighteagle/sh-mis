"use client";

import { Menu, X, Sprout, Globe, Users, Image, LayoutDashboard, LogIn, Sun, Moon, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { translations } from "@/lib/translations";
import { useState } from "react";

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = translations[language];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Mock admin login state

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
            <a href="#community" className="flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              <Users className="w-4 h-4" />
              {t.nav.community}
            </a>
            <a href="#activity" className="flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              <Calendar className="w-4 h-4" />
              {t.nav.activity}
            </a>
            <a href="#media" className="flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              <Image className="w-4 h-4" />
              {t.nav.media}
            </a>
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
          <div className="md:hidden mt-4 pb-4 border-t border-neutral-200 dark:border-neutral-800 pt-4 space-y-3">
            <a href="#community" className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors">
              <Users className="w-5 h-5" />
              {t.nav.community}
            </a>
            <a href="#activity" className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors">
              <Calendar className="w-5 h-5" />
              {t.nav.activity}
            </a>
            <a href="#media" className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors">
              <Image className="w-5 h-5" />
              {t.nav.media}
            </a>
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
