export const createRadio = (
    {
        checkedColorClass = '',
        colorClass = '',
        hoverColorClass = '',
        checked = false,
        disabled = false,
        shadow = false,
        shadowFixed = false,
    }
) => {
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.checked = checked;
    radio.disabled = disabled;
    radio.className = [
        'neo-radio',
        checkedColorClass,
        colorClass,
        hoverColorClass,
        shadow ? 'shadow' : '',
        shadowFixed ? 'shadow-fixed' : '',
        disabled ? 'disabled' : '',
    ].filter(Boolean).join(' ');

    return radio;
}
