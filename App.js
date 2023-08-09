/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { useState } from 'react';



import AppNavigator from './src/navigation/AppNavigator';
import MainPage from './src/screens/MainPage';
import TodoPage from './src/screens/TodoPage';
import { firebase, initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore"
import 'firebase/database';



const firebaseConfig = {
  apiKey: "AIzaSyAD1a3156hKQ6ysPryYdhosvzXebyVzTPU",
  authDomain: "todonative-7022b.firebaseapp.com",
  projectId: "todonative-7022b",
  storageBucket: "todonative-7022b.appspot.com",
  messagingSenderId: "366109462089",
  appId: "1:366109462089:web:2836cba3ea737e1df37998",
  measurementId: "G-L4467DL7QB"
};

function App() {

  const app = initializeApp(firebaseConfig);
  const db = getFirestore();

  const [isLoaded, setIsLoaded] = useState(false)


  setTimeout(() => {

    setIsLoaded(true)


  }, 2000)

  return (

    <View style={styles.container}>
      {isLoaded ? (
        <AppNavigator />
      ) : (
        <MainPage />
      )}
    </View>



  );

}

const styles = StyleSheet.create({


  container: {

    flex: 1,
    backgroundColor: "#fff",

  }

});

export default App;
