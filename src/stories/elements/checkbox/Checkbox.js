/**
 *
 * @param checkedColorClass
 * @param colorClass
 * @param hoverColorClass
 * @param checked
 * @param disabled
 * @param shadow
 * @param shadowFixed
 * @returns {HTMLInputElement}
 */
export const createCheckbox = (
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
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = checked;
    checkbox.disabled = disabled;
    checkbox.className = [
        'neo-checkbox',
        checkedColorClass,
        colorClass,
        hoverColorClass,
        shadow ? 'shadow' : '',
        shadowFixed ? 'shadow-fixed' : '',
        disabled ? 'disabled' : '',
    ].filter(Boolean).join(' ');

    return checkbox;
};
