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
 * @returns {HTMLInputElement}
 */
export const createRadio = ({
	checkedColorClass = '',
	colorClass = '',
	hoverColorClass = '',
	focusColorClass = '',
	checked = false,
	disabled = false,
	shadow = false,
	shadowFixed = false,
}) => {
	const radio = document.createElement('input');
	radio.type = 'radio';
	radio.checked = checked;
	radio.disabled = disabled;
	radio.className = [
		'neo-radio',
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
