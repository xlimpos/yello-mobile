import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import {Text,Image,Divider,Input, Button} from 'react-native-elements';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>

        <View style={{height:"80%",justifyContent:'center',alignItems:'center'}}>
            <View style={{marginTop:50,margin:10}}>
                <Text style={{textAlign:'center', fontSize: 25, color: 'black'}}>John Smith</Text>
            </View>
            <View style={{alignItems:'center'}}>
                <View style={{height:250,width:250,borderWidth:8,borderRadius:250,justifyContent:'center',alignItems:'center',borderColor:'#F9CA24'}}>
                    <View style={{height:200,width:200,borderWidth:6,borderRadius:200,justifyContent:'center',alignItems:'center',borderColor:'#3D98F3'}}>
                        <View style={{height:150,width:150,borderWidth:5,borderRadius:150,justifyContent:'center',alignItems:'center',borderColor:'#BDC3C7'}}>
                            <Image
                                style={{width: 150, height: 150}}
                                source={require('../../../../assets/images/yello/person.png')}
                                />
                        </View>
                    </View>
                </View>
            </View>
        </View>

        <TouchableOpacity style={{flexDirection:'row' ,marginTop:10,margin:20}} onPress={()=>this.props.navigation.navigate('VaccinationList')}>
            <View style={{height:50,width:50,borderWidth:3,borderRadius:150,justifyContent:'center',alignItems:'center',borderColor:'#3D98F3'}}>
                <Image
                    style={{width: 40, height: 40}}
                    source={require('../../../../assets/images/yello/patient.png')}
                    />
            </View>
         
            <View style = {{marginLeft:20}}>
                <Text style={{fontSize: 15, color: 'black'}}>VIEW</Text>
                <Text style={{fontSize: 20, color: 'black', fontWeight:'bold'}}>Patient Vaccinations</Text>
            </View>
        </TouchableOpacity>
      </View>
    );
  }
}
