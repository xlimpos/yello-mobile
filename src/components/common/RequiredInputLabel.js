import React, { Component } from 'react';
import { View, Text } from 'react-native';

const RequireInputLabel = ({labelName}) => {
    return ( 
        <Text>
            {labelName} <Text style = {{color:'red',fontSize:18,fontWeight:'bold'}}>*</Text>
        </Text>
     );
}
 
export default RequireInputLabel;