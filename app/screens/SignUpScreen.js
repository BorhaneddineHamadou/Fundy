import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions, Button, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SignUpScreen({navigation}) {  
  const goToLogin = () => {
    navigation.navigate('Login');
 }
  return (
    <SafeAreaView >
        <ImageBackground source={require('../../assets/login.png')} style={styles.illustration} >
            <View style={styles.button}>
                <TouchableOpacity style={styles.btn_button} onPress={goToLogin}>
                  <Text style={{textAlign: 'center', fontSize: 20}}>Login</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={[styles.btn_button, styles.active]}>
                  <Text style={[{textAlign: 'center', fontSize: 20}]}>Sign Up</Text>
                </TouchableOpacity> 
            </View>
            <View style= {styles.input_view}>
            <TextInput style={styles.input} placeholder='Username' />  
            <TextInput style={styles.input} placeholder='Email' />
            <TextInput style={styles.input2} placeholder='Password' />   
            </View>
            <View style={styles.buttonss}>
            <TouchableOpacity style={styles.btn_buttonss}>
              <Text style={{textAlign: 'center', fontSize: 20,color: '#FFFFFF'}}>Sign Up</Text>
            </TouchableOpacity> 
        </View>

            <View style={styles.icons}>
                <TouchableOpacity style={[styles.btn_button]}>
                  <Image source={require('../../assets/facebook.png')} style={{width: 50, height: 50}} />
                </TouchableOpacity> 
                <TouchableOpacity style={styles.btn_button}>
                <Image source={require('../../assets/google.png')} style={{width: 50, height: 50}} />
                </TouchableOpacity> 
            </View>

        </ImageBackground> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    getstarted: {
        backgroundColor: '#E76F3D',
  },
  illustration: {
      width: '100%',
      height: '100%'
  },
  button: {
    position: 'absolute',
    left: 0, 
    top: 200, 
    width: windowWidth,
    width: '80%',
    marginLeft: '10%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icons: {
    position: 'absolute',
    left: 0, 
    bottom: 90, 
    width: windowWidth,
    width: '80%',
    marginLeft: '10%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btn_button : {
      paddingRight: 40,
      paddingLeft: 40,
      paddingTop: 10,
      paddingBottom: 20
  },
  btn_login: {
    padding: 10,
    backgroundColor: "#E76F3D",
    borderRadius: 30,
    marginTop: windowHeight -40,
    width: '80%',
    marginLeft: '10%'
  },
  input_view : {
        display: 'flex',
        flexDirection : 'column',
        top: '40%',
  },
  input: {
      marginLeft: 20,
      marginBottom: '10%',
      borderBottomColor: '#E76F3D',
      borderBottomWidth : 2,
      height: 50,
      paddingTop: 15,
      width: '80%'
  },
  input2: {
    marginLeft: 20,
    borderBottomColor: '#E76F3D',
    borderBottomWidth : 2,
    height: 50,
    paddingTop: 15,
    width: '80%'
},
  
  active: {
      borderBottomWidth : 4,
      borderBottomColor : '#E76F3D',
  },
  buttonss: {
    position: 'absolute',
    height: 70,
    left: 0, 
    top: '90%', 
    height: windowHeight-90,
    width: '80%',
    marginLeft: '10%',
    
  },
  btn_buttonss: {
    padding: 15,
    backgroundColor: "#E76F3D",
    borderRadius: 30
  },
});
