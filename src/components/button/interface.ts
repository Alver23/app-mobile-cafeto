import { BUTTON_SIZE_TYPES, BUTTON_VARIANT_TYPES } from '../../core/theme';

export interface Props {
	title: string;
	isDisabled?: boolean;
	size?: BUTTON_SIZE_TYPES;
	variant: BUTTON_VARIANT_TYPES;
	onClick?: any;
}
