<script setup>
import useThemeButton from "../composable/useThemeButton.js"
import { computed } from "vue";

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
  },
  buttonColor: {
    type: String,
    default: null
  },
  knobColor: {
    type: String,
    default: null
  },
  sunColor: {
    type: String,
    default: null
  },
  moonColor: {
    type: String,
    default: null
  },
  size: {
    type: String,
    default: "md",
    validator: (value) => ["sm", "md", "lg"].includes(value),
  },
  square: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["change-theme"]);

const {
  theme,
  changeTheme,
  iconContent,
} = useThemeButton(emit, props);

const styleObject = computed(() => {
  const styles = {};
  if (props.buttonColor) styles["--tv-button-bg"] = props.buttonColor;
  if (props.knobColor) styles["--tv-knob-color"] = props.knobColor;
  if (props.sunColor) styles["--tv-sun-icon-color"] = props.sunColor;
  if (props.moonColor) styles["--tv-moon-icon-color"] = props.moonColor;
  return styles;
});
</script>

<template>
  <div
    class="tv-theme-button"
    :class="[`tv-theme-button--${size}`, { 'tv-theme-button--rounded': !square }]"
    :style="styleObject"
  >
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
          class="tv-theme-icon moon-icon"
          alt="Dark theme icon"
        />
        <i
          v-else
          v-html="iconContent('dark').content"
          class="tv-theme-icon moon-icon"
        ></i>
      </span>
      <span>
        <img
          v-if="iconContent('light').isUrl"
          :src="iconContent('light').content"
          class="tv-theme-icon sun-icon"
          alt="Light theme icon"
        />
        <i
          v-else
          v-html="iconContent('light').content"
          class="tv-theme-icon sun-icon"
        ></i>
      </span>
    </div>
  </div>
</template>

<style></style>
