# Cambios de rendimiento aplicados

## Principales mejoras

- Se eliminaron CSS externos bloqueantes no usados (`font-awesome` y `devicons`).
- La fuente de iconos `Unicons` se carga después del `load` para no bloquear el primer renderizado.
- Google Fonts pasó de `@import` bloqueante dentro del CSS a `preload` con `display=swap`.
- Se redujeron las familias/pesos de Google Fonts a los realmente usados.
- La imagen principal LCP `profile-home.webp` se precarga desde el HTML con `fetchpriority=high`.
- Las imágenes PNG pesadas se convirtieron a WebP y se redimensionaron.
- Todas las imágenes tienen `width` y `height` explícitos para evitar avisos de Lighthouse y CLS.
- Se añadieron `loading`, `decoding` y prioridades correctas a las imágenes.
- Las secciones por debajo del primer pantallazo se cargan con `React.lazy` y `Suspense`.
- Se añadió `content-visibility: auto` a las secciones no iniciales.
- Se optimizó el listener de scroll del navbar con `requestAnimationFrame` y evento pasivo.
- Se añadieron cabeceras de caché en `vercel.json` para assets estáticos.

## Reducción aproximada de imágenes principales

- `profile.png`: de 1.5 MB a `profile-about.webp` de ~6 KB.
- `portfolioPersonal.png`: de ~566 KB a WebP de ~23 KB.
- `git.png`: de ~343 KB a WebP de ~21 KB.
- `paginaPort.png`: de ~265 KB a WebP de ~19 KB.
- `LoreWeb.png`: de ~57 KB a WebP de ~10 KB.
- `multitask.png`: de ~163 KB a WebP de ~43 KB.

## Después de aplicar

Ejecuta:

```bash
npm install
npm run build
```

Luego vuelve a pasar Lighthouse en modo incógnito o desde producción, no desde `localhost` con herramientas abiertas.
