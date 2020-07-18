export default class VersionPlugin {
    static getVersion = () => {
        if (!window.cordova.getAppVersion) return null;
        return new Promise(resolve => {
            window.cordova.getAppVersion.getVersionNumber(version => resolve(version));
        });
    };
}
