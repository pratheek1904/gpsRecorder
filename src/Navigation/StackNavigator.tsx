import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import GPSHomePage from '../Screens/GPSRecorder/GPSHomePage';
import LocationMap from '../Screens/GPSRecorder/LocationMap';

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GPSHomePage"
        component={GPSHomePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LocationMap"
        component={LocationMap}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
