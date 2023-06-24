import React from 'react';
import { ImageBackground, Text, ScrollView, StyleSheet, Button } from 'react-native';
import ScoreTable from '../components/ScoreTable';
import backgroundImage from '../assets/background-mobile.png'

const Sandbox = ({ navigation, route }) => {

    return (
        <ScrollView style={styles.container} >
            <ImageBackground source={backgroundImage} style={styles.image}>
                <Button title="Do Something" onPress={() => console.log('pressed')} />
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
            justifyContent: "flex-start"
        },
    }
)

export default Sandbox;