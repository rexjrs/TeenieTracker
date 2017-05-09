import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { SideMenu } from 'react-native-elements';

export default class Main extends Component {
    constructor () {
        super()
        this.state = {
            isOpen: false
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

    render() {
        const MenuComponent = (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <View style={{flex: 0.15, backgroundColor: "#f6cac9"}}>

                </View>
                <View style={styles.ScrollBox}>
                    <View style={styles.scrollMenus}>
                        <TouchableOpacity style={styles.menuBtn}>
                            <Text style={styles.menuTitle}>TEENIES</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuBtn}>
                            <Text style={styles.menuTitle}>MEALS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuBtn}>
                            <Text style={styles.menuTitle}>EXERCISE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuBtn}>
                            <Text style={styles.menuTitle}>PROGRESS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuBtn}>
                            <Text style={styles.menuTitle}>SETTINGS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.logoutBtn}>
                            <Text style={[styles.menuTitle,{color: "white"}]}>SIGN OUT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
        return (
            <SideMenu
                openMenuOffset={window.width*0.7}
                isOpen={this.state.isOpen}
                onChange={this.onSideMenuChange.bind(this)}
                menu={MenuComponent}
            >
                <View style={styles.container}>
                </View>
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
    ScrollBox: {
        flex: 0.55
    },
    scrollMenus: {
        alignItems: "center",
        paddingTop: 5
    },
    menuTitle: {
        color: "gray",
        fontSize: 20,
        fontWeight: "500"
    },
    menuBtn: {
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    logoutBtn: {
        backgroundColor: "#f6cac9",
        paddingHorizontal: 30,
        paddingVertical: 10,
        position: "absolute",
        bottom: 0
    },
});