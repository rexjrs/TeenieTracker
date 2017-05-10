import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import RenderIf from './RenderIf';

export default class Boiler extends Component {
    render() {
        return (
            <View style={styles.container}>
                {RenderIf(this.state.loginFailed)(

                )}
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
    },
});