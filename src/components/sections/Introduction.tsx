'use client';

import { motion } from 'framer-motion';
import { ChevronsDown } from 'lucide-react';

function CurveLine({ side }: { side: 'left' | 'right' }) {
    const flip = side === 'right' ? 'scale-x-[-1]' : '';
    return (
        <svg
            className={`${flip} w-10 h-56 sm:w-14 sm:h-72 lg:w-16 lg:h-80`}
            viewBox="0 0 60 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
        >
            <path
                d="M52 0C14 62 14 104 34 150C14 196 14 238 52 300"
                stroke="url(#curveGradient)"
                strokeWidth="3.5"
                strokeLinecap="round"
            />
            <defs>
                <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="300" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#93C5FD" stopOpacity="0" />
                    <stop offset="15%" stopColor="#93C5FD" stopOpacity="0.9" />
                    <stop offset="85%" stopColor="#93C5FD" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#93C5FD" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export default function Introduction() {
    return (
        <section
            id="introduction"
            className="relative w-full bg-[#FFFFFF] overflow-hidden pt-24 sm:pt-32 lg:pt-40 pb-0 font-urbanist"
        >
            <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
                {/* Heading con líneas curvas decorativas */}
                <div className="flex items-center justify-center gap-3 sm:gap-8 lg:gap-14">
                    <CurveLine side="left" />

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                        className="font-clash font-extrabold text-[#1871D6] text-5xl sm:text-7xl lg:text-8xl xl:text-9xl leading-[1.05] tracking-tight max-w-[280px] sm:max-w-2xl lg:max-w-4xl"
                    >
                        We&apos;ve got you covered
                    </motion.h2>

                    <CurveLine side="right" />
                </div>

                {/* Fila: texto izq / imagen / texto der */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex items-center justify-center gap-5 sm:gap-8 mt-14 sm:mt-20 lg:mt-24"
                >
                    <p className="text-[#1871D6] font-urbanist font-semibold text-base sm:text-lg lg:text-xl text-right leading-snug max-w-[130px] sm:max-w-[160px]">
                        Leak Repair Specialists
                    </p>

                    <div className="w-36 sm:w-44 lg:w-52 h-20 sm:h-24 lg:h-28 rounded-xl overflow-hidden shadow-md flex-shrink-0">
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: "url('/introduction/house_roof.png')" }}
                        />
                    </div>

                    <p className="text-[#1871D6] font-urbanist font-semibold text-base sm:text-lg lg:text-xl text-left leading-snug max-w-[130px] sm:max-w-[160px]">
                        Commercial Roofing Experts
                    </p>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col items-center gap-2 mt-12 sm:mt-16"
                >
          <span className="text-gray-600 text-sm sm:text-base font-urbanist">
            Scroll to see our work
          </span>
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                        className="text-gray-700"
                    >
                        <ChevronsDown size={22} strokeWidth={2} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}