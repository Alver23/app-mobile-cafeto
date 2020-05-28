import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { buttonVariants, buttonSizes } from '../../core/theme';
import { Props } from './interface';

const component: FC<Props> = ({ title, isDisabled, size, variant, onClick }) => {
	const btnSize = buttonSizes[size] || buttonSizes.large;
	const btnStyle = isDisabled ? buttonVariants.disabled : buttonVariants[variant];
	return (
		<TouchableOpacity
			style={[btnStyle as any, btnSize]}
			activeOpacity={0.8}
			onPress={() => !isDisabled && onClick && onClick()}>
			<Text style={{ color: btnStyle.color }}>{title}</Text>
		</TouchableOpacity>
	);
};

export default component;
