import { Platform } from 'react-native';

import { colors } from "./colors";
const { ios, android } = colors;

const defaultStyles = {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
}
export const textInputPrimaryStyle = {
    ...Platform.select({
        ios: {...defaultStyles},
        android: {...defaultStyles}
    }),
}

export const textInputDangerStyle = {
    ...Platform.select({
        ios: {...defaultStyles, borderColor: ios.danger},
        android: {...defaultStyles, borderColor: android.danger}
    }),
}
