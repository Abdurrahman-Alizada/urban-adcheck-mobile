// import React from 'react';
// import {View, Text, ScrollView} from 'react-native';
// import InProgressJobCard from '../../components/InProgressJobCard';

// export default function InProgressJobScreen() {
//   const items = [1, 2, 3, 4, 5, 6];
//   return (
//     <View style={{flex: 1, paddingHorizontal: 10}}>
//       <ScrollView>
//         {items.map((item, index) => (
//           <InProgressJobCard item={item} key={index} />
//         ))}
//       </ScrollView>
//     </View>
//   );
// }

import React, {useState} from 'react';
import {View, Text, ScrollView, Dimensions, TextInput, TouchableOpacity} from 'react-native';
import {Modal, Portal, Provider, IconButton,Button} from 'react-native-paper';
import InProgressJobCard from '../../components/InProgressJobCard';

// Get screen width
const {width} = Dimensions.get('window');

export default function InProgressJobScreen() {
  const items = [1, 2, 3, 4, 5, 6];
  const [visible, setVisible] = useState(false);
  const [cancelReason, setCancelReason] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);

  const showModal = (job) => {
    setSelectedJob(job);
    setVisible(true);
  };

  const hideModal = () => setVisible(false);

  const handleSubmit = () => {
    console.log(`Cancel reason for job ${selectedJob}:`, cancelReason);
    hideModal(); 
  };

  return (
    <Provider>
      <View style={{flex: 1, paddingHorizontal: 10}}>
        <ScrollView>
          {items.map((item, index) => (
            <InProgressJobCard
              item={item}
              key={index}
              onCancel={() => showModal(item)}
              onProgress={() => console.log(`Progressing job ${item}`)}
            />
          ))}
        </ScrollView>

       
       <Portal>
  <Modal
    visible={visible}
    onDismiss={hideModal}
    contentContainerStyle={{
      backgroundColor: 'white',
      borderRadius: 15,
      width: '90%',
      height: '36%',
      alignSelf: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5, // For Android shadow
      position: 'relative', // For absolute positioning of the icon
    }}
  >
    <IconButton
      icon="close"
      iconColor="red"
      size={30}
      onPress={hideModal}
      style={{
        position: 'absolute',
        top: -20, // Position the icon above the modal
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      }}
    />

    {/* Modal Content */}
    <View style={{ flex: 1, alignItems: 'center', padding: 20, marginTop: 20 }}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: 'black',
          textAlign: 'center',
          marginBottom: 15,
        }}
      >
        Are you sure you want to cancel the job?
      </Text>

      <Text
        style={{
          color: 'black',
          fontSize: 14,
          fontWeight: '500',
          alignSelf: 'flex-start',
          marginBottom: 5,
        }}
      >
        Give a reason!
      </Text>

      <TextInput
        label="Reason for Cancellation"
        value={cancelReason}
        onChangeText={setCancelReason}
        style={{
          width: '100%',
          height: 100,
          backgroundColor: '#fff',
          borderColor: '#ccc',
          borderWidth: 1,
          borderRadius: 8,
          padding: 10,
          textAlignVertical: 'top',
          marginBottom: 20,
        }}
        mode="outlined"
        multiline
        numberOfLines={4}
        placeholder="Type here..."
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        {/* Cancel Button */}
        <TouchableOpacity
          style={{
            borderRadius: 8,
            borderWidth: 1,
            borderColor: 'red',
            width: '45%',
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={hideModal}
        >
          <Text style={{ fontSize: 14, color: 'red' }}>Cancel</Text>
        </TouchableOpacity>

        {/* Submit Button */}
        <TouchableOpacity
          style={{
            width: '45%',
            height: 40,
            backgroundColor: '#468451',
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={handleSubmit}
        >
          <Text style={{ fontSize: 14, color: '#fff' }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
</Portal>


      </View>
    </Provider>
  );
}
