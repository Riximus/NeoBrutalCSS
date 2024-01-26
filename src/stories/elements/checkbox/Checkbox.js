/**
 *
 * @param checkedColorClass
 * @param colorClass
 * @param hoverColorClass
 * @param focusColorClass
 * @param checked
 * @param disabled
 * @param shadow
 * @param shadowFixed
 * @param styleVariant
 * @returns {HTMLInputElement}
 */
export const createCheckbox = ({
	checkedColorClass = '',
	colorClass = '',
	hoverColorClass = '',
	focusColorClass = '',
	styleVariant,
	checked = false,
	disabled = false,
	shadow = false,
	shadowFixed = false,
}) => {
	if (colorClass === 'default') colorClass = '';
	if (hoverColorClass === 'default') hoverColorClass = '';
	if (focusColorClass === 'default') focusColorClass = '';
	if (checkedColorClass === 'default') checkedColorClass = '';

	let checkboxClass = 'neo-checkbox';
	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	checkbox.checked = checked;
	checkbox.disabled = disabled;
	if (styleVariant === 'cross') {
		checkboxClass = 'neo-checkbox-cross';
	} else if (styleVariant === 'square') {
		checkboxClass = 'neo-checkbox-square';
	} else if (styleVariant === 'square-inverted') {
		checkboxClass = 'neo-checkbox-square-inverted';
	}

	checkbox.className = [
		checkboxClass,
		checkedColorClass,
		colorClass,
		hoverColorClass,
		focusColorClass,
		shadow ? 'shadow' : '',
		shadowFixed ? 'shadow-fixed' : '',
		disabled ? 'disabled' : '',
	]
		.filter(Boolean)
		.join(' ');

	return checkbox;
};
