
import { Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useGetAllAvailableJobsForUserQuery } from '../redux/reducers/availablejob/availablejobThunk';

export default function NewRequest({
  acceptLabel = 'Accept',
  rejectLabel = 'Reject',
  onAccept = () => {},
  onReject = () => {},
  acceptButtonStyle = {},
  rejectButtonStyle = {},
  acceptTextStyle = {},
  rejectTextStyle = {},
  priceItemStyle = {},
  priceItem = '$28.00',
  showQuantity = true,
  title = 'Default Title',
}) {
  const navigation = useNavigation();
  const { data, error, isLoading } = useGetAllAvailableJobsForUserQuery(null);

  const item = {
    id: 1,
    title: 'Dictum pretium magna ac mattis. Maecenas lobortis',
    Desc: `Quisque gravida justo ut neque ornare, nec malesuada sapien sagittis.
      Cras condimentum feugiat lectus, in facilisis arcu ultrices ut. Nullam
      hendrerit fringilla justo ut auctor. Praesent condimentum.`,
    color: '#8B5CF6',
    image: require('../assets/icons/NewRequest.png'),
  };
  const items = [item, item, item, item, item, item];

  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: 'white' }}>
      {items.map((item, index) => (
        <View
          key={index}
          style={{
            backgroundColor: '#fff',
            borderRadius: 10,
            padding: 5,
            marginBottom: 15,
            elevation: 1,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.3,
            shadowRadius: 3,
          }}>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={item.image}
                style={{
                  width: 130,
                  height: 100,
                  resizeMode: 'cover',
                }}
              />
            </View>

            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                marginTop: -45,
                padding: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 9,
                  fontWeight: '500',
                  marginBottom: 5,
                }}>
                {item.title}
              </Text>
              <Text style={{ color: 'black', fontSize: 6 }}>{item.Desc}</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: -40,
              gap: 10,
              marginLeft: 140,
            }}>
            {rejectLabel && (
              <TouchableOpacity
                style={{
                  backgroundColor: 'white',
                  paddingHorizontal: 16,
                  borderRadius: 5,
                  width: 83,
                  height: 24,
                  borderColor: 'red',
                  borderWidth: 1,
                  alignItems: 'center',
                  ...rejectButtonStyle,
                }}
                onPress={onReject}>
                <Text
                  style={{
                    color: 'red',
                    fontSize: 12,
                    fontWeight: '400',
                    alignSelf: "center",
                    ...rejectTextStyle,
                  }}>
                  {rejectLabel}
                </Text>
              </TouchableOpacity>
            )}

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#3E9837',
                  paddingHorizontal: 16,
                  borderRadius: 5,
                  width: 83,
                  height: 24,
                  alignSelf: "center",
                  alignItems: 'center',
                  ...acceptButtonStyle,
                }}
                onPress={() => navigation.navigate('JobDetail')}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 12,
                    fontWeight: '400',
                    ...acceptTextStyle,
                  }}>
                  {acceptLabel}
                </Text>
              </TouchableOpacity>

              <View style={{ justifyContent: 'center', flexDirection: 'column' }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 10,
                    marginTop: -20,
                    fontWeight: '500',
                    marginLeft: 8,
                    alignSelf: "center",
                    ...priceItemStyle,
                  }}>
                  {priceItem}
                </Text>
                {showQuantity && (
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 16,
                      fontWeight: '500',
                      marginLeft: 8,
                      color: '#068179',
                    }}>
                    1.00
                  </Text>
                )}
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}