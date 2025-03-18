<!-- This component save theme "light" or "dark" in the localStorage  -->
<template>
  <tv-theme-button @change-theme="changeValue"/>
</template>

<script setup>
import TvThemeButton from "@todovue/tvthebutton";

const changeValue = (value) => {
  console.log(value); // return light or dark
};
</script>
