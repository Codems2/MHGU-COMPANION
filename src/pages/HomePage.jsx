import { Link } from 'react-router-dom'
import { WEAPON_TYPES } from '../data/weaponTypes.js'
import { getBuildsForWeapon } from '../data/builds/index.js'

export default function HomePage() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Elige tu arma, cazador</h1>
        <p className="hero-sub">
          Selecciona un tipo de arma y te mostraré las mejores builds, su
          progresión paso a paso, los materiales necesarios y dónde farmearlos.
        </p>
      </section>

      <div className="weapon-grid">
        {WEAPON_TYPES.map((w) => {
          const count = getBuildsForWeapon(w.id).length
          const inner = (
            <>
              <span className="weapon-icon" aria-hidden>
                {w.icon}
              </span>
              <span className="weapon-name">{w.name}</span>
              <span className="weapon-en">{w.nameEn}</span>
              <span className="weapon-short">{w.short}</span>
              {w.available ? (
                <span className="weapon-badge available">
                  {count} build{count !== 1 ? 's' : ''} ·{' '}
                  {w.category === 'ranged' ? 'A distancia' : 'Cuerpo a cuerpo'}
                </span>
              ) : (
                <span className="weapon-badge soon">Próximamente</span>
              )}
            </>
          )

          return w.available ? (
            <Link key={w.id} to={`/arma/${w.id}`} className="weapon-card">
              {inner}
            </Link>
          ) : (
            <div key={w.id} className="weapon-card disabled" aria-disabled>
              {inner}
            </div>
          )
        })}
      </div>
    </div>
  )
}
