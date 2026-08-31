import { Cylinder, GitMerge, CircleDot, Disc } from 'lucide-react';

export type CatalogItem = {
  id: string;
  name: string;
  icon: typeof Cylinder;
  description: string;
  specs: string[];
};

export const catalog: CatalogItem[] = [
  {
    id: 'line-pipes',
    name: 'Seamless Line Pipes',
    icon: Cylinder,
    description: 'High-pressure seamless pipe for oil & gas transmission and process lines.',
    specs: ['API 5L', 'ASTM A106 / A333', 'SCH 40 – SCH 160'],
  },
  {
    id: 'buttweld-fittings',
    name: 'Buttweld Fittings',
    icon: GitMerge,
    description: 'Wrought fittings for directional change, branching and size reduction.',
    specs: ['ASME B16.9', 'Tees', 'Elbows', 'Reducers'],
  },
  {
    id: 'forged-flanges',
    name: 'Forged Flanges',
    icon: Disc,
    description: 'Forged steel flanges for pipeline connections across all pressure classes.',
    specs: ['ASME B16.5', 'Weld Neck / Slip-On / Blind', 'Class 150–2500'],
  },
  {
    id: 'flow-valves',
    name: 'Flow Valves',
    icon: CircleDot,
    description: 'Isolation and control valves with fire-safe and API-certified options.',
    specs: ['Gate', 'Globe', 'Ball', 'Check'],
  },
];
