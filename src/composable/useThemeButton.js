import { ref, onMounted, watch } from "vue";

const isLocalStorageAvailable = () => {
  try {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  } catch (e) {
    return false;
  }
};

const getStoredTheme = () => {
  if (isLocalStorageAvailable()) {
    return localStorage.getItem("theme") || "dark";
  }
  return "dark";
};

const setStoredTheme = (theme) => {
  if (isLocalStorageAvailable()) {
    localStorage.setItem("theme", theme);
  }
};

const useThemeButton = (emit) => {
  const _icons = import.meta.glob("../assets/icons/*.svg", { eager: true, query: "?raw", import: "default" });
  const iconContent = (icon) => _icons[`../assets/icons/${icon}.svg`] || ""
  
  const theme = ref(getStoredTheme());
  
  watch(theme, (newTheme) => {
    setStoredTheme(newTheme);
  });
  
  const changeTheme = () => {
    theme.value = theme.value === "dark" ? "light" : "dark";
    emit("change-theme", theme.value);
  };
  
  onMounted(() => {
    theme.value = getStoredTheme();
  });
  
  return {
    theme,

    changeTheme,
    iconContent,
  };
}

export default useThemeButton;
