<script setup>
import useThemeButton from "../composable/useThemeButton.js"

const props = defineProps({
  darkIcon: {
    type: String,
    default: null,
    validator: (value) => !value || value.startsWith('http') || value.startsWith('/') || value.startsWith('data:') || value.includes('<svg')
  },
  lightIcon: {
    type: String,
    default: null,
    validator: (value) => !value || value.startsWith('http') || value.startsWith('/') || value.startsWith('data:') || value.includes('<svg')
  }
});

const emit = defineEmits(["change-theme"]);

const {
  theme,
  changeTheme,
  iconContent,
} = useThemeButton(emit, props);
</script>

<template>
  <div class="tv-theme-button">
    <div
      class="tv-theme-switch"
      :class="{ 'tv-theme-active': theme === 'dark' }"
      @click="changeTheme"
      role="switch"
      :aria-checked="theme === 'dark'"
      tabindex="0"
      aria-label="Toggle dark mode"
      @keydown.enter.prevent="changeTheme"
      @keydown.space.prevent="changeTheme"
    >
      <span>
        <img
          v-if="iconContent('dark').isUrl"
          :src="iconContent('dark').content"
          class="tv-theme-icon"
          alt="Dark theme icon"
        />
        <i
          v-else
          v-html="iconContent('dark').content"
          class="tv-theme-icon"
        ></i>
      </span>
      <span>
        <img
          v-if="iconContent('light').isUrl"
          :src="iconContent('light').content"
          class="tv-theme-icon"
          alt="Light theme icon"
        />
        <i
          v-else
          v-html="iconContent('light').content"
          class="tv-theme-icon"
        ></i>
      </span>
    </div>
  </div>
</template>

<style></style>
