import { createTestButton } from './TestButton';
import { getAllColorClasses, getHoverColorClasses} from "./colors.js";

export default {
    title: 'Example/TestButton',
    argTypes: {
        colorClass: {
            control: { type: 'select' },
            options: getAllColorClasses(),
        },
        hoverColorClass: {
            control: { type: 'select' },
            options: getHoverColorClasses(),
        },
        label: { control: 'text' },
        rounded: { control: 'boolean' },
        shadow: { control: 'boolean' },
        shadowFixed: { control: 'boolean' },
        size: {
            control: { type: 'select' },
            options: ['Default', 'Small (S)', 'Big (L)', 'Bigger (XL)'],
        },
    },
    render: (args) => {
        return createTestButton(args);
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

export const Rounded = {
    args: {
        label: 'Rounded Button',
        rounded: true,
    }
}

export const Shadow = {
    args: {
        label: 'Button with shadow',
        shadow: true,
    }
}

export const ShadowFixed = {
    args: {
        label: 'Button with fixed shadow',
        shadowFixed: true,
    }
}

export const SmallS = {
    args: {
        label: 'Small Button',
        size: 'Small (S)',
    }
}

export const BigL = {
    args: {
        label: 'Big Button',
        size: 'Big (L)',
    }
}

export const BiggerXL = {
    args: {
        label: 'Bigger Button',
        size: 'Bigger (XL)',
    }
}
