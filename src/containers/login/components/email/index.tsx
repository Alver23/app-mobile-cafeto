import React from 'react';
import { Text, TextInput } from 'react-native';

// Components
import { TextError } from '../../../../components';

// Context
import { LoginContext } from '../../login-context';

// Theme
import {
	textInputPrimaryStyle,
	textInputDangerStyle,
} from '../../../../core/theme';

export default () => (
	<LoginContext.Consumer>
		{(context) => {
			const { email, onChangeEmail } = context;
			const { error } = email;
			return (
				<>
					<Text>Email</Text>
					<TextInput
						style={error ? textInputDangerStyle : textInputPrimaryStyle}
						autoCapitalize="none"
						onChangeText={(value) => onChangeEmail(value)}
						textContentType="emailAddress"
					/>
					<TextError message={error} />
				</>
			);
		}}
	</LoginContext.Consumer>
);
