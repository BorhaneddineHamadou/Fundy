import { ScrollView, StyleSheet, Text, View, SafeAreaView, Image, Dimensions, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Category from './Category';
import CategoryTwo from './CategoryTwo';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ExploringScreen({navigation}) {  
    const goToLogin = () => {
        navigation.navigate('Login');
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
   const goToAdd = () => {
    navigation.navigate('Add');
 }
  return (
    <SafeAreaView style={styles.getstarted}>
      <ImageBackground source={require('../../assets/exploring.png')} style={styles.illustration} >
        <View style={styles.button}>
            <TouchableOpacity style={styles.btn_button} onPress={goToAdd}>
              <Text style={{textAlign: 'center', fontSize: 20, color: '#FFF'}}>Enjoy Plus</Text>
            </TouchableOpacity> 
        </View>
        {/* <View style={{position: 'absolute', top: 50, height:10, width: '80%'}}>
           <SearchBar platform="default" placeholder='Search' />
        </View> */}
        <View style={{position: 'absolute', marginLeft: 15, marginTop: 100}}>
            <ScrollView>
            <Text style={{color: '#FC59A3', fontSize: 24}}>Events</Text>
            <ScrollView scrollEventThrottle={16}>
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                        
                            <View style={{ height: 180, marginTop: 0 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}>
                                    <TouchableOpacity onPress={goToEvents}>
                                       <Category imageUri={require('../../assets/mg.png')} />
                                    </TouchableOpacity>  
                                    <TouchableOpacity onPress={goToEvents}>
                                       <Category imageUri={require('../../assets/mg.png')} />
                                    </TouchableOpacity>  
                                    <TouchableOpacity onPress={goToEvents}>
                                       <Category imageUri={require('../../assets/mg.png')} />
                                    </TouchableOpacity>
                                </ScrollView>
                            </View>
                        </View>
            </ScrollView>

            <Text style={{color: '#8E3CCB', fontSize: 24, marginTop: 10}}>Activities <Text style={{color: '#000'}}>And</Text> <Text style={{color: '#FF6F01'}}>Challenges</Text> </Text> 


            <ScrollView scrollEventThrottle={16}>
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                        
                            <View style={{ height: 180 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}>
                                    <TouchableOpacity onPress={goToChallenges}>
                                       <CategoryTwo imageUri={require('../../assets/img2.png')}/>
                                    </TouchableOpacity>    
                                    
                                    <TouchableOpacity onPress={goToActivities}>
                                         <CategoryTwo imageUri={require('../../assets/chess.png')}/>
                                    </TouchableOpacity>
                                    
                                    <TouchableOpacity onPress={goToChallenges}>
                                        <CategoryTwo imageUri={require('../../assets/gaming.png')}/>
                                    </TouchableOpacity>
                                </ScrollView>
                            </View>
                        </View>
            </ScrollView>
          </ScrollView>
        </View>
        <View style={styles.navbar}>
             <Image source={require('../../assets/navbar_home.png')} style={{width:'100%', height: 50, position: 'absolute', top: windowHeight-48, borderTopRightRadius: 15, borderTopLeftRadius: 15}} />
        </View>
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
    backgroundColor: "#8E3CCB",
    borderRadius: 30
  }
});
