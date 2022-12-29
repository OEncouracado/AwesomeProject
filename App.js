import React, { useState } from 'react';
import { Button, StatusBar, StyleSheet, Text, View,Image, } from 'react-native'
import Feed from './src/screens/feed';



const App = () => {
 
  return (
    <View style={styles.bg}>
      <StatusBar/>
      <Feed />
    </View>
 
  );
};
const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: 'flex-start',
    // backgroundColor: '#d3d3d3',
  },
});

export default App;