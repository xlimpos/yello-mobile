
import React, { Component } from 'react';
import { View,FlatList } from 'react-native';
import {Text,Image,Divider,Input, Button} from 'react-native-elements';
import Colors from '../../../../assets/themes/Colors';

export default class VerifyPatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patients:[ ]
    };
  }

  render() {
    return (
      <View>
           <View style={{height:"80%",justifyContent:'center',alignItems:'center'}}>
                <View style={{marginTop:20,margin:10}}>
                    <Text h4 style={{textAlign:'center'}}>John Smith</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <View style={{height:250,width:250,borderWidth:10,borderRadius:250,justifyContent:'center',alignItems:'center',borderColor:'#F9CA24'}}>
                        <View style={{height:200,width:200,borderWidth:8,borderRadius:200,justifyContent:'center',alignItems:'center',borderColor:'#3D98F3'}}>
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

            <View style={{height:"20%",justifyContent:'flex-end'}}>
                    <Button
                        containerStyle={{marginBottom:15,margin:8}}
                        buttonStyle={{backgroundColor:Colors.baseColor,margin:10}}
                        titleStyle={{color:'black'}}
                        title="Verify Patient"
                        onPress={()=>this.props.navigation.navigate('PatientActivatedInfo')}

                    />
            </View>
      </View>
    );
  }
}
