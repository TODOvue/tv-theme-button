<script setup>
import TvDemo from '@todovue/tvdemo';
import { defineAsyncComponent } from 'vue';

const TvThemeButton = defineAsyncComponent(() => import('../components/TvThemeButton.vue'));
import { demos } from "../utils/mocks.js";
</script>

<template>
  <tv-demo
    :component="TvThemeButton"
    :variants="demos"
    name-component="TvThemeButton"
    npm-install="@todovue/tvthemebutton"
    source-link="https://github.com/TODOvue/todovue-theme-button"
    url-clone="https://github.com/TODOvue/todovue-theme-button.git"
    version="1.0.0"
  />
</template>
