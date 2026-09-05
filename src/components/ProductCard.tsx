import { Cylinder } from 'lucide-react';

type Product = {
  id: string;
  name: string;
  description: string;
  specs: string[];
};

type SubCategory = {
  id: string;
  name: string;
  icon: typeof Cylinder;
  description: string;
  products: Product[];
  image?: string;
};

type ProductCardProps = {
  subCategory: SubCategory;
};

export function ProductCard({ subCategory }: ProductCardProps) {
  const Icon = subCategory.icon;
  return (
    <div className="group rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:border-navy hover:shadow-lg">
      <div className="relative h-64 overflow-hidden bg-slate-100">
        {subCategory.image ? (
          <img
            src={`/images/${subCategory.image}`}
            alt={subCategory.name}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-br from-navy-dark via-steel-700 to-steel-400 opacity-90"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'80\' height=\'80\' viewBox=\'0 0 80 80\'%3E%3Cg fill=\'none\' stroke=\'white\' stroke-width=\'0.8\' opacity=\'0.6\'%3E%3Cpath d=\'M0 40h80M40 0v80\'/%3E%3Ccircle cx=\'40\' cy=\'40\' r=\'10\'/%3E%3C/g%3E%3C/svg%3E")',
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Icon className="h-14 w-14 text-white/80" aria-hidden="true" />
            </div>
          </>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold tracking-tight text-navy mb-2">{subCategory.name}</h3>
        <p className="text-sm text-slate-500 leading-relaxed">{subCategory.description}</p>
        <ul className="mt-4 flex flex-wrap justify-center gap-1.5">
          {subCategory.products.map((product) => (
            <li
              key={product.id}
              className="rounded-full bg-navy/20 px-2.5 py-0.5 text-xs font-medium text-navy"
            >
              {product.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
