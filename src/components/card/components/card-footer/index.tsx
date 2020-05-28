import React, { FC } from 'react';
import { View } from 'react-native';
import { CardFooter } from '../../card-interface';
import styles from './../../styles';

const component: FC<CardFooter> = ({ children }) => {
	return <View style={styles.cardFooter}>{children}</View>;
};

export default component;
