// Builds de Espada Larga (Long Sword) para MHGU.

export const longswordBuilds = [
  {
    id: 'ls-crit-spirit',
    weaponType: 'long-sword',
    name: 'Espíritu Crítico — "Danza del Relámpago"',
    tagline: 'Combos fluidos, contraataques con Estilo Adepto y afinidad por las nubes.',
    difficulty: 'Intermedio',
    rankFocus: 'Rango G',
    damageType: 'Crudo + Trueno · Corte',
    style: 'Estilo Adepto (Adept) · Arte recomendada: Aura de Espíritu',
    playstyle:
      'La Espada Larga vive de su Medidor de Espíritu: encadenas combos para llenarlo y la Estocada de Espíritu lo sube de nivel (blanco → amarillo → rojo), aumentando tu daño. Con Estilo Adepto, esquivar en el último instante activa un contraataque que mantiene la presión. Es daño sostenido, no de un solo golpe.',
    summary:
      'Build de afinidad crítica con la Espada Larga de Zinogre. Junta Vista Crítica +2, Punto Débil y Refuerzo Crítico para que casi todos los golpes sean críticos potenciados, mientras el aura roja del Medidor de Espíritu multiplica el daño base. Resultado: un DPS sostenido altísimo si mantienes el ritmo.',
    whyItWorks:
      'A diferencia de la Gran Espada, la Espada Larga hace muchos golpes pequeños, así que lo que conviene NO es maximizar un golpe sino subir el daño medio de todos. Por eso se construye sobre afinidad: Vista Crítica +2 (+20%) y Punto Débil (+50% en zonas blandas) llevan tu afinidad efectiva muy alta, y Refuerzo Crítico convierte esos críticos de ×1,25 a ×1,40. Encima, mantener el Medidor de Espíritu en rojo añade un multiplicador de daño constante, y el Estilo Adepto te deja esquivar agresivamente para no perder ese aura. Cada pieza alimenta a las demás: más afinidad → más críticos → más daño con Refuerzo Crítico → y el aura roja multiplica todo eso a la vez.',
    strengths: [
      { title: 'DPS sostenido excelente', detail: 'Si mantienes combos y aura roja, tu daño por segundo es de los mejores entre las armas de corte.' },
      { title: 'El Estilo Adepto perdona errores', detail: 'La esquiva-contraataque te saca de aprietos y, bien hecha, ni siquiera pierdes ofensiva.' },
      { title: 'Afinidad altísima', detail: 'Con Vista Crítica +2 + Punto Débil rozas el crítico permanente en puntos débiles: daño medio muy alto y fiable.' },
    ],
    weaknesses: [
      { title: 'Depende de mantener el aura', detail: 'Si te tiran al suelo o fallas combos pierdes el nivel del Medidor de Espíritu y tu daño cae en picado hasta recuperarlo.' },
      { title: 'Estorba en multijugador', detail: 'Los barridos horizontales y la cola tropiezan a los compañeros: en grupo hay que tener cuidado con el posicionamiento.' },
      { title: 'Curva de esquiva del Adepto', detail: 'El timing del contraataque cuesta de cogerle; al principio comerás golpes por esquivar tarde o pronto.' },
    ],
    tips: [
      'La Estocada de Espíritu (el combo de 3 cortes que termina en estocada) es lo que sube el nivel del aura: priorízala cuando el monstruo esté quieto.',
      'Con Estilo Adepto, esquiva HACIA el ataque en el último momento: si aciertas, activas el contraataque y no consumes el aura.',
      'Mantén Filo +1 para no rebotar con la cola/barridos en partes duras.',
      'Captura a Rathalos y a Zinogre al final para los materiales raros (Médula, Mantón, Esmeralda celeste).',
    ],
    weapon: {
      finalName: 'Tajo-Rayo del Usurpador',
      finalNameEn: "Usurper's Boltslicer",
      image: 'ls-usurpers-boltslicer.webp',
      element: 'Trueno (secundario, sobre buena base de crudo)',
      finalStats: {
        attack: 264,
        affinity: '15% base (sube con Vista crítica y Punto débil)',
        sharpness: 'Blanco (con Filo +1)',
        slots: '1 ranura',
      },
      treeNote:
        'Cadena REAL de la herrería (datos de Kiranico): la Espada Larga de Zinogre se forja mejorando desde la Catana de Hueso "Lobo" hasta el arma final. Nombres y materiales reales; cantidades por mejora orientativas.',
      tree: [
        { name: 'Catana de Hueso "Lobo"', nameEn: 'Bone Katana "Wolf"', rank: 'LR', attack: 90, note: 'Espada larga de hueso: el punto de partida REAL de esta rama.', materials: [{ id: 'monster-bone-s', qty: 4 }, { id: 'monster-bone-m', qty: 2 }] },
        { name: 'Tajo-Rayo del Usurpador', nameEn: "Usurper's Boltslicer", rank: 'G', attack: 264, note: 'Espada larga final de Zinogre, con afinidad nativa y 1 ranura. Pide la Esmeralda celeste (rara).', materials: [{ id: 'zinogre-carapace', qty: 4 }, { id: 'zinogre-hardhorn', qty: 4 }, { id: 'zinogre-cortex', qty: 6 }, { id: 'zinogre-skymerald', qty: 1 }, { id: 'true-armor-sphere', qty: 2 }] },
      ],
    },
    armor: {
      note:
        'Set objetivo de afinidad: Vista Crítica +2, Punto Débil, Refuerzo Crítico y Filo +1. Las piezas son una guía; lo que importa es sumar esas habilidades. Rathalos aporta Punto Débil/Vista Crítica y Glavenus el Refuerzo Crítico.',
      pieces: [
        { slot: 'Cabeza', name: 'Casco de Rathalos G', nameEn: 'Rathalos Helm Z', rank: 'G', skillsGiven: 'Punto débil, Ataque', materials: [{ id: 'rathalos-carapace', qty: 2 }, { id: 'rathalos-scale-plus', qty: 3 }] },
        { slot: 'Torso', name: 'Malla de Rathalos G', nameEn: 'Rathalos Mail Z', rank: 'G', skillsGiven: 'Punto débil, Vista crítica', materials: [{ id: 'rathalos-carapace', qty: 3 }, { id: 'rath-medulla', qty: 1 }] },
        { slot: 'Brazos', name: 'Guantes de Zinogre G', nameEn: 'Zinogre Braces Z', rank: 'G', skillsGiven: 'Vista crítica', materials: [{ id: 'zinogre-carapace', qty: 3 }, { id: 'zinogre-electrofur-plus', qty: 2 }] },
        { slot: 'Cintura', name: 'Faja de Glavenus G', nameEn: 'Glavenus Faulds Z', rank: 'G', skillsGiven: 'Refuerzo crítico, Filo', materials: [{ id: 'glavenus-carapace', qty: 2 }, { id: 'glavenus-tailedge', qty: 2 }] },
        { slot: 'Piernas', name: 'Grebas de Rathalos G', nameEn: 'Rathalos Greaves Z', rank: 'G', skillsGiven: 'Vista crítica, Punto débil', materials: [{ id: 'rathalos-carapace', qty: 3 }, { id: 'rathalos-mantle', qty: 1 }] },
      ],
    },
    skills: ['critical-eye-plus', 'weakness-exploit', 'critical-boost', 'sharpness-plus-1', 'razor-sharp'],
    decorations: [
      { name: 'Joya de experto × varias (Expert Jewel)', gives: 'Completa Vista crítica +2' },
      { name: 'Joya de filo × varias (Sharp Jewel)', gives: 'Completa Filo +1' },
    ],
    charm: 'Amuleto de Experto (Critical Eye) O1 o mejor, idealmente con ranuras para joyas de filo.',
    progression: [
      {
        phase: 1, rank: 'Rango Bajo · inicio', title: 'Domina el Medidor de Espíritu',
        body:
          'Empieza con una Espada Larga de hueso (Catana de Hueso "Lobo") y un set de Hueso. Aprende a llenar el medidor con combos y a usar la Estocada de Espíritu para subir el aura de blanco a amarillo a rojo. El daño llega después; primero, el ritmo.',
        gear: [
          { type: 'Arma', name: 'Espada Larga básica (Catana de Hueso "Lobo")', skills: null, note: 'Espada larga de hueso, el punto de partida real.' },
          { type: 'Armadura', name: 'Set Hueso LR (Bone)', skills: 'Ataque (S)', note: 'Barato; suficiente para la aldea temprana.' },
        ],
        objectives: ['Forja la Espada Larga de hueso (Catana de Hueso "Lobo").', 'Reúne un set de Hueso.', 'Practica mantener el aura roja del Medidor de Espíritu.'],
        tips: ['El aura sube de nivel SOLO al conectar la estocada final del combo de Espíritu: no la malgastes en el aire.'],
        materialsFocus: ['iron-ore', 'monster-bone-s'],
      },
      {
        phase: 2, rank: 'Rango Bajo · final', title: 'Mejora la Espada Larga básica y salto a HR',
        body: 'Sigue mejorando la Espada Larga de hueso para cerrar el Rango Bajo. Cámbiate a un set LR con algo de afinidad o ataque y supera la urgente de Rango Alto.',
        gear: [
          { type: 'Arma', name: 'Espada Larga básica mejorada', skills: null, note: 'Mejora la Espada Larga de hueso hasta el cierre de LR.' },
          { type: 'Armadura', name: 'Set Rathian / Velocidrome LR', skills: 'Ataque, inicio de afinidad', note: 'Transición hacia el estilo crítico.' },
        ],
        objectives: ['Mejora la Espada Larga de hueso para cerrar LR.', 'Monta un set LR con Ataque/afinidad.', 'Completa la urgente para subir a Rango Alto.'],
        materialsFocus: ['machalite-ore', 'iron-ore', 'monster-bone-m'],
      },
      {
        phase: 3, rank: 'Rango Alto · inicio', title: 'Empieza la rama de Zinogre y el Estilo Adepto',
        body:
          'Caza Zinogre para tu primera espada larga de la línea. Activa el Estilo Adepto y dedica esta fase a interiorizar la esquiva-contraataque: es lo que diferencia esta build de un simple "combear sin pensar".',
        gear: [
          { type: 'Arma', name: 'Espada Larga de Zinogre (rama Usurper)', skills: null, note: 'Empieza a mejorar la rama de Zinogre con materiales de HR.' },
          { type: 'Armadura', name: 'Set HR de transición', skills: 'Ataque, Concentración parcial', note: 'Cualquier set HR cómodo mientras practicas el Adepto.' },
        ],
        objectives: ['Caza Zinogre; rompe cuernos y espalda.', 'Empieza a forjar la Espada Larga de Zinogre.', 'Acostúmbrate al timing de esquiva del Estilo Adepto.'],
        tips: ['Con el Adepto, una esquiva perfecta deja el medidor intacto y abre un contraataque: practica contra ataques telegrafiados (la embestida de Zinogre).'],
        materialsFocus: ['zinogre-shell', 'zinogre-horn-plus', 'monster-bone-plus'],
      },
      {
        phase: 4, rank: 'Rango Alto · final', title: 'Mejora la rama de Zinogre y piezas de afinidad HR',
        body:
          'Sigue mejorando la Espada Larga de Zinogre (necesita la Placa de Zinogre, rara). Empieza a cazar Rathalos y Glavenus en HR para las primeras piezas del set de afinidad antes de entrar en rango G.',
        gear: [
          { type: 'Arma', name: 'Espada Larga de Zinogre, mejorada', skills: null, note: 'Mejora HR; rompe la espalda de Zinogre.' },
          { type: 'Armadura', name: 'Mezcla HR Rathalos + Glavenus', skills: 'Punto débil, Vista crítica parcial', note: 'Versión HR del set final.' },
        ],
        objectives: ['Mejora la Espada Larga de Zinogre (1 Placa de Zinogre).', 'Caza Rathalos y Glavenus en HR.', 'Completa la urgente que abre el Rango G.'],
        materialsFocus: ['zinogre-electrofur-plus', 'zinogre-plate', 'rathalos-scale-plus', 'glavenus-tail'],
      },
      {
        phase: 5, rank: 'Rango G · inicio', title: 'Reúne afinidad: Rathalos + Glavenus G',
        body:
          'En rango G monta el set de afinidad. Rathalos da Punto Débil y Vista Crítica; Glavenus da Refuerzo Crítico y Filo. Captura a Rathalos para el Mantón y la Médula (raros). Sigues con la Tormenta (LS) de momento.',
        gear: [
          { type: 'Arma', name: 'Espada Larga de Zinogre (puente a rango G)', skills: null, note: 'Aguanta hasta el arma final.' },
          { type: 'Armadura', name: 'Set G: Rathalos + Glavenus + Zinogre', skills: 'Vista crítica, Punto débil, Refuerzo crítico', note: 'Complétalo pieza a pieza.' },
        ],
        objectives: ['Forja casco, malla y grebas de Rathalos G.', 'Forja la faja de Glavenus G y los guantes de Zinogre G.', 'Consigue joyas de experto y de filo.'],
        materialsFocus: ['rathalos-carapace', 'rathalos-mantle', 'glavenus-carapace', 'rath-medulla'],
      },
      {
        phase: 6, rank: 'Rango G · final', title: 'Forja el Tajo-Rayo del Usurpador',
        body:
          'Cierra la build con la espada larga final de Zinogre. La Esmeralda celeste es rara: captura a Zinogre. Con Filo +1 tendrás filo blanco y ~70-100% de afinidad efectiva en puntos débiles. Maximiza la armadura con esferas auténticas.',
        gear: [
          { type: 'Arma', name: 'Tajo-Rayo del Usurpador (Usurper’s Boltslicer)', skills: null, note: 'Arma final: afinidad nativa y 1 ranura.' },
          { type: 'Armadura', name: 'Set G maximizado', skills: 'Vista crítica +2, Punto débil, Refuerzo crítico, Filo +1', note: 'Sube cada pieza con esferas auténticas.' },
        ],
        objectives: ['Reúne Coraza, Córtex y Cuerno duro de Zinogre (G).', 'Consigue 1 Esmeralda celeste de Zinogre.', 'Forja el Tajo-Rayo del Usurpador y maximiza la armadura.'],
        materialsFocus: ['zinogre-hardhorn', 'zinogre-cortex', 'zinogre-skymerald', 'true-armor-sphere'],
      },
    ],
  },
]
