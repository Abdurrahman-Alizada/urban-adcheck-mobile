// import {Text, View, Image, TouchableOpacity} from 'react-native';
// import React from 'react';
// import {useNavigation} from '@react-navigation/native';

// export default function ApproveCard({}) {
//   const navigation = useNavigation();

//   const item = {
//     id: 1,
//     title: 'Dictum pretium magna ac mattiggges. Maecenas lobortis',
//     Desc: `Quisque gravida justo ut neque ornare,skkdjj d
// nec m sapi sagi,skalda aksdjowi iweuio`,

//     color: '#8B5CF6',
//     image: require('../assets/icons/NewRequest.png'),
//   };

//   return (
//     <View
//       style={{
//         backgroundColor: '#fff',
//         borderRadius: 10,
//         padding: 10,
//         marginTop: 20,
//         elevation: 1,
//         shadowColor: '#000',
//         shadowOffset: {width: 0, height: 1},
//         shadowOpacity: 0.3,
//         shadowRadius: 3,
//        flexDirection: 'row',
//       }}>
//       <View style={{maxHeight: 120}}>
//         <Image source={item.image} style={{height: '100%', width: 125}} />
//       </View>
//       <View style={{maxWidth: '70%', marginLeft: 10}}>
//         <Text style={{fontWeight: 'bold',fontSize:13}}>{item.title}</Text>
//         <Text style={{fontSize: 11, marginTop: 5}}>{item.Desc}</Text>
        
//         <View
//           style={{
//             flexDirection: 'row',
//             marginTop: 25,
//             justifyContent: 'space-between',
//             alignItems: 'center',
//           }}>
//           <TouchableOpacity
//             style={{
//               paddingHorizontal: 15,
//               paddingVertical: 4,
//               borderRadius: 5,
//               borderColor: 'red',
//               borderWidth: 1,
//               alignItems: 'center',
//               justifyContent: 'center',
//               minWidth: 80,
//             }}>
//             <Text style={{color: 'red', fontWeight: '500', fontSize: 14}}>
//               Reject
//             </Text>
//           </TouchableOpacity>
          
//           <TouchableOpacity
//             style={{
//               paddingHorizontal: 15,
//               paddingVertical: 5,
//               borderRadius: 5,
//               backgroundColor: '#3E9837',
//               alignItems: 'center',
//               justifyContent: 'center',
//               minWidth: 80,
//             }}>
//             <Text style={{color: 'white', fontWeight: '500', fontSize: 14}}>
//               Accept
//             </Text>
//           </TouchableOpacity>
          
//           <View style={{alignItems: 'center'}}>
//             <Text style={{fontWeight: 'bold',marginRight:10}}>$26</Text>
//             <Text style={{fontSize: 12,marginRight:10}}>01:00</Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// }

import {Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function ApproveCard({}) {
  const navigation = useNavigation();

  const item = {
    id: 1,
    title: 'Dictum pretium magna ac mattiggges. Maecenas lobortis',
    Desc: `Quisque gravida justo ut neque ornare,skkdjj d
nec m sapi sagi,skalda aksdjowi iweuio`,

    color: '#8B5CF6',
    image: require('../assets/icons/NewRequest.png'),
  };

  return (
    <View
      style={{
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.3,
        shadowRadius: 3,
        flexDirection: 'row',
      }}>
      <View style={{maxHeight: 120}}>
        <Image source={item.image} style={{height: '100%', width: 125}} />
      </View>
      <View style={{maxWidth: '70%', marginLeft: 10}}>
        <Text style={{fontWeight: 'bold', fontSize: 13}}>{item.title}</Text>
        <Text style={{fontSize: 11, marginTop: 5}}>{item.Desc}</Text>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 25,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', marginRight: 10}}>{`$26.00`}</Text>
          </View>
          <TouchableOpacity
            style={{
              paddingHorizontal: 15,
              paddingVertical: 5,
              borderRadius: 5,
              backgroundColor: '#3E9837',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: 80,
            }}>
            <Text style={{color: 'white', fontWeight: '500', fontSize: 14}}>
              Approve
            </Text>
          </TouchableOpacity>

          
        </View>
      </View>
    </View>
  );
}
