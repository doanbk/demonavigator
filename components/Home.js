import React, { Component } from 'react';
import { Text, StyleSheet, AppRegistry, View, Button } from 'react-native';

export default class Home extends Component {

    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Welcome to my page from Home
                </Text>
                <Button
                    title="Go to Products"
                    onPress={() => this.props.navigation.navigate('Products',{cat:"danh sach san pham"})}
                />
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
AppRegistry.registerComponent('Home', () => Home);