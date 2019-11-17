
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
                    <View style={{height:300,width:300,borderWidth:10,borderRadius:150,justifyContent:'center',alignItems:'center',borderColor:'#fcbd39'}}>
                        <View style={{height:200,width:200,borderWidth:8,borderRadius:100,justifyContent:'center',alignItems:'center',borderColor:'blue'}}>
                            <View style={{height:100,width:100,borderWidth:5,borderRadius:50,justifyContent:'center',alignItems:'center',borderColor:'grey'}}>
                                <Image
                                    style={{width: 100, height: 100}}
                                    source={require('../../../../assets/images/yello/person.png')}
                                    />
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{height:"20%",justifyContent:'flex-end'}}>
                    <Button
                        onPress={()=>alert("Log In")}
                        containerStyle={{marginBottom:15,margin:8}}
                        buttonStyle={{backgroundColor:Colors.baseColor,margin:10}}
                        titleStyle={{color:'black'}}
                        title="Verify Patient"
                    />
            </View>
      </View>
    );
  }
}
