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
      image: 'hbg-tigrex-howl.webp',
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
    id: 'hbg-thunder-zinogre',
    weaponType: 'heavy-bowgun',
    name: 'Trueno a media distancia — "Tormenta Eléctrica"',
    tagline: 'Normal rápido y munición de Trueno con la ballesta de Zinogre.',
    difficulty: 'Intermedio',
    rankFocus: 'Rango G',
    style: 'Estilo Gremio · Juego de media distancia',
    playstyle:
      'Mantienes la distancia crítica y disparas Normal de forma sostenida, alternando munición de Trueno contra monstruos débiles a ese elemento. Cómoda y muy estable.',
    summary:
      'Build versátil con la Ballesta Pesada de Zinogre (Usurper’s Tremor). Combina Normal rápido con munición de Trueno para cubrir muchos monstruos, apoyada en afinidad (Vista crítica + Punto débil) y buen manejo (Recarga rápida, Retroceso reducido).',
    pros: [
      'Muy versátil: Normal sirve contra casi todo y el Trueno cubre los débiles a rayo.',
      'Manejo cómodo y estable a media distancia (poco riesgo).',
      'Reutiliza materiales de Zinogre que ya farmeas en otras builds.',
    ],
    cons: [
      'Menos daño punta que una build especializada (Perforación o Dispersión).',
      'El Trueno solo brilla contra monstruos débiles a rayo.',
      'La Esmeralda celeste de Zinogre es un material raro (RNG).',
    ],
    weapon: {
      finalName: 'Usurper’s Tremor (línea Zinogre)',
      image: 'hbg-usurpers-tremor.webp',
      element: 'Trueno',
      finalStats: {
        attack: 312,
        affinity: '10% (sube con Vista crítica y Punto débil)',
        element: 'Trueno',
        slots: '1 ranura',
        reload: 'Rápida',
        recoil: 'Bajo',
        deviation: 'Ninguna',
      },
      ammo: [
        'Normal Lv2 — munición principal sostenida',
        'Normal Lv3 — daño concentrado',
        'Trueno (Thunder S) — contra monstruos débiles a rayo',
        'Perforación Lv2 — respaldo vs monstruos grandes',
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
          note: 'Mejora de hierro para cerrar el Rango Bajo; dispara Normal Lv2.',
          materials: [
            { id: 'machalite-ore', qty: 5 },
            { id: 'iron-ore', qty: 10 },
            { id: 'monster-bone-l', qty: 4 },
          ],
        },
        {
          name: 'Usurper’s Howl (forja Zinogre)',
          rank: 'HR',
          attack: 230,
          note: 'Primera ballesta de Zinogre. Buen crudo con Trueno y Normal sólido.',
          materials: [
            { id: 'zinogre-shell', qty: 4 },
            { id: 'zinogre-claw', qty: 2 },
            { id: 'monster-bone-plus', qty: 4 },
          ],
        },
        {
          name: 'Usurper’s Tremor',
          rank: 'G',
          attack: 312,
          note: 'Versión final de rango G. Necesita la Esmeralda celeste de Zinogre (rara).',
          materials: [
            { id: 'zinogre-hardclaw', qty: 4 },
            { id: 'zinogre-cortex', qty: 5 },
            { id: 'zinogre-skymerald', qty: 1 },
            { id: 'true-armor-sphere', qty: 2 },
          ],
        },
      ],
    },
    armor: {
      note:
        'Set versátil: Normal arriba, Vista crítica, Punto débil y manejo (Recarga rápida, Retroceso reducido). Zinogre aporta afinidad y Rathalos el Punto débil.',
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
          name: 'Cota de Zinogre G',
          rank: 'G',
          skillsGiven: 'Vista crítica, Trueno (atq)',
          materials: [
            { id: 'zinogre-cortex', qty: 3 },
            { id: 'zinogre-hardclaw', qty: 2 },
          ],
        },
        {
          slot: 'Brazos',
          name: 'Guantes de Zinogre G',
          rank: 'G',
          skillsGiven: 'Vista crítica, Recarga rápida',
          materials: [
            { id: 'zinogre-cortex', qty: 3 },
            { id: 'zinogre-electrofur', qty: 2 },
          ],
        },
        {
          slot: 'Cintura',
          name: 'Faja de Tigrex G',
          rank: 'G',
          skillsGiven: 'Recarga rápida, Retroceso reducido',
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
    skills: ['normal-up', 'critical-eye-plus', 'weakness-exploit', 'reload-speed', 'recoil-down'],
    decorations: [
      { name: 'Joya normal × varias', gives: 'Completa Munición normal arriba' },
      { name: 'Joya de experto × varias', gives: 'Refuerza Vista crítica' },
    ],
    charm: 'Amuleto de Normal (Normal Up) o de Experto con ranuras para joyas de recarga.',
    progression: [
      {
        phase: 1,
        rank: 'Rango Bajo · inicio',
        title: 'Distancia crítica y Normal sostenido',
        body:
          'Empieza con la ballesta base y un set de Hueso. Dedica esta fase a clavar la distancia crítica disparando Normal de forma continua sin quedarte sin resistencia ni munición.',
        gear: [
          { type: 'Arma', name: 'Blsm Heavy Bowgun I', skills: null, note: 'Ballesta inicial de la herrería.' },
          { type: 'Armadura', name: 'Set Hueso / Alloy LR', skills: 'Ataque, Recarga parcial', note: 'Barato; te enseña a gestionar munición.' },
        ],
        objectives: [
          'Forja la ballesta base (Blsm Heavy Bowgun I).',
          'Reúne un set LR cómodo (Hueso/Alloy).',
          'Practica Normal a la distancia crítica.',
        ],
        materialsFocus: ['iron-ore', 'monster-bone-l'],
      },
      {
        phase: 2,
        rank: 'Rango Bajo · final',
        title: 'Blsm Heavy Bowgun III y salto a HR',
        body:
          'Mejora a la Blsm Heavy Bowgun III para cerrar el Rango Bajo con Normal Lv2 abundante. Supera la urgente que abre Rango Alto.',
        gear: [
          { type: 'Arma', name: 'Blsm Heavy Bowgun III', skills: null, note: 'Mejora de hierro; Normal Lv2 abundante.' },
          { type: 'Armadura', name: 'Set LR con Recarga/Ataque', skills: 'Recarga rápida, Ataque', note: 'Apunta al manejo de munición.' },
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
        title: 'Caza Zinogre y forja la Usurper’s Howl',
        body:
          'Zinogre aparece en HR. Rompe sus garras y su espalda. Con esos materiales forjas tu primera ballesta de la línea, que ya dispara Normal sólido y algo de Trueno.',
        gear: [
          { type: 'Arma', name: 'Usurper’s Howl', skills: null, note: 'Primera ballesta de Zinogre.' },
          { type: 'Armadura', name: 'Set HR de transición', skills: 'Recarga rápida, Retroceso reducido', note: 'Comodidad de manejo mientras farmeas.' },
        ],
        objectives: [
          'Caza Zinogre; rompe garras y espalda.',
          'Forja Usurper’s Howl.',
          'Monta munición Normal Lv2 y Trueno.',
        ],
        materialsFocus: ['zinogre-shell', 'zinogre-claw', 'monster-bone-plus'],
      },
      {
        phase: 4,
        rank: 'Rango Alto · final',
        title: 'Piezas de afinidad HR y salto a G',
        body:
          'Caza Rathalos en HR para empezar el Punto débil y reúne piezas HR de Zinogre. Sigues con la Usurper’s Howl como arma hasta el rango G.',
        gear: [
          { type: 'Arma', name: 'Usurper’s Howl (puente)', skills: null, note: 'Aguanta hasta el arma final de rango G.' },
          { type: 'Armadura', name: 'Mezcla HR Zinogre + Rathalos', skills: 'Vista crítica, Punto débil', note: 'Versión HR del set final.' },
        ],
        objectives: [
          'Caza Rathalos en HR para piezas de Punto débil.',
          'Reúne piezas HR de Zinogre.',
          'Completa la urgente que abre el Rango G.',
        ],
        materialsFocus: ['rathalos-scale-plus', 'zinogre-electrofur', 'monster-bone-plus'],
      },
      {
        phase: 5,
        rank: 'Rango G · inicio',
        title: 'Monta el set versátil en G',
        body:
          'Combina piezas de Zinogre (Vista crítica, manejo) con Rathalos (Punto débil) y la faja de Tigrex (Recarga). Captura a Rathalos para los materiales raros. Sigues con la Usurper’s Howl.',
        gear: [
          { type: 'Arma', name: 'Usurper’s Howl (puente a G)', skills: null, note: 'Te sirve hasta reunir los materiales del arma final.' },
          { type: 'Armadura', name: 'Set G: Zinogre + Rathalos + Tigrex', skills: 'Normal arriba, Vista crítica, Punto débil, Recarga rápida', note: 'Complétalo pieza a pieza.' },
        ],
        objectives: [
          'Forja torso y brazos de Zinogre G.',
          'Forja casco y grebas de Rathalos G y faja de Tigrex G.',
          'Activa Recarga rápida y Retroceso reducido.',
        ],
        materialsFocus: ['zinogre-cortex', 'rathalos-carapace', 'tigrex-cortex'],
      },
      {
        phase: 6,
        rank: 'Rango G · final',
        title: 'Forja Usurper’s Tremor',
        body:
          'Cierra la build con la ballesta final de Zinogre. La Esmeralda celeste es rara: captura a Zinogre. Con Normal Lv3 y afinidad alta tendrás daño estable y cómodo; maximiza la armadura con esferas auténticas.',
        gear: [
          { type: 'Arma', name: 'Usurper’s Tremor', skills: null, note: 'Arma final: recarga rápida, Normal/Trueno y 1 ranura.' },
          { type: 'Armadura', name: 'Set G maximizado', skills: 'Normal arriba, Vista crítica, Punto débil, Recarga rápida, Retroceso reducido', note: 'Sube cada pieza con esferas auténticas.' },
        ],
        objectives: [
          'Reúne Garra dura y Córtex de Zinogre (G).',
          'Consigue 1 Esmeralda celeste de Zinogre (captura recomendada).',
          'Forja Usurper’s Tremor y maximiza la armadura.',
        ],
        materialsFocus: ['zinogre-hardclaw', 'zinogre-cortex', 'zinogre-skymerald', 'true-armor-sphere'],
      },
    ],
  },
]
