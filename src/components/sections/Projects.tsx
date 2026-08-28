'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
    {
        image: '/projects/project-1.png',
        title: 'RESIDENTIAL ROOFING.\nBUILT TO LAST.',
        description:
            'Quality roofing solutions designed to keep your home secure, durable, and ready for every season.',
    },
    {
        image: '/projects/project-2.png',
        title: 'COMMERCIAL ROOFING.\nBUILT TO PERFORM.',
        description:
            'Reliable commercial roofing solutions designed for long-term performance, durability, and the needs of your property.',

    },
];

export default function Projects() {
    const [index, setIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const goToIndex = (newIndex: number, newDirection: number) => {
        if (newIndex === index) return;
        setPrevIndex(index);
        setDirection(newDirection);
        setIndex(newIndex);
    };

    const paginate = (newDirection: number) => {
        const newIndex = (index + newDirection + projects.length) % projects.length;
        goToIndex(newIndex, newDirection);
    };

    const goTo = (i: number) => {
        goToIndex(i, i > index ? 1 : -1);
    };

    // Autoplay: avanza cada 5s, y reinicia el conteo tras cualquier cambio (manual o automático)
    useEffect(() => {
        const timer = setTimeout(() => {
            paginate(1);
        }, 5000);
        return () => clearTimeout(timer);
    }, [index]);

    // clip-path según dirección: flecha izquierda revela de izquierda a derecha,
    // flecha derecha revela de derecha a izquierda
    const clipInitial =
        direction < 0 ? 'inset(0% 100% 0% 0%)' : 'inset(0% 0% 0% 100%)';
    const clipAnimate = 'inset(0% 0% 0% 0%)';

    const renderSlideContent = (slide: (typeof projects)[number]) => (
        <>
            <div className="absolute inset-0 bg-black/25" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <h3 className="font-clash font-extrabold text-white text-xl sm:text-4xl lg:text-6xl tracking-widest whitespace-pre-line">
                    {slide.title}
                </h3>
                <p className="text-white/90 font-urbanist text-xs sm:text-sm max-w-xs sm:max-w-sm mt-3 leading-relaxed">
                    {slide.description}
                </p>
            </div>
        </>
    );

    return (
        <section
            id="projects"
            className="relative w-full bg-white font-urbanist overflow-hidden"
        >
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                className="relative w-full h-[280px] sm:h-[420px] lg:h-[560px] overflow-hidden"
            >
                {/* ── FONDO: slide anterior, estático, queda debajo del barrido ── */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${projects[prevIndex].image}')` }}
                >
                    {renderSlideContent(projects[prevIndex])}
                </div>

                {/* ── FRENTE: slide actual, se revela con clip-path tipo cortina ── */}
                <motion.div
                    key={index}
                    initial={{ clipPath: clipInitial }}
                    animate={{ clipPath: clipAnimate }}
                    transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${projects[index].image}')` }}
                >
                    {renderSlideContent(projects[index])}
                </motion.div>

                {/* Flecha izquierda */}
                <button
                    onClick={() => paginate(-1)}
                    aria-label="Proyecto anterior"
                    className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white/90 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                    <ChevronLeft size={22} strokeWidth={2} />
                </button>

                {/* Flecha derecha */}
                <button
                    onClick={() => paginate(1)}
                    aria-label="Siguiente proyecto"
                    className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white/90 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                    <ChevronRight size={22} strokeWidth={2} />
                </button>

                {/* Dots */}
                <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
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