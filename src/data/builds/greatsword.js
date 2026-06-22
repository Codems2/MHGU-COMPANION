// Builds de Gran Espada (Great Sword) para MHGU.
// Materiales y habilidades se referencian por id desde materials.js / skills.js.

export const greatswordBuilds = [
  {
    id: 'gs-critdraw-zinogre',
    weaponType: 'great-sword',
    name: 'Acometida Crítica — "Trueno del Relámpago"',
    tagline: 'El golpe de desenvaine cargado más potente. Posiciónate y revienta partes.',
    difficulty: 'Intermedio',
    rankFocus: 'Rango G',
    style: 'Estilo Gremio o Aéreo · Arte: Energía Carga I/II',
    playstyle:
      'Cargas el ataque, desenvainas con el golpe verdadero (True Charged Slash) sobre una parte débil y te retiras. Premia leer al monstruo y golpear seguro.',
    summary:
      'Build de daño crudo basada en Acometida Crítica + Refuerzo Crítico. Cada True Charged Slash en un punto débil pega como un camión. El arma de Zinogre ofrece gran ataque crudo y filo blanco con Filo +1.',
    pros: [
      'Daño por golpe altísimo, ideal para romper partes y cortar colas.',
      'No depende de elemento: sirve contra casi cualquier monstruo.',
      'Habilidades reutilizables en otras builds de crudo.',
    ],
    cons: [
      'Requiere disciplina de posicionamiento; castiga el "machacar botones".',
      'La Placa/Esmeralda de Zinogre son materiales raros (RNG).',
    ],
    weapon: {
      finalName: 'Usurper’s Storm (línea Zinogre)',
      image: 'gs-usurpers-storm.webp',
      element: 'Sin elemento (crudo)',
      finalStats: {
        attack: 288,
        affinity: '0% (100% al desenvainar con Acometida Crítica)',
        sharpness: 'Blanco (con Filo +1)',
        slots: '1 ranura',
      },
      tree: [
        {
          name: 'Buster Sword I',
          rank: 'LR',
          attack: 100,
          note: 'Arma base de la cadena de herrería. Punto de partida barato.',
          materials: [
            { id: 'iron-ore', qty: 5 },
            { id: 'monster-bone-s', qty: 2 },
          ],
        },
        {
          name: 'Buster Sword III',
          rank: 'LR',
          attack: 132,
          note: 'Mejora directa de la base con mena y hueso. Te aguanta media aldea.',
          materials: [
            { id: 'iron-ore', qty: 8 },
            { id: 'monster-bone-s', qty: 4 },
            { id: 'earth-crystal', qty: 3 },
          ],
        },
        {
          name: 'Chrome Razor (cierre de Rango Bajo)',
          rank: 'LR',
          attack: 156,
          note: 'Gran Espada de hierro de gama alta LR. Te lleva hasta la urgente para subir a HR.',
          materials: [
            { id: 'machalite-ore', qty: 6 },
            { id: 'iron-ore', qty: 10 },
            { id: 'monster-bone-s', qty: 5 },
          ],
        },
        {
          name: 'Usurper’s Roar (1.ª arma Zinogre)',
          rank: 'HR',
          attack: 190,
          note: 'Primera arma de Zinogre. Buen crudo con algo de trueno (que no usaremos).',
          materials: [
            { id: 'zinogre-shell', qty: 4 },
            { id: 'zinogre-claw', qty: 2 },
            { id: 'monster-bone-plus', qty: 3 },
          ],
        },
        {
          name: 'Usurper’s Thunder',
          rank: 'HR',
          attack: 240,
          note: 'Mejora HR. Necesita romper la espalda de Zinogre para el electropelaje.',
          materials: [
            { id: 'zinogre-electrofur', qty: 3 },
            { id: 'zinogre-shell', qty: 5 },
            { id: 'zinogre-plate', qty: 1 },
          ],
        },
        {
          name: 'Usurper’s Storm',
          rank: 'G',
          attack: 288,
          note: 'Versión final de rango G. Filo blanco con Filo +1 y 1 ranura.',
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
        'Mezcla de piezas orientadas a Acometida Crítica + Refuerzo Crítico + Punto Débil. Sube cada pieza con esferas de armadura para máxima defensa.',
      pieces: [
        {
          slot: 'Cabeza',
          name: 'Casco de Rathalos G',
          rank: 'G',
          skillsGiven: 'Punto débil, Ataque',
          materials: [
            { id: 'rathalos-carapace', qty: 2 },
            { id: 'rathalos-scale-plus', qty: 3 },
            { id: 'true-armor-sphere', qty: 1 },
          ],
        },
        {
          slot: 'Torso',
          name: 'Cota de Zinogre G',
          rank: 'G',
          skillsGiven: 'Acometida crítica, Trueno (atq)',
          materials: [
            { id: 'zinogre-cortex', qty: 3 },
            { id: 'zinogre-hardclaw', qty: 2 },
            { id: 'true-armor-sphere', qty: 1 },
          ],
        },
        {
          slot: 'Brazos',
          name: 'Guantes de Zinogre G',
          rank: 'G',
          skillsGiven: 'Acometida crítica',
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
            { id: 'true-armor-sphere', qty: 1 },
          ],
        },
        {
          slot: 'Piernas',
          name: 'Grebas de Zinogre G',
          rank: 'G',
          skillsGiven: 'Acometida crítica, Concentración',
          materials: [
            { id: 'zinogre-cortex', qty: 4 },
            { id: 'zinogre-skymerald', qty: 1 },
          ],
        },
      ],
    },
    skills: ['critical-draw', 'critical-boost', 'weakness-exploit', 'sharpness-plus-1', 'focus'],
    decorations: [
      { name: 'Joya de filo × varias', gives: 'Completa Filo +1' },
      { name: 'Joya de experto', gives: 'Refuerza Punto débil / afinidad' },
    ],
    charm: 'Amuleto de Acometida (Critical Draw) o Talismán de ranuras O3 para completar habilidades.',
    progression: [
      {
        phase: 1,
        rank: 'Rango Bajo · inicio',
        title: 'Primeros pasos: Buster Sword y set Hueso',
        body:
          'Arranca con la Gran Espada de hierro de la herrería y un set barato de Hueso, que da algo de Ataque. El objetivo de esta fase es aprender el ritmo del True Charged Slash, no el daño.',
        gear: [
          { type: 'Arma', name: 'Buster Sword I → III', skills: null, note: 'Mejórala con mena de hierro y hueso conforme avanzas.' },
          { type: 'Armadura', name: 'Set Hueso (Bone) LR', skills: 'Ataque (S)', note: 'Set inicial barato; te vale para las primeras misiones.' },
        ],
        objectives: [
          'Forja Buster Sword I y mejórala a Buster Sword III.',
          'Reúne un set de Hueso completo (Ataque).',
          'Practica el golpe verdadero cargado en monstruos lentos (Maccao, Bulldrome).',
        ],
        materialsFocus: ['iron-ore', 'monster-bone-s'],
      },
      {
        phase: 2,
        rank: 'Rango Bajo · final',
        title: 'Cierra el Rango Bajo y sube a HR',
        body:
          'Antes de saltar a Rango Alto, mejora a una Gran Espada LR de gama alta (Chrome Razor) y pásate a un set LR que ya empiece a dar afinidad o concentración. Con eso superarás la misión urgente que abre HR.',
        gear: [
          { type: 'Arma', name: 'Chrome Razor', skills: null, note: 'GS de hierro de cierre de LR; buen crudo para la urgente.' },
          { type: 'Armadura', name: 'Set Rathalos / Tetsucabra LR', skills: 'Ataque, inicio de afinidad', note: 'Transición que ya apunta a las habilidades finales.' },
        ],
        objectives: [
          'Forja Chrome Razor con mena de macalita.',
          'Monta un set LR con Ataque (Rathalos LR o similar).',
          'Completa la misión urgente que sube a Rango Alto.',
        ],
        materialsFocus: ['machalite-ore', 'iron-ore', 'monster-bone-s'],
      },
      {
        phase: 3,
        rank: 'Rango Alto · inicio',
        title: 'Primera caza de Zinogre y Usurper’s Roar',
        body:
          'Zinogre aparece en HR. Rompe sus garras (patas delanteras) y su espalda. Con esos materiales forjas tu primera arma de la línea. Mientras tanto, lleva un set HR puente con Ataque.',
        gear: [
          { type: 'Arma', name: 'Usurper’s Roar', skills: null, note: 'Tu primer GS de Zinogre. Crudo sólido para HR.' },
          { type: 'Armadura', name: 'Set HR de transición (Ataque)', skills: 'Ataque, Concentración parcial', note: 'Cualquier set HR cómodo; aún no necesitas el set final.' },
        ],
        objectives: [
          'Caza Zinogre en HR; rompe ambas garras.',
          'Forja Usurper’s Roar.',
          'Empieza a guardar Caparazón y Garra de Zinogre de sobra.',
        ],
        materialsFocus: ['zinogre-shell', 'zinogre-claw', 'monster-bone-plus'],
      },
      {
        phase: 4,
        rank: 'Rango Alto · final',
        title: 'Usurper’s Thunder y primeras piezas del set objetivo',
        body:
          'Sube el arma a Usurper’s Thunder (necesita la Placa de Zinogre, rara: captura a Zinogre para mejorar la tasa). Empieza a montar las piezas HR de los monstruos que darán tus habilidades finales (Rathalos para Punto débil, Glavenus para Refuerzo crítico).',
        gear: [
          { type: 'Arma', name: 'Usurper’s Thunder', skills: null, note: 'Mejora HR; rompe la espalda de Zinogre para el electropelaje.' },
          { type: 'Armadura', name: 'Mezcla HR Rathalos + Glavenus', skills: 'Punto débil, inicio de Refuerzo crítico', note: 'Versión HR del set final; te prepara para rango G.' },
        ],
        objectives: [
          'Forja Usurper’s Thunder (consigue 1 Placa de Zinogre).',
          'Caza Rathalos y Glavenus en HR para piezas de transición.',
          'Completa la urgente que abre el Rango G.',
        ],
        materialsFocus: ['zinogre-electrofur', 'zinogre-plate', 'rathalos-scale-plus', 'glavenus-tail'],
      },
      {
        phase: 5,
        rank: 'Rango G · inicio',
        title: 'Monta el set de habilidades base en G',
        body:
          'Al entrar en rango G, prioriza completar Acometida Crítica + Refuerzo Crítico. Forja el grueso del set (Zinogre G para Acometida, Glavenus G para Refuerzo, Rathalos G para Punto débil). Aún usas Usurper’s Thunder como arma.',
        gear: [
          { type: 'Arma', name: 'Usurper’s Thunder (puente a G)', skills: null, note: 'Te sirve hasta que reúnas los materiales del arma final.' },
          { type: 'Armadura', name: 'Set G: Zinogre + Glavenus + Rathalos', skills: 'Acometida crítica, Refuerzo crítico, Punto débil', note: 'El set definitivo; complétalo pieza a pieza.' },
        ],
        objectives: [
          'Forja torso, brazos y piernas de Zinogre G.',
          'Forja faja de Glavenus G y casco de Rathalos G.',
          'Consigue joyas de filo para activar Filo +1.',
        ],
        materialsFocus: ['zinogre-cortex', 'zinogre-hardclaw', 'glavenus-hardclaw', 'rathalos-carapace'],
      },
      {
        phase: 6,
        rank: 'Rango G · final',
        title: 'Forja Usurper’s Storm y pule la build',
        body:
          'El último paso es la Esmeralda celeste de Zinogre (rara de rango G). Captura a Zinogre para mejorar la probabilidad. Con el arma final y Filo +1 tendrás filo blanco y crudo de sobra; sube toda la armadura con esferas auténticas.',
        gear: [
          { type: 'Arma', name: 'Usurper’s Storm', skills: null, note: 'Arma final: crudo máximo y 1 ranura.' },
          { type: 'Armadura', name: 'Set G maximizado', skills: 'Acometida crítica, Refuerzo crítico, Punto débil, Filo +1, Concentración', note: 'Sube cada pieza con esferas de armadura auténticas.' },
        ],
        objectives: [
          'Reúne Garra dura y Córtex de Zinogre (G).',
          'Consigue 1 Esmeralda celeste de Zinogre (captura recomendada).',
          'Forja Usurper’s Storm y maximiza la armadura con esferas auténticas.',
        ],
        materialsFocus: ['zinogre-hardclaw', 'zinogre-cortex', 'zinogre-skymerald', 'true-armor-sphere'],
      },
    ],
  },

  {
    id: 'gs-raw-beginner',
    weaponType: 'great-sword',
    name: 'Crudo para empezar — "Filo de Glavenus"',
    tagline: 'Build sencilla y barata para tus primeras horas con la Gran Espada.',
    difficulty: 'Principiante',
    rankFocus: 'Rango Alto',
    style: 'Estilo Gremio · Arte: Energía Carga I',
    playstyle:
      'Mismo plan que la build avanzada pero sin depender de materiales raros. Aprende a leer aberturas y a cargar con seguridad.',
    summary:
      'Usa la Gran Espada de Glavenus por su excelente filo natural y daño de fuego. Pocas habilidades, fáciles de conseguir: ideal mientras dominas el arma.',
    pros: [
      'Materiales accesibles, sin depender de placas raras.',
      'Filo largo y blanco: menos afilado, más ataque.',
      'Buena base para transicionar luego a la build de Zinogre.',
    ],
    cons: [
      'Menos techo de daño que la build de crítico de rango G.',
      'El fuego de Glavenus es bueno pero no destaca en monstruos resistentes a fuego.',
    ],
    weapon: {
      finalName: 'Crisped Blazer (línea Glavenus)',
      image: 'gs-crisped-blazer.webp',
      element: 'Fuego',
      finalStats: {
        attack: 210,
        affinity: '0%',
        sharpness: 'Blanco corto',
        slots: '0 ranuras',
      },
      tree: [
        {
          name: 'Buster Sword I',
          rank: 'LR',
          attack: 100,
          materials: [
            { id: 'iron-ore', qty: 5 },
            { id: 'monster-bone-s', qty: 2 },
          ],
        },
        {
          name: 'Buster Sword III',
          rank: 'LR',
          attack: 132,
          note: 'Mejora barata para terminar el Rango Bajo.',
          materials: [
            { id: 'iron-ore', qty: 8 },
            { id: 'monster-bone-s', qty: 4 },
            { id: 'earth-crystal', qty: 3 },
          ],
        },
        {
          name: 'Crisped Blazer',
          rank: 'HR',
          attack: 210,
          note: 'Requiere talar la cola de Glavenus tras cortarla.',
          materials: [
            { id: 'glavenus-tail', qty: 2 },
            { id: 'monster-bone-plus', qty: 4 },
            { id: 'carbalite-ore', qty: 3 },
          ],
        },
      ],
    },
    armor: {
      note: 'Cualquier set HR que dé Concentración y algo de Ataque sirve. Aquí va una base barata.',
      pieces: [
        {
          slot: 'Conjunto',
          name: 'Set mixto HR (Concentración + Ataque)',
          rank: 'HR',
          skillsGiven: 'Concentración, Ataque',
          materials: [
            { id: 'monster-bone-plus', qty: 6 },
            { id: 'machalite-ore', qty: 6 },
            { id: 'armor-sphere-plus', qty: 4 },
          ],
        },
      ],
    },
    skills: ['focus', 'attack-up-l', 'razor-sharp'],
    decorations: [{ name: 'Joya de ataque × varias', gives: 'Completa Ataque grande' }],
    charm: 'Cualquier amuleto con puntos de Concentración o Ataque.',
    progression: [
      {
        phase: 1,
        rank: 'Rango Bajo · inicio',
        title: 'Buster Sword y set Hueso',
        body:
          'Empieza con la Gran Espada de hierro y un set de Hueso (Ataque). Dedica esta fase a entender el golpe verdadero cargado y a cuándo es seguro cargar.',
        gear: [
          { type: 'Arma', name: 'Buster Sword I', skills: null, note: 'Tu primera GS, directa de la herrería.' },
          { type: 'Armadura', name: 'Set Hueso (Bone) LR', skills: 'Ataque (S)', note: 'Barato y suficiente para empezar.' },
        ],
        objectives: ['Forja Buster Sword I.', 'Reúne un set de Hueso.', 'Practica el golpe cargado verdadero.'],
        materialsFocus: ['iron-ore', 'monster-bone-s'],
      },
      {
        phase: 2,
        rank: 'Rango Bajo · final',
        title: 'Mejora a Buster Sword III y sube a HR',
        body:
          'Mejora el arma para rematar el Rango Bajo con comodidad y supera la urgente que abre Rango Alto. No hace falta cambiar de set todavía.',
        gear: [
          { type: 'Arma', name: 'Buster Sword III', skills: null, note: 'Mejora con mena y hueso.' },
          { type: 'Armadura', name: 'Set Hueso / mixto LR', skills: 'Ataque', note: 'Mantén el set hasta llegar a HR.' },
        ],
        objectives: ['Mejora a Buster Sword III.', 'Completa la urgente para subir a Rango Alto.'],
        materialsFocus: ['iron-ore', 'monster-bone-s', 'earth-crystal'],
      },
      {
        phase: 3,
        rank: 'Rango Alto',
        title: 'Caza Glavenus y forja su Gran Espada',
        body:
          'Corta la cola de Glavenus durante la caza y tálala para conseguir el material clave. Monta un set sencillo con Concentración y Ataque, que es todo lo que esta build necesita.',
        gear: [
          { type: 'Arma', name: 'Crisped Blazer', skills: null, note: 'Filo blanco largo y daño de fuego.' },
          { type: 'Armadura', name: 'Set mixto HR', skills: 'Concentración, Ataque', note: 'Activa Concentración para cargar más rápido.' },
        ],
        objectives: [
          'Corta y tala la cola de Glavenus.',
          'Forja Crisped Blazer.',
          'Activa Concentración (Focus) y Ataque grande.',
        ],
        materialsFocus: ['glavenus-tail', 'monster-bone-plus', 'carbalite-ore'],
      },
    ],
  },
]
