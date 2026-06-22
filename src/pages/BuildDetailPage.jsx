import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getBuild } from '../data/builds/index.js'
import { getWeaponType } from '../data/weaponTypes.js'
import { getSkill } from '../data/skills.js'
import { getMaterial } from '../data/materials.js'
import { buildFarmingList, groupByMonster } from '../data/farmingList.js'
import { useProgress } from '../hooks/useProgress.js'

const TABS = [
  { id: 'overview', label: 'Resumen' },
  { id: 'progression', label: 'Progresión' },
  { id: 'weapon', label: 'Arma' },
  { id: 'armor', label: 'Armadura' },
  { id: 'farming', label: 'Farmeo' },
]

const methodIcon = {
  Talar: '🔪',
  Recompensa: '🏆',
  Captura: '🪤',
  'Romper parte': '💢',
  Recolectar: '🌿',
  Minar: '⛏️',
  'Soborno/Otro': '💰',
}

export default function BuildDetailPage() {
  const { buildId } = useParams()
  const build = getBuild(buildId)
  const [tab, setTab] = useState('overview')

  if (!build) {
    return (
      <div className="empty-state">
        <p>No se encontró esa build.</p>
        <Link to="/" className="btn">Volver al inicio</Link>
      </div>
    )
  }

  const weapon = getWeaponType(build.weaponType)

  return (
    <div className="build-detail">
      <div className="breadcrumb">
        <Link to={`/arma/${build.weaponType}`}>← {weapon?.name}</Link>
      </div>

      <header className="detail-head">
        <h1>{build.name}</h1>
        <p className="detail-tagline">{build.tagline}</p>
        <div className="build-meta">
          <span className="meta-chip">⚙️ {build.difficulty}</span>
          <span className="meta-chip">🎯 {build.rankFocus}</span>
          <span className="meta-chip">🧩 {build.style}</span>
        </div>
      </header>

      <nav className="tabs" role="tablist">
        {TABS.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={tab === t.id}
            className={`tab ${tab === t.id ? 'active' : ''}`}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </nav>

      <div className="tab-panel">
        {tab === 'overview' && <OverviewTab build={build} />}
        {tab === 'progression' && <ProgressionTab build={build} />}
        {tab === 'weapon' && <WeaponTab build={build} />}
        {tab === 'armor' && <ArmorTab build={build} />}
        {tab === 'farming' && <FarmingTab build={build} />}
      </div>
    </div>
  )
}

function OverviewTab({ build }) {
  return (
    <div className="overview">
      <p className="lead">{build.summary}</p>

      <div className="two-col">
        <div className="info-block">
          <h3>Estilo de juego</h3>
          <p>{build.playstyle}</p>
        </div>
        <div className="info-block">
          <h3>Habilidades clave</h3>
          <ul className="skill-list">
            {build.skills.map((sid) => {
              const s = getSkill(sid)
              return (
                <li key={sid} className="skill-item">
                  <strong>{s?.name || sid}</strong>
                  <span className="skill-en">{s?.nameEn}</span>
                  <p>{s?.effect}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div className="two-col">
        <div className="info-block pros">
          <h3>👍 Ventajas</h3>
          <ul>
            {build.pros.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
        <div className="info-block cons">
          <h3>👎 Inconvenientes</h3>
          <ul>
            {build.cons.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      </div>

      {(build.decorations?.length || build.charm) && (
        <div className="info-block">
          <h3>Joyas y amuleto</h3>
          {build.charm && <p><strong>Amuleto:</strong> {build.charm}</p>}
          {build.decorations?.length > 0 && (
            <ul>
              {build.decorations.map((d, i) => (
                <li key={i}>
                  <strong>{d.name}</strong> — {d.gives}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}

function ProgressionTab({ build }) {
  const { done, toggle, reset } = useProgress(build.id)

  const allObjectives = build.progression.flatMap((p, pi) =>
    p.objectives.map((_, oi) => `${pi}-${oi}`)
  )
  const completed = allObjectives.filter((k) => done[k]).length
  const pct = allObjectives.length
    ? Math.round((completed / allObjectives.length) * 100)
    : 0

  return (
    <div className="progression">
      <div className="progress-header">
        <div>
          <h3>Tu progreso</h3>
          <p className="muted">
            {completed} / {allObjectives.length} objetivos · {pct}%
          </p>
        </div>
        <button className="btn-ghost" onClick={reset}>
          Reiniciar
        </button>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>

      <ol className="phase-list">
        {build.progression.map((phase, pi) => (
          <li key={pi} className="phase">
            <div className="phase-head">
              <span className="phase-num">{phase.phase}</span>
              <div>
                <span className="phase-rank">{phase.rank}</span>
                <h4>{phase.title}</h4>
              </div>
            </div>
            <p className="phase-body">{phase.body}</p>
            <ul className="objectives">
              {phase.objectives.map((obj, oi) => {
                const key = `${pi}-${oi}`
                return (
                  <li key={oi}>
                    <label className={done[key] ? 'checked' : ''}>
                      <input
                        type="checkbox"
                        checked={!!done[key]}
                        onChange={() => toggle(key)}
                      />
                      <span>{obj}</span>
                    </label>
                  </li>
                )
              })}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  )
}

function WeaponTab({ build }) {
  const w = build.weapon
  return (
    <div className="weapon-tab">
      <div className="final-weapon">
        <h3>{w.finalName}</h3>
        <div className="stat-grid">
          <Stat label="Ataque" value={w.finalStats.attack} />
          <Stat label="Afinidad" value={w.finalStats.affinity} />
          <Stat label="Filo" value={w.finalStats.sharpness} />
          <Stat label="Elemento" value={w.element} />
          <Stat label="Ranuras" value={w.finalStats.slots} />
        </div>
      </div>

      <h3 className="section-title">Árbol de mejora</h3>
      <ol className="upgrade-tree">
        {w.tree.map((node, i) => (
          <li key={i} className="tree-node">
            <div className="tree-node-head">
              <span className={`rank-tag rank-${node.rank.toLowerCase()}`}>{node.rank}</span>
              <strong>{node.name}</strong>
              <span className="node-atk">ATQ {node.attack}</span>
            </div>
            {node.note && <p className="node-note">{node.note}</p>}
            <MaterialChips materials={node.materials} />
          </li>
        ))}
      </ol>
    </div>
  )
}

function ArmorTab({ build }) {
  const a = build.armor
  return (
    <div className="armor-tab">
      {a.note && <p className="lead">{a.note}</p>}
      <div className="armor-list">
        {a.pieces.map((piece, i) => (
          <div key={i} className="armor-piece">
            <div className="armor-piece-head">
              <span className="armor-slot">{piece.slot}</span>
              <strong>{piece.name}</strong>
              <span className={`rank-tag rank-${piece.rank.toLowerCase()}`}>{piece.rank}</span>
            </div>
            {piece.skillsGiven && (
              <p className="armor-skills">🧠 {piece.skillsGiven}</p>
            )}
            <MaterialChips materials={piece.materials} />
          </div>
        ))}
      </div>
    </div>
  )
}

function FarmingTab({ build }) {
  const list = useMemo(() => buildFarmingList(build), [build])
  const groups = useMemo(() => groupByMonster(list), [list])

  return (
    <div className="farming-tab">
      <p className="lead">
        Lista de farmeo consolidada para toda la build (arma + armadura). Las
        cantidades suman todos los pasos de mejora. Las tasas son orientativas.
      </p>

      {groups.map((group) => (
        <div key={group.monster} className="farm-group">
          <h3 className="farm-group-title">
            {group.monster === 'Recolección / Minería' ? '🌿 ' : '🐲 '}
            {group.monster}
          </h3>
          <div className="farm-items">
            {group.items.map((item) => (
              <div key={item.id} className={`farm-item ${item.rare ? 'rare' : ''}`}>
                <div className="farm-item-head">
                  <span className="farm-qty">×{item.qty}</span>
                  <strong>{item.name}</strong>
                  <span className={`rank-tag rank-${item.rank.toLowerCase()}`}>{item.rank}</span>
                  {item.rare && <span className="rare-tag">RARO</span>}
                </div>
                <ul className="source-list">
                  {item.sources.map((s, i) => (
                    <li key={i}>
                      <span className="src-method">
                        {methodIcon[s.method] || '•'} {s.method}
                      </span>
                      {s.part && <span className="src-detail"> · {s.part}</span>}
                      {s.location && <span className="src-detail"> · {s.location}</span>}
                      {s.rate && <span className="src-rate">{s.rate}</span>}
                      {s.notes && <span className="src-notes">{s.notes}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function MaterialChips({ materials }) {
  if (!materials?.length) return null
  return (
    <div className="mat-chips">
      {materials.map((m, i) => (
        <MaterialChip key={i} id={m.id} qty={m.qty} />
      ))}
    </div>
  )
}

function MaterialChip({ id, qty }) {
  const mat = getMaterial(id)
  return (
    <span className={`mat-chip ${mat?.rare ? 'rare' : ''}`} title={mat?.nameEn || id}>
      <span className="mat-qty">×{qty}</span> {mat?.name || id}
    </span>
  )
}

function Stat({ label, value }) {
  return (
    <div className="stat">
      <span className="stat-label">{label}</span>
      <span className="stat-value">{value}</span>
    </div>
  )
}
