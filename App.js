/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';
import { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from './src/navigation/MainNavigator';
// import BottomNavigator from './src/navigation/BottomNavigator';
import HomeScreen from './src/components/HomeScreen';
import Headerr from './src/components/Headerr';


const Tab = createBottomTabNavigator();

function App() {
  
  return (

 

<MainNavigator/>
  );
}


export default App;
