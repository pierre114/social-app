import React from 'react'
import { StyleSheet, View, Button, Text, TextInput, KeyboardAvoidingView,TouchableOpacity, fontStyle,} from 'react-native'
import { useState, useEffect } from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core'
import * as firebase from "firebase";
import {Ionicons} from '@expo/vector-icons';




const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, errorMessage] = useState(null)

    const navigation = useNavigation()    
  
    const handleSignUp = () => {
      navigation.navigate("Register")
      }

    const handleLogin = () => {
        auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with:', user.email);
            navigation.navigate("Dashboard")
            alert('Login Success!')
        })
        .catch(error => alert(error))

    }


    return(
      <KeyboardAvoidingView
           style={styles.container}
           behavior="padding"
     >
          <View style={styles.inputContainer}>
            <View>
              <Text style={{textAlign: 'center',marginBottom: 10, fontSize: 30, fontWeight: 'bold' }}>Hello Again!</Text>
              <Text style={{textAlign: 'center', fontSize: 15,}}>Welcome back you've been</Text><Text style={{textAlign: 'center',fontSize: 15,marginBottom: 35}}>missed!</Text>
            </View>
          <TextInput 
           placeholder="E-Mail"
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
           <TouchableOpacity>
            <Text style={styles.showPass}>Show Password</Text>
           </TouchableOpacity>
      </View>
    
        
       <View style={styles.buttonContainer}>
         <TouchableOpacity
             onPress={handleLogin}
             style={styles.button}
           >
             <Text style={styles.buttonText}>Sign In</Text>
           </TouchableOpacity>
           </View>
           <TouchableOpacity
             onPress={handleSignUp}>
             <Text style={{marginTop: 50, textAlign: 'right' }}>Not a member? <Text style={styles.registerText}>Register here</Text>
             </Text>
           </TouchableOpacity>
         
     
       </KeyboardAvoidingView>
       
      )

  }







export default Login

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
  }



})

