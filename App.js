import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import HomeScreen from './screens/Home';
import CrudScreen from './screens/Crud';
import CadastroScreen from './screens/Cadastro';
import ListaScreen from './screens/Lista';
import LoginScreen from './screens/Login';
import ContatoScreen from './screens/Contato';
import Contato2Screen from './screens/Contato2';
import { initializeApp } from "firebase/app";
import axios from 'axios';
const Stack = createStackNavigator();

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyCRgqMKxIi8RXisnNeZSyponZjtusbLjhE",
    authDomain: "react-227ba.firebaseapp.com",
    projectId: "react-227ba",
    storageBucket: "react-227ba.appspot.com",
    messagingSenderId: "178156097601",
    appId: "1:178156097601:web:1ef9d143acdbd191fc36c0",
    measurementId: "G-BW7M55Y5C2"
  };

  const app = initializeApp(firebaseConfig);



  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Crud" component={CrudScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Lista" component={ListaScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Contato" component={ContatoScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Contato2" component={Contato2Screen} options={{ headerShown: false }}/>
        
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
