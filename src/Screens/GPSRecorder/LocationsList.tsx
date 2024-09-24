import React, { memo, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Images } from '../../Assets/Images';
import { COLORS, Typography } from './Components/GPSImports';

const LocationsList = ({item, index, deleteLocation}: any) => {
    const [showAddress, setShowAddress] = useState(false);
  return (
    <>
      <View style={styles.cardContainer}>
        <TouchableOpacity
        onPress={()=>setShowAddress(true)}
        style={styles.cloudncoord}>
          <View>
            <Image source={Images.cloud} style={styles.cloud} />
          </View>
          <Typography lines={1} style={styles.coordinateText}>
            {item?.latitude},{-item.longitude}
          </Typography>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            deleteLocation(item, index);
          }}>
          <Image source={Images.trash} style={styles.trash} />
        </TouchableOpacity>
      </View>
      <View style={styles.horizontalLine} />

      {/* <AddressModal
      showAddress={showAddress}
      setShowAddress={setShowAddress} 
      latitude={item.latitude}
      longitude={item?.longitude}
      /> */}
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
