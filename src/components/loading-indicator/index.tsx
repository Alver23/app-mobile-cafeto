import React from 'react';
import { ActivityIndicator, Platform, View } from 'react-native';

import { styles } from './styles';
import { colors } from '../../core/theme';
const { ios: iosTheme, android: androidTheme } = colors;

export default () => (
	<View style={[styles.container, styles.indicator]}>
		<ActivityIndicator
			size="large"
			color={Platform.OS === 'ios' ? iosTheme.primary : androidTheme.primary}
		/>
	</View>
);
