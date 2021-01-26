import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


import Header from '../components/Header'
import Button from '../common/Button'
import HomeItem from '../components/HomeItem';

class FirstScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }


    render() {
        
        return (
            <View style={{flex:1}} >
                <Header title="Home" onPress={() => this.props.navigation.navigate('login')} logoutButtonState />

                <View style={styles.mainContiner} >
                
                    <View style={{ flexDirection: "row", justifyContent: 'space-around', marginTop:hp(10) }} >
                        <HomeItem
                            buttonTitle="Book Exam"
                            source={require('../../assets/exam.png')}
                            onPress={() => this.props.navigation.navigate('exam') }
                        />
                        <HomeItem 
                            buttonTitle="Attendance"
                            imageHeight ={hp(8)}
                            source={require('../../assets/attendence.png')}
                            onPress={() => this.props.navigation.navigate('modules')}
                        />
                    </View>
                    <View style={{ alignSelf: "center", marginTop:hp(13)}} >
                        <HomeItem
                            buttonTitle="Profile"
                            source={require('../../assets/profile.png')}
                            onPress={() => this.props.navigation.navigate('profile')}
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
