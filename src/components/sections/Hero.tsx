'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, BadgeCheck, Check, ChevronsDown, TrendingUp } from 'lucide-react';

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
                className="relative w-full h-[105vh] overflow-hidden font-urbanist bg-[#1871D6]"
            >
                {/* ── CAPA 0: FONDO DEGRADADO CIELO (z-0) ── */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: 'linear-gradient(180deg, #1871D6 0%, #3B82F6 45%, #60A5FA 100%)',
                    }}
                />

                {/* ── CAPA 1: TÍTULO — DETRÁS de house.png (z-[5]) ── */}
                <div className="absolute inset-0 z-[5] flex flex-col items-end pt-16 sm:pt-20 lg:pt-15 px-6 sm:px-10 lg:px-30 pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                        className="text-right select-none"
                    >
                        <h1 className="font-clash font-semibold leading-[0.88] text-white/70 text-6xl sm:text-8xl lg:text-9xl xl:text-[11rem] tracking-[0.02em]">
                            <span className="block">Advanced</span>
                            <div className="inline-flex flex-col items-end">
                                <span className="block">Roofing</span>

                                <div className="flex justify-items-start w-full gap-10 ">
                                    {tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-white/70 font-urbanist font-medium text-sm sm:text-base"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </h1>
                    </motion.div>
                </div>

                {/* ── CAPA 2: house.png — imagen a pantalla completa (z-10) ──
             Misma dimensión que la sección siempre, se ajusta con bg-cover. */}
                <div
                    className="absolute inset-0 z-10 bg-cover bg-center pointer-events-none"
                    style={{ backgroundImage: "url('/hero/house_3.png')" }}
                />

                {/* ── CAPA 3: HEADER — logo real + nav (z-30) ── */}
                <header className="absolute top-0 left-0 right-0 z-30 flex flex-col gap-5 px-6 sm:px-10 lg:px-26 pt-6 sm:pt-8">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-12 h-12 sm:w-15 sm:h-15"
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
                        className="inline-flex items-center gap-1 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm px-2 py-1.5 mt-8 w-fit"
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
                <div className="absolute inset-x-0 bottom-0 z-20 px-6 sm:px-10 lg:px-24 pb-20 sm:pb-24 lg:pb-32">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-6">
                        {/* Heading + subtítulo + CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="max-w-sm sm:max-w-md"
                        >
                            <h2 className="font-clash font-semibold text-white text-4xl sm:text-5xl lg:text-[2.95rem] leading-[1.08] tracking-wide">
                                Protect your
                                <br />
                                home with a Free
                                <br />
                                Roof Inspection
                            </h2>
                            <p className="text-white/85 text-sm sm:text-xl font-urbanist mt-4 leading-relaxed">
                                Get a free inspection to identify
                                <br />
                                potential issues before they become
                                <br />
                                costly repairs.
                            </p>

                            <button
                                onClick={() => scrollTo('#contact')}
                                className="mt-6 flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-[#F3C200] text-black font-urbanist font-bold text-sm sm:text-xl shadow-xl hover:brightness-105 transition-all cursor-pointer"
                            >
                                <span>Free Inspection</span>
                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                                    <ArrowRight size={20} strokeWidth={2.5} />
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
                            <div className="relative rounded-full pl-2 pr-5 py-3 flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20">
                                <div className="flex -space-x-4 relative z-10">
                                    {AVATARS.map((src, i) => (
                                        <div
                                            key={src}
                                            className="relative h-12 w-12 sm:h-14 sm:w-14 overflow-hidden rounded-full border-2 border-white/90 shadow-lg"
                                            style={{ zIndex: AVATARS.length - i }}
                                        >
                                            <Image src={src} alt="Happy customer" fill className="object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <div className="leading-tight pr-3">
                                    <p className="text-white font-bold text-3xl sm:text-3xl tracking-tight">100%</p>
                                    <p className="text-white/90 text-[15px] sm:text-[16px] font-medium tracking-wide">Happy customers</p>
                                </div>

                                {/* Badge con Check solido igual al mockup */}
                                <div className="absolute -top-3 right-3 w-9 h-9 rounded-full bg-[#F3C200] flex items-center justify-center shadow-md">
                                    <Check size={18} className="text-gray-900" strokeWidth={4.5} />
                                </div>
                            </div>

                            {/* Top Quality / since 2004 */}
                            <div className="relative rounded-[32px] p-6 bg-white/10 backdrop-blur-xl border border-white/20 w-fit min-w-[200px] flex flex-col items-start gap-4 shadow-2xl">
                                {/* Capsule Badge con icono TrendingUp */}
                                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/10 backdrop-blur-sm">
                                    <TrendingUp size={18} className="text-white" strokeWidth={2.5} />
                                    <span className="text-white font-medium text-[15px] tracking-wide">Top Quality</span>
                                </div>
                                <p className="text-white/90 text-md leading-tight font-normal tracking-wide">
                                    Working with <br /> you since
                                </p>
                                <p className="text-white font-bold text-4xl -mt-2 tracking-wide">
                                    2004
                                </p>
                                <div className="w-10 h-10  rounded-full bg-[#F3C200] flex items-center justify-center shadow-md">
                                    <ArrowUpRight size={20} className="text-black" strokeWidth={3} />
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
                            'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 55%, rgba(245,240,240,1) 100%)',
                    }}
                />

                {/* ── CAPA 6: FLECHA de scroll (z-50) ── */}
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 text-white"
                >
                    <ChevronsDown size={48} strokeWidth={3} />
                </motion.div>
            </section>
        </>
    );
}