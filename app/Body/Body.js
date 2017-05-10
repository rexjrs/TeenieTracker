import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';
import TimeLapse from './TimeLapse/TimeLapse';
import Tracker from './Tracking/Tracker';

export default class Tracking extends Component {

    currentTab({i,ref}){
        
    }

    render() {
        return (
            <ScrollableTabView
                style={{backgroundColor: "white"}}
                tabBarActiveTextColor="#10c382"
                tabBarUnderlineStyle={{backgroundColor: "#10c382"}}
                tabBarInactiveTextColor="gray"
                locked={true}
                onChangeTab={this.currentTab.bind(this)}
            >
                <ScrollView tabLabel="Tracking" name="Progress" style={{backgroundColor: "white"}}>
                    <Tracker />
                </ScrollView>
                <ScrollView tabLabel="Time Lapse" name="Photos" style={{backgroundColor: "white"}}>
                    <TimeLapse />
                </ScrollView>
            </ScrollableTabView>
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