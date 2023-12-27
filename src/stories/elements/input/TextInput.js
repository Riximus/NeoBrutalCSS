import '../../../../compiled/styles.css';

export const createTextInput = ({
        placeholder,
        disabled = false,
        error = false,
        size,
        shadow = false,
        shadowFixed = false,
        borderRadius,
    }) => {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = placeholder;
    input.disabled = disabled;

    // Class name assignment
    // Construct the class name string
     // Filter out any falsey values and join
    input.className = [
        'neo-input-text',
        error ? 'error' : '',
        size ? `neo-input-text--${size}` : '',
        shadow ? 'shadow' : '',
        shadowFixed ? 'shadow-fixed' : '',
        borderRadius
    ].filter(Boolean).join(' ');

    return input;
};
