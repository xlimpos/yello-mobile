import React, { Component } from 'react';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import AuthStackNavigation from './AuthStackNavigation';
import HomeTabNavigation from './HomeTabNavigation';
 
export default createAppContainer(createSwitchNavigator(
  {
    // AuthLoading: AuthLoading, //check whether user logged in or not
    Auth: AuthStackNavigation,  //Auth Screen
    Home: HomeTabNavigation,  //Main/Root Screen
  },
  {
    initialRouteName: 'Auth'
  }
));











// import React, {Component} from 'react';
// import {createDrawerNavigator,createAppContainer,createStackNavigator,createBottomTabNavigator} from 'react-navigation';
// import {Icon} from 'react-native-elements';
// import Colors from '../src/assets/colors/Colors';
// import ScreenRightIcon from '../src/components/ScreenRightIcon';
// import NavigationDrawerStructure from './screens/NavigationDrawerStructure';
// import Home from './screens/Home';
// import WhyBecomeDoner from './screens/WhyBecomeDoner';
// import SearchBlood from './screens/SearchBlood';
// import BecomeDoner from './screens/BecomeDoner';
// import AboutUs from './screens/AboutUs';
// import Settings from './screens/Settings';
// import ContactUs from './screens/ContactUs';
// import UserDetails from './screens/UserDetails';
// import Profile from './screens/Profile';


// const Home_StackNavigator = createStackNavigator({
//   //All the screen from the Screen1 will be indexed here
//   Home: {
//     screen: Home,
//     navigationOptions: ({ navigation }) => ({
//       title: 'Home',
//       headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
//       headerStyle: {
//         backgroundColor: Colors.themeColor,
//       },
//       headerTintColor: Colors.headerTintColor,
//     }),
//   },

//   UserDetails: {
//     screen: UserDetails,
//     navigationOptions: ({navigation}) =>({
//       title: "User Detail",
//       headerStyle: { backgroundColor: Colors.themeColor },
//       headerTintColor: Colors.headerTintColor,
//       headerRight: <ScreenRightIcon navigation = {navigation}/>
//     }),
//   },


// });

// //ButtomTabNavigation for Home Stack
// const Home_Buttom_Tab_Navigator = createBottomTabNavigator({
//     Home: {
//       screen: Home_StackNavigator,
//       // navigationOptions:{
//       //   tabBarIcon:
//       // }
      
//     },
//     Profile: {
//       screen:Profile,
//        // navigationOptions:{
//       //   tabBarIcon:
//       // }
//     },
// }, 
// {
//   order: ['Home','Profile'],
//   tabBarPosition: 'bottom',
//   animationEnabled:true,
//   swipeEnabled: true,

//   tabBarOptions:{
//     // activeBackgroundColor:Colors.themeColor,
//     labelStyle:{
//       fontSize:18,
//       // color:'black',
//       // paddingBottom: 10,

//     },
//   }
 
 

 
// });

// const WhyBecomeDoner_StackNavigator = createStackNavigator({
//   //All the screen from the Screen1 will be indexed here
//   WhyBecomeDoner: {
//     screen: WhyBecomeDoner,
//     navigationOptions: ({ navigation }) => ({
//       title: 'Why Become Doner',
//       headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
//       headerStyle: {
//         backgroundColor: Colors.themeColor,
//       },
//       headerTintColor: Colors.headerTintColor,
//     }),
//   },
// });

// const SearchBlood_StackNavigator = createStackNavigator({
//   //All the screen from the Screen1 will be indexed here
//   SearchBlood: {
//     screen: SearchBlood,
//     navigationOptions: ({ navigation }) => ({
//       title: 'Search Blood',
//       headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
//       headerStyle: {
//         backgroundColor: Colors.themeColor,
//       },
//       headerTintColor: Colors.headerTintColor,
//     }),
//   },
// });

// const BecomeDoner_StackNavigator = createStackNavigator({
//   //All the screen from the Screen1 will be indexed here
//   BecomeDoner: {
//     screen: BecomeDoner,
//     navigationOptions: ({ navigation }) => ({
//       title: 'Become Doner',
//       headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
//       headerStyle: {
//         backgroundColor: Colors.themeColor,
//       },
//       headerTintColor: Colors.headerTintColor,
//     }),
//   },
// });

// const AboutUs_StackNavigator = createStackNavigator({
//   //All the screen from the Screen2 will be indexed here
//   AboutUs: {
//     screen: AboutUs,
//     navigationOptions: ({ navigation }) => ({
//       title: 'About Us',
//       headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
//       headerStyle: {
//         backgroundColor: Colors.themeColor,
//       },
//       headerTintColor: Colors.headerTintColor,
//     }),
//   },
// });

// const Settings_StackNavigator = createStackNavigator({
//   //All the screen from the Screen2 will be indexed here
//   Settings: {
//     screen: Settings,
//     navigationOptions: ({ navigation }) => ({
//       title: 'Settings',
//       headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
//       headerStyle: {
//         backgroundColor: Colors.themeColor,
//       },
//       headerTintColor: Colors.headerTintColor,
//     }),
//   },
// });

// const ContactUs_StackNavigator = createStackNavigator({
//   //All the screen from the Screen2 will be indexed here
//   ContactUs: {
//     screen: ContactUs,
//     navigationOptions: ({ navigation }) => ({
//       title: 'Contact Us',
//       headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
//       headerStyle: {
//         backgroundColor: Colors.themeColor,
//       },
//       headerTintColor: Colors.headerTintColor,
//     }),
//   },
// });




// const MyDrawerNavigator = createDrawerNavigator({

//   Home: {
//     screen: Home_Buttom_Tab_Navigator,
//     navigationOptions: {
//       drawerLabel: 'Home',
//       drawerIcon: ({ tintColor }) => (
//         <Icon
//         name='home'
//         type='font-awesome'
//         color={tintColor}
//         />
//       ),
//     },
//   },
//   WhyBecomeDoner: {
//     screen: WhyBecomeDoner_StackNavigator,
//     navigationOptions: {
//       drawerLabel: 'Why Become Doner',
//       drawerIcon: ({ tintColor }) => (
//         <Icon
//         name='question'
//         type='font-awesome'
//         color={tintColor}
//         />
//       ),
//     },
//   },
//   SearchBlood: {
//     screen: SearchBlood_StackNavigator,
//     navigationOptions: {
//       drawerLabel: 'Search Blood',
//       drawerIcon: ({ tintColor }) => (
//         <Icon
//         name='search'
//         type='font-awesome'
//         color={tintColor}
//         />
//       ),
//     },
//   },
//   BecomeDoner: {
//     screen: BecomeDoner_StackNavigator,
//     navigationOptions: {
//       drawerLabel: 'Become Doner',
//       drawerIcon: ({ tintColor }) => (
//         <Icon
//         name='users'
//         type='font-awesome'
//         color={tintColor}
//         />
//       ),
//     },
//   },
//   AboutUs: {
//     screen: AboutUs_StackNavigator,
//     navigationOptions: {
//       drawerLabel: 'About Us',
//       drawerIcon: ({ tintColor }) => (
//         <Icon
//         name='book'
//         type='font-awesome'
//         color={tintColor}
//         />
//       ),
//     },
//   },
//   Settings: {
//     screen: Settings_StackNavigator,
//     navigationOptions: {
//       drawerLabel: 'Settings',
//       drawerIcon: ({ tintColor }) => (
//         <Icon
//         name='cog'
//         type='font-awesome'
//         color={tintColor}
//         />
//       ),
//     },
//   },
//   ContactUs: {
//     screen: ContactUs_StackNavigator,
//     navigationOptions: {
//       drawerLabel: 'Contact Us',
//       drawerIcon: ({ tintColor }) => (
//         <Icon
//         name='phone'
//         type='font-awesome'
//         color={tintColor}
//         />
//       ),
//     },
//   },
//     // define customComponent here
// });

// export default createAppContainer(MyDrawerNavigator);
