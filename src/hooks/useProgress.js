import { useCallback, useEffect, useState } from 'react'

// Guarda el progreso del usuario (objetivos completados por build) en
// localStorage, para que la guía recuerde por dónde va el cazador.
const STORAGE_KEY = 'mhgu-companion-progress-v1'

function readStore() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}
  } catch {
    return {}
  }
}

export function useProgress(buildId) {
  const [done, setDone] = useState({})

  useEffect(() => {
    const store = readStore()
    setDone(store[buildId] || {})
  }, [buildId])

  const toggle = useCallback(
    (key) => {
      setDone((prev) => {
        const next = { ...prev, [key]: !prev[key] }
        const store = readStore()
        store[buildId] = next
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(store))
        } catch {
          /* almacenamiento no disponible: el progreso será solo en memoria */
        }
        return next
      })
    },
    [buildId]
  )

  const reset = useCallback(() => {
    setDone({})
    const store = readStore()
    delete store[buildId]
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(store))
    } catch {
      /* sin almacenamiento */
    }
  }, [buildId])

  return { done, toggle, reset }
}
