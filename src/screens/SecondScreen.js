import React, { Component } from 'react';
import { View, Text, StyleSheet, Modal, TouchableWithoutFeedback, FlatList, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


import examData from '../data/ExamItems.json'

import Header from '../components/Header'
import Button from '../common/Button'
import InputBox from '../common/InputBox'
import SelectButton from '../common/SelectButton';

class SecondScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modulecode: '',
            selectexam: '',
            selectdate: '',
            modalVisible: false,
            examName: "SELECT YOUR EXAM"
        };
    }

    renderPickerModal() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisible}

            >
                <View style={styles.centeredView}>
                    <TouchableWithoutFeedback onPress={() => this.setState({ modalVisible: false })} >
                        <View style={styles.modalView}>
                            <FlatList
                                data={examData}
                                keyExtractor={item => item.examName}
                                renderItem={({ item }) => (
                                    <TouchableWithoutFeedback onPress={() => this.setState({ examName: item.examName, modalVisible: false })}  >
                                        <Text style={styles.selectSize}>{item.examName}</Text>
                                    </TouchableWithoutFeedback>

                                )}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </Modal>
        )
    }


    changeColor() {
        if (this.state.examName === "SELECT YOUR EXAM") {
            return "#a2a2a2"
        }
        else {
            return "#000"
        }
    }


    render() {
        return (
            <View>
                <Header title="Book Exam" onPress={() => alert("Hello")} />
                <View style={styles.mainContainer}>
                    <View style={{ marginTop: hp(1), height: hp(20), justifyContent: 'space-around', marginBottom: hp(1) }} >
                        <InputBox
                            placeholder="Module Code"
                            onChangeText={text => this.setState({ modulecode: text })}
                        />
                        <SelectButton
                            color={this.changeColor()}
                            buttonText={this.state.examName}
                            onPress={() => this.setState({ modalVisible: true })}
                        />
                    </View>

                    <Button
                        buttonText="Book"
                        onPress={() => this.props.navigation.navigate('first')}
                    />
                    {this.renderPickerModal()}
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },

});

export default SecondScreen;
