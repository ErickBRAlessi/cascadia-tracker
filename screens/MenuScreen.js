import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ScoreTable from '../components/ScoreTable';

const MenuScreen = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <ScoreTable/>
        </View>
    );     
}

const styles = StyleSheet.create(
    {
        container:{
            flex: 1,
            backgroundColor: 'lightblue',
        }
    }
)

export default MenuScreen;