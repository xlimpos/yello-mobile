import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Input,Icon,Button,Divider,Image } from 'react-native-elements';

export default class BiometricsLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView>
        <View style={{height:"30%",justifyContent:'flex-end',alignItems:'center'}}>
            <Text style={{fontSize:40,fontWeight:'bold'}}> Yello </Text>
        </View>

        <View style= {{marginRight:20,marginLeft:20,height:"60%",justifyContent:'center',alignItems:'center'}}>
          <Image
                source={require('../../../../assets/images/biometrics_img.png')}
                style={{ width: 100, height: 100 }}
                />
        </View>

        <View style={{height:'10%'}}>
            <Divider/>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{textAlign:'center',fontSize:12}}>Trouble signing in? <Text style={{fontWeight:'bold'}}>Get help signing in.</Text></Text>
            </View>
        </View>
      </SafeAreaView>
    );
  }
}
