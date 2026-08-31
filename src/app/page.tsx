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
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { buttonVariants } from '@/components/ui/button';
import { catalog } from '@/config/catalog';
import { site } from '@/config/site';

const values = [
  {
    icon: ShieldCheck,
    title: 'Integrity',
    desc: 'Building trust through transparency, ethical practices and consistent delivery.',
  },
  {
    icon: BadgeCheck,
    title: 'Quality',
    desc: 'Providing only best-in-class products that meet international standards and local requirements.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    desc: 'Bringing advanced technologies and modern engineering to complex industrial challenges.',
  },
  {
    icon: Handshake,
    title: 'Commitment',
    desc: 'Fostering long-term partnerships through dedicated support and service.',
  },
];

const industries = [
  {
    icon: Flame,
    title: 'Oil & Gas',
    desc: 'Valves, fittings and engineered products for upstream, midstream and downstream applications.',
  },
  {
    icon: Droplets,
    title: 'Water & Utilities',
    desc: 'Solutions for water networks, district cooling and municipal infrastructure projects.',
  },
  {
    icon: Zap,
    title: 'Power & Energy',
    desc: 'Products supporting power generation, transmission and industrial energy systems.',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    desc: 'Reliable components for process industries and general manufacturing facilities.',
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* WHO WE ARE — from combined-image.xlsx */}
        <section aria-label="Who we are" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-steel-600">
                Who We Are
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-navy md:text-3xl">
                International standards, GCC availability.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                Bridging international innovation with local expertise to support utilities, Marine
                &amp; Power sectors.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
                <strong className="font-semibold text-navy">NexaFlow Engineering</strong> partners
                with world-leading manufacturers to deliver reliable, high-performance industrial
                solutions tailored to the demanding environments of the region. From critical
                infrastructure to complex process applications, we focus on quality, safety and
                long-term value for our clients.
              </p>
              <Link
                href="/products"
                aria-label="View products"
                className={buttonVariants({ variant: 'outline', className: 'mt-6' })}
              >
                Products
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

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
                      <p className="mt-2 text-xs font-semibold leading-tight text-navy">
                        {item.label}
                      </p>
                      <p className="text-[10px] font-medium uppercase tracking-wide text-slate-500">
                        {item.spec}
                      </p>
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

        {/* WHAT WE STOCK — keep existing 4-product preview but larger */}
        <section aria-label="Product categories" className="bg-slate-50 py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">
                What We Stock
              </h2>
              <p className="mt-2 text-slate-500 md:text-lg">
                Four core product lines, ready for immediate dispatch.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {catalog.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.id}
                    href="/products"
                    aria-label={`View ${item.name}`}
                    className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:border-steel-200 hover:shadow-md"
                  >
                    <span
                      aria-hidden="true"
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-steel-50 text-steel-600"
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-navy">{item.name}</span>
                      <span className="block truncate text-xs text-slate-500">{item.specs[0]}</span>
                    </span>
                    <ArrowRight
                      className="h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-steel-600"
                      aria-hidden="true"
                    />
                  </Link>
                );
              })}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/products"
                aria-label="View full product inventory"
                className="text-sm font-semibold text-steel-700 transition-colors duration-200 hover:text-navy"
              >
                View full inventory →
              </Link>
            </div>
          </div>
        </section>

        {/* OUR CORE VALUES — centered larger badges from previous fix */}
        <section
          aria-label="Our core values"
          className="border-y border-slate-200 bg-white py-16 md:py-20"
        >
          <div className="mx-auto max-w-6xl px-4">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-steel-600">
                Our Core Values
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-navy md:text-3xl">
                The foundation of every solution we deliver.
              </h2>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-200 hover:shadow-md"
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-steel-50 text-steel-600">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-base font-bold tracking-tight text-navy">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">{value.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* INDUSTRIES WE SERVE — centered larger badges */}
        <section aria-label="Industries we serve" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">
              Industries We Serve
            </h2>
            <p className="mt-2 text-sm text-slate-500 md:text-base">
              Supporting critical sectors across UAE with reliable, engineered solutions.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-200 hover:border-steel-200 hover:shadow-md"
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

        {/* CONTACT TODAY — from image */}
        <section aria-label="Contact today" className="bg-slate-50 py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="rounded-2xl bg-steel-700 px-6 py-10 text-center md:px-10 md:py-12">
              <h2 className="text-xl font-bold text-white md:text-2xl">
                Contact us today and get the right solution for your project.
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-steel-100 md:text-base">
                Share your project requirements and our team will recommend tailored industrial
                solutions that meet your technical and commercial needs.
              </p>
              <Link
                href="/#contact"
                aria-label="Get in touch"
                className={buttonVariants({
                  variant: 'outline',
                  size: 'lg',
                  className: 'mt-6 border-white bg-white text-navy hover:bg-slate-100',
                })}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
