import React from 'react'
import { StyleSheet, View, Button, Text, TextInput, KeyboardAvoidingView,TouchableOpacity, fontStyle} from 'react-native'
import { useState, useEffect } from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core'
import * as firebase from "firebase";
import {Ionicons} from '@expo/vector-icons';




const Register = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
 
    
  
    const handleSignUp = () => {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          console.log('Registered with:', user.email);
          name
          alert('Registration Success!')
      })
      .catch(error => alert('error.message'))
    }
    const backLog = () => {
      navigation.navigate("Login");
    }
    


    return(

      <KeyboardAvoidingView
           style={styles.container}
           behavior="padding"
     >      
          <TouchableOpacity style={styles.backrow} onPress={backLog}>
            
            <Ionicons name="md-arrow-back" size={32} color="#FFF"></Ionicons>
            </TouchableOpacity>


            <View>
              <Text style={{textAlign: 'center',marginBottom: 10, fontSize: 30, fontWeight: 'bold' }}>Sign Up!</Text>
             </View>

             <View style={{alignContent: 'center', justifyContent: "center"}}>
             <TouchableOpacity style={styles.avatar}>
                <Ionicons
                    name="md-add"
                    size={35}
                    color="#FFF"
                    style={{marginTop: 1, marginLeft:33}}
                    
                ></Ionicons>
              </TouchableOpacity>
             </View>
          
          <View style={styles.inputContainer}>


          <TextInput
           placeholder="Full Name"
           value={name}
           onChangeText={text => setName(text)}
           style={styles.input}
           />
          <TextInput
           placeholder="E-mail"
           value={email}
           onChangeText={text => setEmail(text)}
           style={styles.input}
           />
           <TextInput
           placeholder="Password"
           value={password}
           onChangeText={text => setPassword(text)}
           style={styles.input}
           secureTextEntry
           />
          <TextInput
           placeholder="Confirm Password"
           style={styles.input}
           secureTextEntry
           />
           <TouchableOpacity>
            <Text style={styles.showPass}>Show Password</Text>
           </TouchableOpacity>

      </View>
    
        
       <View style={styles.buttonContainer}>
         <TouchableOpacity
             onPress={handleSignUp}
             style={styles.button}
           >
             <Text style={styles.buttonText}>Sign Up</Text>
           </TouchableOpacity>
           </View>
          
     
       </KeyboardAvoidingView>
       
      )

  }







export default Register

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CFE6EF'
  },

  inputContainer:{
      width: '80%'
  },
  input:{
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 25,
      marginTop: 15,
      height: 45,
      borderWidth: 1,
      borderColor: 'black'
  },
  buttonContainer:{
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
  },
  button:{
      backgroundColor: '#2303D2',
      width: '135%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      borderColor: 'black',
      borderWidth: 1,
    
  },
  registerText:{
      textDecorationLine: 'underline'
  },
  showPass:{
    textDecorationLine: 'underline',
    textAlign: 'right',
    marginTop: 15
  },

  buttonText:{
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    borderRadius: 10,
    borderColor: 'black'
  },
  
  buttonOutlineText:{
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },

  backrow: {
    position: "absolute",
    top: 48,
    left: 32,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(21, 22, 48, 0.1)",
    alightItem: "center",
    justifyContent: "center"
},

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#E1E2E6",
    marginTop: 48,
    justifyContent: "center",
    alightItems: "center"
  }

});

