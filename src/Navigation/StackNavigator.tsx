import {StyleSheet} from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GPSHomePage from '../Screens/GPSRecorder/GPSHomePage';

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="GPSHomePage" component={GPSHomePage}
      options={{headerShown:false}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
