import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base se ajusta para despliegue en GitHub Pages (repo: mhgu-companion).
// En local (dev) usamos '/'.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/mhgu-companion/' : '/',
}))
