import  React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Containers
import HomeContainer from './../containers/home';
import LoginContainer from "../containers/login/login";


const Dashboard = createStackNavigator();
const Auth = createStackNavigator();

function DetailsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
        </View>
    );
}

export const DashboardNavigator = () => (
    <NavigationContainer>
        <Dashboard.Navigator>
            <Dashboard.Screen name="Home" component={HomeContainer} />
            <Dashboard.Screen name="Details" component={DetailsScreen} />
        </Dashboard.Navigator>
    </NavigationContainer>
);

export const AuthNavigator = () => (
    <NavigationContainer>
        <Auth.Navigator>
            <Auth.Screen name="Login" component={LoginContainer}></Auth.Screen>
        </Auth.Navigator>
    </NavigationContainer>
)
