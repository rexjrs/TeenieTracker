import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Navigation from 'react-native-deprecated-custom-components';
import Main from './app/Main';
import Login from './app/Login';

export default class TeenieTrack extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        };
    }

    renderScene(route, navigator){
        switch(route.id){
            case 'main':
            return (<Main navigator={navigator} route={route} title="Main Page"/>)
            case 'login':
            return (<Login navigator={navigator} route={route} title="Login Page"/>)
        }
    }

    render() {
        return (
            <Navigation.Navigator
                initialRoute={{id: 'login'}}
                renderScene={this.renderScene}
            />
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

AppRegistry.registerComponent('TeenieTrack', () => TeenieTrack);
