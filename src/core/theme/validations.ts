import { Platform } from 'react-native';

import { colors } from './colors';

const { ios, android } = colors;

export const validationsStyle = {
	error: {
		...Platform.select({
			ios: {
				color: ios.danger,
			},
			android: {
				color: android.danger,
			},
		}),
	},
};
