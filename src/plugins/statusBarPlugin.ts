export default class StatusBarPlugin {
    static setBackground = () => {
        if (window.cordova.platformId === 'android') {
            window.StatusBar.backgroundColorByHexString('#0000ffff');
            // window.StatusBar.overlaysWebView(true);
            window.StatusBar.styleBlackTranslucent();
        }
    };
}
