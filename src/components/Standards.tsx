import { BadgeCheck } from 'lucide-react';
import { site } from '@/config/site';

export default function Standards() {
  return (
    <section id="standards" aria-label="Standards and certifications" className="border-y border-slate-200 bg-white py-8">
      <div className="mx-auto max-w-6xl px-4">
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
          Compliance You Can Trust
        </p>
        <ul
          aria-label="Certification badges"
          className="flex flex-wrap items-center justify-center gap-3 md:flex-row md:justify-center"
        >
          {site.standards.map((standard) => (
            <li
              key={standard}
              className="flex items-center gap-1.5 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-navy"
            >
              <BadgeCheck className="h-4 w-4 text-steel-600" aria-hidden="true" />
              {standard}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
