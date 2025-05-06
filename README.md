<p align="center"><img width="150" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/logo.png?alt=media&token=d8eb592f-e4a9-4b02-8aff-62d337745f41" alt="TODOvue logo">
</p>

# TODOvue ThemeButton
###### vThemeButton is a lightweight and customizable Vue component that allows users to switch between light and dark themes in your application. Designed for modern interfaces, it emits the selected theme and integrates seamlessly into any Vue 3 project.

[![npm](https://img.shields.io/npm/v/@todovue/tv-theme-button.svg)](https://www.npmjs.com/package/@todovue/tv-theme-button) [![Netlify Status](https://api.netlify.com/api/v1/badges/cb4b8651-1062-4a0b-aa47-28437cbf9fdc/deploy-status)](https://app.netlify.com/sites/tv-theme-button/deploys) [![npm](https://img.shields.io/npm/dm/@todovue/tv-theme-button.svg)](https://www.npmjs.com/package/@todovue/tv-theme-button) [![npm](https://img.shields.io/npm/dt/@todovue/tv-theme-button.svg)](https://www.npmjs.com/package/@todovue/tv-theme-button) ![GitHub](https://img.shields.io/github/license/TODOvue/tv-theme-button) ![GitHub Release Date](https://img.shields.io/github/release-date/TODOvue/tv-theme-button)

## Table of Contents
- [Demo](https://tv-theme-button.netlify.app/)
- [Installation](#installation)
- [Usage](#usage)
- [Events](#events)
- [Development](#development)
- [Changelog](https://github.com/TODOvue/tv-theme-button/blob/main/CHANGELOG.md)
- [Contributing](https://github.com/TODOvue/tv-theme-button/blob/main/CONTRIBUTING.md)
- [License](https://github.com/TODOvue/tv-theme-button/blob/main/LICENSE)

## Installation
Install with npm or yarn
```bash
npm install @todovue/tv-theme-button
```
```bash
yarn add @todovue/tv-theme-button
```
Import
```js
import TvThemeButton from '@todovue/tv-theme-button'
```

You can also import it directly in the **main.js** file, so you don't have to import it in the pages
```js
import { createApp } from "vue";
import App from "./App.vue";
import TvThemeButton from '@todovue/tv-theme-button'

const app = createApp(App);
app.component("TvThemeButton", TvThemeButton);
app.mount("#app");
```

## Usage
```html
<template>
  <tv-theme-button
    @change-theme="changeValue"
  />
</template>

<script setup>
import TvThemeButton from "@todovue/tv-theme-button";

const changeValue = (value) => {
  console.log(value); // return light or dark
};
</script>
```

## Events
| Name         | Description                             |
|--------------|-----------------------------------------|
| change-theme | Return the value of the theme selected. |

## Development
Clone the repository and install the dependencies
```bash
git clone https://github.com/TODOvue/tv-theme-button.git
cd tv-theme-button
yarn install
```
---
## License
[MIT](https://github.com/TODOvue/tv-theme-button/blob/main/LICENSE)
