import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions, Button, ScrollView ,ImageBackground, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Category from './Category';
import CategoryFour from './CategoryFour';
import CategoryThree from './CategoryThree';
import CategoryTwo from './CategoryTwo';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SocialScreen({navigation}) {  
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
      <ImageBackground source={require('../../assets/social.png')} style={styles.illustration} >

        <View style={{position: 'absolute', marginLeft: 15, marginTop: 70}}>
            <ScrollView>
            <Text style={{fontSize: 24, color: "#000"}}>Programs</Text>
            <ScrollView scrollEventThrottle={16}>
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                        
                            <View style={{ height: 180, marginTop: 0 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}>
                                    <TouchableOpacity>
                                       <CategoryThree imageUri={require('../../assets/card1.png')} />
                                    </TouchableOpacity>  
                                    <TouchableOpacity>
                                       <CategoryThree imageUri={require('../../assets/card2.png')} />
                                    </TouchableOpacity>  
                                    <TouchableOpacity>
                                       <CategoryThree imageUri={require('../../assets/card3.png')} />
                                    </TouchableOpacity>
                                </ScrollView>
                            </View>
                        </View>
            </ScrollView>

            <Text style={{fontSize: 24, marginTop: 0, color: "#000"}}>Courses </Text> 


            <ScrollView scrollEventThrottle={16}>
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                        
                            <View style={{ height: 180 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}>
                                    <TouchableOpacity>
                                       <CategoryFour imageUri={require('../../assets/card4.png')}/>
                                    </TouchableOpacity>    
                                    
                                    <TouchableOpacity>
                                         <CategoryFour imageUri={require('../../assets/card5.png')}/>
                                    </TouchableOpacity>
                                    
                                    <TouchableOpacity>
                                        <CategoryFour imageUri={require('../../assets/card6.png')}/>
                                    </TouchableOpacity>
                                </ScrollView>
                            </View>
                        </View>
            </ScrollView>

            <Text style={{fontSize: 24, marginTop: -20, color: "#000"}}>Chat bot </Text> 


            <ScrollView scrollEventThrottle={16}>
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                        
                            <View style={{ height: 180 }}>
                            <Image source={require('../../assets/card7.png')}
                                style={{ flex: 1, width: '90%', height: null, borderRadius: 12, borderTopLeftRadius: 23, borderTopRightRadius: 23}}/>
                            </View>
                        </View>
            </ScrollView>
          </ScrollView>
        </View>
        <View style={styles.navbar}>
             <Image source={require('../../assets/navbar_social.png')} style={{width:'100%', height: 50, position: 'absolute', top: windowHeight-40, borderTopRightRadius: 15, borderTopLeftRadius: 15}} />
        </View>

        <TouchableOpacity style={{position: 'absolute', opacity: 0, width: '37%', height: 150, top: 400, right: 20}}></TouchableOpacity>
        {/* Home */}
        <TouchableOpacity onPress={goToCurrently} style={{position: 'absolute', opacity: 0,  width: 50, height: 50, bottom: 25, left: 20}}></TouchableOpacity>
        {/* Skills */}
        <TouchableOpacity style={{position: 'absolute', opacity: 0,  width: 50, height: 50, bottom: 25, left: 110}}></TouchableOpacity>
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
