import { Platform } from 'react-native';
import { colors } from "./colors";

const { ios: iosTheme, android: androidTheme } = colors;

const defaultStyles = {
    color: 'white',
    borderRadius: 20,
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
}

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
}
