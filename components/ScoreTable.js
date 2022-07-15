import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Image, Alert } from 'react-native';
import Score from './Score'
import ScoreTableHeader from './ScoreTableHeader';
import { saveProfile, getAllProfiles, getProfileByKey, removeProfileByKey  } from '../components/ProfileService';

const ScoreTable = ( props ) => { 
    const [scores, setScores] = useState([]);
    
    const [profiles, setProfiles] = useState([]);
    

    const fetchData = async () => {
        let profiles = await getAllProfiles();
        let inScoreProfilesKey = scores.map(s => s.key);
        let profilesAux = [];
        profiles.forEach(profile => {
            if(!inScoreProfilesKey.includes(profile.key)){
                profilesAux.push(profile);
            }});
        setProfiles(profilesAux);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const filterProfiles = (scores) => {
        let inScoreProfilesKey = scores.map(s => s.key);
        let profilesAux = [];
        profiles.forEach(profile => {
            if(!inScoreProfilesKey.includes(profile.key)){
                profilesAux.push(profile);
            }});
        setProfiles(profilesAux);
    } 

    const addNewPlayer = (player) => {
        if(scores.length >= 4){
            Alert.alert(
                'Player Limit Reached',
                  'No more than 4 players can be added in one game',
                  [
                    { text: "OK"}
                  ]
              )        
            return;
        }
        let scoresAux = [...scores];
        scoresAux.push({
            "key": player.key,
            "name": player.name,
            "bear":0,
            "elk":0,
            "salmon":0,
            "hawk":0,
            "fox":0,
            "animalTotal":0,
            "mountain":0,
            "mountainBonus": 0,
            "forest":0,
            "forestBonus":0,
            "desert":0,
            "desertBonus":0,
            "swamp":0,
            "swampBonus":0,
            "river":0,
            "riverBonus":0,
            "landTotal":0,
            "nature":0,
            "total":0
            }
        )
        filterProfiles(scoresAux);
        setScores(scoresAux);
    }

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
            fox: parseInt(score.fox),
            mountain: parseInt(score.mountain), 
            forest: parseInt(score.forest), 
            desert: parseInt(score.desert),
            swamp: parseInt(score.swamp), 
            river: parseInt(score.river),
            mountainBonus: parseInt(score.mountainBonus), 
            forestBonus: parseInt(score.forestBonus), 
            desertBonus: parseInt(score.desertBonus),
            swampBonus: parseInt(score.swampBonus), 
            riverBonus: parseInt(score.riverBonus),
            nature: parseInt(score.nature)};
            setScores(calculateScore(scoresAux));
    };

    const calculateScore = (score) => {
        calculateAnimalScore(score)
        calculateLandScore(score)
        calculateFinalScore(score)
        return score;
    }

    const calculateAnimalScore = (score) => {
        score.forEach(s => {
            s.animalTotal = s.bear + s.elk + s.salmon + s.hawk + s.fox;
        })
        return score;
    }

    const calculateLandScore = (score) => {
        score.forEach(s => {
            s.landTotal = s.mountain + s.mountainBonus 
            + s.forest + s.forestBonus
            + s.desert + s.desertBonus
            + s.swamp + s.swampBonus
            + s.river + s.riverBonus
        })
        return score;
    }

    const calculateFinalScore = (score) => {
        score.forEach(s => { s.total = s.landTotal + s.animalTotal+ s.nature })
        return score;
    }

    
    return(
        <View>
        <ScoreTableHeader profiles={profiles} addPlayer={(p) => addNewPlayer(p)}/>
        <View style={styles.row}>
            <View style={styles.iconColumn}>
                <View style={styles.iconContainer}>
                    <Image style={styles.icon} source={require('../assets/icons/person-icon.png')}/>
                </View>
                <View style={styles.iconContainer}>
                    <Image style={styles.icon} source={require('../assets/icons/bear-icon.png')}/>
                </View>
                <View style={styles.iconContainer}>
                    <Image style={styles.icon} source={require('../assets/icons/elk-icon.png')}/>
                </View>
                <View style={styles.iconContainer}>
                    <Image style={styles.icon} source={require('../assets/icons/salmon-icon.png')}/>
                </View>
                <View style={styles.iconContainer}>
                    <Image style={styles.icon} source={require('../assets/icons/hawk-icon.png')}/>
                </View>
                <View style={styles.iconContainer}>
                    <Image style={styles.icon} source={require('../assets/icons/fox-icon.png')}/>
                </View>
                <View style={styles.iconContainer}>
                    <Image style={styles.icon} source={require('../assets/icons/wild-life-icon.png')}/>
                </View>
                <View style={styles.iconContainer}>
                    <Image style={styles.icon} source={require('../assets/icons/mountain-icon.png')}/>
                </View>
                <View style={styles.iconContainer}>
                    <Image style={styles.icon} source={require('../assets/icons/forest-icon.png')}/>
                </View>
                <View style={styles.iconContainer}>
                    <Image style={styles.icon} source={require('../assets/icons/desert-icon.png')}/>
                </View>
                <View style={styles.iconContainer}>
                    <Image style={styles.icon} source={require('../assets/icons/swamp-icon.png')}/>
                </View>
                <View style={styles.iconContainer}>
                    <Image style={styles.icon} source={require('../assets/icons/river-icon.png')}/>
                </View>
                <View style={styles.iconContainer}>
                    <Image style={styles.icon} source={require('../assets/icons/land-icon.png')}/>
                </View>
                <View style={styles.iconContainer}>
                    <Image style={styles.icon} source={require('../assets/icons/nature-icon.png')}/>
                </View>
                <View style={styles.iconContainer}>
                    <Image style={styles.icon} source={require('../assets/icons/total-points-icon.png')}/>
                </View>
            </View>
            {scores.map((score, i) => <Score score={scores[i]} refreshScore={refreshScore}/>)}  
        </View>
    </View>
    );
}

const styles = StyleSheet.create(
    {
        row: {
            flexDirection: 'row',
            justifyContent: "space-evenly",
            color: "white",
            fontSize: 42,
            lineHeight: 84,
            fontWeight: "bold",
            textAlign: "center",
            backgroundColor: "#f4f4f4c0"
        },
        iconColumn: {
            flex: 1,
            maxWidth: 75,
            alignItems: 'center'
        },
        icon: {
            resizeMode: 'contain',
            height: 50,
            width: 50,
        },
        iconContainer: {
            padding: 2,
        },
        
    }
)

export default ScoreTable;
