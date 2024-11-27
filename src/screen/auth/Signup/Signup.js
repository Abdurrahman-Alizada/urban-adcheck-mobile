
// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { Formik } from 'formik';
// import * as Yup from 'yup';

// export default function Login({ navigation }) {
//   //const navigation = useNavigation();

//   const validationSchema = Yup.object().shape({
//     email: Yup.string()
//       .email('Invalid email address')
//       .required('Email is required'),
//     password: Yup.string()
//       .min(6, 'Password must be at least 6 characters')
//       .required('Password is required'),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref('password'), null], 'Passwords must match')
//       .required('Confirm Password is required')
//   });

//   return (
//     <View style={{
//       flex: 1, 
//       justifyContent: 'flex-start', 
//       padding: 20,
//       backgroundColor: 'white',
//       paddingTop: 100
//     }}>
//       <Text style={{
//         fontSize: 30, 
//         fontWeight: 'bold', 
//         textAlign: 'center', 
//         marginBottom: 60
//       }}>
//         Create account
//       </Text>

//       <Formik
//         initialValues={{ email: '', password: '', confirmPassword: '' }}
//         validationSchema={validationSchema}
//         onSubmit={(values) => {
//           // Handle form submission, you can add your submit logic here
//           navigation.navigate('HomeStack', { screen: 'Main' });
//         }}
//       >
//         {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
//           <>
//             <TextInput
//               style={{
//                 height: 60, 
//                 borderColor: '#468451', 
//                 borderWidth: 1, 
//                 marginBottom: 15, 
//                 paddingHorizontal: 10,
//                 borderRadius: 10,
//                 backgroundColor: 'white'
//               }}
//               placeholder="Email"
//               value={values.email}
//               onChangeText={handleChange('email')}
//               onBlur={handleBlur('email')}
//               keyboardType="email-address"
//               autoCapitalize="none"
//             />
//             {touched.email && errors.email && (
//               <Text style={{ color: 'red', marginBottom: 10 }}>{errors.email}</Text>
//             )}

//             <TextInput
//               style={{
//                 height: 60, 
//                 borderColor: '#468451', 
//                 borderWidth: 1, 
//                 marginBottom: 15, 
//                 paddingHorizontal: 10,
//                 borderRadius: 10,
//                 backgroundColor: 'white'
//               }}
//               placeholder="Password"
//               value={values.password}
//               onChangeText={handleChange('password')}
//               onBlur={handleBlur('password')}
//               secureTextEntry
//             />
//             {touched.password && errors.password && (
//               <Text style={{ color: 'red', marginBottom: 10 }}>{errors.password}</Text>
//             )}

//             <TextInput
//               style={{
//                 height: 60, 
//                 borderColor: '#468451', 
//                 borderWidth: 1, 
//                 marginBottom: 15, 
//                 paddingHorizontal: 10,
//                 borderRadius: 10,
//                 backgroundColor: 'white'
//               }}
//               placeholder="Confirm Password"
//               value={values.confirmPassword}
//               onChangeText={handleChange('confirmPassword')}
//               onBlur={handleBlur('confirmPassword')}
//               secureTextEntry
//             />
//             {touched.confirmPassword && errors.confirmPassword && (
//               <Text style={{ color: 'red', marginBottom: 10 }}>{errors.confirmPassword}</Text>
//             )}

//             <TouchableOpacity 
//               style={{
//                 backgroundColor: '#468451', 
//                 padding: 15, 
//                 borderRadius: 5, 
//                 margin: 15,
//                 alignItems: 'center'
//               }}
//               onPress={handleSubmit}
//             >
//               <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Sign Up</Text>
//             </TouchableOpacity>
//           </>
//         )}
//       </Formik>

//       <TouchableOpacity 
//         style={{ marginTop: 15, alignItems: 'center' }}
//         onPress={() => navigation.navigate('Login')}
//       >
//         <Text style={{ color: 'black', fontWeight: '600', margin: 10, fontSize: 15 }}>Already have an account</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }
import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';

export default function Login() {
  const navigation = useNavigation();

  return (
    <View style={{
      flex: 1, 
      justifyContent: 'flex-start', 
      padding: 20,
      backgroundColor: 'white',
      paddingTop: 100
    }}>
      <Text style={{
        fontSize: 30, 
        fontWeight: 'bold', 
        textAlign: 'center', 
        marginBottom: 60
      }}>
        Create account
      </Text>

      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        onSubmit={() => {
          // Navigate to Main screen on form submit
          navigation.navigate('HomeStack', { screen: 'Main' });
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
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
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              keyboardType="email-address"
              autoCapitalize="none"
            />
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
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              secureTextEntry
            />
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
              placeholder="Confirm Password"
              value={values.confirmPassword}
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              secureTextEntry
            />
            
            <TouchableOpacity 
              style={{
                backgroundColor: '#468451', 
                padding: 15, 
                borderRadius: 5, 
                margin: 15,
                alignItems: 'center'
              }}
              onPress={handleSubmit}
            >
              <Text style={{color: 'white', fontWeight: 'bold', fontSize:18}}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={{ marginTop: 15, alignItems: 'center' }}
            >
              <Text style={{color: 'black', fontWeight: "600", margin: 10, fontSize: 15}}>
                Already have an account
              </Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
}
