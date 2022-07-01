import React, {useState} from 'react';
import { Text, View, TextInput, StyleSheet, Image } from 'react-native';

    
const Score = (props) => {   
    const score = props.score;
    const refreshScore = props.refreshScore;

    return(
        <View style={styles.column}>
            <TextInput style={styles.input} value={score.name} onChangeText={name => refreshScore({...score, name: name})} />
            <TextInput style={styles.input} value={score.bear} maxLength={2} onChangeText={bear => refreshScore({...score, bear: bear})} keyboardType="numeric"/>
            <TextInput style={styles.input} value={score.elk} maxLength={2} onChangeText={elk => refreshScore({...score, elk: elk})} keyboardType="numeric"/>
            <TextInput style={styles.input} value={score.salmon} maxLength={2} onChangeText={salmon => refreshScore({...score, salmon: salmon})} keyboardType="numeric"/>
            <TextInput style={styles.input} value={score.hawk} maxLength={2} onChangeText={hawk => refreshScore({...score, hawk: hawk})} keyboardType="numeric"/>
            <TextInput style={styles.input} value={score.fox} maxLength={2} onChangeText={fox => refreshScore({...score, fox: fox})} keyboardType="numeric"/>
            <Text style={styles.input}>{score.animalTotal}</Text>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        column: {
            width: 50,
        },
        input: {   
            width: 75,
            height: 50,
        }

    }
)

export default Score;
