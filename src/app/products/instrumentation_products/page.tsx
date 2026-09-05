import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { catalog } from '@/config/catalog';

const instrumentationCategory = catalog.find((item) => item.division === 'Instrumentation');

export const metadata: Metadata = {
  title: 'Instrumentation Division — Flow Valves & Controls | Nexa Flow Engineering',
  description:
    'Isolation and control valves — Gate, Globe, Ball, Check — Instrumentation Division stock with fire-safe and API-certified options, EN 10204 3.1 MTR traceability.',
};

export default function InstrumentationProductsPage() {
  if (!instrumentationCategory) {
    return <></>;
  }

  return (
    <>
      <Navbar />
      <main>
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">
              Instrumentation Division
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-slate-500 md:text-lg">
              Control and isolation valves for industrial applications — API-certified and fire-safe.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3">
            {instrumentationCategory.subCategories.map((subCategory) => (
              <ProductCard key={subCategory.id} subCategory={subCategory} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
