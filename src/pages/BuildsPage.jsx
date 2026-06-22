import { Link, useParams } from 'react-router-dom'
import { getWeaponType } from '../data/weaponTypes.js'
import { getBuildsForWeapon } from '../data/builds/index.js'

const difficultyClass = {
  Principiante: 'diff-beginner',
  Intermedio: 'diff-intermediate',
  Avanzado: 'diff-advanced',
}

export default function BuildsPage() {
  const { weaponId } = useParams()
  const weapon = getWeaponType(weaponId)
  const builds = getBuildsForWeapon(weaponId)

  if (!weapon) {
    return (
      <div className="empty-state">
        <p>No se encontró ese tipo de arma.</p>
        <Link to="/" className="btn">Volver al inicio</Link>
      </div>
    )
  }

  return (
    <div className="builds-page">
      <div className="page-head">
        <span className="page-head-icon" aria-hidden>{weapon.icon}</span>
        <div>
          <h1>{weapon.name}</h1>
          <p className="muted">{weapon.short}</p>
        </div>
      </div>

      <h2 className="section-title">Mejores builds</h2>

      {builds.length === 0 ? (
        <div className="empty-state">
          <p>Todavía no hay builds para esta arma. ¡Pronto!</p>
        </div>
      ) : (
        <div className="build-list">
          {builds.map((b) => (
            <Link key={b.id} to={`/build/${b.id}`} className="build-card">
              <div className="build-card-top">
                <h3>{b.name}</h3>
                <span className={`pill ${difficultyClass[b.difficulty] || ''}`}>
                  {b.difficulty}
                </span>
              </div>
              <p className="build-tagline">{b.tagline}</p>
              <div className="build-meta">
                <span className="meta-chip">🎯 {b.rankFocus}</span>
                <span className="meta-chip">🧩 {b.style}</span>
              </div>
              <ul className="build-pros">
                {b.pros.slice(0, 2).map((p, i) => (
                  <li key={i}>✔ {p}</li>
                ))}
              </ul>
              <span className="build-cta">Ver progresión y materiales →</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
