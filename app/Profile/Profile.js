import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    Image,
    StatusBar,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
    Modal,
    DatePickerIOS
} from 'react-native';
import RenderIf from '../RenderIf';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: "iRexJr",
            about: "My name is Thomas Charlesworth and I want to be more fit",
            dropDown: false,
            gender: "Male",
            date: new Date(),
            modal: false
        };
    }

    onDateChange = (date) => {
        this.setState({date: date});
    };
    
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{zIndex: 1, flexDirection: "row", backgroundColor: "transparent", position: "absolute", width: window.width, height: 70, top: 0}}>
                    <TouchableOpacity onPress={()=> this.props.navigator.pop()} style={{flex: 1/3}}>
                        <Icon
                            style={{marginLeft: 10}}
                            name="ios-arrow-round-back"
                            size={50}
                            color="#10c382"
                        />
                    </TouchableOpacity>
                    <Text style={styles.dayPickerTxt}></Text>
                    <View style={{flex: 1/3}}>

                    </View>
                </View>
                <ScrollView style={styles.container}>
                    <KeyboardAvoidingView behavior="position">
                        <StatusBar
                            barStyle="light-content"
                        />
                        <View style={styles.shadow}>
                            <Image style={styles.profileHeader} source={{ uri: "https://scontent.fbkk1-3.fna.fbcdn.net/v/t1.0-9/17022287_10154368302923601_9189924764110232103_n.jpg?oh=b85018178581058c543dca55de4272d8&oe=59B86EEE"}}>
                            </Image>
                        </View>
                        <View style={{alignItems: "center", marginVertical: 20}}>
                            <Text style={{fontSize: 25, color: "#10c382", fontWeight: "400"}}>Thomas Charlesworth</Text>
                        </View>
                        <View style={styles.about}>
                            <Text style={{fontSize: 17, marginLeft: 10, color: "#10c382"}}>Username</Text>
                            <TextInput
                                style={{fontSize: 17, color: "gray", marginLeft: 10, height: 40}}
                                onChangeText={(username) => this.setState({username})}
                                value={this.state.username}
                                editable={false}
                            />
                        </View>
                        <View style={[styles.about,{marginTop: 20}]}>
                            <Text style={{fontSize: 17, marginLeft: 10, color: "#10c382"}}>About</Text>
                            <TextInput
                                style={{fontSize: 17, color: "gray", margin: 10, marginTop: 0}}
                                onChangeText={(about) => this.setState({about})}
                                value={this.state.description}
                                multiline={true}
                                value={this.state.about}
                                returnKeyType="done"
                            />
                        </View>
                        <TouchableOpacity style={styles.mealSelector} onPress={()=>this.setState({modal: true})}>
                            <Text style={{color: "white"}}>{moment(this.state.date).format('DD/MM/YYYY')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({dropDown: !this.state.dropDown})} style={styles.mealSelector}>
                            <Text style={{color: "white"}}>{this.state.gender}</Text>
                        </TouchableOpacity>
                        {RenderIf(this.state.dropDown)(
                        <View>
                            <TouchableOpacity onPress={()=>this.setState({gender: "Male", dropDown: false})} style={styles.mealOption}>
                                <Text style={{color: "gray"}}>Male</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.setState({gender: "Female", dropDown: false})} style={styles.mealOption}>
                                <Text style={{color: "gray"}}>Female</Text>
                            </TouchableOpacity>
                        </View>
                        )}
                    </KeyboardAvoidingView>
                </ScrollView>
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
        backgroundColor: "#F2F2F2"
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
        shadowOpacity: 0.3,
    },
    about: {
        borderWidth: 1, 
        borderColor: "#CCC", 
        marginHorizontal: window.width*0.05, 
        marginTop: 10, 
        padding: 10,
        paddingBottom: 0,
        shadowColor: 'black',
        shadowOffset: {
        width: 0,
        height: 0
        },
        shadowRadius: 3,
        shadowOpacity: 0.3,
        backgroundColor: "white"
    },
    descContainer:{
        marginTop: 20,
        borderBottomWidth: 1,
        borderColor: "#CCC",
        marginHorizontal: window.width*0.05
    },
    descInput: {
        height: 30,
        color: "gray"
    },
    header:{
        height: 70,
        backgroundColor: "transparent",
        paddingTop: 15,
        flexDirection: "row",
        alignItems: "center",
        width: window.width,
        zIndex: 1
    },
    dayPickerTxt:{
        color: "white",
        fontSize: 20,
    },
    profileHeader: {
        height: 200,
        width: window.width
    },
    shadow:{
        shadowColor: 'black',
        shadowOffset: {
        width: 0,
        height: 0
        },
        shadowRadius: 6,
        shadowOpacity: 0.8,
    }
});