import React, { Component } from 'react';
import { View, Text, SafeAreaView,TouchableOpacity } from 'react-native';
import { Input,Icon,Button,Divider,Image } from 'react-native-elements';
import Colors from '../../../../assets/themes/Colors';

export default class EmailLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username:'',
        password:''
    };
  }

  login = () =>{
    const{username,password}=this.state;
    alert(`username: ${username} password: ${password}`)
  }

  render() {
    const{username,password}=this.state;
    return (
      <SafeAreaView>

        <View style={{height:"30%",justifyContent:'flex-end',alignItems:'center'}}>
            <Text style={{fontSize:40,color:'black'}}> YellO. </Text>
        </View>

        <View style= {{marginRight:20,marginLeft:20,height:"60%"}}>
            <View>
                <Input
                    placeholder='Username'
                    rightIcon={
                            <Image
                            style={{width: 30, height: 30}}
                            source={require('../../../../assets/images/yello/person.png')}
                          />
                    }
                    value={username}
                    onChangeText={(value)=>this.setState({username:value})}
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
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(value)=>this.setState({password:value})}
                    containerStyle={{marginBottom:20,marginTop:20}}
                />

                <Button
                    onPress={this.login}
                    containerStyle={{marginTop:15,margin:8}}
                    buttonStyle={{backgroundColor:Colors.baseColor}}
                    titleStyle={{color:'black'}}
                    title="Log In"
                />
            </View>

            <View style={{marginTop:30}}>
                <Text style={{textAlign:'center',fontSize:13}}>Don't know your account details? <Text style={{fontWeight:'bold'}}>Get help signing in.</Text></Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Divider style={{ backgroundColor: 'black',height:1,flex:1}}/>
                    <Text style={{fontSize:20,fontWeight:'bold',margin:20}}>OR</Text>
                    <Divider style={{ backgroundColor: 'black',height:1,flex:1 }}/>
                </View>
                <Text style={{textAlign:'center',fontSize:15}}>If it's your first time with us. <Text style={{fontWeight:'bold'}} onPress={()=>this.props.navigation.navigate('SignUp')}>Sign up.</Text></Text>
            </View>
        </View>
      </SafeAreaView>
    );
  }
}
