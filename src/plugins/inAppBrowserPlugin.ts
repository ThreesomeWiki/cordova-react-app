export default class InAppBrowserPlugin {
    static open = () => {
        if (window.cordova.InAppBrowser) {
            window.cordova.InAppBrowser.open('https://www.baidu.com', '_blank', 'location=yes');
        }
    };
}
