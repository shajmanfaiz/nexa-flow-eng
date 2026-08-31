import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Products from '@/components/Products';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Products — Pipes, Fittings, Flanges & Valves | Nexa Flow Engineering',
  description:
    'Seamless line pipes (API 5L, ASTM A106/A333), ASME B16.9 buttweld fittings, ASME B16.5 forged flanges and flow valves — ex-stock across the GCC.',
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Products />
      </main>
      <Footer />
    </>
  );
}
