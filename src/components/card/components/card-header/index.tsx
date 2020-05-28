import React, { FC } from 'react';
import { View } from 'react-native';
import { CardHeader } from '../../card-interface';
import styles from './../../styles';

const component: FC<CardHeader> = ({ children }) => {
	return <View style={styles.cardHeader}>{children}</View>;
};

export default component;
