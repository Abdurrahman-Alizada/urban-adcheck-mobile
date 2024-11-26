import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Signup from '../Signup/Signup';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{
      flex: 1, 
      justifyContent: 'flex-start', 
      padding: 20,
      backgroundColor: 'white',
      paddingTop: 100
    }}>
      <Text style={{
        fontSize: 35, 
        fontWeight: 'bold', 
        textAlign: 'center', 
        marginBottom: 60
      }}>
        Login
      </Text>
      
      <TextInput
        style={{
          height: 60, 
          borderColor: '#468451', 
          borderWidth: 1, 
          marginBottom: 15, 
          paddingHorizontal: 10,
          borderRadius: 10,
          backgroundColor: 'white'
        }}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput
        style={{
          height: 60, 
          borderColor: '#468451', 
          borderWidth: 1, 
          marginBottom: 15, 
          paddingHorizontal: 10,
          borderRadius: 10,
          backgroundColor: 'white'
        }}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <TouchableOpacity style={{alignSelf: 'flex-end', marginBottom: 20,margin:20}}>
        <Text style={{color: '#468451',fontWeight:"600",fontSize:16}}>Forgot your password?</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={{
          backgroundColor: '#468451', 
          padding: 15, 
          borderRadius: 5, 
          alignItems: 'center'
        }}
      >
        <Text style={{color: 'white', fontWeight: 'bold',fontSize:18}}>Sign In</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={{marginTop: 15, alignItems: 'center'}}
        onPress={() => navigation.navigate("Signup")} // Correct name of the screen

        // onPress={() => navigation.navigate("AuthStack", { screen: "Signup" })}
        >
        <Text style={{color: 'black', fontWeight:"600",margin:20,fontSize:15}}>Create New Account</Text>
      </TouchableOpacity>
    </View>
  );
}