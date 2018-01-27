import React, { Component } from 'react';
import { Text, StyleSheet, AppRegistry, View } from 'react-native';

export default class Products extends Component {

    static navigationOptions = {
        title: 'Products',
    };


    render() {
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <Text>
                    Welcome to my page from products
                </Text>
                <Text>
                    {params.cat}
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
