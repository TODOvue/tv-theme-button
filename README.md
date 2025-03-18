<p align="center"><img width="150" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/logo.png?alt=media&token=d8eb592f-e4a9-4b02-8aff-62d337745f41" alt="TODOvue logo">
</p>

# TODOvue ThemeButton
###### TvThemeButton is a custom theme button component for web applications.

[![npm](https://img.shields.io/npm/v/@todovue/tvthemebutton.svg)](https://www.npmjs.com/package/@todovue/tvthemebutton) [![Netlify Status](https://api.netlify.com/api/v1/badges/cb4b8651-1062-4a0b-aa47-28437cbf9fdc/deploy-status)](https://app.netlify.com/sites/todovue-theme-button/deploys) [![npm](https://img.shields.io/npm/dm/@todovue/tvthemebutton.svg)](https://www.npmjs.com/package/@todovue/tvthemebutton) [![npm](https://img.shields.io/npm/dt/@todovue/tvthemebutton.svg)](https://www.npmjs.com/package/@todovue/tvthemebutton) ![GitHub](https://img.shields.io/github/license/TODOvue/todovue-theme-button) ![GitHub Release Date](https://img.shields.io/github/release-date/TODOvue/todovue-theme-button)

## Table of Contents
- [Demo](https://todovue-theme-button.netlify.app/)
- [Installation](#installation)
- [Usage](#usage)
- [Events](#events)
- [Development](#development)
- [Changelog](https://github.com/TODOvue/todovue-theme-button/blob/main/CHANGELOG.md)
- [Contributing](https://github.com/TODOvue/todovue-theme-button/blob/main/CONTRIBUTING.md)
- [License](https://github.com/TODOvue/todovue-theme-button/blob/main/LICENSE)

## Installation
Install with npm or yarn
```bash
npm install @todovue/tvthemebutton
```
```bash
yarn add @todovue/tvthemebutton
```
Import
```js
import TvThemeButton from '@todovue/tvthemebutton'
```

You can also import it directly in the **main.js** file, so you don't have to import it in the pages
```js
import { createApp } from "vue";
import App from "./App.vue";
import TvThemeButton from '@todovue/tvthemebutton'

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
import TvThemeButton from "@todovue/tvthebutton";

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
git clone https://github.com/TODOvue/todovue-theme-button.git
cd todovue-theme-button
yarn install
```
---
## License
[MIT](https://github.com/TODOvue/todovue-theme-button/blob/main/LICENSE)
