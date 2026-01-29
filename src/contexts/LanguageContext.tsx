"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'id';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>('id'); // Default to Indonesian
    const [mounted, setMounted] = useState(false);

    // Load language from localStorage on mount
    useEffect(() => {
        setMounted(true);
        const savedLanguage = localStorage.getItem('language') as Language;
        if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'id')) {
            setLanguageState(savedLanguage);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        if (mounted) {
            localStorage.setItem('language', lang);
        }
    };

    const toggleLanguage = () => {
        const newLang = language === 'en' ? 'id' : 'en';
        setLanguage(newLang);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
