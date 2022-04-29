import React, { useState, useEffect } from 'react';
import { View, Text, TextInput,TouchableHighlight ,StyleSheet, Alert} from 'react-native';
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
        setEmail(email)
        setTelefone(telefone)
        setCpf(cpf)
        setId(id)
        setAlterar(alterar)
    }

},[]) 

  function inserirDados(){
        
    axios.post('http://professornilson.com/testeservico/clientes', {
        nome: getNome,
        telefone: getTelefone,
        cpf: getCpf
      })
      .then(function (response) {
        showMessage({
          message: "Contato inserido com sucesso",
          type: "success",
        });
        
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
        cpf: getCpf
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
        console.log('Registro realizado com sucesso.');
        alert.alert('Registro realizado com sucesso.')
        navigation.navigate('Home')
      })
      .catch(function (error) {
        console.log(error);
      });    
}

function excluirDados(){

    
    Alert.alert(
        "Atenção",
        "Deseja excluir o registro?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => (
            axios.delete('http://professornilson.com/testeservico/clientes/'+getId)
            .then(function (response) {
              setNome('');
              setCpf('');
              setTelefone(''); 
              showMessage({
                  message: "Registro Excluido com sucesso",
                  type: "danger",
                }); 
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            }) 
          ) }
        ],
        { cancelable: false }
      );


    
}

return (
    
    <View style={{ flex: 1}}>
        <Header
        leftComponent={
            <Button  
            title="<"
            onPress={()=>navigation.navigate('Home')}
            ></Button>}
            centerComponent={{ text: 'Contato', style: { color: '#fff', fontSize: 25 } }}
        
        />
        <ScrollView>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>  
                


            <Text style={{paddingTop:20,marginRight: 240,fontSize: 15}}>Nome</Text>
            <TextInput
            style={{ height: 40,width:300,borderRadius: 5, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setNome(text)}
            value={getNome}
            placeholder="Digite o nome"
            />    

            
            <Text style={{paddingTop:20,marginRight: 240,fontSize: 15}}>E-mail</Text>
            <TextInput
            style={{ height: 40,width:300,borderRadius: 5, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setCpf(text)}
            value={getCpf}
            placeholder="Digite o e-mail"
            />

            <Text style={{paddingTop:20,marginRight: 240,fontSize: 15}}>Telefone</Text>
            <TextInput
            style={{ height: 40,width:300,borderRadius: 5, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setTelefone(text)}
            value={getTelefone}
            placeholder="Digite o telefone"
            /> 
               
            <Text style={{paddingTop:20,marginRight: 240,fontSize: 15}}></Text>
            { !getAlterar ? (
            <Button style={{paddingTop:20}}
            title="                        Salvar                        "
            //style={styles.botao}
            onPress={() => inserirDados()}
            />):null}
            
            

            

           
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