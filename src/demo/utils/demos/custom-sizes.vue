<template>
  <TvThemeButton
    size="lg"
    @change-theme="changeTheme"
    style="margin-bottom: 20px"
  />
  <TvThemeButton
    size="md"
    @change-theme="changeTheme"
    style="margin-bottom: 20px"
  />
  <TvThemeButton
    size="sm"
    @change-theme="changeTheme"
  />
</template>

<script setup>
import { TvThemeButton } from "@todovue/tv-theme-button";
import "@todovue/tv-theme-button/style.css";

const changeTheme = (theme) => {
  console.log("Theme changed to:", theme);
};
</script>
