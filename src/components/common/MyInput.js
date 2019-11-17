import React, { Component } from 'react';
import { View, Text,TextInput,StyleSheet,Image,TouchableOpacity } from 'react-native';
import {Input,Icon} from 'react-native-elements';

class MyInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
        secureTextEntry:this.props.secureTextEntry
    };
  }
  renderSecureButton(){
    const {secureTextEntry } = this.props
      if (secureTextEntry){
          return (
          <TouchableOpacity activeOpacity = { 0.8 } style = {styles.visibilityBtnStyle} onPress = {()=>this.setState({secureTextEntry:!this.state.secureTextEntry})}>
              <Image source = { ( this.state.secureTextEntry ) ? require('../../assets/images/show.png') : require('../../assets/images/hide.png') } style = {{height:'100%',width:"100%"}} />
          </TouchableOpacity>
          )
   
      }
   }

  render() {
    const {value,onChangeText,placeholder,label,containerStyle} =this.props
    return (
      <View style = {containerStyle}>
        <Input
        label = {label}
        value = {value}
        onChangeText = {onChangeText}
        placeholder = {placeholder}
        secureTextEntry = {this.state.secureTextEntry}
        inputContainerStyle = {{borderWidth:1,borderRadius:15}}
        inputStyle = {{marginLeft:7}}
        />
         {this.renderSecureButton()}
      </View>
    );
  }
}

export default MyInput;

const styles = StyleSheet.create({
    visibilityBtnStyle:
    {
      position: 'absolute',
      top: 30,
      right: 15,
      height: 25,
      width: 25,
    //   padding: 5
    },
});