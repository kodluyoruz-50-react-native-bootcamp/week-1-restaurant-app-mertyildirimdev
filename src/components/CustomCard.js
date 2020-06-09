import React from 'react';
import {View, Image, Text,} from 'react-native';

const CustomCard = probs => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri:
            probs.myImageUrl,
        }}
        resizeMode='stretch'
      />
      {/* Restaurant's Text */}
      <View
        style={styles.textContainer}>
        {/* Res Information */}
        <View>
          <View style ={{flexDirection:'row'}}>
          <Text style = {styles.resName}>{probs.myResName}</Text>
          {probs.myResHot && <Image style={styles.hearth} source={require("../assets/flame.png")}/>}
          </View>
          <Text style = {styles.resLoc}>{probs.myResLoc}</Text>
        </View>
        {/* Likes Information */}
        <View style={{justifyContent:'center',margin:10}}>
          <View style={{flexDirection: 'row'}}>
            <Image resizeMode='stretch' style = {styles.hearth} source={require('../assets/hearth.png')}/>
            <Text style = {styles.resLikes}>{probs.myResLikes}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = {
  container:{
    flex: 1, 
    backgroundColor: 'green', 
    margin:10,borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
  },
  textContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#eceff1',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
  },
  image: {
    height: 250,
  },

  hearth:{
    marginTop:15,
    height:20,
    width:20,
  },

  resName:{
      fontSize: 20,
      fontWeight:'bold',
      marginLeft:10,
      marginTop:10,
      marginRight:10,

  },

  resLoc:{
      marginLeft:10,
      marginBottom:10,
      marginTop:5,
      fontSize:20,
      color:'gray'
  },

  resLikes:{
      fontSize:20,
      margin:10
  },

  resLikeIcon:{
      marginTop:10
  }
};

export {CustomCard};
