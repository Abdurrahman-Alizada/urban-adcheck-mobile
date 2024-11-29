import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {Card} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import ContentLoader, {Rect, Circle} from 'react-content-loader/native';
import PaymentsLoader from '../../../ContentLoader/PaymentLoader';

const Main = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true); // State for loading
  const [refreshing, setRefreshing] = useState(false); // State for pull-to-refresh

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

  const handleRefresh = () => {
    setRefreshing(true);
    setLoading(true);
    setTimeout(() => {
      setRefreshing(false);
      setLoading(false);
    }, 4000);
  };

  const LoaderCard = ({color}) => (
    <ContentLoader
      width="49%"
      height={100}
      backgroundColor={color}
      foregroundColor="#rgba(255,255,255,0.3)"
      style={{
        marginBottom: 15,
        borderRadius: 5,
      }}>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 20,
          height: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginBottom: 5,
            // padding:65
          }}>
          <Rect x="0" y="0" rx="5" ry="5" width="100%" height="100" />
          <Circle cx="25" cy="25" r="15" fill="white" />
          <Rect x="50" y="15" width="30" height="16" fill="white" />
        </View>
        <Rect x="10" y="70" width="100" height="14" fill="white" />
      </View>
    </ContentLoader>
  );

  return (
    <ScrollView
      style={{flex: 1, backgroundColor: 'white'}}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }>
      {loading ? (
        <View style={{}}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              padding: 10,
              marginTop: 20,
            }}>
            {jobData.map(item => (
              <LoaderCard key={item.id} color={item.color} />
            ))}
          </View>

          <View style={{padding: 10}}>
            <PaymentsLoader />
          </View>
        </View>
      ) : (
        <>
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
                      navigation.navigate('NewRequestScreen');
                      break;
                    case 'Completed Jobs':
                      navigation.navigate('ApproveScreen');
                      break;
                    case 'Hidden Jobs':
                      navigation.navigate('HiddenJobScreen');
                      break;
                    case 'In Progress Jobs':
                      navigation.navigate('InProgressJobScreen');
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
                  <Text
                    style={{color: 'white', fontWeight: '500', fontSize: 14}}>
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
                  <Text
                    style={{fontSize: 12, fontWeight: '400', color: '#000000'}}>
                    US${amount}.00
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: '400',
                      color: '#757272',
                    }}>
                    12/10/2024
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default Main;

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   ScrollView,
//   RefreshControl,
// } from 'react-native';
// import { Card } from 'react-native-paper';
// import { useNavigation } from '@react-navigation/native';
// import ContentLoader, { Rect, Circle } from 'react-content-loader/native';

// const Main = () => {
//   const navigation = useNavigation();
//   const [loading, setLoading] = useState(true);
//   const [refreshing, setRefreshing] = useState(false);

//   const jobData = [
//     {
//       id: 1,
//       title: 'Available jobs',
//       count: 12,
//       color: '#8B5CF6',
//       image: require('../../../assets/icons/notification1.png'),
//     },
//     {
//       id: 2,
//       title: 'Completed Jobs',
//       count: 12,
//       color: '#FBBF24',
//       image: require('../../../assets/icons/notification2.png'),
//     },
//     {
//       id: 3,
//       title: 'Hidden Jobs',
//       count: 12,
//       color: '#EF4444',
//       image: require('../../../assets/icons/notification3.png'),
//     },
//     {
//       id: 4,
//       title: 'In Progress Jobs',
//       count: 12,
//       color: '#10B981',
//       image: require('../../../assets/icons/notification4.png'),
//     },
//   ];

//   const handleRefresh = () => {
//     setRefreshing(true);
//     setLoading(true);
//     setTimeout(() => {
//       setRefreshing(false);
//       setLoading(false);
//     }, 4000);
//   };

//   const LoaderCard = ({ color }) => (
//     <ContentLoader
//       width="49%"
//       height={100}
//       backgroundColor={color}
//             foregroundColor="#rgba(255,255,255,0.3)"
//       // backgroundColor={color}
//       // foregroundColor="rgba(255,255,255,0.3)"
//       style={{
//         marginBottom: 15,
//         borderRadius: 5,
//       }}>
//       <View
//         style={{
//           flexDirection: 'column',
//           justifyContent: 'space-between',
//           padding: 10,
//           height: '100%',
//         }}>
//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'flex-start',
//             alignItems: 'center',
//             marginBottom: 5,
//           }}>
//           <Circle cx="15" cy="15" r="15" fill="white" />
//           <Rect x="50" y="10" width="30" height="16" fill="white" />
//         </View>
//         <Rect x="10" y="70" width="100" height="14" fill="white" />
//       </View>
//     </ContentLoader>
//   );

//   const EarningsLoader = () => (
//     <ContentLoader
//       width="100%"
//       height={150}
//       backgroundColor="#f3f3f3"
//       foregroundColor="#ecebeb">
//       <Rect x="0" y="0" width="150" height="20" />
//       <Rect x="0" y="30" width="200" height="16" />
//       <Rect x="0" y="60" width="100%" height="50" />
//     </ContentLoader>
//   );

//   const PaymentsLoader = () => (
//     <ContentLoader
//       width="100%"
//       height={250}
//       backgroundColor="#f3f3f3"
//       foregroundColor="#ecebeb">
//       <Rect x="0" y="0" width="150" height="20" />
//       {[1, 2, 3, 4, 5].map((_, index) => (
//         <React.Fragment key={index}>
//           <Rect x="0" y={40 + index * 40} width="100" height="16" />
//           <Rect x="250" y={40 + index * 40} width="100" height="16" />
//         </React.Fragment>
//       ))}
//     </ContentLoader>
//   );

//   return (
//     <ScrollView
//       style={{ flex: 1, backgroundColor: 'white' }}
//       refreshControl={
//         <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
//       }>
//       {loading ? (
//         <>
//           <View
//             style={{
//               flexDirection: 'row',
//               flexWrap: 'wrap',
//               justifyContent: 'space-between',
//               padding: 10,
//               marginTop: 20,
//             }}>
//             {jobData.map(item => (
//               <LoaderCard key={item.id} color={item.color} />
//             ))}
//           </View>

//           <View style={{ padding: 0, margin: 13 }}>
//             <EarningsLoader />
//           </View>

//           <View style={{ padding: 10 }}>
//             <PaymentsLoader />
//           </View>
//         </>
//       ) : (
//         <>
//           <View
//             style={{
//               flexDirection: 'row',
//               flexWrap: 'wrap',
//               justifyContent: 'space-between',
//               padding: 10,
//               marginTop: 20,
//             }}>
//             {jobData.map(item => (
//               <Card
//                 key={item.id}
//                 style={{
//                   width: '49%',
//                   height: 100,
//                   marginBottom: 15,
//                   backgroundColor: item.color,
//                   justifyContent: 'center',
//                   paddingHorizontal: 10,
//                 }}
//                 onPress={() => {
//                   switch (item.title) {
//                     case 'Available jobs':
//                       navigation.navigate('NewRequestScreen');
//                       break;
//                     case 'Completed Jobs':
//                       navigation.navigate('ApproveScreen');
//                       break;
//                     case 'Hidden Jobs':
//                       navigation.navigate('HiddenJobScreen');
//                       break;
//                     case 'In Progress Jobs':
//                       navigation.navigate('InProgressJobScreen');
//                       break;
//                     default:
//                       console.warn('No navigation target for this card');
//                   }
//                 }}>
//                 <Card.Content>
//                   <View
//                     style={{
//                       flexDirection: 'column',
//                       justifyContent: 'space-between',
//                     }}>
//                     <View
//                       style={{
//                         flexDirection: 'row',
//                         justifyContent: 'flex-start',
//                         alignItems: 'center',
//                         marginBottom: 5,
//                       }}>
//                       <Image
//                         source={item.image}
//                         style={{
//                           width: 30,
//                           height: 30,
//                           borderRadius: 20,
//                           backgroundColor: 'white',
//                           resizeMode: 'contain',
//                           marginRight: 8,
//                         }}
//                       />
//                       <Text
//                         style={{
//                           color: 'white',
//                           fontSize: 16,
//                           marginLeft: 5,
//                         }}>
//                         {item.count}
//                       </Text>
//                     </View>
//                     <Text
//                       style={{
//                         color: 'white',
//                         fontWeight: 'bold',
//                         fontSize: 14,
//                       }}>
//                       {item.title}
//                     </Text>
//                   </View>
//                 </Card.Content>
//               </Card>
//             ))}
//           </View>

//           <View style={{ padding: 0, margin: 13 }}>
//             <Text style={{ fontSize: 16, fontWeight: '500' }}>Earnings</Text>
//             <Text
//               style={{
//                 marginTop: 5,
//                 fontSize: 16,
//                 fontWeight: '400',
//                 color: '#757272',
//               }}>
//               Available funds
//             </Text>

//             <View style={{ padding: 0 }}>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   justifyContent: 'space-between',
//                   alignItems: 'center',
//                   borderBottomWidth: 1,
//                   paddingVertical: 10,
//                   borderBottomColor: '#E1DDDD',
//                 }}>
//                 <Text
//                   style={{
//                     fontSize: 16,
//                     fontWeight: '500',
//                     marginRight: 60,
//                   }}>
//                   US$2k.00
//                 </Text>
//                 <TouchableOpacity
//                   style={{
//                     backgroundColor: '#468451',
//                     paddingVertical: 10,
//                     paddingHorizontal: 20,
//                     borderRadius: 10,
//                     marginRight: 20,
//                   }}>
//                   <Text style={{ color: 'white', fontWeight: '500', fontSize: 14 }}>
//                     Withdraw
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>

//           <View
//             style={{
//               padding: 10,
//             }}>
//             <Text style={{ fontSize: 16, fontWeight: '400', color: '#757272' }}>
//               Payments being cleared
//             </Text>
//             <View style={{ marginTop: 10 }}>
//               {[16, 16, 16, 16, 16].map((amount, index) => (
//                 <View
//                   key={index}
//                   style={{
//                     flexDirection: 'row',
//                     justifyContent: 'space-between',
//                     marginVertical: 5,
//                     fontSize: 12,
//                     fontWeight: '400',
//                     borderBottomWidth: 1,
//                     paddingVertical: 5,
//                     borderBottomColor: '#E1DDDD',
//                   }}>
//                   <Text
//                     style={{ fontSize: 12, fontWeight: '400', color: '#000000' }}>
//                     US${amount}.00
//                   </Text>
//                   <Text
//                     style={{
//                       fontSize: 10,
//                       fontWeight: '400',
//                       color: '#757272',
//                     }}>
//                     12/10/2024
//                   </Text>
//                 </View>
//               ))}
//             </View>
//           </View>
//         </>
//       )}
//     </ScrollView>
//   );
// };

// export default Main;
