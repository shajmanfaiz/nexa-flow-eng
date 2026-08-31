import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Droplets,
  Factory,
  Flame,
  Handshake,
  Lightbulb,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { buttonVariants } from '@/components/ui/button';
import { site } from '@/config/site';

export const metadata: Metadata = {
  title: 'About Us — Nexa Flow Engineering | Trusted Piping Stockist GCC',
  description:
    'Nexa Flow Engineering bridges global mill quality with GCC stock availability — API 5L pipes, ASME fittings & valves with EN 10204 3.1 traceability for Oil & Gas, Utilities and Power sectors across UAE & GCC.',
};

const values = [
  {
    icon: ShieldCheck,
    title: 'Integrity',
    desc: 'Transparent MTRs, heat-number traceability and honest lead times — no surprises on site.',
  },
  {
    icon: BadgeCheck,
    title: 'Quality',
    desc: 'API 5L, ASTM A106/A333, ASME B16.5/B16.9 — only certified mills with EN 10204 3.1.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    desc: 'Cut-to-size, beveling, hydrotest and expedited GCC logistics for shutdowns and EPC schedules.',
  },
  {
    icon: Handshake,
    title: 'Commitment',
    desc: 'Sharjah + Dammam stock, 4-hour RFQ turnaround — a partner that answers on weekends.',
  },
];

const industries = [
  {
    icon: Flame,
    title: 'Oil & Gas',
    desc: 'Seamless line pipe SCH40–160, high-pressure valves and fittings for upstream, midstream and downstream.',
  },
  {
    icon: Droplets,
    title: 'Water & Utilities',
    desc: 'Flanges and fittings for water transmission, district cooling and municipal infrastructure.',
  },
  {
    icon: Zap,
    title: 'Power & Energy',
    desc: 'A106 Gr.B, alloy steels and flow valves for generation, desalination and energy plants.',
  },
  {
    icon: Factory,
    title: 'EPC & Manufacturing',
    desc: 'Bulk BOM fulfillment for fabricators, skid builders and process plants — single PO, full traceability.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero — inspired by ThirdWave: centered, navy, two CTAs */}
        <section
          aria-label="About hero"
          className="bg-navy-dark"
          style={{
            backgroundImage:
              'linear-gradient(rgba(7,33,76,0.92), rgba(7,33,76,0.98)), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'80\' height=\'80\' viewBox=\'0 0 80 80\'%3E%3Cg fill=\'none\' stroke=\'%2312346A\' stroke-width=\'1\'%3E%3Cpath d=\'M0 40h80M40 0v80\'/%3E%3Ccircle cx=\'40\' cy=\'40\' r=\'12\'/%3E%3C/g%3E%3C/svg%3E")',
          }}
        >
          <div className="mx-auto max-w-6xl px-4 py-14 text-center md:py-20">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-steel-300">
              About Nexa Flow Engineering
            </p>
            <h1 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
              Bridging Global Quality <span className="text-steel-300">with Local Stock.</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
              Your trusted GCC stockist for industrial piping, fittings and valves — global-mill
              quality, stored in Sharjah &amp; Dammam, delivered with full documentation.
            </p>
            <div className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
              <Link
                href="/products"
                aria-label="Explore products"
                className={buttonVariants({ variant: 'accent', size: 'lg', className: 'w-full sm:w-auto' })}
              >
                Explore Inventory
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/quote"
                aria-label="Contact us"
                className={buttonVariants({
                  variant: 'outline',
                  size: 'lg',
                  className: 'w-full border-white bg-white text-navy hover:bg-slate-100 hover:text-navy-dark sm:w-auto',
                })}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Who We Are — two column, text + visual (ThirdWave pattern) */}
        <section aria-label="Who we are" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-steel-600">Who We Are</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-navy md:text-3xl">
                International standards, GCC availability.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
                <strong className="font-semibold text-navy">Nexa Flow Engineering</strong> partners
                with world-leading mills to deliver reliable, high-performance piping solutions
                tailored to the UAE and wider GCC. From shutdown-critical valves to bulk line pipe,
                we focus on traceability, speed and commercial clarity.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
                Every heat is documented — EN 10204 3.1 MTRs, heat-number mapping and dimensional
                reports on request. Ex-stock Sharjah and Dammam means same-week dispatch to Abu
                Dhabi, Dubai, Jubail, Doha, Muscat and Kuwait.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-steel-600" aria-hidden="true" />
                  <span>API 5L Gr.B/X42–X70, ASTM A106/A333, A105/A350 LF2</span>
                </li>
                <li className="flex gap-2">
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-steel-600" aria-hidden="true" />
                  <span>ASME B16.9 fittings &amp; B16.5 flanges Class 150–2500, SCH 40–160</span>
                </li>
                <li className="flex gap-2">
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-steel-600" aria-hidden="true" />
                  <span>Gate, globe, check &amp; ball valves — API 600/6D where required</span>
                </li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/products" className={buttonVariants({ variant: 'accent' })}>
                  View Stock
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href={site.phoneHref}
                  className={buttonVariants({ variant: 'outline' })}
                  aria-label={`Call ${site.phone}`}
                >
                  {site.phone}
                </a>
              </div>
            </div>

            {/* Visual — piping yard placeholder, no heavy image */}
            <div
              aria-hidden="true"
              className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-6 md:p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-steel-50 via-white to-slate-50" />
              <div className="relative">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-steel-700">
                  <Building2 className="h-4 w-4" />
                  Sharjah &amp; Dammam · Ex-stock
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { label: 'Seamless Pipes', spec: 'API 5L / A106' },
                    { label: 'Buttweld Fittings', spec: 'B16.9' },
                    { label: 'Forged Flanges', spec: 'B16.5' },
                    { label: 'Ball Valves', spec: 'API 6D' },
                    { label: 'Gate Valves', spec: 'API 600' },
                    { label: 'Check Valves', spec: 'API 6D' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-lg border border-slate-200 bg-white p-3 text-center shadow-sm"
                    >
                      <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-md bg-steel-50 text-steel-600">
                        <Factory className="h-4 w-4" />
                      </div>
                      <p className="mt-2 text-xs font-semibold leading-tight text-navy">{item.label}</p>
                      <p className="text-[10px] font-medium uppercase tracking-wide text-slate-500">{item.spec}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-lg bg-navy-dark px-4 py-3 text-center text-sm text-white">
                  <span className="font-semibold text-steel-300">EN 10204 3.1</span> MTR with every
                  dispatch · Heat-number traceability
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values — 4 cards (ThirdWave: Integrity, Quality, Innovation, Commitment) */}
        <section
          aria-label="Our core values"
          className="border-y border-slate-200 bg-slate-50 py-14 md:py-16"
        >
          <div className="mx-auto max-w-6xl px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">Our Core Values</h2>
              <p className="mt-2 text-sm text-slate-500 md:text-base">
                The foundation of every meter we ship and every shutdown we support.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-8 text-center transition-all duration-200 hover:shadow-md"
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-steel-50 text-steel-600">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-base font-bold tracking-tight text-navy">{value.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">{value.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industries We Serve — 4 cards */}
        <section aria-label="Industries we serve" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">
              Industries We Serve
            </h2>
            <p className="mt-2 text-sm text-slate-500 md:text-base">
              Supporting critical sectors across the GCC with engineered, documented stock.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-8 text-center transition-all duration-200 hover:border-steel-200 hover:shadow-md"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-dark text-white">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Trusted / Standards strip — adapts ThirdWave Partners */}
        <section
          aria-label="Certified stock"
          className="bg-navy-dark py-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(7,33,76,0.97), rgba(7,33,76,0.97)), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'80\' height=\'80\' viewBox=\'0 0 80 80\'%3E%3Cg fill=\'none\' stroke=\'%2312346A\' stroke-width=\'1\'%3E%3Cpath d=\'M0 40h80M40 0v80\'/%3E%3C/g%3E%3C/svg%3E")',
          }}
        >
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="text-center md:text-left">
                <h2 className="text-lg font-bold text-white md:text-xl">Certified. Traceable. Ready.</h2>
                <p className="mt-1 text-sm text-slate-300">
                  Mill TCs, EN 10204 3.1 and dimensional reports — bundled per heat.
                </p>
              </div>
              <ul
                aria-label="Certification badges"
                className="flex flex-wrap items-center justify-center gap-2"
              >
                {site.standards.map((std) => (
                  <li
                    key={std}
                    className="rounded-md border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-white backdrop-blur"
                  >
                    {std}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA — ThirdWave "Contact us today" */}
        <section
          aria-label="Call to action"
          className="mx-auto max-w-6xl px-4 py-12 md:py-16"
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm md:p-10">
            <h2 className="text-xl font-bold tracking-tight text-navy md:text-2xl">
              Have a BOM to price before your next shipment?
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-slate-500 md:text-base">
              Share your pipe, fitting and valve list. We return a GCC-stock price with lead time and
              MTR availability — typically within 4 business hours (Sun–Thu, GST).
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/quote"
                aria-label="Request a quote"
                className={buttonVariants({ variant: 'accent', size: 'lg', className: 'w-full sm:w-auto' })}
              >
                Request a Quote
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={`mailto:${site.email}`}
                aria-label={`Email ${site.email}`}
                className={buttonVariants({ variant: 'outline', size: 'lg', className: 'w-full sm:w-auto' })}
              >
                {site.email}
              </a>
            </div>
            <p className="mt-4 text-xs text-slate-400">
              Or WhatsApp us at{' '}
              <a href={site.whatsappHref} className="font-semibold text-steel-600 hover:text-navy">
                {site.whatsapp}
              </a>{' '}
              — fast BOM photos accepted.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
