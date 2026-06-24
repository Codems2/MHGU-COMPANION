// Builds de Ballesta Pesada (Heavy Bowgun) para MHGU.
// Al ser arma a distancia, finalStats usa munición/recarga/retroceso/desviación
// en vez de filo, y añade una lista `ammo` con la munición clave.

export const heavyBowgunBuilds = [
  {
    id: 'hbg-pierce-tigrex',
    weaponType: 'heavy-bowgun',
    name: 'Perforación — "Cañón del Tigre"',
    tagline: 'Perforante contra monstruos grandes: cada bala atraviesa el cuerpo golpeando varias veces.',
    difficulty: 'Intermedio',
    rankFocus: 'Rango G',
    damageType: 'Crudo · Munición de Perforación',
    style: 'Estilo Gremio · Posición de cañón (Heavy Bowgun)',
    playstyle:
      'Te colocas en línea con el eje largo del monstruo y disparas Perforación (Pierce S): cada bala recorre el cuerpo impactando muchas veces. Mantén la "distancia crítica" (ni pegado ni lejos) donde el reticulado brilla y el daño es máximo.',
    summary:
      'Build de Perforación con la Ballesta Pesada de Tigrex: gran ataque crudo y munición Pierce abundante. La afinidad de Vista Crítica + Punto Débil eleva el daño medio, y el buen manejo (Retroceso reducido + Recarga rápida) hace que dispares casi sin pausas. Brilla contra monstruos grandes, largos o serpentinos.',
    whyItWorks:
      'La munición de Perforación hace un número fijo de "ticks" de daño mientras la bala atraviesa al monstruo: cuanto más largo es el cuerpo que cruza, más impactos. Por eso esta build quiere monstruos grandes y un ángulo que recorra el eje largo (de cabeza a cola). Sobre esa base de muchos impactos, la afinidad (Vista Crítica + Punto Débil) hace que una buena parte sean críticos, multiplicando el total. La ballesta de Tigrex aporta el crudo más alto y Pierce nativo. Y como cada disparo ya hace mucho, lo que limita tu DPS es el tiempo entre disparos: por eso Retroceso reducido y Recarga rápida son tan importantes como el daño puro.',
    strengths: [
      { title: 'Daño brutal a monstruos grandes', detail: 'Contra cuerpos largos cada bala suma muchísimos impactos: revientas partes internas y cortas distancias de vida enormes.' },
      { title: 'Seguro y a distancia', detail: 'Juegas lejos del peligro; con buena lectura casi no recibes daño.' },
      { title: 'Munición barata y abundante', detail: 'La Perforación se fabrica fácil y llevas mucha; farmeas poco para reabastecer.' },
    ],
    weaknesses: [
      { title: 'Flojo contra monstruos pequeños o compactos', detail: 'Si el cuerpo es corto, la bala hace pocos impactos y pierdes gran parte del daño.' },
      { title: 'Gestión de munición y ángulos', detail: 'Tienes que recargar, vigilar el inventario y buscar el ángulo que recorra el eje largo: más "micromanagement" que un arma cuerpo a cuerpo.' },
      { title: 'Material raro al final', detail: 'El Mantón de Tigrex es un drop raro; tendrás que capturarlo varias veces.' },
    ],
    tips: [
      'Apunta para que la bala entre por la cabeza y salga por la cola (o viceversa): ese es el ángulo de máximos impactos.',
      'Busca la distancia crítica: ni pegado (rebota/medio daño) ni lejos (medio daño). El reticulado te avisa.',
      'Retroceso reducido te deja encadenar disparos sin la animación de retroceso: es ganancia directa de DPS.',
      'Lleva munición Normal Lv2 de respaldo para partes que la Perforación no aprovecha (cabezas pequeñas, alas pegadas).',
    ],
    weapon: {
      finalName: 'Aullido de Tigrex',
      finalNameEn: 'Tigrex Howl',
      image: 'hbg-tigrex-howl.webp',
      element: 'Sin elemento (crudo)',
      finalStats: {
        attack: 312,
        affinity: '10% base (sube con Vista crítica y Punto débil)',
        element: 'Ninguno',
        slots: '1 ranura',
        reload: 'Normal',
        recoil: 'Medio (baja con Retroceso reducido)',
        deviation: 'Ninguna',
      },
      ammo: [
        'Perforación Lv2 (Pierce S) — munición principal',
        'Perforación Lv3 — contra monstruos enormes',
        'Normal Lv2 — respaldo fiable y barato',
        'Aturdidora / Veneno — utilidad y control',
      ],
      tree: [
        { name: 'Ballesta Pesada Blsm I', nameEn: 'Blsm Heavy Bowgun I', rank: 'LR', attack: 120, note: 'Ballesta base de la herrería. Punto de partida barato.', materials: [{ id: 'iron-ore', qty: 6 }, { id: 'monster-bone-m', qty: 2 }] },
        { name: 'Ballesta Pesada Blsm III', nameEn: 'Blsm Heavy Bowgun III', rank: 'LR', attack: 156, note: 'Mejora de hierro para cerrar el Rango Bajo; ya dispara Perforación Lv1.', materials: [{ id: 'machalite-ore', qty: 5 }, { id: 'iron-ore', qty: 10 }, { id: 'monster-bone-m', qty: 4 }] },
        { name: 'Trueno del Tigre', nameEn: 'Tigrex Blaster', rank: 'HR', attack: 230, note: 'Primera ballesta de Tigrex. Buen crudo y Pierce nativo.', materials: [{ id: 'tigrex-scale-plus', qty: 4 }, { id: 'tigrex-shell', qty: 3 }, { id: 'monster-bone-plus', qty: 4 }] },
        { name: 'Aullido de Tigrex', nameEn: 'Tigrex Howl', rank: 'G', attack: 312, note: 'Versión final de rango G. Necesita romper la cabeza (colmillos) de Tigrex.', materials: [{ id: 'tigrex-carapace', qty: 5 }, { id: 'tigrex-hardfang', qty: 3 }, { id: 'tigrex-cortex', qty: 4 }, { id: 'tigrex-mantle', qty: 1 }, { id: 'true-armor-sphere', qty: 2 }] },
      ],
    },
    armor: {
      note:
        'Set objetivo: Munición Perforante arriba, Vista Crítica, Punto Débil, Retroceso reducido y Recarga rápida. Las piezas son una guía; lo importante es sumar esas habilidades.',
      pieces: [
        { slot: 'Cabeza', name: 'Casco de Rathalos G', nameEn: 'Rathalos Helm Z', rank: 'G', skillsGiven: 'Punto débil, Ataque', materials: [{ id: 'rathalos-carapace', qty: 2 }, { id: 'rathalos-scale-plus', qty: 3 }] },
        { slot: 'Torso', name: 'Cota de Tigrex G', nameEn: 'Tigrex Mail Z', rank: 'G', skillsGiven: 'Munición perforante, Vista crítica', materials: [{ id: 'tigrex-carapace', qty: 3 }, { id: 'tigrex-cortex', qty: 2 }] },
        { slot: 'Brazos', name: 'Guantes de Tigrex G', nameEn: 'Tigrex Braces Z', rank: 'G', skillsGiven: 'Munición perforante, Retroceso reducido', materials: [{ id: 'tigrex-carapace', qty: 3 }, { id: 'tigrex-fang-plus', qty: 1 }] },
        { slot: 'Cintura', name: 'Faja de Tigrex G', nameEn: 'Tigrex Faulds Z', rank: 'G', skillsGiven: 'Vista crítica, Recarga rápida', materials: [{ id: 'tigrex-cortex', qty: 3 }, { id: 'tigrex-carapace', qty: 2 }] },
        { slot: 'Piernas', name: 'Grebas de Rathalos G', nameEn: 'Rathalos Greaves Z', rank: 'G', skillsGiven: 'Vista crítica, Punto débil', materials: [{ id: 'rathalos-carapace', qty: 3 }, { id: 'rathalos-mantle', qty: 1 }] },
      ],
    },
    skills: ['pierce-up', 'critical-eye-plus', 'weakness-exploit', 'recoil-down', 'reload-speed'],
    decorations: [
      { name: 'Joya de experto × varias (Expert Jewel)', gives: 'Refuerza Vista crítica' },
      { name: 'Joya de retroceso × varias (Antirecoil Jewel)', gives: 'Completa Retroceso reducido' },
    ],
    charm: 'Amuleto de Perforación (Pierce Up) o de Experto con ranuras para joyas de retroceso/recarga.',
    progression: [
      {
        phase: 1, rank: 'Rango Bajo · inicio', title: 'Aprende la distancia crítica',
        body:
          'Empieza con la ballesta base y un set cómodo (Hueso/Aleación). Lo importante de esta fase es dominar la "distancia crítica" (donde el reticulado brilla) y el ángulo de la Perforación sobre monstruos grandes.',
        gear: [
          { type: 'Arma', name: 'Ballesta Pesada Blsm I', skills: null, note: 'Ballesta inicial de la herrería.' },
          { type: 'Armadura', name: 'Set Hueso / Aleación LR', skills: 'Ataque, Recarga parcial', note: 'Barato; te enseña a gestionar munición.' },
        ],
        objectives: ['Forja la ballesta base (Blsm I).', 'Reúne un set LR cómodo.', 'Practica Perforación y la distancia crítica en monstruos grandes (Bulldrome, Lagombi).'],
        tips: ['Si la bala "rebota" o hace medio daño, estás demasiado cerca o demasiado lejos: ajusta hasta ver el destello de crítico.'],
        materialsFocus: ['iron-ore', 'monster-bone-m'],
      },
      {
        phase: 2, rank: 'Rango Bajo · final', title: 'Blsm III y salto a HR',
        body: 'Mejora a la Ballesta Pesada Blsm III para cerrar el Rango Bajo con Perforación de sobra. Supera la urgente que abre Rango Alto.',
        gear: [
          { type: 'Arma', name: 'Ballesta Pesada Blsm III', skills: null, note: 'Mejora de hierro; Perforación Lv1 abundante.' },
          { type: 'Armadura', name: 'Set LR con Recarga/Ataque', skills: 'Recarga rápida, Ataque', note: 'Apunta al manejo de munición.' },
        ],
        objectives: ['Mejora a Blsm III.', 'Completa la urgente para subir a Rango Alto.'],
        materialsFocus: ['machalite-ore', 'iron-ore', 'monster-bone-m'],
      },
      {
        phase: 3, rank: 'Rango Alto · inicio', title: 'Caza Tigrex y forja el Trueno del Tigre',
        body:
          'Tigrex aparece en HR. Es muy agresivo y carga en línea recta: aprovecha justo esas embestidas para colocarte de lado y disparar Pierce a lo largo del cuerpo. Tala y rompe su espalda para los materiales.',
        gear: [
          { type: 'Arma', name: 'Trueno del Tigre (Tigrex Blaster)', skills: null, note: 'Primera ballesta de Tigrex; buen crudo y Pierce nativo.' },
          { type: 'Armadura', name: 'Set HR de transición', skills: 'Recarga rápida, Retroceso reducido', note: 'Comodidad de manejo mientras farmeas.' },
        ],
        objectives: ['Caza Tigrex varias veces; rompe la espalda.', 'Forja el Trueno del Tigre.', 'Monta munición Perforante Lv2 y Normal Lv2.'],
        tips: ['Tras la embestida, Tigrex queda "clavado" un instante: ese hueco es ideal para 2-3 disparos seguidos de Perforación.'],
        materialsFocus: ['tigrex-scale-plus', 'tigrex-shell', 'monster-bone-plus'],
      },
      {
        phase: 4, rank: 'Rango Alto · final', title: 'Primeras piezas del set objetivo',
        body: 'Antes de saltar a rango G, caza Rathalos en HR para empezar el Punto Débil y reúne piezas HR de Tigrex. Sigues con el Trueno del Tigre como arma.',
        gear: [
          { type: 'Arma', name: 'Trueno del Tigre (puente)', skills: null, note: 'Aguanta hasta el arma final de rango G.' },
          { type: 'Armadura', name: 'Mezcla HR Tigrex + Rathalos', skills: 'Munición perforante parcial, Punto débil', note: 'Versión HR del set final.' },
        ],
        objectives: ['Caza Rathalos en HR para piezas de Punto débil.', 'Reúne piezas HR de Tigrex.', 'Completa la urgente que abre el Rango G.'],
        materialsFocus: ['rathalos-scale-plus', 'tigrex-shell', 'monster-bone-plus'],
      },
      {
        phase: 5, rank: 'Rango G · inicio', title: 'Monta el set de Perforación en G',
        body: 'En rango G prioriza Munición Perforante arriba + Vista Crítica + Retroceso reducido. Caza Tigrex (G) para el grueso del set y Rathalos para el Punto Débil.',
        gear: [
          { type: 'Arma', name: 'Trueno del Tigre (puente a G)', skills: null, note: 'Te sirve hasta reunir los materiales del arma final.' },
          { type: 'Armadura', name: 'Set G: Tigrex + Rathalos', skills: 'Munición perforante, Vista crítica, Punto débil, Retroceso reducido', note: 'Complétalo pieza a pieza.' },
        ],
        objectives: ['Forja torso, brazos y faja de Tigrex G.', 'Forja casco y grebas de Rathalos G.', 'Activa Retroceso reducido y Recarga rápida con joyas.'],
        materialsFocus: ['tigrex-carapace', 'tigrex-cortex', 'rathalos-carapace'],
      },
      {
        phase: 6, rank: 'Rango G · final', title: 'Forja el Aullido de Tigrex',
        body:
          'El último paso necesita romper los colmillos de Tigrex y conseguir su Mantón (raro). Captura a Tigrex para mejorar la tasa del Mantón. Con la ballesta final tendrás crudo altísimo y Pierce de sobra; maximiza la armadura con esferas auténticas.',
        gear: [
          { type: 'Arma', name: 'Aullido de Tigrex (Tigrex Howl)', skills: null, note: 'Arma final: crudo máximo y 1 ranura.' },
          { type: 'Armadura', name: 'Set G maximizado', skills: 'Munición perforante, Vista crítica, Punto débil, Retroceso reducido, Recarga rápida', note: 'Sube cada pieza con esferas auténticas.' },
        ],
        objectives: ['Rompe la cabeza de Tigrex para los colmillos duros.', 'Consigue 1 Mantón de Tigrex (captura recomendada).', 'Forja el Aullido de Tigrex y maximiza la armadura.'],
        materialsFocus: ['tigrex-hardfang', 'tigrex-carapace', 'tigrex-mantle', 'true-armor-sphere'],
      },
    ],
  },

  {
    id: 'hbg-thunder-zinogre',
    weaponType: 'heavy-bowgun',
    name: 'Trueno a media distancia — "Tormenta Eléctrica"',
    tagline: 'Normal rápido y munición de Trueno con la ballesta de Zinogre. Cómoda, estable y versátil.',
    difficulty: 'Intermedio',
    rankFocus: 'Rango G',
    damageType: 'Crudo + Trueno · Munición Normal / Trueno',
    style: 'Estilo Gremio · Juego de media distancia',
    playstyle:
      'Mantienes la distancia crítica y disparas Normal de forma sostenida, alternando munición de Trueno contra los monstruos débiles a ese elemento. Es la ballesta "cómoda": estable, poco arriesgada y útil contra casi cualquier objetivo.',
    summary:
      'Build versátil con la Ballesta Pesada de Zinogre (Temblor del Usurpador). Combina Normal rápido (que daña bien cualquier parte) con munición de Trueno para los débiles a rayo, apoyada en afinidad (Vista Crítica + Punto Débil) y buen manejo (Recarga rápida + Retroceso reducido).',
    whyItWorks:
      'La munición Normal hace daño decente en CUALQUIER parte sin depender del ángulo (a diferencia de la Perforación) ni de la cercanía extrema (a diferencia de la Dispersión): es la opción "todoterreno". La ballesta de Zinogre la dispara con buen retroceso y rapidez, así que mantienes un goteo de daño constante y seguro. Encima añade munición de Trueno para cuando el monstruo es débil a rayo, donde el daño se dispara. La afinidad (Vista Crítica + Punto Débil) sube el daño medio de ese goteo continuo, y Recarga rápida + Retroceso reducido hacen que casi nunca dejes de disparar. No es la build de más daño punta, pero sí la más fácil de pilotar bien.',
    strengths: [
      { title: 'Versátil de verdad', detail: 'El Normal sirve contra todo y el Trueno cubre a los débiles a rayo: una sola build para muchísimos monstruos.' },
      { title: 'Cómoda y de bajo riesgo', detail: 'Media distancia, manejo estable y sin depender de ángulos perfectos: muy fácil de jugar bien.' },
      { title: 'Reaprovecha el farmeo', detail: 'Comparte materiales de Zinogre con las builds de GS y LS: si ya farmeaste Zinogre, vas muy adelantado.' },
    ],
    weaknesses: [
      { title: 'Menos daño punta', detail: 'Una build especializada (Perforación o Dispersión) la supera contra su objetivo ideal.' },
      { title: 'El Trueno es situacional', detail: 'Solo brilla contra monstruos débiles a rayo; contra el resto tiras casi siempre de Normal.' },
      { title: 'Material raro al final', detail: 'La Esmeralda celeste de Zinogre es un drop raro; captura para conseguirla.' },
    ],
    tips: [
      'Lleva Normal Lv2/Lv3 como munición base y reserva el Trueno para los monstruos débiles a rayo (ahí compensa fabricar más).',
      'Mantén la distancia crítica también con Normal: el daño cae si disparas demasiado lejos.',
      'Recarga rápida + Retroceso reducido valen más que un poco de ataque extra: priorízalos para no dejar de disparar.',
    ],
    weapon: {
      finalName: 'Temblor del Usurpador',
      finalNameEn: "Usurper's Tremor",
      image: 'hbg-usurpers-tremor.webp',
      element: 'Trueno',
      finalStats: {
        attack: 312,
        affinity: '10% base (sube con Vista crítica y Punto débil)',
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
        { name: 'Ballesta Pesada Blsm I', nameEn: 'Blsm Heavy Bowgun I', rank: 'LR', attack: 120, materials: [{ id: 'iron-ore', qty: 6 }, { id: 'monster-bone-m', qty: 2 }] },
        { name: 'Ballesta Pesada Blsm III', nameEn: 'Blsm Heavy Bowgun III', rank: 'LR', attack: 156, note: 'Mejora de hierro para cerrar el Rango Bajo; dispara Normal Lv2.', materials: [{ id: 'machalite-ore', qty: 5 }, { id: 'iron-ore', qty: 10 }, { id: 'monster-bone-m', qty: 4 }] },
        { name: 'Aullido del Usurpador', nameEn: "Usurper's Howl", rank: 'HR', attack: 230, note: 'Primera ballesta de Zinogre. Buen crudo con Trueno y Normal sólido.', materials: [{ id: 'zinogre-shell', qty: 4 }, { id: 'zinogre-horn-plus', qty: 2 }, { id: 'monster-bone-plus', qty: 4 }] },
        { name: 'Temblor del Usurpador', nameEn: "Usurper's Tremor", rank: 'G', attack: 312, note: 'Versión final de rango G. Necesita la Esmeralda celeste de Zinogre (rara).', materials: [{ id: 'zinogre-carapace', qty: 4 }, { id: 'zinogre-hardhorn', qty: 4 }, { id: 'zinogre-cortex', qty: 5 }, { id: 'zinogre-skymerald', qty: 1 }, { id: 'true-armor-sphere', qty: 2 }] },
      ],
    },
    armor: {
      note:
        'Set objetivo versátil: Munición Normal arriba, Vista Crítica, Punto Débil y manejo (Recarga rápida, Retroceso reducido). Zinogre aporta afinidad/manejo y Rathalos el Punto Débil.',
      pieces: [
        { slot: 'Cabeza', name: 'Casco de Rathalos G', nameEn: 'Rathalos Helm Z', rank: 'G', skillsGiven: 'Punto débil, Ataque', materials: [{ id: 'rathalos-carapace', qty: 2 }, { id: 'rathalos-scale-plus', qty: 3 }] },
        { slot: 'Torso', name: 'Cota de Zinogre G', nameEn: 'Zinogre Mail Z', rank: 'G', skillsGiven: 'Vista crítica, Trueno (atq)', materials: [{ id: 'zinogre-carapace', qty: 3 }, { id: 'zinogre-cortex', qty: 2 }] },
        { slot: 'Brazos', name: 'Guantes de Zinogre G', nameEn: 'Zinogre Braces Z', rank: 'G', skillsGiven: 'Vista crítica, Recarga rápida', materials: [{ id: 'zinogre-carapace', qty: 3 }, { id: 'zinogre-electrofur-plus', qty: 2 }] },
        { slot: 'Cintura', name: 'Faja de Tigrex G', nameEn: 'Tigrex Faulds Z', rank: 'G', skillsGiven: 'Recarga rápida, Retroceso reducido', materials: [{ id: 'tigrex-cortex', qty: 3 }, { id: 'tigrex-carapace', qty: 2 }] },
        { slot: 'Piernas', name: 'Grebas de Rathalos G', nameEn: 'Rathalos Greaves Z', rank: 'G', skillsGiven: 'Vista crítica, Punto débil', materials: [{ id: 'rathalos-carapace', qty: 3 }, { id: 'rathalos-mantle', qty: 1 }] },
      ],
    },
    skills: ['normal-up', 'critical-eye-plus', 'weakness-exploit', 'reload-speed', 'recoil-down'],
    decorations: [
      { name: 'Joya normal × varias (Normal Jewel)', gives: 'Completa Munición normal arriba' },
      { name: 'Joya de experto × varias (Expert Jewel)', gives: 'Refuerza Vista crítica' },
    ],
    charm: 'Amuleto de Normal (Normal Up) o de Experto con ranuras para joyas de recarga.',
    progression: [
      {
        phase: 1, rank: 'Rango Bajo · inicio', title: 'Distancia crítica y Normal sostenido',
        body:
          'Empieza con la ballesta base y un set cómodo. Dedica esta fase a clavar la distancia crítica disparando Normal de forma continua, sin quedarte sin resistencia ni munición.',
        gear: [
          { type: 'Arma', name: 'Ballesta Pesada Blsm I', skills: null, note: 'Ballesta inicial de la herrería.' },
          { type: 'Armadura', name: 'Set Hueso / Aleación LR', skills: 'Ataque, Recarga parcial', note: 'Barato; te enseña a gestionar munición.' },
        ],
        objectives: ['Forja la ballesta base (Blsm I).', 'Reúne un set LR cómodo.', 'Practica Normal a la distancia crítica.'],
        materialsFocus: ['iron-ore', 'monster-bone-m'],
      },
      {
        phase: 2, rank: 'Rango Bajo · final', title: 'Blsm III y salto a HR',
        body: 'Mejora a la Ballesta Pesada Blsm III para cerrar el Rango Bajo con Normal Lv2 abundante. Supera la urgente que abre Rango Alto.',
        gear: [
          { type: 'Arma', name: 'Ballesta Pesada Blsm III', skills: null, note: 'Mejora de hierro; Normal Lv2 abundante.' },
          { type: 'Armadura', name: 'Set LR con Recarga/Ataque', skills: 'Recarga rápida, Ataque', note: 'Apunta al manejo de munición.' },
        ],
        objectives: ['Mejora a Blsm III.', 'Completa la urgente para subir a Rango Alto.'],
        materialsFocus: ['machalite-ore', 'iron-ore', 'monster-bone-m'],
      },
      {
        phase: 3, rank: 'Rango Alto · inicio', title: 'Caza Zinogre y forja el Aullido del Usurpador',
        body:
          'Zinogre aparece en HR. Rompe sus cuernos y su espalda y tala el cuerpo. Con esos materiales forjas tu primera ballesta de la línea, que ya dispara Normal sólido y algo de Trueno.',
        gear: [
          { type: 'Arma', name: 'Aullido del Usurpador (Usurper’s Howl)', skills: null, note: 'Primera ballesta de Zinogre.' },
          { type: 'Armadura', name: 'Set HR de transición', skills: 'Recarga rápida, Retroceso reducido', note: 'Comodidad de manejo mientras farmeas.' },
        ],
        objectives: ['Caza Zinogre; rompe cuernos y espalda.', 'Forja el Aullido del Usurpador.', 'Monta munición Normal Lv2 y Trueno.'],
        materialsFocus: ['zinogre-shell', 'zinogre-horn-plus', 'monster-bone-plus'],
      },
      {
        phase: 4, rank: 'Rango Alto · final', title: 'Piezas de afinidad HR y salto a G',
        body: 'Caza Rathalos en HR para empezar el Punto Débil y reúne piezas HR de Zinogre. Sigues con el Aullido del Usurpador como arma hasta el rango G.',
        gear: [
          { type: 'Arma', name: 'Aullido del Usurpador (puente)', skills: null, note: 'Aguanta hasta el arma final de rango G.' },
          { type: 'Armadura', name: 'Mezcla HR Zinogre + Rathalos', skills: 'Vista crítica, Punto débil', note: 'Versión HR del set final.' },
        ],
        objectives: ['Caza Rathalos en HR para piezas de Punto débil.', 'Reúne piezas HR de Zinogre.', 'Completa la urgente que abre el Rango G.'],
        materialsFocus: ['rathalos-scale-plus', 'zinogre-electrofur-plus', 'monster-bone-plus'],
      },
      {
        phase: 5, rank: 'Rango G · inicio', title: 'Monta el set versátil en G',
        body: 'Combina piezas de Zinogre (Vista Crítica, manejo) con Rathalos (Punto Débil) y la faja de Tigrex (Recarga). Captura a Rathalos para los materiales raros. Sigues con el Aullido del Usurpador.',
        gear: [
          { type: 'Arma', name: 'Aullido del Usurpador (puente a G)', skills: null, note: 'Te sirve hasta reunir los materiales del arma final.' },
          { type: 'Armadura', name: 'Set G: Zinogre + Rathalos + Tigrex', skills: 'Normal arriba, Vista crítica, Punto débil, Recarga rápida', note: 'Complétalo pieza a pieza.' },
        ],
        objectives: ['Forja torso y brazos de Zinogre G.', 'Forja casco y grebas de Rathalos G y la faja de Tigrex G.', 'Activa Recarga rápida y Retroceso reducido.'],
        materialsFocus: ['zinogre-carapace', 'rathalos-carapace', 'tigrex-cortex'],
      },
      {
        phase: 6, rank: 'Rango G · final', title: 'Forja el Temblor del Usurpador',
        body:
          'Cierra la build con la ballesta final de Zinogre. La Esmeralda celeste es rara: captura a Zinogre. Con Normal Lv3 y afinidad alta tendrás daño estable y cómodo; maximiza la armadura con esferas auténticas.',
        gear: [
          { type: 'Arma', name: 'Temblor del Usurpador (Usurper’s Tremor)', skills: null, note: 'Arma final: recarga rápida, Normal/Trueno y 1 ranura.' },
          { type: 'Armadura', name: 'Set G maximizado', skills: 'Normal arriba, Vista crítica, Punto débil, Recarga rápida, Retroceso reducido', note: 'Sube cada pieza con esferas auténticas.' },
        ],
        objectives: ['Reúne Coraza, Córtex y Cuerno duro de Zinogre (G).', 'Consigue 1 Esmeralda celeste de Zinogre (captura recomendada).', 'Forja el Temblor del Usurpador y maximiza la armadura.'],
        materialsFocus: ['zinogre-hardhorn', 'zinogre-cortex', 'zinogre-skymerald', 'true-armor-sphere'],
      },
    ],
  },
]
