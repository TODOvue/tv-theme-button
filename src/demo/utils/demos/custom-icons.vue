<script setup>
import { ref } from 'vue';
import { TvThemeButton } from "@todovue/tv-theme-button";
import "@todovue/tv-theme-button/style.css";

const currentTheme = ref('dark');

const inlineDarkSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
</svg>`;

const inlineLightSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
</svg>`;

const handleThemeChange = (theme) => {
  currentTheme.value = theme;
  console.log('Theme changed to:', theme);
};
</script>

<template>
  <div class="custom-icons-demo">
    <h3>Custom Icons Demo</h3>

    <!-- Example 1: Using external URLs -->
    <div class="demo-section">
      <h4>1. External URLs</h4>
      <tv-theme-button
        dark-icon="https://api.iconify.design/ph/moon-stars-fill.svg"
        light-icon="https://api.iconify.design/ph/sun-fill.svg"
        @change-theme="handleThemeChange"
      />
    </div>

    <!-- Example 2: Using local assets -->
    <div class="demo-section">
      <h4>2. Local Assets (relative paths)</h4>
      <tv-theme-button
        dark-icon="/icons/custom-moon.svg"
        light-icon="/icons/custom-sun.svg"
        @change-theme="handleThemeChange"
      />
    </div>

    <!-- Example 3: Using inline SVG -->
    <div class="demo-section">
      <h4>3. Inline SVG</h4>
      <tv-theme-button
        :dark-icon="inlineDarkSvg"
        :light-icon="inlineLightSvg"
        @change-theme="handleThemeChange"
      />
    </div>

    <!-- Example 4: Default icons (no props) -->
    <div class="demo-section">
      <h4>4. Default Icons (built-in)</h4>
      <tv-theme-button @change-theme="handleThemeChange" />
    </div>

    <div class="theme-output">
      <p>Current Theme: <strong>{{ currentTheme }}</strong></p>
    </div>
  </div>
</template>



