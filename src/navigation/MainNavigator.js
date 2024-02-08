import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Headerr from '../components/Headerr';
import HomeScreen from '../components/HomeScreen';
import Splash from './normal/Splash';
import Parent from './normal/Parent';
import { View } from 'react-native';
import AppNavigator from './normal/AppNavigators';
import Server from '../components/Server';
import Password from '../components/Password';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {


    return (
        <NavigationContainer>
            <Stack.Navigator  >

                <Stack.Screen
                    name="Splash"
                    component={Splash}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Parent"
                    component={Parent}
                    options={{ headerShown: false }}
                />
             
                <Stack.Screen name="Headerr" component={Headerr} options={{ headerShown: false }} />
                <Stack.Screen name="Server" component={Server} options={{ headerShown: false }} />
                <Stack.Screen name="Password" component={Password} options={{ headerShown: false }} />
            </Stack.Navigator>
          
        </NavigationContainer>

    );
};

export default MainNavigator;