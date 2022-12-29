import React from 'react'
import {StyleSheet, Text, View,Image,} from 'react-native';
import logo from '../../../assets/61459.png';
import name from '../../../assets/griidname.png';

const Topbar = () => {
  return (
    <View style={styles.topbar }>
        <View  style={{flexDirection: 'row' ,flex: 0.3, justifyContent: 'space-evenly', alignItems: 'center',padding: '1%'}}>
            <Image source={logo} style={{resizeMode:'contain', height: '100%' , width: '100%'}}/>
            <Image source={name} style={{resizeMode:'contain',height: '80%' , width: '80%' }}/>
        </View>
        <View style={{flexDirection: 'row', flex: 0.5, justifyContent: 'flex-end', alignItems: 'center', }}>
            <Text> exp </Text>
            <Text> exp </Text>
        </View>
    </View>
  )
};
const styles = StyleSheet.create({
    topbar:{
        flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent:'center',
        // backgroundColor: '#7fffff',
        height: '6%',
        marginHorizontal: '1%',
        paddingHorizontal: '1%',
        paddingLeft : 0,
     },
});

export default Topbar
