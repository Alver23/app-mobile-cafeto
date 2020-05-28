import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EventForm from '../containers/event-form';
import EventsContainer from '../containers/events';
import EventDetailContainer from '../containers/event-detail';

const Stack = createStackNavigator();

export default () => (
	<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen name="Events" component={EventsContainer} />
			<Stack.Screen name="EventDetail" component={EventDetailContainer} options={{ title: 'Event Detail' }} />
			<Stack.Screen name="EventForm" component={EventForm} options={{ title: 'Event Form' }} />
		</Stack.Navigator>
	</NavigationContainer>
);
