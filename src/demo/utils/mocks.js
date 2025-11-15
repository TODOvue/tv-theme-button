import Default from "./demos/default.vue?raw";

const changeValue = (value) => {
  const container = document.querySelector("#tv-theme-button");
  if (!container) return;
  const firstChild = container.firstElementChild;
  const secondChild = firstChild?.firstElementChild;
  const isDark = localStorage.getItem("theme") === "dark";

  const applyMode = (el) => {
    if (!el) return;
    el.classList.toggle("light-mode", !isDark);
    el.classList.toggle("dark-mode", isDark);
  };

  applyMode(firstChild);
  applyMode(secondChild);

  console.log(value);
};

export const demos = [
  {
    id: 1,
    title: "TvThemeButton Default",
    propsData: { onChangeTheme: changeValue },
    description: 'A simple and interactive toggle button that switches between light and dark themes, allowing you to easily integrate theme switching into your application.',
    html: Default,
  },
];
