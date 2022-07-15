import React from 'react';
import { ImageBackground, Text, ScrollView, StyleSheet } from 'react-native';
import ScoreTable from '../components/ScoreTable';
import backgroundImage from '../assets/background-mobile.png'


const GameScreen = ({ navigation, route }) => {
    return(
        <ScrollView style={styles.container} >
            <ImageBackground source={backgroundImage}  style={styles.image}>
                <ScoreTable/>
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

export default GameScreen;