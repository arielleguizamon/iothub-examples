'use strict';

var iothub = require('azure-iothub');

var connectionString = 'HostName=chesitron.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=77BDLunacvjJrFxO37y0Brwlz7O0RFGQbNYxm4AVg8o='

var registry = iothub.Registry.fromConnectionString(connectionString);

var device = new iothub.Device(null);
device.deviceId = 'myFirstNodeDevice';
registry.create(device, function(err, deviceInfo, res) {
  if (err) {
    registry.get(device.deviceId, printDeviceInfo);
  }
  if (deviceInfo) {
    printDeviceInfo(err, deviceInfo, res)
  }
});

function printDeviceInfo(err, deviceInfo, res) {
  if (deviceInfo) {
    console.log('Device ID: ' + deviceInfo.deviceId);
    console.log('Device key: ' + deviceInfo.authentication.symmetricKey.primaryKey);
  }
}
