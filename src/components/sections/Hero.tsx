'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, BadgeCheck, ChevronDown } from 'lucide-react';

const navLinks = [
    { label: 'HOME', href: '#hero' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
];

const tags = ['Gutters', 'Shingles', 'Leaks'];

const AVATARS = ['/hero/avatar-1.png', '/hero/avatar-2.png', '/hero/avatar-3.png'];

export default function Hero() {
    const scrollTo = (id: string) => {
        const section = document.querySelector(id);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <style jsx global>{`
                @import url('https://api.fontshare.com/v2/css?f[]=clash-grotesk@700,600,500&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700&display=swap');

                .font-clash {
                    font-family: 'Clash Grotesk', sans-serif !important;
                }
                .font-urbanist {
                    font-family: 'Urbanist', sans-serif !important;
                }
            `}</style>

            <section
                id="hero"
                className="relative w-full h-screen overflow-hidden font-urbanist bg-[#1871D6]"
            >
                {/* ── CAPA 0: FONDO DEGRADADO CIELO (z-0) ── */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: 'linear-gradient(180deg, #1871D6 0%, #3B82F6 45%, #60A5FA 100%)',
                    }}
                />

                {/* ── CAPA 1: TÍTULO — DETRÁS de house.png (z-[5]) ── */}
                <div className="absolute inset-0 z-[5] flex flex-col items-end pt-16 sm:pt-20 lg:pt-10 px-6 sm:px-10 lg:px-16 pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                        className="text-right select-none"
                    >
                        <h1 className="font-clash font-extrabold leading-[0.88] text-white/40 text-6xl sm:text-8xl lg:text-9xl xl:text-[10rem] tracking-[0.02em]">
                            Advanced
                            <br />
                            Roofing
                        </h1>

                        <div className="flex justify-end gap-6 sm:gap-10 mt-4 sm:mt-6">
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-white/70 font-urbanist font-medium text-sm sm:text-base"
                                >
                  {tag}
                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* ── CAPA 2: house.png — imagen a pantalla completa (z-10) ──
             Misma dimensión que la sección siempre, se ajusta con bg-cover. */}
                <div
                    className="absolute inset-0 z-10 bg-cover bg-center pointer-events-none"
                    style={{ backgroundImage: "url('/hero/house.png')" }}
                />

                {/* ── CAPA 3: HEADER — logo real + nav (z-30) ── */}
                <header className="absolute top-0 left-0 right-0 z-30 flex flex-col gap-5 px-6 sm:px-10 lg:px-16 pt-6 sm:pt-8">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-9 h-9 sm:w-10 sm:h-10"
                    >
                        <img
                            src="/icon.png"
                            alt="Advanced Roofing Logo"
                            className="h-full w-auto object-contain drop-shadow-md"
                        />
                    </motion.div>

                    <motion.nav
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="inline-flex items-center gap-1 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm px-2 py-1.5 w-fit"
                    >
                        {navLinks.map((link) => (
                            <button
                                key={link.label}
                                onClick={() => scrollTo(link.href)}
                                className="px-4 py-1.5 rounded-full text-white/90 text-xs sm:text-sm font-urbanist font-semibold hover:bg-white/15 transition-colors"
                            >
                                {link.label}
                            </button>
                        ))}
                    </motion.nav>
                </header>

                {/* ── CAPA 4: CONTENIDO INFERIOR — heading, CTA y badges (z-20) ── */}
                <div className="absolute inset-x-0 bottom-0 z-20 px-6 sm:px-10 lg:px-16 pb-20 sm:pb-24 lg:pb-16">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-6">
                        {/* Heading + subtítulo + CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="max-w-sm sm:max-w-md"
                        >
                            <h2 className="font-clash font-extrabold text-white text-4xl sm:text-5xl lg:text-[2.75rem] leading-[1.08] tracking-tight">
                                Protect your
                                <br />
                                home with a Free
                                <br />
                                Roof Inspection
                            </h2>
                            <p className="text-white/85 text-sm sm:text-base font-urbanist mt-4 leading-relaxed">
                                Get a free inspection to identify
                                <br />
                                potential issues before they become
                                <br />
                                costly repairs.
                            </p>

                            <button
                                onClick={() => scrollTo('#contact')}
                                className="mt-6 flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-[#F3C200] text-black font-urbanist font-bold text-sm sm:text-base shadow-xl hover:brightness-105 transition-all cursor-pointer"
                            >
                                <span>Free Inspection</span>
                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                                    <ArrowRight size={16} strokeWidth={2.5} />
                                </div>
                            </button>
                        </motion.div>

                        {/* Badges: Happy customers + Top Quality */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex items-end gap-3 self-end lg:self-auto"
                        >
                            {/* Happy customers */}
                            <div className="relative rounded-2xl pl-2 pr-4 py-2.5 flex items-center gap-3 bg-black/25 backdrop-blur-md border border-white/15">
                                <div className="flex -space-x-3 relative z-10">
                                    {AVATARS.map((src, i) => (
                                        <div
                                            key={src}
                                            className="relative h-9 w-9 sm:h-11 sm:w-11 overflow-hidden rounded-full border-2 border-white/90 shadow-lg"
                                            style={{ zIndex: AVATARS.length - i }}
                                        >
                                            <Image src={src} alt="Happy customer" fill className="object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <div className="leading-tight">
                                    <p className="text-white font-bold text-sm">100%</p>
                                    <p className="text-white/70 text-[10px]">Happy customers</p>
                                </div>
                                <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#F3C200] flex items-center justify-center">
                                    <BadgeCheck size={12} className="text-black" strokeWidth={2.5} />
                                </div>
                            </div>

                            {/* Top Quality / since 2004 */}
                            <div className="relative rounded-2xl px-4 py-2.5 bg-black/25 backdrop-blur-md border border-white/15 min-w-[110px]">
                                <div className="flex items-center gap-1 text-white/70 text-[10px] mb-1">
                                    <ArrowUpRight size={10} />
                                    <span>Top Quality</span>
                                </div>
                                <p className="text-white/60 text-[10px] leading-tight">
                                    Working with you since
                                </p>
                                <p className="text-white font-clash font-bold text-lg">2004</p>
                                <div className="absolute -bottom-2 -left-2 w-5 h-5 rounded-full bg-[#F3C200] flex items-center justify-center">
                                    <ArrowUpRight size={12} className="text-black" strokeWidth={2.5} />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* ── CAPA 5: FADE hacia la siguiente sección (z-40) ── */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-28 sm:h-32 z-40 pointer-events-none"
                    style={{
                        background:
                            'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 55%, rgba(255,255,255,1) 100%)',
                    }}
                />

                {/* ── CAPA 6: FLECHA de scroll (z-50) ── */}
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-50 text-gray-500/80"
                >
                    <ChevronDown size={26} strokeWidth={2} />
                </motion.div>
            </section>
        </>
    );
}