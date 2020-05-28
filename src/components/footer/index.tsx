import React, { FC } from 'react';
import { View } from 'react-native';
import { Props } from './interface';
import styles from './styles';

const component: FC<Props> = ({ children }) => {
	return (
		<View style={styles.container}>
			<View style={styles.contentChildren}>{children}</View>
		</View>
	);
};

export default component;
