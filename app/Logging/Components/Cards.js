import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Cards extends Component {
    render() {
        return (
            <View style={styles.cardContainer}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Breakfast</Text>
                    <TouchableOpacity style={styles.moreButton}>
                        <Icon name="ios-more" size={30} color="gray" />
                    </TouchableOpacity>
                </View>
                <View style={styles.imagePlaceholder}>
                    <Icon name="ios-camera" size={30} color="#10c382" />
                </View>
                <View style={styles.descBox}>
                    <Text style={styles.descTxt}>Pineapple pie, big mac and macflurry oreos</Text>
                </View>
                <View style={styles.descBox}>
                    <Icon name="ios-nutrition-outline" size={30} color="#10c382" />
                    <Text style={styles.descTxt}>CALS: 550</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cardContainer:{
        marginVertical: 10,
        borderWidth: 0.5,
        borderColor: "#CCC",
        minHeight: 200,
        backgroundColor: "white"
    },
    header:{
        flexDirection: "row",
        alignItems: "center"
    },
    headerTitle:{
        fontSize: 17,
        flex: 0.3,
        marginLeft: 15
    },
    moreButton: {
        padding: 10,
        paddingHorizontal: 20
    },
    imagePlaceholder:{
        marginTop: 0,
        margin: 10,
        borderWidth: 0.5,
        borderColor: "#ccc",
        minHeight: 150,
        backgroundColor: "#F2F2F2",
        alignItems: "center",
        justifyContent: "center"
    },
    descBox: {
        marginHorizontal: 10,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    descTxt: {
        fontSize: 13
    }
});