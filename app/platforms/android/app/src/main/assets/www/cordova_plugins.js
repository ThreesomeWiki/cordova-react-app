cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-wechat.Wechat",
      "file": "plugins/cordova-plugin-wechat/www/wechat.js",
      "pluginId": "cordova-plugin-wechat",
      "clobbers": [
        "Wechat"
      ]
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-wechat": "3.0.0",
    "cordova-plugin-splashscreen": "5.0.4"
  };
});