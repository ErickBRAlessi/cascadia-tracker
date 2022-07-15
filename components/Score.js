import React, {useState} from 'react';
import { Text, ScrollView, View, TextInput, StyleSheet, Image } from 'react-native';

    
const Score = (props) => {   
    const score = props.score;
    const refreshScore = props.refreshScore;

    return(
        <View style={styles.column}>
            <View style={styles.lineContainer}>
                <TextInput style={styles.input} value={score.name} onChangeText={name => refreshScore({...score, name: name})} />
            </View>
            <View style={styles.lineContainer}>
                <TextInput style={styles.input} value={score.bear} maxLength={2} onChangeText={bear => refreshScore({...score, bear: bear})} keyboardType="numeric"/>
            </View>
            <View style={styles.lineContainer}>
                <TextInput style={styles.input} value={score.elk} maxLength={2} onChangeText={elk => refreshScore({...score, elk: elk})} keyboardType="numeric"/>
            </View>
            <View style={styles.lineContainer}>
                <TextInput style={styles.input} value={score.salmon} maxLength={2} onChangeText={salmon => refreshScore({...score, salmon: salmon})} keyboardType="numeric"/>
            </View>
            <View style={styles.lineContainer}>
                <TextInput style={styles.input} value={score.hawk} maxLength={2} onChangeText={hawk => refreshScore({...score, hawk: hawk})} keyboardType="numeric"/>
            </View>
            <View style={styles.lineContainer}>
                <TextInput style={styles.input} value={score.fox} maxLength={2} onChangeText={fox => refreshScore({...score, fox: fox})} keyboardType="numeric"/>
            </View>
            <View style={styles.lineContainer}>
                <Text style={styles.input}>{score.animalTotal}</Text>
            </View>
            <View style={styles.lineContainer}>
                <TextInput style={styles.inputHalf} value={score.mountain} maxLength={2} onChangeText={mountain => refreshScore({...score, mountain: mountain})} keyboardType="numeric"/>
                <TextInput style={styles.inputHalf} value={score.mountainBonus} maxLength={2} onChangeText={mountainBonus => refreshScore({...score, mountainBonus: mountainBonus})} keyboardType="numeric"/>
            </View>
            <View style={styles.lineContainer}>
                <TextInput style={styles.inputHalf} value={score.forest} maxLength={2} onChangeText={forest => refreshScore({...score, forest: forest})} keyboardType="numeric"/>
                <TextInput style={styles.inputHalf} value={score.forestBonus} maxLength={2} onChangeText={forestBonus => refreshScore({...score, forestBonus: forestBonus})} keyboardType="numeric"/>
            </View>
            <View style={styles.lineContainer}>
                <TextInput style={styles.inputHalf} value={score.desert} maxLength={2} onChangeText={desert => refreshScore({...score, desert: desert})} keyboardType="numeric"/>
                <TextInput style={styles.inputHalf} value={score.desertBonus} maxLength={2} onChangeText={desertBonus => refreshScore({...score, desertBonus: desertBonus})} keyboardType="numeric"/>
            </View>
            <View style={styles.lineContainer}>
                <TextInput style={styles.inputHalf} value={score.swamp} maxLength={2} onChangeText={swamp => refreshScore({...score, swamp: swamp})} keyboardType="numeric"/>
                <TextInput style={styles.inputHalf} value={score.swampBonus} maxLength={2} onChangeText={swampBonus => refreshScore({...score, swampBonus: swampBonus})} keyboardType="numeric"/>
            </View>
            <View style={styles.lineContainer}>
                <TextInput style={styles.inputHalf} value={score.river} maxLength={2} onChangeText={river => refreshScore({...score, river: river})} keyboardType="numeric"/>
                <TextInput style={styles.inputHalf} value={score.riverBonus} maxLength={2} onChangeText={riverBonus => refreshScore({...score, riverBonus: riverBonus})} keyboardType="numeric"/>
            </View>
            <View style={styles.lineContainer}>
                <Text style={styles.input}>{score.landTotal}</Text>
            </View>
            <View style={styles.lineContainer}>
                <TextInput style={styles.input} value={score.nature} maxLength={2} onChangeText={nature => refreshScore({...score, nature: nature})} keyboardType="numeric"/>
            </View>
            <View style={styles.lineContainer}>
                <Text style={styles.input}>{score.total}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        column: {
            flex: 1,
            //minWidth: 75,
        },
        input: {
            height: 50,
            textAlign: 'center',
            textAlignVertical: 'center',
            backgroundColor: "#f4f4f4c0",
            width: '100%',
            borderRadius: 10,
            
        },
        inputHalf: {
            height: 50,
            textAlign: 'center',
            textAlignVertical: 'center',
            backgroundColor: "#f4f4f4c0",
            borderRadius: 10,
            width: '50%',
        },
        lineContainer: {
            flexDirection:'row',
            minWidth: 75,
            padding: 2,
            alignContent: 'center'
        },
    }
)

export default Score;
