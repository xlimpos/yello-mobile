import React, { Component } from 'react';
import { View,SafeAreaView } from 'react-native';
import { Button,Input,Image,Text} from 'react-native-elements';
import Colors from '../../../../assets/themes/Colors';

export default class PatientActivatedInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={{margin:40}}>
        <View style={{height:"100%",justifyContent:'center',alignItems:'center'}}>
            <Text style={{marginBottom:40, fontSize:40,margin:8,color:'black'}}>
                Thank you! John Smith has now become a registered patient!
            </Text>
        </View>
      </SafeAreaView>
    );
  }
}
