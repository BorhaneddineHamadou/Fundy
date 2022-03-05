import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import GetStartedScreen from "../app/screens/GetStartedScreen";
import LoginScreen from "../app/screens/LoginScreen";
import SignUpScreen from "../app/screens/SignUpScreen";
import CurrentScreen from "../app/screens/CurrentlyScreen";
import ExploringScreen from "../app/screens/ExploringScreen";
import ChallengesScreen from "../app/screens/ChallengesScreen";
import ActivitiesScreen from "../app/screens/ActivitiesScreen";
import EventsScreen from "../app/screens/EventsScreen";
import SocialScreen from "../app/screens/socialScreen";
import AskScreen from "../app/screens/AskScreen";
import ProfileScreen from "../app/screens/ProfileScreen";
import ProfileTwo from "../app/screens/ProfileTwo";
import ProfileThree from "../app/screens/ProfileThree";
import AddScreen from "../app/screens/AddScreen";
import ConnectionsScreen from "../app/screens/ConnetionsScreen";

const screens = {
  GetStarted : {
      screen: GetStartedScreen
  },
  Login : {
      screen: LoginScreen
  },
  SignUp : {
      screen : SignUpScreen
  },
  CurrentScreen : {
      screen : CurrentScreen
  },
  ExploringScreen : {
      screen : ExploringScreen
  },
  Challenges : {
      screen : ChallengesScreen
  },
  Activities : {
      screen : ActivitiesScreen
  },
  Events : {
      screen : EventsScreen
  },
  Social: {
      screen :SocialScreen
  },
  Ask :{
      screen: AskScreen
  },
  Profile :{
      screen: ProfileScreen
  },
  ProfileTwo :{
    screen: ProfileTwo
    },
    ProfileThree :{
        screen: ProfileThree
    },
    Add: {
        screen: AddScreen
    },
    Connections: {
        screen: ConnectionsScreen
    }
}

const HomeStack = createStackNavigator(screens, {defaultNavigationOptions: {
    header: null
  }});

export default createAppContainer(HomeStack);