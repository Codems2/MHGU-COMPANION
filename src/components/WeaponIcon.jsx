// Iconos SVG propios para cada tipo de arma de MHGU.
// Siluetas estilizadas (no son assets del juego) que heredan el color del
// tema vía `currentColor`. Se usan en el selector y en las cabeceras.

const ICONS = {
  'great-sword': (
    <>
      <path d="M32 2l9 16-4 28H27l-4-28z" />
      <rect x="17" y="45" width="30" height="4" rx="1.5" />
      <rect x="29" y="49" width="6" height="12" rx="2" />
    </>
  ),
  'long-sword': (
    <>
      <path d="M16 47L47 16l4 4L20 51z" />
      <circle cx="14" cy="49" r="3.5" />
      <path d="M11 51l3 3-5 6-3-3z" />
    </>
  ),
  'sword-and-shield': (
    <>
      <path d="M19 6h4l-1 27h-2z" />
      <rect x="15" y="33" width="12" height="3" rx="1" />
      <rect x="20" y="36" width="3" height="9" rx="1" />
      <path d="M37 11h16v11c0 9-8 13-8 13s-8-4-8-13z" />
    </>
  ),
  'dual-blades': (
    <>
      <path d="M13 11l5-2 22 41-5 3z" />
      <path d="M51 11l-5-2-22 41 5 3z" />
    </>
  ),
  hammer: (
    <>
      <rect x="14" y="9" width="36" height="17" rx="4" />
      <rect x="29" y="26" width="6" height="30" rx="3" />
    </>
  ),
  'hunting-horn': (
    <>
      <path
        d="M16 42c0-13 10-23 23-23 7 0 12 4 12 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="16" cy="44" r="6" />
      <circle cx="45" cy="40" r="3" />
      <rect x="46.5" y="27" width="2.5" height="13" />
    </>
  ),
  lance: (
    <>
      <rect x="6" y="30" width="52" height="5" rx="2.5" transform="rotate(45 32 32)" />
      <path d="M50 6l6 6-9 9-6-6z" />
      <circle cx="20" cy="44" r="4.5" />
    </>
  ),
  gunlance: (
    <>
      <rect x="6" y="30" width="50" height="5" rx="2.5" transform="rotate(45 32 32)" />
      <path d="M50 6l6 6-8 8-6-6z" />
      <rect x="34" y="20" width="11" height="11" rx="1.5" transform="rotate(45 39.5 25.5)" />
      <circle cx="18" cy="46" r="4" />
    </>
  ),
  'switch-axe': (
    <>
      <rect x="6" y="33" width="46" height="5" rx="2.5" transform="rotate(45 30 35)" />
      <path d="M43 9q13 6 9 23l-11-3q3-9-4-14z" />
    </>
  ),
  'charge-blade': (
    <>
      <path d="M12 10h18v15c0 9-9 13-9 13s-9-4-9-13z" />
      <path d="M40 8h5l-1 39h-3z" />
      <rect x="35" y="46" width="14" height="3" rx="1" />
    </>
  ),
  'insect-glaive': (
    <>
      <rect x="8" y="30" width="48" height="5" rx="2.5" transform="rotate(45 32 32)" />
      <path d="M49 7l7 7-4 4-7-7z" />
      <circle cx="15" cy="49" r="3" />
      <path
        d="M15 49l-7-4M15 49l-7 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </>
  ),
  'light-bowgun': (
    <>
      <rect x="20" y="19" width="8" height="6" rx="1" />
      <path d="M10 25h30l9 6v6h-7l-4 6h-6v-6H10z" />
      <rect x="30" y="37" width="6" height="11" rx="1.5" />
    </>
  ),
  'heavy-bowgun': (
    <>
      <rect x="2" y="25" width="6" height="13" rx="1" />
      <path d="M8 24h34l13 5v8H42l-4 8h-8v-8H8z" />
      <circle cx="22" cy="40" r="7" />
      <circle cx="22" cy="40" r="2.5" fill="var(--bg-card, #251d13)" />
    </>
  ),
  bow: (
    <>
      <path
        d="M44 5C20 18 20 46 44 59"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path d="M44 5v54" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M18 32h30" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M50 32l-7-4v8z" />
    </>
  ),
}

export default function WeaponIcon({ id, className }) {
  const content = ICONS[id]
  if (!content) return null
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="currentColor"
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      {content}
    </svg>
  )
}
