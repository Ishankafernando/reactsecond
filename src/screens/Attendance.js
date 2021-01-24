import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Header from '../components/Header';
import Button from '../common/Button';
import Modules from '../common/Modules';

class Attendance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            module: [
                { code: "CE3345", key: 1 },
                { code: "CE3323", key: 2 },
                { code: "CE2323", key: 3 },
                { code: "CE3333", key: 4 },
                { code: "C55555", key: 5 },
                { code: "C56556", key: 6 },
                { code: "C56556", key: 7 },
                { code: "C56556", key: 8 },
                { code: "C56556", key: 9 },
            ],
            selectedModule: '',
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }} >
                <Header title="Attendance" onPress={() => alert("Hello")} />
                <View>
                    {/* <Label labelName="Modules" /> */}
                </View>


                <FlatList
                    data={this.state.module}
                    scrollEnabled={false}
                    keyExtractor={item => item.key}
                    columnWrapperStyle={{ justifyContent: 'space-around' }}
                    numColumns={3}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={{
                            height: hp(6),
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: wp(20),
                            backgroundColor: this.state.selectedModule === item.key ? "#0A829A" : '#CAE5EA',
                            borderColor: '#0A829A',
                            borderWidth: 1.5,
                            borderRadius: 20,
                            alignSelf: 'center',
                            marginTop: hp(3)
                        }} onPress={() => this.setState({ selectedModule: item.key })} >
                            <Text style={{
                                fontSize: hp(1.5),
                                color: this.state.selectedModule === item.key ? '#fff' : "#000",
                            }} >{item.code}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
                <Button buttonText='Mark Attendance' />
            </View>
        );
    }
}

const styles = StyleSheet.create({
});

export default Attendance;
