<template>
  <TvThemeButton
    :is-rounded="false"
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
