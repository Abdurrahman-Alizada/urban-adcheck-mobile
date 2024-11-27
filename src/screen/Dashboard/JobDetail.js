import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';

export default function JobDetail() {
  const navigation=useNavigation();

  return (
    <View style={{flex:1,backgroundColor:"white"}}>
      <View style={{justifyContent:"center",marginTop: 20, 
          alignItems: 'center'}}>
<Image source={require("../../assets/icons/jobdetail.png")}
style={{height:190,width:372,resizeMode:"cover",alignSelf:"center"}}
/>
      </View>
      <View style={{padding:20}}>
<Text style={{fontSize:16,fontWeight:"500",marginTop:0}}>Dictum pretium magna ac mattis. Maecenas
lobortis</Text>
<Text style={{fontSize:16,fontWeight:"500",marginTop:10}}>About</Text>
<Text style={{fontSize:14,fontWeight:"400",marginTop:2,color:"#868686"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.{'\n'}


Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the.
1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
and more recently with desktop publishing software like Aldus PageMaker including versions of.</Text>
<Text style={{fontSize:16,fontWeight:"500",color:"#123633",marginTop:5}}>Location</Text>
<Image source={require("../../assets/icons/map.png")}
style={{width:370,height:150,}}
/>

     </View> 
     <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:10,marginTop:-10}}>
     <Text style={{fontSize:14,fontWeight:"500",color:"#000000"}}>payment</Text>
     <Text style={{fontSize:14,fontWeight:"500",color:"#000000"}}>$ 28.00</Text></View>
     <View style={{padding:20}}>
     <TouchableOpacity
      style={{
        backgroundColor: '#468451',
        //paddingHorizontal: 16,
        borderRadius: 8,
        width: "90%",
        marginTop:-16,
        height: 35,
        alignItems: 'center',
      }} 
      onPress={()=>{
        navigation.navigate("JobDetailUpload");
      }}>
        
        
      <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
        Proceed
      </Text>
    </TouchableOpacity>
     </View>

    </View>
    
  )
}

const styles = StyleSheet.create({})