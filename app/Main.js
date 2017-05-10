import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';
import { SideMenu } from 'react-native-elements';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';
import TabBar from './TabBar';
import Logging from './Logging/Logging';
import Body from './Body/Body';
import RenderIf from './RenderIf';


export default class Main extends Component {
    constructor () {
        super()
        this.state = {
            isOpen: false,
            logging: true
        }
        this.toggleSideMenu = this.toggleSideMenu.bind(this)
    }

    onSideMenuChange (isOpen: boolean) {
        this.setState({
            isOpen: isOpen
        })
    }

    toggleSideMenu () {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    currentTab({i,ref}){
        console.log(i)
        if(i != 2){
            this.setState({
                logging: false
            })
        }else{
            this.setState({
                logging: true
            })
        }
    }

    render() {
        const MenuComponent = (
            <View style={{flex: 1, backgroundColor: '#294f58'}}>
                <View style={{flex: 0.15, backgroundColor: "#10c382", justifyContent: "center", alignItems: "center"}}>
                    <View style={styles.profileImageContainer}>
                        <Image style={styles.profileImage} source={{ uri: "https://scontent.fbkk1-3.fna.fbcdn.net/v/t1.0-9/17022287_10154368302923601_9189924764110232103_n.jpg?oh=b85018178581058c543dca55de4272d8&oe=59B86EEE"}} />
                    </View>
                    <Text style={styles.personName}>Thomas Charlesworth</Text>
                </View>
                <View style={styles.ScrollBox}>
                    <View style={styles.scrollMenus}>
                        <TouchableOpacity style={styles.menuBtn}>
                            <Icon name="ios-person-outline" size={25} color="white"/>
                            <Text style={styles.menuTitle}>PROFILE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuBtn}>
                            <Icon name="ios-contacts-outline" size={25} color="white"/>
                            <Text style={styles.menuTitle}>FRIENDS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuBtn}>
                            <Icon name="ios-settings-outline" size={25} color="white"/>
                            <Text style={styles.menuTitle}>SETTINGS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuBtn}>
                            <Icon name="ios-help-circle-outline" size={25} color="white"/>
                            <Text style={styles.menuTitle}>SUPPORT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuBtn}>
                            <Icon name="ios-exit-outline" size={25} color="white"/>
                            <Text style={styles.menuTitle}>LOG OUT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
        return (
            <SideMenu
                bounceBackOnOverdraw={false}
                openMenuOffset={window.width*0.7}
                isOpen={this.state.isOpen}
                onChange={this.onSideMenuChange.bind(this)}
                menu={MenuComponent}
            >
                <View style={styles.header}>
                    <TouchableOpacity style={{flex: 1/3}} onPress={this.toggleSideMenu.bind(this)}>
                        <Icon
                            style={{marginLeft: 10}}
                            name="ios-menu"
                            size={40}
                            color="#10c382"
                        />
                    </TouchableOpacity>
                    {RenderIf(this.state.logging)(
                    <TouchableOpacity style={styles.dayPicker}>
                        <Text style={styles.dayPickerTxt}>Wednesday 10th May</Text>
                    </TouchableOpacity>
                    )}
                    <View style={{flex: 1/3}}>

                    </View>
                </View>
                <ScrollableTabView
                    style={styles.container}
                    initialPage={2}
                    tabBarBackgroundColor="green"
                    tabBarPosition="bottom"
                    locked={true}
                    renderTabBar={() => <TabBar />}
                    onChangeTab={this.currentTab.bind(this)}
                >
                    <ScrollView tabLabel="ios-home-outline" style={{backgroundColor: "white"}}>
                    </ScrollView>
                    <ScrollView tabLabel="ios-cart-outline" style={{backgroundColor: "white"}}>
                    </ScrollView>
                    <ScrollView tabLabel="ios-add-circle-outline" style={{backgroundColor: "#F2F2F2"}}>
                        <Logging />
                    </ScrollView>
                    <ScrollView scrollEnabled={false} tabLabel="ios-man-outline" style={{backgroundColor: "white"}}>
                        <Body />
                    </ScrollView>
                    <ScrollView tabLabel="ios-chatbubbles-outline" style={{backgroundColor: "white"}}>
                    </ScrollView>
                </ScrollableTabView>
            </SideMenu>
        );
    }
}

var window = Dimensions.get('window'); 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        shadowColor: 'gray',
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowRadius: 4,
        shadowOpacity: 0.5
    },
    personName: {
        color: "white",
        margin: 5
    },
    profileImageContainer: {
        marginTop: 20,
        borderRadius: window.width*0.12,
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowRadius: 4,
        shadowOpacity: 0.2,
    },
    profileImage: {
        height: window.width*0.24,
        width: window.width*0.24,
        borderRadius: window.width*0.12
    },
    dayPicker:{
        padding: 10,
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
    ScrollBox: {
        flex: 0.55
    },
    scrollMenus: {
        alignItems: "flex-start",
        paddingTop: 5,
        marginLeft: 20
    },
    menuTitle: {
        color: "white",
        fontSize: 18,
        fontWeight: "500",
    },
    menuBtn: {
        flexDirection: "row",
        alignItems: "center",
        width: window.width*0.7,
        paddingVertical: 10
    },
});