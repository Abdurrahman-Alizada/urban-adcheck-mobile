import React from 'react';

import Signup from '../screen/auth/Signup/Signup';
import Header from '../components/Header';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screen/auth/Login/Login';
//import ForgetPassword from '../screen/auth/Login/ForgetPassword';
import Forgetpasswordemail from '../screen/auth/Login/ForgetPasswordEmail';
import Setpassword from '../screen/auth/Login/SetPassword';
import ForgetPassword from '../screen/auth/Login/ForgetPassword';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
         // headerShown: true,
       
        }}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
         />
      <Stack.Screen
        name="Forgetpasswordemail"
        component={Forgetpasswordemail}
         />
         <Stack.Screen
        name="Setpassword"
        component={Setpassword}
         />
      
      
    </Stack.Navigator>
  );
};

export default AuthStack;
