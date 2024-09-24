import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { memo, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Images } from '../../Assets/Images';
import { API_KEY } from '../../config/apiConfig';
import { useConsole } from '../Utils/helpers';
import { COLORS, Typography } from './Components/GPSImports';
import { locationProps } from './GPSHomePage';

interface LocationsListProps {
  item: locationProps;
  index: number;
  deleteLocation: (item: locationProps, index: number) => void;
}

const LocationsList = ({item, index, deleteLocation}: LocationsListProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [isLoading, setIsLoading] = useState(false);
  const {latitude, longitude} = item;
  const {trash, cloud} = Images;
  const controller = new AbortController();
  const signal = controller.signal;
  const showAlert = (address: string) => {
    Alert.alert('Address', address, [{text: 'OK'}]);
  };
  const getLocation = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${API_KEY}`,
        {signal},
      );
      const data = await response.json();
      // useConsole("data",data)
      const {formatted} = data.results?.[0];
      showAlert(formatted);
    } catch (e: any) {
      if (e.name === 'AbortError') {
        useConsole('Fetch aborted');
      } else {
        useConsole(e, 'Error fetching address');
        showAlert('No address found');
      }
      showAlert('No address found');
    } finally {
      setIsLoading(false);
    }
  };

  const showDeleteAlert = () => {
    Alert.alert(
      'Delete Location',
      'Are you sure you want to delete this location?',
      [
        {
          text: 'Cancel',
          onPress: () => useConsole('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => deleteLocation(item, index), 
          style: 'destructive', 
        },
      ],
    );
  };
  return (
    <>
      <View style={styles.cardContainer}>
        <TouchableOpacity
          onPress={getLocation}
          // onPress={() =>
          //   navigation.navigate('LocationMap', {
          //     latitude,
          //     longitude,
          //   })
          // }
          style={styles.cloudncoord}>
          <View>
            <Image source={cloud} style={styles.cloud} />
          </View>
          <Typography lines={1} style={styles.coordinateText}>
            {latitude},{-longitude}
          </Typography>
        </TouchableOpacity>
        {isLoading ? (
          <ActivityIndicator color={COLORS.primary} />
        ) : (
          <TouchableOpacity onPress={showDeleteAlert}>
            <Image source={trash} style={styles.trash} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.horizontalLine} />
    </>
  );
};
export default memo(LocationsList);

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 25,
  },

  coordinateText: {
    marginLeft: '7%',
  },
  cloudncoord: {
    flexDirection: 'row',
  },
  cloud: {
    height: 23,
    width: 35,
  },
  trash: {
    height: 20,
    width: 20,
  },
  horizontalLine: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.grey2,
  },
});
