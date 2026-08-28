'use client';

const phrase = 'FROM INSPECTION TO FULL REPLACEMENT';

export default function InfinityText() {
    return (
        <section
            id="infinity-text"
            className="relative w-full bg-[#F2F2F2] py-6 sm:py-10 lg:py-10 font-clash overflow-hidden"
        >
            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .marquee-track {
                    display: flex;
                    width: max-content;
                    animation: marquee 142s linear infinite;
                }
            `}</style>

            <div className="relative w-full flex items-center">
                <div className="marquee-track">
                    {/* Duplicamos el bloque de frases dos veces para el loop infinito sin cortes */}
                    {[0, 1].map((block) => (
                        <div key={block} className="flex items-center flex-shrink-0">
                            {Array.from({ length: 4 }).map((_, i) => (
                                <span
                                    key={i}
                                    className="flex items-center flex-shrink-0 font-extrabold text-[80px] sm:text-[130px] lg:text-[180px] xl:text-[250px] leading-none tracking-wide whitespace-nowrap px-8 sm:px-14 lg:px-20 text-[#1F6AB3]"
                                >
                                    {phrase}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>

                {/* ── OVERLAY: fade fijo pegado al borde derecho ── */}
                <div
                    className="absolute inset-y-0 right-0 w-24 sm:w-48 lg:w-200 z-10 pointer-events-none"
                    style={{
                        background: 'linear-gradient(270deg, rgba(242,242,242,0.4) 0%, rgba(242,242,242,0) 100%)',
                    }}
                />
            </div>
        </section>
    );
}