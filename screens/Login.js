import React, { useState, useEffect } from 'react';
import { View, Text, TextInput,TouchableHighlight ,StyleSheet} from 'react-native';

import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ListItem,Header, Button,Image} from 'react-native-elements' 
import { ScrollView } from 'react-native-gesture-handler';
import FlashMessage from "react-native-flash-message"; 
import {showMessage, hideMessage } from "react-native-flash-message";
import  Icon  from 'react-native-vector-icons/FontAwesome';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default function ListaScreen({route,navigation}){

const [getNome,setNome] = useState();
const [email,setEmail] = useState("");
const [senha,setSenha] = useState("");
const [getCpf,setCpf] = useState();
const [getTelefone,setTelefone] = useState();
const [getId,setId] = useState();
const [getAlterar,setAlterar] = useState();

const firebaseConfig = {
  apiKey: "AIzaSyCRgqMKxIi8RXisnNeZSyponZjtusbLjhE",
  authDomain: "react-227ba.firebaseapp.com",
  projectId: "react-227ba",
  storageBucket: "react-227ba.appspot.com",
  messagingSenderId: "178156097601",
  appId: "1:178156097601:web:1ef9d143acdbd191fc36c0",
  measurementId: "G-BW7M55Y5C2"
};

function loginFirebase(){
  

const auth = getAuth();
signInWithEmailAndPassword(auth, email, senha)
  .then((userCredential) => {
    console.log('Conectado');
    
    navigation.navigate('Home')
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    console.log('Não foi possível estabelecer a conexão.');
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

const app = initializeApp(firebaseConfig);

return (

    
    <View style={{ flex: 1}}>
        <Header
        leftComponent={
            <Button  
            title=""
            onPress={()=>navigation.navigate('Home')}
            ></Button>}
            centerComponent={{ text: 'Login', style: { color: '#fff', fontSize: 25 } }}
        
        />
        <ScrollView>

             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>  
                <Image
                source={{ uri: 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v937-aew-111_3.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=8ce2cd03f94f2baddcb332cfb50f78b9' }}
                style={{ width: 200, height: 200 }}
             />


            <Text style={{marginRight: 240,fontSize: 15}}>E-mail:</Text>
            <TextInput
            style={{ height: 40,width:300,borderRadius: 5, borderColor: 'gray', borderWidth: 1 }}
            placeholder="Digite seu email"
            onChangeText={text => setEmail(text)}
            value={email}
            />    

            <Text style={{paddingTop:20,marginRight: 240,fontSize: 15}}>Senha:</Text>
            <TextInput
            secureTextEntry={true}
            style={{ height: 40,width:300,borderRadius: 5, borderColor: 'gray', borderWidth: 1 }}
            placeholder="Digite sua senha"
            leftIcon={
              <Icon
                name='user'
                size={24}
                color='black'
              />
            }
            onChangeText={text => setSenha(text)}
            value={senha}
            /> 

                 
            <Text style={{paddingTop:10,marginRight: 240, fontSize: 15}}></Text>
            
            <Button style={{paddingTop:50}}
            title="                        Login                        "
            //style={styles.botao}
            //onPress={()=>navigation.navigate('Home')} />
            onPress={()=>{loginFirebase()}} />
            

            <Text style={{paddingTop:10,marginRight: 240, fontSize: 15}}></Text>
            <Button style={{paddingTop:50}}
            title="                   Cadastre-se                   "
            
            onPress={()=>navigation.navigate('Cadastro')}
            />
            
            

            
            
            { getAlterar ? (
            <Button style={{paddingTop:20}}
            title="Excluir"
            color="red"
            linearGradientProps={{
                colors: ['red','red', 'red'],
                }}
            //style={styles.botaoExcluir}
            onPress={() => excluirDados()}
            />
            ):null}

           
           <FlashMessage position="top" />
        </View>
        
        </ScrollView>
    </View>

     
)
}

const styles = StyleSheet.create({

  
  
  })