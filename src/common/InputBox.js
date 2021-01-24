import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class InputBox extends Component {
    render() {
        return (
            <TextInput 
                style={styles.containerStyle} 
                onChangeText={this.props.onChangeText}
                value={this.props.value}
                placeholder={this.props.placeholder}
                secureTextEntry={this.props.secureTextEntry}
                keyboardType={this.props.keyboardType}
            />
        );
    };
}

const styles = StyleSheet.create({
    containerStyle: {
        height: hp(7),
        width: wp(90),
        borderColor: '#0A829A',
        borderWidth:1,
        borderRadius: 20,
        alignSelf: 'center',
        paddingLeft:wp(5),
        fontSize:hp(2.2)
    }
});

export default InputBox;