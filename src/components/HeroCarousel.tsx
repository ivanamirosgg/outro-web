"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Props = {
  images: { src: string; alt: string }[];
  autoPlayMs?: number;
};

export default function HeroCarousel({ images, autoPlayMs = 4500 }: Props) {
  const slides = useMemo(() => images.filter(Boolean), [images]);
  const [i, setI] = useState(0);

  const hasMany = slides.length > 1;

  const prev = () => setI((x) => (x - 1 + slides.length) % slides.length);
  const next = () => setI((x) => (x + 1) % slides.length);

  useEffect(() => {
    if (!hasMany) return;
    const t = setInterval(() => setI((x) => (x + 1) % slides.length), autoPlayMs);
    return () => clearInterval(t);
  }, [hasMany, slides.length, autoPlayMs]);

  if (!slides.length) {
    return (
      <div className="aspect-[4/3] w-full flex items-center justify-center bg-black/20 text-center px-6">
        <p className="text-sm text-white/70">Agrega imágenes en /public/hero/</p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Slide */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={slides[i].src}
          alt={slides[i].alt}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 520px"
        />

        {/* Overlay (para look premium) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
      </div>

      {/* Arrows */}
      {hasMany && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/40 px-3 py-2 text-white hover:bg-black/60"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Siguiente"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/40 px-3 py-2 text-white hover:bg-black/60"
          >
            ›
          </button>
        </>
      )}

      {/* Dots */}
      {hasMany && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setI(idx)}
              aria-label={`Ir a la foto ${idx + 1}`}
              className={[
                "h-2.5 w-2.5 rounded-full border border-white/30",
                idx === i ? "bg-[rgb(var(--outro-accent))]" : "bg-white/30",
              ].join(" ")}
            />
          ))}
        </div>
      )}
    </div>
  );
}
