import { createCheckbox } from './Checkbox.js';
import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks';
import * as React from 'react';
import {getAllColorClasses, getCheckedColorClasses, getHoverColorClasses} from "../../storybook-colors.js";

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
            options: getHoverColorClasses()
        },
        styleVariant: {
            control: { type: 'select' },
            options: ['default', 'cross', 'square'],
        },
        shadow: { control: 'boolean' },
        shadowFixed: { control: 'boolean' },
    },
    render: (args) => {
        const { styleVariant, ...checkboxArgs } = args;

        const checkboxProps = {
            ...checkboxArgs,
        }

        const checkbox = createCheckbox(checkboxProps);

        if (styleVariant === 'cross') {
            checkbox.classList.add('neo-checkbox-cross');
        } else if (styleVariant === 'square') {
            checkbox.classList.add('neo-checkbox-square');
        }

        return checkbox;
    },
};

export const Default = {/* Default values in the helper file */};

export const Checkmark = {
    args: {
        checked: true,
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

export const Colored = {
    args: {
        colorClass: 'neo-blue',
    },
};

export const ColoredHover = {
    args: {
        hoverColorClass: 'neo-purple-hover',
    },
};

/* TODO: work in progress for different shapes other than checkmark */
/*
export const Cross = {
    args: {
        id: 'crossCheckbox',
        name: 'cross',
        value: 'cross',
        checked: false,
        disabled: false,
        checkedColorClass: 'default',
        colorClass: 'default',
        styleVariant: 'cross',
    },
};

export const Square = {
    args: {
        id: 'squareCheckbox',
        name: 'square',
        value: 'square',
        checked: false,
        disabled: false,
        checkedColorClass: 'default',
        colorClass: 'default',
        styleVariant: 'square',
    },
};
*/
