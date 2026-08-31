import type { Metadata } from 'next';
import { BadgeCheck, Clock, FileCheck, Mail, MapPin, Phone, Truck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';
import { site } from '@/config/site';

export const metadata: Metadata = {
  title: 'Get a Quote — Request for Quotation | Nexa Flow Engineering',
  description:
    'Request a fast RFQ for API 5L pipes, ASME fittings, flanges and valves. Response in under 4 business hours. Serving UAE, KSA, Oman, Qatar and Kuwait.',
};

const highlights = [
  { icon: Clock, title: 'Fast Turnaround', detail: 'Quotations within 4 business hours.' },
  { icon: FileCheck, title: 'Full Traceability', detail: 'EN 10204 3.1 MTRs with every order.' },
  { icon: Truck, title: 'Ex-Stock GCC', detail: 'Ready inventory in UAE & KSA warehouses.' },
  { icon: BadgeCheck, title: 'Certified Material', detail: 'API, ASTM & ASME compliant stock.' },
];

export default function QuotePage() {
  return (
    <>
      <Navbar />
      <main>
        <section aria-label="Get a quote" className="bg-navy-dark py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Get a Quote
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-slate-300 md:text-lg">
              Send your bill of materials and our sales desk will revert with pricing, lead time and
              MTRs.
            </p>
          </div>
        </section>

        <section aria-label="Quote form" className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            <aside aria-label="Why request from us" className="space-y-6 lg:col-span-2">
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li
                      key={item.title}
                      className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4"
                    >
                      <span
                        aria-hidden="true"
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-steel-50 text-steel-600"
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-navy">{item.title}</span>
                        <span className="mt-0.5 block text-xs leading-relaxed text-slate-500">
                          {item.detail}
                        </span>
                      </span>
                    </li>
                  );
                })}
              </ul>

              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-400">
                  Prefer to talk?
                </h2>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>
                    <a
                      href={site.phoneHref}
                      aria-label={`Call ${site.name} sales desk`}
                      className="flex items-center gap-2 font-medium text-navy transition-colors duration-200 hover:text-steel-700"
                    >
                      <Phone className="h-4 w-4 shrink-0 text-steel-600" aria-hidden="true" />
                      {site.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${site.rfqEmail}`}
                      aria-label={`Email ${site.name} RFQ desk`}
                      className="flex items-center gap-2 font-medium text-navy transition-colors duration-200 hover:text-steel-700"
                    >
                      <Mail className="h-4 w-4 shrink-0 text-steel-600" aria-hidden="true" />
                      {site.rfqEmail}
                    </a>
                  </li>
                </ul>
                <ul aria-label="Stock locations" className="mt-4 space-y-2 border-t border-slate-100 pt-3">
                  {site.locations.map((location) => (
                    <li key={location.city} className="flex items-center gap-2 text-xs text-slate-500">
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-steel-600" aria-hidden="true" />
                      {location.city} — {location.detail}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:col-span-3">
              <QuoteForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
