import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Suspense, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { Images } from '../../Assets/Images';
import { requestLocationPermission } from '../../Components/RequestPermisson';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../Utils/helpers';
import {
  COLORS,
  EmptyRecords,
  Header,
  LocationsList,
  Typography,
} from './Components/GPSImports';


export interface locationProps {
  latitude: number;
  longitude: number;
  // id:Date;
}
const GPSHomePage = () => {
  const [location, setLocation] = useState<locationProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddLocation = async () => {
    if (await requestLocationPermission()) {
      setIsLoading(true);
      Geolocation.getCurrentPosition(
        position => {
          console.log(position, 'position');
          const {latitude, longitude} = position?.coords;
          setLocation(prevLocation => [
            ...(prevLocation || []),
            {
              latitude: latitude,
              longitude: longitude,
                        },
          ]);
          AsyncStorage.setItem(
            'locationData',
            JSON.stringify([
              ...location,
              {
                latitude: latitude,
                longitude: longitude,

              },
            ]),
          );
        },
        error => {
          console.log(error.code, error.message, 'handleAddLocation');
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
      setIsLoading(false);
    }
  };
  const deleteLocation = (val: locationProps, i: number) => {
    const filteredVal = location.filter((elem, index) => index !== i);
    setLocation(filteredVal);
    AsyncStorage.setItem(
      'locationData',
      JSON.stringify(filteredVal),
    );
  };

  useEffect(() => {
    const getStoredData=async()=>{
      const persistedData = await AsyncStorage.getItem('locationData');
      persistedData&&setLocation(JSON.parse(persistedData))
    }
    getStoredData()

  }, []);

  return (
    <View style={styles.homeContainer}>
      <Header />
      <View style={styles.SubTextContainer}>
        <Typography style={styles.subText}>Coordinates</Typography>
      </View>
      <View style={styles.Recordconatiner}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Suspense fallback={<ActivityIndicator />}>
            {location?.length === 0 ? (
              <EmptyRecords />
            ) : (
              <FlatList
                data={location}
                //ItemSeparatorComponent={()=><View style={styles.horizontalLine}/>}
                renderItem={({item, index}) => {
                  return (
                    <LocationsList
                      item={item}
                      index={index}
                      deleteLocation={deleteLocation}
                    />
                  );
                }}
              />
            )}
          </Suspense>
        )}
        <Pressable
          onPress={handleAddLocation}
          hitSlop={15}
          style={styles.floatingBtn}>
          <Image source={Images.plusIcon} style={styles.plusIcon} />
        </Pressable>
      </View>
    </View>
  );
};

export default GPSHomePage;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  SubTextContainer: {
    marginVertical: 4,
    marginHorizontal: 10,
  },
  subText: {fontSize: 12, color: COLORS.grey},
  Recordconatiner: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  floatingBtn: {
    position: 'absolute',
    bottom: SCREEN_HEIGHT / 11,
    right: SCREEN_WIDTH / 20,
    opacity: 0.8,
  },
  plusIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 53,
    width: 53,
    borderRadius: 26,
  },
});
