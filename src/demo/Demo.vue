<script setup>
import TvDemo from '@todovue/tv-demo';
import { defineAsyncComponent } from 'vue';

const TvThemeButton = defineAsyncComponent(() => import('../components/TvThemeButton.vue'));
import { demos } from "../utils/mocks.js";
</script>

<template>
  <tv-demo
    :component="TvThemeButton"
    :variants="demos"
    name-component="TvThemeButton"
    npm-install="@todovue/tv-theme-button"
    source-link="https://github.com/TODOvue/tv-theme-button"
    url-clone="https://github.com/TODOvue/tv-theme-button.git"
    version="1.0.0"
  />
</template>
