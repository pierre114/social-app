import React from 'react'
import { StyleSheet, View, Button, Text, TextInput, KeyboardAvoidingView,TouchableOpacity} from 'react-native'
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//install npm first
//imported .js files
import LoginScreen from './screens/Login';
import DashboardScreen from './screens/Dashboard';
import RegisterScreen from './screens/Register';
import FriendsScreen from './screens/Friends';
import MessageScreen from './screens/Message';
import ProfileScreen from './screens/Profile';
import PostingScreen from './screens/Posting';




const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator   screenOptions={{headerShown: false}}>
        
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerStyle:{backgroundColor:'#CFE6EF'}

          }}
        />
        <Stack.Screen 
        name="Dashboard" 
        component={DashboardScreen} 
        options={{headerStyle:{backgroundColor:'#CFE6EF'}}}
        />

        <Stack.Screen 
        name="Register" 
        component={RegisterScreen} 
        options={{headerStyle:{backgroundColor:'#CFE6EF'}}}
        />

        <Stack.Screen 
        name="Friends" 
        component={FriendsScreen} 
        />

        
        <Stack.Screen 
        name="Profile" 
        component={ProfileScreen} 
        />

        <Stack.Screen 
        name="Message" 
        component={MessageScreen} 
        />

        <Stack.Screen 
        name="Posting" 
        component={PostingScreen} 
        />

        
      </Stack.Navigator>

    </NavigationContainer>
    
  );
};

export default MyStack
