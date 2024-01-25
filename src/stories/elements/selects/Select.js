export const createSelect = () => {
	const select = document.createElement('select');

	// Placeholder as the first option
	const placeholderOption = document.createElement('option');
	placeholderOption.value = '';
	placeholderOption.text = 'Please select an option';
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

	select.className = 'neo-select';
	return select;
};
