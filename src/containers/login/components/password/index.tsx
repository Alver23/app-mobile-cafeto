import React from 'react';
import { Text, TextInput } from 'react-native';

// Components
import { TextError } from '../../../../components';

// Theme
import {
	textInputPrimaryStyle,
	textInputDangerStyle,
} from '../../../../utils/theme';

export default ({ error, onChangeValue }) => {
	return (
		<>
			<Text>Password</Text>
			<TextInput
				textContentType="password"
				secureTextEntry={true}
				style={error ? textInputDangerStyle : textInputPrimaryStyle}
				onChangeText={(value) => onChangeValue(value)}
			/>
			<TextError message={error} />
		</>
	);
};
