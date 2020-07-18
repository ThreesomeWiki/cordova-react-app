export default class exitAppPlugin {
    static exit = () => {
        if (navigator.app && navigator.app.exitApp) {
            navigator.app.exitApp();
        }
    };
}
