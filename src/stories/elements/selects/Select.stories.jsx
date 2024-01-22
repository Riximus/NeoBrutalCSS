import { createSelect } from './Select.js';
import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks';
import * as React from 'react';
import {
	getAllColorClasses,
	getCheckedColorClasses,
	getHoverColorClasses,
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
						The **.neo-select** class is used for styling select elements in a neobrutalism style.
					</Description>
					<Primary />
					<Controls />
					<Stories />
				</>
			),
		},
	},
	argTypes: {},

	render: (args) => createSelect(args),
};

export const Default = {};
