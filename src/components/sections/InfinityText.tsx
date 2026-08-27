'use client';

const phrase = 'FROM INSPECTION TO FULL REPLACEMENT';

export default function InfinityText() {
    return (
        <section
            id="infinity-text"
            className="relative w-full bg-[#F2F2F2] py-8 sm:py-10 font-clash overflow-hidden"
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
                    animation: marquee 102s linear infinite;
                }
            `}</style>

            <div className="relative w-full">
                <div className="marquee-track">
                    {/* Duplicamos el bloque de frases dos veces para el loop infinito sin cortes */}
                    {[0, 1].map((block) => (
                        <div key={block} className="flex items-center flex-shrink-0">
                            {Array.from({ length: 4 }).map((_, i) => (
                                <span
                                    key={i}
                                    className="flex items-center flex-shrink-0 font-extrabold text-6xl sm:text-8xl lg:text-9xl leading-none tracking-tight whitespace-nowrap px-6 sm:px-10 text-[#1E4F91]"
                                >
                  {phrase}
                </span>
                            ))}
                        </div>
                    ))}
                </div>

                {/* ── OVERLAY: fade fijo pegado al borde derecho ── */}
                <div
                    className="absolute inset-y-0 right-0 w-16 sm:w-32 lg:w-48 z-10 pointer-events-none"
                    style={{
                        background: 'linear-gradient(270deg, #F2F2F2 0%, rgba(242,242,242,0) 100%)',
                    }}
                />
            </div>
        </section>
    );
}