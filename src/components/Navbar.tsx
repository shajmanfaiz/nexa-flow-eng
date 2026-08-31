'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Menu, Phone, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { buttonVariants } from '@/components/ui/button';
import { site } from '@/config/site';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About Us' },
  { href: '/#contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="bg-navy-dark text-slate-300">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 text-xs font-medium md:px-6 md:py-2.5 md:text-sm">
          <div className="flex items-center gap-4 md:gap-6">
            <a
              href={site.phoneHref}
              aria-label={`Call ${site.name} at ${site.phone}`}
              className="flex items-center gap-2 transition-colors duration-200 hover:text-white"
            >
              <Phone className="h-4 w-4 text-steel-400" aria-hidden="true" />
              <span>{site.phone}</span>
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label={`Email ${site.name} at ${site.email}`}
              className="hidden items-center gap-2 transition-colors duration-200 hover:text-white md:flex"
            >
              <Mail className="h-4 w-4 text-steel-400" aria-hidden="true" />
              <span>{site.email}</span>
            </a>
          </div>
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="rounded-md bg-white/10 px-3 py-1 transition-colors duration-200 hover:bg-white/20 hover:text-white"
          >
            WhatsApp · {site.whatsapp}
          </a>
        </div>
      </div>

      <div className="border-b border-slate-200 bg-white/95 backdrop-blur">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-4 md:h-20 md:px-6"
        >
          <Link href="/" aria-label={`${site.name} home`} className="flex items-center gap-3.5">
            <Image
              src="/nexaflow-icon.png"
              alt=""
              aria-hidden="true"
              width={44}
              height={44}
              className="h-11 w-11 object-contain md:h-12 md:w-12"
              priority
            />
            <span className="flex flex-col leading-none">
              <span className="text-[20px] font-extrabold tracking-tight leading-none md:text-[22px]">
                <span className="text-navy">Nexa</span>
                <span className="text-steel-600">Flow</span>
              </span>
              <span className="text-[11px] font-bold tracking-[0.22em] text-slate-500 uppercase md:text-xs">
                Engineering
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] font-medium text-slate-600 transition-colors duration-200 hover:text-navy"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/quote"
              aria-label="Get a quote — request for quotation"
              className={buttonVariants({
                variant: 'accent',
                size: 'lg',
                className: 'hidden h-11 px-6 text-[14px] sm:inline-flex',
              })}
            >
              Get a Quote
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>

        {menuOpen && (
          <div className="border-t border-slate-200 bg-white md:hidden">
            <nav aria-label="Mobile navigation" className="mx-auto flex max-w-6xl flex-col p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="p-3 text-base font-medium text-slate-700 transition-colors duration-200 hover:text-navy"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/quote"
                aria-label="Get a quote — request for quotation"
                className={buttonVariants({ variant: 'accent', size: 'lg', className: 'mt-2 w-full' })}
                onClick={() => setMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
