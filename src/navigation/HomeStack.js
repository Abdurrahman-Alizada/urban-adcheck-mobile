// HomeStack.js
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from '../screen/Dashboard/Main/Main';
import Header from '../components/Header';
import JobDetail from '../screen/Dashboard/JobDetail';
import JobDetailUpload from '../screen/Dashboard/JobDetailUpload';
import ProgressJob from '../screen/Dashboard/ProgressJob';


import NewRequestScreen from '../screen/Dashboard/NewRequestScreen';
import ApproveScreen from '../screen/Dashboard/ApproveScreen';
import HiddenJobCard from '../components/HiddenJobCard';
import InProgressJobScreen from '../screen/Dashboard/InProgressJobScreen';
import HiddenJobScreen from '../screen/Dashboard/HiddenJobScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          headerShown: true,
          header: props => <Header title='' {...props} />
        }}
      />
      <Stack.Screen
        name="NewRequestScreen"
        component={NewRequestScreen}
        options={{
          headerShown: true,
          header: props => <Header title='New request' {...props} />
        }}
      />
         <Stack.Screen
        name="ApproveScreen"
        component={ApproveScreen}
        options={{
          headerShown: true,
          header: props => <Header title='In progress' {...props} />
        }}
      />
      <Stack.Screen
        name="HiddenJobScreen"
        component={HiddenJobScreen}
        options={{
          headerShown: true,
          header: props => <Header title={"In progress"} {...props} />
        }}
      /> 
          <Stack.Screen
        name="InProgressJobScreen"
        component={InProgressJobScreen}
        options={{
          headerShown: true,
          header: props => <Header title={"In progress"}{...props} />
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
          header: props => <Header title={"Job Details"} {...props} />
        }}
      /> 
      
       
        {/* <Stack.Screen
        name="ApproveJob"
        component={ApproveJob}
        options={{
          headerShown: true,
          header: props => <Header title={"In progress"} {...props} />
        }}
      />  */}
    </Stack.Navigator> 
  );
};

export default HomeStack;
