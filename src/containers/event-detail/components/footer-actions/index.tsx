import React, { FC } from 'react';
import { Footer, Button } from '../../../../components';
import { Props } from './interface';
import { BUTTON_SIZE_TYPES, BUTTON_VARIANT_TYPES } from '../../../../core/theme';

const component: FC<Props> = ({ clickEdit, clickRemove }) => (
	<Footer>
		<Button
			isDisabled={false}
			title="Edit"
			size={BUTTON_SIZE_TYPES.small}
			variant={BUTTON_VARIANT_TYPES.primary}
			onClick={clickEdit}
		/>
		<Button
			isDisabled={false}
			title="Remove"
			size={BUTTON_SIZE_TYPES.small}
			variant={BUTTON_VARIANT_TYPES.primary}
			onClick={clickRemove}
		/>
	</Footer>
);

export default component;
