import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, Button, Modal, Pressable } from 'react-native';
import ListProfiles from './ListProfiles';

const ScoreTableHeader = ({profiles, addPlayer}) =>{
  const [profileListModalVisible, setProfileListModalVisible] = useState(false);

  return(
    <View>
      <Button title='ADD PLAYER' onPress={() => setProfileListModalVisible(true)}/>  
      <Modal
        animationType="slide"
        transparent={true}
        visible={profileListModalVisible}>    
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ListProfiles profiles={profiles} selectedProfile={(p) => addPlayer(p)}/>
            <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setProfileListModalVisible(!profileListModalVisible)}>
              <Text style={styles.textStyle}>Cancel</Text>
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

export default ScoreTableHeader;

