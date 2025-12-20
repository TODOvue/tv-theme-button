<p align="center"><img width="150" src="https://res.cloudinary.com/dcdfhi8qz/image/upload/v1763663056/uqqtkgp1lg3xdplutpga.png" alt="TODOvue logo">
</p>

# TODOvue ThemeButton (TvThemeButton)
A lightweight and customizable Vue 3 theme switcher component that allows users to toggle between light and dark modes. Designed for modern interfaces, it persists the theme preference in localStorage and integrates seamlessly into any Vue 3 project or SSR environment (e.g. Nuxt 3).

[![npm](https://img.shields.io/npm/v/@todovue/tv-theme-button.svg)](https://www.npmjs.com/package/@todovue/tv-theme-button)
[![npm downloads](https://img.shields.io/npm/dm/@todovue/tv-theme-button.svg)](https://www.npmjs.com/package/@todovue/tv-theme-button)
[![npm total downloads](https://img.shields.io/npm/dt/@todovue/tv-theme-button.svg)](https://www.npmjs.com/package/@todovue/tv-theme-button)
![License](https://img.shields.io/github/license/TODOvue/tv-theme-button)
![Release Date](https://img.shields.io/github/release-date/TODOvue/tv-theme-button)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@todovue/tv-theme-button)
![Node Version](https://img.shields.io/node/v/@todovue/tv-theme-button)
![Last Commit](https://img.shields.io/github/last-commit/TODOvue/tv-theme-button)
![Stars](https://img.shields.io/github/stars/TODOvue/tv-theme-button?style=social)

> Demo: https://ui.todovue.blog/themebutton

---
## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Quick Start (SPA)](#quick-start-spa)
- [Nuxt 3 / SSR Usage](#nuxt-3--ssr-usage)
- [Component Registration Options](#component-registration-options)
- [Props](#props)
- [Events](#events)
- [Customization (Styles / Theming)](#customization-styles--theming)
- [Accessibility](#accessibility)
- [SSR Notes](#ssr-notes)
- [Roadmap](#roadmap)
- [Development](#development)
- [Changelog](https://github.com/TODOvue/tv-theme-button/blob/main/CHANGELOG.md)
- [Contributing](https://github.com/TODOvue/tv-theme-button/blob/main/CONTRIBUTING.md)
- [License](https://github.com/TODOvue/tv-theme-button/blob/main/LICENSE)

---
## Features
- **Simple theme toggle**: Switch between light and dark modes with a single click
- **Persistent state**: Automatically saves theme preference to localStorage (key: `theme`)
- **Animated transition**: Smooth visual toggle animation between states
- **Bundled SVG icons**: Pre-bundled light and dark mode icons (no external dependencies)
- **Event emission**: Emits `change-theme` event with the selected theme value
- **SSR compatible**: Works in both SPA and Server-Side Rendered (Nuxt 3) environments
- **Lightweight**: Minimal footprint with CSS injected automatically
- **Vue 3 Composition API**: Built with modern Vue 3 patterns using composables
- **Tree-shake friendly**: Vue marked as external in library build
- **TypeScript support**: Includes type definitions

---
## Installation
Using npm:
```bash
npm install @todovue/tv-theme-button
```
Using yarn:
```bash
yarn add @todovue/tv-theme-button
```
Using pnpm:
```bash
pnpm add @todovue/tv-theme-button
```

---
## Quick Start (SPA)
### Import Styles
You must explicitly import the component's stylesheet in your application:

```ts
// main.ts or main.js
import { createApp } from 'vue'
import App from './App.vue'

// Import the component styles
import { TvThemeButton } from '@todovue/tv-theme-button'
import '@todovue/tv-theme-button/style.css' // Import styles

const app = createApp(App)
app.component('TvThemeButton', TvThemeButton)
app.mount('#app')
```

### Global registration (main.js / main.ts):
```js
import { createApp } from 'vue'
import App from './App.vue'
import TvThemeButton from '@todovue/tv-theme-button'
import '@todovue/tv-theme-button/style.css'

createApp(App)
  .use(TvThemeButton) // enables <TvThemeButton /> globally
  .mount('#app')
```

---
## Nuxt 3 / SSR Usage
### Import Styles in Nuxt Config
Add the stylesheet to your `nuxt.config.ts`:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@todovue/tv-theme-button/nuxt'
  ]
})
```

### Component Registration
Create a plugin file: `plugins/tv-theme-button.client.ts` (client-only is recommended for localStorage access):
```ts
import { defineNuxtPlugin } from '#app'
import TvThemeButton from '@todovue/tv-theme-button'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(TvThemeButton)
})
```

Use anywhere in your app:
```vue
<template>
  <TvThemeButton @change-theme="onThemeChange" />
</template>

<script setup>
const onThemeChange = (theme) => {
  console.log('Current theme:', theme)
}
</script>
```

### Optional direct import (no plugin):
```vue
<script setup>
import { TvThemeButton } from '@todovue/tv-theme-button'
</script>

<template>
  <TvThemeButton @change-theme="handleTheme" />
</template>
```

---
## Component Registration Options
| Approach                                                                     | When to use                                    |
|------------------------------------------------------------------------------|------------------------------------------------|
| Global via `app.use(TvThemeButton)`                                          | Many usages across app / design system install |
| Local named import `{ TvThemeButton }`                                       | Isolated / code-split contexts                 |
| Direct default import `import TvThemeButton from '@todovue/tv-theme-button'` | Single usage or manual registration            |

---
## Props
Currently, TvThemeButton has **no props**. It works out of the box with sensible defaults:
- Initial theme is loaded from localStorage (key: `theme`)
- Falls back to `'dark'` if no saved preference exists
- Icons and animations are built-in

### Future Props (Roadmap)
Planned props for upcoming versions:
- `defaultTheme`: Set initial theme ('light' | 'dark')
- `storageKey`: Customize localStorage key name
- `customIcons`: Provide your own icon components or SVG strings

---
## Events
| Event name (kebab) | Emits (camel) | Payload Type        | Description                                                   |
|--------------------|---------------|---------------------|---------------------------------------------------------------|
| `change-theme`     | `changeTheme` | `'light' \| 'dark'` | Emitted when user toggles theme. Returns current theme value. |

### Usage Example:
```vue
<template>
  <TvThemeButton @change-theme="applyTheme" />
</template>

<script setup>
const applyTheme = (theme) => {
  // Option 1: Apply CSS class to document
  document.documentElement.setAttribute('data-theme', theme)
  
  // Option 2: Update a Pinia/Vuex store
  // useThemeStore().setTheme(theme)
  
  // Option 3: Update CSS variables
  if (theme === 'dark') {
    document.documentElement.style.setProperty('--bg-color', '#1a1a1a')
    document.documentElement.style.setProperty('--text-color', '#ffffff')
  } else {
    document.documentElement.style.setProperty('--bg-color', '#ffffff')
    document.documentElement.style.setProperty('--text-color', '#000000')
  }
}
</script>
```

---
## Customization (Styles / Theming)
The component comes with default styles that can be customized using CSS variables or by overriding the scoped styles.

### CSS Variables Override:
```css
/* In your global CSS or component style */
.tv-theme-button {
  /* Customize the switch background */
  --switch-bg: #e0e0e0;
  --switch-active-bg: #333;
  --switch-size: 60px;
}

.tv-theme-icon {
  /* Customize icon colors */
  --icon-color: currentColor;
}
```

### Custom Styling:
```vue
<style>
/* Override component styles */
:deep(.tv-theme-switch) {
  border-radius: 25px;
  padding: 4px;
  background: linear-gradient(to right, #667eea 0%, #764ba2 100%);
}

:deep(.tv-theme-icon) {
  width: 24px;
  height: 24px;
}
</style>
```

### Integration with Theme Systems:
```vue
<script setup>
import { TvThemeButton } from '@todovue/tv-theme-button'
import { useDark, useToggle } from '@vueuse/core'

// Example with VueUse
const isDark = useDark()

const handleThemeChange = (theme) => {
  isDark.value = theme === 'dark'
}
</script>

<template>
  <TvThemeButton @change-theme="handleThemeChange" />
</template>
```

---
## Accessibility
- **Keyboard accessible**: The toggle button can be activated via click (mouse/touch)
- **Visual feedback**: Clear visual indication of current theme state
- **Semantic HTML**: Uses proper div/span structure with click handlers

### Recommended Improvements:
For better accessibility, wrap the component or add context:
```vue
<div role="switch" :aria-checked="currentTheme === 'dark'" aria-label="Toggle dark mode">
  <TvThemeButton @change-theme="currentTheme = $event" />
</div>
```

---
## SSR Notes
- **localStorage safe**: Component uses `onMounted` lifecycle hook to safely access localStorage only on client-side
- **No hydration issues**: Initial state is set client-side, preventing SSR/CSR mismatches
- **Vite compatible**: SVG icons are bundled via Vite's `import.meta.glob` (works in Vite + Nuxt)
- **Auto CSS injection**: Styles are automatically injected when you import the library
- **Client-side plugin recommended**: For Nuxt 3, use `.client.ts` suffix to ensure localStorage access

### Preventing Flash of Unstyled Content (FOUC):
```html
<!-- Add to your app.vue or layout -->
<script setup>
onMounted(() => {
  const theme = localStorage.getItem('theme') || 'dark'
  document.documentElement.setAttribute('data-theme', theme)
})
</script>
```

---
## Roadmap
| Feature                                      | Status      | Version |
|----------------------------------------------|-------------|---------|
| Add `defaultTheme` prop                      | Planned     | 1.1.0   |
| Add `storageKey` prop                        | Planned     | 1.1.0   |
| Custom icon slots/props                      | Planned     | 1.2.0   |
| Add ARIA attributes internally               | Planned     | 1.2.0   |
| CSS variables for easy theming               | Considering | 2.0.0   |
| Animation customization options              | Considering | 2.0.0   |
| Multiple theme support (not just light/dark) | Considering | 2.0.0   |
| Expose composable `useThemeButton` publicly  | Considering | 2.0.0   |

---
## Development
Clone the repository and install dependencies:
```bash
git clone https://github.com/TODOvue/tv-theme-button.git
cd tv-theme-button
yarn install
```

### Available Scripts:
```bash
yarn dev          # Run development server with demo playground
yarn build        # Build library for production
yarn build:demo   # Build demo site for deployment
```

Local demo is served from Vite using `index.html` + `src/demo` examples.

### Project Structure:
```
tv-theme-button/
├── src/
│   ├── components/
│   │   └── TvThemeButton.vue    # Main component
│   ├── composable/
│   │   └── useThemeButton.js    # Composable logic
│   ├── assets/
│   │   ├── icons/
│   │   │   ├── dark.svg         # Dark mode icon
│   │   │   └── light.svg        # Light mode icon
│   │   └── scss/                # Styles
│   ├── entry.ts                  # Library entry point
│   └── demo/                     # Demo playground
├── dist/                         # Build output
└── package.json
```

---
## Contributing
We welcome contributions! Please see our contributing guidelines:
- [CONTRIBUTING.md](https://github.com/TODOvue/tv-theme-button/blob/main/CONTRIBUTING.md)
- [CODE_OF_CONDUCT.md](https://github.com/TODOvue/tv-theme-button/blob/main/CODE_OF_CONDUCT.md)

### How to Contribute:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---
## License
MIT © TODOvue

See [LICENSE](https://github.com/TODOvue/tv-theme-button/blob/main/LICENSE) for more information.

---
## Changelog
See [CHANGELOG.md](https://github.com/TODOvue/tv-theme-button/blob/main/CHANGELOG.md) for version history and release notes.

---
### Attributions
Crafted with ❤️ for the TODOvue component ecosystem

**Author**: Cristhian Daza

**Links**:
- [NPM Package](https://www.npmjs.com/package/@todovue/tv-theme-button)
- [GitHub Repository](https://github.com/TODOvue/tv-theme-button)
- [Live Demo](https://tv-theme-button.netlify.app/)
- [Report Issues](https://github.com/TODOvue/tv-theme-button/issues)
