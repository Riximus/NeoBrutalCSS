/**
 *
 * @param checkedColorClass
 * @param colorClass
 * @param hoverColorClass
 * @param focusColorClass
 * @param styleVariant
 * @param checked
 * @param disabled
 * @param shadow
 * @param shadowFixed
 * @returns {HTMLInputElement}
 */
export const createRadio = ({
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

	let radioClass = 'neo-radio';
	const radio = document.createElement('input');
	radio.type = 'radio';
	radio.checked = checked;
	radio.disabled = disabled;
	if (styleVariant === 'inverted') {
		radioClass = 'neo-radio-inverted';
	}

	radio.className = [
		radioClass,
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

	return radio;
};
