import React from "react";
import { Image, StyleSheet, View, Text, ScrollView } from "react-native";
import { Button, Searchbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';


const TodoPage = () => {

    const navigation = useNavigation();

    const handleAddButtonClick = () => {
        navigation.navigate('AddTodoPage');
    };

    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);



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

    }


})

export default TodoPage