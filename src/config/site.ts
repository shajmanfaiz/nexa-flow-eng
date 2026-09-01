export const site = {
  name: 'Nexa Flow Engineering',
  tagline: 'Industrial Piping, Fittings & Valve Stockist — GCC',
  phone: '+971 52 575 4468',
  phoneHref: 'tel:+971525754468',
  whatsapp: '+971 52 575 4468',
  whatsappHref: 'https://wa.me/971525754468',
  email: 'sales@nexafloweng.com',
  rfqEmail: 'sales@nexafloweng.com',
  locations: [
    {
      country: 'United Arab Emirates',
      city: 'Musaffah, Abu Dhabi, UAE',
      // detail: 'Industrial Area 12, Near Steel Yard',
    },
    // {
    //   country: 'Saudi Arabia',
    //   city: 'Dammam, KSA',
    //   detail: '2nd Industrial City, Warehouse Zone',
    // },
  ],
  standards: ['API 5L', 'ASTM A106', 'ASME B16.5', 'ISO 9001:2015', 'EN 10204 3.1'],
};

export type SiteConfig = typeof site;
