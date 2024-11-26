import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import HomeStack from '../../../navigation/HomeStack';
import Main from '../../Dashboard/Main/Main';

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
        fontSize: 30, 
        fontWeight: 'bold', 
        textAlign: 'center', 
        marginBottom: 60
      }}>
Create account      </Text>
      
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
        placeholder="Confirm Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
    
      
      <TouchableOpacity 
        style={{
          backgroundColor: '#468451', 
          padding: 15, 
          borderRadius: 5, 
          margin:15,

          alignItems: 'center'
        }}
        onPress={() => navigation.navigate("HomeStack",{ screen: "Main" })}

      >
        <Text style={{color: 'white', fontWeight: 'bold',fontSize:18,}}>Sign Up</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={{marginTop: 15, alignItems: 'center'}}

        >
        <Text style={{color: 'black', fontWeight:"600",margin:10,fontSize:15}}>Already have an account</Text>
      </TouchableOpacity>
    </View>
  );
}