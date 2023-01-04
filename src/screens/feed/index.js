import React, { useState } from 'react';
import { Button, StatusBar, StyleSheet, Text, View , Image , FlatList, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import Topbar from '../../modules/topbar';
import { Feather, FontAwesome5, FontAwesome } from 'react-native-vector-icons'



function Feed() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // 👇️ toggle
    setIsActive(current => !current);


    // 👇️ or set to true
     //setIsActive(true);
  };
  const like = isActive? {liked} : {unliked};
const unliked = <FontAwesome5 name="heart" size= {25} color="black"/>;
const liked = <FontAwesome name="heart" size= {25} color="red"/>;

  const post = [
    {
      id: '1',
      aut_pic:'https://pbs.twimg.com/media/EPpjwWiWsAAzgQj.jpg',
      author: 'Encouracado',
      pic_url: 'http://pm1.narvii.com/7336/20f131f5b7ce86f0802d60e58caebab1d8fd7a6fr1-1024-1280v2_uhq.jpg',
      likes: '124',
      description: 'The US premiere of JOKER with a live, 45-piece orchestra performing Hildur Guðnadóttir’s score live to the film, comes to The Theatre at Ace Hotel in Los Angeles on Friday, April 8th!',
      hashtags: '',
      place: 'cinema'
    },];

  function renderItem({ item: post}) {
    return (
    <View style={styles.postCard}>
        <View style={styles.postHeader}>
          <View style={styles.userInfo}>
            <Image style={styles.aut_pic} source={{uri: post.aut_pic}} />
            <Text style={styles.author}>{post.author}</Text>
            <Text style={styles.place}>{post.place}</Text>
          </View>
          <View style={styles.postHeaderOptions}>
          <Feather name="more-vertical" size= {25} color="black"/>
          </View>
        </View>
        <View style={styles.postPic}>
          <Image style={styles.postPicImg} source={{uri: post.pic_url}}/>
        </View>
        <View style={styles.underActions}>
          <View style={styles.underActionsRigth}>
            <TouchableWithoutFeedback onPress={handleClick}><FontAwesome style={{
          color: isActive ? 'red' : 'black',
        }} name="heart" size= {25} color="white"/></TouchableWithoutFeedback>
            <Feather style={styles.underActionsIcons} name="message-circle" size= {25} color="black"/>
            <Feather name="send" size= {25} color="black"/>
            

          </View>
          <View style={styles.underActionsLeft}>
            <Feather name="pocket" size= {25} color="black"/>
          </View>
        </View>
        <View style={styles.likes}>
          <Text style={styles.likesText}>{post.likes} curtidas</Text>
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>
            <Text style={{fontWeight: 'bold'}}>{post.author} </Text>
            {post.description}
          </Text>
        </View>
    </View>);
  }
  return (<>
    <Topbar/>
    <FlatList 
      data={post}
      keyExtractor={(item) => item.id }
      renderItem={renderItem}
      />
  </>);
};

const styles = StyleSheet.create({
  postCard:{
    
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  author: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  place: {},
  postHeaderOptions: {},
  postPicImg: {
    width: '100%',
    height: 400 ,
    marginVertical: 10,
  },
  aut_pic: {
    width:40,
    height:40,
    borderRadius:50,

  },
  underActions: {
    flexDirection: 'row',
    justifyContent:'space-between',
    marginBottom: 10,
    marginHorizontal: 10,
  },
  underActionsRigth: {
    flexDirection: 'row',

  },
  underActionsLeft: {},
  underActionsIcons: {
    marginRight: 10,
  },
  underActionsIconsLike:{
    marginRight: 10,
  },
  likes: {    
    marginHorizontal: 10,
    fontWeight: 'bold',
    marginBottom: 10
  },
  likesText: {
    fontWeight: 'bold',
  },
  description: {
    marginHorizontal: 10,
    marginBottom: 10
  },
  descriptionText: {fontSize: 17},
});

export default Feed;