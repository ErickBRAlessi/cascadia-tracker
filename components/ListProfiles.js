import React, {useState, useEffect} from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {getAllProfiles} from './ProfileService.js';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: "#f4f4f4c0",
  },
});

const Item = ({ item, onPress}) => {
return (
  <TouchableOpacity onPress={() => onPress(item)} style={[styles.item]}>
    <Text style={[styles.title]}>{item.name}</Text>
  </TouchableOpacity>
)};


const ListProfiles = ({profiles, selectedProfile}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={profiles}
        //renderItem = {({item}) => <Text>{item.name}</Text>}
        renderItem = {({item}) => <Item item={item} onPress={selectedProfile}/>}
        keyExtractor={(item) => item.key.toString()}
      />
    </View>
  );
}

export default ListProfiles;