// Dependencies
import React, { FC } from 'react';
import { TextInput, Text, View } from 'react-native';

// Components
import { TextError } from '../../index';

// Models
import { Props } from './interface';

// Styles
import styles from './styles';
// Theme
import {
	textInputPrimaryStyle,
	textInputDangerStyle,
} from '../../../core/theme';

const component: FC<Props> = ({ label, error, customProps = {} }) => (
	<View style={styles.container}>
		{!!label && <Text style={styles.label}>{label}</Text>}
		<TextInput
			style={error ? textInputDangerStyle : textInputPrimaryStyle}
			{...customProps}
		/>
		<TextError message={error} />
	</View>
);

export default component;
