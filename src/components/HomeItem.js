import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity,Image, View, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class HomeItem extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.mainContainerStyle} onPress={this.props.onPress} >
                <View style={styles.imageContinerStyle} >
                <Image style={{
                    height: this.props.imageHeight || hp(6),
                    width: this.props.imageWidth ||  hp(9),
                }}  source={this.props.source}  />
                </View>
                <Text style={styles.textStyle} >{this.props.buttonTitle}</Text>
            </TouchableOpacity>
        );
    };
}

const styles = StyleSheet.create({
    mainContainerStyle: {
        height: hp(16),
        width: hp(12),
        justifyContent:'space-between',
        alignItems:'center'
    },
    imageContinerStyle:{
        backgroundColor:'#f2f2f2',
        height: hp(13),
        width: hp(13),
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15
    },
    textStyle:{
        textAlign:'center',
        marginTop:hp(1)
    }
});

export default HomeItem;