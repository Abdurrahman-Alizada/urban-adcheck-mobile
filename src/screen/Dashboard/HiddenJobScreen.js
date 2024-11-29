import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import HiddenJobCard from '../../components/HiddenJobCard';

export default function HiddenJobScreen() {
  const items = [1, 2, 3, 4, 5, 6];
  return (
    <View style={{flex: 1, paddingHorizontal: 10}}>
      <ScrollView>
        {items.map((item, index) => (
          <HiddenJobCard item={item} key={index} />
        ))}
      </ScrollView>
    </View>
  );
}
