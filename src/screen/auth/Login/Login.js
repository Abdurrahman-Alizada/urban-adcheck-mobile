// import { useNavigation } from '@react-navigation/native';
// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// import Signup from '../Signup/Signup';
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useDispatch, useSelector } from 'react-redux';  // Importing from Redux Toolkit
// import { setUserDetails } from '../../../redux/reducers/user/userReducer';
// import { useLoginUserMutation } from '../../../redux/reducers/user/userThunk';
// export default function Login({navigation}) {
//   const dispatch = useDispatch(); // Create dispatch function from Redux

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');  // Manage confirmPassword state
//   const [loginUser, { isLoading, isError, error }] = useLoginUserMutation();

//   const handleSubmit = () => {
//     dispatch(setUserDetails({
//       email,
//       password,
//       confirmPassword
//     }));

//     navigation.navigate("HomeStack", { screen: "Main" });
//   };
//   return (
//     <View style={{
//       flex: 1, 
//       justifyContent: 'flex-start', 
//       padding: 20,
//       backgroundColor: 'white',
//       paddingTop: 100
//     }}>
//       <Text style={{
//         fontSize: 35, 
//         fontWeight: 'bold', 
//         textAlign: 'center', 
//         marginBottom: 60
//       }}>
//         Login
//       </Text>
      
//       <TextInput
//         style={{
//           height: 60, 
//           borderColor: '#468451', 
//           borderWidth: 1, 
//           marginBottom: 15, 
//           paddingHorizontal: 10,
//           borderRadius: 10,
//           backgroundColor: 'white'
//         }}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />
      
//       <TextInput
//         style={{
//           height: 60, 
//           borderColor: '#468451', 
//           borderWidth: 1, 
//           marginBottom: 15, 
//           paddingHorizontal: 10,
//           borderRadius: 10,
//           backgroundColor: 'white'
//         }}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
      
//       <TouchableOpacity style={{alignSelf: 'flex-end', marginBottom: 20,margin:20}}>
//         <Text style={{color: '#468451',fontWeight:"600",fontSize:16}}>Forgot your password?</Text>
//       </TouchableOpacity>
      
//       <TouchableOpacity 
//         style={{
//           backgroundColor: '#468451', 
//           padding: 15, 
//           borderRadius: 5, 
//           alignItems: 'center'
//         }}
//       >
//         <Text style={{color: 'white', fontWeight: 'bold',fontSize:18}}>Sign In</Text>
//       </TouchableOpacity>
      
//       <TouchableOpacity 
//         style={{marginTop: 15, alignItems: 'center'}}
//         onPress={() => navigation.navigate("Signup")} // Correct name of the screen

//         // onPress={() => navigation.navigate("AuthStack", { screen: "Signup" })}
//         >
//         <Text style={{color: 'black', fontWeight:"600",margin:20,fontSize:15}}>Create New Account</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }






import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../../../redux/reducers/user/userReducer';
import { useLoginUserMutation } from '../../../redux/reducers/user/userThunk';
import { Formik } from 'formik';
import * as Yup from 'yup'; // For validation schema
import { useNavigation } from '@react-navigation/native';

export default function Login({ navigation }) {
  const dispatch = useDispatch(); 
  const [loginUser] = useLoginUserMutation();

  // Validation Schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values) => {
    dispatch(setUserDetails(values));
    try {
      const response = await loginUser(values).unwrap();
      navigation.navigate("HomeStack", { screen: "Main" });
    } catch (err) {
      console.error("Login error:", err);
    }
  };

//   const handleSubmit = async (values, actions) => {
//     try {
//         const response = await loginUser({
//             email: values.email,
//             password: values.password,
//         });
//         console.log("res is", response)
//         if (response.data?.success) {
//             if (response?.data?.user) {
//                 const user = response?.data?.user
//                 dispatch(handleCurrentLoaginUser(user));
//                 await AsyncStorage.setItem('role', user.role);
//                 await AsyncStorage.setItem('token', user.token);
//                 await AsyncStorage.setItem('userId', user.id);
//                 await AsyncStorage.setItem('email', user.email);
//                 await AsyncStorage.setItem('fullName', user.fullName);
//                 await AsyncStorage.setItem('isLoggedIn', 'login');
//                 actions.resetForm();
//                 navigation.replace("TabNavigation");
//             }
//             if (response?.data?.message) {
//                 setErrorMessage(response?.data?.message);
//                 setDialogueVisible(true);
//             }
//         } else {
//             setErrorMessage(response?.error?.data?.message);
//             setDialogueVisible(true);
//         }
//     } finally {
//         setLoading(false)
//     }
// }

  return (
    <View style={{
      flex: 1,
      justifyContent: 'flex-start',
      padding: 20,
      backgroundColor: 'white',
      paddingTop: 100
    }}>
      <Text style={{
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 60
      }}>
        Login
      </Text>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <TextInput
              style={{
                height: 60,
                borderColor: '#468451',
                borderWidth: 1,
                marginBottom: 15,
                paddingHorizontal: 10,
                borderRadius: 10,
                backgroundColor: 'white'
              }}
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {touched.email && errors.email && (
              <Text style={{ color: 'red', fontSize: 14, marginBottom: 10 }}>
                {errors.email}
              </Text>
            )}

            <TextInput
              style={{
                height: 60,
                borderColor: '#468451',
                borderWidth: 1,
                marginBottom: 15,
                paddingHorizontal: 10,
                borderRadius: 10,
                backgroundColor: 'white'
              }}
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />
            {touched.password && errors.password && (
              <Text style={{ color: 'red', fontSize: 14, marginBottom: 10 }}>
                {errors.password}
              </Text>
            )}

            <TouchableOpacity style={{ alignSelf: 'flex-end', marginBottom: 20 }}
            onPress={()=>{
              navigation.navigate("ForgetPassword");
            }}
            >
              <Text style={{ color: '#468451', fontWeight: '600', fontSize: 16 }}>
                Forgot your password?
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: '#468451',
                padding: 15,
                borderRadius: 5,
                alignItems: 'center'
              }}
              onPress={handleSubmit}
            >
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>
                Sign In
              </Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>

      <TouchableOpacity
        style={{ marginTop: 15, alignItems: 'center' }}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={{
          color: 'black',
          fontWeight: '600',
          fontSize: 15,
          margin: 20
        }}>
          Create New Account
        </Text>
      </TouchableOpacity>
    </View>
  );
}
