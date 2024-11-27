import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native-paper';

export default function SplashScreensp({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
      navigation.replace("Login");
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
