import React, {useState} from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Score from './Score'

const dataSource = {
    "scores":[
        {
            "key": 0,
            "name":"player 0",
            "bear":0,
            "elk":0,
            "salmon":0,
            "hawk":0,
            "fox":0,
            "animalTotal":0,
        },
        {
            "key": 1,
            "name":"player 1",
            "bear":0,
            "elk":0,
            "salmon":0,
            "hawk":0,
            "fox":0,
            "animalTotal":0

        },
        {
            "key": 2,
            "name":"player 2",
            "bear":0,
            "elk":0,
            "salmon":0,
            "hawk":0,
            "fox":0,
            "animalTotal":0
        },
        {
            "key": 3,
            "name": "player 3",
            "bear":0,
            "elk":0,
            "salmon":0,
            "hawk":0,
            "fox":0,
            "animalTotal":0
        }
    ]
}
    

const ScoreTable = () => { 
    const [scores, setScores] = useState(dataSource.scores);

    const refreshScore = (score) => {
        let scoresAux = [...scores];
        let scoreKeys = scores.map(s => s.key);
        let scoreIndex = scoreKeys.indexOf(score.key);
        scoresAux[scoreIndex] = {...scores[scoreIndex],
            name: score.name,
            active: true, 
            bear: parseInt(score.bear), 
            elk: parseInt(score.elk), 
            salmon: parseInt(score.salmon),
            hawk: parseInt(score.hawk), 
            fox: parseInt(score.fox)};
        setScores(calculateAnimalScore(scoresAux));
    };

    const calculateScore = (score) => {
        calculateAnimalScore(score)
        calculateLandScore(score)
    }

    const calculateAnimalScore = (score) => {
        score.forEach(s => {
            s.animalTotal = s.bear + s.elk + s.salmon + s.hawk + s.fox;
        })
        return score;
    }

    const calculateLandScore = (score) => {
        return score;
    }


    return(
        <View style={styles.row}>
            <View style={styles.iconColumn}>
                <Image style={styles.icon} source={require('../assets/icons/bear-icon.png')}/>
                <Image style={styles.icon} source={require('../assets/icons/elk-icon.png')}/>
                <Image style={styles.icon} source={require('../assets/icons/salmon-icon.png')}/>
                <Image style={styles.icon} source={require('../assets/icons/hawk-icon.png')}/>
                <Image style={styles.icon} source={require('../assets/icons/fox-icon.png')}/>
            </View>
            <Score score={scores[0]} refreshScore={refreshScore}/>
            <Score score={scores[1]} refreshScore={refreshScore}/>
            <Score score={scores[2]} refreshScore={refreshScore}/>
            <Score score={scores[3]} refreshScore={refreshScore}/>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        row: {
            flexDirection: 'row',
            justifyContent: "space-evenly"
        },
        iconColumn: {
            width: 50,
            paddingTop: 50,
            alignSelf: 'flex-start'
        },
        icon: {
            width: 50,
            height: 50,
            resizeMode: 'contain'
        },
    }
)

export default ScoreTable;
