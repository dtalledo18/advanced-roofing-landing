'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
    {
        image: '/projects/project-1.png',
        title: 'COMMERCIAL ROOFING.\nBUILT TO PERFORM.',
        description:
            'Reliable commercial roofing solutions designed for long-term performance, durability, and the needs of your property.',
    },
    {
        image: '/projects/project-2.png',
        title: 'RESIDENTIAL ROOFING.\nBUILT TO LAST.',
        description:
            'Quality roofing solutions designed to keep your home secure, durable, and ready for every season.',
    },
];

export default function Projects() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setIndex((prev) => (prev + newDirection + projects.length) % projects.length);
    };

    const goTo = (i: number) => {
        setDirection(i > index ? 1 : -1);
        setIndex(i);
    };

    return (
        <section
            id="projects"
            className="relative w-full bg-white  font-urbanist overflow-hidden"
        >
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                className="relative w-full h-[280px] sm:h-[420px] lg:h-[560px] overflow-hidden"
            >
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.div
                        key={index}
                        custom={direction}
                        initial={{ opacity: 0, x: direction > 0 ? 80 : -80 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: direction > 0 ? -80 : 80 }}
                        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('${projects[index].image}')` }}
                    >
                        {/* Overlay oscuro sutil para legibilidad del texto */}
                        <div className="absolute inset-0 bg-black/25" />

                        {/* Texto centrado */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                            <h3 className="font-clash font-extrabold text-white text-xl sm:text-4xl lg:text-6xl tracking-widest whitespace-pre-line">
                                {projects[index].title}
                            </h3>
                            <p className="text-white/90 font-urbanist text-xs sm:text-sm max-w-xs sm:max-w-sm mt-3 leading-relaxed">
                                {projects[index].description}
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Flecha izquierda */}
                <button
                    onClick={() => paginate(-1)}
                    aria-label="Proyecto anterior"
                    className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white/90 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                    <ChevronLeft size={22} strokeWidth={2} />
                </button>

                {/* Flecha derecha */}
                <button
                    onClick={() => paginate(1)}
                    aria-label="Siguiente proyecto"
                    className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white/90 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                    <ChevronRight size={22} strokeWidth={2} />
                </button>

                {/* Dots */}
                <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                    {projects.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            aria-label={`Ver proyecto ${i + 1}`}
                            className={`h-1.5 rounded-full transition-all ${
                                i === index ? 'w-6 bg-white' : 'w-1.5 bg-white/50'
                            }`}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}