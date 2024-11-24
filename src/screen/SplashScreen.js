import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
export default function SplashScreensp({navigation}) {
    useEffect(()=>{
const timer=setTimeout(()=>{
    navigation.replace("Login")
},3000)
return()=>clearTimeout(timer)
    },[])
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
         fontSize: 22, 
         fontWeight:"500",
         marginTop: 20,  
         color:"black",
       }}>
         Urban Adchecker
       </Text>
     </View>
   )
}