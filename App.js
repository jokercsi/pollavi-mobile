/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import SplashScreen from "./src/screens/SplashScreen";


const App: () => React$Node = () => {
  return (
    <View style = {styles.container}>
      <SplashScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flex:1
  }
});

export default App;
