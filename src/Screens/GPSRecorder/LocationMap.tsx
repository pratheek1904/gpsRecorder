import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import Typography from '../../Components/Typography';
import { COLORS } from '../Utils/Colors';
import { useConsole } from '../Utils/helpers';

const LocationMap = ({route}: any) => {
  const [userAddress, setUserAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {latitude, longitude} = route?.params;
  useConsole("latitude",latitude,longitude,)
  const initialRegion = {
    latitude,
    longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  useEffect(() => {
    const getLocation = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=e133141931b849e88232b5298044fb7c`,
        );
        const data = await response.json();
        // useConsole("data",JSON.stringify(data));
        const address = data.results[0]?.formatted;
        setUserAddress(address);
        // useConsole('addressaddress',address);
      } catch (e) {
        useConsole('err',e);
      } finally {
        setIsLoading(false);
      }
    };
    if (latitude && longitude) {
      getLocation();
    }
  }, [latitude, longitude]);
  
  return (
    <View style={{flex:1}}>
      {isLoading ? (
        <ActivityIndicator color={COLORS.primary} />
      ) : (
        <MapView
          style={styles.mapStyle}
          showsUserLocation={true}
          followsUserLocation={true}
          initialRegion={initialRegion}>
          <Marker coordinate={{latitude, longitude}} title={userAddress}>
            <Callout>
              <View>
                <Typography>{userAddress}</Typography>
              </View>
            </Callout>
          </Marker>
        </MapView>
      )}
    </View>
  );
};

export default LocationMap;

const styles = StyleSheet.create({
  mapStyle: {
    flex: 1,
    width: '100%',
  },
});
