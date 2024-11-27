import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

export default function Header({title}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#0000',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 10,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../assets/icons/profile.png')}
          style={{width: 50, height: 50, borderRadius: 20}}
        />
        <View style={{justifyContent: 'flex-start', marginLeft: 10}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            Hi, Christopher
          </Text>
          {title && (
            <Text
              style={{
                marginHorizontal: 0,
                marginTop: 5,
                fontSize: 12,
                color: 'black',
              }}>
              {title}
            </Text>
          )}
        </View>
      </View>

      <TouchableOpacity>
        <Image
          source={require('../assets/icons/notification.png')}
          style={{width: 25, height: 30}}
        />
      </TouchableOpacity>
    </View>
  );
}
