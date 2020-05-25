// Dependencies
import React, { FC } from 'react';

// Components
import { Footer, Button } from '../../../../components';

// Models
import { Props } from './interface';

// Theme
import {
	BUTTON_SIZE_TYPES,
	BUTTON_VARIANT_TYPES,
} from '../../../../utils/theme';

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
