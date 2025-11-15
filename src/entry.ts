import TvThemeButton from './components/TvThemeButton.vue'
import './style.scss'

(TvThemeButton as any).install = (app: any) => {
    app.component('TvThemeButton', TvThemeButton)
};

export const TvThemeButtonPlugin = {
    install(app: any) {
        app.component('TvThemeButton', TvThemeButton)
    }
}

export { TvThemeButton }
export default TvThemeButton
