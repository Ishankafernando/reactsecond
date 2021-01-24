import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


import Header from '../components/Header'
import Button from '../common/Button'
import InputBox from '../common/InputBox'
import HomeItem from '../components/HomeItem';

class FirstScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }


    render() {
        console.log("NAME : " + this.state.username);
        console.log("Password : " + this.state.password);
        return (
            <View style={{flex:1}} >
                <Header title="Home" onPress={() => alert("Hello")} logoutButtonState />

                <View style={styles.mainContiner} >
                
                    <View style={{ flexDirection: "row", justifyContent: 'space-around', marginTop:hp(5) }} >
                        <HomeItem
                            buttonTitle="Book Exam"
                            source={require('../../assets/exam.png')}
                            onPress={() => alert("Book Exam")}
                        />
                        <HomeItem 
                            buttonTitle="Attendance"
                            imageHeight ={hp(8)}
                            source={require('../../assets/attendence.png')}
                            onPress={() => alert("Attendance")}
                        />
                    </View>
                    <View style={{ alignSelf: "center", marginBottom:hp(20) }} >
                        <HomeItem
                            buttonTitle="Profile"
                            source={require('../../assets/profile.png')}
                            onPress={() => alert("Profile")}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContiner: {
        flex: 1,
        backgroundColor: '#fff',
        
    },
    
});

export default FirstScreen;
