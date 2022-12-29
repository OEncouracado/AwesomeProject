import React, { useState } from 'react';
import { Button, StatusBar, StyleSheet, Text, View,Image, } from 'react-native';
import Topbar from '../../modules/topbar';



const Feed = () => {
 
  return (<>
      <Topbar />
      <View style={styles.container}>
        <Text style={{color: 'white'}}>Testando</Text>
      </View></>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#800000',
    marginHorizontal: '1%',
    padding: '1%',
    
  },
  buttonsContainer: {
    padding: 10
  },
  textStyle: {
    textAlign: 'center',
    marginBottom: 8
  }
});

export default Feed;