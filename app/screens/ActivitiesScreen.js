import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions, Button, ImageBackground, TouchableOpacity } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ActivitiesScreen({navigation}) {  
    const goToExploring = () => {
        navigation.navigate('ExploringScreen');
     }
     const goToCurrently = () => {
        navigation.navigate('CurrentScreen');
     }
     const goToSocial = () => {
        navigation.navigate('Social');
     }
     const goToAsk = () => {
        navigation.navigate('Ask');
     } 
     const goToProfile = () => {
        navigation.navigate('Profile');
     }   
  return (
    <SafeAreaView style={styles.getstarted}>
      <ImageBackground source={require('../../assets/activities.png')} style={styles.illustration} >
        
        <View style={styles.navbar}>
             <Image source={require('../../assets/navbar_home.png')} style={{width:'100%', height: 50, position: 'absolute', top: windowHeight-48, borderTopRightRadius: 15, borderTopLeftRadius: 15}} />
        </View>
        {/* Event */}
        <TouchableOpacity style={{position: 'absolute', opacity:0 , width: '88%', height: 200, top: 110, right: 20}}></TouchableOpacity>
        {/* Activities */}
        <TouchableOpacity style={{position: 'absolute', opacity:0, width: '48%', height: 150, top: 400, left: 20}}></TouchableOpacity>
        {/* Challenges */}
        <TouchableOpacity style={{position: 'absolute', opacity: 0, width: '37%', height: 150, top: 400, right: 20}}></TouchableOpacity>
        {/* Home */}
        <TouchableOpacity onPress={goToCurrently} style={{position: 'absolute', opacity: 0,  width: 50, height: 50, bottom: 25, left: 20}}></TouchableOpacity>
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
    backgroundColor: "#E76F3D",
    borderRadius: 30
  }
});
