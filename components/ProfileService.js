import AsyncStorage from "@react-native-async-storage/async-storage";

const saveProfile = async (profile) => {
  if(profile.key == null){
    profile.key = Math.round(Math.random() * 100000000000);
  } else {
    await removeProfileByKey(profile.key);
  }
  try {
    await getAllProfiles().then(profiles => 
      AsyncStorage.setItem('profiles', JSON.stringify([...profiles, {"key": profile.key, "name": profile.name}]))
    )
    await getProfileByKey(profile.key);
  } catch (error) {
    console.log(error);
  }
}

const getAllProfiles = async () => {
  return await AsyncStorage.getItem('profiles').then(json => json !== null ? JSON.parse(json) : []).then(p => p.sort((a, b) => {return (a.name >= b.name)}));
}

const getProfileByKey = async (key) => {
  return await getAllProfiles().then(p => p.filter((p) => p.key === key))
}

const removeProfileByKey =  async (key) => {
  return await getAllProfiles()
    .then(p => p !== null ? p.filter((p) => p.key !== key) : p)
    .then(p => AsyncStorage.setItem('profiles', JSON.stringify([...p])) )
}


export {saveProfile, getAllProfiles, getProfileByKey, removeProfileByKey}