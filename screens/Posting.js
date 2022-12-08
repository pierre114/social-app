import React from 'react';
import { Platform,View, Button, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, ScrollView, Image, TextInput, PermissionsAndroid, ImagePickerIOS } from 'react-native';
import {NavigationContainer, useRoute } from '@react-navigation/native';
import { useState } from 'react' 
import {Ionicons} from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';









const Posting = ({ navigation }) => {
 
    
  const [text, setText] = useState('')
  const [image, setImage] = useState(null);

 

  const navigateToDashboard = () => {
    navigation.navigate("Dashboard")
    }

    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
      
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    };

    
 

  return(
    <SafeAreaView style={styles.container}>
      
      <View style={styles.header}>
            <TouchableOpacity onPress={navigateToDashboard}>
                <Ionicons name="md-arrow-back" size={30} color="grey"></Ionicons>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{fontWeight: "500", paddingTop: 5}}>Post</Text>
            </TouchableOpacity>
            
      </View>

      <View stlyle={styles.inputContainer}>
        <Image source={{uri: 'https://i.pinimg.com/originals/75/c9/10/75c9108343a1df2ddc709339bec19bc3.jpg' }} style={styles.avatar}></Image>
        <TextInput
        autoFocus={true}
        multiline={true}
        numberOfLines={4}
        left={90}
        
        height={100}
        width={200}
        borderColor={'black'}
        placeholder="What's on your mind??"
        ></TextInput>
      </View>
       
     

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         
        <TouchableOpacity style={styles.photo} onPress={pickImage} >
                <Ionicons name="md-camera" size={30} color="grey"></Ionicons>
        </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </View>
        

      </SafeAreaView>
    

  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  header: {
     flexDirection: "row",
     justifyContent: "space-between",
     paddingHorizontal: 32,
     paddingVertical: 12,
     borderBottomWidth: 1,
     borderBottomColor: "black"
  },

  inputContainer:{
    margin: 32,
    flexDirection: "row"
  },
  avatar: {
    width: 48,
    height: 48,
    top: 20,
    left: 10,
    borderRadius: 24,
    marginRight: 16
  },
  photo: {
     alignItems: "flex-end",
     marginHorizontal: 32
  }
 
})

export default Posting