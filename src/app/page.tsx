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
        <section aria-label="Who we are" className="w-full px-4 py-16 md:py-20">
          <div className="mx-auto max-w-4xl text-center">
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
            <div className="mt-6 flex justify-center">
              <Link
                href="/products"
                aria-label="View products"
                className={buttonVariants({ variant: 'outline' })}
              >
                Products
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US? */}
        <section aria-label="Why choose us?" className="mx-auto max-w-6xl px-4 py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl mb-6">
              Why Choose Us?
            </h2>
            <p className="text-base text-slate-600 mb-8">
              Your Trusted Partner for Engineering Solutions
            </p>
            <p className="text-sm leading-relaxed text-slate-600 mb-8">
              <strong className="font-semibold text-navy">NexaFlow Engineering Machinery Trading</strong>,
               based in the UAE, is your trusted partner
              for industrial products, engineering solutions, and technical supplies across the GCC
              and Middle East. We work with trusted international manufacturers and suppliers to
              provide quality products, competitive sourcing, and reliable technical solutions for
              demanding industrial applications. With a strong focus on quality, responsiveness,
              and customer satisfaction, we help our clients find the right products and solutions
              for their operational requirements.
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              From oil & gas and petrochemical facilities to utilities, marine, power, and
              manufacturing industries, NexaFlow Engineering is committed to delivering dependable
              solutions that create long-term value for our customers.
            </p>
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
