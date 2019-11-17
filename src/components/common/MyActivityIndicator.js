import React, { Component } from 'react';
import { ActivityIndicator,StyleSheet} from 'react-native';
const MyActivityIndicator = () => {
    return (
            <ActivityIndicator
               color="#009688"
               size="large"
               style={styles.ActivityIndicatorStyle}
            />
     );
}
export default MyActivityIndicator;

const styles = StyleSheet.create({
    ActivityIndicatorStyle: {
        flex: 1,
        justifyContent: 'center',
      },
});