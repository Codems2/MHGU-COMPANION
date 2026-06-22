import { getMaterial } from './materials.js'

// Recorre todos los materiales de un build (arma + armadura) y devuelve una
// lista consolidada con cantidades totales y sus fuentes de farmeo.
export function buildFarmingList(build) {
  const totals = new Map()

  const addMaterials = (mats) => {
    if (!mats) return
    for (const { id, qty } of mats) {
      totals.set(id, (totals.get(id) || 0) + qty)
    }
  }

  // Arma: todos los nodos del árbol de mejora.
  build.weapon?.tree?.forEach((node) => addMaterials(node.materials))
  // Armadura: cada pieza.
  build.armor?.pieces?.forEach((piece) => addMaterials(piece.materials))

  const list = [...totals.entries()].map(([id, qty]) => {
    const mat = getMaterial(id)
    return {
      id,
      qty,
      name: mat?.name || id,
      rank: mat?.rank || '?',
      rare: mat?.rare || false,
      monster: mat?.monster || null,
      sources: mat?.sources || [],
    }
  })

  // Orden: primero por rango (LR → HR → G), luego raros al final de su rango.
  const rankOrder = { LR: 0, HR: 1, G: 2, '?': 3 }
  list.sort((a, b) => {
    if (rankOrder[a.rank] !== rankOrder[b.rank]) return rankOrder[a.rank] - rankOrder[b.rank]
    if (a.rare !== b.rare) return a.rare ? 1 : -1
    return a.name.localeCompare(b.name, 'es')
  })

  return list
}

// Agrupa los materiales por monstruo/fuente principal para una "ruta de farmeo".
export function groupByMonster(farmingList) {
  const groups = new Map()
  for (const item of farmingList) {
    const key = item.monster || 'Recolección / Minería'
    if (!groups.has(key)) groups.set(key, [])
    groups.get(key).push(item)
  }
  return [...groups.entries()].map(([monster, items]) => ({ monster, items }))
}
