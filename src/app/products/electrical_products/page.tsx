import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { catalog } from '@/config/catalog';

const electricalCategory = catalog.find((item) => item.division === 'Electrical');

export const metadata: Metadata = {
  title: 'Electrical Division — Motorized Valves & Actuators | Nexa Flow Engineering',
  description:
    'Motorized valves and electrical actuators — Electrical Division stock for pipeline control and automation, with EN 10204 3.1 MTR traceability.',
};

export default function ElectricalProductsPage() {
  if (!electricalCategory) {
    return <></>;
  }

  return (
    <>
      <Navbar />
      <main>
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">
              Electrical Division
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-slate-500 md:text-lg">
              Motorized valves and electrical actuators for pipeline automation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3">
            {electricalCategory.subCategories.map((subCategory) => (
              <ProductCard key={subCategory.id} subCategory={subCategory} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
