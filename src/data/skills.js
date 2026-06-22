// Catálogo de habilidades (skills) de MHGU referenciadas por las builds.
// Cada habilidad incluye una descripción de su efecto en español.

export const SKILLS = {
  'critical-draw': {
    id: 'critical-draw',
    name: 'Acometida crítica',
    nameEn: 'Critical Draw',
    effect: '+100% de afinidad en ataques de desenvaine. Clave para builds de Gran Espada de "True Charge".',
    points: '+10',
  },
  'critical-eye-plus': {
    id: 'critical-eye-plus',
    name: 'Vista crítica +2',
    nameEn: 'Critical Eye+2',
    effect: '+20% de afinidad. Más golpes críticos = más daño medio.',
    points: '+15',
  },
  'critical-boost': {
    id: 'critical-boost',
    name: 'Refuerzo crítico',
    nameEn: 'Critical Boost',
    effect: 'Los golpes críticos hacen ×1,40 de daño en vez de ×1,25. Imprescindible en builds de crítico.',
    points: '+10',
  },
  'weakness-exploit': {
    id: 'weakness-exploit',
    name: 'Punto débil',
    nameEn: 'Weakness Exploit',
    effect: '+50% de afinidad al golpear partes débiles (las que rebotan menos). Sinergiza con Refuerzo crítico.',
    points: '+10',
  },
  'focus': {
    id: 'focus',
    name: 'Concentración',
    nameEn: 'Focus',
    effect: 'Acelera la carga de la Gran Espada y el llenado del Medidor de Espíritu de la Espada Larga.',
    points: '+10',
  },
  'razor-sharp': {
    id: 'razor-sharp',
    name: 'Filo navaja',
    nameEn: 'Razor Sharp / Blade Maintenance',
    effect: 'Reduce a la mitad la pérdida de filo. Mantiene el daño sin afilar tan a menudo.',
    points: '+10',
  },
  'sharpness-plus-1': {
    id: 'sharpness-plus-1',
    name: 'Filo +1',
    nameEn: 'Sharpness +1',
    effect: 'Añade un nivel extra de filo al arma (a menudo desbloquea el filo blanco/morado).',
    points: '+10',
  },
  'attack-up-l': {
    id: 'attack-up-l',
    name: 'Ataque grande',
    nameEn: 'Attack Up (L)',
    effect: '+20 de ataque crudo. Daño plano fiable para cualquier arma.',
    points: '+20',
  },
  'evasion-plus-1': {
    id: 'evasion-plus-1',
    name: 'Evasión +1',
    nameEn: 'Evasion +1',
    effect: 'Aumenta la duración de invulnerabilidad al rodar. Mejora la supervivencia.',
    points: '+10',
  },
  'razor-sharp-2': {
    id: 'earplugs',
    name: 'Tapones',
    nameEn: 'Earplugs',
    effect: 'Bloquea los rugidos de los monstruos (parcial o total), permitiéndote seguir atacando.',
    points: '+10 / +15',
  },
  'punishing-draw': {
    id: 'punishing-draw',
    name: 'Golpe de desenvaine',
    nameEn: 'Punishing Draw',
    effect: 'Añade daño de aturdimiento y un pequeño extra a los ataques de desenvaine.',
    points: '+10',
  },
  'constitution': {
    id: 'constitution',
    name: 'Constitución',
    nameEn: 'Constitution',
    effect: 'Reduce el consumo de resistencia al esquivar, correr y otras acciones.',
    points: '+10',
  },
}

export const getSkill = (id) => SKILLS[id]
