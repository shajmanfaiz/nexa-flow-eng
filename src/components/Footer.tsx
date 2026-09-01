import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { site } from '@/config/site';

export default function Footer() {
  return (
    <footer id="contact" aria-label="Contact and locations" className="bg-navy-dark text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <Link href="/" aria-label={`${site.name} home`} className="flex items-center">
              <Image
                src="/nexa-logo-full.png"
                alt=""
                aria-hidden="true"
                width={260}
                height={91}
                className="h-12 w-auto object-contain md:h-14"
                priority
              />
              {/* <span className="flex flex-col leading-none">
                <span className="text-[20px] font-extrabold tracking-tight leading-none md:text-[22px]">
                  <span className="text-navy">Nexa</span>
                  <span className="text-steel-600">Flow</span>
                </span>
                <span className="text-[11px] font-bold tracking-[0.22em] text-slate-500 uppercase md:text-xs">
                  Engineering
                </span>
              </span> */}
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
             Delivering industrial solutions through Global partnerships & Engineering expertise.
            </p>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row md:flex-col lg:flex-row">
              <a
                href={site.phoneHref}
                aria-label={`Call ${site.name}`}
                className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-md bg-steel-600 px-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-steel-700"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Sales
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message us on WhatsApp"
                className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-md border border-white/20 px-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-steel-300">
              Address
            </h3>
            <ul className="mt-4 space-y-4">
              {site.locations.map((location) => (
                <li key={location.city} className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-steel-400" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-white">{location.city}</p>
                    <p className="text-xs text-slate-400">{location.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-steel-300">
              Get In Touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  aria-label={`Email ${site.name}`}
                  className="flex items-center gap-2 transition-colors duration-200 hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-steel-400" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  aria-label={`Phone ${site.phone}`}
                  className="flex items-center gap-2 transition-colors duration-200 hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-steel-400" aria-hidden="true" />
                  {site.phone}
                </a>
              </li>
            </ul>
            <Link
              href="/quote"
              aria-label="Request a quote — request for quotation"
              className={buttonVariants({ variant: 'accent', size: 'lg', className: 'mt-6 w-full' })}
            >
              Request a Quote
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
