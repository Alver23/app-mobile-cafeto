import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Containers
import LoginContainer from "../containers/login/login";


const Stack = createStackNavigator();

export default () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginContainer}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
)
