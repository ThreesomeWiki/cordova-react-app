export default class NotificationPlugin {
    static create = () => {
        if (!window.cordova.plugins.notification) return;
        window.cordova.plugins.notification.local.hasPermission(function (granted) {
            if (granted) {
                window.cordova.plugins.notification.local.schedule({
                    title: 'Sync in progress',
                    text: 'Copied 2 of 10 files',
                    progressBar: { value: 20 },
                });
            } else {
            }
        });
    };
}
