import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { catalog } from '@/config/catalog';

const hydraulicCategory = catalog.find((item) => item.division === 'Hydraulic');

export const metadata: Metadata = {
  title: 'Hydraulic Division — Hydraulic Fittings & Valves | Nexa Flow Engineering',
  description:
    'Hydraulic fittings and valves — Hydraulic Division stock for high-pressure systems, with EN 10204 3.1 MTR traceability.',
};

export default function HydraulicProductsPage() {
  if (!hydraulicCategory) {
    return <></>;
  }

  return (
    <>
      <Navbar />
      <main>
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">
              Hydraulic Division
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-slate-500 md:text-lg">
              Hydraulic fittings and valves for high-pressure systems.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3">
            {hydraulicCategory.subCategories.map((subCategory) => (
              <ProductCard key={subCategory.id} subCategory={subCategory} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
