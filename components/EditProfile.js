import React, {useState, useEffect} from 'react';
import { ImageBackground, Text, ScrollView, StyleSheet, Button, View, TextInput, FlatList, Modal, Pressable, Alert } from 'react-native';
import backgroundImage from '../assets/background-mobile.png'
import ListProfiles from '../components/ListProfiles';
import { saveProfile, getAllProfiles, getProfileByKey, removeProfileByKey  } from '../components/ProfileService';

const createConfirmAlert = (alertTitle, alertMsg, onConfirm) => {
  console.log(onConfirm)
  Alert.alert(
    alertTitle,
      alertMsg,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => onConfirm()}
      ]
  )
}

const EditProfile = (props) => {
  const [profile, setProfile] = useState(props.profile);
  return (
    <View style={styles.centeredView}>
      <Text>EDIT PROFILE</Text>
      <TextInput style={styles.input} defaultValue={profile.name} onChangeText={name => setProfile({...profile, name: name})}/>
      <Button title="CONFIRM" onPress={() => createConfirmAlert('Confirm changes on this profile', '', async () => {await saveProfile({"key": profile.key, "name": profile.name}); props.onChangeMade();})}/>  
      <Button title="DELETE PROFILE" onPress={() => createConfirmAlert('Confirm to delete this profile?', '', async () => {await removeProfileByKey(profile.key); props.onChangeMade()})}/>  
    </View>
    );
}

const styles = StyleSheet.create(
  {
    centeredView: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center",
      padding: 30
    },
    input: {
      height: 50,
      minWidth: 100,
      textAlign: 'center',
      textAlignVertical: 'center',
      backgroundColor: "#f4f4f4c0",
      width: '100%',
      borderRadius: 10,    
      margin:20,        
    }, 
  }
);

export default EditProfile;