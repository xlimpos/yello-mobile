import React, { Component } from 'react';
import {View,Text} from 'react-native';
import {createAppContainer,createStackNavigator} from 'react-navigation';
import Colors from '../../assets/themes/Colors';

import {EmailLogin,BiometricsLogin} from '../../screens/Doctor/Auth/Login';
import {
    NameForm, GenderForm, EmailForm,
    VerificationInfo,CreateUserNameForm,
    AddressForm,VerificationInfoCode,
    VerificationInfoActivated
    } from '../../screens/Doctor/Auth/Register';


import GetStarted from '../../screens/Doctor/Auth/Register/GetStarted';
import PrimaryPracticeAddress from '../../screens/Doctor/Auth/Register/PrimaryPracticeAddress';
import CPSOLicenceNumber from '../../screens/Doctor/Auth/Register/CPSOLicenceNumber';
import GeneralPractioner from '../../screens/Doctor/Auth/Register/GeneralPractioner';
import Splash from '../../screens/Splash';

const AuthStackNavigation = createStackNavigator({
    
    Splash: {
        screen: Splash,
            navigationOptions: {
                header: null
            }
        },
    
    //Yello Login
    EmailLogin: {
        screen: EmailLogin,
            navigationOptions: {
                header: null
            }
        },

    BiometricsLogin: {
        screen: BiometricsLogin,
            navigationOptions: {
                header: null
            }
        },

    SignUp: {
        screen: GetStarted,
        navigationOptions: {
            header: null
        }
        // navigationOptions: {
        // title: "Create Account",
        // headerStyle: { backgroundColor: Colors.baseColor },
        // headerRight:<View></View>,
        // headerTitleContainerStyle:{
        //     alignItems: 'center',
        //     justifyContent: 'center',
        // },
        // headerTintColor: '#ffffff',
        // }
    },

    NameForm: {
        screen: NameForm,
            navigationOptions: {
                header: null
            }
        },

    PrimaryPracticeAddress: {
        screen: PrimaryPracticeAddress,
            navigationOptions: {
                header: null
            }
        },
    
    GenderForm: {
        screen: GenderForm,
            navigationOptions: {
                header: null
            }
        },

    CPSOLicenceNumber: {
        screen: CPSOLicenceNumber,
            navigationOptions: {
                header: null
            }
        },

    GeneralPractioner: {
        screen: GeneralPractioner,
            navigationOptions: {
                header: null
            }
        },
        
    EmailForm: {
        screen: EmailForm,
            navigationOptions: {
                header: null
            }
        },
        
    CreateUserNameForm: {
        screen: CreateUserNameForm,
            navigationOptions: {
                header: null
            }
        },

    VerificationInfoCode: {
        screen: VerificationInfoCode,
            navigationOptions: {
                header: null
            }
        },

    VerificationInfo: {
        screen: VerificationInfo,
            navigationOptions: {
                header: null
            }
        },

    VerificationInfoActivated: {
        screen: VerificationInfoActivated,
            navigationOptions: {
                header: null
            }
        },
});

export default createAppContainer(AuthStackNavigation);
