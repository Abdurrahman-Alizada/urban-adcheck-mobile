import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function Header() {
  return (
    <View style={{ flexDirection: 'row',backgroundColor:"#0000", justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 50, backgroundColor: 'white' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={require('../assets/icons/profile.png')} 
          style={{ width: 50, height: 50, borderRadius: 20 }}
        />
        <Text style={{ marginLeft: 10, fontSize: 18, fontWeight: 'bold' }}>Hi, Christopher</Text>
      </View>
      <TouchableOpacity>
        <Image
          source={require('../assets/icons/notification.png')} 
          style={{ width: 25, height: 30 }}
        />
      </TouchableOpacity>
    </View>
  );
}
