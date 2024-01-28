import '../../../../compiled/styles.css';

export const createTextArea = ({
	placeholder,
	colorClass = '',
	hoverColorClass = '',
	focusColorClass = '',
	borderRadius,
	shadow = false,
	shadowFixed = false,
	disabled = false,
	error = false,
}) => {
	if (colorClass === 'default') colorClass = '';
	if (hoverColorClass === 'default') hoverColorClass = '';
	if (focusColorClass === 'default') focusColorClass = '';

	const input = document.createElement('textarea');
	input.placeholder = placeholder;
	input.disabled = disabled;

	// Construct the class name string
	// Filter out any falsey values and join
	input.className = [
		'neo-input-textarea',
		colorClass,
		hoverColorClass,
		focusColorClass,
		error ? 'error' : '',
		disabled ? 'disabled' : '',
		shadow ? 'shadow' : '',
		shadowFixed ? 'shadow-fixed' : '',
		borderRadius,
	]
		.filter(Boolean)
		.join(' ');

	return input;
};
