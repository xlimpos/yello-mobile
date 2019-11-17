import React, { Component } from 'react';
import { View, Text, SafeAreaView,TouchableOpacity } from 'react-native';
import { Input,Icon,Button,Divider,Image } from 'react-native-elements';

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
        timer: 5
    };
  }

  componentDidMount(){
    this.interval = setInterval(
      () => this.setState((prevState)=> ({ timer: prevState.timer - 1 })),
      1000
    );
  }
  
  componentDidUpdate(){
    if(this.state.timer === 1){ 
      //timer out
      clearInterval(this.interval);
      this.props.navigation.navigate('EmailLogin');
    }
  }
  
  componentWillUnmount(){
    clearInterval(this.interval);
  }

 

  render() {
    return (
      <SafeAreaView>
        <View style={{flexDirection: 'column',justifyContent: 'center',alignItems: 'center',height: '100%'}}>
            <Text style={{fontSize:40, color:'black'}}> YellO.</Text>
        </View>
      </SafeAreaView>
    );
  }
}
