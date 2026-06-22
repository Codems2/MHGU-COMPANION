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
          name: 'Blsm Heavy Bowgun III',
          rank: 'LR',
          attack: 156,
          note: 'Mejora de hierro para cerrar el Rango Bajo; ya dispara Perforación Lv1.',
          materials: [
            { id: 'machalite-ore', qty: 5 },
            { id: 'iron-ore', qty: 10 },
            { id: 'monster-bone-l', qty: 4 },
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
        rank: 'Rango Bajo · inicio',
        title: 'Aprende la distancia crítica',
        body:
          'Empieza con la ballesta base y un set de Hueso/Ingenierito. Lo importante de esta fase es dominar la "distancia crítica" (cuando el reticulado brilla y los disparos hacen más daño) y tu munición Perforante Lv1.',
        gear: [
          { type: 'Arma', name: 'Blsm Heavy Bowgun I', skills: null, note: 'Ballesta inicial de la herrería.' },
          { type: 'Armadura', name: 'Set Hueso / Alloy LR', skills: 'Ataque, Recarga parcial', note: 'Barato; te enseña a gestionar munición.' },
        ],
        objectives: [
          'Forja la ballesta base (Blsm Heavy Bowgun I).',
          'Reúne un set LR cómodo (Hueso/Alloy).',
          'Practica Perforación y la distancia crítica en monstruos grandes.',
        ],
        materialsFocus: ['iron-ore', 'monster-bone-l'],
      },
      {
        phase: 2,
        rank: 'Rango Bajo · final',
        title: 'Blsm Heavy Bowgun III y salto a HR',
        body:
          'Mejora a la Blsm Heavy Bowgun III para cerrar el Rango Bajo con una ballesta que ya dispara Perforación de sobra. Supera la urgente que abre Rango Alto.',
        gear: [
          { type: 'Arma', name: 'Blsm Heavy Bowgun III', skills: null, note: 'Mejora de hierro; Perforación Lv1 abundante.' },
          { type: 'Armadura', name: 'Set LR con Recarga/Ataque', skills: 'Recarga rápida, Ataque', note: 'Empieza a apuntar al manejo de munición.' },
        ],
        objectives: [
          'Mejora a Blsm Heavy Bowgun III.',
          'Completa la urgente para subir a Rango Alto.',
        ],
        materialsFocus: ['machalite-ore', 'iron-ore', 'monster-bone-l'],
      },
      {
        phase: 3,
        rank: 'Rango Alto · inicio',
        title: 'Caza Tigrex y forja la Tigrex Blaster',
        body:
          'Tigrex aparece en HR. Es agresivo: aprovecha sus cargas para posicionarte en línea y disparar Pierce. Talas y rompes su espalda para los materiales. Mantén un set HR puente con Recarga/Ataque.',
        gear: [
          { type: 'Arma', name: 'Tigrex Blaster', skills: null, note: 'Primera ballesta de Tigrex; buen crudo y Pierce nativo.' },
          { type: 'Armadura', name: 'Set HR de transición', skills: 'Recarga rápida, Retroceso reducido', note: 'Comodidad de manejo mientras farmeas.' },
        ],
        objectives: [
          'Caza Tigrex varias veces; rompe la espalda.',
          'Forja Tigrex Blaster.',
          'Monta munición Perforante Lv2 y Normal Lv2.',
        ],
        materialsFocus: ['tigrex-scale-plus', 'tigrex-shell', 'monster-bone-plus'],
      },
      {
        phase: 4,
        rank: 'Rango Alto · final',
        title: 'Primeras piezas del set objetivo',
        body:
          'Antes de saltar a rango G, caza Rathalos en HR para empezar el Punto débil y reúne piezas HR de Tigrex. Sigues con la Tigrex Blaster como arma.',
        gear: [
          { type: 'Arma', name: 'Tigrex Blaster (puente)', skills: null, note: 'Aguanta hasta el arma final de rango G.' },
          { type: 'Armadura', name: 'Mezcla HR Tigrex + Rathalos', skills: 'Munición perforante parcial, Punto débil', note: 'Versión HR del set final.' },
        ],
        objectives: [
          'Caza Rathalos en HR para piezas de Punto débil.',
          'Reúne piezas HR de Tigrex.',
          'Completa la urgente que abre el Rango G.',
        ],
        materialsFocus: ['rathalos-scale-plus', 'tigrex-shell', 'monster-bone-plus'],
      },
      {
        phase: 5,
        rank: 'Rango G · inicio',
        title: 'Monta el set de Perforación en G',
        body:
          'En rango G, prioriza Munición perforante arriba + Vista crítica + Retroceso reducido. Caza Tigrex (G) para el grueso del set y Rathalos para Punto débil.',
        gear: [
          { type: 'Arma', name: 'Tigrex Blaster (puente a G)', skills: null, note: 'Te sirve hasta reunir los materiales del arma final.' },
          { type: 'Armadura', name: 'Set G: Tigrex + Rathalos', skills: 'Munición perforante, Vista crítica, Punto débil, Retroceso reducido', note: 'Complétalo pieza a pieza.' },
        ],
        objectives: [
          'Forja torso, brazos y faja de Tigrex G.',
          'Forja casco y grebas de Rathalos G.',
          'Activa Retroceso reducido y Recarga rápida con joyas.',
        ],
        materialsFocus: ['tigrex-carapace', 'tigrex-cortex', 'rathalos-carapace'],
      },
      {
        phase: 6,
        rank: 'Rango G · final',
        title: 'Forja Tigrex Howl',
        body:
          'El último paso necesita romper los colmillos de Tigrex y conseguir su Mantón (raro). Captura a Tigrex para mejorar la tasa del Mantón. Con la ballesta final tendrás crudo altísimo y Pierce de sobra; maximiza la armadura con esferas auténticas.',
        gear: [
          { type: 'Arma', name: 'Tigrex Howl', skills: null, note: 'Arma final: crudo máximo y 1 ranura.' },
          { type: 'Armadura', name: 'Set G maximizado', skills: 'Munición perforante, Vista crítica, Punto débil, Retroceso reducido, Recarga rápida', note: 'Sube cada pieza con esferas auténticas.' },
        ],
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
          name: 'Blsm Heavy Bowgun III',
          rank: 'LR',
          attack: 156,
          note: 'Mejora de hierro para cerrar el Rango Bajo; dispara Dispersión Lv1.',
          materials: [
            { id: 'machalite-ore', qty: 5 },
            { id: 'iron-ore', qty: 10 },
            { id: 'monster-bone-l', qty: 4 },
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
        rank: 'Rango Bajo · inicio',
        title: 'Domina la distancia corta de la Dispersión',
        body:
          'La Dispersión hace su máximo daño a quemarropa. Con la ballesta base y un set de Hueso, practica acercarte, disparar y rodar fuera sin comerte el contraataque.',
        gear: [
          { type: 'Arma', name: 'Blsm Heavy Bowgun I', skills: null, note: 'Ballesta inicial de la herrería.' },
          { type: 'Armadura', name: 'Set Hueso / Alloy LR', skills: 'Ataque, Recarga parcial', note: 'Barato; te enseña el juego a corta distancia.' },
        ],
        objectives: [
          'Forja la ballesta base (Blsm Heavy Bowgun I).',
          'Reúne un set LR cómodo.',
          'Practica disparos de Dispersión a quemarropa y reposicionamiento.',
        ],
        materialsFocus: ['iron-ore', 'monster-bone-l'],
      },
      {
        phase: 2,
        rank: 'Rango Bajo · final',
        title: 'Blsm Heavy Bowgun III y salto a HR',
        body:
          'Mejora a la Blsm Heavy Bowgun III para cerrar el Rango Bajo y supera la urgente que abre Rango Alto.',
        gear: [
          { type: 'Arma', name: 'Blsm Heavy Bowgun III', skills: null, note: 'Mejora de hierro; ya dispara Dispersión Lv1.' },
          { type: 'Armadura', name: 'Set LR con Recarga/Ataque', skills: 'Recarga rápida, Ataque', note: 'Apunta al manejo y la supervivencia.' },
        ],
        objectives: [
          'Mejora a Blsm Heavy Bowgun III.',
          'Completa la urgente para subir a Rango Alto.',
        ],
        materialsFocus: ['machalite-ore', 'iron-ore', 'monster-bone-l'],
      },
      {
        phase: 3,
        rank: 'Rango Alto · inicio',
        title: 'Caza Rathalos y forja la Rathalos Cannon',
        body:
          'Rathalos vuela mucho: aprende a derribarlo (flash, daño a las alas) para disparar Dispersión cuando esté en tierra. Lleva un set HR cómodo con Recarga.',
        gear: [
          { type: 'Arma', name: 'Rathalos Cannon', skills: null, note: 'Ballesta de Rathalos; buena base de Dispersión.' },
          { type: 'Armadura', name: 'Set HR de transición', skills: 'Recarga rápida, Retroceso reducido', note: 'Comodidad de manejo mientras farmeas.' },
        ],
        objectives: [
          'Caza Rathalos; rompe alas y cabeza.',
          'Forja Rathalos Cannon.',
          'Monta munición de Dispersión Lv2 y Normal Lv2.',
        ],
        materialsFocus: ['rathalos-scale-plus', 'monster-bone-plus', 'carbalite-ore'],
      },
      {
        phase: 4,
        rank: 'Rango Alto · final',
        title: 'Piezas de Tigrex HR y salto a G',
        body:
          'Caza Tigrex en HR para empezar a reunir las piezas de Munición dispersa/Recarga. Sigues con la Rathalos Cannon como arma hasta el rango G.',
        gear: [
          { type: 'Arma', name: 'Rathalos Cannon (puente)', skills: null, note: 'Aguanta hasta el arma final de rango G.' },
          { type: 'Armadura', name: 'Mezcla HR Rathalos + Tigrex', skills: 'Punto débil, Munición dispersa parcial', note: 'Versión HR del set final.' },
        ],
        objectives: [
          'Caza Tigrex en HR para piezas de manejo.',
          'Reúne piezas HR de Rathalos extra.',
          'Completa la urgente que abre el Rango G.',
        ],
        materialsFocus: ['tigrex-shell', 'rathalos-scale-plus', 'monster-bone-plus'],
      },
      {
        phase: 5,
        rank: 'Rango G · inicio',
        title: 'Monta el set de Dispersión en G',
        body:
          'Combina piezas de Rathalos (Punto débil, Vista crítica) con guantes y faja de Tigrex (Munición dispersa, Recarga). Captura a Rathalos para los materiales raros. Sigues con la Rathalos Cannon.',
        gear: [
          { type: 'Arma', name: 'Rathalos Cannon (puente a G)', skills: null, note: 'Te sirve hasta reunir los materiales del arma final.' },
          { type: 'Armadura', name: 'Set G: Rathalos + Tigrex', skills: 'Munición dispersa, Vista crítica, Punto débil, Recarga rápida', note: 'Complétalo pieza a pieza.' },
        ],
        objectives: [
          'Forja casco, malla y grebas de Rathalos G.',
          'Forja guantes y faja de Tigrex G.',
          'Activa Recarga rápida y Retroceso reducido.',
        ],
        materialsFocus: ['rathalos-carapace', 'rath-medulla', 'tigrex-carapace'],
      },
      {
        phase: 6,
        rank: 'Rango G · final',
        title: 'Forja Rathalos Firestorm',
        body:
          'Cierra la build con la ballesta final de Rathalos. La Médula de Rath y el Mantón son raros: captura a Rathalos. Con Dispersión Lv3 a quemarropa reventarás partes en segundos; maximiza la armadura.',
        gear: [
          { type: 'Arma', name: 'Rathalos Firestorm', skills: null, note: 'Arma final: recarga rápida y daño de Dispersión.' },
          { type: 'Armadura', name: 'Set G maximizado', skills: 'Munición dispersa, Vista crítica, Punto débil, Recarga rápida', note: 'Sube cada pieza con esferas auténticas.' },
        ],
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
