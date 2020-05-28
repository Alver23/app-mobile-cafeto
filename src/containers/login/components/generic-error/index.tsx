import React from 'react';
import { View } from 'react-native';
import { TextError } from '../../../../components';
import { LoginContext } from '../../login-context';
import styles from './../../style';

export default () => (
	<LoginContext.Consumer>
		{(context) => {
			const { genericError, requestError } = context;
			return (
				<View style={styles.container}>
					<TextError message={genericError || requestError} />
				</View>
			);
		}}
	</LoginContext.Consumer>
);
