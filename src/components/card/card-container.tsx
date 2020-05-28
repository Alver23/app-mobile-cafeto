import React, { FC } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { CardProps } from './card-interface';

const component: FC<CardProps> = ({ children }) => {
	return <View style={styles.cardContainer}>{children}</View>;
};

export default component;
