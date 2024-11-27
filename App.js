import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Correct import
import HomeStack from './src/navigation/HomeStack';
import AuthStack from './src/navigation/AuthStack';
import { Provider } from 'react-redux';  // Import Provider for Redux
import { store } from './src/redux/store';

const Stack = createNativeStackNavigator(); // Correct function

export default function App() {
  return (
    <Provider store={store}>  

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen
          name="Auth"
          component={AuthStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeStack"
          component={HomeStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>

  );
}

const styles = StyleSheet.create({});
