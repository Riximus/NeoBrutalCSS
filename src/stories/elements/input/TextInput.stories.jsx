import { createTextInput } from './TextInput.js';
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
	title: 'Elements/Inputs/Text Input',
	tags: ['autodocs'],
	parameters: {
		docs: {
			page: () => (
				<>
					<Title />
					<Subtitle></Subtitle>
					<Description>
						The **.neo-input-text** class is designed for styling text-based input
						fields like text, search, number, password, email, and telephone.
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
		colorClass: {
			control: 'select',
			options: getAllColorClasses(),
		},
		hoverColorClass: {
			control: 'select',
			options: getHoverColorClasses(),
		},
		focusColorClass: {
			control: 'select',
			options: getFocusColorClasses(),
		},
		disabled: { control: 'boolean' },
		error: { control: 'boolean' },
		size: {
			control: { type: 'select' },
			options: ['default', 'small', 'large'],
		},
		shadow: { control: 'boolean' },
		shadowFixed: { control: 'boolean' },
		borderRadius: {
			control: { type: 'select' },
			options: ['none', 'rounded', 'rounded-corners'],
		},
	},
	render: (args) => createTextInput(args),
};

export const Default = {
	args: {
		placeholder: 'Enter text...',
	},
};

export const Colored = {
	args: {
		placeholder: 'Colored Input',
		colorClass: 'neo-yellow',
	},
};

export const HoverColored = {
	args: {
		placeholder: 'Input with Hover Color',
		hoverColorClass: 'muted-green-base-hover',
	},
};

export const FocusColored = {
	args: {
		placeholder: 'Input with Focus Color',
		focusColorClass: 'neo-pink-focus',
	},
};

export const Shadow = {
	args: {
		placeholder: 'Input with Shadow',
		shadow: true,
	},
};

export const ShadowFixed = {
	args: {
		placeholder: 'Input with Fixed Shadow',
		shadowFixed: true,
	},
};

export const Rounded = {
	args: {
		placeholder: 'Rounded Input',
		borderRadius: 'rounded',
	},
};

export const RoundedCorners = {
	args: {
		placeholder: 'Input with Rounded Corners',
		borderRadius: 'rounded-corners',
	},
};

export const Disabled = {
	args: {
		placeholder: 'Disabled Input',
		disabled: true,
	},
};

export const Error = {
	args: {
		placeholder: 'Input with Error',
		error: true,
	},
};

export const Small = {
	args: {
		placeholder: 'Small Input',
		size: 'small',
	},
};

export const Large = {
	args: {
		placeholder: 'Large Input',
		size: 'large',
	},
};
