import React, {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
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
            "animalTotal":0
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
        console.log("refreshScore input" + score)
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
            fox: parseInt(score.fox)
            };
        setScores(calculateAnimalScore(scoresAux));
        console.log("refreshScore output" + scoresAux)

    };

    const calculateAnimalScore = (scores) => {
        return scores.forEach(s => {
            s.animalTotal = s.bear + s.elk + s.salmon + s.hawk + s.fox;
        });
    }

    return(
        <View style={styles.row}>
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
        }

    }
)

export default ScoreTable;
