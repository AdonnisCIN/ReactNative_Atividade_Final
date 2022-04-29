import React, { useState, useEffect } from 'react';
import { View, Text, TextInput,TouchableHighlight ,StyleSheet} from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ListItem,Header, Button,Image} from 'react-native-elements' 
import { ScrollView } from 'react-native-gesture-handler';
import FlashMessage from "react-native-flash-message"; 
import {showMessage, hideMessage } from "react-native-flash-message";


export default function ListaScreen({route,navigation}){

const [getNome,setNome] = useState();
const [getEmail,setEmail] = useState();
const [getCpf,setCpf] = useState();
const [getTelefone,setTelefone] = useState();
const [getId,setId] = useState();
const [getAlterar,setAlterar] = useState();

useEffect(()=>{
    if(route.params){
        const { nome } =  route.params 
        const { telefone } =  route.params 
        const { cpf } =  route.params 
        const { id } =  route.params
        const { alterar } =  route.params
        const { email } =  route.params

        setNome(nome)
        setTelefone(telefone)
        setCpf(cpf)
        setId(id)
        setAlterar(alterar)
        setEmail(email)
    }

},[]) 

async function inserirDados(){
        
    axios.post('http://professornilson.com/testeservico/clientes', {
        nome: getNome,
        telefone: getTelefone,
        cpf: getCpf,
        email:getEmail
      })
      .then(function (response) {
         
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });     
    
}

function alterarDados(){
    axios.put('http://professornilson.com/testeservico/clientes/'+getId, {
        nome: getNome,
        telefone: getTelefone,
        cpf: getCpf,
        email: getEmail
      })
      .then(function (response) {
        setNome('');
        setCpf('');
        setTelefone(''); 
        showMessage({
            message: "Registro Alterado com sucesso",
            type: "success",
          }); 
        console.log(response);
        navigation.navigate('Home');
      })
      .catch(function (error) {
        console.log(error);
      });    
}

function excluirDados(){

    
    
            axios.delete('http://professornilson.com/testeservico/clientes/'+getId)
            .then(function (response) {
              showMessage({
                message: "Contato Excluído com sucesso",
                type: "success",
              });
              console.log(response);
              navigation.navigate('Home');
            })
            .catch(function (error) {
              console.log(error);
              
            }); 
           }
       



return (
    
    <View style={{ flex: 1}}>
        <Header
        leftComponent={
            <Button  
            title="<"
            onPress={()=>navigation.navigate('Home')}
            ></Button>}
            centerComponent={{ text: 'Usuário', style: { color: '#fff', fontSize:25 } }}
        
        />
        <ScrollView>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>  
                


            <Text style={{paddingTop:50,marginRight: 240, fontSize: 15}}>Nome:</Text>
            <TextInput
            style={{ height: 40,width:300,borderRadius: 5,fontWeight: 'bold',fontWeight: 'bold', borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setNome(text)}
            value={getNome}
            placeholder="Digite seu nome"
            />    

           
            <Text style={{paddingTop:30,marginRight: 240, fontSize: 15}}>E-mail:</Text>
            <TextInput
            style={{ height: 40,width:300,borderRadius: 5,fontWeight: 'bold', borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setEmail(text)}
            value={getEmail}
            placeholder="Digite seu email"
            />

            <Text style={{paddingTop:30,marginRight: 240, fontSize: 15}}>Telefone:</Text>
            <TextInput
            style={{ height: 40,width:300,borderRadius: 5,fontWeight: 'bold', borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setTelefone(text)}
            value={getTelefone}
            placeholder="Digite seu telefone"
            /> 
               

            
            <Text style={{paddingTop:20,marginRight: 240, fontSize: 15}}></Text>
            { getAlterar ? (
            <Button style={{paddingTop:10}}
            title="                        Alterar                       "
            //style={styles.botao}
            onPress={() => alterarDados()}
            />
            ):null}
            <Text style={{paddingTop:20,marginRight: 240, fontSize: 15}}></Text>
            { getAlterar ? (
            <Button style={{paddingTop:50}}
            title="                        Excluir                       "
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

    botao:{
      paddingTop:20,
      width:300
    },
    botaoExcluir:{
        paddingTop:20,
        width:300,
        
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