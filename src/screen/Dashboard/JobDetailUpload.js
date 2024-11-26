

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
 Card,
 IconButton,
 TextInput,
 Modal,
 Portal,
 Provider,
} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function JobDetailUpload() {
 const [visible, setVisible] = useState(false);
 const navigation=useNavigation();

 const showModal = () => setVisible(true);
 const hideModal = () => setVisible(false);

 // Define containerStyle for the modal with updated positioning
 const containerStyle = {
   backgroundColor: 'white',
   padding: 10,
   margin: 5,

   borderRadius: 12,
   alignItems: 'center',
   position: 'absolute',
   top: '30%',
   left: 30,
   right: 20
 };

 return (
   <Provider>
     <View style={{flex: 1, padding: 17, backgroundColor: '#fff'}}>
       <Text
         style={{
           fontSize: 16,
           fontWeight: '500',
           marginBottom: 26,
           marginTop: 20,
         }}>
         Jictum pretium magna ac mattis. Maecenas lobortis
       </Text>
       <Card
         style={{
           width: 372,
           height: 172,
           borderWidth: 1,
           borderRadius: 18,
           margin: 10,
           borderColor: '#068179',
           marginBottom: 16,
           borderStyle: 'dashed',
           backgroundColor: '#e8f5e9',
         }}>
         <Card.Content style={{alignItems: 'center'}}>
           <IconButton
             icon="camera"
             size={40}
             iconColor="#068179"
             style={{marginBottom: 8}}
           />
           <Text variant="titleLarge">Upload Photos</Text>
         </Card.Content>
       </Card>

       <Text style={{fontSize: 14, fontWeight: '500', margin: 13}}>
         Add Description
       </Text>

       <TextInput
         style={{
           backgroundColor: 'white',
           borderWidth: 1,
           borderColor: '#ccc',
           borderRadius: 8,
           padding: 8,
           marginBottom: 16,
           height: '30%',
         }}
         placeholder="Type here"
         multiline
         numberOfLines={4}
       />

       <View
         style={{
           flexDirection: 'row',
           justifyContent: 'space-between',
           alignItems: 'center',
           marginBottom: 16,
         }}>
         <Text style={{fontSize: 16, color: '#444'}}>Payment</Text>
         <Text style={{fontSize: 16, fontWeight: 'bold', color: '#444'}}>
           $ 28.00
         </Text>
       </View>

       <TouchableOpacity
         style={{
           backgroundColor: '#468451',
           borderRadius: 8,
           paddingVertical: 12,
           alignItems: 'center',
         }}
         onPress={showModal}>
         <Text style={{fontSize: 16, color: '#fff'}}>Proceed</Text>
       </TouchableOpacity>

       <Portal>
         <Modal
           visible={visible}
           onDismiss={hideModal}
           contentContainerStyle={containerStyle}>
           <View style={{alignItems: 'center'}}>
             <Text
               style={{
                 fontSize: 14,
                 fontWeight: '700',
                 marginBottom: 12,
                 color: '#121BF4',
               }}>
               Congratulation{' '}
             </Text>
             <Text
               style={{
                 fontSize: 14,
                 fontWeight: '400',

                 color: '#666',
                 textAlign: 'center',
                 marginBottom: 20,
               }}>
               Your job is submited{' '}
             </Text>
             <TouchableOpacity
               style={{
                  width: 180,
                  
                //   height:"30%",
                   // Added this to make button full width
                 backgroundColor: '#468451',
                 borderRadius: 8,
                 paddingVertical: 12,
                 paddingHorizontal: 24,
                 alignItems: 'center',
               }}
               onPress={hideModal}>
               <Text style={{fontSize: 14, color: '#fff'}}>Done</Text>
             </TouchableOpacity>
           </View>
         </Modal>
       </Portal>
     </View>
   </Provider>
 );
}

const styles = StyleSheet.create({});