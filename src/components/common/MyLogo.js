import React from 'react';
import {Image,View} from 'react-native';

const MyLogo = ({source,imagestyle,containerStyle}) => {
  return ( 	
    <View style = {containerStyle}>
        <Image source={source} style = {imagestyle} />
    </View>
  );
};
export default MyLogo;
