"use client";
import Image from "next/image";
import HeroCarousel from "@/components/HeroCarousel";


/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Container from "@/components/Container";
import { Badge, SectionTitle } from "@/components/ui";

const BRAND = {
  name: "OUTRO",
  tagline: "BOX • STRENGTH • ICE BATH",
  instagram: "https://www.instagram.com/outro.mx/",
};

const WHATSAPP_NUMBER = "52XXXXXXXXXX"; // <-- pon el número real cuando lo tengas
const WHATSAPP_TEXT = encodeURIComponent(
  "Hola OUTRO 🥊❄️ Vengo de Instagram y me gustaría agendar una clase. Mi objetivo es ______."
);
const WA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;

const nav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Programas", href: "#programas" },
  { label: "Horarios", href: "#horarios" },
  { label: "Precios", href: "#precios" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
];

const programs = [
  { name: "Box", tag: "Técnica + rounds", bullets: ["Guardia y desplazamientos", "Golpes + defensa", "Rounds estructurados"] },
  { name: "Strength", tag: "Fuerza funcional", bullets: ["Core + estabilidad", "Fuerza para rendimiento", "Prevención de lesiones"] },
  { name: "Conditioning", tag: "Cardio", bullets: ["Intervals", "Trabajo por rounds", "Acondicionamiento completo"] },
  { name: "Ice Bath", tag: "Recovery ❄️", bullets: ["Recuperación", "Disciplina mental", "Rendimiento"] },
];

const schedule = [
  { day: "Lunes a Viernes", times: ["7:00", "8:00", "18:00", "19:00", "20:00"] },
];

const pricing = [
  { name: "Starter", price: "$___", freq: "/mes", highlight: false, bullets: ["2 clases por semana", "Ruta recomendada", "Evaluación inicial"] },
  { name: "Unlimited", price: "$___", freq: "/mes", highlight: true, bullets: ["Clases ilimitadas", "Box + Strength + Ice Bath", "Seguimiento"] },
  { name: "Personal", price: "$___", freq: "/sesión", highlight: false, bullets: ["Plan 1:1", "Técnica personalizada", "Horarios flexibles"] },
];

export default function Home() {
  return (
    <main className="relative">
      {/* Glow background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[rgb(var(--outro-accent))]/10 blur-3xl" />
        <div className="absolute top-[520px] left-10 h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0F14]/80 backdrop-blur">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <Link href="#inicio" className="flex items-center gap-3">
  <Image
    src="/outro.jpg"
    alt="OUTRO Boxing Studio"
    width={140}
    height={40}
    priority
    className="h-8 w-auto object-contain"
  />
</Link>

            <nav className="hidden items-center gap-6 md:flex">
              {nav.map((i) => (
                <Link key={i.href} href={i.href} className="text-sm text-white/70 hover:text-white">
                  {i.label}
                </Link>
              ))}
              <Link href={BRAND.instagram} target="_blank" className="text-sm text-white/70 hover:text-white">
                Instagram
              </Link>
            </nav>

            <Link
              href={WA_URL}
              target="_blank"
              className="inline-flex items-center justify-center rounded-xl bg-[rgb(var(--outro-accent))] px-4 py-2 text-sm font-semibold text-black hover:opacity-90 shadow-[0_0_40px_rgba(var(--outro-accent),0.18)]"
            >
              Agenda tu clase
            </Link>
          </div>

          {/* Mobile nav */}
          <div className="md:hidden pb-3">
            <div className="flex flex-wrap gap-2">
              {nav.map((i) => (
                <Link key={i.href} href={i.href} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                  {i.label}
                </Link>
              ))}
              <Link href={BRAND.instagram} target="_blank" className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                Instagram
              </Link>
            </div>
          </div>
        </Container>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative py-14 sm:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge>BOX</Badge>
                <Badge>STRENGTH</Badge>
                <Badge>ICE BATH</Badge>
              </div>

             <div className="mt-6">
  <Image
    src="/outro.jpg"
    alt="OUTRO Boxing Studio"
    width={320}
    height={100}
    priority
    className="w-[240px] sm:w-[320px] h-auto object-contain"
  />

  <p className="mt-4 text-sm sm:text-base text-white/70">
  {BRAND.tagline}
</p>
</div>

              <p className="mt-4 max-w-xl text-white/70">
                Entrena box y fuerza con estructura y acelera tu recuperación con ice bath. Comunidad, disciplina y progreso real.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href={WA_URL} target="_blank" className="inline-flex items-center justify-center rounded-xl bg-[rgb(var(--outro-accent))] px-5 py-3 text-sm font-semibold text-black hover:opacity-90">
                  Agenda tu clase
                </Link>
                <Link href="#programas" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
                  Ver programas
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[rgb(var(--outro-accent))]/15 to-white/5 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <HeroCarousel
  images={[
    { src: "/uno.jpg", alt: "OUTRO entrenamiento" },
    { src: "/dos.jpg", alt: "OUTRO boxing" },
    { src: "/tres.jpg", alt: "OUTRO strength" },
    { src: "/cuatro.jpg", alt: "OUTRO ice bath" },
  ]}
/>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Programas */}
      <section id="programas" className="py-14 border-t border-white/10">
        <Container>
          <SectionTitle eyebrow="PROGRAMAS" title="Elige tu ruta de entrenamiento" subtitle="Box, fuerza y recovery. Te recomendamos según tu objetivo." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {programs.map((p) => (
              <div key={p.name} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <p className="mt-1 text-sm text-[rgb(var(--outro-accent))] font-semibold">{p.tag}</p>
                  </div>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black/30 ring-1 ring-white/10">
                    🥊
                  </span>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-white/75">
                  {p.bullets.map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="mt-[2px] h-4 w-4 rounded-full bg-[rgb(var(--outro-accent))]/20 ring-1 ring-[rgb(var(--outro-accent))]/30" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Link href={WA_URL} target="_blank" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10">
                    Quiero una recomendación
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Horarios */}
      <section id="horarios" className="py-14 border-t border-white/10">
        <Container>
          <SectionTitle eyebrow="HORARIOS" title="Encuentra el horario que se adapta a ti" subtitle="Cámbialos según operación real de OUTRO." />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {schedule.map((s) => (
              <div key={s.day} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-base font-semibold">{s.day}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.times.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[rgb(var(--outro-accent))]/15 to-white/5 p-6">
              <h3 className="text-base font-semibold">¿Primera vez?</h3>
              <p className="mt-2 text-sm text-white/75">Agenda una clase de prueba y te guiamos desde lo básico.</p>
              <Link href={WA_URL} target="_blank" className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-[rgb(var(--outro-accent))] px-4 py-3 text-sm font-semibold text-black hover:opacity-90">
                Agendar por WhatsApp
              </Link>
              <p className="mt-3 text-xs text-white/60">Trae agua, toalla y ropa cómoda.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Precios */}
      <section id="precios" className="py-14 border-t border-white/10">
        <Container>
          <SectionTitle eyebrow="PRECIOS" title="Planes simples, resultados reales" subtitle="Deja precios en blanco y ajústalos después." />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {pricing.map((p) => (
              <div
                key={p.name}
                className={[
                  "rounded-2xl border p-6",
                  p.highlight ? "border-[rgb(var(--outro-accent))]/40 bg-[rgb(var(--outro-accent))]/10" : "border-white/10 bg-white/5",
                ].join(" ")}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                  </div>
                  {p.highlight ? (
                    <span className="rounded-full bg-[rgb(var(--outro-accent))] px-3 py-1 text-xs font-semibold text-black">
                      Popular
                    </span>
                  ) : null}
                </div>

                <div className="mt-5 flex items-end gap-2">
                  <p className="text-4xl font-semibold">{p.price}</p>
                  <p className="pb-1 text-sm text-white/60">{p.freq}</p>
                </div>

                <ul className="mt-5 space-y-2 text-sm text-white/75">
                  {p.bullets.map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="mt-[6px] h-2 w-2 rounded-full bg-[rgb(var(--outro-accent))]" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={WA_URL}
                  target="_blank"
                  className={[
                    "mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold",
                    p.highlight ? "bg-[rgb(var(--outro-accent))] text-black hover:opacity-90" : "border border-white/15 bg-white/5 text-white hover:bg-white/10",
                  ].join(" ")}
                >
                  Inscribirme
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Ubicación */}
      <section id="ubicacion" className="py-14 border-t border-white/10">
        <Container>
          <SectionTitle eyebrow="UBICACIÓN" title="Visítanos" subtitle="Agrega dirección y link real de Google Maps." />
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-base font-semibold">OUTRO •</h3>
              <p className="mt-2 text-sm text-white/70">
                Dirección: _________ <br />
                Referencias: _________
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="https://share.google/o6BPk6Si6JzXj07Wd"
                  target="_blank"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-[rgb(var(--outro-accent))] px-4 py-3 text-sm font-semibold text-black hover:opacity-90"
                >
                  Ver en Google Maps
                </Link>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <InfoPill label="Clases" value="Box + Strength + Ice" />
                <InfoPill label="Nivel" value="Principiante a Pro" />
                <InfoPill label="Ambiente" value="Comunidad" />
                <InfoPill label="Enfoque" value="Técnica + Progreso" />
              </div>
            </div>
<div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
  <div className="aspect-[16/10] w-full">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.9437308492857!2d-101.71222482496488!3d21.154637480526393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bc1663c0dece9%3A0xfbe9497ca99b68d9!2sOutro%20Boxing%20Studio!5e0!3m2!1ses!2sus!4v1767729329132!5m2!1ses!2sus"
      className="h-full w-full"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>

  <div className="border-t border-white/10 p-4 text-xs text-white/60">
    Outro Boxing Studio · Blvd. Campestre 1821, León, Gto.
  </div>
</div>
          </div>
        </Container>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-14 border-t border-white/10">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <SectionTitle eyebrow="CONTACTO" title="Agenda tu clase" subtitle="Dinos tu objetivo y te recomendamos el plan ideal." />

              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  window.open(WA_URL, "_blank");
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Nombre" placeholder="Tu nombre" />
                  <Field label="Teléfono" placeholder="Tu WhatsApp" />
                </div>

                <div>
                  <label className="text-sm text-white/80">Mensaje</label>
                  <textarea
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-[rgb(var(--outro-accent))]/60"
                    placeholder="Ej: Soy principiante, quiero mejorar condición y aprender técnica."
                    rows={4}
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-[rgb(var(--outro-accent))] px-5 py-3 text-sm font-semibold text-black hover:opacity-90"
                >
                  Enviar por WhatsApp
                </button>
              </form>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-[rgb(var(--outro-accent))]/10 p-6">
              <h3 className="text-lg font-semibold">Sigue a OUTRO</h3>
              <p className="mt-2 text-sm text-white/75">
                BOX • STRENGTH • ICE BATH
              </p>
              <Link
                href={BRAND.instagram}
                target="_blank"
                className="mt-5 inline-flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Abrir Instagram
              </Link>

              <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm font-semibold"></p>
                <p className="mt-1 text-sm text-white/70">

                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-white/70">
              <span className="font-semibold text-white">{BRAND.name}</span> © {new Date().getFullYear()}
              <span className="mx-2 text-white/30">•</span>
              {BRAND.tagline}
            </div>
            <div className="flex gap-3 text-sm">
              <Link href={BRAND.instagram} target="_blank" className="text-white/70 hover:text-white">
                @outro.mx
              </Link>
            </div>
          </div>
        </Container>
      </footer>

      {/* WhatsApp floating button */}
      <Link
        href={WA_URL}
        target="_blank"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[rgb(var(--outro-accent))] px-5 py-3 text-sm font-semibold text-black shadow-lg hover:opacity-90"
        aria-label="WhatsApp"
      >
        <span className="text-base">💬</span>
        WhatsApp
      </Link>
    </main>
  );
}

function InfoPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/20 p-4">
      <p className="text-xs text-white/60">{label}</p>
      <p className="mt-1 text-sm font-semibold">{value}</p>
    </div>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="text-sm text-white/80">{label}</label>
      <input
        className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-[rgb(var(--outro-accent))]/60"
        placeholder={placeholder}
      />
    </div>
  );
}
