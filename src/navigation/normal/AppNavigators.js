import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Headerr from '../../components/Headerr';
import HomeScreen from '../../components/HomeScreen';
import Eachh from '../../components/Each';
import Eachh2 from '../../components/Each2';
import Scan from '../../components/Scan';
import Create from '../../components/Create';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator  initialRouteName='Home'  >
            <Stack.Screen name="Headerr" component={Headerr} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Eachh" component={Eachh} options={{ headerShown: false }} />
            <Stack.Screen name="Eachh2" component={Eachh2} options={{ headerShown: false }} />
            <Stack.Screen name="Scan" component={Scan} options={{ headerShown: false }} />
            <Stack.Screen name="Create" component={Create} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}


export default AppNavigator;
