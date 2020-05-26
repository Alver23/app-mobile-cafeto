import React from 'react';
import { Text, TextInput } from 'react-native';

import { LoginContext } from '../../login-context';

// Components
import { TextError } from '../../../../components';

// Theme
import {
	textInputPrimaryStyle,
	textInputDangerStyle,
} from '../../../../core/theme';

export default () => {
	return (
		<LoginContext.Consumer>
			{(context) => {
				const { password, onChangePassword } = context;
				const { error } = password;
				return (
					<>
						<Text>Password</Text>
						<TextInput
							textContentType="password"
							secureTextEntry={true}
							style={error ? textInputDangerStyle : textInputPrimaryStyle}
							onChangeText={(value) => onChangePassword(value)}
						/>
						<TextError message={error} />
					</>
				);
			}}
		</LoginContext.Consumer>
	);
};
