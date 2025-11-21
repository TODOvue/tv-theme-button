import type { App, Plugin } from 'vue'
import _TvThemeButton from './components/TvThemeButton.vue'
import './style.scss'

const TvThemeButton = _TvThemeButton as typeof _TvThemeButton & Plugin;
TvThemeButton.install = (app: App) => {
  app.component('TvThemeButton', TvThemeButton)
};

export { TvThemeButton }

export const TvThemeButtonPlugin: Plugin = {
  install: TvThemeButton.install
};
export default TvThemeButton;

declare module 'vue' {
  export interface GlobalComponents {
    TvThemeButton: typeof TvThemeButton;
  }
}
