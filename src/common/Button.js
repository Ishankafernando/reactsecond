import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Pressable } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Button extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.mainContainerStyle} onPress={this.props.onPress} >
                <Text style={styles.textStyle} >{this.props.buttonText}</Text>
            </TouchableOpacity>
        );
    };
}

const styles = StyleSheet.create({
    mainContainerStyle: {
        height: hp(7),
        justifyContent: 'center',
        alignItems: 'center',
        width: wp(90),
        backgroundColor: '#0A829A',
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: hp(3)
    },
    textStyle: {
        fontSize: hp(3.5),
        color: '#fff'
    }
});

export default Button;