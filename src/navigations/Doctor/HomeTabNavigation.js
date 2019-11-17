import React, {Component} from 'react';
import {createAppContainer,createStackNavigator,createBottomTabNavigator} from 'react-navigation';
import {Icon,Image} from 'react-native-elements';
import Colors from '../../assets/themes/Colors';

import Profile from '../../screens/Doctor/DashBoard/Tab0/Profile';
import VaccinationList from '../../screens/Doctor/DashBoard/Tab0/VaccinationList'
import Vaccination from '../../screens/Doctor/DashBoard/Tab0/Vaccination'

import Pulse from '../../screens/Doctor/DashBoard/Tab1/Pulse';
import Group from '../../screens/Doctor/DashBoard/Tab2/Group';
import Calendar from '../../screens/Doctor/DashBoard/Tab3/Calendar';
import Notification from '../../screens/Doctor/DashBoard/Tab4/Notification';
import DoctorBag from '../../screens/Doctor/DashBoard/Tab5/DoctorBag';

import ViewPatients from '../../screens/Doctor/DashBoard/Tab2/ViewPatients';
import AddPatient from '../../screens/Doctor/DashBoard/Tab2/AddPatient';
import PatientActivatedInfo from '../../screens/Doctor/DashBoard/Tab2/PatientActivatedInfo';
import VerifyPatient from '../../screens/Doctor/DashBoard/Tab2/VerifyPatient';
import PatientProfile from '../../screens/Doctor/DashBoard/Tab2/PatientProfile';
import PatientVaccinations from '../../screens/Doctor/DashBoard/Tab2/PatientVaccinations';
import PatientVaccination from '../../screens/Doctor/DashBoard/Tab2/PatientVaccination';
import VerifyVaccination from '../../screens/Doctor/DashBoard/Tab2/VerifyVaccination';

import AddVaccination from '../../screens/Doctor/DashBoard/Tab2/AddVaccination';


const Profile_StackNavigator = createStackNavigator({

  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      header: null
      // title: 'Profile',
      // headerStyle: {
      //   backgroundColor: Colors.baseColor,
      // },
      // headerTitleContainerStyle:{
      //   alignItems: 'center',
      //   justifyContent: 'center',
      // },
      // headerTintColor: Colors.headerTintColor,
    }),
  },

  VaccinationList: {
    screen: VaccinationList,
    navigationOptions: ({ navigation }) => ({
      header: null
    }),
  },

  Vaccination: {
    screen: Vaccination,
    navigationOptions: ({ navigation }) => ({
      header: null
    }),
  },

});

const Pulse_StackNavigator = createStackNavigator({

  Pulse: {
    screen: Pulse,
    navigationOptions: ({ navigation }) => ({
      title: 'Pulse',
      headerStyle: {
        backgroundColor: Colors.baseColor,
      },
      headerTitleContainerStyle:{
        alignItems: 'center',
        justifyContent: 'center',
      },
      headerTintColor: Colors.headerTintColor,
    }),
  }
});

const Group_StackNavigator = createStackNavigator({

    ViewPatients: {
      screen: ViewPatients,
      navigationOptions: ({ navigation }) => ({
        header : null,
        // title: 'ViewPatients',
        // headerStyle: {
        //   backgroundColor: Colors.baseColor,
        // },
        // headerTitleContainerStyle:{
        //   alignItems: 'center',
        //   justifyContent: 'center',
        // },
        // headerTintColor: Colors.headerTintColor,

      }),
    },

    VerifyPatient: {
      screen: VerifyPatient,
      navigationOptions: ({ navigation }) => ({
        header : null,
      }),
    },


    AddPatient: {
      screen: AddPatient,
      navigationOptions: ({ navigation }) => ({
        header : null,
      }),
    },

    PatientActivatedInfo: {
      screen: PatientActivatedInfo,
      navigationOptions: ({ navigation }) => ({
        header : null,
      }),
    },

    PatientProfile: {
      screen: PatientProfile,
      navigationOptions: ({ navigation }) => ({
        header : null,
      }),
    },

    PatientVaccinations: {
      screen: PatientVaccinations,
      navigationOptions: ({ navigation }) => ({
        header : null,
      }),
    },

    PatientVaccination: {
      screen: PatientVaccination,
      navigationOptions: ({ navigation }) => ({
        header : null,
      }),
    },

    VerifyPatient: {
      screen: VerifyPatient,
      navigationOptions: ({ navigation }) => ({
        header : null,
      }),
    },

    VerifyVaccination: {
      screen: VerifyVaccination,
      navigationOptions: ({ navigation }) => ({
        header : null,
      }),
    },

    AddVaccination: {
      screen: AddVaccination,
      navigationOptions: ({ navigation }) => ({
        header : null,
      }),
    },

  });

  const Calendar_StackNavigator = createStackNavigator({
    Calendar: {
      screen: Calendar,
      navigationOptions: ({ navigation }) => ({
        title: 'Calendar',
        headerStyle: {
          backgroundColor: Colors.baseColor,
        },
        headerTitleContainerStyle:{
          alignItems: 'center',
          justifyContent: 'center',
        },
        headerTintColor: Colors.headerTintColor,
      }),
    }
  });

  const Notification_StackNavigator = createStackNavigator({

    Notification: {
      screen: Notification,
      navigationOptions: ({ navigation }) => ({
        header : null
        // title: 'Notification',
        // headerStyle: {
        //   backgroundColor: Colors.baseColor,
        // },
        // headerTitleContainerStyle:{
        //   alignItems: 'center',
        //   justifyContent: 'center',
        // },
        // headerTintColor: Colors.headerTintColor,
      }),
    }
  });

  const DoctorBag_StackNavigator = createStackNavigator({
    DoctorBag: {
      screen: DoctorBag,
      navigationOptions: ({ navigation }) => ({
        title: 'DoctorBag',
        headerStyle: {
          backgroundColor: Colors.baseColor,
        },
        headerTitleContainerStyle:{
          alignItems: 'center',
          justifyContent: 'center',
        },
        headerTintColor: Colors.headerTintColor,
      }),
    }
  });


//ButtomTabNavigation for Home Stack
const Home_Buttom_Tab_Navigator = createBottomTabNavigator({

    Profile: {
      screen: Profile_StackNavigator,
      navigationOptions:{
        tabBarIcon:({ focused, horizontal, tintColor }) => <Image
        style={{width: 30, height: 30}}
        source={require('../../assets/images/yello/person.png')}
        />
      } 
    },

    // Pulse: {
    //   screen: Pulse_StackNavigator,
    //   navigationOptions:{
    //     tabBarIcon:({ focused, horizontal, tintColor }) => <Image
    //     style={{width: 30, height: 30}}
    //     source={require('../../assets/images/yello/pulse.png')}
    //     />
    //   } 
    // },

    Group: {
      screen: Group_StackNavigator,
      navigationOptions:{
        tabBarIcon:({ focused, horizontal, tintColor }) => <Image
        style={{width: 30, height: 30}}
        source={require('../../assets/images/yello/group.png')}
        />
      } 
    },
    Calendar: {
      screen: Calendar_StackNavigator,
      navigationOptions:{
        tabBarIcon:({ focused, horizontal, tintColor }) => <Image
        style={{width: 30, height: 30}}
        source={require('../../assets/images/yello/calender.png')}
        />
      } 
    },
    Notification: {
      screen: Notification_StackNavigator,
      navigationOptions:{
        tabBarIcon:({ focused, horizontal, tintColor }) => <Image
        style={{width: 30, height: 30}}
        source={require('../../assets/images/yello/notification.png')}
        />
      } 
    },
    DoctorBag: {
      screen: DoctorBag_StackNavigator,
      navigationOptions:{
        tabBarIcon:({ focused, horizontal, tintColor }) => <Image
        style={{width: 30, height: 30}}
        source={require('../../assets/images/yello/doctor-bag.png')}
        />
      } 
    },
}, 
{
  order: ['Profile','Group','Calendar','Notification','DoctorBag'],
  tabBarPosition: 'bottom',
  animationEnabled:true,
  swipeEnabled: true,
  initialRouteName:'Profile',

  tabBarOptions:{
    activeBackgroundColor:Colors.baseColor,
    activeTintColor:'#666666',
    inactiveTintColor:'#666666',
    showLabel:false,
    // labelStyle:{
    //   fontSize:14,
    //   fontWeight:'bold'
    //   color:'black',
    //   paddingBottom: 10,

    // },
    style:{
        backgroundColor:'white'
    }
  }
});

export default createAppContainer(Home_Buttom_Tab_Navigator);
