import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';

export default function JobDetail() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: 'white',padding:10}}>
      <View
        style={{justifyContent: 'center', marginTop: 0, alignItems: 'center'}}>
        <Image
          source={require('../../assets/icons/jobdetail.png')}
          style={{
            height: 190,
            width: 372,
            resizeMode: 'cover',
            alignSelf: 'center',
          }}
        />
      </View>
      <View style={{padding: 16}}>
        <Text style={{fontSize: 16, fontWeight: '500', marginTop: 0}}>
          Dictum pretium magna ac mattis. Maecenas lobortis
        </Text>
        <Text style={{fontSize: 16, fontWeight: '500', marginTop: 10}}>
          About
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '400',
            marginTop: 2,
            color: '#868686',
          }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{'\n'}
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of.
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            //color: '#123633',
            marginTop: 15,
          }}>
          Location
        </Text>
        <Image
          source={require('../../assets/icons/map.png')}
          style={{width: 370, height: 150}}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        //padding:10,
          marginHorizontal: 15,
        }}>
        <Text style={{fontSize: 14, fontWeight: '500'}}>
          payment
        </Text>
        <Text style={{fontSize: 14, fontWeight: '500'}}>
          $ 28.00
        </Text>
      </View>
      <View style={{padding: 20, justifyContent: 'center'}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#468451',
            borderRadius: 8,
            width: 372,
            height: 50,
            alignSelf: 'center', 
            justifyContent: 'center', 
            alignItems: 'center', 
          }}
          onPress={() => {
            navigation.navigate('JobDetailUpload');
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontWeight: '600',
              textAlign: 'center', 
            }}>
            Proceed
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
