// Dependencies
import React, { FC } from 'react';
import { View } from 'react-native';

// Styles
import styles from './styles';

// Models
import { CardProps } from './card-interface';

const component: FC<CardProps> = ({ children }) => {
	return <View style={styles.cardContainer}>{children}</View>;
};

export default component;
