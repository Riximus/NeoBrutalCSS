export const createCheckbox = (
    {
        id,
        name,
        value,
        checked,
        disabled,
        checkedColorClass,
        colorClass,
        hoverColorClass,
    }
) => {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = id;
    checkbox.name = name;
    checkbox.value = value;
    checkbox.checked = checked;
    checkbox.disabled = disabled;
    checkbox.className = [
        'neo-checkbox',
        checkedColorClass,
        colorClass,
        hoverColorClass,
    ].filter(Boolean).join(' ');

    return checkbox;
};
