import React, { Component } from 'react';
import { View, SafeAreaView,TouchableOpacity } from 'react-native';
import { Input,Icon,Button,Divider,Image,Text } from 'react-native-elements';
import Colors from '../../../../assets/themes/Colors';

export default class EmailLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={{margin:20}}>
        <View style={{height:"80%",justifyContent:'center'}}>
            <View style={{margin:8,marginBottom:50}}>
                <Text style={{fontSize:40,color:'black'}}>Create a </Text>
                <Text style={{fontSize:40, fontWeight:'bold',color:'black'}}>username.</Text>
            </View>
           
            <Input
              placeholder='Username'
              rightIcon={
                <Image
                  style={{width: 30, height: 30}}
                  source={require('../../../../assets/images/yello/person.png')}
                />
              }
              containerStyle={{marginBottom:20}}
              />
            <Input
                placeholder='Password'
                rightIcon={
                  <Image
                    style={{width: 30, height: 30}}
                    source={require('../../../../assets/images/yello/lock.png')}
                    />
                }
                containerStyle={{marginBottom:20,marginTop:20}}
              />
        </View>

        <View style={{height:"20%",justifyContent:'flex-end'}}>
          <Button
            containerStyle={{marginBottom:15,margin:8}}
            buttonStyle={{backgroundColor:Colors.baseColor}}
            titleStyle={{color:'black'}}
            title="Next"
            onPress={()=>this.props.navigation.navigate('VerificationInfo')}
          />
        </View>
      </SafeAreaView>
    );
  }
}
