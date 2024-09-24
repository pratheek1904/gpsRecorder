import React, { memo } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Images } from '../../../Assets/Images';
import { SCREEN_HEIGHT } from '../../Utils/helpers';
import { COLORS, Typography } from './GPSImports';

const EmptyRecords = () => {
  return (
    <View style={styles.emptyConatiner}>
      <Image source={Images.gpsOstor} style={styles.imageStyles} />
      <Typography style={styles.headerTitle}>Welcome to GPS Store</Typography>
      <Typography style={styles.titleSubText}>
        Your GPS store is empty
      </Typography>
    </View>
  );
};

export default memo(EmptyRecords);

const styles = StyleSheet.create({
  emptyConatiner: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    top: SCREEN_HEIGHT/3.5,
  },
  imageStyles: {
    width: 126,
    height: 126,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 30,
    color: COLORS.black1,
  },
  titleSubText: {
    fontSize: 13,
    color: COLORS.grey,
  },
});
