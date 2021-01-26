import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';


import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';
import LoginPage from '../screens/LoginPage';
import Attendance from '../screens/Attendance';



import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Information from '../screens/Information';

const Stack = createStackNavigator();


class Navigation extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                    }}
                >
                    <Stack.Screen name="login" component={LoginPage} />
                    <Stack.Screen name="home" component={FirstScreen} />
                    <Stack.Screen name="exam" component={SecondScreen} />
                    <Stack.Screen name="profile" component={Information} />
                    <Stack.Screen name="modules" component={Attendance} />


                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default Navigation;
