import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import Login from './auth/Login/Login';
import { useNavigation } from '@react-navigation/native';

export default function SplashScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  // const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
      navigation.navigate("Auth");
    }, 3000); 
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{
      flex: 1, 
      backgroundColor: "white", 
      justifyContent: "center", 
      alignItems: "center"  
    }}>
      <Image 
        style={{
          width: "50%", 
          height: undefined,  
          aspectRatio: 1,     
          resizeMode: "contain"
        }} 
        source={require("../assets/icons/splashlogo.png")}
      />
      <Text style={{
        fontSize: 23, 
        fontWeight:"500",
        marginTop: 20,  
        color:"black",
      }}>
        Urban Adcheck
      </Text>
      <ActivityIndicator size="large" color="#3FC2A3" style={{ marginTop: 40 }} />
      
    </View>
  );
}
