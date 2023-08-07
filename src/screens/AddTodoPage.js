import React from "react";
import { Image, StyleSheet, View, Text, ScrollView } from "react-native";
import { Searchbar } from 'react-native-paper';

import { useState } from 'react';


const AddTodoPage = () => {



    return (
        <View style={styles.container}>

            <Text style={styles.headingText}>Add New Todo</Text>



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
    headingText: {

        textAlign: 'center',
        fontSize: 20,
        fontWeight: '700'
    }


})

export default AddTodoPage