'use client';

import { motion } from 'framer-motion';
import { ChevronsDown } from 'lucide-react';

function CurveLine({ side }: { side: 'left' | 'right' }) {
    const flip = side === 'left' ? 'scale-x-[-1]' : '';

    return (
        <svg
            className={`${flip} w-5 sm:w-8 lg:w-10 h-full max-h-[650px] sm:max-h-[750px] pointer-events-none flex-shrink-0`}
            viewBox="0 0 40 783"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
        >
            <path
                d="M0 783L40 389.085L0 0L25.2941 389.085L0 783Z"
                fill="url(#arrowGradient)"
            />
            <defs>
                <linearGradient id="arrowGradient" x1="20" y1="0" x2="20" y2="783" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#00589E" stopOpacity="0" />
                    <stop offset="20%" stopColor="#00589E" stopOpacity="0.25" />
                    <stop offset="80%" stopColor="#00589E" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#00589E" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export default function Introduction() {
    return (
        <section
            id="introduction"
            className="relative w-full bg-[#EFEFEF] overflow-hidden py-12 sm:py-20 font-urbanist"
        >
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-center">
                {/* ── FLECHA IZQUIERDA ── */}
                <CurveLine side="left" />

                {/* ── CONTENIDO CENTRAL (Enmarcado por las flechas) ── */}
                <div className="flex flex-col items-center text-center px-2 sm:px-8 flex-1">
                    {/* Título Principal */}
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                        className="font-clash font-medium text-[#1F6AB3] text-5xl sm:text-7xl lg:text-8xl xl:text-[110px] leading-[1.0] tracking-tight max-w-4xl"
                    >
                        We&apos;ve got you covered
                    </motion.h2>

                    {/* Fila: texto izq / imagen / texto der */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex items-center justify-center gap-6 sm:gap-10 mt-10 sm:mt-16 lg:mt-20"
                    >
                        <p className="text-[#1F6AB3] font-urbanist font-normal text-base sm:text-xl lg:text-2xl text-right leading-tight max-w-[140px] sm:max-w-[180px]">
                            Leak Repair Specialists
                        </p>

                        <div className="w-36 sm:w-48 lg:w-56 h-20 sm:h-28 lg:h-32 rounded-2xl overflow-hidden shadow-sm flex-shrink-0">
                            <div
                                className="w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: "url('/introduction/house_roof.png')" }}
                            />
                        </div>

                        <p className="text-[#1F6AB3] font-urbanist font-normal text-base sm:text-xl lg:text-2xl text-left leading-tight max-w-[140px] sm:max-w-[180px]">
                            Commercial Roofing Experts
                        </p>
                    </motion.div>

                    {/* Scroll indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col items-center gap-1.5 mt-8 sm:mt-7"
                    >
                        <span className="text-gray-900 text-sm sm:text-2xl font-normal tracking-tight">
                            Scroll to see our work
                        </span>
                        <motion.div
                            animate={{ y: [0, 5, 0] }}
                            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                            className="text-gray-900"
                        >
                            <ChevronsDown size={25} strokeWidth={2.5} />
                        </motion.div>
                    </motion.div>
                </div>

                {/* ── FLECHA DERECHA ── */}
                <CurveLine side="right" />
            </div>
        </section>
    );
}