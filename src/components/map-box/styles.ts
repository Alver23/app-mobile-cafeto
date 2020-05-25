// Dependencies
import { StyleSheet } from 'react-native';

// Assets
const icon = require('./../../assets/icons/map-icon.png');

export default StyleSheet.create({
	mainContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	mapContainer: {
		height: 300,
		width: '96%',
	},
	map: {
		flex: 1,
	},
});

export const iconStyle = {
	iconImage: icon,
	iconAllowOverlap: true,
	iconSize: 1.2,
};
