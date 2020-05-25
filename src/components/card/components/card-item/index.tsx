// Dependencies
import React, { FC } from 'react';
import { View, Text } from 'react-native';

// Components
import Button from './../../../button';
import Card from '../../card-container';
import CardFooter from './../card-footer';
import CardHeader from './../card-body';

// Models
import { CardItem } from '../../card-interface';

// Styles
import styles from './../../styles';
import {
	BUTTON_SIZE_TYPES,
	BUTTON_VARIANT_TYPES,
} from '../../../../utils/theme';

const component: FC<CardItem> = ({ id, title, address, onSelectedOption }) => {
	return (
		<Card>
			<CardHeader>
				<Text>{title}</Text>
				<View style={styles.cardItemContainer}>
					{!!address && (
						<Text>
							<Text style={styles.cardItemBold}>Address:</Text> {address}
						</Text>
					)}
				</View>
			</CardHeader>
			<CardFooter>
				<Button
					title="View more"
					variant={BUTTON_VARIANT_TYPES.primary}
					size={BUTTON_SIZE_TYPES.small}
					onClick={() => onSelectedOption && onSelectedOption({ id })}
				/>
			</CardFooter>
		</Card>
	);
};

export default component;
