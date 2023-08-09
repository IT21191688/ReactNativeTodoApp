import React from "react";
import { useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { ref, onValue, get, update } from "firebase/database";
import { db } from "../config/firebaseconfig";
import { Image, StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";




const UpdateTodo = ({ route }) => {
    const { itemId } = route.params;

    const [todoDetails, setTodoDetails] = useState({});
    const [todo, setTodo] = useState('');
    const [description, setDescription] = useState('');

    const handleAddTask = () => {
        update(ref(db, '/todos'), {
            [itemId]: {
                description: description,
                todo: todo
            },
        }).then(() => {
            console.log("Success");
        });
    };

    useEffect(() => {
        const todoRef = ref(db, `/todos/${itemId}`);
        get(todoRef)
            .then(snapshot => {
                if (snapshot.exists()) {
                    setTodoDetails(snapshot.val());
                } else {
                    console.log('Todo item not found');
                }
            })
            .catch(error => {
                console.error('Error fetching todo details:', error);
            });
    }, []);

    useEffect(() => {
        setTodo(todoDetails.todo);
        setDescription(todoDetails.description);
    }, [todoDetails]);

    return (
        <View style={styles.container}>
            <View style={styles.updateHeader}>
                <Text style={styles.header}>Update Todo</Text>
            </View>
            <View style={styles.contentUpdate}>
                <TextInput
                    style={styles.txtInput}
                    value={todoDetails.todo}
                    onChangeText={setTodo}
                />
                <TextInput
                    style={styles.txtInput}
                    value={todoDetails.description}
                    onChangeText={setDescription}
                />
                <Button onPress={handleAddTask} style={styles.updateBtn}>Update</Button>
                <Button style={styles.cancelBtn}>Cancel</Button>
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
    },
    inner: {


        width: 100,
        height: 100,
        backgroundColor: 'inherit'


    },

    innerText: {
        alignItems: 'center',
        fontWeight: '800',
        fontSize: 20

    },
    txtInput: {
        height: 40,
        backgroundColor: '#FFFFFF',
        width: '90%',
        marginTop: 30
    },

    updateHeader: {
        alignItems: 'center',


    },
    header: {

        fontSize: 30,
        fontWeight: '800',
        color: '#757171'

    },
    contentUpdate: {

        alignItems: 'center'

    },
    updateBtn: {


        backgroundColor: '#2df716',
        marginTop: 20,
        width: 150

    }
    ,
    cancelBtn: {
        backgroundColor: "#ed09e6",
        marginTop: 10,
        width: 150
    }



})

export default UpdateTodo