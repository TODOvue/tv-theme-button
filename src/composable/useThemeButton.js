import { ref, onMounted, watch } from "vue";

const useThemeButton = (emit) => {
  const _icons = import.meta.glob("../assets/icons/*.svg", { eager: true, query: "?raw", import: "default" });
  const iconContent = (icon) => _icons[`../assets/icons/${icon}.svg`] || ""
  
  const theme = ref(localStorage.getItem("theme") || "dark");
  
  watch(theme, (newTheme) => {
    localStorage.setItem("theme", newTheme);
  });
  
  const changeTheme = () => {
    theme.value = theme.value === "dark" ? "light" : "dark";
    emit("change-theme", theme.value);
  };
  
  onMounted(() => {
    theme.value = localStorage.getItem("theme") || "dark";
  });
  
  return {
    theme,

    changeTheme,
    iconContent,
  };
}

export default useThemeButton;
