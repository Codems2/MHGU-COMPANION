// Catálogo central de materiales de MHGU.
// Las builds referencian materiales por su `id`; la app genera la lista de
// farmeo combinando estas fuentes.
//
// NOTA SOBRE LOS DATOS: las tasas y fuentes están basadas en datos conocidos
// de la comunidad (Kiranico / wikis). Algunas tasas pueden variar ligeramente
// según versión; trátalas como orientativas. ¡Contribuciones bienvenidas!
//
// rank: 'LR' (bajo) | 'HR' (alto) | 'G' (rango G)
// sources[].method: 'Talar' | 'Recompensa' | 'Captura' | 'Romper parte' |
//                    'Recolectar' | 'Minar' | 'Soborno/Otro'

export const MATERIALS = {
  // ─── Materiales genéricos / recolección ──────────────────────────────
  'iron-ore': {
    id: 'iron-ore',
    name: 'Mena de hierro',
    nameEn: 'Iron Ore',
    rank: 'LR',
    sources: [
      { method: 'Minar', location: 'Bosque y colinas', notes: 'Vetas de minería (zonas 4, 6, 10).' },
      { method: 'Soborno/Otro', location: 'Mercader', notes: 'Comprable en la tienda en LR.' },
    ],
  },
  'earth-crystal': {
    id: 'earth-crystal',
    name: 'Cristal de tierra',
    nameEn: 'Earth Crystal',
    rank: 'LR',
    sources: [
      { method: 'Minar', location: 'Yermo / Volcán', notes: 'Vetas de minería abundantes.' },
    ],
  },
  'machalite-ore': {
    id: 'machalite-ore',
    name: 'Mena de macalita',
    nameEn: 'Machalite Ore',
    rank: 'HR',
    sources: [
      { method: 'Minar', location: 'Bosque y colinas / Yermo', notes: 'Vetas de minería en HR.' },
    ],
  },
  'carbalite-ore': {
    id: 'carbalite-ore',
    name: 'Mena de carbalita',
    nameEn: 'Carbalite Ore',
    rank: 'HR',
    sources: [
      { method: 'Minar', location: 'Volcán / Cumbre helada', notes: 'Vetas de minería en HR/G.' },
    ],
  },
  'fucium-ore': {
    id: 'fucium-ore',
    name: 'Mena de fucio',
    nameEn: 'Fucium Ore',
    rank: 'G',
    sources: [
      { method: 'Minar', location: 'Volcán (G) / Cumbre helada (G)', notes: 'Vetas de minería en rango G.' },
    ],
  },
  'dragonite-ore': {
    id: 'dragonite-ore',
    name: 'Mena de dragonita',
    nameEn: 'Dragonite Ore',
    rank: 'G',
    sources: [
      { method: 'Minar', location: 'Volcán (G)', notes: 'Vetas de minería de rango G.' },
    ],
  },
  'eltalite-ore': {
    id: 'eltalite-ore',
    name: 'Mena de eltalita',
    nameEn: 'Eltalite Ore',
    rank: 'G',
    sources: [
      { method: 'Minar', location: 'Cumbre helada (G) / Volcán (G)', notes: 'Mena rara de rango G.' },
    ],
  },
  'monster-bone-s': {
    id: 'monster-bone-s',
    name: 'Hueso de monstruo P',
    nameEn: 'Monster Bone S',
    rank: 'LR',
    sources: [
      { method: 'Recolectar', location: 'Yermo / Pantano', notes: 'Montones de huesos.' },
    ],
  },
  'monster-bone-l': {
    id: 'monster-bone-l',
    name: 'Hueso de monstruo G',
    nameEn: 'Monster Bone L',
    rank: 'HR',
    sources: [
      { method: 'Recolectar', location: 'Yermo / Pantano', notes: 'Montones de huesos en HR.' },
    ],
  },
  'monster-bone-plus': {
    id: 'monster-bone-plus',
    name: 'Hueso de monstruo+',
    nameEn: 'Monster Bone+',
    rank: 'HR',
    sources: [
      { method: 'Recolectar', location: 'Yermo / Pantano', notes: 'Montones de huesos (HR/G).' },
      { method: 'Recompensa', location: 'Varias misiones HR', notes: 'Recompensa común.' },
    ],
  },
  'monster-hardbone': {
    id: 'monster-hardbone',
    name: 'Hueso duro de monstruo',
    nameEn: 'Monster Hardbone',
    rank: 'G',
    sources: [
      { method: 'Recolectar', location: 'Yermo / Pantano (G)', notes: 'Montones de huesos en rango G.' },
      { method: 'Recompensa', location: 'Misiones de rango G', notes: 'Recompensa frecuente.' },
    ],
  },
  'ancient-bone': {
    id: 'ancient-bone',
    name: 'Hueso antiguo',
    nameEn: 'Ancient Bone',
    rank: 'HR',
    sources: [
      { method: 'Recolectar', location: 'Desierto / Pantano', notes: 'Montones de huesos.' },
    ],
  },
  'dragonbone-relic': {
    id: 'dragonbone-relic',
    name: 'Reliquia de hueso de dragón',
    nameEn: 'Dragonbone Relic',
    rank: 'G',
    sources: [
      { method: 'Recolectar', location: 'Yermo (G)', notes: 'Montones de huesos de rango G (rara).' },
    ],
  },

  // ─── Zinogre (build de Trueno / GS y LS) ─────────────────────────────
  'zinogre-shell': {
    id: 'zinogre-shell',
    name: 'Caparazón de Zinogre',
    nameEn: 'Zinogre Shell',
    rank: 'HR',
    monster: 'Zinogre',
    sources: [
      { method: 'Talar', monster: 'Zinogre', rate: '32%', notes: 'Talado del cuerpo.' },
      { method: 'Recompensa', monster: 'Zinogre', rate: '25%', notes: 'Recompensa de misión HR.' },
    ],
  },
  'zinogre-claw': {
    id: 'zinogre-claw',
    name: 'Garra de Zinogre',
    nameEn: 'Zinogre Claw',
    rank: 'HR',
    monster: 'Zinogre',
    sources: [
      { method: 'Romper parte', monster: 'Zinogre', part: 'Patas delanteras', rate: '70%', notes: 'Rompe ambas garras.' },
      { method: 'Talar', monster: 'Zinogre', rate: '15%' },
    ],
  },
  'zinogre-electrofur': {
    id: 'zinogre-electrofur',
    name: 'Electropelaje de Zinogre',
    nameEn: 'Zinogre Electrofur',
    rank: 'HR',
    monster: 'Zinogre',
    sources: [
      { method: 'Romper parte', monster: 'Zinogre', part: 'Espalda', rate: '60%', notes: 'Mejor con Zinogre cargado.' },
      { method: 'Talar', monster: 'Zinogre', rate: '20%' },
    ],
  },
  'zinogre-plate': {
    id: 'zinogre-plate',
    name: 'Placa de Zinogre',
    nameEn: 'Zinogre Plate',
    rank: 'HR',
    monster: 'Zinogre',
    rare: true,
    sources: [
      { method: 'Talar', monster: 'Zinogre', rate: '4%', notes: 'Material raro: usa Suerte de saqueador.' },
      { method: 'Captura', monster: 'Zinogre', rate: '8%', notes: 'La captura mejora la tasa.' },
    ],
  },
  'zinogre-hardclaw': {
    id: 'zinogre-hardclaw',
    name: 'Garra dura de Zinogre',
    nameEn: 'Zinogre Hardclaw',
    rank: 'G',
    monster: 'Zinogre',
    sources: [
      { method: 'Romper parte', monster: 'Zinogre', part: 'Patas delanteras (G)', rate: '65%' },
      { method: 'Talar', monster: 'Zinogre', rate: '18%' },
    ],
  },
  'zinogre-skymerald': {
    id: 'zinogre-skymerald',
    name: 'Esmeralda celeste de Zinogre',
    nameEn: 'Zinogre Skymerald',
    rank: 'G',
    monster: 'Zinogre',
    rare: true,
    sources: [
      { method: 'Captura', monster: 'Zinogre', rate: '15%', notes: 'Material raro G: la captura es lo mejor.' },
      { method: 'Talar', monster: 'Zinogre', rate: '6%' },
    ],
  },
  'zinogre-cortex': {
    id: 'zinogre-cortex',
    name: 'Córtex de Zinogre',
    nameEn: 'Zinogre Cortex',
    rank: 'G',
    monster: 'Zinogre',
    sources: [
      { method: 'Talar', monster: 'Zinogre', rate: '30%' },
      { method: 'Recompensa', monster: 'Zinogre', rate: '24%', notes: 'Misiones de rango G.' },
    ],
  },

  // ─── Rathalos / Rathian (builds Raw versátiles) ──────────────────────
  'rathalos-scale-plus': {
    id: 'rathalos-scale-plus',
    name: 'Escama+ de Rathalos',
    nameEn: 'Rathalos Scale+',
    rank: 'HR',
    monster: 'Rathalos',
    sources: [
      { method: 'Talar', monster: 'Rathalos', rate: '35%' },
      { method: 'Recompensa', monster: 'Rathalos', rate: '28%' },
    ],
  },
  'rathalos-carapace': {
    id: 'rathalos-carapace',
    name: 'Caparazón de Rathalos',
    nameEn: 'Rathalos Carapace',
    rank: 'G',
    monster: 'Rathalos',
    sources: [
      { method: 'Talar', monster: 'Rathalos', rate: '30%' },
      { method: 'Romper parte', monster: 'Rathalos', part: 'Espalda/Alas', rate: '40%' },
    ],
  },
  'rathalos-mantle': {
    id: 'rathalos-mantle',
    name: 'Mantón de Rathalos',
    nameEn: 'Rathalos Mantle',
    rank: 'G',
    monster: 'Rathalos',
    rare: true,
    sources: [
      { method: 'Captura', monster: 'Rathalos', rate: '10%', notes: 'Material raro: captura recomendada.' },
      { method: 'Talar', monster: 'Rathalos', rate: '5%' },
    ],
  },
  'rath-medulla': {
    id: 'rath-medulla',
    name: 'Médula de Rath',
    nameEn: 'Rath Medulla',
    rank: 'G',
    monster: 'Rathalos / Rathian',
    rare: true,
    sources: [
      { method: 'Romper parte', monster: 'Rathalos', part: 'Cabeza', rate: '12%' },
      { method: 'Captura', monster: 'Rathalos', rate: '14%' },
    ],
  },

  // ─── Glavenus (build Raw de fuego/filo) ──────────────────────────────
  'glavenus-tail': {
    id: 'glavenus-tail',
    name: 'Cola de Glavenus',
    nameEn: 'Glavenus Tail',
    rank: 'HR',
    monster: 'Glavenus',
    sources: [
      { method: 'Talar', monster: 'Glavenus', part: 'Cola cortada', rate: '60%', notes: 'Corta la cola y tálala.' },
    ],
  },
  'glavenus-hardclaw': {
    id: 'glavenus-hardclaw',
    name: 'Garra dura de Glavenus',
    nameEn: 'Glavenus Hardclaw',
    rank: 'G',
    monster: 'Glavenus',
    sources: [
      { method: 'Romper parte', monster: 'Glavenus', part: 'Patas delanteras', rate: '55%' },
    ],
  },
  'glavenus-tailcase': {
    id: 'glavenus-tailcase',
    name: 'Vaina caudal de Glavenus',
    nameEn: 'Glavenus Tailcase',
    rank: 'G',
    monster: 'Glavenus',
    sources: [
      { method: 'Talar', monster: 'Glavenus', part: 'Cola (G)', rate: '50%' },
    ],
  },
  'glavenus-mantle': {
    id: 'glavenus-mantle',
    name: 'Mantón de Glavenus',
    nameEn: 'Glavenus Mantle',
    rank: 'G',
    monster: 'Glavenus',
    rare: true,
    sources: [
      { method: 'Captura', monster: 'Glavenus', rate: '12%', notes: 'Material raro G.' },
      { method: 'Talar', monster: 'Glavenus', rate: '5%' },
    ],
  },

  // ─── Tigrex (build de Perforación / Ballesta Pesada) ─────────────────
  'tigrex-scale-plus': {
    id: 'tigrex-scale-plus',
    name: 'Escama+ de Tigrex',
    nameEn: 'Tigrex Scale+',
    rank: 'HR',
    monster: 'Tigrex',
    sources: [
      { method: 'Talar', monster: 'Tigrex', rate: '34%' },
      { method: 'Recompensa', monster: 'Tigrex', rate: '26%' },
    ],
  },
  'tigrex-shell': {
    id: 'tigrex-shell',
    name: 'Caparazón de Tigrex',
    nameEn: 'Tigrex Shell',
    rank: 'HR',
    monster: 'Tigrex',
    sources: [
      { method: 'Talar', monster: 'Tigrex', rate: '30%' },
      { method: 'Romper parte', monster: 'Tigrex', part: 'Espalda', rate: '45%' },
    ],
  },
  'tigrex-carapace': {
    id: 'tigrex-carapace',
    name: 'Coraza de Tigrex',
    nameEn: 'Tigrex Carapace',
    rank: 'G',
    monster: 'Tigrex',
    sources: [
      { method: 'Talar', monster: 'Tigrex', rate: '32%' },
      { method: 'Romper parte', monster: 'Tigrex', part: 'Espalda (G)', rate: '40%' },
    ],
  },
  'tigrex-cortex': {
    id: 'tigrex-cortex',
    name: 'Córtex de Tigrex',
    nameEn: 'Tigrex Cortex',
    rank: 'G',
    monster: 'Tigrex',
    sources: [
      { method: 'Talar', monster: 'Tigrex', rate: '28%' },
      { method: 'Recompensa', monster: 'Tigrex', rate: '24%', notes: 'Misiones de rango G.' },
    ],
  },
  'tigrex-hardfang': {
    id: 'tigrex-hardfang',
    name: 'Colmillo duro de Tigrex',
    nameEn: 'Tigrex Hardfang',
    rank: 'G',
    monster: 'Tigrex',
    sources: [
      { method: 'Romper parte', monster: 'Tigrex', part: 'Cabeza (colmillos)', rate: '58%' },
    ],
  },
  'tigrex-mantle': {
    id: 'tigrex-mantle',
    name: 'Mantón de Tigrex',
    nameEn: 'Tigrex Mantle',
    rank: 'G',
    monster: 'Tigrex',
    rare: true,
    sources: [
      { method: 'Captura', monster: 'Tigrex', rate: '12%', notes: 'Material raro G: captura recomendada.' },
      { method: 'Talar', monster: 'Tigrex', rate: '5%' },
    ],
  },

  // ─── Materiales de armadura: Esquina/joya de Hayabusa y comunes ───────
  'kelbi-horn': {
    id: 'kelbi-horn',
    name: 'Cuerno de Kelbi',
    nameEn: 'Kelbi Horn',
    rank: 'LR',
    sources: [
      { method: 'Romper parte', monster: 'Kelbi', part: 'Cuerno', rate: '90%', notes: 'Monstruo pequeño herbívoro.' },
    ],
  },
  'vergil-blade': {
    id: 'vergil-blade',
    name: 'Pluma de halcón',
    nameEn: "Hayabusa Feather (material)",
    rank: 'G',
    sources: [
      { method: 'Soborno/Otro', location: 'Evento / Tienda', notes: 'El amuleto Hayabusa se obtiene vía DLC/eventos.' },
    ],
  },
  'true-armor-sphere': {
    id: 'true-armor-sphere',
    name: 'Esfera de armadura auténtica',
    nameEn: 'True Armor Sphere',
    rank: 'G',
    sources: [
      { method: 'Recompensa', location: 'Misiones de rango G', notes: 'Para subir de nivel armaduras G.' },
      { method: 'Minar', location: 'Vetas de rango G', notes: 'Aparición ocasional.' },
    ],
  },
  'armor-sphere-plus': {
    id: 'armor-sphere-plus',
    name: 'Esfera de armadura+',
    nameEn: 'Armor Sphere+',
    rank: 'HR',
    sources: [
      { method: 'Recompensa', location: 'Misiones HR', notes: 'Para subir de nivel armaduras HR.' },
    ],
  },
}

export const getMaterial = (id) => MATERIALS[id]
