import { createCheckbox } from './Checkbox.js';
import {
	Controls,
	Description,
	Primary,
	Stories,
	Subtitle,
	Title,
} from '@storybook/blocks';
import * as React from 'react';
import {
	getAllColorClasses,
	getCheckedColorClasses,
	getHoverColorClasses,
	getFocusColorClasses,
} from '../../storybook-colors.js';

export default {
	title: 'Elements/Checkbox',
	tags: ['autodocs'],
	parameters: {
		docs: {
			page: () => (
				<>
					<Title>Checkbox</Title>
					<Subtitle>Custom Checkbox Component</Subtitle>
					<Description>
						The **.neo-checkbox** class is used for styling checkboxes in a
						neobrutalism style. This custom checkbox component allows for various
						styles and states, including default, checked, and disabled. By default
						the style has a checkmark but there are classes to change the style to an
						X or rectangle.
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
		checkedColorClass: {
			control: { type: 'select' },
			options: getCheckedColorClasses(),
		},
		colorClass: {
			control: { type: 'select' },
			options: getAllColorClasses(),
		},
		hoverColorClass: {
			control: { type: 'select' },
			options: getHoverColorClasses(),
		},
		focusColorClass: {
			control: { type: 'select' },
			options: getFocusColorClasses(),
		},
		styleVariant: {
			control: { type: 'select' },
			options: ['default', 'cross', 'square', 'square-inverted'],
		},
		shadow: { control: 'boolean' },
		shadowFixed: { control: 'boolean' },
	},
	render: (args) => createCheckbox(args),
};

export const Default = {
	/* Default values in the helper file */
};

export const Checkmark = {
	args: {
		checked: true,
	},
};

export const Cross = {
	args: {
		checked: true,
		styleVariant: 'cross',
	},
};

export const Square = {
	args: {
		checked: true,
		styleVariant: 'square',
	},
};

export const SquareInverted = {
	args: {
		checked: true,
		styleVariant: 'square-inverted',
	},
};

export const Colored = {
	args: {
		colorClass: 'neo-blue',
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
		hoverColorClass: 'neo-purple-hover',
	},
};

export const ColoredFocus = {
	args: {
		focusColorClass: 'neo-pink-focus',
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
