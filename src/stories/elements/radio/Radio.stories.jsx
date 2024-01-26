import { createRadio } from './Radio.js';
import {
	Title,
	Subtitle,
	Description,
	Primary,
	Controls,
	Stories,
} from '@storybook/blocks';
import * as React from 'react';
import {
	getAllColorClasses,
	getCheckedColorClasses,
	getHoverColorClasses,
	getFocusColorClasses,
} from '../../storybook-colors.js';

export default {
	title: 'Elements/Radio',
	tags: ['autodocs'],
	parameters: {
		docs: {
			page: () => (
				<>
					<Title>Radio</Title>
					<Subtitle>Custom Radio Component</Subtitle>
					<Description>
						The **.neo-radio** class is used for styling radio buttons in a
						neobrutalism style. This custom radio component allows for various styles
						and states, including default, checked, and disabled.
					</Description>
					<Primary />
					<Controls />
					<Stories />
				</>
			),
		},
	},
	argTypes: {
		checked: { control: 'boolean' },
		disabled: { control: 'boolean' },
		colorClass: {
			control: { type: 'select' },
			options: getAllColorClasses(),
		},
		checkedColorClass: {
			control: { type: 'select' },
			options: getCheckedColorClasses(),
		},
		hoverColorClass: {
			control: { type: 'select' },
			options: getHoverColorClasses(),
		},
		focusColorClass: {
			control: { type: 'select' },
			options: getFocusColorClasses(),
		},
		shadow: { control: 'boolean' },
		shadowFixed: { control: 'boolean' },
	},

	render: (args) => createRadio(args),
};

export const Default = {
	/* Default values in the helper file */
};

export const Radio = {
	args: {
		checked: true,
	},
};

export const Colored = {
	args: {
		colorClass: 'neo-green',
	},
};

export const ColoredChecked = {
	args: {
		checked: true,
		checkedColorClass: 'neo-pink-checked',
	},
};

export const ColoredHover = {
	args: {
		hoverColorClass: 'neo-green-hover',
	},
};

export const ColoredFocus = {
	args: {
		focusColorClass: 'neo-blue-focus',
	},
};

export const Disabled = {
	args: {
		disabled: true,
	},
};

export const Shadow = {
	args: {
		shadow: true,
	},
};

export const ShadowFixed = {
	args: {
		shadowFixed: true,
	},
};
