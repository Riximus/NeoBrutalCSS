/**
 * Function to create a color block
 * @param className
 * @returns {HTMLDivElement}
 */
const createColorBlock = (className) => {
	const wrapper = document.createElement('div');
	const colorBlock = document.createElement('div');
	const colorLabel = document.createElement('span');

	wrapper.style.display = 'flex';
	wrapper.style.alignItems = 'center';
	wrapper.style.marginBottom = '8px';

	colorBlock.className = className;
	colorBlock.style.width = '20px';
	colorBlock.style.height = '20px';
	colorBlock.style.marginRight = '10px';

	colorLabel.textContent = className;

	wrapper.appendChild(colorBlock);
	wrapper.appendChild(colorLabel);

	return wrapper;
};

/**
 * Function to render color blocks
 * @param colorClasses
 * @returns {HTMLDivElement}
 */
export const renderColorBlocks = (colorClasses) => {
	const container = document.createElement('div');
	colorClasses.forEach((className) => {
		container.appendChild(createColorBlock(className));
	});
	return container;
};
