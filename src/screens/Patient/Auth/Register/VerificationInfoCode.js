import React, { Component } from 'react';
import { View,SafeAreaView } from 'react-native';
import { Button,Input,Image,Text} from 'react-native-elements';
import Colors from '../../../../assets/themes/Colors';

export default class VerificationInfoCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={{margin:20}}>
        <View style={{height:"80%",justifyContent:'center',alignItems:'center'}}>
            <Text h2 style={{marginBottom:40,margin:8}}>
                A Verification code will be sent to activate your account.
            </Text>
            <Input
                    placeholder='Enter code here.'
                    containerStyle={{marginBottom:20,marginTop:20}}
                />
        </View>

        <View style={{height:"20%",justifyContent:'flex-end'}}>
                <Button
                    onPress={()=>alert("Log In")}
                    containerStyle={{marginBottom:15,margin:8}}
                    buttonStyle={{backgroundColor:Colors.baseColor}}
                    titleStyle={{color:'black'}}
                    title="Next"
                    onclick
                />
        </View>
      </SafeAreaView>
    );
  }
}
