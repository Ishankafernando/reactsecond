import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar, Platform, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


import BackButton from '../common/BackButton'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderButtons() {
        if (this.props.logoutButtonState) {
            return (
                <TouchableOpacity onPress={this.props.onPress}>
                    <Image style={styles.imageStyle} source={require('../../assets/louout.png')} />
                </TouchableOpacity>
            )
        }
        return (
            <BackButton onPress={this.props.onPress} />
        )
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                {Platform.OS === "ios" &&
                    <View style={{ height: hp(2) }} />
                }
                <StatusBar backgroundColor="#0A829A" barStyle={"light-content"} />
                <View style={styles.row} >
                    {this.renderButtons()}
                    <Text style={styles.textStyle}> {this.props.title} </Text>
                    <View style={{ width: hp(4), }} />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#0A829A",
        paddingVertical: hp(3),
        justifyContent: 'center',
    },
    textStyle: {
        height:hp(4),
        fontSize: hp(3),
        color: '#fff'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: (20),
        
    },
    imageStyle: {
        height: hp(5),
        width: hp(5),
        marginLeft:wp(0),
        marginTop:hp(.5),
    }
});

export default Header;
 