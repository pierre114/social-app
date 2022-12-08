import React from 'react';
import { View, Button, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import {NavigationContainer, useRoute } from '@react-navigation/native';
import { useState } from 'react' 
import {Ionicons} from '@expo/vector-icons';



const Friends = ({ navigation }) => {
 
  const navigateToDashboard = () => {
    navigation.navigate("Dashboard")
    }

  return(
    <View style={styles.container}>
      <View style={styles.toptitle}/>
      <View style={styles.toptabs}>
      <Text>Friends</Text>
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
}

})

export default Friends