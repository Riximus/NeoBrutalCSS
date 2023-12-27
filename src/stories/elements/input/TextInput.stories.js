import { createTextInput } from './TextInput.js';

export default {
    title: 'Elements/Inputs/Text Input',
    tags: ['autodocs'],
    argTypes: {
        placeholder: { control: 'text' },
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

/*
export const Disabled = {
    args: {
        placeholder: 'Disabled Input',
        disabled: true,
    },
};

export const ErrorState = {
    args: {
        placeholder: 'Input with Error',
        error: true,
    },
};
 */

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
