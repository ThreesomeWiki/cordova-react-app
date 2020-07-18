export default class exitAppPlugin {
    static exit = () => {
        if (navigator.app && navigator.app.exitApp) {
            alert(2);
            navigator.app.exitApp();
        }
    };
}
