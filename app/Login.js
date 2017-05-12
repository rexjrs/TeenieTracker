import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    StatusBar,
    KeyboardAvoidingView,
    TouchableOpacity,
    Dimensions,
    TextInput,
    AsyncStorage,
    ActivityIndicator
} from 'react-native';
import RenderIf from './RenderIf';
import DismissKeyboard from 'react-native-dismiss-keyboard';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: null,
            password: null,
            failed: false,
            failedMsg: "Username or password incorrect",
            loadingNorm: false
        };
    }

    login(){
        this.setState({
            failed: false
        })
        if(this.state.username == "" || this.state.username == null || this.state.password == null || this.state.password == ""){
            this.setState({
                failed: true,
                failedMsg: "Username/Password required"
            })
        }else{
            this.setState({
                loadingNorm: true
            })
            let params = {
                username: this.state.username,
                password: this.state.password
            }
            fetch(`http://grubapis.grubmet.com/normallogin`, {
                method: 'POST',
                body: JSON.stringify(params),
                headers: {
                    "Content-Type" : "application/json;charset=utf-8",
                    "Authorization" : "jkh89sdf87bjkrgknl234jksdf09sdkl235lksaf90safkjl23"
                }
            })
            .then((response) => {
                let responseJson = JSON.parse(response._bodyInit);
                if(responseJson.status == "ok"){
                    AsyncStorage.setItem('user_id',responseJson.response.user_id.toString());
                    AsyncStorage.setItem('token',responseJson.response.token);
                    this.props.navigator.replace({id: "main"})
                }else{
                    this.setState({
                        failed: true,
                        failedMsg: "Username or password is incorrect",
                        loadingNorm: false
                    })
                }
            })
        }
    }

    googleSignIn(){
        this.props.navigator.replace({id: "main"})
    }

    facebookSignIn(){
        this.props.navigator.replace({id: "main"})
    }

    render() {
        return (
            <Image source={require('../src/background.png')} style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />
                <KeyboardAvoidingView behavior="position">
                    <View style={styles.buttonContainer}>
                        <View style={styles.loginFieldContainer}>
                            <TextInput
                                style={styles.loginField}
                                placeholder="Username"
                                placeholderTextColor='rgba(255, 255, 255, 0.7)'
                                value={this.state.username}
                                autoCapitalize="none"
                                autoCorrect={false}
                                onChangeText={(username) => this.setState({username})}
                                onSubmitEditing={()=> this.passwordInput.focus()}
                                returnKeyType="next"
                            />
                        </View>
                        <View style={styles.loginFieldContainer}>
                            <TextInput
                                style={styles.loginField}
                                placeholder="Password"
                                placeholderTextColor='rgba(255, 255, 255, 0.7)'
                                value={this.state.password}
                                autoCapitalize="none"
                                autoCorrect={false}
                                secureTextEntry
                                onChangeText={(password) => this.setState({password})}
                                ref={(input) => this.passwordInput = input}
                                onSubmitEditing={this.login.bind(this)}
                                returnKeyType="go"
                            />
                        </View>
                        {RenderIf(this.state.failed)(
                        <Text style={{color: "red"}}>{this.state.failedMsg}</Text>
                        )}
                        {RenderIf(this.state.loadingNorm)(
                        <ActivityIndicator
                            animating={true}
                            size="small"
                            color="white"
                        />
                        )}
                        {RenderIf(!this.state.loadingNorm)(
                        <View>
                            <TouchableOpacity onPress={this.login.bind(this)} style={styles.button}>
                                <Text style={styles.buttonTxt}>SIGN IN</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.facebookSignIn.bind(this)} style={styles.button}>
                                <Text style={styles.buttonTxt}>SIGN IN WITH FACEBOOK</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.googleSignIn.bind(this)} style={styles.button}>
                                <Text style={styles.buttonTxt}>SIGN IN WITH GOOGLE</Text>
                            </TouchableOpacity>
                        </View>
                        )}
                    </View>
                </KeyboardAvoidingView> 
            </Image>
        );
    }
}

var window = Dimensions.get('window'); 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: null,
        width: null,
        justifyContent: "center"
    },
    loginFieldContainer:{
        borderBottomWidth: 1,
        borderColor: "#294f58",
        marginBottom: 10
    },
    loginField:{
        height: 20,
        width: window.width*0.8,
        marginBottom: 5,
        color: "white"
    },
    buttonContainer:{
        marginHorizontal: window.width*0.2
    },
    button: {
        padding: 8,
        alignItems: "center",
        marginVertical: 5,
        backgroundColor: "#294f58"
    },
    buttonTxt: {
        color: "white",
        fontSize: 14,
        fontWeight: "400"
    }
});