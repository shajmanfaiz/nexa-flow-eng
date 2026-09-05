import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Building2,
  Handshake,
  Lightbulb,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { buttonVariants } from '@/components/ui/button';
import { site } from '@/config/site';
import { catalog } from '@/config/catalog';

export const metadata: Metadata = {
  title: 'About Us — Nexa Flow Engineering | Trusted Piping Stockist GCC',
  description:
    'Nexa Flow Engineering — UAE-based stockist for Mechanical, Instrumentation, Electrical & Hydraulic divisions. API, ASTM, ASME certified stock with EN 10204 3.1 traceability across GCC.',
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
    desc: 'Only certified mills — API 5L, ASTM A106/A333, ASME B16.5/B16.9 with EN 10204 3.1.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    desc: 'Cut-to-size, beveling, hydrotest and expedited GCC logistics for shutdowns and EPC schedules.',
  },
  {
    icon: Handshake,
    title: 'Commitment',
    desc: 'UAE stock, 4-hour RFQ turnaround — a partner that answers on weekends.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Breadcrumb Hero - matches Products pattern */}
        <section aria-label="About hero" className="bg-navy-dark py-10 text-center md:py-12">
          <h1 className="text-2xl font-extrabold tracking-tight text-white md:text-4xl">About Us</h1>
          <nav aria-label="Breadcrumb" className="mt-2 text-sm text-slate-300">
            <ol className="inline-flex items-center gap-1.5">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden="true" className="text-slate-500">/</li>
              <li aria-current="page" className="font-medium text-white">About</li>
            </ol>
          </nav>
        </section>

        {/* Intro */}
        <section aria-label="Company overview" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-steel-600">Who We Are</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-navy md:text-3xl">
              Connecting Global Quality with Local Expertise
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
              <strong className="font-semibold text-navy">Nexa Flow Engineering</strong> is a UAE-based
              stockist and engineering partner for Mechanical, Instrumentation, Electrical and Hydraulic
              divisions. We partner with world-leading mills to deliver certified, traceable stock for
              Oil & Gas, Marine, Power, Water and Manufacturing across the GCC.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
              Every heat is documented — EN 10204 3.1 MTRs, heat-number mapping and dimensional
              reports on request. Ex-stock Musaffah, Abu Dhabi enables same-week dispatch to Dubai,
              Jubail, Doha, Muscat and Kuwait.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { value: '4', label: 'Specialized Divisions' },
              { value: '9+', label: 'Mechanical Sub-Categories' },
              { value: 'GCC', label: 'UAE Stock & Dispatch' },
              { value: '4H', label: 'RFQ Turnaround' },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-slate-200 bg-white p-6 text-center">
                <div className="text-2xl font-extrabold tracking-tight text-navy md:text-3xl">{s.value}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Divisions - pulled from catalog */}
        <section aria-label="Our divisions" className="border-y border-slate-200 bg-slate-50 py-14 md:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">Our Divisions</h2>
              <p className="mt-2 text-sm text-slate-500 md:text-base">One partner, four specialized divisions — all ex-stock and traceable.</p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {catalog.map((div) => {
                const Icon = div.icon;
                return (
                  <Link
                    key={div.id}
                    href={`/products/${div.id}_products`}
                    className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 text-center transition-all hover:-translate-y-1 hover:shadow-md"
                  >
                    <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-navy-dark text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 text-base font-bold text-navy group-hover:text-steel-600">{div.division} Division</h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">{div.subCategories.length} categories</p>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-500">{div.subCategories.map((s) => s.name).join(' • ')}</p>
                    <span className="mt-4 inline-flex items-center justify-center gap-1 text-sm font-semibold text-steel-600">
                      View products <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Values */}
        <section aria-label="Our core values" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">Our Core Values</h2>
            <p className="mt-2 text-sm text-slate-500 md:text-base">The foundation of every solution we deliver.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-8 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-steel-50 text-steel-600">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-base font-bold tracking-tight text-navy">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Standards & Location */}
        <section aria-label="Standards and location" className="bg-navy-dark py-10">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="text-center md:text-left">
                <h2 className="flex items-center justify-center gap-2 text-lg font-bold text-white md:justify-start md:text-xl">
                  <CheckCircle2 className="h-5 w-5 text-steel-300" /> Certified. Traceable. Ready.
                </h2>
                <p className="mt-1 flex items-center justify-center gap-1.5 text-sm text-slate-300 md:justify-start">
                  <MapPin className="h-4 w-4 text-steel-300" /> {site.locations[0].city} · <span className="font-medium text-white">{site.email}</span>
                </p>
              </div>
              <ul aria-label="Certification badges" className="flex flex-wrap items-center justify-center gap-2">
                {site.standards.map((std) => (
                  <li key={std} className="rounded-md border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-white backdrop-blur">
                    {std}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Presence */}
        <section aria-label="Presence" className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex flex-col items-start justify-between gap-4 rounded-xl border border-slate-200 bg-white p-6 md:flex-row md:items-center">
            <div className="flex gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-steel-50 text-steel-600"><Building2 className="h-5 w-5" /></span>
              <div>
                <h3 className="text-sm font-bold text-navy">Musaffah, Abu Dhabi — UAE Stock</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-500">Single PO, full traceability, heat-number mapping and MTRs bundled per heat. Served via {site.phone} and WhatsApp.</p>
              </div>
            </div>
            <div className="flex w-full gap-3 md:w-auto">
              <Link href="/products" className={buttonVariants({ variant: 'accent' })}>Explore Inventory <ArrowRight className="h-4 w-4" /></Link>
              <a href={site.phoneHref} className={buttonVariants({ variant: 'outline' })}>{site.phone}</a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section aria-label="Call to action" className="mx-auto max-w-6xl px-4 pb-14 md:pb-16">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm md:p-10">
            <h2 className="text-xl font-bold tracking-tight text-navy md:text-2xl">Have a BOM to price?</h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-slate-500 md:text-base">Share your pipe, fitting and valve list. We return a GCC-stock price with lead time and MTR availability — typically within 4 business hours (Sun–Thu, GST).</p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/quote" className={buttonVariants({ variant: 'accent', size: 'lg', className: 'w-full sm:w-auto' })}>Request a Quote <ArrowRight className="h-4 w-4" /></Link>
              <a href={`mailto:${site.email}`} className={buttonVariants({ variant: 'outline', size: 'lg', className: 'w-full sm:w-auto' })}>{site.email}</a>
            </div>
            <p className="mt-4 text-xs text-slate-400">Or WhatsApp <a href={site.whatsappHref} className="font-semibold text-steel-600 hover:text-navy">{site.whatsapp}</a> — BOM photos accepted.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
