// AuthStack.js
import React from 'react';

import Login from '../screen/auth/Login/Login';
import SplashScreen from '../screen/SplashScreen';
import Signup from '../screen/auth/Signup/Signup';
import Header from '../components/Header';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: true,
          header: props => <Header {...props} />,
        }}
      />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default AuthStack;
