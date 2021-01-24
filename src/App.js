import React, { Component } from 'react';
import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native';

import Navigation from './navigation/Navigation'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Navigation />
        );
    }
}

export default App;