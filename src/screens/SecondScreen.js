import React, { Component } from 'react';
import { View, Text, StyleSheet, Modal, TouchableWithoutFeedback, FlatList, TouchableOpacity, Container } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';


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
            selectdate:'',

            modalVisible: false,
            examName: "Select Your Exam",
            isVisible: false,
            chosenData: 'Select Date',
        };

    }


    renderPickerModal() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisible}

            >
                <View
                    onChangeText={this.props.onChangeText}
                    style={styles.centeredView}>
                    <TouchableWithoutFeedback onPress={() => this.setState({ modalVisible: false })} >
                        <View style={styles.modalView}>
                            <FlatList
                                data={examData}
                                keyExtractor={item => item.examName}
                                renderItem={({ item }) => (
                                    <TouchableWithoutFeedback onPress={() => this.setState({ examName: item.examName, modalVisible: false })}  >
                                        <Text
                                            onChangeText={text => this.setState({ Selectexam: text })}
                                            style={styles.selectSize}>{item.examName}</Text>
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
        if (this.state.examName === "Select Your Exam") {
            return "#a2a2a2"
        }
        else {
            return "#000"
        }
    }

    handlePicker = (datetime) => {
        this.setState({
            isVisible: false,
            chosenData: moment(datetime).format('MMMM,Do YYYY')
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
        if (this.state.chosenData === "Select Date") {
            return "#a2a2a2"
        }
        else {
            return "#000"
        }
    }
    render() {
        console.log("Module code : " + this.state.modulecode);
        console.log("Select Exam : " + this.state.selectexam);
        console.log("Select Date : " + this.state.selectdate);

        return (
            <View>
                <Header title="Book Exam" onPress={() => this.props.navigation.navigate('home')} />
                <View style={styles.mainContainer}>
                    <View style={{ marginTop: hp(3), height: hp(25), justifyContent: 'space-around', marginBottom: hp(3) }} >
                        <InputBox
                            placeholder="Module Code"
                            onChangeText={text => this.setState({ modulecode: text })}
                        />
                        <SelectButton
                            onChangeText={text => this.setState({selectexam:text})}
                            color={this.changeColor()}
                            buttonText={this.state.examName}
                            onPress={() => this.setState({ modalVisible: true })}
                        />
                    </View>
                    <View style={{ paddingBottom: hp(10) }}>
                        <SelectButton
                            onChangeText={text => this.setState({selectdate:text})}
                            color={this.changeColorDate()}
                            buttonText={this.state.chosenData}
                            onPress={this.showPicker}
                        />

                        <DateTimePickerModal
                            headerTextIOS={'Select Date'}
                            isVisible={this.state.isVisible}
                            onConfirm={this.handlePicker}
                            onCancel={this.hidePicker}
                            mode={'date'}
                            is24Hour={false}

                        />
                    </View>
                    <Button
                        buttonText="Book"
                        onPress={() => alert("Booked Exam Date.")}
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
