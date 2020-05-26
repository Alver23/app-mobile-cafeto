// Dependencies
import React from 'react';
import { View } from 'react-native';

// Components
import EmailInput from '../email';
import PasswordInput from './../password';
import ButtonActions from './../button-actions';
import GenericError from './../generic-error';

// Styles
import styles from '../../style';

export default () => (
	<View>
		<View style={styles.container}>
			<EmailInput />
		</View>
		<View style={styles.container}>
			<PasswordInput />
		</View>
		<GenericError />
		<ButtonActions />
	</View>
);
