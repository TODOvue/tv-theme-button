import Default from "./demos/default.vue?raw";

const changeValue = (value) => {
  const container = document.querySelector("#tv-theme-button");
  const firstChild = container.firstElementChild;
  const secondChild = firstChild.firstElementChild;
  const theme = localStorage.getItem("theme");
  const isDark = theme === "dark";

  firstChild.classList.toggle("light-mode", isDark);
  firstChild.classList.toggle("dark-mode", !isDark);
  secondChild.classList.toggle("light-mode", isDark);
  secondChild.classList.toggle("dark-mode", !isDark);
  
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
