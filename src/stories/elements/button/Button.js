import '../../../../compiled/styles.css';

/**
 *
 * @param colorClass
 * @param hoverColorClass
 * @param focusColorClass
 * @param label
 * @param borderRadius
 * @param size
 * @param shadow
 * @param shadowFixed
 * @param disabled
 * @returns {HTMLButtonElement}
 */
export const createButton = ({
	colorClass = '',
	hoverColorClass = '',
	focusColorClass = '',
	label,
	borderRadius,
	size,
	shadow = false,
	shadowFixed = false,
	disabled = false,
}) => {
	const btn = document.createElement('button');
	if (colorClass === 'default') colorClass = '';
	if (hoverColorClass === 'default') hoverColorClass = '';
	if (focusColorClass === 'default') focusColorClass = '';

	let sizeClass;
	switch (size) {
		case 'Small (S)':
			sizeClass = 'neo-btn--s';
			break;
		case 'Big (L)':
			sizeClass = 'neo-btn--l';
			break;
		case 'Bigger (XL)':
			sizeClass = 'neo-btn--xl';
			break;
		default:
			sizeClass = ''; // Default size (Medium)
	}

	// Filter out any falsey values and join
	// Setting the class name of the button element
	btn.className = [
		'neo-btn',
		colorClass,
		hoverColorClass,
		focusColorClass,
		borderRadius,
		sizeClass,
		shadow ? 'shadow' : '',
		shadowFixed ? 'shadow-fixed' : '',
		disabled ? 'disabled' : '',
	]
		.filter(Boolean)
		.join(' ');

	btn.innerText = label;
	return btn;
};
