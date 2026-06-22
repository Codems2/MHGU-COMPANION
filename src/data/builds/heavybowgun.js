// Builds de Ballesta Pesada (Heavy Bowgun) para MHGU.
// Al ser un arma a distancia, finalStats usa munición/retroceso/recarga/
// desviación en vez de filo, y añade una lista `ammo` con la munición clave.

export const heavyBowgunBuilds = [
  {
    id: 'hbg-pierce-tigrex',
    weaponType: 'heavy-bowgun',
    name: 'Perforación — "Cañón del Tigre"',
    tagline: 'Perforante a monstruos grandes y alargados: cada disparo atraviesa varias partes.',
    difficulty: 'Intermedio',
    rankFocus: 'Rango G',
    style: 'Estilo Gremio · Modo Cañón (Heavy Bowgun siege)',
    playstyle:
      'Te colocas en línea con el cuerpo del monstruo y disparas Perforación (Pierce S) para que cada bala impacte muchas veces. Mantén la distancia crítica (ni muy cerca ni muy lejos) para máximo daño.',
    summary:
      'Build de Perforación con la Ballesta Pesada de Tigrex: gran ataque crudo y munición Pierce de sobra. La afinidad de Vista Crítica + Punto Débil eleva el daño medio. Ideal contra monstruos grandes y largos (serpentinos, colas, alas).',
    pros: [
      'Daño brutal contra monstruos grandes y alargados.',
      'La Perforación golpea varias veces por disparo: aprovecha partes débiles internas.',
      'Munición Pierce abundante y barata de fabricar.',
    ],
    cons: [
      'Mediocre contra monstruos pequeños o compactos (menos impactos por bala).',
      'Exige gestionar la distancia crítica y la munición.',
      'El Mantón de Tigrex es un material raro (RNG).',
    ],
    weapon: {
      finalName: 'Tigrex Howl (línea Tigrex)',
      element: 'Sin elemento (crudo)',
      finalStats: {
        attack: 312,
        affinity: '10% (sube con Vista crítica y Punto débil)',
        element: 'Ninguno',
        slots: '1 ranura',
        reload: 'Normal',
        recoil: 'Medio (baja con Retroceso reducido)',
        deviation: 'Ninguna',
      },
      ammo: [
        'Perforación Lv2 (Pierce S) — munición principal',
        'Perforación Lv3 — contra monstruos enormes',
        'Normal Lv2 — respaldo fiable',
        'Aturdidora / Veneno — utilidad',
      ],
      tree: [
        {
          name: 'Blsm Heavy Bowgun I',
          rank: 'LR',
          attack: 120,
          note: 'Ballesta base de la herrería. Punto de partida barato.',
          materials: [
            { id: 'iron-ore', qty: 6 },
            { id: 'monster-bone-l', qty: 2 },
          ],
        },
        {
          name: 'Tigrex Blaster (forja Tigrex)',
          rank: 'HR',
          attack: 230,
          note: 'Primera ballesta de Tigrex. Buen crudo y Pierce nativo.',
          materials: [
            { id: 'tigrex-scale-plus', qty: 4 },
            { id: 'tigrex-shell', qty: 3 },
            { id: 'monster-bone-plus', qty: 4 },
          ],
        },
        {
          name: 'Tigrex Howl',
          rank: 'G',
          attack: 312,
          note: 'Versión final de rango G. Necesita romper la cabeza (colmillos) de Tigrex.',
          materials: [
            { id: 'tigrex-carapace', qty: 5 },
            { id: 'tigrex-hardfang', qty: 3 },
            { id: 'tigrex-cortex', qty: 4 },
            { id: 'tigrex-mantle', qty: 1 },
            { id: 'true-armor-sphere', qty: 2 },
          ],
        },
      ],
    },
    armor: {
      note:
        'Set orientado a Perforación + afinidad + manejo: Munición perforante arriba, Vista crítica, Punto débil, Retroceso reducido y Recarga rápida.',
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
          name: 'Cota de Tigrex G',
          rank: 'G',
          skillsGiven: 'Munición perforante, Vista crítica',
          materials: [
            { id: 'tigrex-carapace', qty: 3 },
            { id: 'tigrex-cortex', qty: 2 },
          ],
        },
        {
          slot: 'Brazos',
          name: 'Guantes de Tigrex G',
          rank: 'G',
          skillsGiven: 'Munición perforante, Retroceso reducido',
          materials: [
            { id: 'tigrex-carapace', qty: 3 },
            { id: 'tigrex-hardfang', qty: 1 },
          ],
        },
        {
          slot: 'Cintura',
          name: 'Faja de Tigrex G',
          rank: 'G',
          skillsGiven: 'Vista crítica, Recarga rápida',
          materials: [
            { id: 'tigrex-cortex', qty: 3 },
            { id: 'tigrex-carapace', qty: 2 },
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
    skills: ['pierce-up', 'critical-eye-plus', 'weakness-exploit', 'recoil-down', 'reload-speed'],
    decorations: [
      { name: 'Joya de experto × varias', gives: 'Refuerza Vista crítica' },
      { name: 'Joya de retroceso × varias', gives: 'Completa Retroceso reducido' },
    ],
    charm: 'Amuleto de Perforación (Pierce Up) o de Experto con ranuras para joyas de retroceso/recarga.',
    progression: [
      {
        phase: 1,
        rank: 'Rango Bajo',
        title: 'Aprende la distancia crítica',
        body:
          'Usa la ballesta base de la herrería y practica encontrar la "distancia crítica" (cuando el reticulado brilla y los disparos hacen más daño). Sube a Rango Alto.',
        objectives: [
          'Forja la ballesta base (Blsm Heavy Bowgun I).',
          'Practica Perforación y la distancia crítica en monstruos grandes.',
          'Sube a Rango Alto.',
        ],
        materialsFocus: ['iron-ore', 'monster-bone-l'],
      },
      {
        phase: 2,
        rank: 'Rango Alto',
        title: 'Caza Tigrex y forja la Tigrex Blaster',
        body:
          'Tigrex aparece en HR. Es agresivo: aprovecha sus cargas para posicionarte en línea y disparar Pierce. Talas y rompes su espalda para los materiales.',
        objectives: [
          'Caza Tigrex varias veces; rompe la espalda.',
          'Forja Tigrex Blaster.',
          'Monta munición Perforante Lv2 y Normal Lv2.',
        ],
        materialsFocus: ['tigrex-scale-plus', 'tigrex-shell', 'monster-bone-plus'],
      },
      {
        phase: 3,
        rank: 'Rango G (inicio)',
        title: 'Monta el set de Perforación',
        body:
          'En rango G, prioriza Munición perforante arriba + Vista crítica + Retroceso reducido. Caza Tigrex (G) para el grueso del set y Rathalos para Punto débil.',
        objectives: [
          'Forja torso, brazos y faja de Tigrex G.',
          'Forja casco y grebas de Rathalos G.',
          'Activa Retroceso reducido y Recarga rápida con joyas.',
        ],
        materialsFocus: ['tigrex-carapace', 'tigrex-cortex', 'rathalos-carapace'],
      },
      {
        phase: 4,
        rank: 'Rango G (final)',
        title: 'Forja Tigrex Howl',
        body:
          'El último paso necesita romper los colmillos de Tigrex y conseguir su Mantón (raro). Captura a Tigrex para mejorar la tasa del Mantón. Con la ballesta final tendrás crudo altísimo y Pierce de sobra.',
        objectives: [
          'Rompe la cabeza de Tigrex para los colmillos duros.',
          'Consigue 1 Mantón de Tigrex (captura recomendada).',
          'Forja Tigrex Howl y maximiza la armadura con esferas auténticas.',
        ],
        materialsFocus: ['tigrex-hardfang', 'tigrex-carapace', 'tigrex-mantle', 'true-armor-sphere'],
      },
    ],
  },

  {
    id: 'hbg-spread-rathalos',
    weaponType: 'heavy-bowgun',
    name: 'Dispersión — "Tormenta de Fuego"',
    tagline: 'Disparos de Dispersión a quemarropa: máximo daño en la cara del monstruo.',
    difficulty: 'Avanzado',
    rankFocus: 'Rango G',
    style: 'Estilo Gremio · Juego agresivo a corta distancia',
    playstyle:
      'Te pegas al monstruo y disparas Dispersión (Spread S) a la cabeza o partes débiles. Es el estilo de ballesta más arriesgado y con más daño por disparo, pero te obliga a estar cerca.',
    summary:
      'Build de Dispersión con la Ballesta Pesada de Rathalos. La Dispersión concentra todos los perdigones a corta distancia para un daño enorme. Requiere buen posicionamiento y conocer los ataques del monstruo para no comerte golpes.',
    pros: [
      'Daño por disparo altísimo a quemarropa.',
      'Excelente para reventar cabezas y partes débiles concretas.',
      'Reutiliza materiales de Rathalos (poco farmeo nuevo).',
    ],
    cons: [
      'Te obliga a jugar muy cerca: alto riesgo.',
      'Pierde casi todo su daño a media/larga distancia.',
      'La munición de Dispersión es limitada: gestiona bien la combinación.',
    ],
    weapon: {
      finalName: 'Rathalos Firestorm (línea Rathalos)',
      element: 'Fuego (en algunos disparos de utilidad)',
      finalStats: {
        attack: 288,
        affinity: '15%',
        element: 'Fuego (utilidad)',
        slots: '0 ranuras',
        reload: 'Rápida',
        recoil: 'Bajo',
        deviation: 'Ligera a la izquierda',
      },
      ammo: [
        'Dispersión Lv2 (Spread S) — munición principal',
        'Dispersión Lv3 — máximo daño a quemarropa',
        'Normal Lv2 — respaldo a distancia',
        'Fuego (Flaming S) — utilidad',
      ],
      tree: [
        {
          name: 'Blsm Heavy Bowgun I',
          rank: 'LR',
          attack: 120,
          materials: [
            { id: 'iron-ore', qty: 6 },
            { id: 'monster-bone-l', qty: 2 },
          ],
        },
        {
          name: 'Rathalos Cannon (forja Rathalos)',
          rank: 'HR',
          attack: 210,
          note: 'Requiere materiales de Rathalos de Rango Alto.',
          materials: [
            { id: 'rathalos-scale-plus', qty: 4 },
            { id: 'monster-bone-plus', qty: 3 },
            { id: 'carbalite-ore', qty: 4 },
          ],
        },
        {
          name: 'Rathalos Firestorm',
          rank: 'G',
          attack: 288,
          note: 'Versión final de rango G. La Médula de Rath es rara: captura a Rathalos.',
          materials: [
            { id: 'rathalos-carapace', qty: 5 },
            { id: 'rathalos-mantle', qty: 1 },
            { id: 'rath-medulla', qty: 1 },
            { id: 'true-armor-sphere', qty: 2 },
          ],
        },
      ],
    },
    armor: {
      note:
        'Set de Dispersión + supervivencia: Munición dispersa arriba, Vista crítica, Punto débil y Recarga rápida (para reexponerte poco).',
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
          name: 'Guantes de Tigrex G',
          rank: 'G',
          skillsGiven: 'Munición dispersa, Retroceso reducido',
          materials: [
            { id: 'tigrex-carapace', qty: 3 },
            { id: 'tigrex-hardfang', qty: 1 },
          ],
        },
        {
          slot: 'Cintura',
          name: 'Faja de Tigrex G',
          rank: 'G',
          skillsGiven: 'Vista crítica, Recarga rápida',
          materials: [
            { id: 'tigrex-cortex', qty: 3 },
            { id: 'tigrex-carapace', qty: 2 },
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
    skills: ['spread-up', 'critical-eye-plus', 'weakness-exploit', 'reload-speed', 'recoil-down'],
    decorations: [
      { name: 'Joya de dispersión × varias', gives: 'Completa Munición dispersa arriba' },
      { name: 'Joya de experto × varias', gives: 'Refuerza Vista crítica' },
    ],
    charm: 'Amuleto de Dispersión (Spread Up) o de Experto con ranuras para joyas de recarga.',
    progression: [
      {
        phase: 1,
        rank: 'Rango Bajo',
        title: 'Domina la distancia corta de la Dispersión',
        body:
          'La Dispersión hace su máximo daño a quemarropa. Practica acercarte, disparar y rodar fuera. Sube a Rango Alto.',
        objectives: [
          'Forja la ballesta base (Blsm Heavy Bowgun I).',
          'Practica disparos de Dispersión a quemarropa y reposicionamiento.',
          'Sube a Rango Alto.',
        ],
        materialsFocus: ['iron-ore', 'monster-bone-l'],
      },
      {
        phase: 2,
        rank: 'Rango Alto',
        title: 'Caza Rathalos y forja la Rathalos Cannon',
        body:
          'Rathalos vuela mucho: aprende a derribarlo (flash, daño a las alas) para disparar Dispersión cuando esté en tierra.',
        objectives: [
          'Caza Rathalos; rompe alas y cabeza.',
          'Forja Rathalos Cannon.',
          'Monta munición de Dispersión Lv2 y Normal Lv2.',
        ],
        materialsFocus: ['rathalos-scale-plus', 'monster-bone-plus', 'carbalite-ore'],
      },
      {
        phase: 3,
        rank: 'Rango G (inicio)',
        title: 'Monta el set de Dispersión',
        body:
          'Combina piezas de Rathalos (Punto débil, Vista crítica) con guantes y faja de Tigrex (Munición dispersa, Recarga). Captura a Rathalos para los materiales raros.',
        objectives: [
          'Forja casco, malla y grebas de Rathalos G.',
          'Forja guantes y faja de Tigrex G.',
          'Activa Recarga rápida y Retroceso reducido.',
        ],
        materialsFocus: ['rathalos-carapace', 'rath-medulla', 'tigrex-carapace'],
      },
      {
        phase: 4,
        rank: 'Rango G (final)',
        title: 'Forja Rathalos Firestorm',
        body:
          'Cierra la build con la ballesta final de Rathalos. La Médula de Rath y el Mantón son raros: captura a Rathalos. Con Dispersión Lv3 a quemarropa reventarás partes en segundos.',
        objectives: [
          'Reúne Coraza de Rathalos (G).',
          'Consigue 1 Médula de Rath y 1 Mantón de Rathalos (captura recomendada).',
          'Forja Rathalos Firestorm y maximiza la armadura.',
        ],
        materialsFocus: ['rathalos-carapace', 'rath-medulla', 'rathalos-mantle', 'true-armor-sphere'],
      },
    ],
  },
]
