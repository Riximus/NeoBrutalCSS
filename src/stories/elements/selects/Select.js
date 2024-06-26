/**
 *
 * @param placeholder
 * @param disabled
 * @param shadow
 * @param shadowFixed
 * @param borderRadius
 * @param colorClass
 * @param hoverColorClass
 * @param focusColorClass
 * @returns {HTMLSelectElement}
 */
export const createSelect = ({
	placeholder = 'Please select an option',
	disabled = false,
	shadow = false,
	shadowFixed = false,
	borderRadius,
	colorClass,
	hoverColorClass,
	focusColorClass,
}) => {
	if (colorClass === 'default') colorClass = '';
	if (hoverColorClass === 'default') hoverColorClass = '';
	if (focusColorClass === 'default') focusColorClass = '';

	const select = document.createElement('select');
	select.disabled = disabled;

	// Placeholder as the first option
	const placeholderOption = document.createElement('option');
	placeholderOption.value = '';
	placeholderOption.text = placeholder;
	placeholderOption.disabled = true;
	placeholderOption.selected = true;
	select.appendChild(placeholderOption);

	// Loop to add options
	for (let i = 1; i <= 5; i++) {
		const optionElement = document.createElement('option');
		optionElement.value = `option${i}`;
		optionElement.text = `Option ${i}`;
		select.appendChild(optionElement);
	}

	select.className = [
		'neo-select',
		colorClass,
		hoverColorClass,
		focusColorClass,
		shadow ? 'shadow' : '',
		shadowFixed ? 'shadow-fixed' : '',
		disabled ? 'disabled' : '',
		borderRadius,
	]
		.filter(Boolean)
		.join(' ');

	return select;
};
