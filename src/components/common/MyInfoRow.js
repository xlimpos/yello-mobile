import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import {Card} from 'react-native-elements';

const MyInfoRow = ({label,children,textstyle,containerStyle}) => {
    return ( 
        <Card containerStyle = {[{margin:0,marginTop:5,height:60},containerStyle]}>
            <View style = {styles.containerStyle}>
                <View style = {styles.labelStyle}>
                    <Text style = {[styles.textStyle,textstyle]}>{label}</Text>
                </View>
                <View style = {styles.valueStyle}>
                    {children}
                </View>
                
            </View>
        </Card>
     );
}
 
export default MyInfoRow;

const styles = StyleSheet.create({
 
    containerStyle:{
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    labelStyle:{
        // flex:1,
    },
    valueStyle:{
    alignItems:'flex-end',
    flex: 1,
    },
    textStyle:{
      fontSize:16,
    }
  });
