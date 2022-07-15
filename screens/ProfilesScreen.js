import React, {useState, useEffect} from 'react';
import { ImageBackground, Text, ScrollView, StyleSheet, Button, View, TextInput, FlatList, Modal, Pressable } from 'react-native';
import backgroundImage from '../assets/background-mobile.png'
import CreateProfile from '../components/CreateProfile';
import EditProfile from '../components/EditProfile';
import ListProfiles from '../components/ListProfiles';
import { saveProfile, getAllProfiles, getProfileByKey, removeProfileByKey  } from '../components/ProfileService';

const ProfilesScreen = ({ navigation, route }) => {
    const [profile, setProfile] = useState({key: 0, name: ""});
    const [profiles, setProfiles] = useState([]);
    const [newProfileModalVisible, setNewProfileModalVisible] = useState(false);
    const [detailProfileVisible, setDetailProfileVisible] = useState(false);

    const fetchData = async () => {
        let profiles = await getAllProfiles();
        setProfiles(profiles);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return(
        <View style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.image}>
                <Button title="NEW PROFILE" onPress={() => setNewProfileModalVisible(true)}/>  
                <ListProfiles profiles={profiles} selectedProfile={(p) => {setProfile(p); setDetailProfileVisible(true);}}></ListProfiles> 
           </ImageBackground>
           <Modal
                animationType="slide"
                transparent={true}
                visible={newProfileModalVisible}>    
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <CreateProfile profile={profile} onChangeMade={() => {fetchData(); setNewProfileModalVisible(!newProfileModalVisible)}}/>
                        <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setNewProfileModalVisible(!newProfileModalVisible)}>
                            <Text style={styles.textStyle}>Cancel</Text>
                        </Pressable>
                     </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={detailProfileVisible}>    
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <EditProfile profile={profile} onChangeMade={() => {fetchData(); setDetailProfileVisible(!detailProfileVisible)}}/>
                        <Pressable style={[styles.button, styles.buttonClose]} onPress={() => {setDetailProfileVisible(!detailProfileVisible); fetchData();}}>
                            <Text style={styles.textStyle}>CANCEL</Text>
                        </Pressable>
                     </View>
                </View>
            </Modal>
        </View>
    );     
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: 'black'
        },
        image: {
            flex: 1,
            minHeight: 1000,
            justifyContent: "flex-start"
        }, 
        input: {
            height: 50,
            textAlign: 'center',
            textAlignVertical: 'center',
            backgroundColor: "#f4f4f4c0",
            width: '100%',
            borderRadius: 10,            
        }, 
        item: {
            padding: 10,
            fontSize: 18,
            height: 44,
            color: 'yellow',
            backgroundColor: 'white'
        },
        centeredView: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22
          },
        modalView: {
            flex: 0.6,
            justifyContent: "space-around",
            margin: 20,
            backgroundColor: "white",
            borderRadius: 20,
            padding: 30,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5
          },
          button: {
            borderRadius: 20,
            padding: 10,
            elevation: 2
          },
          buttonOpen: {
            backgroundColor: "#F194FF",
          },
          buttonClose: {
            backgroundColor: "#2196F3",
          },
          textStyle: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center"
          },
          modalText: {
            marginBottom: 15,
            textAlign: "center"
          }
    }
)

export default ProfilesScreen;