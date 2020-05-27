// Dependencies
import React from 'react';
import { View } from 'react-native';

// Components
import { TextError } from '../../../../components';

import { LoginContext } from '../../login-context';

// Styles
import styles from './../../style';

export default () => (
	<LoginContext.Consumer>
		{(context) => {
			const { genericError, requestError } = context;
			return (
				<View style={styles.container}>
					<TextError
						message={
							genericError || requestError
						}
					/>
				</View>
			);
		}}
	</LoginContext.Consumer>
);
