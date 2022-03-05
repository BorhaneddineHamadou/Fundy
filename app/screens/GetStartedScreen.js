import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions, Button, ImageBackground, TouchableOpacity } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function GetStartedScreen({navigation}) {  
    const goToLogin = () => {
        navigation.navigate('Login');
     }
  return (
    <SafeAreaView style={styles.getstarted}>
      <ImageBackground source={require('../../assets/illustration.png')} style={styles.illustration} >
        <View style={styles.button}>
            <TouchableOpacity style={styles.btn_button} onPress={goToLogin}>
              <Text style={{textAlign: 'center', fontSize: 20}}>Get Started</Text>
            </TouchableOpacity> 
        </View>
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
      height: '100%'
  },
  button: {
    position: 'absolute',
    height: 70,
    left: 0, 
    top: windowHeight -90, 
    width: windowWidth,
    width: '80%',
    marginLeft: '10%',
    
  },
  btn_button: {
    padding: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 30
  }
});
