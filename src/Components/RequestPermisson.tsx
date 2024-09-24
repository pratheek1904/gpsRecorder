import { PermissionsAndroid } from "react-native";
import { isIos } from "../Screens/Utils/helpers";

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
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission granted');
          return true
        } else {
          console.log('Location permission denied');
          return false
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };
