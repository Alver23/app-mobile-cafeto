import { Platform } from 'react-native';
import { colors } from './colors';

const { ios: iosTheme, android: androidTheme } = colors;

const defaultStyles = {
	padding: 8,
	borderRadius: 20,
	alignItems: 'center',
	color: 'white',
};

export const buttonPrimaryStyle = {
	...defaultStyles,
	...Platform.select({
		ios: {
			backgroundColor: iosTheme.primary,
		},
		android: {
			backgroundColor: androidTheme.primary,
		},
	}),
};

export const buttonSizes = {
	small: { width: 100 },
	medium: { width: 200 },
	large: { width: '100%' },
};

export const buttonDisabledStyle = {
	...defaultStyles,
	...Platform.select({
		ios: {
			backgroundColor: '#b5b5b5',
		},
		android: {
			backgroundColor: '#b5b5b5',
		},
	}),
};

export const buttonVariants = {
	primary: buttonPrimaryStyle,
	disabled: buttonDisabledStyle,
};

export enum BUTTON_VARIANT_TYPES {
	primary = 'primary',
	disabled = 'disabled',
}

export enum BUTTON_SIZE_TYPES {
	small = 'small',
	medium = 'medium',
	large = 'large',
}
