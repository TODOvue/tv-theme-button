<script setup>
import { defineAsyncComponent } from 'vue';

const TvThemeButton = defineAsyncComponent(() => import('../components/TvThemeButton.vue'));
import { demos } from './utils/mocks.js';
</script>

<template>
  <TvDemo
    :component="TvThemeButton"
    :variants="demos"
    :manual-emits="['change-theme']"
    component-name="TvThemeButton"
    npm-install="@todovue/tv-theme-button"
    source-link="https://github.com/TODOvue/tv-theme-button"
    url-clone="https://github.com/TODOvue/tv-theme-button.git"
    version="1.1.1"
  />
</template>
