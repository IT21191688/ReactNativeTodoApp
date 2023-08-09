import React, { useEffect } from "react";
import { Image, StyleSheet, View, Text, ScrollView } from "react-native";
import { Button, Searchbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { ref, onValue, remove } from "firebase/database";
import { db } from "../config/firebaseconfig";


const TodoPage = () => {

    const navigation = useNavigation();

    const handleAddButtonClick = () => {
        navigation.navigate('AddTodoPage');
    };

    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);


    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const todosRef = ref(db, '/todos');
        const unsubscribe = onValue(todosRef, querySnapshot => {
            const data = querySnapshot.val() || {};
            setTodos(data);
        });

        // Cleanup function to unsubscribe from the listener
        return () => {
            unsubscribe();
        };

    }, [])

    const deleteTodo = (itemId) => {

        const todoRef = ref(db, '/todos/' + itemId);

        remove(todoRef)
            .then(() => {
                console.log("Todo item deleted successfully.");
            })
            .catch((error) => {
                console.error("Error deleting todo item:", error);
            });

    };




    const todosKeys = Object.keys(todos);

    const filteredTodosKeys = todosKeys.filter(
        key => todos[key].todo.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (


        <View style={styles.container}>

            <View style={styles.headingView}>

                <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style={styles.searchBar}
                />

                <Button style={styles.newTodoBtn} onPress={handleAddButtonClick}>Add New</Button>

            </View>

            <ScrollView>
                <View style={styles.listView}>
                    {filteredTodosKeys.length > 0 ? (
                        filteredTodosKeys.map(key => (
                            <View style={styles.listTodos}>
                                <View style={styles.Details}>
                                    <Text key={key}>{todos[key].todo}</Text>
                                    <Text key={key}>{todos[key].description}</Text>
                                </View>
                                <View style={styles.btnGroup}>
                                    <Button onPress={() => navigation.navigate('UpdateTodo', { itemId: key })} style={styles.buttonUp}>Update</Button>
                                    <Button onPress={() => deleteTodo({ itemId: key })} style={styles.buttonDe}>Delete</Button>
                                </View>
                            </View>
                        ))
                    ) : (
                        <Text>No todo item</Text>
                    )}
                </View>

            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {

        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#FF5757'
    },
    newTodoBtn: {

        backgroundColor: '#0324fc',
        width: 100,
        alignSelf: 'flex-end',
        color: '#fcfcfc',
        borderCurve: 'continuous',

    },
    headingView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    headingText: {
        textAlign: 'center',
        fontSize: 29,
        fontWeight: '700',
        marginRight: 10
    },
    newTodoBtn: {
        backgroundColor: '#007bff',
        color: '#ffffff',
        padding: 10,
        borderRadius: 5,
        fontSize: 20,
    },
    searchBar: {
        width: '70%',

    },
    listView: {
        alignItems: 'center',
    },
    listTodos: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        height: 100,
        backgroundColor: "#34ebb4",
        marginTop: 10,
        borderRadius: 8,
        paddingHorizontal: 10,
    },
    detailsContainer: {
        width: '50%',
    },
    todoText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    descriptionText: {
        fontSize: 14,
    },
    btnGroup: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    buttonUp: {
        backgroundColor: '#86f20a',
        width: 80,
        height: 35,
        color: '#ffffff',
        marginBottom: 5,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonDe: {
        backgroundColor: '#86f20a',
        width: 80,
        height: 35,
        color: '#ffffff',
        marginBottom: 5,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f00707'
    },



})

export default TodoPage