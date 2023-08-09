import React from "react";
import { Image, StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { Button, Searchbar } from 'react-native-paper';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { getFirestore } from "firebase/firestore"
import { db } from "../config/firebaseconfig";
import { push, ref } from "firebase/database";


import { useState } from 'react';


const AddTodoPage = () => {


    const [todo, setTodo] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(null);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const handleAddTask = () => {
        /*
        if (todo.trim() !== '') {
            const newTaskObject = {
                id: Date.now().toString(),
                task: todo, // Use the correct todo state
                description: description,
                date: date ? date.toISOString() : "", // Convert Date object to ISO string
            };
            db.database().ref('/tasks/' + newTaskObject.id).set(newTaskObject);
            setTodo('');
            setDescription('');
            setDate(null);
        }
        */

        push(ref(db, '/todos'), {
            todo: todo,
            description: description,
            date: date
        });

    };


    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (selectedDate) => {
        if (selectedDate) {
            setDate(selectedDate);
        }
        hideDatePicker();
    };

    const getDateOfBirth = () => {
        return date ? date.toDateString() : "";
    };



    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Add New Todo</Text>
            <View style={styles.addTodoView}>
                <TextInput
                    style={styles.txtInput}
                    placeholder="Enter Name"
                    value={todo}
                    onChangeText={setTodo}
                />
                <TextInput
                    style={styles.txtInput}
                    placeholder="Description"
                    value={description}
                    onChangeText={setDescription}
                />
                <TextInput
                    style={styles.txtInput}
                    value={getDateOfBirth()}
                    placeholder="Select Birth"
                />
                <View>

                    <TouchableOpacity
                        style={styles.datePicker}
                        onPress={showDatePicker}
                        activeOpacity={0.8}
                    >
                        <Button>Select Date of Birth</Button>
                    </TouchableOpacity>
                    {isDatePickerVisible && (
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            date={date ? date : new Date()}
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />
                    )}

                </View>
                <TouchableOpacity onPress={handleAddTask} style={styles.buttonContainer}>
                    <Text style={styles.AddTask}>Add Task</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#FF5757',
        alignContent: 'center',

    },
    headingText: {

        textAlign: 'center',
        fontSize: 20,
        fontWeight: '700',

    },
    addTodoView: {

        marginTop: 30,
        alignItems: 'center'
    },
    txtInput: {
        height: 40,
        backgroundColor: '#FFFFFF',
        width: '90%',
        marginTop: 30
    },
    datePicker: {

    },
    buttonContainer: {

        width: 200,
        height: 40,
        backgroundColor: "#0747de",
        color: '#ffffff',
        fontSize: 20,
        borderRadius: 10

    },
    AddTask: {
        textAlign: 'center',
        alignContent: 'center',
        padding: 5
    }





})

export default AddTodoPage