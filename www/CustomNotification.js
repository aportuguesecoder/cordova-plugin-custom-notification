var exec = require('cordova/exec');

/**
 * @constructor
 */
var CustomNotification = {

    doNothing: function() {
      var success = function() {
        console.log("successfully did nothing");
      };
      var error = function() {
        console.log("failed to do nothing");
      }
      exec(success, error, 'CustomNotification', 'doNothing', []);
    }
};

module.exports = CustomNotification;