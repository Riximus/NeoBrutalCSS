// storybook-helpers.js
// This file will contain helper functions that can be used across different Storybook stories

// Helper function to create a display for each color class
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

// Function to render color blocks for a specific category
export const renderColorBlocks = (colorClasses) => {
    const container = document.createElement('div');
    colorClasses.forEach((className) => {
        container.appendChild(createColorBlock(className));
    });
    return container;
};
