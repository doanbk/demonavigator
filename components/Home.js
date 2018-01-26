import React, { Component } from 'react';
import { Text } from 'react-native';

export default class Home extends Component {
   
    render() {
        return (
            <View style = {styles.container}>
                <Text>
                    Welcome to my page
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
    
  });