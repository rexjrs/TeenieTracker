import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    StatusBar,
    KeyboardAvoidingView,
    TouchableOpacity
} from 'react-native';
import RenderIf from './RenderIf';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        };
    }

    render() {
        return (
            <Image source={require('../src/background.png')} style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />
                {RenderIf(this.state.loginFailed)(

                )}
                <KeyboardAvoidingView behavior="padding">
                    <TouchableOpacity>
                        
                    </TouchableOpacity>
                </KeyboardAvoidingView> 
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: null,
        width: null
    },
});