import React, { Component } from 'react';
import { View,SafeAreaView } from 'react-native';
import { Button,Input,Image,Text} from 'react-native-elements';
import Colors from '../../../../assets/themes/Colors';

export default class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={{margin:20}}>
        <View style={{height:"80%",justifyContent:'center',alignItems:'center'}}>
            <View style={{width:'100%'}}>
                <Text style={{marginBottom:40, fontSize:40, margin:8,color:'black'}}>when were you <Text style={{fontWeight:'bold'}}>born?</Text></Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <Input
                      placeholder='YYYY'
                      containerStyle={{marginBottom:20,flex:1}}
                      />
                  <Input
                      placeholder='MM'
                      containerStyle={{marginBottom:20,flex:1}}
                  />
                   <Input
                      placeholder='DD'
                      containerStyle={{marginBottom:20,flex:1}}
                  />
                </View>
              
                <Text style={{marginBottom:40, fontSize:40 ,margin:8,color:'black'}}>what do you <Text style={{fontWeight:'bold'}}>identify</Text> as?</Text>
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                  <Image
                            style={{width: 30, height: 30}}
                            source={require('../../../../assets/images/yello/sex_male.png')}
                          />
                  <Image
                            style={{width: 30, height: 30}}
                            source={require('../../../../assets/images/yello/sex_fem.png')}
                          />
                   <Image
                            style={{width: 30, height: 30}}
                            source={require('../../../../assets/images/yello/sex_other.png')}
                          />
                </View>
            </View>
        </View>

        <View style={{height:"20%",justifyContent:'flex-end'}}>
                <Button
                    containerStyle={{marginBottom:15,margin:8}}
                    buttonStyle={{backgroundColor:Colors.baseColor}}
                    titleStyle={{color:'black'}}
                    title="Next"
                    onPress={()=>this.props.navigation.navigate('InsuranceNumber')}
                />
        </View>
      </SafeAreaView>
    );
  }
}
