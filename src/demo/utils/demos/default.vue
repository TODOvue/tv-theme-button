<!-- This component save theme "light" or "dark" in the localStorage  -->
<!-- Key: 'theme'  -->
<template>
  <tv-theme-button @change-theme="changeValue"/>
</template>

<script setup>
import { TvThemeButton } from "@todovue/tv-theme-button";
import "@todovue/tv-theme-button/style.css";

const changeValue = (value) => {
  console.log(value); // return light or dark
};
</script>
