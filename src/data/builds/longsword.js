// Builds de Espada Larga (Long Sword) para MHGU.

export const longswordBuilds = [
  {
    id: 'ls-crit-spirit',
    weaponType: 'long-sword',
    name: 'Espíritu Crítico — "Danza del Relámpago"',
    tagline: 'Combos infinitos, contraataques con Estilo Adepto y afinidad por las nubes.',
    difficulty: 'Intermedio',
    rankFocus: 'Rango G',
    style: 'Estilo Adepto (Adept) · Arte: Aura de Espíritu',
    playstyle:
      'Esquivas en el momento justo con Estilo Adepto para activar el contraataque y mantienes el Medidor de Espíritu en rojo. Daño sostenido altísimo si esquivas bien.',
    summary:
      'Build de afinidad crítica con el arma de Zinogre. Combina Vista crítica +2, Punto débil y Refuerzo crítico para que casi todos los golpes sean críticos potenciados, mientras el aura roja del Medidor de Espíritu multiplica tu daño.',
    pros: [
      'Daño sostenido excelente con buen jugador de esquivas.',
      'El Estilo Adepto perdona errores de posicionamiento.',
      'Afinidad altísima: muy buen daño medio.',
    ],
    cons: [
      'Mantener el aura roja exige no fallar combos ni recibir golpes.',
      'La Espada Larga puede "tropezar" a compañeros en multijugador (cuidado con la cola).',
    ],
    weapon: {
      finalName: 'Despot’s Thunderclap (línea Zinogre)',
      element: 'Trueno (secundario)',
      finalStats: {
        attack: 264,
        affinity: '15% (sube con Vista crítica y Punto débil)',
        sharpness: 'Blanco (con Filo +1)',
        slots: '1 ranura',
      },
      tree: [
        {
          name: 'Iron Katana I',
          rank: 'LR',
          attack: 90,
          materials: [
            { id: 'iron-ore', qty: 4 },
            { id: 'monster-bone-s', qty: 2 },
          ],
        },
        {
          name: 'Usurper’s Gloom (forja Zinogre)',
          rank: 'HR',
          attack: 170,
          materials: [
            { id: 'zinogre-shell', qty: 4 },
            { id: 'zinogre-claw', qty: 2 },
            { id: 'monster-bone-plus', qty: 2 },
          ],
        },
        {
          name: 'Usurper’s Stormcloud',
          rank: 'HR',
          attack: 220,
          materials: [
            { id: 'zinogre-electrofur', qty: 3 },
            { id: 'zinogre-shell', qty: 4 },
            { id: 'zinogre-plate', qty: 1 },
          ],
        },
        {
          name: 'Despot’s Thunderclap',
          rank: 'G',
          attack: 264,
          note: 'Versión final de rango G con afinidad nativa y 1 ranura.',
          materials: [
            { id: 'zinogre-hardclaw', qty: 4 },
            { id: 'zinogre-cortex', qty: 6 },
            { id: 'zinogre-skymerald', qty: 1 },
            { id: 'true-armor-sphere', qty: 2 },
          ],
        },
      ],
    },
    armor: {
      note:
        'Set orientado a afinidad: Vista crítica +2, Punto débil, Refuerzo crítico y Filo +1. Las piezas de Rathalos aportan Punto débil y las de Zinogre/Glavenus el resto.',
      pieces: [
        {
          slot: 'Cabeza',
          name: 'Casco de Rathalos G',
          rank: 'G',
          skillsGiven: 'Punto débil, Ataque',
          materials: [
            { id: 'rathalos-carapace', qty: 2 },
            { id: 'rathalos-scale-plus', qty: 3 },
          ],
        },
        {
          slot: 'Torso',
          name: 'Malla de Rathalos G',
          rank: 'G',
          skillsGiven: 'Punto débil, Vista crítica',
          materials: [
            { id: 'rathalos-carapace', qty: 3 },
            { id: 'rath-medulla', qty: 1 },
          ],
        },
        {
          slot: 'Brazos',
          name: 'Guantes de Zinogre G',
          rank: 'G',
          skillsGiven: 'Vista crítica',
          materials: [
            { id: 'zinogre-cortex', qty: 3 },
            { id: 'zinogre-electrofur', qty: 2 },
          ],
        },
        {
          slot: 'Cintura',
          name: 'Faja de Glavenus G',
          rank: 'G',
          skillsGiven: 'Refuerzo crítico, Filo',
          materials: [
            { id: 'glavenus-hardclaw', qty: 2 },
            { id: 'glavenus-tailcase', qty: 2 },
          ],
        },
        {
          slot: 'Piernas',
          name: 'Grebas de Rathalos G',
          rank: 'G',
          skillsGiven: 'Vista crítica, Punto débil',
          materials: [
            { id: 'rathalos-carapace', qty: 3 },
            { id: 'rathalos-mantle', qty: 1 },
          ],
        },
      ],
    },
    skills: ['critical-eye-plus', 'weakness-exploit', 'critical-boost', 'sharpness-plus-1', 'razor-sharp'],
    decorations: [
      { name: 'Joya de experto × varias', gives: 'Completa Vista crítica +2' },
      { name: 'Joya de filo × varias', gives: 'Completa Filo +1' },
    ],
    charm: 'Amuleto de Experto (Critical Eye) O1 o mejor, idealmente con ranuras para joyas de filo.',
    progression: [
      {
        phase: 1,
        rank: 'Rango Bajo',
        title: 'Domina el Medidor de Espíritu',
        body:
          'Aprende a subir el medidor con combos y a usar la Estocada de Espíritu para pasar de blanco → amarillo → rojo. Usa la Iron Katana como puente hasta HR.',
        objectives: [
          'Forja Iron Katana I.',
          'Practica mantener el aura roja del Medidor de Espíritu.',
          'Sube a Rango Alto.',
        ],
        materialsFocus: ['iron-ore', 'monster-bone-s'],
      },
      {
        phase: 2,
        rank: 'Rango Alto',
        title: 'Forja la línea Zinogre y prueba el Estilo Adepto',
        body:
          'Caza Zinogre para la línea Usurper. Activa el Estilo Adepto y practica las esquivas-contraataque, que son el alma de esta build.',
        objectives: [
          'Caza Zinogre; rompe garras y espalda.',
          'Forja Usurper’s Gloom → Stormcloud.',
          'Acostúmbrate al timing de esquiva del Estilo Adepto.',
        ],
        materialsFocus: ['zinogre-shell', 'zinogre-claw', 'zinogre-electrofur', 'zinogre-plate'],
      },
      {
        phase: 3,
        rank: 'Rango G (inicio)',
        title: 'Reúne afinidad: Rathalos + Glavenus',
        body:
          'En rango G, monta el set de afinidad. Rathalos da Punto débil y Vista crítica; Glavenus da Refuerzo crítico y Filo. Captura a Rathalos para el Mantón (raro).',
        objectives: [
          'Forja casco, malla y grebas de Rathalos G.',
          'Forja faja de Glavenus G y guantes de Zinogre G.',
          'Consigue joyas de experto y de filo.',
        ],
        materialsFocus: ['rathalos-carapace', 'rathalos-mantle', 'glavenus-hardclaw', 'rath-medulla'],
      },
      {
        phase: 4,
        rank: 'Rango G (final)',
        title: 'Forja Despot’s Thunderclap',
        body:
          'Cierra la build con el arma final de Zinogre. La Esmeralda celeste es rara: captura a Zinogre. Con Filo +1 tendrás filo blanco y ~70-100% de afinidad efectiva en puntos débiles.',
        objectives: [
          'Reúne Garra dura y Córtex de Zinogre (G).',
          'Consigue 1 Esmeralda celeste de Zinogre.',
          'Forja Despot’s Thunderclap y maximiza la armadura con esferas auténticas.',
        ],
        materialsFocus: ['zinogre-hardclaw', 'zinogre-cortex', 'zinogre-skymerald', 'true-armor-sphere'],
      },
    ],
  },
]
