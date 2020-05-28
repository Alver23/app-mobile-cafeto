import React from 'react';
import { View } from 'react-native';
import { Button } from '../../../../components';
import { LoginContext } from '../../login-context';
import styles from './../../style';
import { BUTTON_VARIANT_TYPES, BUTTON_SIZE_TYPES } from '../../../../core/theme';

export default () => (
	<LoginContext.Consumer>
		{(context) => {
			const {
				email: { error: emailError },
				password: { error: passwordError },
				onSubmitForm,
				onSubmitFormAuth0,
			} = context;
			return (
				<View style={styles.mainButtonContainer}>
					<View style={styles.buttonContainer}>
						<Button
							title="Login"
							size={BUTTON_SIZE_TYPES.small}
							variant={BUTTON_VARIANT_TYPES.primary}
							onClick={onSubmitForm}
							isDisabled={passwordError || emailError ? true : false}
						/>
					</View>
					<View style={styles.buttonContainer}>
						<Button
							title="Login with Auth0"
							size={BUTTON_SIZE_TYPES.medium}
							variant={BUTTON_VARIANT_TYPES.primary}
							onClick={onSubmitFormAuth0}
						/>
					</View>
				</View>
			);
		}}
	</LoginContext.Consumer>
);
