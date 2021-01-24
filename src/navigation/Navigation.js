import React, { Component } from 'react';
import { View, Text } from 'react-native';


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
                    {/* {<Stack.Screen name="first" component={LoginPage} />} */}
                    {/* <Stack.Screen name="second" component={FirstScreen} /> */}
                    {/* <Stack.Screen name="third" component={SecondScreen} /> */}
                    {/* <Stack.Screen name="forth" component={Information} /> */}
                    <Stack.Screen name="fifth" component={Attendance} />


                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default Navigation;
