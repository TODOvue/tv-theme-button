<template>
  <TvThemeButton
    button-color="#6F4E37"
    knob-color="#C0C0C0"
    sun-color="#FFD700"
    moon-color="#E0FFFF"
    @change-theme="changeTheme"
    size="lg"
  />
</template>

<script setup>
import { TvThemeButton } from "@todovue/tv-theme-button";
import "@todovue/tv-theme-button/style.css";

const changeTheme = (theme) => {
  console.log("Theme changed to:", theme);
};
</script>
