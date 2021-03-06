import React, { Fragment } from 'react';
import { Text, TextInput } from 'react-native';
import { LoginContext } from '../../login-context';
import { TextError } from '../../../../components';
import { textInputPrimaryStyle, textInputDangerStyle } from '../../../../core/theme';

export default () => {
	return (
		<LoginContext.Consumer>
			{(context) => {
				const { password, onChangePassword } = context;
				const { error } = password;
				return (
					<Fragment>
						<Text>Password</Text>
						<TextInput
							textContentType="password"
							secureTextEntry={true}
							style={error ? textInputDangerStyle : textInputPrimaryStyle}
							onChangeText={(value) => onChangePassword(value)}
						/>
						<TextError message={error} />
					</Fragment>
				);
			}}
		</LoginContext.Consumer>
	);
};
