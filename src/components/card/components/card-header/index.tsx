// Dependencies
import React, { FC } from 'react';
import { View } from 'react-native';

// Models
import { CardHeader } from '../../card-interface';

// Styles
import styles from './../../styles';

const component: FC<CardHeader> = ({ children }) => {
	return <View style={styles.cardHeader}>{children}</View>;
};

export default component;
