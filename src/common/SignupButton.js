import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Pressable, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


class SignupButton extends Component {

    render() {
        return (
            <TouchableOpacity style={styles.mainContainerStyle} onPress={this.props.onPress} >
                <Text style={styles.textStyle} >{this.props.signupText}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    mainContainerStyle: {
        height: hp(3.5),
        justifyContent: 'center',
        alignItems: 'center',
        width: wp(90),
        alignSelf: 'center',
        marginTop: hp(0)
    },
    textStyle: {
        fontSize: hp(3),
        color: '#0A829A'
    }
});

export default SignupButton;
