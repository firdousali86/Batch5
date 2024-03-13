import {PermissionsAndroid} from 'react-native';
import messaging from '@react-native-firebase/messaging';

class PermissionHelper {
  constructor() {
    console.log('PermissionHelper');
  }

  requestLocationPermissionForAndroid = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Batch 5',
          message: 'Asking for location permission',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
        alert('You can use the location');
      } else {
        console.log('location permission denied');
        alert('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  rquestNotificationPermissionForiOS = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  };

  requestNotificationPermissionForAndorid = async () => {
    try {
      let granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
      if (granted == PermissionsAndroid.RESULTS.GRANTED) {
        alert('Notifications Permission Granted');
      } else {
        alert('Notifications Permission Not Granted');
      }
    } catch (e) {
      console.log(e);
      alert('Error with notification permission');
    }
  };
}
export default new PermissionHelper();
