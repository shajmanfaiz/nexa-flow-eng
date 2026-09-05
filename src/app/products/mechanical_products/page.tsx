import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { catalog } from '@/config/catalog';

const mechanicalCategory = catalog.find((item) => item.division === 'Mechanical');

export const metadata: Metadata = {
  title: 'Mechanical Division — Pipes, Fittings & Flanges | Nexa Flow Engineering',
  description:
    'Seamless line pipes, buttweld fittings and forged flanges — Mechanical Division stock available ex-stock UAE with EN 10204 3.1 MTR traceability.',
};

export default function MechanicalProductsPage() {
  if (!mechanicalCategory) {
    return <></>;
  }

  return (
    <>
      <Navbar />
      <main>
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">
              Mechanical Division
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-slate-500 md:text-lg">
              Certified mechanical piping components — API 5L, ASTM, ASME with EN 10204 3.1.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3">
            {mechanicalCategory.subCategories.map((subCategory) => (
              <ProductCard key={subCategory.id} subCategory={subCategory} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
