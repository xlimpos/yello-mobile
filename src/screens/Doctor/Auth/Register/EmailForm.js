import React, { Component } from 'react';
import { View,SafeAreaView } from 'react-native';
import { Button,Input,Image,Text} from 'react-native-elements';
import Colors from '../../../../assets/themes/Colors';

export default class EmailForm extends Component {
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
                <Text style={{marginBottom:50, fontSize: 40,margin:8,color:'black'}}>What is your <Text style={{fontWeight:'bold'}}>email address?</Text></Text>

                <Input
                    placeholder='Email'
                    containerStyle={{marginBottom:20,marginTop:20}}
                />
            </View>
        </View>

        <View style={{height:"20%",justifyContent:'flex-end'}}>
                <Button
                    onPress={()=>alert("Log In")}
                    containerStyle={{marginBottom:15,margin:8}}
                    buttonStyle={{backgroundColor:Colors.baseColor}}
                    titleStyle={{color:'black'}}
                    title="Next"
                    onPress={()=>this.props.navigation.navigate('PrimaryPracticeAddress')}
                />
        </View>
      </SafeAreaView>
    );
  }
}
