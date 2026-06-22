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
          note: 'Espada larga base de la herrería.',
          materials: [
            { id: 'iron-ore', qty: 4 },
            { id: 'monster-bone-s', qty: 2 },
          ],
        },
        {
          name: 'Iron Katana "Grace"',
          rank: 'LR',
          attack: 120,
          note: 'Mejora de hierro intermedia para media aldea.',
          materials: [
            { id: 'iron-ore', qty: 8 },
            { id: 'monster-bone-s', qty: 4 },
            { id: 'earth-crystal', qty: 2 },
          ],
        },
        {
          name: 'Chrome Katana (cierre de Rango Bajo)',
          rank: 'LR',
          attack: 144,
          note: 'Espada larga LR de gama alta; te lleva hasta la urgente de HR.',
          materials: [
            { id: 'machalite-ore', qty: 6 },
            { id: 'iron-ore', qty: 10 },
            { id: 'monster-bone-s', qty: 5 },
          ],
        },
        {
          name: 'Usurper’s Gloom (1.ª arma Zinogre)',
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
        rank: 'Rango Bajo · inicio',
        title: 'Domina el Medidor de Espíritu',
        body:
          'Empieza con la Iron Katana y un set de Hueso. Aprende a subir el medidor con combos y a usar la Estocada de Espíritu para pasar de blanco → amarillo → rojo. El daño llega después; primero el ritmo.',
        gear: [
          { type: 'Arma', name: 'Iron Katana I', skills: null, note: 'Espada larga inicial de la herrería.' },
          { type: 'Armadura', name: 'Set Hueso (Bone) LR', skills: 'Ataque (S)', note: 'Barato; suficiente para la aldea temprana.' },
        ],
        objectives: [
          'Forja Iron Katana I.',
          'Reúne un set de Hueso.',
          'Practica mantener el aura roja del Medidor de Espíritu.',
        ],
        materialsFocus: ['iron-ore', 'monster-bone-s'],
      },
      {
        phase: 2,
        rank: 'Rango Bajo · final',
        title: 'Chrome Katana y salto a HR',
        body:
          'Mejora a la Iron Katana "Grace" y luego a la Chrome Katana para cerrar el Rango Bajo. Cámbiate a un set LR con algo de afinidad o ataque y supera la urgente de Rango Alto.',
        gear: [
          { type: 'Arma', name: 'Iron Katana "Grace" → Chrome Katana', skills: null, note: 'Cadena de hierro hasta el cierre de LR.' },
          { type: 'Armadura', name: 'Set Rathian / Maccao LR', skills: 'Ataque, inicio de afinidad', note: 'Transición hacia el estilo crítico.' },
        ],
        objectives: [
          'Mejora a Iron Katana "Grace" y luego a Chrome Katana.',
          'Monta un set LR con Ataque/afinidad.',
          'Completa la urgente para subir a Rango Alto.',
        ],
        materialsFocus: ['machalite-ore', 'iron-ore', 'monster-bone-s'],
      },
      {
        phase: 3,
        rank: 'Rango Alto · inicio',
        title: 'Usurper’s Gloom y el Estilo Adepto',
        body:
          'Caza Zinogre para tu primera arma de la línea. Activa el Estilo Adepto y dedica esta fase a interiorizar las esquivas-contraataque, que son el alma de la build.',
        gear: [
          { type: 'Arma', name: 'Usurper’s Gloom', skills: null, note: 'Primera espada larga de Zinogre.' },
          { type: 'Armadura', name: 'Set HR de transición', skills: 'Ataque, Concentración parcial', note: 'Cualquier set HR cómodo mientras practicas el Adepto.' },
        ],
        objectives: [
          'Caza Zinogre; rompe garras y espalda.',
          'Forja Usurper’s Gloom.',
          'Acostúmbrate al timing de esquiva del Estilo Adepto.',
        ],
        materialsFocus: ['zinogre-shell', 'zinogre-claw', 'monster-bone-plus'],
      },
      {
        phase: 4,
        rank: 'Rango Alto · final',
        title: 'Usurper’s Stormcloud y piezas de afinidad HR',
        body:
          'Sube el arma a Usurper’s Stormcloud (necesita la Placa de Zinogre, rara). Empieza a cazar Rathalos y Glavenus en HR para las primeras piezas del set de afinidad antes de entrar en rango G.',
        gear: [
          { type: 'Arma', name: 'Usurper’s Stormcloud', skills: null, note: 'Mejora HR; rompe la espalda de Zinogre.' },
          { type: 'Armadura', name: 'Mezcla HR Rathalos + Glavenus', skills: 'Punto débil, Vista crítica parcial', note: 'Versión HR del set final.' },
        ],
        objectives: [
          'Forja Usurper’s Stormcloud (consigue 1 Placa de Zinogre).',
          'Caza Rathalos y Glavenus en HR.',
          'Completa la urgente que abre el Rango G.',
        ],
        materialsFocus: ['zinogre-electrofur', 'zinogre-plate', 'rathalos-scale-plus', 'glavenus-tail'],
      },
      {
        phase: 5,
        rank: 'Rango G · inicio',
        title: 'Reúne afinidad: Rathalos + Glavenus G',
        body:
          'En rango G, monta el set de afinidad. Rathalos da Punto débil y Vista crítica; Glavenus da Refuerzo crítico y Filo. Captura a Rathalos para el Mantón y la Médula (raros). Sigues con Usurper’s Stormcloud de momento.',
        gear: [
          { type: 'Arma', name: 'Usurper’s Stormcloud (puente a G)', skills: null, note: 'Aguanta hasta el arma final.' },
          { type: 'Armadura', name: 'Set G: Rathalos + Glavenus + Zinogre', skills: 'Vista crítica, Punto débil, Refuerzo crítico', note: 'Complétalo pieza a pieza.' },
        ],
        objectives: [
          'Forja casco, malla y grebas de Rathalos G.',
          'Forja faja de Glavenus G y guantes de Zinogre G.',
          'Consigue joyas de experto y de filo.',
        ],
        materialsFocus: ['rathalos-carapace', 'rathalos-mantle', 'glavenus-hardclaw', 'rath-medulla'],
      },
      {
        phase: 6,
        rank: 'Rango G · final',
        title: 'Forja Despot’s Thunderclap',
        body:
          'Cierra la build con el arma final de Zinogre. La Esmeralda celeste es rara: captura a Zinogre. Con Filo +1 tendrás filo blanco y ~70-100% de afinidad efectiva en puntos débiles. Maximiza la armadura con esferas auténticas.',
        gear: [
          { type: 'Arma', name: 'Despot’s Thunderclap', skills: null, note: 'Arma final: afinidad nativa y 1 ranura.' },
          { type: 'Armadura', name: 'Set G maximizado', skills: 'Vista crítica +2, Punto débil, Refuerzo crítico, Filo +1', note: 'Sube cada pieza con esferas auténticas.' },
        ],
        objectives: [
          'Reúne Garra dura y Córtex de Zinogre (G).',
          'Consigue 1 Esmeralda celeste de Zinogre.',
          'Forja Despot’s Thunderclap y maximiza la armadura.',
        ],
        materialsFocus: ['zinogre-hardclaw', 'zinogre-cortex', 'zinogre-skymerald', 'true-armor-sphere'],
      },
    ],
  },
]
