import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    TextInput,
    DatePickerIOS,
    Modal,
} from 'react-native';
import RenderIf from '../../../RenderIf';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import ImagePicker from 'react-native-image-crop-picker';

export default class AddMeal extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dropDown: false,
            description: "",
            cals: "",
            date: new Date(),
            modal: false,
            type: "Select meal",
            modalImage: false
        };
    }

    onDateChange = (date) => {
        this.setState({date: date});
    };

    getImage(){
        ImagePicker.openCamera({
        }).then(image => {
            console.log(image);
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>this.props.navigator.pop()} style={{flex: 1/3}}>
                        <Icon
                            style={{marginLeft: 10}}
                            name="ios-arrow-round-back"
                            size={40}
                            color="#10c382"
                        />
                    </TouchableOpacity>
                    <Text style={styles.dayPickerTxt}>Meal</Text>
                    <View style={{flex: 1/3}}>

                    </View>
                </View>
                <ScrollView>
                    <TouchableOpacity onPress={()=>this.setState({modalImage: true})} style={styles.imageContainer}>
                            <Icon
                                style={{marginLeft: 10}}
                                name="ios-camera-outline"
                                size={40}
                                color="#10c382"
                            />
                    </TouchableOpacity>
                    <View style={styles.descContainer}>
                        <TextInput
                            style={styles.descInput}
                            onChangeText={(description) => this.setState({description})}
                            value={this.state.description}
                            placeholder="Description"
                        />
                    </View>
                    <View style={styles.calsContainer}>
                        <TextInput
                            style={styles.descInput}
                            onChangeText={(cals) => this.setState({cals})}
                            value={this.state.cals}
                            placeholder="Calories"
                            keyboardType="numeric"
                        />
                    </View>
                    <TouchableOpacity style={styles.mealSelector} onPress={()=>this.setState({modal: true})}>
                        <Text style={{color: "white"}}>{moment(this.state.date).format('dddd, Do MMMM')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState({dropDown: !this.state.dropDown})} style={styles.mealSelector}>
                        <Text style={{color: "white"}}>{this.state.type}</Text>
                    </TouchableOpacity>
                    {RenderIf(this.state.dropDown)(
                    <View>
                        <TouchableOpacity onPress={()=>this.setState({type: "Breakfast", dropDown: false})} style={styles.mealOption}>
                            <Text style={{color: "gray"}}>Breakfast</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.setState({type: "Lunch", dropDown: false})} style={styles.mealOption}>
                            <Text style={{color: "gray"}}>Lunch</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.setState({type: "Dinner", dropDown: false})} style={styles.mealOption}>
                            <Text style={{color: "gray"}}>Dinner</Text>
                        </TouchableOpacity>
                    </View>
                    )}
                </ScrollView>
                <Modal
                    animationType={"fade"}
                    transparent={this.state.modalImage}
                    visible={this.state.modalImage}
                    onRequestClose={() => {console.log('modal closed')}}
                >
                    <TouchableOpacity onPress={() => this.setState({modalImage: false})} style={{backgroundColor: 'rgba(233, 233, 233, 0.4)', flex: 1, justifyContent: "center", alignItems: "center"}}>
                        <Text>asd</Text>
                    </TouchableOpacity>
                </Modal>
                <Modal
                    animationType={"fade"}
                    transparent={this.state.modal}
                    visible={this.state.modal}
                    onRequestClose={() => {console.log('modal closed')}}
                >
                    <TouchableOpacity onPress={() => this.setState({modal: false})} style={{backgroundColor: 'rgba(233, 233, 233, 0.4)', flex: 1, justifyContent: "center", alignItems: "center"}}>
                    </TouchableOpacity>
                    <View style={{backgroundColor: "white",paddingVertical: 20}}>
                        <DatePickerIOS
                        date={this.state.date}
                        mode="date"
                        onDateChange={this.onDateChange}
                        />
                    </View>
                    <TouchableOpacity onPress={() => this.setState({modal: false})} style={{backgroundColor: 'rgba(233, 233, 233, 0.4)', flex: 1, justifyContent: "center", alignItems: "center"}}>
                    </TouchableOpacity>
                </Modal>
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
    calsContainer: {
        marginTop: 20,
        borderBottomWidth: 1,
        borderColor: "#CCC",
        marginLeft: window.width*0.05,
        marginRight: window.width*0.475
    },
    descContainer:{
        marginTop: 20,
        borderBottomWidth: 1,
        borderColor: "#CCC",
        marginHorizontal: window.width*0.05
    },
    descInput: {
        height: 30
    },
    mealOption: {
        paddingVertical: 10,
        marginLeft: window.width*0.05,
        width: window.width*0.475,
        backgroundColor: "white",
        alignItems: "center",
        shadowColor: 'gray',
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowRadius: 2,
        shadowOpacity: 0.3
    },
    mealSelector: {
        marginTop: 20,
        paddingVertical: 10,
        marginLeft: window.width*0.05,
        width: window.width*0.475,
        backgroundColor: "#10c382",
        alignItems: "center",
        shadowColor: 'gray',
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowRadius: 2,
        shadowOpacity: 0.3
    },
    imageContainer: {
        marginTop: 20,
        marginHorizontal: window.width*0.05,
        height: 200,
        borderWidth: 1,
        borderColor: "#CCC",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: 'gray',
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowRadius: 2,
        shadowOpacity: 0.3,
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