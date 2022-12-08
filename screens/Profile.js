import React from 'react';
import { View, Button, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import {NavigationContainer, useRoute } from '@react-navigation/native';
import { useState } from 'react' 
import {Ionicons} from '@expo/vector-icons';



const Profile = ({ navigation }) => {
 
  const navigateToDashboard = () => {
    navigation.navigate("Dashboard")
    }

  return(
    

    <View style={styles.container}>
        
    <View style={{alignContent: 'center', justifyContent: "center"}}>
             <TouchableOpacity style={styles.avatar}>
                <Ionicons
                    name="md-add"
                    size={60}
                    color="#FFF"
                    style={{ marginLeft:33}}
                ></Ionicons>
              </TouchableOpacity>
              
      </View>
      <View style={styles.postabs}>
      <Text style={styles.feedspaceText}>"Username"</Text>
        
      </View>
      
      </View>
 
  
      

    

  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#CFE6EF'
  },
  toptitle: {
    paddingTop:5,
    flex: 0.10,
    backgroundColor: '#CFE6EF',
    borderWidth: 1,
  },
  toptabs: {
    paddingTop:5,
    flex: 0.10,
    backgroundColor: '#CFE6EF',
    borderWidth: 1,
  },
  hometab: {
    position: "absolute",
    top: 20,
    left: 32,
    width: 32,
    height: 32,
    alightItem: "center",
    justifyContent: "center"
},
avatar: {
    width: 125,
    height: 125,
    left: 120,
    top: 75,
    borderRadius: 62.5,
    backgroundColor: "#E1E2E6",
    marginTop: 48,
    justifyContent: "center",
    alightItems: "center"
  },
  postabs: {
    flex: 0.10,
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    paddingBottom: 75
  },

  feedspaceText: {
    position: "absolute",
    top: 70,
    left: 115,
    width: 150,
    height: 150,
    fontSize: 25,
    fontWeight: 'bold'
  },

})

export default Profile