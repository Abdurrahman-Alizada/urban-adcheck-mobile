import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import ApproveCard from '../../components/ApproveCard';

export default function ApproveScreen() {
  const items = [1, 2, 3, 4, 5, 6];
  return (
    <View style={{flex: 1, paddingHorizontal: 10}}>
      <ScrollView>
        {items.map((item, index) => (
          <ApproveCard item={item} key={index} />
        ))}
      </ScrollView>
    </View>
  );
}
