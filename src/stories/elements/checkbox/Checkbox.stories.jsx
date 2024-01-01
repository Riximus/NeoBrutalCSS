import { createCheckbox } from './Checkbox.js';
import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks';
import * as React from 'react';

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
                        The **.neo-checkbox** class is used for styling checkboxes in a neobrutalism style.
                        This custom checkbox component allows for various styles and states, including default, checked, and disabled.

                        By default the style has a checkmark but there are classes to change the style to an X or rectangle.
                    </Description>
                    <Primary />
                    <Controls />
                    <Stories />
                </>
            ),
        }
    },
    argTypes: {
        id: { control: 'text' },
        name: { control: 'text' },
        value: { control: 'text' },
        checked: { control: 'boolean' },
        disabled: { control: 'boolean' },
        // Add other customizations as needed
    },
    render: (args) => createCheckbox(args),
};

export const Default = {
    args: {
        id: 'defaultCheckbox',
        name: 'default',
        value: 'default',
        checked: false,
        disabled: false,
    },
};

// Add more variants as necessary, such as Checked, Disabled, etc.
