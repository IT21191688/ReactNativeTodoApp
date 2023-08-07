// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainPage from '../screens/MainPage';
import TodoPage from '../screens/TodoPage';
import AddTodoPage from '../screens/AddTodoPage';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="MainPage">
                <Stack.Screen name="MainPage" component={MainPage} />
                <Stack.Screen name="TodoPage" component={TodoPage} />
                <Stack.Screen name="AddTodoPage" component={AddTodoPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
