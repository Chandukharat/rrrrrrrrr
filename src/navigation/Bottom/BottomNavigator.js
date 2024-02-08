import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Headerr from '../../components/Headerr';
import AppNavigator from '../normal/AppNavigators';
import HomeScreen from '../../components/HomeScreen';
const Bottom = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Bottom.Navigator >
      <Bottom.Screen
        name="Explore"
        component={AppNavigator}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={require('../../assests/icons/Explore.png')}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: tabInfo.focused ? 'blue' : 'black',
                }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Logout"
        component={Screen2}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={require('../../assests/icons/Logout.png')}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: tabInfo.focused ? 'blue' : 'black',
                }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Profile"
        component={Screen3}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={require('../../assests/icons/Profile.png')}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: tabInfo.focused ? 'blue' : 'black',
                }}
              />
            );
          },
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;