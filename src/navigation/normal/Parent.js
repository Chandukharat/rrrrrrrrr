import React from "react";
import BottomNavigator from "../Bottom/BottomNavigator";
import AppNavigator from './AppNavigators'

import { View } from "react-native";



const Parent = () => {
    return (
    <View style={{flex: 1}}>
    <AppNavigator />
 
  </View>
  )
  };
  
  export default Parent;