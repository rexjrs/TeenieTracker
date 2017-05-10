import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Buttons extends Component {
    render() {
        return (
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.addMeal}>
                    <Icon name="ios-beer-outline" size={25} color="white"/>
                    <Text style={styles.addMealTxt}>ADD MEAL</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addMeal}>
                    <Icon name="ios-beer-outline" size={25} color="white"/>
                    <Text style={styles.addMealTxt}>ADD SNACK</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addMeal}>
                    <Icon name="ios-beer-outline" size={25} color="white"/>
                    <Text style={styles.addMealTxt}>ADD EXERCISE</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    btnContainer:{
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 10
    },
    addMealTxt: {
        color: "white",
        fontSize: 12,
        fontWeight: "500"
    },
    addMeal:{
        borderWidth: 0.5,
        borderColor: "#CCC",
        backgroundColor: "#10c382",
        padding: 5,
        margin: 3,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});