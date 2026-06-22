import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base se ajusta para despliegue en GitHub Pages. Las rutas de Pages
// distinguen mayúsculas: el repo es Codems2/MHGU-COMPANION, así que el sitio
// se sirve en https://codems2.github.io/MHGU-COMPANION/.
// En local (dev) usamos '/'.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/MHGU-COMPANION/' : '/',
}))
