import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


class Modules extends Component {
  

  render() {
    return (
      <TouchableOpacity key={this.props.key} style={styles.mainButtonStyle} onPress={this.props.onPress} >
          <Text style={styles.textStyle} >{this.props.buttonText}
          </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    mainButtonStyle:{
        height: hp(6),
        justifyContent: 'center',
        alignItems: 'center',
        width: wp(20),
        backgroundColor: '#9bc8d1',
        borderColor:'#0A829A',
        borderWidth:1.5,
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: hp(3)
    },
    textStyle: {
        fontSize: hp(1.5),
        color: '#000000'
    }

});
export default Modules;
