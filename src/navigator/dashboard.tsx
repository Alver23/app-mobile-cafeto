import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Containers
import HomeContainer from "../containers/home";
import EventsContainer from "../containers/events";
import EventDetailContainer from "../containers/event-detail";

const Stack = createStackNavigator();

export default () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Events" component={EventsContainer} />
            <Stack.Screen name="EventDetail" component={EventDetailContainer} />
        </Stack.Navigator>
    </NavigationContainer>
);
