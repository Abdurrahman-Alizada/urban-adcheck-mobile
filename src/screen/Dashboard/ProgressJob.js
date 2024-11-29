// import {
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
//   Dimensions,
// } from 'react-native';
// import React, {useState} from 'react';
// import NewRequest from '../../components/NewRequest';
// import {Modal, Portal, Provider, IconButton} from 'react-native-paper';

// // Get screen width
// const {width} = Dimensions.get('window');

// export default function ProgressJob() {
//   const [visible, setVisible] = useState(false);
//   const [cancelReason, setCancelReason] = useState('');

//   // Function to show modal
//   const showModal = () => setVisible(true);

//   const hideModal = () => setVisible(false);

//   // Function to handle submit
//   const handleSubmit = () => {
//     console.log('Cancel reason:', cancelReason);
//     hideModal(); // Close the modal after submitting
//   };

//   return (
//     <Provider>
//       <NewRequest
//         acceptLabel="Progress"
//         rejectLabel="Cancel"
//         onAccept={() => {
//           console.log('Progress button clicked');
//         }}
//         onReject={() => {
//           showModal(); // Show modal when cancel button is clicked
//           console.log('Cancel button clicked');
//         }}
//         acceptButtonStyle={{
//           backgroundColor: '#4CE16D',
//           width: 83,
//           height: 25,
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//         rejectButtonStyle={{
//           width: 83,
//           height: 25,
//           justifyContent: 'center',
//           borderWidth: 0,
//         }}
//         acceptTextStyle={{
//           fontSize: 11,
//           color: 'white',
//           fontWeight: '400',
//         }}
//         priceItemStyle={{
//           fontSize: 13,
//           color: 'black',
//           fontWeight: '500',
//         }}
//       />

//       {/* Modal for cancel button */}
//       <Portal>
//         <Modal
//           visible={visible}
//           onDismiss={hideModal}
//           contentContainerStyle={{
//             justifyContent: 'center',
//             alignItems: 'center',
//             backgroundColor: 'white',
//             borderRadius: 15,
//             width: '91%',
//             height: 300, 
//             padding: 20,
//             shadowColor: '#000',
//             shadowOffset: {width: 0, height: 2},
//             shadowOpacity: 0.25,
//             shadowRadius: 4,
//             top: '1%',
//             left: '4%',
//           }}>
//           <View style={{alignItems: 'center', flex: 1, margin: 15}}>
//             <IconButton
//               icon={({color, size}) => (
//                 <Text style={{color: 'red', fontSize: size}}>✖</Text> 
//               )}
//               size={50}
//               onPress={hideModal}
//               style={{top: -50, right: 10}}
//             />

//             <Text
//               style={{
//                 fontSize: 15,
//                 fontWeight: '400',
//                 color: 'black',
//                 marginBottom: 20,
//                 textAlign: 'center',
//                 marginTop: -50,
//               }}>
//               Are you sure you want to cancel the job?
//             </Text>
//             <Text
//               style={{
//                 color: 'black',
//                 fontSize: 14,
//                 fontWeight: '400',
//                 marginLeft: -250,
//               }}>
//               Give reason!
//             </Text>

//             <TextInput
//               label="Reason for Cancellation"
//               value={cancelReason}
//               onChangeText={setCancelReason}
//               style={{
//                 width: width * 0.8,
//                 height: 110,
//                 marginBottom: 20,
//                 paddingHorizontal: 10,
//                 backgroundColor: '#fff',
//                 borderColor: '#ccc',
//                 borderWidth: 1,
//                 textAlignVertical: 'top',
//               }}
//               mode="outlined"
//               multiline
//               numberOfLines={4}
//               placeholder="Type here..." // Placeholder text
//             />

//             <View
//               style={{
//                 flexDirection: 'row',
//                 //justifyContent: 'space-between',
//                 width: '100%',
//                 gap:20,
//               }}>
//               <TouchableOpacity
//                 style={{
//                   // backgroundColor: '#d9534f',
//                   borderRadius: 8,
//                   paddingVertical: 12,
//                   alignItems: 'center',
//                   borderWidth: 1,
//                   borderColor: 'red',
//                   width: 102,
//                   height: 40,
//                 }}
//                 onPress={hideModal}>
//                 <Text style={{fontSize: 12, color: 'red', alignSelf: 'center'}}>
//                   Cancel
//                 </Text>
//               </TouchableOpacity>

//               <TouchableOpacity
//                 style={{
//                   width: 102,
//                   height: 40,
//                   backgroundColor: '#468451',
//                   borderRadius: 8,
//                   paddingVertical: 12,
//                   alignItems: 'center',
//                 }}
//                 onPress={handleSubmit}>
//                 <Text
//                   style={{fontSize: 14, color: '#fff', alignSelf: 'center'}}>
//                   Submit
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal>
//       </Portal>
//     </Provider>
//   );
// }
