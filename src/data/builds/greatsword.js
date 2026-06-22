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
      finalName: 'Despot’s Earlygrave (línea Zinogre)',
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
          name: 'Usurper’s Roar (forja Zinogre)',
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
          name: 'Despot’s Earlygrave',
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
        rank: 'Rango Bajo (Aldea / LR)',
        title: 'Aprende el ritmo y consigue el Buster Sword',
        body:
          'En rango bajo no tendrás Zinogre todavía. Usa la cadena Buster Sword → Bone como arma puente y practica el golpe verdadero cargado. El objetivo es llegar a HR.',
        objectives: [
          'Forja Buster Sword I y practica True Charged Slash en monstruos lentos.',
          'Acumula Mena de hierro y Hueso de monstruo P minando y recolectando.',
          'Sube a Rango Alto (HR) completando la urgente correspondiente.',
        ],
        materialsFocus: ['iron-ore', 'monster-bone-s'],
      },
      {
        phase: 2,
        rank: 'Rango Alto (HR)',
        title: 'Caza Zinogre y forja la línea Usurper',
        body:
          'Zinogre aparece en HR. Rompe sus garras (patas delanteras) y su espalda para electropelaje. La Placa de Zinogre es rara: si no cae, captúralo para mejorar la tasa.',
        objectives: [
          'Caza Zinogre varias veces; rompe garras y espalda.',
          'Forja Usurper’s Roar → Usurper’s Thunder.',
          'Empieza a reunir piezas de armadura HR puente (Acometida crítica si está disponible).',
        ],
        materialsFocus: ['zinogre-shell', 'zinogre-claw', 'zinogre-electrofur', 'zinogre-plate'],
      },
      {
        phase: 3,
        rank: 'Rango G (inicio)',
        title: 'Monta el set de habilidades base',
        body:
          'Al entrar en rango G, prioriza completar Acometida Crítica + Refuerzo Crítico. Caza Glavenus para la faja (Refuerzo crítico + Filo) y Rathalos para el casco (Punto débil).',
        objectives: [
          'Forja torso, brazos y piernas de Zinogre G.',
          'Forja faja de Glavenus G y casco de Rathalos G.',
          'Consigue joyas de filo para activar Filo +1.',
        ],
        materialsFocus: ['zinogre-cortex', 'zinogre-hardclaw', 'glavenus-hardclaw', 'rathalos-carapace'],
      },
      {
        phase: 4,
        rank: 'Rango G (final)',
        title: 'Forja Despot’s Earlygrave y pule la build',
        body:
          'El último paso es la Esmeralda celeste de Zinogre (rara de rango G). Captura a Zinogre para mejorar la probabilidad. Con el arma final y Filo +1 tendrás filo blanco y crudo de sobra.',
        objectives: [
          'Reúne Garra dura y Córtex de Zinogre (G).',
          'Consigue 1 Esmeralda celeste de Zinogre (captura recomendada).',
          'Forja Despot’s Earlygrave y sube toda la armadura con esferas auténticas.',
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
      finalName: 'Glavenus Buster (línea Glavenus)',
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
          name: 'Glavenus Buster',
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
        rank: 'Rango Bajo',
        title: 'Forja el Buster Sword y sube a HR',
        body: 'Practica el golpe cargado verdadero. Llega a Rango Alto para desbloquear Glavenus.',
        objectives: ['Forja Buster Sword I.', 'Sube a HR.'],
        materialsFocus: ['iron-ore', 'monster-bone-s'],
      },
      {
        phase: 2,
        rank: 'Rango Alto',
        title: 'Caza Glavenus y forja su Gran Espada',
        body:
          'Corta la cola de Glavenus durante la caza y tálala para conseguir el material clave. Monta un set sencillo con Concentración y Ataque.',
        objectives: [
          'Corta y tala la cola de Glavenus.',
          'Forja Glavenus Buster.',
          'Activa Concentración (Focus) y Ataque grande.',
        ],
        materialsFocus: ['glavenus-tail', 'monster-bone-plus', 'carbalite-ore'],
      },
    ],
  },
]
