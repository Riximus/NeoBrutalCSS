import '../../../../compiled/styles.css';

/**
 *
 * @param placeholder
 * @param colorClass
 * @param hoverColorClass
 * @param focusColorClass
 * @param borderRadius
 * @param size
 * @param shadow
 * @param shadowFixed
 * @param disabled
 * @param error
 * @returns {HTMLInputElement}
 */
export const createTextInput = ({
	placeholder,
	colorClass = '',
	hoverColorClass = '',
	focusColorClass = '',
	borderRadius,
	size,
	shadow = false,
	shadowFixed = false,
	disabled = false,
	error = false,
}) => {
	if (colorClass === 'default') colorClass = '';
	if (hoverColorClass === 'default') hoverColorClass = '';
	if (focusColorClass === 'default') focusColorClass = '';

	const input = document.createElement('input');
	input.type = 'text';
	input.placeholder = placeholder;
	input.disabled = disabled;

	// Construct the class name string
	// Filter out any falsey values and join
	input.className = [
		'neo-input-text',
		colorClass,
		hoverColorClass,
		focusColorClass,
		error ? 'error' : '',
		disabled ? 'disabled' : '',
		size ? `neo-input-text--${size}` : '',
		shadow ? 'shadow' : '',
		shadowFixed ? 'shadow-fixed' : '',
		borderRadius,
	]
		.filter(Boolean)
		.join(' ');

	return input;
};
