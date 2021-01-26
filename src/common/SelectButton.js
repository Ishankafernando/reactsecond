import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
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
        <Image style={styles.imageStyle} source={require('../../assets/downarrow.png')} />
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
        
    },
    imageStyle: {
      height: hp(3),
      width: hp(3),
      marginLeft:wp(0),
      marginTop:hp(.5),
  }
});

export default SelectButton;
