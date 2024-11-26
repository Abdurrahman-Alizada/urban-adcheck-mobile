// HomeStack.js
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from '../screen/Dashboard/Main/Main';
import Header from '../components/Header';
import NewRequest from '../components/NewRequest';
import JobDetail from '../screen/Dashboard/JobDetail';
import JobDetailUpload from '../screen/Dashboard/JobDetailUpload';
import ProgressJob from '../screen/Dashboard/ProgressJob';
import HiddenJob from '../screen/Dashboard/HiddenJob';
import ApproveJob from '../screen/Dashboard/ApproveJob';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          headerShown: true,
          header: props => <Header {...props} />
        }}
      />
      <Stack.Screen
        name="NewRequest"
        component={NewRequest}
        options={{
          headerShown: true,
          header: props => <Header {...props} />
        }}
      />
      <Stack.Screen
        name="JobDetail"
        component={JobDetail}
        options={{
          headerShown: true,
          header: props => <Header {...props} />
        }}
      />
       <Stack.Screen
        name="JobDetailUpload"
        component={JobDetailUpload}
        options={{
          headerShown: true,
          header: props => <Header {...props} />
        }}
      />
         <Stack.Screen
        name="ProgressJob"
        component={ProgressJob}
        options={{
          headerShown: true,
          header: props => <Header {...props} />
        }}
      /> 
       <Stack.Screen
        name="HiddenJob"
        component={HiddenJob}
        options={{
          headerShown: true,
          header: props => <Header {...props} />
        }}
      /> 
        <Stack.Screen
        name="ApproveJob"
        component={ApproveJob}
        options={{
          headerShown: true,
          header: props => <Header {...props} />
        }}
      /> 
    </Stack.Navigator> 
  );
};

export default HomeStack;
