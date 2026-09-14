'use client';

import { motion } from 'framer-motion';
import { Home as HomeIcon, Phone, Mail, MapPin } from 'lucide-react';

const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

const services = ['Roof Leak Repair', 'Storm Damage', 'Full Replacement', 'General Inspection'];

function FacebookIcon({ size = 16 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.5 9H15V6h-1.5C11.57 6 10 7.57 10 9.5V11H8.5v3H10v6h3v-6h2l.5-3H13V9.5c0-.28.22-.5.5-.5z" />
        </svg>
    );
}

function InstagramIcon({ size = 16 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
    );
}

export default function Footer() {
    const year = new Date().getFullYear();

    const scrollTo = (id: string) => {
        const section = document.querySelector(id);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="relative w-full bg-white font-urbanist overflow-hidden border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
                {/* ══════════════ MOBILE ══════════════ */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                    className="sm:hidden flex flex-col items-center text-center gap-8"
                >
                    {/* Brand */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-14 h-14 rounded-full bg-[#3C90E1] p-2.5 flex items-center justify-center">
                                <img
                                    src="/icon.png"
                                    alt="Advanced Roofing Logo"
                                    className="h-full w-auto object-contain drop-shadow-md"
                                />
                            </div>
                            <span className="font-clash font-bold text-[#0A1E3A] text-2xl leading-none">
                                Advanced Roofing
                            </span>
                        </div>
                        <p className="text-gray-500 text-base leading-relaxed max-w-[300px]">
                            Protecting homes and businesses with honest inspections and quality roofing since 2004.
                        </p>
                        <div className="flex gap-4 mt-1">
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#1871D6] hover:border-[#1871D6]/40 transition-colors"
                            >
                                <FacebookIcon size={20} />
                            </a>
                            <a
                                href="#"
                                aria-label="Instagram"
                                className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#1871D6] hover:border-[#1871D6]/40 transition-colors"
                            >
                                <InstagramIcon size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="w-full h-px bg-gray-100" />

                    {/* Navigation */}
                    <div className="flex flex-col items-center gap-4 w-full">
                        <h4 className="font-clash font-bold text-[#0A1E3A] text-sm uppercase tracking-wide">
                            Navigation
                        </h4>
                        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <button
                                        onClick={() => scrollTo(link.href)}
                                        className="text-gray-500 hover:text-[#1871D6] text-base transition-colors cursor-pointer"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="w-full h-px bg-gray-100" />

                    {/* Services */}
                    <div className="flex flex-col items-center gap-4 w-full">
                        <h4 className="font-clash font-bold text-[#0A1E3A] text-sm uppercase tracking-wide">
                            Services
                        </h4>
                        <ul className="flex flex-col items-center gap-3">
                            {services.map((service) => (
                                <li key={service} className="text-gray-500 text-base">
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="w-full h-px bg-gray-100" />

                    {/* Contact */}
                    <div className="flex flex-col items-center gap-4 w-full">
                        <h4 className="font-clash font-bold text-[#0A1E3A] text-sm uppercase tracking-wide">
                            Contact
                        </h4>
                        <ul className="flex flex-col items-center gap-3">
                            <li>
                                <a
                                    href="tel:8478924878"
                                    className="flex items-center gap-2.5 text-gray-500 hover:text-[#1871D6] text-base transition-colors"
                                >
                                    <Phone size={17} className="flex-shrink-0" />
                                    847-892-4878
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:info@advancedroofingteam.com"
                                    className="flex items-center gap-2.5 text-gray-500 hover:text-[#1871D6] text-base transition-colors"
                                >
                                    <Mail size={17} className="flex-shrink-0" />
                                    info@advancedroofingteam.com
                                </a>
                            </li>
                            <li className="flex items-center gap-2.5 text-gray-500 text-base">
                                <MapPin size={17} className="flex-shrink-0" />
                                Des Plaines, IL
                            </li>
                        </ul>
                    </div>
                </motion.div>

                {/* Divider + CTA final — mobile */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="sm:hidden mt-8 pt-6 border-t border-gray-100 flex flex-col items-center gap-5"
                >
                    <button
                        onClick={() => scrollTo('#contact')}
                        className="w-full max-w-[300px] flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#F3C200] text-black font-urbanist font-bold text-sm hover:brightness-105 transition-all cursor-pointer"
                    >
                        Get Your Free Inspection
                    </button>
                    <p className="text-gray-400 text-xs text-center">
                        © {year} Advanced Roofing. All rights reserved.
                    </p>
                </motion.div>

                {/* ══════════════ TABLET/DESKTOP — código original sin tocar ══════════════ */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                    className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-10"
                >
                    {/* Brand */}
                    <div className="flex flex-col gap-4 lg:col-span-1">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-[#3C90E1] p-1 flex items-center justify-center">
                                <img
                                    src="/icon.png"
                                    alt="Advanced Roofing Logo"
                                    className="h-full w-auto object-contain drop-shadow-md"
                                />
                            </div>
                            <span className="font-clash font-bold text-[#0A1E3A] text-lg leading-none">
                Advanced Roofing
              </span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                            Protecting homes and businesses with honest inspections and quality roofing since 2004.
                        </p>
                        <div className="flex gap-3 mt-1">
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#1871D6] hover:border-[#1871D6]/40 transition-colors"
                            >
                                <FacebookIcon size={16} />
                            </a>
                            <a
                                href="#"
                                aria-label="Instagram"
                                className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#1871D6] hover:border-[#1871D6]/40 transition-colors"
                            >
                                <InstagramIcon size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-clash font-bold text-[#0A1E3A] text-sm uppercase tracking-wide">
                            Navigation
                        </h4>
                        <ul className="flex flex-col gap-2.5">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <button
                                        onClick={() => scrollTo(link.href)}
                                        className="text-gray-500 hover:text-[#1871D6] text-sm transition-colors cursor-pointer"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-clash font-bold text-[#0A1E3A] text-sm uppercase tracking-wide">
                            Services
                        </h4>
                        <ul className="flex flex-col gap-2.5">
                            {services.map((service) => (
                                <li key={service} className="text-gray-500 text-sm">
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-clash font-bold text-[#0A1E3A] text-sm uppercase tracking-wide">
                            Contact
                        </h4>
                        <ul className="flex flex-col gap-3">
                            <li>
                                <a
                                    href="tel:8478924878"
                                    className="flex items-center gap-2.5 text-gray-500 hover:text-[#1871D6] text-sm transition-colors"
                                >
                                    <Phone size={15} className="flex-shrink-0" />
                                    847-892-4878
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:info@advancedroofingteam.com"
                                    className="flex items-center gap-2.5 text-gray-500 hover:text-[#1871D6] text-sm transition-colors"
                                >
                                    <Mail size={15} className="flex-shrink-0" />
                                    info@advancedroofingteam.com
                                </a>
                            </li>
                            <li className="flex items-start gap-2.5 text-gray-500 text-sm">
                                <MapPin size={15} className="flex-shrink-0 mt-0.5" />
                                Des Plaines, IL
                            </li>
                        </ul>
                    </div>
                </motion.div>

                {/* Divider + CTA final — tablet/desktop, sin tocar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hidden sm:flex mt-12 pt-6 border-t border-gray-100 flex-col sm:flex-row items-center justify-between gap-4"
                >
                    <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
                        © {year} Advanced Roofing. All rights reserved.
                    </p>

                    <button
                        onClick={() => scrollTo('#contact')}
                        className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#F3C200] text-black font-urbanist font-bold text-xs sm:text-sm hover:brightness-105 transition-all cursor-pointer"
                    >
                        Get Your Free Inspection
                    </button>
                </motion.div>
            </div>
        </footer>
    );
}