import React from 'react'
import {StyleSheet, Text, View,Image,} from 'react-native';
import logo from '../../../assets/61459.png';
import name from '../../../assets/griidname.png';
import { Feather } from 'react-native-vector-icons'

const Topbar = () => {
  return (
    <View style={styles.topbar }>
        <View  style={{flexDirection: 'row' ,flex: 0.2, justifyContent: 'space-between', alignItems: 'center',padding: '1%'}}>
            <Image source={name} style={{resizeMode:'contain',height: '80%' , width: '80%' }}/>
        </View>
        <View style={{flexDirection: 'row', flex: 0.8, justifyContent: 'flex-end', alignItems: 'center', }}>
            <Feather style={styles.topBarLeftIcons} name="heart" size={26} color="black" />
            
            <Feather style={styles.topBarLeftIcons} name="message-square" size={26} color="black" />
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
        borderBottomWidth: 1,
        borderColor: '#fff',

     },
     topBarLeftIcons: {
      marginLeft: 10,
     },
});

export default Topbar
