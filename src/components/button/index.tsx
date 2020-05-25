// Components
import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';

// Theme
import {
	buttonVariants,
	buttonSizes,
	BUTTON_VARIANT_TYPES,
	BUTTON_SIZE_TYPES,
} from '../../utils/theme';

interface Props {
	title: string;
	isDisabled?: boolean;
	size?: BUTTON_SIZE_TYPES;
	variant: BUTTON_VARIANT_TYPES;
	onClick?: any;
}

const component: FC<Props> = ({
	title,
	isDisabled,
	size,
	variant,
	onClick,
}) => {
	const btnSize = buttonSizes[size] || buttonSizes.large;
	const btnStyle = isDisabled
		? buttonVariants.disabled
		: buttonVariants[variant];
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
