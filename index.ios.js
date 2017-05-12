import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    AsyncStorage
} from 'react-native';
import Navigation from 'react-native-deprecated-custom-components';
import Main from './app/Main';
import Login from './app/Login';
import AddMeal from './app/Logging/Components/LogScreens/AddMeal';
import Snack from './app/Logging/Components/LogScreens/Snack';
import Exercise from './app/Logging/Components/LogScreens/Exercise';
import Profile from './app/Profile/Profile';

export default class TeenieTrack extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loggedIn: false,
            loading: true
        };
    }

    componentWillMount() {
        this.getData();
    }

    getData() {
      AsyncStorage.getItem('user_id').then((value)=>{
          if(value == null){
            this.setState({
                loading: false
            })
          }else{
            this.setState({
                loading: false,
                loggedIn: true
            })
          }
      })
    }

    renderScene(route, navigator){
        switch(route.id){
            case 'main':
            return (<Main navigator={navigator} route={route} title="Main Page"/>)
            case 'login':
            return (<Login navigator={navigator} route={route} title="Login Page"/>)
            case 'addMeal':
            return (<AddMeal navigator={navigator} route={route} title="AddMeal Page"/>)
            case 'snack':
            return (<Snack navigator={navigator} route={route} title="Snack Page"/>)
            case 'exercise':
            return (<Exercise navigator={navigator} route={route} title="Exercise Page"/>)
            case 'profile':
            return (<Profile navigator={navigator} route={route} title="Profile Page"/>)
        }
    }

    render() {
        let login = this.state.loggedIn;
        if(this.state.loading == true){
            return (
                <View></View>
            );
        }else if(this.state.loggedIn == false){
            console.log(this.state.loggedIn)
            return (
                <Navigation.Navigator
                    initialRoute={{id: 'login'}}
                    renderScene={this.renderScene}
                />
            );
        }else{
            return (
                <Navigation.Navigator
                    initialRoute={{id: 'main'}}
                    renderScene={this.renderScene}
                />
            );
        }
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
