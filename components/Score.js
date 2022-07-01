import React, {useState} from 'react';
import { Text, View, TextInput, StyleSheet, Image } from 'react-native';

    
const Score = (props) => {   
    const score = props.score;
    const refreshScore = props.refreshScore;

    return(
        <View>
            <View>
                <TextInput style={styles.input} value={score.name} onChangeText={name => refreshScore({...score, name: name})} />
            </View>
            <View style={styles.row}>
                <Image style={styles.icon} source={require('../assets/icons/bear-icon.png')}/>
                <TextInput style={styles.input} value={score.bear} maxLength={2} onChangeText={bear => refreshScore({...score, bear: bear})} keyboardType="numeric"/>
            </View>
            <View style={styles.row}>
                <Image style={styles.icon} source={require('../assets/icons/elk-icon.png')}/>
                <TextInput style={styles.input} value={score.elk} maxLength={2} onChangeText={elk => refreshScore({...score, elk: elk})} keyboardType="numeric"/>
            </View>    
            <View style={styles.row}>
                <Image style={styles.icon} source={require('../assets/icons/fox-icon.png')}/>
                <TextInput style={styles.input} value={score.salmon} maxLength={2} onChangeText={salmon => refreshScore({...score, salmon: salmon})} keyboardType="numeric"/>
            </View>    
            <View style={styles.row}>
                <Image style={styles.icon} source={require('../assets/icons/hawk-icon.png')}/>
                <TextInput style={styles.input} value={score.hawk} maxLength={2} onChangeText={hawk => refreshScore({...score, hawk: hawk})} keyboardType="numeric"/>
            </View>    
            <View style={styles.row}>
                <Image style={styles.icon} source={require('../assets/icons/salmon-icon.png')}/>
                <TextInput style={styles.input} value={score.fox} maxLength={2} onChangeText={fox => refreshScore({...score, fox: fox})} keyboardType="numeric"/>
            </View>    
            <View>
                <Text style={styles.input}>asdasd</Text>
            </View>     
        </View>
    );
}

const styles = StyleSheet.create(
    {
        row: {
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            padding: 10,
            justifyContent: "space-evenly"
        },
        icon: {
            width: 50,
            height: 50
        },
        input: {
            flex: 1,
        }

    }
)

export default Score;
