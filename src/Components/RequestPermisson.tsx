import { Alert, PermissionsAndroid } from 'react-native';
import { isIos, useConsole } from '../Screens/Utils/helpers';

export const requestLocationPermission = async () => {
  if (!isIos) {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Access Required',
          message: 'This app needs to access your location',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        useConsole('Location permission granted');
        return true;
      } else {
        useConsole('Location permission denied');
        // requestLocationPermission()
      Alert.alert("Please enable the location permission")
        return false;
      }
    } catch (err) {
      console.warn(err);
    }
  }
};
