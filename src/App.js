/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

import { Data, CustomCard } from "./components";

const data = Data

const App = () => {
  return (
    <SafeAreaView style = {{flex:1}}>
      <FlatList
      style={{flex:1}}
        keyExtractor = {(item,index) => index.toString()}
        data = {data}
        renderItem ={({item}) => <CustomCard 
        myResLoc = {item.location}
        myResName = {item.name}
        myImageUrl = {item.image}
        myResLikes = {item.likes}
        myResHot = {item.isPopular}
        />} 
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
