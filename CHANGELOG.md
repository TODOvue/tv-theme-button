# Changelog

All notable changes to `@todovue/tv-theme-button` will be documented in this file.

This project adheres to [Semantic Versioning](https://semver.org/).

---
## [1.0.1] - 2025-10-19
### 🛠️ Changed
- The library build now uses `src/entry.ts` (exports both the component and the plugin) instead of directly exporting the `.vue` file.
- CSS injection via JS has been removed for the library build (it is only kept for the demo), generating a `tv-theme-button.css` file optimized for SSR/Nuxt.
- Changed node-version to workflows release.yml to 20.

### ✨ Added
- Plugin installation support: `app.use(TvThemeButton)` or `app.use(TvThemeButtonPlugin)`.
- Explicit export of the style file: `import '@todovue/tv-theme-button/style.css'`.
- Documentation for usage in SSR and Nuxt 3 applications.

## [1.0.0] - 2025-05-05

### ✨ Added

- Initial release of `TvThemeButton`
- Theme toggle functionality between `light` and `dark` modes
- `change-theme` event to emit the selected theme

[1.0.1]: https://github.com/TODOvue/tv-theme-button/pull/3/files
[1.0.0]: https://github.com/TODOvue/tv-theme-button/pull/2/files
