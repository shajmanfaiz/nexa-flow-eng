import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      className="bg-navy-dark"
      style={{
        backgroundImage:
          'linear-gradient(rgba(11,28,46,0.9), rgba(11,28,46,0.97)), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'80\' height=\'80\' viewBox=\'0 0 80 80\'%3E%3Cg fill=\'none\' stroke=\'%231C3D5F\' stroke-width=\'1\'%3E%3Cpath d=\'M0 40h80M40 0v80\'/%3E%3Ccircle cx=\'40\' cy=\'40\' r=\'12\'/%3E%3C/g%3E%3C/svg%3E")',
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-16 text-center md:py-24">
        {/* <p className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-steel-200 ring-1 ring-inset ring-white/20 md:text-sm"> */}
          {/* <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
          EN 10204 3.1 Certified Stockist
        </p> */}

        <h1 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
          Bridging Global Quality <span className="text-steel-300">Stock.</span>
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
          NexaFlow Engineering Machinery Trading is your trusted partner for comprehensive
          industrial solutions across the GCC and Middle East region.
        </p>

        <div className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
          <Link
            href="/about"
            aria-label="Learn more about Nexa Flow Engineering"
            className={buttonVariants({
              variant: 'outline',
              size: 'lg',
              className: 'w-full border-white bg-white text-navy hover:bg-slate-100 hover:text-navy-dark sm:w-auto',
            })}
          >
            Read More
          </Link>
          <Link
            href="/#contact"
            aria-label="Contact Nexa Flow Engineering"
            className={buttonVariants({
              variant: 'outline',
              size: 'lg',
              className: 'w-full border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white hover:text-navy sm:w-auto',
            })}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
