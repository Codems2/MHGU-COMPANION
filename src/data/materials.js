// Catálogo central de materiales de MHGU.
//
// Cada material tiene:
//   name    -> traducción al español (MHGU no tiene localización oficial en
//              español, así que la traducción es nuestra, lo más natural posible)
//   nameEn  -> nombre REAL en inglés (tal cual aparece en el juego / Kiranico),
//              para que puedas buscarlo en wikis sin ambigüedad
//   rank    -> 'LR' (bajo) | 'HR' (alto) | 'G' (rango G)
//   monster -> monstruo de origen (si aplica)
//   rare    -> material poco común (RNG alto)
//   sources -> dónde y cómo conseguirlo
//
// Las TASAS son orientativas (basadas en datos de la comunidad/Kiranico) y
// pueden variar ligeramente según versión. La PARTE a romper y el método sí
// son fiables y es lo más útil para farmear.

export const MATERIALS = {
  // ─── Recolección / minería / huesos (genéricos) ──────────────────────
  'iron-ore': {
    id: 'iron-ore', name: 'Mena de hierro', nameEn: 'Iron Ore', rank: 'LR',
    sources: [
      { method: 'Minar', location: 'Bosque y colinas, Yermo', rate: '~45%', notes: 'Vetas azules. Comprable en la tienda en LR.' },
    ],
  },
  'earth-crystal': {
    id: 'earth-crystal', name: 'Cristal de tierra', nameEn: 'Earth Crystal', rank: 'LR',
    sources: [{ method: 'Minar', location: 'Yermo, Volcán', rate: '~40%', notes: 'Vetas de minería abundantes.' }],
  },
  'machalite-ore': {
    id: 'machalite-ore', name: 'Mena de macalita', nameEn: 'Machalite Ore', rank: 'HR',
    sources: [{ method: 'Minar', location: 'Bosque y colinas, Yermo', rate: '~30%', notes: 'Vetas azules en HR.' }],
  },
  'carbalite-ore': {
    id: 'carbalite-ore', name: 'Mena de carbalita', nameEn: 'Carbalite Ore', rank: 'HR',
    sources: [{ method: 'Minar', location: 'Volcán, Cumbre helada', rate: '~25%', notes: 'Vetas de HR/G.' }],
  },
  'monster-bone-s': {
    id: 'monster-bone-s', name: 'Hueso de monstruo P', nameEn: 'Monster Bone S', rank: 'LR',
    sources: [{ method: 'Recolectar', location: 'Yermo, Pantano', rate: '~50%', notes: 'Montones de huesos. Comprable en LR.' }],
  },
  'monster-bone-m': {
    id: 'monster-bone-m', name: 'Hueso de monstruo M', nameEn: 'Monster Bone M', rank: 'LR',
    sources: [{ method: 'Recolectar', location: 'Yermo, Pantano', rate: '~35%', notes: 'Montones de huesos.' }],
  },
  'monster-bone-l': {
    id: 'monster-bone-l', name: 'Hueso de monstruo G', nameEn: 'Monster Bone L', rank: 'HR',
    sources: [{ method: 'Recolectar', location: 'Yermo, Pantano', rate: '~30%', notes: 'Montones de huesos en HR.' }],
  },
  'monster-bone-plus': {
    id: 'monster-bone-plus', name: 'Hueso de monstruo+', nameEn: 'Monster Bone+', rank: 'HR',
    sources: [
      { method: 'Recolectar', location: 'Yermo, Pantano', rate: '~25%', notes: 'Montones de huesos (HR/G).' },
      { method: 'Recompensa', location: 'Muchas misiones HR', rate: '~20%', notes: 'Recompensa común.' },
    ],
  },
  'monster-hardbone': {
    id: 'monster-hardbone', name: 'Hueso duro de monstruo', nameEn: 'Monster Hardbone', rank: 'G',
    sources: [
      { method: 'Recolectar', location: 'Yermo, Pantano (G)', rate: '~20%', notes: 'Montones de huesos de rango G.' },
      { method: 'Recompensa', location: 'Misiones de rango G', rate: '~18%' },
    ],
  },
  'armor-sphere': {
    id: 'armor-sphere', name: 'Esfera de armadura', nameEn: 'Armor Sphere', rank: 'LR',
    sources: [{ method: 'Recompensa', location: 'Misiones LR / minería', notes: 'Para subir de nivel armaduras LR.' }],
  },
  'armor-sphere-plus': {
    id: 'armor-sphere-plus', name: 'Esfera de armadura+', nameEn: 'Armor Sphere+', rank: 'HR',
    sources: [{ method: 'Recompensa', location: 'Misiones HR', notes: 'Para subir de nivel armaduras HR.' }],
  },
  'true-armor-sphere': {
    id: 'true-armor-sphere', name: 'Esfera de armadura auténtica', nameEn: 'True Armor Sphere', rank: 'G',
    sources: [
      { method: 'Recompensa', location: 'Misiones de rango G', notes: 'Para maximizar armaduras de rango G.' },
      { method: 'Minar', location: 'Vetas de rango G', notes: 'Aparición ocasional.' },
    ],
  },

  // ─── Zinogre (raio) — usado por GS, LS y HBG ─────────────────────────
  'zinogre-shell': {
    id: 'zinogre-shell', name: 'Caparazón de Zinogre', nameEn: 'Zinogre Shell', rank: 'HR', monster: 'Zinogre',
    sources: [
      { method: 'Talar', part: 'cuerpo', rate: '~34%', notes: 'Talado del cuerpo de Zinogre (HR).' },
      { method: 'Recompensa', rate: '~25%', notes: 'Recompensa de misión HR.' },
    ],
  },
  'zinogre-horn-plus': {
    id: 'zinogre-horn-plus', name: 'Cuerno+ de Zinogre', nameEn: 'Zinogre Horn+', rank: 'HR', monster: 'Zinogre',
    sources: [{ method: 'Romper parte', part: 'cabeza (cuernos)', rate: '~65%', notes: 'Rompe los cuernos de la cabeza.' }],
  },
  'zinogre-electrofur-plus': {
    id: 'zinogre-electrofur-plus', name: 'Electropelaje+ de Zinogre', nameEn: 'Zinogre Electrofur+', rank: 'HR', monster: 'Zinogre',
    sources: [
      { method: 'Romper parte', part: 'espalda', rate: '~55%', notes: 'Mejor con Zinogre "cargado" (aura azul).' },
      { method: 'Talar', rate: '~20%' },
    ],
  },
  'zinogre-plate': {
    id: 'zinogre-plate', name: 'Placa de Zinogre', nameEn: 'Zinogre Plate', rank: 'HR', monster: 'Zinogre', rare: true,
    sources: [
      { method: 'Talar', rate: '~3%', notes: 'Material raro: usa Suerte de saqueador (Carving God).' },
      { method: 'Captura', rate: '~8%', notes: 'La captura mejora la probabilidad.' },
    ],
  },
  'zinogre-carapace': {
    id: 'zinogre-carapace', name: 'Coraza de Zinogre', nameEn: 'Zinogre Carapace', rank: 'G', monster: 'Zinogre',
    sources: [
      { method: 'Talar', part: 'cuerpo (G)', rate: '~32%' },
      { method: 'Recompensa', rate: '~24%', notes: 'Misiones de rango G.' },
    ],
  },
  'zinogre-cortex': {
    id: 'zinogre-cortex', name: 'Córtex de Zinogre', nameEn: 'Zinogre Cortex', rank: 'G', monster: 'Zinogre',
    sources: [
      { method: 'Talar', part: 'cuerpo (G)', rate: '~28%' },
      { method: 'Recompensa', rate: '~22%' },
    ],
  },
  'zinogre-hardhorn': {
    id: 'zinogre-hardhorn', name: 'Cuerno duro de Zinogre', nameEn: 'Zinogre Hardhorn', rank: 'G', monster: 'Zinogre',
    sources: [{ method: 'Romper parte', part: 'cabeza (cuernos, G)', rate: '~60%', notes: 'Rompe los cuernos en rango G.' }],
  },
  'zinogre-lash': {
    id: 'zinogre-lash', name: 'Látigo de Zinogre', nameEn: 'Zinogre Lash', rank: 'G', monster: 'Zinogre',
    sources: [{ method: 'Romper parte', part: 'cola', rate: '~50%', notes: 'Corta la cola y tálala.' }],
  },
  'zinogre-jasper': {
    id: 'zinogre-jasper', name: 'Jaspe de Zinogre', nameEn: 'Zinogre Jasper', rank: 'G', monster: 'Zinogre', rare: true,
    sources: [
      { method: 'Captura', rate: '~14%', notes: 'Placa rara de rango G: la captura es lo mejor.' },
      { method: 'Talar', rate: '~5%' },
    ],
  },
  'zinogre-skymerald': {
    id: 'zinogre-skymerald', name: 'Esmeralda celeste de Zinogre', nameEn: 'Zinogre Skymerald', rank: 'G', monster: 'Zinogre', rare: true,
    sources: [
      { method: 'Captura', rate: '~12%', notes: 'Gema rarísima: captura siempre que puedas.' },
      { method: 'Romper parte', part: 'cuernos + espalda', rate: '~8%', notes: 'Romper partes sube las recompensas.' },
    ],
  },

  // ─── Tigrex — usado por la HBG de Perforación ────────────────────────
  'tigrex-scale-plus': {
    id: 'tigrex-scale-plus', name: 'Escama+ de Tigrex', nameEn: 'Tigrex Scale+', rank: 'HR', monster: 'Tigrex',
    sources: [
      { method: 'Talar', rate: '~34%' },
      { method: 'Recompensa', rate: '~26%' },
    ],
  },
  'tigrex-shell': {
    id: 'tigrex-shell', name: 'Caparazón de Tigrex', nameEn: 'Tigrex Shell', rank: 'HR', monster: 'Tigrex',
    sources: [
      { method: 'Talar', rate: '~30%' },
      { method: 'Romper parte', part: 'espalda', rate: '~45%' },
    ],
  },
  'tigrex-fang-plus': {
    id: 'tigrex-fang-plus', name: 'Colmillo+ de Tigrex', nameEn: 'Tigrex Fang+', rank: 'HR', monster: 'Tigrex',
    sources: [{ method: 'Romper parte', part: 'cabeza (colmillos)', rate: '~55%' }],
  },
  'tigrex-carapace': {
    id: 'tigrex-carapace', name: 'Coraza de Tigrex', nameEn: 'Tigrex Carapace', rank: 'G', monster: 'Tigrex',
    sources: [
      { method: 'Talar', part: 'cuerpo (G)', rate: '~32%' },
      { method: 'Romper parte', part: 'espalda (G)', rate: '~40%' },
    ],
  },
  'tigrex-cortex': {
    id: 'tigrex-cortex', name: 'Córtex de Tigrex', nameEn: 'Tigrex Cortex', rank: 'G', monster: 'Tigrex',
    sources: [
      { method: 'Talar', part: 'cuerpo (G)', rate: '~28%' },
      { method: 'Recompensa', rate: '~24%' },
    ],
  },
  'tigrex-hardfang': {
    id: 'tigrex-hardfang', name: 'Colmillo duro de Tigrex', nameEn: 'Tigrex Hardfang', rank: 'G', monster: 'Tigrex',
    sources: [{ method: 'Romper parte', part: 'cabeza (colmillos, G)', rate: '~55%' }],
  },
  'tigrex-mantle': {
    id: 'tigrex-mantle', name: 'Mantón de Tigrex', nameEn: 'Tigrex Mantle', rank: 'G', monster: 'Tigrex', rare: true,
    sources: [
      { method: 'Captura', rate: '~12%', notes: 'Material raro G: captura recomendada.' },
      { method: 'Talar', rate: '~5%' },
    ],
  },

  // ─── Rathalos — armaduras (Punto débil, Vista crítica) ───────────────
  'rathalos-scale-plus': {
    id: 'rathalos-scale-plus', name: 'Escama+ de Rathalos', nameEn: 'Rathalos Scale+', rank: 'HR', monster: 'Rathalos',
    sources: [
      { method: 'Talar', rate: '~35%' },
      { method: 'Recompensa', rate: '~28%' },
    ],
  },
  'rathalos-carapace': {
    id: 'rathalos-carapace', name: 'Coraza de Rathalos', nameEn: 'Rathalos Carapace', rank: 'G', monster: 'Rathalos',
    sources: [
      { method: 'Talar', rate: '~30%' },
      { method: 'Romper parte', part: 'alas / espalda', rate: '~40%' },
    ],
  },
  'rathalos-cortex': {
    id: 'rathalos-cortex', name: 'Córtex de Rathalos', nameEn: 'Rathalos Cortex', rank: 'G', monster: 'Rathalos',
    sources: [
      { method: 'Talar', rate: '~26%' },
      { method: 'Recompensa', rate: '~22%' },
    ],
  },
  'rath-medulla': {
    id: 'rath-medulla', name: 'Médula de Rath', nameEn: 'Rath Medulla', rank: 'G', monster: 'Rathalos / Rathian', rare: true,
    sources: [
      { method: 'Romper parte', part: 'cabeza', rate: '~12%' },
      { method: 'Captura', rate: '~14%' },
    ],
  },
  'rathalos-mantle': {
    id: 'rathalos-mantle', name: 'Mantón de Rathalos', nameEn: 'Rathalos Mantle', rank: 'G', monster: 'Rathalos', rare: true,
    sources: [
      { method: 'Captura', rate: '~10%', notes: 'Material raro: captura recomendada.' },
      { method: 'Talar', rate: '~5%' },
    ],
  },

  // ─── Glavenus — GS de fuego y faja (Refuerzo crítico) ────────────────
  'glavenus-tail': {
    id: 'glavenus-tail', name: 'Cola de Glavenus', nameEn: 'Glavenus Tail', rank: 'HR', monster: 'Glavenus',
    sources: [{ method: 'Talar', part: 'cola cortada', rate: '~60%', notes: 'Corta la cola y tálala.' }],
  },
  'glavenus-carapace': {
    id: 'glavenus-carapace', name: 'Coraza de Glavenus', nameEn: 'Glavenus Carapace', rank: 'G', monster: 'Glavenus',
    sources: [
      { method: 'Talar', rate: '~30%' },
      { method: 'Recompensa', rate: '~24%' },
    ],
  },
  'glavenus-cortex': {
    id: 'glavenus-cortex', name: 'Córtex de Glavenus', nameEn: 'Glavenus Cortex', rank: 'G', monster: 'Glavenus',
    sources: [{ method: 'Talar', rate: '~26%' }, { method: 'Recompensa', rate: '~22%' }],
  },
  'glavenus-tailedge': {
    id: 'glavenus-tailedge', name: 'Filo caudal de Glavenus', nameEn: 'Glavenus Tailedge', rank: 'G', monster: 'Glavenus',
    sources: [{ method: 'Talar', part: 'cola (G)', rate: '~50%', notes: 'Corta y tala la cola en rango G.' }],
  },
  'glavenus-fire-orb': {
    id: 'glavenus-fire-orb', name: 'Orbe ígneo de Glavenus', nameEn: 'Glavenus Fire Orb', rank: 'G', monster: 'Glavenus', rare: true,
    sources: [
      { method: 'Romper parte', part: 'cabeza/papada', rate: '~14%' },
      { method: 'Captura', rate: '~16%' },
    ],
  },
  'glavenus-pallium': {
    id: 'glavenus-pallium', name: 'Manto de Glavenus', nameEn: 'Glavenus Pallium', rank: 'G', monster: 'Glavenus', rare: true,
    sources: [
      { method: 'Captura', rate: '~12%', notes: 'Material raro G.' },
      { method: 'Talar', rate: '~5%' },
    ],
  },
}

export const getMaterial = (id) => MATERIALS[id]
