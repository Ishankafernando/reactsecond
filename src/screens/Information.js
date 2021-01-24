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
                <Header title="Profile" onPress={() => alert("Hello")} />

                <View style={styles.mainContiner} >
                    {/* <Label labelName='Student Information' /> */}
                    <View style={{ marginTop: hp(2), height: hp(30), justifyContent: 'space-around', marginBottom: hp(0) }} >
                        <InputBox
                            placeholder="Username"
                            onChangeText={text => this.setState({ username: text })}

                        />
                        <InputBox
                            placeholder="Username"
                            onChangeText={text => this.setState({ username: text })}

                        />
                        <Button
                            buttonText="Update Profile"
                            onPress={() => this.props.navigation.navigate('second')}
                        />

                    </View>
                    {/* <Label labelName='Change Password' /> */}
                    <View style={{ marginTop: hp(0), height: hp(30), justifyContent: 'space-around', marginBottom: hp(1) }} >
                        
                        <InputBox
                            placeholder="Username"
                            onChangeText={text => this.setState({ username: text })}

                        />
                        <InputBox
                            placeholder="Username"
                            onChangeText={text => this.setState({ username: text })}

                        />
                        <Button
                            buttonText="Update Profile"
                            onPress={() => this.props.navigation.navigate('second')}
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
    }
});

export default Information;
