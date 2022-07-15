import React, {useState} from 'react';
import { Text, StyleSheet, Button, View, TextInput} from 'react-native';
import { saveProfile } from '../components/ProfileService';


const CreateProfile = (props) => {
  const [profile, setProfile] = useState({name: ""});
  return (
    <View style={styles.centeredView}>
      <Text>NEW PROFILE</Text>
      <TextInput style={styles.input} defaultValue={profile.name} onChangeText={name => setProfile({...profile, name: name})}/>
      <Button title="CONFIRM" onPress={async () => {await saveProfile({"name": profile.name}); props.onChangeMade()}}/>  
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

export default CreateProfile;