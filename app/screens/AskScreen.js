import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function AskScreen({navigation}) {  
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
      <ImageBackground source={require('../../assets/ask.png')} style={styles.illustration} >
        <View style={styles.navbar}>
             <Image source={require('../../assets/navbar_ask.png')} style={{width:'100%', height: 50, position: 'absolute', top: windowHeight-40, borderTopRightRadius: 15, borderTopLeftRadius: 15}} />
        </View>
        <View style={{width: '90%', padding: 10, paddingLeft:20, marginLeft: '5%', backgroundColor:'#FC59A3', height:130, borderRadius:20, position:'absolute', top:260}}>
           <Text style={{fontSize: 20, color: '#FFF'}}>Ask your question :</Text>
           <Text style={{color: '#FFF'}}>Don't worry, it will be annonymous</Text>
           <TextInput placeholder='Write Your Question' style={{width:'97%', padding:10, borderWidth:1, borderColor:'#FFF', marginTop:10, borderRadius:10}} />
        </View>
        <View style={{position: 'absolute', top:500, width:'60%', marginLeft: '20%'}}>
           <Text>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum
           Lorem ipsum
           </Text>
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
