import { createTestButton } from './TestButton';
import { getAllColorClasses} from "./colors.js";

export default {
    title: 'Example/TestButton',
    argTypes: {
        colorClass: {
            control: { type: 'select' },
            options: getAllColorClasses(),
        },
        label: { control: 'text' },
        rounded: { control: 'boolean' },
    },
    render: (args) => {
        return createTestButton(args);
    },
};

export const Default = {
    args: {
        colorClass: 'neo-green', // Default color class
        label: 'Button',
    },
};

export const Rounded = {
    args: {
        label: 'Rounded Button',
        rounded: true,
    }
}
