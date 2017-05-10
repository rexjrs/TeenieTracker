import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Buttons from './Components/Buttons';
import Cards from './Components/Cards';

export default class Logging extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.btnContainer}>
                    <Buttons />
                </View>
                <Cards />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    btnContainer: {
        backgroundColor: "white",
    },
});