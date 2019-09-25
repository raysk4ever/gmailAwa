import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Picker, ToolbarAndroid, Button, ScrollView, CameraRoll, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { withNavigation } from "react-navigation";
import styles from './style/composeStyle';
import Menu from './components/menu';
import Attach from './components/attach';

import colors from '../unit/colors';

class Compose extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            open_menu: false,
            open_attach: false,
            gmail: '',
            photos: '',
            toggleStyle: styles.to_child,
            toggleIcon: styles.down,
            toogleMenu: Menu(),
        };
    }

    updateUser = (gmail) => {
        this.setState({ gmail: gmail })
    };



    _handleButtonPress = (text) => {
        Linking.openURL(`whatsapp://send?text=${"Vumonic.com"}`);
    };

    togglVisible = () => {
        // const open_menu = !this.state.open_menu;
        // const open_attach = !this.state.open_attach;
        // console.warn(`clickd`)
        // this.setState({ open_menu, open_attach })
        // alert(1)
    }
    goBack = () => {
        this.props.navigation.goBack(null);
    }

    render() {
        const menus = this.state.open_menu;
        return (
            <View onPress={() => this.togglVisible} style={[styles.container]}>

                {/* =================================================================================================== */}
                {this.state.open_menu ? Menu(menus) : null}




                {this.state.open_attach ? Attach() : null}
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={this.goBack}
                        style={styles.back}>
                        <Icon name='arrow-back' size={24} color='#474747' />
                    </TouchableOpacity>
                    <View style={styles.com}>
                        <Text style={styles.compose}>Compose</Text>
                    </View>
                    <View style={styles.icn}>
                        <TouchableOpacity
                            onPress={() => this.setState({ open_attach: true })}
                            style={styles.attach}>
                            <Icon name='attachment' size={24} color='#474747' />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.send}>
                            <Icons name='send' size={24} color='#474747' />
                        </TouchableOpacity>
                        {/* =================================================================================================================== */}
                        <TouchableOpacity
                            // onPress={() => {
                            //     let sty = { ...this.state.toogleMenu }
                            //     this.setState({ toggleMenu: sty })
                            // }}
                            onPress={() => this.setState({ open_menu: true })}
                            style={styles.more}>
                            <Icon name='more-vert' size={24} color='#474747' />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.froms}>
                    <Text style={styles.from}>From</Text>
                    <View style={styles.select}>
                        <Picker
                            selectedValue={this.state.gmail}
                            style={styles.picker}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ gmail: itemValue })
                            }>
                            <Picker.Item label="chaurasia@vumonic.com" value="chaurasia@vumonic.com" />
                            <Picker.Item label="awadhesh@vumonic.com" value="awadhesh@vumonic.com" />
                        </Picker>
                    </View>
                </View>

                <View>
                    <View style={styles.to}>

                        <Text style={styles.from}>To</Text>
                        <View style={styles.select}>
                            <TextInput
                                placeholder=""
                                style={styles.textInput}
                                underlineColorAndroid="transparent"
                                onChangeText={email => this.setState({ email })}
                            />
                            <Icon onPress={() => {
                                let style = { ...this.state.toggleStyle };
                                style.display = "flex";
                                this.setState({ toggleStyle: style, toggleIcon: { display: "none" } })



                            }} name='keyboard-arrow-down' size={30} color='#474747'
                                style={this.state.toggleIcon} />
                        </View>
                    </View>

                    <View style={this.state.toggleStyle}>
                        <Text style={styles.from}>Cc</Text>
                        <View style={styles.select}>
                            <TextInput
                                placeholder=""
                                style={styles.textInput}
                                underlineColorAndroid="transparent"
                                onChangeText={email => this.setState({ email })}
                            />
                        </View>
                    </View>
                    <View style={this.state.toggleStyle}>
                        <Text style={styles.from}>Bcc</Text>
                        <View style={styles.select}>
                            <TextInput
                                placeholder=""
                                style={styles.textInput}
                                underlineColorAndroid="transparent"
                                onChangeText={email => this.setState({ email })}
                            />
                        </View>
                    </View>

                </View>
                <View style={styles.to}>
                    <TextInput
                        multiline
                        placeholder="Subject"
                        placeholderTextColor="#BDB6B6"
                        style={styles.sub}
                        underlineColorAndroid="transparent"
                    />
                </View>

                <View style={[styles.to, { borderBottomWidth: 0 }]}>
                    <TextInput
                        multiline
                        placeholder="Compose email"
                        placeholderTextColor="#BDB6B6"
                        style={styles.sub}
                        underlineColorAndroid="transparent"
                    />
                </View>

                {/* <Button title="open other app" onPress={this._handleButtonPress} /> */}
                {/* 
                {this.state.open_menu ? Menu() : null}
                {this.state.open_attach ? Attach() : null} */}
            </View>
        );
    }
}

export default withNavigation(Compose);
