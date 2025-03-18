<script setup>
import useThemeButton from "../composable/useThemeButton.js"
const emit = defineEmits(["change-theme"]);

const {
  theme,
  changeTheme,
  iconContent,
} = useThemeButton(emit);
</script>

<template>
  <div class="tv-theme-button">
    <div
      class="tv-theme-switch"
      :class="{ 'tv-theme-active': theme === 'dark' }"
      @click="changeTheme"
    >
      <span>
        <i
          v-html="iconContent('dark')"
          class="tv-theme-icon"
        ></i>
      </span>
      <span>
        <i
          v-html="iconContent('light')"
          class="tv-theme-icon"
        ></i>
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss" src="../assets/scss/style.scss"></style>
