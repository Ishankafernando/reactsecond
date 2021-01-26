import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


import InputBox from '../common/InputBox'
import Button from '../common/Button'
import SignupButton from '../common/SignupButton'



class LoginPage extends Component {
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
            <View style={styles.mainContiner} >
                <ScrollView>
                    <Text style={styles.labelStyle}>Login Page</Text>

                    <View style={{ height: hp(30), justifyContent: 'space-around', marginBottom: hp(0) }} >
                        <InputBox
                            placeholder="Username"
                            onChangeText={text => this.setState({ username: text })}
                            keyboardType={"phone-pad"}
                        />
                        <InputBox
                            secureTextEntry
                            placeholder="Password"
                            onChangeText={text => this.setState({ password: text })}
                        />
                    </View>
                    <View style={{ paddingVertical: hp(5) }}>
                        <Button
                            buttonText="Login"
                            onPress={() => this.props.navigation.navigate('home')}
                        />
                    </View>
                    <Text style={styles.label2Style}>Not a member yet?</Text>


                    <SignupButton
                        signupText="Signup"
                        onPress={()=> alert("Signup Page")}
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContiner: {
        flex: 1,
        backgroundColor: '#fff',

    },
    labelStyle: {
        alignSelf: 'center',
        marginVertical: hp(10),
        fontSize: hp(3.5)
    },
    label2Style: {
        marginTop: hp(5),
        marginBottom: hp(2),
        alignSelf: 'center',
        fontSize: hp(3)
    },
});

export default LoginPage;
