export const createCheckbox = ({ id, name, value, checked, disabled }) => {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'neo-checkbox';
    checkbox.id = id;
    checkbox.name = name;
    checkbox.value = value;
    checkbox.checked = checked;
    checkbox.disabled = disabled;

    return checkbox;
};
