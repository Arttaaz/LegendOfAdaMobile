cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-dialogs.notification",
    "file": "plugins/cordova-plugin-dialogs/www/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "cordova-plugin-inappbrowser.inappbrowser",
    "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
    "pluginId": "cordova-plugin-inappbrowser",
    "clobbers": [
      "cordova.InAppBrowser.open",
      "window.open"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-dialogs": "1.3.4",
<<<<<<< HEAD
  "cordova-plugin-inappbrowser": "2.0.1",
  "cordova-plugin-whitelist": "1.3.3"
=======
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-inappbrowser": "2.0.1"
>>>>>>> 062cdd15430a6375b4bc8f10925edbd8feba8240
};
// BOTTOM OF METADATA
});