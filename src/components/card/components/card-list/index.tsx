// Dependencies
import React, { FC } from 'react';
import { FlatList } from 'react-native';

// Components
import CardItem from './../card-item';

// Models
import { CardList } from '../../card-interface';

const component: FC<CardList> = ({ items, onSelectedOption }) => {
	return (
		<FlatList
			data={items}
			renderItem={({ item }) => (
				<CardItem {...item} onSelectedOption={onSelectedOption} />
			)}
			keyExtractor={(item) => String(item.id)}
		/>
	);
};

export default component;
