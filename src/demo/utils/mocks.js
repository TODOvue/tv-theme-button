import Default from "./demos/default.vue?raw";
import CustomIcons from "./demos/custom-icons.vue?raw";
import CustomSizes from "./demos/custom-sizes.vue?raw";
import CustomSquare from "./demos/custom-square.vue?raw";
import CustomColors from "./demos/custom-colors.vue?raw";

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
    if (!isDark && el.closest('.tv-theme-button')) {
      el.style.backgroundColor = "#f39c12"; // Example light mode color
    }
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
  {
    id: 2,
    title: "TvThemeButton Custom Icons",
    propsData: {
      onChangeTheme: changeValue,
      darkIcon: "https://api.iconify.design/ph/moon-stars-fill.svg",
      lightIcon: "https://api.iconify.design/ph/sun-fill.svg"
    },
    description: 'Customize the theme button with your own icons. You can use URLs, local assets, or inline SVG to personalize the appearance.',
    html: CustomIcons,
  },
  {
    id: 3,
    title: "TvThemeButton Sizes",
    propsData: {
      onChangeTheme: changeValue,
      size: "lg"
    },
    description: 'The component supports different sizes: sm, md (default), and lg. This example shows the large size.',
    html: CustomSizes,
  },
  {
    id: 4,
    title: "TvThemeButton Custom Colors",
    propsData: {
      onChangeTheme: changeValue,
      buttonColor: "#6F4E37",
      knobColor: "#C0C0C0",
      sunColor: "#FFD700",
      moonColor: "#E0FFFF"
    },
    description: 'Fully customize the colors of the button, knob, and icons to match your brand identity.',
    html: CustomColors,
  },
  {
    id: 5,
    title: "TvThemeButton Square",
    propsData: {
      onChangeTheme: changeValue,
      square: true,
      size: "lg"
    },
    description: 'Change the shape of the button to be square (slightly rounded corners) instead of the default pill shape.',
    html: CustomSquare,
  },
];
