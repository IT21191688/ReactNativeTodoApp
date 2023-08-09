// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import TodoPage from '../screens/TodoPage';
import AddTodoPage from '../screens/AddTodoPage';
import UpdateTodo from '../screens/UpdateTodo';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="TodoPage">
                <Stack.Screen name="TodoPage" component={TodoPage} />
                <Stack.Screen name="AddTodoPage" component={AddTodoPage} />
                <Stack.Screen name="UpdateTodo" component={UpdateTodo} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
