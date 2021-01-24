import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


class SelectButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  

  render() {
    return (
        <TouchableOpacity style={styles.mainContainerStyle} onPress={this.props.onPress} >
        <Text 
        style={{
            color:this.props.color,
            fontSize:hp(2)
        }} >{this.props.buttonText}
        </Text>
        <Text>V</Text>
    </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    mainContainerStyle: {
        flexDirection:"row",
        height: hp(7),
        width: wp(90),
        borderColor: '#0A829A',
        borderWidth:1,
        borderRadius: 20,
        alignSelf: 'center',
        paddingHorizontal:wp(5),
        justifyContent: 'space-between',
        alignItems:'center'
        
    }
});

export default SelectButton;
