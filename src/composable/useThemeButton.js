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
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme;
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return "dark";
    }
    return "light";
  }
  return "dark";
};

const setStoredTheme = (theme) => {
  if (isLocalStorageAvailable()) {
    localStorage.setItem("theme", theme);
  }
};

const useThemeButton = (emit, props = {}) => {
  const _icons = import.meta.glob("../assets/icons/*.svg", { eager: true, query: "?raw", import: "default" });

  const iconContent = (icon) => {
    const customIcon = icon === 'dark' ? props.darkIcon : props.lightIcon;

    if (customIcon) {
      const isUrl = customIcon.startsWith('http') ||
        customIcon.startsWith('/') ||
        customIcon.startsWith('data:') ||
        customIcon.startsWith('./') ||
        customIcon.startsWith('../');

      return {
        content: customIcon,
        isUrl: isUrl && !customIcon.includes('<svg')
      };
    }

    const defaultIcon = _icons[`../assets/icons/${icon}.svg`] || "";
    return {
      content: defaultIcon,
      isUrl: false
    };
  };
  const theme = ref("dark");
  const changeTheme = () => {
    theme.value = theme.value === "dark" ? "light" : "dark";
    setStoredTheme(theme.value);
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
