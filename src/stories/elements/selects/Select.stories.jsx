import { createSelect } from './Select.js';
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
	getHoverColorClasses,
	getFocusColorClasses,
} from '../../storybook-colors.js';

export default {
	title: 'Elements/Select',
	tags: ['autodocs'],
	parameters: {
		docs: {
			page: () => (
				<>
					<Title>Select</Title>
					<Subtitle>Custom Select Component</Subtitle>
					<Description>
						The **.neo-select** class is used for styling select elements in a
						neobrutalism style.
					</Description>
					<Primary />
					<Controls />
					<Stories />
				</>
			),
		},
	},
	argTypes: {
		placeholder: { control: 'text' },
		disabled: { control: 'boolean' },
		shadow: { control: 'boolean' },
		shadowFixed: { control: 'boolean' },
		borderRadius: {
			control: { type: 'select' },
			options: ['none', 'rounded', 'rounded-corners'],
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
	},

	render: (args) => createSelect(args),
};

export const Default = {
	args: {
		placeholder: 'Default Select',
	},
};

export const Colored = {
	args: {
		placeholder: 'Colored Select',
		colorClass: 'neo-yellow',
	},
};

export const HoverColored = {
	args: {
		placeholder: 'Hover Colored Select',
		hoverColorClass: 'muted-pink-base-hover',
	},
};

export const FocusColored = {
	args: {
		placeholder: 'Focus Colored Select',
		focusColorClass: 'muted-pink-base-focus',
	},
};

export const Rounded = {
	args: {
		placeholder: 'Rounded Select',
		borderRadius: 'rounded',
	},
};

export const RoundedCorners = {
	args: {
		placeholder: 'Select with Rounded Corners',
		borderRadius: 'rounded-corners',
	},
};

export const Shadow = {
	args: {
		placeholder: 'Select with Shadow',
		shadow: true,
	},
};

export const ShadowFixed = {
	args: {
		placeholder: 'Select with Fixed Shadow',
		shadowFixed: true,
	},
};

export const Disabled = {
	args: {
		placeholder: 'Disabled Select',
		disabled: true,
	},
};
