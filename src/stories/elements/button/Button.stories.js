import { createButton } from './Button.js';
import {
	getAllColorClasses,
	getHoverColorClasses,
	getFocusColorClasses,
} from '../../storybook-colors.js';

export default {
	title: 'Elements/Button',
	tags: ['autodocs'],
	argTypes: {
		label: { control: 'text' },
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
		borderRadius: {
			control: { type: 'select' },
			options: ['none', 'rounded', 'rounded-corners'],
		},
		shadow: { control: 'boolean' },
		shadowFixed: { control: 'boolean' },
		size: {
			control: { type: 'select' },
			options: ['Default', 'Small (S)', 'Big (L)', 'Bigger (XL)'],
		},
		disabled: { control: 'boolean' },
	},
	render: (args) => {
		return createButton(args);
	},
};

export const Default = {
	args: {
		label: 'Button',
	},
};

export const Colored = {
	args: {
		label: 'Colored Button',
		colorClass: 'neo-orange',
	},
};

export const HoverColored = {
	args: {
		label: 'Hover Colored Button',
		hoverColorClass: 'neo-blue-hover', // hover color
	},
};

export const FocusColored = {
	args: {
		label: 'Focus Colored Button',
		focusColorClass: 'neo-green-focus', // focus color
	},
};

export const Rounded = {
	args: {
		label: 'Rounded Button',
		borderRadius: 'rounded',
	},
};

export const RoundedCorners = {
	args: {
		label: 'Rounded Corners Button',
		borderRadius: 'rounded-corners',
	},
};

export const Shadow = {
	args: {
		label: 'Button with shadow',
		shadow: true,
	},
};

export const ShadowFixed = {
	args: {
		label: 'Button with fixed shadow',
		shadowFixed: true,
	},
};

export const Disabled = {
	args: {
		label: 'Disabled Button',
		disabled: true,
	},
};

export const SmallS = {
	args: {
		label: 'Small Button',
		size: 'Small (S)',
	},
};

export const BigL = {
	args: {
		label: 'Big Button',
		size: 'Big (L)',
	},
};

export const BiggerXL = {
	args: {
		label: 'Bigger Button',
		size: 'Bigger (XL)',
	},
};
