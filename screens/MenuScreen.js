import React from 'react';
import { ImageBackground, Text, ScrollView, StyleSheet, SafeAreaView, Button } from 'react-native';
import backgroundImage from '../assets/background-mobile.png'
import { saveProfile, getAllProfiles, getProfileByKey, removeProfileByKey } from '../components/ProfileService';

const MenuScreen = ({ navigation, route }) => {
    return (
        <ScrollView style={styles.container} >
            <ImageBackground source={backgroundImage} style={styles.image}>
                <Button title="Profiles" onPress={() => navigation.navigate('Profiles')} />
                <Button title="Score Table" onPress={() => navigation.navigate('Game')} />
                <Button title="Sandbox" onPress={() => navigation.navigate('Sandbox')} />
            </ImageBackground>
        </ScrollView>
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
    }
)

export default MenuScreen;