import React, { Fragment } from 'react';
import { Text, TextInput } from 'react-native';
import { TextError } from '../../../../components';
import { LoginContext } from '../../login-context';
import { textInputPrimaryStyle, textInputDangerStyle } from '../../../../core/theme';

export default () => (
	<LoginContext.Consumer>
		{(context) => {
			const { email, onChangeEmail } = context;
			const { error } = email;
			return (
				<Fragment>
					<Text>Email</Text>
					<TextInput
						style={error ? textInputDangerStyle : textInputPrimaryStyle}
						autoCapitalize="none"
						onChangeText={(value) => onChangeEmail(value)}
						textContentType="emailAddress"
					/>
					<TextError message={error} />
				</Fragment>
			);
		}}
	</LoginContext.Consumer>
);
