'use client';

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const stats = [
    { label: 'Years of experience', value: 20, suffix: '+', index: '01' },
    { label: 'Roofs Completed', value: 16, suffix: 'k', index: '02' },
    { label: 'Third-party roof inspections', value: 100, suffix: '%', index: '03' },
];

const bars = [
    { label: 'Precision & Craftsmanship', value: 100 },
    { label: 'Unresolved Issues', value: 0 },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 1500, bounce: 0 });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        return springValue.on('change', (latest) => {
            if (ref.current) {
                ref.current.textContent = `${Math.round(latest)}${suffix}`;
            }
        });
    }, [springValue, suffix]);

    return <span ref={ref}>0{suffix}</span>;
}

function ProgressBar({ label, value, delay }: { label: string; value: number; delay: number }) {
    return (
        <div>
            <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-urbanist text-sm">{label}</span>
                <span className="text-gray-500 font-urbanist text-sm">{value}%</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-gray-200 overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${value}%` }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.2, delay, ease: [0.25, 1, 0.5, 1] }}
                    className="h-full rounded-full bg-[#1F6AB3]"
                />
            </div>
        </div>
    );
}

export default function About() {
    return (
        <section
            id="about"
            className="relative w-full bg-[#F0F0F0] py-20 sm:py-28 font-urbanist overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 items-start">
                    {/* Heading + progress bars */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                        className="w-full lg:w-[280px] flex-shrink-0 flex flex-col justify-between lg:h-[240px]"
                    >
                        <h2 className="font-clash font-normal text-[#1F6AB3] text-4xl sm:text-5xl leading-[1.05] tracking-normal">
                            This is
                            <br />
                            Advanced:
                        </h2>

                        <div className="flex flex-col gap-5 mt-10 lg:mt-0">
                            {bars.map((bar, i) => (
                                <ProgressBar key={bar.label} label={bar.label} value={bar.value} delay={0.2 + i * 0.15} />
                            ))}
                        </div>
                    </motion.div>

                    {/* Stat cards */}
                    <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.8, delay: 0.15 + i * 0.15, ease: [0.25, 1, 0.5, 1] }}
                                className="relative bg-[#E4E4E4] rounded-2xl p-6 sm:p-7 h-[250px] flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-start justify-between">
                                        <p className="text-gray-700 font-urbanist text-lg font-semibold max-w-[120px] leading-snug">
                                            {stat.label}
                                        </p>
                                        <div className="w-8 h-8 rounded-full bg-[#F3C200] flex items-center justify-center flex-shrink-0">
                                            <ArrowUpRight size={16} className="text-black" strokeWidth={2.5} />
                                        </div>
                                    </div>
                                    <div className="w-20 h-px bg-gray-800 mt-2" />
                                </div>

                                <div className="flex items-end justify-between">
                  <span className="font-clash font-extrabold text-[#1F6AB3] text-5xl sm:text-6xl tracking-tight">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </span>
                                    <span className="text-gray-900 font-urbanist text-sm mb-1">{stat.index}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}