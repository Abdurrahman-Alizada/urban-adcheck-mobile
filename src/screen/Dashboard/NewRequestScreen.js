import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import NewRequestCard from '../../components/NewRequestCard';

export default function NewRequestScreen() {
  const items = [1, 2, 3, 4, 5, 6];
  return (
    <View style={{flex: 1, paddingHorizontal: 10}}>
      <ScrollView>
        {items.map((item, index) => (
          <NewRequestCard item={item} key={index} />
        ))}
      </ScrollView>
    </View>
  );
}
