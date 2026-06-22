# MHGU Companion ⚔️

Companion interactivo (no oficial) para **Monster Hunter Generations Ultimate**.

Elige un tipo de arma y la web te muestra las **mejores builds**, te guía por su
**progresión paso a paso**, te dice los **materiales necesarios** y **dónde
farmearlos**.

## ✨ Funcionalidades

- **Selector de arma**: los 14 tipos de arma del juego.
- **Builds curadas** por arma, con dificultad, estilo de juego, ventajas e
  inconvenientes.
- **Guía de progresión** por fases (Rango Bajo → Alto → G) con objetivos
  marcables; tu progreso se guarda en el navegador (localStorage).
- **Árbol de mejora del arma** con los materiales de cada paso.
- **Set de armadura** pieza a pieza con las habilidades que aporta.
- **Lista de farmeo consolidada**: agrupa todos los materiales de la build por
  monstruo / fuente, con método de obtención y tasas orientativas.

## 🚀 Empezar

```bash
npm install
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # genera dist/ para producción
npm run preview  # previsualiza el build de producción
```

## 🧱 Estructura

```
src/
  data/
    weaponTypes.js     # los 14 tipos de arma
    materials.js       # catálogo de materiales + fuentes de farmeo
    skills.js          # catálogo de habilidades
    farmingList.js     # genera la lista de farmeo de una build
    builds/
      greatsword.js    # builds de Gran Espada
      longsword.js     # builds de Espada Larga
      index.js         # agrega todas las builds
  pages/               # Home, lista de builds, detalle de build
  hooks/useProgress.js # progreso del usuario (localStorage)
```

## ➕ Cómo añadir una build o un arma

1. **Materiales nuevos** → añádelos a `src/data/materials.js` con sus fuentes.
2. **Habilidades nuevas** → añádelas a `src/data/skills.js`.
3. **Build nueva** → créala en el archivo del arma correspondiente (o crea uno
   nuevo, p. ej. `dualBlades.js`) siguiendo la forma de las builds existentes y
   regístralo en `src/data/builds/index.js`.
4. **Arma nueva disponible** → pon `available: true` en `src/data/weaponTypes.js`.

La app valida sola que no haya referencias rotas si reutilizas los `id` del
catálogo.

## 📊 Sobre los datos

Los datos (materiales, tasas, builds) están **curados a partir de información de
la comunidad** (wikis tipo Kiranico) y son **orientativos**. Las tasas exactas
pueden variar según la versión del juego. Las contribuciones y correcciones son
bienvenidas.

## 📦 Despliegue en GitHub Pages

El repo incluye un workflow (`.github/workflows/deploy.yml`) que construye y
publica el sitio en GitHub Pages al hacer push a la rama principal. Asegúrate de
activar Pages en *Settings → Pages → Source: GitHub Actions*. El `base` de Vite
está configurado para el repo `mhgu-companion`; ajústalo en `vite.config.js` si
tu repo tiene otro nombre.

---

Monster Hunter © CAPCOM. Este es un proyecto de fans sin ánimo de lucro.
