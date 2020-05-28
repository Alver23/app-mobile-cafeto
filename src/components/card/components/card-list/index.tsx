import React, { FC } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import CardItem from './../card-item';
import { CardList } from '../../card-interface';

const component: FC<CardList> = ({ items, refreshing, onRefresh, onSelectedOption }) => {
	return (
		<FlatList
			data={items}
			renderItem={({ item }) => <CardItem {...item} onSelectedOption={onSelectedOption} />}
			refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
			keyExtractor={(item) => String(item.id)}
		/>
	);
};

export default component;
