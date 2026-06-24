// Builds de Gran Espada (Great Sword) para MHGU.
// Materiales y habilidades se referencian por id desde materials.js / skills.js.
// Los nombres de armas llevan traducción al español + nombre real en inglés
// entre paréntesis (MHGU no tiene localización oficial en español).

export const greatswordBuilds = [
  {
    id: 'gs-critdraw-zinogre',
    weaponType: 'great-sword',
    name: 'Acometida Crítica — "Trueno del Relámpago"',
    tagline: 'El golpe de desenvaine cargado más demoledor del juego. Golpea, revienta la parte y retírate.',
    difficulty: 'Intermedio',
    rankFocus: 'Rango G',
    damageType: 'Crudo (sin elemento) · Corte',
    style: 'Estilo Gremio o Aéreo · Arte recomendada: Energía de Carga I/II',
    playstyle:
      'La Gran Espada no encadena combos: hace su daño en golpes únicos enormes. Cargas el Tajo Cargado Verdadero (True Charged Slash), lo sueltas sobre una parte débil en una abertura segura del monstruo y te retiras envainando. Es un baile de "golpea y huye" que premia leer al monstruo.',
    summary:
      'Build de daño crudo que combina Acometida Crítica (afinidad +100% al desenvainar) con Refuerzo Crítico (los críticos pegan ×1,40). Cada Tajo Cargado Verdadero de desenvaine es prácticamente un crítico reforzado garantizado sobre el punto débil. El arma de Zinogre aporta gran ataque base y, con Filo +1, alcanza filo blanco.',
    whyItWorks:
      'La clave es que la Gran Espada concentra todo su daño en un golpe. Si ese golpe es SIEMPRE crítico, multiplicas su daño de forma fiable. Acometida Crítica da +100% de afinidad pero solo en ataques de desenvaine: por eso la build se juega envainando entre golpes y abriendo con el Tajo Cargado Verdadero (que cuenta como desenvaine). Sobre ese 100% de afinidad, Refuerzo Crítico convierte el bonus de crítico de ×1,25 a ×1,40, y Punto Débil te cubre los pocos golpes que no sean de desenvaine al pegar en zonas blandas. Filo +1 sube el filo a blanco para que no rebotes y mantengas el modificador de filo alto. El resultado: cada apertura del monstruo se traduce en un golpe brutal y consistente.',
    strengths: [
      { title: 'Daño por golpe descomunal', detail: 'Un Tajo Cargado Verdadero crítico en un punto débil hace cifras altísimas; ideal para romper partes y cortar colas de un par de golpes.' },
      { title: 'Sirve contra (casi) todo', detail: 'Al ser daño crudo no depende del elemento del monstruo: es una build "para todo" muy fiable.' },
      { title: 'Habilidades reutilizables', detail: 'Refuerzo Crítico, Punto Débil y Filo +1 valen para muchísimas otras builds de crudo; no es esfuerzo perdido.' },
      { title: 'Bajo coste de resistencia sostenido', detail: 'No machacas botones: golpeas de vez en cuando, así que gestionas bien la estamina y los objetos.' },
    ],
    weaknesses: [
      { title: 'Exige paciencia y lectura', detail: 'Si "machacas" sin esperar aberturas, harás poco daño y comerás golpes. Castiga al jugador impaciente.' },
      { title: 'Movilidad baja desenvainado', detail: 'Con la GS fuera te mueves lento; necesitas envainar para reposicionar o usar la Carga Lateral del Estilo Gremio.' },
      { title: 'Materiales raros al final', detail: 'La Esmeralda celeste y el Jaspe de Zinogre son drops raros; tendrás que capturar a Zinogre varias veces.' },
      { title: 'Sufre con monstruos hiperactivos', detail: 'Contra monstruos que casi no dan aberturas tendrás menos ocasiones de cargar; ahí brillan más las armas de combo.' },
    ],
    tips: [
      'El "Tajo Cargado Verdadero" sale tras un Tajo Cargado Fuerte bien temporizado: practica el ritmo en monstruos lentos antes de llevarlo a una caza seria.',
      'Con Estilo Gremio, la Carga Lateral (Charged Slash lateral) te reposiciona mientras cargas: úsala para alinear el golpe con la cabeza.',
      'No te quedes sin filo: afila tras 5-6 Tajos Cargados Verdaderos para no perder el filo blanco.',
      'Captura siempre a Zinogre al final (trampa + bombas tranquilizantes): mejora muchísimo la tasa de la Esmeralda celeste.',
    ],
    weapon: {
      finalName: 'Tormenta del Usurpador',
      finalNameEn: "Usurper's Storm",
      image: 'gs-usurpers-storm.webp',
      element: 'Sin elemento (crudo). Trueno latente que no aprovechamos.',
      finalStats: {
        attack: 288,
        affinity: '0% base → 100% al desenvainar (Acometida Crítica)',
        sharpness: 'Blanco (con Filo +1)',
        slots: '1 ranura',
      },
      treeNote:
        'Cadena REAL de la herrería (datos de Kiranico): en MHGU se mejora una Gran Espada genérica hasta el arma de Zinogre, pasando por la Hoja Barbaroi. Los nombres de arma y los materiales son reales; las cantidades exactas por mejora son orientativas.',
      tree: [
        {
          name: 'Defensora', nameEn: 'Defender', rank: 'LR', attack: 100,
          note: 'Gran Espada genérica de la herrería: el punto de partida REAL de esta rama.',
          materials: [{ id: 'iron-ore', qty: 5 }, { id: 'monster-bone-s', qty: 2 }],
        },
        {
          name: 'Hoja Barbaroi', nameEn: 'Barbaroi Blade', rank: 'HR', attack: 200,
          note: 'Paso intermedio real desde la Defensora hacia la rama de Zinogre.',
          materials: [{ id: 'machalite-ore', qty: 6 }, { id: 'monster-bone-plus', qty: 4 }, { id: 'zinogre-shell', qty: 2 }],
        },
        {
          name: 'Tormenta del Usurpador', nameEn: "Usurper's Storm", rank: 'G', attack: 288,
          note: 'Gran Espada final de Zinogre. Filo blanco con Filo +1 y 1 ranura. Pide la Esmeralda celeste (rara).',
          materials: [
            { id: 'zinogre-carapace', qty: 5 }, { id: 'zinogre-hardhorn', qty: 4 },
            { id: 'zinogre-cortex', qty: 5 }, { id: 'zinogre-skymerald', qty: 1 }, { id: 'true-armor-sphere', qty: 2 },
          ],
        },
      ],
    },
    armor: {
      note:
        'Set objetivo de rango G orientado a Acometida Crítica + Refuerzo Crítico + Punto Débil + Filo +1. Las piezas son una guía: lo que importa es sumar esas habilidades. Sube cada pieza con esferas de armadura auténticas.',
      pieces: [
        { slot: 'Cabeza', name: 'Casco de Rathalos G', nameEn: 'Rathalos Helm Z', rank: 'G', skillsGiven: 'Punto débil, Ataque', materials: [{ id: 'rathalos-carapace', qty: 2 }, { id: 'rathalos-scale-plus', qty: 3 }, { id: 'true-armor-sphere', qty: 1 }] },
        { slot: 'Torso', name: 'Cota de Zinogre G', nameEn: 'Zinogre Mail Z', rank: 'G', skillsGiven: 'Acometida crítica', materials: [{ id: 'zinogre-carapace', qty: 3 }, { id: 'zinogre-cortex', qty: 2 }, { id: 'true-armor-sphere', qty: 1 }] },
        { slot: 'Brazos', name: 'Guantes de Zinogre G', nameEn: 'Zinogre Braces Z', rank: 'G', skillsGiven: 'Acometida crítica', materials: [{ id: 'zinogre-carapace', qty: 3 }, { id: 'zinogre-electrofur-plus', qty: 2 }] },
        { slot: 'Cintura', name: 'Faja de Glavenus G', nameEn: 'Glavenus Faulds Z', rank: 'G', skillsGiven: 'Refuerzo crítico, Filo', materials: [{ id: 'glavenus-carapace', qty: 2 }, { id: 'glavenus-tailedge', qty: 2 }, { id: 'true-armor-sphere', qty: 1 }] },
        { slot: 'Piernas', name: 'Grebas de Zinogre G', nameEn: 'Zinogre Greaves Z', rank: 'G', skillsGiven: 'Acometida crítica, Concentración', materials: [{ id: 'zinogre-cortex', qty: 4 }, { id: 'zinogre-jasper', qty: 1 }] },
      ],
    },
    skills: ['critical-draw', 'critical-boost', 'weakness-exploit', 'sharpness-plus-1', 'focus'],
    decorations: [
      { name: 'Joya de filo × varias (Sharp Jewel)', gives: 'Completa Filo +1' },
      { name: 'Joya de experto (Expert Jewel)', gives: 'Refuerza Punto débil / afinidad' },
    ],
    charm: 'Amuleto de Acometida (Critical Draw) o Talismán con ranuras O3 para completar las joyas de filo.',
    progression: [
      {
        phase: 1, rank: 'Rango Bajo · inicio', title: 'Aprende el ritmo: Gran Espada básica y set Hueso',
        body:
          'Aún no tienes a Zinogre. Usa una Gran Espada genérica de la herrería (Defender) como arma de aprendizaje y un set de Hueso barato que da Ataque. El objetivo NO es el daño, sino interiorizar el ritmo del Tajo Cargado: cargas, sueltas, te retiras.',
        gear: [
          { type: 'Arma', name: 'Gran Espada básica (línea Defender)', skills: null, note: 'Mejóralo con mena de hierro y hueso conforme avanzas.' },
          { type: 'Armadura', name: 'Set Hueso LR (Bone)', skills: 'Ataque (S)', note: 'Barato; te sirve para toda la aldea temprana.' },
        ],
        objectives: [
          'Forja una Gran Espada genérica (Defender) y mejórala.',
          'Reúne un set de Hueso completo (Ataque).',
          'Practica el Tajo Cargado Verdadero en Maccao, Bulldrome o Arzuros (lentos y seguros).',
        ],
        tips: ['Carga mirando a una parte que no se mueva (patas, cuerpo) hasta que domines el timing del golpe verdadero.'],
        materialsFocus: ['iron-ore', 'monster-bone-s', 'monster-bone-m'],
      },
      {
        phase: 2, rank: 'Rango Bajo · final', title: 'Cierra el Rango Bajo y sube a HR',
        body:
          'Antes de saltar a Rango Alto, mejora a la Gran Espada básica mejorada y pásate a un set LR que empiece a darte afinidad o Concentración. Con eso superarás la misión urgente que abre el Rango Alto.',
        gear: [
          { type: 'Arma', name: 'Gran Espada básica mejorada', skills: null, note: 'GS de cierre de LR; buen crudo para la urgente.' },
          { type: 'Armadura', name: 'Set Rathian / Tetsucabra LR', skills: 'Ataque, inicio de afinidad', note: 'Transición que ya apunta a las habilidades finales.' },
        ],
        objectives: [
          'Sigue mejorando la Gran Espada genérica con mena de macalita.',
          'Monta un set LR con Ataque o algo de afinidad.',
          'Completa la urgente que sube a Rango Alto.',
        ],
        materialsFocus: ['machalite-ore', 'iron-ore', 'monster-bone-m'],
      },
      {
        phase: 3, rank: 'Rango Alto · inicio', title: 'Primera caza de Zinogre → empieza la rama de Zinogre',
        body:
          'Zinogre aparece en HR. Es eléctrico: cuando acumula carga (aura azul) pega más fuerte, pero también suelta más electropelaje al romperle la espalda. Rompe cuernos y espalda, y tala el cuerpo. Con eso empiezas a forjar la Gran Espada de Zinogre.',
        gear: [
          { type: 'Arma', name: 'Gran Espada de Zinogre (rama Usurper)', skills: null, note: 'Empieza a mejorar la rama de Zinogre con materiales de HR.' },
          { type: 'Armadura', name: 'Set HR de transición (Ataque/Concentración)', skills: 'Ataque, Concentración parcial', note: 'Cualquier set HR cómodo; aún no necesitas el set final.' },
        ],
        objectives: [
          'Caza Zinogre en HR; rompe los cuernos (Cuerno+ de Zinogre).',
          'Empieza a forjar la Gran Espada de Zinogre.',
          'Guarda Caparazón de Zinogre de sobra para la siguiente mejora.',
        ],
        tips: ['Zinogre se pone a cuatro patas y "carga" rayos: ese momento es perfecto para un Tajo Cargado Verdadero a la cabeza.'],
        materialsFocus: ['zinogre-shell', 'zinogre-horn-plus', 'monster-bone-plus'],
      },
      {
        phase: 4, rank: 'Rango Alto · final', title: 'Mejora la rama de Zinogre y primeras piezas del set',
        body:
          'Sigue mejorando la Gran Espada de Zinogre (necesita la Placa de Zinogre, rara: captura para mejorar la tasa). En paralelo, empieza a cazar Rathalos (Punto Débil) y Glavenus (Refuerzo Crítico) en HR para ir montando la versión HR de tu set final.',
        gear: [
          { type: 'Arma', name: 'Gran Espada de Zinogre, mejorada', skills: null, note: 'Sigue mejorando la rama de Zinogre; rompe la espalda (electropelaje) y consigue 1 Placa.' },
          { type: 'Armadura', name: 'Mezcla HR Rathalos + Glavenus', skills: 'Punto débil, inicio de Refuerzo crítico', note: 'Versión HR del set final; te prepara para rango G.' },
        ],
        objectives: [
          'Mejora la Gran Espada de Zinogre (1 Placa de Zinogre).',
          'Caza Rathalos y Glavenus en HR para piezas de transición.',
          'Completa la urgente que abre el Rango G.',
        ],
        materialsFocus: ['zinogre-electrofur-plus', 'zinogre-plate', 'rathalos-scale-plus', 'glavenus-tail'],
      },
      {
        phase: 5, rank: 'Rango G · inicio', title: 'Monta el set de habilidades base en G',
        body:
          'En rango G prioriza completar Acometida Crítica + Refuerzo Crítico. Forja el grueso del set: Zinogre G (Acometida), Glavenus G (Refuerzo + Filo), Rathalos G (Punto Débil). Sigues usando el Rugido+ como arma puente mientras reúnes los materiales del arma final.',
        gear: [
          { type: 'Arma', name: 'Gran Espada de Zinogre (puente a rango G)', skills: null, note: 'Te sirve hasta reunir lo del arma final.' },
          { type: 'Armadura', name: 'Set G: Zinogre + Glavenus + Rathalos', skills: 'Acometida crítica, Refuerzo crítico, Punto débil', note: 'Complétalo pieza a pieza.' },
        ],
        objectives: [
          'Forja torso, brazos y piernas de Zinogre G.',
          'Forja la faja de Glavenus G y el casco de Rathalos G.',
          'Consigue joyas de filo para activar Filo +1.',
        ],
        materialsFocus: ['zinogre-carapace', 'zinogre-cortex', 'glavenus-carapace', 'rathalos-carapace'],
      },
      {
        phase: 6, rank: 'Rango G · final', title: 'Forja la Tormenta del Usurpador y pule la build',
        body:
          'El último paso es la Esmeralda celeste de Zinogre (rara de rango G): captura a Zinogre para mejorar muchísimo la probabilidad. Con el arma final y Filo +1 tendrás filo blanco y crudo de sobra. Maximiza toda la armadura con esferas auténticas y mete las últimas joyas.',
        gear: [
          { type: 'Arma', name: 'Tormenta del Usurpador (Usurper’s Storm)', skills: null, note: 'Arma final: crudo máximo, filo blanco y 1 ranura.' },
          { type: 'Armadura', name: 'Set G maximizado', skills: 'Acometida crítica, Refuerzo crítico, Punto débil, Filo +1, Concentración', note: 'Sube cada pieza con esferas auténticas.' },
        ],
        objectives: [
          'Reúne Coraza, Córtex y Cuerno duro de Zinogre (G).',
          'Consigue 1 Esmeralda celeste de Zinogre (captura recomendada).',
          'Forja la Tormenta del Usurpador y maximiza la armadura.',
        ],
        tips: ['Si la Esmeralda no cae, no la fuerces tala a tala: rompe cuernos + espalda y captura; multiplicas las tiradas por caza.'],
        materialsFocus: ['zinogre-hardhorn', 'zinogre-cortex', 'zinogre-skymerald', 'true-armor-sphere'],
      },
    ],
  },

  {
    id: 'gs-raw-beginner',
    weaponType: 'great-sword',
    name: 'Crudo para empezar — "Filo de Glavenus"',
    tagline: 'Build sencilla, barata y potente para tus primeras horas con la Gran Espada.',
    difficulty: 'Principiante',
    rankFocus: 'Rango Alto',
    damageType: 'Crudo + Fuego · Corte',
    style: 'Estilo Gremio · Arte recomendada: Energía de Carga I',
    playstyle:
      'Mismo plan de "golpea y huye" que la build avanzada, pero sin depender de materiales raros. El foco es aprender a leer aberturas y cargar con seguridad mientras subes de rango.',
    summary:
      'Usa la Gran Espada de Glavenus por su excelente filo natural y su daño de fuego. Pocas habilidades, todas fáciles de conseguir (Concentración + Ataque): ideal mientras dominas el arma y te preparas para la build de crítico de Zinogre.',
    whyItWorks:
      'Antes de tener acceso a Acometida Crítica y materiales raros, lo más rentable en una Gran Espada es: cargar más rápido (Concentración) y pegar más fuerte (Ataque), con un arma que tenga buen filo nativo para no rebotar. La GS de Glavenus cumple las tres cosas: filo blanco largo (afilas menos, mantienes el modificador alto), buen crudo y fuego extra que ayuda contra muchos monstruos de rango bajo/alto. Es una base honesta que te enseña el "core loop" del arma sin pedirte farmeo difícil.',
    strengths: [
      { title: 'Materiales accesibles', detail: 'No depende de placas ni gemas raras: la consigues cazando Glavenus un par de veces.' },
      { title: 'Filo blanco largo', detail: 'Afilas con menos frecuencia y mantienes el daño alto; perdona errores de gestión de filo.' },
      { title: 'Transición natural', detail: 'Las habilidades (Concentración, Ataque) y el hábito de juego te preparan directamente para la build de Zinogre.' },
    ],
    weaknesses: [
      { title: 'Menos techo de daño', detail: 'No llega al daño por golpe de la build de crítico de rango G; es una base, no un destino.' },
      { title: 'Fuego situacional', detail: 'El daño de fuego de Glavenus no destaca contra monstruos resistentes al fuego.' },
    ],
    tips: [
      'Concentración (Focus) reduce el tiempo de carga: con ella el Tajo Cargado Verdadero sale notablemente más rápido y atrapas más aberturas.',
      'Corta la cola de Glavenus durante la caza: te hará falta talarla para el arma.',
    ],
    weapon: {
      finalName: 'Calcinador Ardiente',
      finalNameEn: 'Crisped Blazer',
      image: 'gs-crisped-blazer.webp',
      element: 'Fuego',
      finalStats: { attack: 240, affinity: '0%', sharpness: 'Blanco (corto)', slots: '0 ranuras' },
      treeNote:
        'Se forja mejorando una Gran Espada genérica de la herrería hasta la rama de Glavenus. Nombres de arma final y materiales reales; cantidades orientativas. (No detallo cada arma intermedia para no darte nombres inexactos.)',
      tree: [
        { name: 'Defensora', nameEn: 'Defender', rank: 'LR', attack: 100, note: 'Gran Espada genérica de la herrería: el punto de partida real.', materials: [{ id: 'iron-ore', qty: 5 }, { id: 'monster-bone-s', qty: 2 }] },
        { name: 'Calcinador Ardiente', nameEn: 'Crisped Blazer', rank: 'G', attack: 240, note: 'Gran Espada final de Glavenus, con filo blanco y daño de fuego alto. Requiere talar la cola de Glavenus.', materials: [{ id: 'glavenus-tail', qty: 2 }, { id: 'glavenus-carapace', qty: 4 }, { id: 'glavenus-tailedge', qty: 2 }, { id: 'glavenus-cortex', qty: 3 }, { id: 'true-armor-sphere', qty: 1 }] },
      ],
    },
    armor: {
      note: 'Cualquier set que dé Concentración y algo de Ataque sirve. Aquí va una base barata y fácil de conseguir.',
      pieces: [
        { slot: 'Conjunto', name: 'Set mixto HR (Concentración + Ataque)', nameEn: 'Mixed HR set', rank: 'HR', skillsGiven: 'Concentración, Ataque', materials: [{ id: 'monster-bone-plus', qty: 6 }, { id: 'machalite-ore', qty: 6 }, { id: 'armor-sphere-plus', qty: 4 }] },
      ],
    },
    skills: ['focus', 'attack-up-l', 'razor-sharp'],
    decorations: [{ name: 'Joya de ataque × varias (Attack Jewel)', gives: 'Completa Ataque grande' }],
    charm: 'Cualquier amuleto con puntos de Concentración (Focus) o Ataque (Attack).',
    progression: [
      {
        phase: 1, rank: 'Rango Bajo · inicio', title: 'Gran Espada básica y set Hueso',
        body: 'Empieza con una Gran Espada genérica de la herrería (Defender) y un set de Hueso (Ataque). Dedica esta fase a entender el Tajo Cargado Verdadero y a cuándo es seguro cargar.',
        gear: [
          { type: 'Arma', name: 'Gran Espada básica (línea Defender)', skills: null, note: 'Tu primera GS, directa de la herrería.' },
          { type: 'Armadura', name: 'Set Hueso LR (Bone)', skills: 'Ataque (S)', note: 'Barato y suficiente para empezar.' },
        ],
        objectives: ['Forja una Gran Espada genérica (Defender).', 'Reúne un set de Hueso.', 'Practica el Tajo Cargado Verdadero.'],
        materialsFocus: ['iron-ore', 'monster-bone-s'],
      },
      {
        phase: 2, rank: 'Rango Bajo · final', title: 'Mejora la Gran Espada básica y sube a HR',
        body: 'Mejora la Gran Espada genérica para rematar el Rango Bajo con comodidad y supera la urgente que abre Rango Alto. No hace falta cambiar de set todavía.',
        gear: [
          { type: 'Arma', name: 'Gran Espada básica mejorada', skills: null, note: 'Mejora con mena y hueso.' },
          { type: 'Armadura', name: 'Set Hueso / mixto LR', skills: 'Ataque', note: 'Mantén el set hasta llegar a HR.' },
        ],
        objectives: ['Mejora la Gran Espada genérica.', 'Completa la urgente para subir a Rango Alto.'],
        materialsFocus: ['iron-ore', 'monster-bone-m', 'earth-crystal'],
      },
      {
        phase: 3, rank: 'Rango Alto', title: 'Caza Glavenus y forja su Gran Espada',
        body:
          'Corta la cola de Glavenus durante la caza y tálala para el material clave. Monta un set sencillo con Concentración y Ataque, que es todo lo que esta build necesita. En rango G puedes mejorar hasta el Calcinador Ardiente.',
        gear: [
          { type: 'Arma', name: 'Calcinador Ardiente (Crisped Blazer)', skills: null, note: 'Filo blanco largo y daño de fuego.' },
          { type: 'Armadura', name: 'Set mixto HR', skills: 'Concentración, Ataque', note: 'Activa Concentración para cargar más rápido.' },
        ],
        objectives: [
          'Corta y tala la cola de Glavenus.',
          'Mejora la rama de Glavenus hasta el Calcinador Ardiente (Crisped Blazer).',
          'Activa Concentración (Focus) y Ataque grande.',
        ],
        materialsFocus: ['glavenus-tail', 'monster-bone-plus', 'carbalite-ore'],
      },
    ],
  },
]
