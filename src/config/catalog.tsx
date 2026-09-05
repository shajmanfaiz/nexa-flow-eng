import { Cylinder, GitMerge, CircleDot, Disc, Zap, Cpu, Wrench, Waves } from 'lucide-react';

export type Product = {
  id: string;
  name: string;
  description: string;
  specs: string[];
};

export type SubCategory = {
  id: string;
  name: string;
  icon: typeof Cylinder;
  description: string;
  products: Product[];
  image?: string;
};

export type DivisionCategory = {
  id: string;
  division: 'Mechanical' | 'Instrumentation' | 'Electrical' | 'Hydraulic';
  icon: typeof Cylinder;
  subCategories: SubCategory[];
};

export const catalog: DivisionCategory[] = [
  {
    id: 'mechanical',
    division: 'Mechanical',
    icon: Wrench,
    subCategories: [
      {
        id: 'ball-valves',
        name: 'Ball Valves',
        icon: CircleDot,
        description: 'Floating and Trunnion Mounted Ball Valve, Cast and Forged Design, Class 150# to 2500#, Pneumatic Ball Valve (MOV-ESD-BDV), Stainless steel, 2 & 3 piece split body and Top Entry. Design: ISO 17292 / API 6D / B16.34.',
        image: 'mechanical_products/nexaflow_mechanical_ball.png',
        products: [
          { id: 'ball-floating', name: 'Floating Ball Valve', description: 'Floating design for tight shut-off in low-medium pressure.', specs: ['Class 150-600', 'Cast & Forged', 'ISO 17292'] },
          { id: 'ball-trunnion', name: 'Trunnion Mounted Ball Valve', description: 'Trunnion support for high-pressure large bore service.', specs: ['Class 300-2500', 'API 6D', 'Top Entry'] },
        ],
      },
      {
        id: 'double-block-bleed',
        name: 'Double Block & Bleed Valves',
        icon: GitMerge,
        description: 'Full Bore & Reduced Bore, Design API 6D / API 6A in Principle, Soft Seat / Metal Seated, Operator: Lever / Gear / MOV / ESDV.',
        image: 'mechanical_products/nexaflow_mechanical_doube_block.png',
        products: [
          { id: 'dbb-full', name: 'Full Bore DBB Valve', description: 'Full bore for pigging and uninterrupted flow.', specs: ['API 6D', 'Soft/Metal Seated', 'Lever/Gear'] },
          { id: 'dbb-reduced', name: 'Reduced Bore DBB Valve', description: 'Reduced bore compact design for instrumentation isolation.', specs: ['API 6A', 'MOV/ESDV', '1500-10000 PSI'] },
        ],
      },
      {
        id: 'butterfly-valves',
        name: 'Butterfly Valves',
        icon: Disc,
        description: 'High Performance Butterfly, Resilient Seated Butterfly, PTFE-Lined Butterfly, Wafer, Lug, Eccentric, Flanged Type Valve.',
        image: 'mechanical_products/nexaflow_mechanical_butterfly_valves.png',
        products: [
          { id: 'bf-high', name: 'High Performance Butterfly', description: 'Double offset for critical throttling service.', specs: ['Wafer/Lug', 'PTFE Lined', 'Class 150-300'] },
          { id: 'bf-resilient', name: 'Resilient Seated Butterfly', description: 'Elastomer seated for bubble-tight shutoff.', specs: ['Eccentric', 'Flanged Type', 'NACE'] },
        ],
      },
      {
        id: 'api-gate-globe-check',
        name: 'API Gate, Globe & Check Valves',
        icon: Cylinder,
        description: 'Size ½" to 48", NPT to B1.20, Class 150# to 2500#, Flanged to B16.10, BW to B16.25, SW to B16.11. Design API 600 / BS 1873 / BS 1868 / API 602. Operator HW/GEAR/MOV/ESD.',
        image: 'mechanical_products/nexaflow_mechanical_api_gate.png',
        products: [
          { id: 'gate-api600', name: 'API 600 Gate Valve', description: 'Heavy-duty gate for on-off service.', specs: ['API 600', '½" to 48"', 'Class 150-2500'] },
          { id: 'check-bs1868', name: 'Check Valve', description: 'Non-return valve for flow control.', specs: ['BS 1868', 'Flanged/BW/SW', 'HW/GEAR/MOV'] },
        ],
      },
      {
        id: 'api-6a-valves',
        name: 'API 6A Valves',
        icon: Wrench,
        description: 'Slab Gate Valves, Trunnion Mounted Ball Valves, Check Valves, Expanding Gate Valves, External Sleeve Adjustable Choke, Mud Gate Valves, Needle Adjustable Choke, Positive Choke.',
        image: 'mechanical_products/nexaflow_mechanical_api_6a.png',
        products: [
          { id: '6a-slab', name: 'Slab Gate Valve', description: 'API 6A slab gate for wellhead service.', specs: ['API 6A', '10000-15000 PSI', 'Metal Seated'] },
          { id: '6a-choke', name: 'Adjustable Choke', description: 'Needle and sleeve adjustable choke for flow regulation.', specs: ['External Sleeve', 'Positive Choke', 'Mud Gate'] },
        ],
      },
      {
        id: 'control-valves',
        name: 'Control Valves',
        icon: Cpu,
        description: 'Globe & Ball Type control Valve, Pressure Relief Valve, Safety relief Valve, Solenoid Valve & Limit Switches.',
        image: 'mechanical_products/nexaflow_mechanical_control_valves.png',
        products: [
          { id: 'ctrl-globe', name: 'Globe Control Valve', description: 'Precision throttling for process control.', specs: ['Globe/Ball Type', 'Pneumatic', 'Limit Switch'] },
          { id: 'ctrl-relief', name: 'Pressure Relief Valve', description: 'Over-pressure protection for vessels and lines.', specs: ['Safety Relief', 'Solenoid', 'API 526'] },
        ],
      },
      {
        id: 'casing-tubing',
        name: 'Casing & Tubing',
        icon: Cylinder,
        description: 'Seamless OCTG Tubing and Casing from 2 3/8" up to 20", Welded Casing up to 32".',
        image: 'mechanical_products/nexaflow_mechanical_casing_tubing.png',
        products: [
          { id: 'octg-seamless', name: 'Seamless OCTG Casing', description: 'High-strength seamless casing for downhole.', specs: ['2 3/8" to 20"', 'API 5CT', 'Seamless'] },
          { id: 'casing-welded', name: 'Welded Casing', description: 'Large diameter welded casing for conductor and surface strings.', specs: ['Up to 32"', 'ERW/SAWL', 'API 5CT'] },
        ],
      },
      {
        id: 'line-pipes',
        name: 'Line Pipes',
        icon: Cylinder,
        description: 'Seamless Carbon Steel Line Pipes for Sizes 1/8" up to 24", Electric Resistance Welded (ERW) Line Pipes, Seamless Heat Exchanger Tubes, Spiral and Longitudinal Submerged Arc Welded Line Pipes Size 2" to 120", Seamless Boiler Tubes.',
        image: 'mechanical_products/nexaflow_mechanical_line_pipes.png',
        products: [
          { id: 'pipe-api-5l', name: 'API 5L Grade B Seamless Pipe', description: 'Standard weight line pipe for structural and process lines.', specs: ['API 5L', 'ASTM A106/A333', 'SCH 40-160'] },
          { id: 'pipe-erw', name: 'ERW Line Pipe', description: 'Electric Resistance Welded for cost-effective long distance transport.', specs: ['ERW', 'SAWL 2"–120"', 'Boiler Tubes'] },
        ],
      },
      {
        id: 'drilling-accessories',
        name: 'Drilling & Casing Accessories',
        icon: Wrench,
        description: 'Centralizer, Stop collar, Cement Basket, Float equipment, Reamer Shoe, Cement plug, Well Control and Drilling Equipment, Blowout Preventers (BOPs) both RAM and Annular, API Valves and Chokes, Diverter Spools, Mud Cross, DSAs, Flanges, Hole Openers, Stabilizers, Drilling Jars, Shock Tools, Casing Handling Tools, Fishing Equipment, Elevators and Bails, Mills, Rotary Tables, Kelly Spinners, Shackles, Sheaves, Blocks, Hooks, Drill Lines, Downhole Tubulars (Drill Collars, HWDP, Drill Pipe), Crossover Subs and Pup Joints.',
        image: 'mechanical_products/nexaflow_mechanical_drilling.png',
        products: [
          { id: 'bop-ram', name: 'Blowout Preventer (BOP)', description: 'RAM and Annular BOPs for well control.', specs: ['RAM/Annular', 'API 16A', '3000-15000 PSI'] },
          { id: 'centralizer', name: 'Casing Centralizer', description: 'Bow-spring and rigid centralizers for cementing.', specs: ['Stop Collar', 'Cement Basket', 'Float Equipment'] },
        ],
      },
    ],
  },
  {
    id: 'instrumentation',
    division: 'Instrumentation',
    icon: Cpu,
    subCategories: [
      {
        id: 'flow-valves',
        name: 'Flow Control Valves',
        icon: CircleDot,
        description: 'Isolation and precision control valves with API certifications. Includes Instrumentation Valves, PLC\'s & SCADA systems, Instrumentation Fittings, Well Head Control Panels, Instrumentation Cables, Process Skids, Industrial Gauges, and Instrument Calibration services.',
        image: 'instrumentaion_products/nexaflow_instrumentation_instrumenmtation.png',
        products: [
          {
            id: 'valve-ball-api6d',
            name: 'API 6D Trunnion Ball Valve',
            description: 'Pipeline valve engineered for tight shut-off control.',
            specs: ['API 6D', 'Class 600', 'Fire-Safe API 607'],
          },
          {
            id: 'valve-needle',
            name: 'High Precision Needle Valve',
            description: 'Fine flow calibration valve for instrument lines.',
            specs: ['10,000 PSI', '316 Stainless Steel', 'NPT Connections'],
          },
        ],
      },
      {
        id: 'transmitters',
        name: 'Pressure & Temp Sensors',
        icon: Disc,
        description: 'Field instrumentation for process monitoring and safety feedback. Includes HART protocol precision pressure transmitters with 4-20mA output, ATEX / IECEx Certified devices, and field-mounted process monitoring equipment.',
        image: 'instrumentaion_products/nexaflow_instrumentation_instrumenmtation.png',
        products: [
          {
            id: 'trans-press-smart',
            name: 'Smart Differential Pressure Transmitter',
            description: 'HART protocol precision pressure transmitter.',
            specs: ['HART / Fieldbus', '4-20mA Output', 'ATEX / IECEx Certified'],
          },
        ],
      },
    ],
  },
  {
    id: 'electrical',
    division: 'Electrical',
    icon: Zap,
    subCategories: [
      {
        id: 'cables-glands',
        name: 'Industrial Cables & Glands',
        icon: Cylinder,
        description: 'Armored cabling and explosion-proof terminal connections. Includes LV and HV Power cables, Fiber Optic cables, Cable Management Systems, Fire Resistant cables, PVC & GI conduits, Lighting (Explosion Proof - ATEX), Cable Gland & Lugs, and Fire Pump systems.',
        image: 'electrical_products/nexaflow_electrical_electrical.png',
        products: [
          {
            id: 'cable-armored-mv',
            name: 'Medium Voltage Armored Cable',
            description: 'XLPE insulated copper power cable for heavy distribution.',
            specs: ['IEC 60502-2', '11kV / 33kV', 'SWA Armored'],
          },
          {
            id: 'gland-ex-d',
            name: 'Explosion-Proof Cable Gland',
            description: 'Double compression gland for hazardous environments.',
            specs: ['Ex d / Ex e', 'IP66/68 Rated', 'Nickel-Plated Brass'],
          },
          {
            id: 'cable-fiber',
            name: 'Fiber Optic Cable',
            description: 'High-speed data transmission for industrial automation.',
            specs: ['OS2 / OM3 / OM4', 'Single-mode / Multi-mode', 'Armored / Riser Rating'],
          },
          {
            id: 'conduit-gi',
            name: 'GI Conduit',
            description: 'Galvanized Iron conduit for cable protection.',
            specs: ['ISI Marked', 'Various sizes 20mm–200mm', 'Threaded / Coupling'],
          },
        ],
      },
    ],
  },
  {
    id: 'hydraulic',
    division: 'Hydraulic',
    icon: Waves,
    subCategories: [
      {
        id: 'buttweld-fittings',
        name: 'Hydraulic Butt-Weld Fittings',
        icon: GitMerge,
        description: 'Wrought fittings for high-fluid-pressure direction changes. Includes 90° Long Radius Elbows, Equal and Reducing Tees, Crosses, Caps. Available in ASME B16.9, SCH 40/80/160, ASTM A234 WPB/WPC materials.',
        image: 'hydraulic_products/nexaflow_hydraulic_hydraulic.jpg',
        products: [
          {
            id: 'fitting-elbow-90',
            name: '90 Degree LR Elbow',
            description: 'Long radius elbow for smooth fluid directional transitions.',
            specs: ['ASME B16.9', 'SCH 80 / SCH 160', 'ASTM A234 WPB'],
          },
          {
            id: 'fitting-tee-equal',
            name: 'Equal Tee Connection',
            description: '3-way branch connection fitting for hydraulic distribution lines.',
            specs: ['ASME B16.9', 'Seamless Stainless Steel', '316/316L'],
          },
          {
            id: 'fitting-cross',
            name: 'Reducing Tee',
            description: 'Reducer tee for branch connection with different pipe sizes.',
            specs: ['ASME B16.9', 'SCH 80', 'ASTM A234 WPB'],
          },
          {
            id: 'fitting-cap',
            name: 'Pipe Cap',
            description: 'End cap for closing the end of a pipe or vessel.',
            specs: ['ASME B16.9', 'SCH 40 / SCH 80', 'Carbon Steel'],
          },
        ],
      },
    ],
  },
];
