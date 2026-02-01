"use client";

import Link from "next/link";
import { Menu, X, Sprout, Globe, Users, Image, LayoutDashboard, LogIn, Sun, Moon, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { translations } from "@/lib/translations";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = translations[language];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Mock admin login state

  // Body scroll lock effect
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Clickable */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg">
              <Sprout className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-neutral-900 dark:text-white">Smallholder HUB</h1>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Sawit Swadaya</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            {/* Home Link */}
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-2"
            >
              <Sprout className="w-4 h-4" />
              {t.nav.home}
            </Link>

            {/* Community Link */}
            <Link
              href="/community"
              className="flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-2"
            >
              <Users className="w-4 h-4" />
              {t.nav.community}
            </Link>


            {/* Activity Link */}
            <Link
              href="/activities"
              className="flex items-center gap-1 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-2"
            >
              <Calendar className="w-4 h-4" />
              {t.nav.activity}
            </Link>

            {/* Media Link */}
            <Link
              href="/media"
              className="flex items-center gap-1 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-2"
            >
              <Image className="w-4 h-4" />
              {t.nav.media}
            </Link>

            {/* Dashboard Link */}
            {isLoggedIn && (
              <Link href="/dashboard" className="flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                <LayoutDashboard className="w-4 h-4" />
                {t.nav.dashboard}
              </Link>
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

            <button className="flex items-center gap-2 px-4 xl:px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200">
              <LogIn className="w-4 h-4" />
              {t.nav.login}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-x-0 top-[72px] bottom-0 z-40 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 lg:hidden overflow-y-auto h-[calc(100vh-72px)] animate-in slide-in-from-top-5 duration-200">
            <div className="container mx-auto px-6 py-6 space-y-2 pb-32">
              {/* Home Link */}
              <Link
                href="/"
                className="flex items-center gap-3 px-4 py-3.5 text-neutral-700 dark:text-neutral-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-xl transition-all font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Sprout className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>{t.nav.home}</span>
              </Link>

              {/* Community Link */}
              <Link
                href="/community"
                className="flex items-center gap-3 px-4 py-3.5 text-neutral-700 dark:text-neutral-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-xl transition-all font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Users className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>{t.nav.community}</span>
              </Link>

              {/* Activity Link */}
              <Link
                href="/activities"
                className="flex items-center gap-3 px-4 py-3.5 text-neutral-700 dark:text-neutral-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-xl transition-all font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Calendar className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>{t.nav.activity}</span>
              </Link>

              {/* Media Link */}
              <Link
                href="/media"
                className="flex items-center gap-3 px-4 py-3.5 text-neutral-700 dark:text-neutral-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-xl transition-all font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Image className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>{t.nav.media}</span>
              </Link>

              {/* Dashboard Link */}
              {isLoggedIn && (
                <Link
                  href="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3.5 text-neutral-700 dark:text-neutral-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-xl transition-all font-medium"
                >
                  <LayoutDashboard className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span>{t.nav.dashboard}</span>
                </Link>
              )}

              <div className="my-4 border-t border-neutral-100 dark:border-neutral-800" />

              {/* Theme & Language Toggles */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={toggleTheme}
                  className="flex items-center justify-center gap-2.5 px-4 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800/50 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-xl transition-colors"
                >
                  {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                  <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
                </button>

                <button
                  onClick={toggleLanguage}
                  className="flex items-center justify-center gap-2.5 px-4 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800/50 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-xl transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span>{language.toUpperCase()}</span>
                </button>
              </div>

              {/* Login Button */}
              <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 mt-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-bold rounded-xl shadow-lg shadow-emerald-500/20 active:scale-[0.98] transition-all">
                <LogIn className="w-5 h-5" />
                {t.nav.login}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
