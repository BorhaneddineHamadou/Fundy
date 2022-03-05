import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions, Button, ImageBackground, TouchableOpacity } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function CurrentScreen({navigation}) {  
    const goToExploring = () => {
        navigation.navigate('ExploringScreen');
     }
     const goToChallenges = () => {
      navigation.navigate('Challenges');
    }
    const goToActivities = () => {
      navigation.navigate('Activities');
    }
    const goToEvents = () => {
     navigation.navigate('Events');
    }
     const goToSocial = () => {
      navigation.navigate('Social');
     }
     const goToCurrently = () => {
      navigation.navigate('CurrentScreen');
    }
    const goToAsk = () => {
      navigation.navigate('Ask');
    } 
   const goToProfile = () => {
      navigation.navigate('Profile');
   }
  return (
    <SafeAreaView style={styles.getstarted}>
      <ImageBackground source={require('../../assets/currently.png')} style={styles.illustration} >
        <View style={styles.button}>
            <TouchableOpacity style={styles.btn_button} onPress={goToExploring}>
              <Text style={{textAlign: 'center', fontSize: 20, color: '#FFF'}}>Explore</Text>
            </TouchableOpacity> 
        </View>
        <View style={styles.navbar}>
             <Image source={require('../../assets/navbar_home.png')} style={{width:'100%', height: 50, position: 'absolute', top: windowHeight-48, borderTopRightRadius: 15, borderTopLeftRadius: 15}} />
        </View>
        {/* Event */}
        <TouchableOpacity onPress={goToEvents} style={{position: 'absolute', opacity:0 , width: '88%', height: 200, top: 110, right: 20}}></TouchableOpacity>
        {/* Activities */}
        <TouchableOpacity onPress={goToActivities} style={{position: 'absolute', opacity:0, width: '48%', height: 150, top: 400, left: 20}}></TouchableOpacity>
        {/* Challenges */}
        <TouchableOpacity onPress={goToChallenges} style={{position: 'absolute', opacity: 0, width: '37%', height: 150, top: 400, right: 20}}></TouchableOpacity>
        {/* Home */}
        <TouchableOpacity style={{position: 'absolute', opacity: 0,  width: 50, height: 50, bottom: 25, left: 20}}></TouchableOpacity>
        {/* Skills */}
        <TouchableOpacity onPress={goToSocial} style={{position: 'absolute', opacity: 0,  width: 50, height: 50, bottom: 25, left: 110}}></TouchableOpacity>
        {/* Ask */}
        <TouchableOpacity onPress={goToAsk} style={{position: 'absolute', opacity: 0,  width: 50, height: 50, bottom: 25, right: 110}}></TouchableOpacity>
        {/* Profile */}
        <TouchableOpacity onPress={goToProfile} style={{position: 'absolute', opacity: 0,  width: 50, height: 50, bottom: 25, right: 20}}></TouchableOpacity>
      </ImageBackground>   
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    getstarted: {
        backgroundColor: '#FC59A3',
  },
  illustration: {
      marginTop: '7%',
      width: '100%',
      height: '99%'
  },
  button: {
    position: 'absolute',
    height: 70,
    left: 0, 
    top: windowHeight -120, 
    width: windowWidth,
    width: '50%',
    marginLeft: '25%',
    
  },
  btn_button: {
    padding: 12,
    backgroundColor: "#8E3CCB",
    borderRadius: 30
  }
});
