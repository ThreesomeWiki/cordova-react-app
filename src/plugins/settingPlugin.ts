export default class SettingPlugin {
    static openWifi = () => {
        if (!window.cordova.plugins.settings) return;
        window.cordova.plugins.settings.open('network');
    };
}
