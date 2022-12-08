import React from 'react';
import { View, Button, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, ScrollView,TextInput } from 'react-native';
import {NavigationContainer, useRoute } from '@react-navigation/native';
import { useState } from 'react' 
import {Ionicons} from '@expo/vector-icons';




const Dashboard = ({ navigation }) => {
 
  const navigateToPosting = () => {
    navigation.navigate("Posting")
    };
  
  const navigateToProfile = () => {
      navigation.navigate("Profile")
      };

  const navigateToFriends = () => {
        navigation.navigate("Friends")
        };

  const navigateToMessage = () => {
        navigation.navigate("Message")
          };
  

  

  return(
  
    <View style={styles.container}>
      <View style={styles.toptitle}>
        <Text style={styles.feedspaceText}>Feedspace</Text>
      <TouchableOpacity style={styles.messagetab} onPress={navigateToMessage}>
            <Ionicons name="md-paper-plane" size={30} color="black"></Ionicons>
            </TouchableOpacity>
      </View>
      <View style={styles.toptabs}>
      <TouchableOpacity style={styles.addnewtab} onPress={navigateToPosting}>
            <Ionicons name="md-home" size={30} color="black"></Ionicons>
            </TouchableOpacity>

      <TouchableOpacity style={styles.profiletab} onPress={navigateToProfile}>
            <Ionicons name="md-person" size={30} color="black"></Ionicons>
            </TouchableOpacity>      

      
      <TouchableOpacity style={styles.friendtab} onPress={navigateToFriends}>
            <Ionicons name="md-people" size={30} color="black"></Ionicons>
            </TouchableOpacity>      
      </View>

      </View>
     
      
     
    

  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:10,
    backgroundColor: '#CFE6EF'
  },
  toptitle: {
    paddingTop:5,
    flex: 0.10,
    backgroundColor: 'transparent',
    
  },
  toptabs: {
    paddingTop:5,
    flex: 0.10,
    backgroundColor: 'transparent',
    
  },

  postabs: {
    paddingTop:5,
    flex: 0.10,
    backgroundColor: 'transparent',
    paddingBottom: 3
    
  },
  profiletab: {
    position: "absolute",
    top: 20,
    left: 20,
    width: 32,
    height: 32,
    alightItem: "center",
    justifyContent: "center"
},
addnewtab: {
  position: "absolute",
  top: 20,
  left: 155,
  width: 32,
  height: 32,
  alightItem: "center",
  justifyContent: "center"
},

friendtab: {
  position: "absolute",
  top: 20,
  left: 275,
  width: 32,
  height: 32,
  alightItem: "center",
  justifyContent: "center"
},

messagetab: {
  position: "absolute",
  top: 35,
  left: 275,
  width: 32,
  height: 32,
  alightItem: "center",
  justifyContent: "center"
},

feedspaceText: {
  position: "absolute",
  top: 25,
  left: 10,
  width: 150,
  height: 150,
  fontSize: 32,
  fontWeight: 'bold'
},

iconpic: {
  position: "absolute",
  top: 26,
  left: 19,
  width: 32,
  height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(2, 22, 48, 0.1)",
    alightItem: "center",
    justifyContent: "center"
},

inputContainer:{
  width: '65%',
},

input:{
  backgroundColor: 'white',
  left: 58,
  paddingHorizontal: 15,
  paddingVertical: 10,
  borderRadius: 25,
  marginTop: 15,
  height: 40,
  width: '95%',
  borderWidth: 1,
  borderColor: 'black',
  
},

uploadpic: {
  position: "absolute",
  top: 26,
  left: 275,
  width: 32,
  height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(2, 22, 48, 0.1)",
    alightItem: "center",
    justifyContent: "center"
},

})

export default Dashboard