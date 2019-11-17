import React, { Component } from 'react';
import { View,SafeAreaView } from 'react-native';
import { Button,Input,Image,Text} from 'react-native-elements';
import Colors from '../../../../assets/themes/Colors';

export default class VerificationInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={{margin:20}}>
        <View style={{height:"80%",justifyContent:'center',alignItems:'center'}}>
            <Text style={{marginBottom:40, fontSize:40,margin:8,color:'black'}}>
                To activate your account, your doctor will have to verify your information on your next visit.
            </Text>
        </View>

        <View style={{height:"20%",justifyContent:'flex-end'}}>
                <Button
                    containerStyle={{marginBottom:15,margin:8}}
                    buttonStyle={{backgroundColor:Colors.baseColor}}
                    titleStyle={{color:'black'}}
                    title="Next"
                    onPress={()=>this.props.navigation.navigate('VerificationInfoActivated')}
                />
        </View>
      </SafeAreaView>
    );
  }
}
