// import Link from 'next/link';
// import { ArrowRight } from 'lucide-react';
// import { buttonVariants } from '@/components/ui/button';
// import { catalog } from '@/config/catalog';

// const divisionPageMap: Record<string, string> = {
//   Mechanical: 'mechanical_products',
//   Instrumentation: 'instrumentation_products',
//   Electrical: 'electrical_products',
//   Hydraulic: 'hydraulic_products',
// };

// export default function Products() {
//   return (
//     <section id="products" aria-label="Product inventory">
//       {/* Breadcrumb header inspired by nextechgt.ae/our-services */}
//       <div className="bg-navy-dark py-10 text-center md:py-12">
//         <h1 className="text-2xl font-extrabold tracking-tight text-white md:text-4xl">
//           Product & Services
//         </h1>
//         <nav aria-label="Breadcrumb" className="mt-2 text-sm text-slate-300">
//           <ol className="inline-flex items-center gap-1.5">
//             <li>
//               <Link href="/" className="hover:text-white">
//                 Home
//               </Link>
//             </li>
//             <li aria-hidden="true" className="text-slate-500">
//               /
//             </li>
//             <li aria-current="page" className="font-medium text-white">
//               Products
//             </li>
//           </ol>
//         </nav>
//       </div>

//       <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
//         <div className="mb-10 text-center">
//           <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">
//             Ready Stock Inventory
//           </h2>
//           <p className="mx-auto mt-2 max-w-2xl text-slate-500 md:text-lg">
//             Certified material, ex-stock UAE — API 5L, ASTM, ASME with EN 10204 3.1.
//           </p>
//         </div>

//         {/* Grid inspired by nextech: image 370x283 + centered icon overlay + Read More */}
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
//           {catalog.map((item) => {
//             const Icon = item.icon;
//             const divisionSlug = divisionPageMap[item.division];
//             return (
//               <div
//                 key={item.id}
//                 className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
//               >
//                 {/* Image area */}
//                 <div className="relative h-48 overflow-hidden bg-slate-100">
//                   <div
//                     aria-hidden="true"
//                     className="absolute inset-0 bg-gradient-to-br from-navy-dark via-steel-700 to-steel-400 opacity-90"
//                   />
//                   <div
//                     aria-hidden="true"
//                     className="absolute inset-0 opacity-20"
//                     style={{
//                       backgroundImage:
//                         'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'80\' height=\'80\' viewBox=\'0 0 80 80\'%3E%3Cg fill=\'none\' stroke=\'white\' stroke-width=\'0.8\' opacity=\'0.6\'%3E%3Cpath d=\'M0 40h80M40 0v80\'/%3E%3Ccircle cx=\'40\' cy=\'40\' r=\'10\'/%3E%3C/g%3E%3C/svg%3E")',
//                     }}
//                   />
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <Icon className="h-14 w-14 text-white/80" aria-hidden="true" />
//                   </div>
//                   {/* Centered icon badge overlapping image bottom — nextech style */}
//                   <span
//                     aria-hidden="true"
//                     className="absolute -bottom-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-steel-50 text-steel-600 shadow-md"
//                   >
//                     <Icon className="h-6 w-6" />
//                   </span>
//                   {/* Division badge */}
//                   <div
//                     className="absolute top-3 right-3 flex items-center gap-2"
//                   >
//                     <span
//                       className="px-2 py-1 text-xs font-medium rounded bg-navy/20 text-navy"
//                     >
//                       {item.division}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Body */}
//                 <div className="flex flex-1 flex-col px-6 pb-6 pt-10 text-center">
//                   <h3 className="text-base font-bold tracking-tight text-navy">{item.name}</h3>
//                   <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
//                     {item.description}
//                   </p>
//                   <ul
//                     aria-label={`${item.name} specifications`}
//                     className="mt-4 flex flex-wrap justify-center gap-1.5"
//                   >
//                     {item.specs.map((spec) => (
//                       <li
//                         key={spec}
//                         className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700"
//                       >
//                         {spec}
//                       </li>
//                     ))}
//                   </ul>
//                   <Link
//                     href={`/products/${divisionPageMap[item.division]}`}
//                     aria-label={`Read more about ${item.name} — ${item.division} Division`}
//                     className="mx-auto mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-steel-600 transition-colors duration-200 hover:text-navy"
//                   >
//                     Read More
//                     <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
//                   </Link>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <div className="mt-10 text-center">
//           <Link
//             href="/quote"
//             aria-label="Request a quote — request for quotation"
//             className={buttonVariants({ variant: 'accent', size: 'lg' })}
//           >
//             Request a Quote
//             <ArrowRight className="h-4 w-4" aria-hidden="true" />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { catalog } from '@/config/catalog';

const divisionPageMap: Record<string, string> = {
  Mechanical: 'mechanical_products',
  Instrumentation: 'instrumentation_products',
  Electrical: 'electrical_products',
  Hydraulic: 'hydraulic_products',
};

const divisionImageMap: Record<string, string> = {
  Mechanical: 'mechanical_products/nexaflow_mechanical_line_pipes.png',
  Instrumentation: 'instrumentaion_products/nexaflow_instrumentation_instrumenmtation.png',
  Electrical: 'electrical_products/nexaflow_electrical_electrical.png',
  Hydraulic: 'hydraulic_products/nexaflow_hydraulic_hydraulic.jpg',
};

export default function Products() {
  return (
    <section id="products" aria-label="Product inventory">
      {/* Breadcrumb header */}
      <div className="bg-navy-dark py-10 text-center md:py-12">
        <h1 className="text-2xl font-extrabold tracking-tight text-white md:text-4xl">
          Product & Services
        </h1>
        <nav aria-label="Breadcrumb" className="mt-2 text-sm text-slate-300">
          <ol className="inline-flex items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-slate-500">
              /
            </li>
            <li aria-current="page" className="font-medium text-white">
              Products
            </li>
          </ol>
        </nav>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">
            Ready Stock Inventory
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-slate-500 md:text-lg">
            Certified material, ex-stock UAE — API 5L, ASTM, ASME with EN 10204 3.1.
          </p>
        </div>

        {/* Grid featuring 4 main Divisions */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {catalog.map((divisionItem) => {
            const Icon = divisionItem.icon;
            const divisionSlug = divisionPageMap[divisionItem.division];
            const targetHref = `/products/${divisionSlug}`;

            // Aggregate subcategories and primary specs for preview
            const subCategoryNames = divisionItem.subCategories.map((sub) => sub.name);
            const featuredSpecs = divisionItem.subCategories
              .flatMap((sub) => sub.products.flatMap((prod) => prod.specs))
              .slice(0, 4);

            return (
              <div
                key={divisionItem.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Image / Header area */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  {divisionImageMap[divisionItem.division] ? (
                    <img
                      src={`/images/${divisionImageMap[divisionItem.division]}`}
                      alt={`${divisionItem.division} Division`}
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

                  {/* Centered icon badge */}
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-steel-50 text-steel-600 shadow-md"
                  >
                    <Icon className="h-6 w-6" />
                  </span>

                  {/* Division badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-2">
                    <span className="rounded bg-white/20 px-2 py-1 text-xs font-semibold backdrop-blur-sm text-white">
                      {divisionItem.division}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col px-6 pb-6 pt-10 text-center">
                  <h3 className="text-lg font-bold tracking-tight text-navy">
                    <Link href={targetHref} className="hover:underline">
                      {divisionItem.division} Division
                    </Link>
                  </h3>

                  {/* Subcategories list */}
                  <p className="mt-2 text-sm font-medium text-slate-700">
                    {subCategoryNames.join(' • ')}
                  </p>

                  <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-500">
                    High-performance industrial solutions designed for heavy-duty oil & gas and plant operations.
                  </p>

                  {/* Specification tags */}
                  <ul
                    aria-label={`${divisionItem.division} specifications`}
                    className="mt-4 flex flex-wrap justify-center gap-1.5"
                  >
                    {featuredSpecs.map((spec, index) => (
                      <li
                        key={`${divisionItem.id}-spec-${index}`}
                        className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700"
                      >
                        {spec}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={targetHref}
                    aria-label={`Read more about ${divisionItem.division} Division`}
                    className="mx-auto mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-steel-600 transition-colors duration-200 hover:text-navy"
                  >
                    Read More
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/quote"
            aria-label="Request a quote — request for quotation"
            className={buttonVariants({ variant: 'accent', size: 'lg' })}
          >
            Request a Quote
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}