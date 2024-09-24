import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { requestLocationPermission } from './src/Components/RequestPermisson';
import StackNavigator from './src/Navigation/StackNavigator';
import { COLORS } from './src/Screens/Utils/Colors';

const App = () => {
  useEffect(()=>{
    requestLocationPermission()
  },[])
  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={COLORS.statusBarBG}
      />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.statusBarBG,
  },
});
