"use client";

import { Sprout, Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
    const { language } = useLanguage();

    const socialLinks = [
        { icon: Facebook, href: "#", label: "Facebook" },
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Instagram, href: "#", label: "Instagram" },
        { icon: Youtube, href: "#", label: "YouTube" },
    ];

    const quickLinks = [
        { name: language === 'en' ? 'About Us' : 'Tentang Kami', href: '#about' },
        { name: language === 'en' ? 'Community' : 'Komunitas', href: '#community' },
        { name: language === 'en' ? 'Media' : 'Media', href: '#media' },
        { name: language === 'en' ? 'Contact' : 'Kontak', href: '#contact' },
    ];

    const resources = [
        { name: language === 'en' ? 'Best Practices' : 'Praktik Terbaik', href: '#' },
        { name: language === 'en' ? 'Training Materials' : 'Materi Pelatihan', href: '#' },
        { name: language === 'en' ? 'Reports' : 'Laporan', href: '#' },
        { name: language === 'en' ? 'FAQ' : 'FAQ', href: '#' },
    ];

    return (
        <footer className="bg-gradient-to-br from-neutral-900 to-neutral-800 dark:from-black dark:to-neutral-900 text-white">
            <div className="container mx-auto px-6 pt-16 pb-8">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg">
                                <Sprout className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">Smallholder HUB</h3>
                                <p className="text-sm text-emerald-400">Sawit Swadaya</p>
                            </div>
                        </div>
                        <p className="text-sm text-neutral-400 mb-6">
                            {language === 'en'
                                ? 'Empowering smallholder farmers for sustainable palm oil production and better livelihoods.'
                                : 'Memberdayakan petani sawit swadaya untuk produksi kelapa sawit berkelanjutan dan kehidupan yang lebih baik.'}
                        </p>

                        {/* Social Media Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="flex items-center justify-center w-10 h-10 bg-neutral-800 dark:bg-neutral-800 hover:bg-emerald-600 dark:hover:bg-emerald-600 rounded-lg transition-colors duration-300"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">
                            {language === 'en' ? 'Quick Links' : 'Tautan Cepat'}
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-neutral-400 hover:text-emerald-400 transition-colors duration-200"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">
                            {language === 'en' ? 'Resources' : 'Sumber Daya'}
                        </h4>
                        <ul className="space-y-3">
                            {resources.map((resource) => (
                                <li key={resource.name}>
                                    <a
                                        href={resource.href}
                                        className="text-sm text-neutral-400 hover:text-emerald-400 transition-colors duration-200"
                                    >
                                        {resource.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">
                            {language === 'en' ? 'Contact Us' : 'Hubungi Kami'}
                        </h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-sm text-neutral-400">
                                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span>Riau Province, Indonesia</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-neutral-400">
                                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <a href="mailto:info@sawitswadaya.org" className="hover:text-emerald-400 transition-colors">
                                    info@sawitswadaya.org
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-neutral-400">
                                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span>+62 xxx xxxx xxxx</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-neutral-700 dark:border-neutral-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
                        <p>
                            © {new Date().getFullYear()} WRI Indonesia - Sawit Swadaya Program. {language === 'en' ? 'All rights reserved.' : 'Semua hak dilindungi.'}
                        </p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-emerald-400 transition-colors">
                                {language === 'en' ? 'Privacy Policy' : 'Kebijakan Privasi'}
                            </a>
                            <a href="#" className="hover:text-emerald-400 transition-colors">
                                {language === 'en' ? 'Terms of Service' : 'Ketentuan Layanan'}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
