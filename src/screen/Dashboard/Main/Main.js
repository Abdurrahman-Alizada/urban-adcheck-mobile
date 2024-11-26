import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Card} from 'react-native-paper';

const Main = () => {
  const navigation = useNavigation(); // Access the navigation object

  const jobData = [
    {
      id: 1,
      title: 'Available jobs',
      count: 12,
      color: '#8B5CF6',
      image: require('../../../assets/icons/notification1.png'),
    },
    {
      id: 2,
      title: 'Completed Jobs',
      count: 12,
      color: '#FBBF24',
      image: require('../../../assets/icons/notification2.png'),
    },
    {
      id: 3,
      title: 'Hidden Jobs',
      count: 12,
      color: '#EF4444',
      image: require('../../../assets/icons/notification3.png'),
    },
    {
      id: 4,
      title: 'In Progress Jobs',
      count: 12,
      color: '#10B981',
      image: require('../../../assets/icons/notification4.png'),
    },
  ];

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          padding: 10,
          marginTop: 20,
        }}>
        {jobData.map(item => (
          <Card
            key={item.id}
            style={{
              width: '49%',
              height: 100,
              marginBottom: 15,
              backgroundColor: item.color,
              justifyContent: 'center',
              paddingHorizontal: 10,
            }}
            onPress={() => {
              switch (item.title) {
                case 'Available jobs':
                  navigation.navigate('NewRequest'); // Navigate to NewRequest screen
                  break;
                case 'Completed Jobs':
                  navigation.navigate('ApproveJob'); // Navigate to CompletedJobs screen
                  break;
                case 'Hidden Jobs':
                  navigation.navigate('HiddenJob'); // Navigate to HiddenJobs screen
                  break;
                case 'In Progress Jobs':
                  navigation.navigate('ProgressJob'); // Navigate to InProgressJobs screen
                  break;
                  case 'In Progress Jobs':
                    navigation.navigate('ProgressJob'); // Navigate to InProgressJobs screen
                    break;
                default:
                  console.warn('No navigation target for this card');
              }
            }}>
            <Card.Content>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginBottom: 5,
                  }}>
                  <Image
                    source={item.image}
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 20,
                      backgroundColor: 'white',
                      resizeMode: 'contain',
                      marginRight: 8,
                    }}
                  />
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 16,
                      marginLeft: 5,
                    }}>
                    {item.count}
                  </Text>
                </View>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 14,
                  }}>
                  {item.title}
                </Text>
              </View>
            </Card.Content>
          </Card>
        ))}
      </View>

      <View style={{padding: 0, margin: 13}}>
        <Text style={{fontSize: 16, fontWeight: '500'}}>Earnings</Text>
        <Text
          style={{
            marginTop: 5,
            fontSize: 16,
            fontWeight: '400',
            color: '#757272',
          }}>
          Available funds
        </Text>

        <View style={{padding: 0}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottomWidth: 1,
              paddingVertical: 10,
              borderBottomColor: '#E1DDDD',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                marginRight: 60,
              }}>
              US$2k.00
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#468451',
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 10,
                marginRight: 20,
              }}>
              <Text style={{color: 'white', fontWeight: '500', fontSize: 14}}>
                Withdraw
              </Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </View>

      <View
        style={{
          padding: 10,
      
        }}>
        <Text style={{fontSize: 16, fontWeight: '400', color: '#757272'}}>
          Payments being cleared
        </Text>
        <View style={{marginTop: 10}}>
          {[16, 16, 16, 16, 16].map((amount, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 5,
                fontSize: 12,
                fontWeight: '400',
                borderBottomWidth: 1,
                paddingVertical: 5,
                borderBottomColor: '#E1DDDD',
              }}>
              <Text style={{fontSize: 12, fontWeight: '400', color: '#000000'}}>
                US${amount}.00
              </Text>
              <Text style={{fontSize: 10, fontWeight: '400', color: '#757272'}}>
                12/10/2024
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Main;
