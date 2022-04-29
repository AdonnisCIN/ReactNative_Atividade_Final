import React, { useState, useEffect } from 'react';
import { View, Text, TextInput,TouchableHighlight ,StyleSheet} from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ListItem,Header, Button,Image} from 'react-native-elements' 
import { ScrollView } from 'react-native-gesture-handler';
import FlashMessage from "react-native-flash-message"; 
import {showMessage, hideMessage } from "react-native-flash-message";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";

export default function ListaScreen({route,navigation}){

  const firebaseConfig = {
    apiKey: "AIzaSyCRgqMKxIi8RXisnNeZSyponZjtusbLjhE",
    authDomain: "react-227ba.firebaseapp.com",
    projectId: "react-227ba",
    storageBucket: "react-227ba.appspot.com",
    messagingSenderId: "178156097601",
    appId: "1:178156097601:web:1ef9d143acdbd191fc36c0",
    measurementId: "G-BW7M55Y5C2"
  };

  function cadastroUsuarioFirebase(){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, senha)
    createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
    // Signed in
    showMessage({
      message: "Cadastrado com sucesso",
      type: "success",
    });
    console.log('Cadastro realizado com sucesso.');
    
    navigation.navigate('Login')
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    console.log('Erro no cadastramento.');
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  }

  const app = initializeApp(firebaseConfig);

const [email,setEmail] = useState("");
const [senha,setSenha] = useState("");



return (
    
    <View style={{ flex: 1}}>
        <Header
        leftComponent={
            <Button  
            title="<"
            onPress={()=>navigation.navigate('Login')}
            ></Button>}

            centerComponent={{ text: 'Usuário', style: { color: '#fff', fontSize: 25 } }}
        
        />
        <ScrollView>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>  
                


               

            
            <Text style={{paddingTop:20,marginRight: 240,fontSize: 15}}>E-mail</Text>
            <TextInput
            style={{ height: 40,width:300,borderRadius: 5, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setEmail(text)}
            value={email}
            placeholder="Digite o e-mail"
            />

            <Text style={{paddingTop:20,marginRight: 240,fontSize: 15}}>Senha</Text>
            <TextInput
            style={{ height: 40,width:300,borderRadius: 5, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setSenha(text)}
            value={senha}
            placeholder="Digite a senha"
            /> 
               
               <Text style={{paddingTop:20,marginRight: 240,fontSize: 15}}></Text>
               <Button style={{paddingTop:50}}
            title="                        Salvar                        "
            //style={styles.botao}
            //onPress={()=>navigation.navigate('Home')} />
            onPress={()=>{cadastroUsuarioFirebase()}} />

            
            
            

           
           <FlashMessage position="top" />
        </View>
        
        </ScrollView>
    </View>

     
)
}

const styles = StyleSheet.create({

    botao:{
      paddingTop:20,
      width:300
    },
    
  
    titulo:{
      paddingTop:20,
      fontSize:18
    },
  
    Screen:{
      paddingTop:20,
      fontSize:28
    }
  
  })