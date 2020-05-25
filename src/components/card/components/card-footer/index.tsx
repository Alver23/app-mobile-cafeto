// Dependencies
import React, { FC } from 'react';
import { View } from 'react-native';

// Models
import { CardFooter } from '../../card-interface';

// Styles
import styles from './../../styles';

const component: FC<CardFooter> = ({ children }) => {
	return <View style={styles.cardFooter}>{children}</View>;
};

export default component;
