import { columns } from 'fontawesome';
import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ConnectionsScreen({navigation}) {  
    const goToExploring = () => {
        navigation.navigate('ExploringScreen');
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
      <ImageBackground source={require('../../assets/conn.png')} style={styles.illustration} >
        <View style={styles.navbar}>
             <Image source={require('../../assets/navbar_profile.png')} style={{width:'100%', height: 50, position: 'absolute', top: windowHeight-40, borderTopRightRadius: 15, borderTopLeftRadius: 15}} />
        </View>
        <View>
          <Image style={{width:'100%', height:50}} source="../../assets/card.png" />
        </View>
        {/* Home */}
        <TouchableOpacity onPress={goToCurrently} style={{position: 'absolute', opacity: 0,  width: 50, height: 50, bottom: 25, left: 20}}></TouchableOpacity>
        {/* Skills */}
        <TouchableOpacity onPress={goToSocial} style={{position: 'absolute', opacity: 0,  width: 50, height: 50, bottom: 25, left: 110}}></TouchableOpacity>
        {/* Ask */}
        <TouchableOpacity onPress={goToAsk} style={{position: 'absolute', opacity: 0,  width: 50, height: 50, bottom: 25, right: 110}}></TouchableOpacity>
        {/* Profile */}
        <TouchableOpacity  onPress={goToProfile} style={{position: 'absolute', opacity: 0,  width: 50, height: 50, bottom: 25, right: 20}}></TouchableOpacity>
      </ImageBackground>   
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    getstarted: {
        backgroundColor: '#FC59A3',
  },
  illustration: {
      marginTop: '5%',
      width: '100%',
      height: '99%'
  },
  button: {
    position: 'absolute',
    left: 0, 
    top: 70, 
    width: windowWidth,
    width: '80%',
    marginLeft: '10%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btn_button : {
      paddingRight: 15,
      paddingLeft: 15,
      paddingTop: 5,
      paddingBottom: 5
  },active: {
    borderBottomWidth : 4,
    borderBottomColor : '#FC59A3',
   }, content:{
     marginLeft: 10,
     position: 'absolute',
     top: 10
   }, 
   button2: {
     position: 'absolute',
     height: 70,
     left: 0, 
     top: windowHeight -120, 
     width: windowWidth,
     width: '50%',
     marginLeft: '25%',
     
   },
   btn_button2: {
     padding: 12,
     backgroundColor: "#8E3CCB",
     borderRadius: 30
   }
});
