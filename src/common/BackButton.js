import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class BackButton extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.mainContainerStyle} onPress={this.props.onPress} >
                <Image style={styles.imageStyle} source={require('../../assets/back.png')} />
            </TouchableOpacity>
        );
    };
}

const styles = StyleSheet.create({
    mainContainerStyle: {
        height: hp(5),
        width: hp(5),
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: hp(2.5),

        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    imageStyle: {
        
        height: hp(4.5),
        width: hp(4.5),
    }
});

export default BackButton;