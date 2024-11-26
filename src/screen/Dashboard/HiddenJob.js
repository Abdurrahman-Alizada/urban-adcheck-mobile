import { StyleSheet, View } from 'react-native';
import React from 'react';
import NewRequest from '../../components/NewRequest';

export default function HiddenJob() {
  return (
    <NewRequest
      acceptLabel="Hidden"
      acceptButtonStyle={{
        backgroundColor: '#E8B01D',
        width: 83,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: -95,  
      }}
      acceptTextStyle={{
        fontSize: 11,
        color: 'white',
        fontWeight: '400',
      }}
      priceItemStyle={{
        fontSize: 13,
        color: 'black',
        marginTop: 10,
        fontWeight: '500',
        marginLeft: -110,  
      }}
      rejectLabel={null}
      showQuantity={false}
    />
  );
}

const styles = StyleSheet.create({});