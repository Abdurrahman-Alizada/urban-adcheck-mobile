import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {
  Card,
  IconButton,
  TextInput,
  Modal,
  Portal,
  Provider,
} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import {PERMISSIONS, RESULTS, request} from 'react-native-permissions';
import {request, PERMISSIONS, RESULTS, check} from 'react-native-permissions';

export default function JobDetailUpload() {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const containerStyle = {
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 20,
    width: 386,
    height: 161,
    position: 'absolute',
    top: '20%',
    borderRadius: 12,
    alignSelf: 'center',
  };
  // const handleCameraAccess = async () => {
  //   console.log("object")
  //   let cameraPermission;
  //   // Check platform and request the appropriate permission
  //   if (Platform.OS === 'android') {
  //     cameraPermission = PERMISSIONS.ANDROID.CAMERA;
  //   } else if (Platform.OS === 'ios') {
  //     cameraPermission = PERMISSIONS.IOS.CAMERA;
  //   }

  //   try {
  //     const result = await request(cameraPermission);
  //   console.log("object",result)
  //     if (result === RESULTS.GRANTED) {
  //       const options = {
  //         mediaType: 'photo',
  //         saveToPhotos: true,
  //       };

  //       launchCamera(options, response => {
  //         if (response.didCancel) {
  //           console.log('User cancelled image picker');
  //         } else if (response.errorCode) {
  //           // console.error('Error: ', response);
  //           Alert.alert('Error', `Error occurred: ${response.errorCode}`);

  //         } else {
  //           console.log('Photo: ', response.assets[0]);
  //         }
  //       });
  //     } else if (result === RESULTS.DENIED) {
  //       Alert.alert(
  //         'Permission Denied',
  //         'Camera permission is required to take a photo.'
  //       );
  //     } else if (result === RESULTS.BLOCKED) {
  //       Alert.alert(
  //         'Permission Blocked',
  //         'Camera permission is blocked. Please enable it from settings.'
  //       );
  //     }
  //   } catch (error) {
  //     console.error('Error requesting camera permission: ', error);
  //   }
  // };
  const handleImageLibraryAccess = async () => {
    let photoLibraryPermission;

    // Determine the permission type based on platform
    if (Platform.OS === 'android') {
      photoLibraryPermission = PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;
    } else if (Platform.OS === 'ios') {
      photoLibraryPermission = PERMISSIONS.IOS.PHOTO_LIBRARY;
    }

    try {
      // Check if the photo library permission is already granted
      const result = await check(photoLibraryPermission);
      console.log('Permission check result:', result);

      if (result === RESULTS.GRANTED) {
        // Permission granted, launch image library
        const options = {
          mediaType: 'photo', // Only pick photos
          selectionLimit: 0, // Unlimited selection
          includeBase64: false, // Don't include base64 (can be set to true if needed)
        };

        launchImageLibrary(options, response => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.errorCode) {
            console.error('Error: ', response.errorMessage);
            Alert.alert('Error', `Error occurred: ${response.errorMessage}`);
          } else {
            console.log('Selected Photos: ', response.assets);
            Alert.alert('Success', 'Photo(s) selected successfully');
          }
        });
      } else {
        // If permission is denied or blocked, request permission
        const requestResult = await request(photoLibraryPermission);
        console.log('Request result:', requestResult);

        if (requestResult === RESULTS.GRANTED) {
          // If granted after request, launch image library
          const options = {
            mediaType: 'photo',
            selectionLimit: 0,
            includeBase64: false,
          };

          launchImageLibrary(options, response => {
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.errorCode) {
              console.error('Error: ', response.errorMessage);
              Alert.alert('Error', `Error occurred: ${response.errorMessage}`);
            } else {
              console.log('Selected Photos: ', response.assets);
              Alert.alert('Success', 'Photo(s) selected successfully');
            }
          });
        } else if (requestResult === RESULTS.DENIED) {
          Alert.alert(
            'Permission Denied',
            'Photo library permission is required to select a photo.',
          );
        } else if (requestResult === RESULTS.BLOCKED) {
          Alert.alert(
            'Permission Blocked',
            'Photo library permission is blocked. Please enable it from settings.',
          );
        }
      }
    } catch (error) {
      console.error('Error requesting photo library permission: ', error);
      // Show an alert for the error
      Alert.alert('Error', `Error requesting permission: ${error.message}`);
    }
  };
  return (
    <Provider>
      <View style={{flex: 1, padding: 20, backgroundColor: '#fff'}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
          }}>
          Jictum pretium magna ac mattis. Maecenas lobortis
        </Text>
        <Card
          style={{
            width: 392,
            height: 172,
            borderWidth: 1,
            borderRadius: 18,
            marginTop: 20,
            borderColor: '#068179',
            marginBottom: 16,
            borderStyle: 'dashed',
            backgroundColor: '#e8f5e9',
          }}>
          <Card.Content style={{alignItems: 'center'}}>
            <IconButton
              onPress={handleImageLibraryAccess}
              icon="camera"
              size={40}
              iconColor="#068179"
              style={{marginBottom: 8}}
            />
            <Text variant="titleLarge">Upload Photos</Text>
          </Card.Content>
        </Card>

        <Text style={{fontSize: 14, fontWeight: '500', marginVertical: 10}}>
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
            //marginBottom: 16,
            //padding:10,
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
            width: 387,
            height: 50,
            margin: 20,
            alignSelf: 'center',
          }}
          onPress={showModal}>
          <Text
            style={{
              fontSize: 16,
              color: '#fff',
              fontWeight: '600',
              textAlign: 'center',
            }}>
            Proceed
          </Text>
        </TouchableOpacity>

        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}>
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '700',
                  marginBottom: 12,
                  color: '#121BF4',
                }}>
                Congratulation{' '}
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: '400',

                  color: 'black',
                  textAlign: 'center',
                  marginBottom: 20,
                }}>
                Your job is submited{' '}
              </Text>
              <TouchableOpacity
                style={{
                  width: 180,

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
