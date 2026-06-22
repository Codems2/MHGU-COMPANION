import { greatswordBuilds } from './greatsword.js'
import { longswordBuilds } from './longsword.js'

// Todas las builds disponibles. Para añadir un arma nueva, crea su archivo
// (p. ej. dualBlades.js) y agrégalo aquí.
export const ALL_BUILDS = [...greatswordBuilds, ...longswordBuilds]

export const getBuildsForWeapon = (weaponTypeId) =>
  ALL_BUILDS.filter((b) => b.weaponType === weaponTypeId)

export const getBuild = (buildId) => ALL_BUILDS.find((b) => b.id === buildId)
