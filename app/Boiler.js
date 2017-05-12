import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import RenderIf from './RenderIf';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Boiler extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        };
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={{flex: 1/3}}>
                        <Icon
                            style={{marginLeft: 10}}
                            name="ios-arrow-back"
                            size={40}
                            color="#10c382"
                        />
                    </TouchableOpacity>
                    <Text style={styles.dayPickerTxt}>Meal</Text>
                    <View style={{flex: 1/3}}>

                    </View>
                </View>
                {RenderIf(this.state.loginFailed)(

                )}
            </View>
        );
    }
}

var window = Dimensions.get('window'); 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    header:{
        height: 70,
        zIndex: 1,
        backgroundColor: "white",
        borderBottomWidth: 0.5,
        borderColor: "#ccc",
        shadowColor: 'gray',
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowRadius: 2,
        shadowOpacity: 0.2,
        paddingTop: 15,
        flexDirection: "row",
        alignItems: "center",
    },
});