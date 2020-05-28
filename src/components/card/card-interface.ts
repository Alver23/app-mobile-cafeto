import { ReactNode } from 'react';

export interface CardProps {
	children: ReactNode;
}

export interface CardHeader {
	children: ReactNode;
}

export interface CardBody {
	children: ReactNode;
}

export interface CardFooter {
	children: ReactNode;
}

export interface Item {
	id: number;
	title: string;
	address: string;
}

export interface CardList {
	items: Item[];
	onSelectedOption?: any;
	refreshing: boolean;
	onRefresh: () => void;
}

export interface CardItem extends Item {
	onSelectedOption?: any;
}
