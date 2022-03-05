import { StyleSheet, ScrollView, Text, View, SafeAreaView, Image, Dimensions, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import CategoryFive from './CategoryFive';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ProfileTwo({navigation}) {  
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
     const goToProfileThree = () => {
        navigation.navigate('ProfileThree');
     }
  return (
    <SafeAreaView style={styles.getstarted}>
      <ImageBackground source={require('../../assets/profile.png')} style={styles.illustration} >
        <View style={styles.navbar}>
             <Image source={require('../../assets/navbar_profile.png')} style={{width:'100%', height: 50, position: 'absolute', top: windowHeight-40, borderTopRightRadius: 15, borderTopLeftRadius: 15}} />
        </View>
        <View style={styles.button}>
            <TouchableOpacity style={[styles.btn_button]}>
                <Text style={{textAlign: 'center', fontSize: 20}} onPress={goToProfile}>Achivments</Text>
            </TouchableOpacity> 
            <TouchableOpacity style={[styles.btn_button]}>
                 <Text style={{textAlign: 'center', fontSize: 20}} onPress={goToProfileThree}>Intersts</Text>
            </TouchableOpacity> 
            <TouchableOpacity style={[styles.btn_button, styles.active]}>
                 <Text style={{textAlign: 'center', fontSize: 20}}>Events</Text>
            </TouchableOpacity> 
        </View>
        <View style={styles.content}>
            <Image style={{width: 350, height:120}} source={require('../../assets/tab3.png')} />
        </View>
        <View style={{width: '90%', height:140,padding: 10, paddingLeft:20, marginLeft: '5%', borderRadius:20, position:'absolute', top:500}}>
        <ScrollView>
            <ScrollView scrollEventThrottle={16}>
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 0 }}>
                            <View style={{ height: 180, marginTop: 0 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}>
                                    <TouchableOpacity>
                                       <CategoryFive imageUri={require('../../assets/pt1.png')} />
                                    </TouchableOpacity>  
                                    <TouchableOpacity>
                                       <CategoryFive imageUri={require('../../assets/pt2.png')} />
                                    </TouchableOpacity>  
                                    <TouchableOpacity>
                                       <CategoryFive imageUri={require('../../assets/pt3.png')} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                       <CategoryFive imageUri={require('../../assets/pt4.png')} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                       <CategoryFive imageUri={require('../../assets/pt5.png')} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                       <CategoryFive imageUri={require('../../assets/pt6.png')} />
                                    </TouchableOpacity>
                                </ScrollView>
                            </View>
                        </View>
            </ScrollView>
          </ScrollView>
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
    top: 240, 
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
    borderBottomWidth : 2,
    borderBottomColor : '#000',
   }, content:{
     marginLeft: 10,
     position: 'absolute',
     top: 310
   }
});
