import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Header from '../components/Header'
import InputBox from '../common/InputBox'
import HomeItem from '../components/HomeItem'
import Button from '../common/Button';

class Information extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }} >
                <Header title="Profile" onPress={() => this.props.navigation.navigate('home')} />

                <View style={styles.mainContiner} >
                    <Text style={styles.labelStyle}>Student Information</Text>
                    <View style={{ marginTop: hp(0), height: hp(40), justifyContent: 'space-evenly', marginBottom: hp(0) }} >
                        <InputBox
                            placeholder="Name"
                            onChangeText={text => this.setState({ username: text })}

                        />
                        <InputBox
                            placeholder="Secondary Email"
                            onChangeText={text => this.setState({ username: text })}

                        />
                        <Button 
                            buttonText="Update Profile"
                            onPress={() => alert("Profile Updated")}
                        />

                    </View>
                    <Text style={styles.labelStyle}>Change Password</Text>

                    <View style={{ marginTop: hp(0), height: hp(40), justifyContent: 'space-evenly', marginBottom: hp(1) }} >
                        
                        <InputBox
                            placeholder="Password"
                            onChangeText={text => this.setState({ username: text })}

                        />
                        <InputBox
                            placeholder="Re-Enter Password"
                            onChangeText={text => this.setState({ username: text })}

                        />
                        <Button
                            buttonText="Update Profile"
                            onPress={() => alert("Password Updated")}
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
        justifyContent: 'space-around'
    },
    labelStyle: {
        marginTop: hp(2),
        alignSelf: 'center',
        fontSize: hp(3),
        fontWeight: "bold"
        
    },
});

export default Information;
