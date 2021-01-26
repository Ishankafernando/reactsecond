import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Modal } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import moment from 'moment';

import Header from '../components/Header';
import Button from '../common/Button';
import SelectButton from '../common/SelectButton';


const dataList = [{ key: 'CE3345' }, { key: 'CX3335' }, { key: 'CB3315' }, { key: 'CP3145' }, { key: 'CQ3349' }, { key: 'CE1345' }, { key: 'CF3145' }, { key: 'CG3365' }, { key: 'CE3305' }]

class Attendance extends Component {
    constructor(props) {
        super(props)
        this.state = {

            isVisible: false,
            isVisible2: false,
            chosenData: 'Start Time',
            chosenData2: 'End Time',

        };
    }

    _renderItem = ({ item, index }) => {
        let { itemStyle, itemText } = styles
        return (
            <View style={itemStyle}>
                <Text style={itemText}>{item.key}</Text>
            </View>
        )
    }

    handlePicker = (datetime) => {
        this.setState({
            isVisible: false,
            chosenData: moment(datetime).format('HH:mm')
        })
    }
    handlePicker1 = (datetime) => {
        this.setState({
            isVisible: false,
            chosenData2: moment(datetime).format('HH:mm')
        })
    }

    hidePicker = () => {
        this.setState({
            isVisible: false,

        })
    }

    showPicker = () => {
        this.setState({
            isVisible: true
        })
    }


    changeColorDate() {
        if (this.state.chosenData === "Start Time") {
            return "#a2a2a2"
        }
        else {
            return "#000"
        }
    }

    render() {
        let { container, itemText } = styles
        return (
            <View style={{ flex: 1 }} >
                <Header title="Attendance" onPress={() => this.props.navigation.navigate('home')} />
                <View>
                    <View >
                        <Text style={styles.labelStyle}>Modules</Text>
                    </View>
                    <View style={container}>
                        <FlatList
                            data={dataList}
                            renderItem={this._renderItem}
                            keyExtractor={item => item.key}
                            numColumns={3}
                            scrollEnabled={false}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={styles.itemStyle}>
                                    <Text>
                                        {item.key}
                                    </Text>

                                </TouchableOpacity>
                            )}

                        />
                    </View>

                    <View style={{ paddingTop: hp(4) }}>
                        <SelectButton
                            color={this.changeColorDate()}
                            buttonText={this.state.chosenData}
                            onPress={() => this.setState({ isVisible: true })}
                        />

                        <DateTimePickerModal
                            headerTextIOS={'Pic a Time'}
                            isVisible={this.state.isVisible}
                            onConfirm={time => {
                                this.setState({
                                    chosenData: moment(time).format('HH:mm'),
                                    isVisible: false,
                                })
                            }}
                            onCancel={() => this.setState({ isVisible: false })}
                            mode={'time'}
                            is24Hour={false}

                        />
                    </View>

                    <View style={{ paddingTop: hp(4), paddingBottom: hp(3) }}>
                        <SelectButton
                            color={this.changeColorDate()}
                            buttonText={this.state.chosenData2}
                            onPress={() => this.setState({ isVisible2: true })}
                        />

                        <DateTimePickerModal
                            headerTextIOS={'Pic a Time'}
                            isVisible={this.state.isVisible2}
                            onConfirm={time => {
                                this.setState({
                                    chosenData2: moment(time).format('HH:mm'),
                                    isVisible2: false,
                                })
                            }}
                            onCancel={() => this.setState({ isVisible2: false })}
                            mode={'time'}
                            is24Hour={false}
                        />
                    </View>

                    <View>
                        <Button buttonText='Mark Attendance' onPress={() => alert('Attendance Marked')} />
                    </View>

                </View>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    labelStyle: {
        marginTop: hp(5),
        marginBottom: hp(2),
        alignSelf: 'center',
        fontSize: hp(3),
        fontWeight: "bold"
    },
    mainContiner: {
        flex: 1,
        backgroundColor: '#fff',
    },
    itemStyle: {
        backgroundColor: '#CAE5EA',
        alignItems: 'center',
        justifyContent: 'center',
        height: hp(7),
        flex: 1,
        margin: hp(2),
        borderColor: '#0A829A',
        borderWidth: 1.5,
        borderRadius: 20,
    },
    itemText: {
        color: '#000000',
        fontSize: hp(1.5)
    }

});

export default Attendance;
