const basicColors = [
	'blue',
	'green',
	'pink',
	'purple',
	'yellow',
	'orange',
	'white',
];
const shades = ['lighter', 'light', 'base', 'dark'];

const colorCategories = {
	neo: basicColors,
	feedback: ['danger', 'warning', 'success', 'info'],
	muted: basicColors.filter((color) => color !== 'white'), // Muted colors will have shades
};

const defaultClass = 'default';

/**
 * Function to get all color classes
 * @returns {*[]}
 */
export const getAllColorClasses = () => {
	let classes = [defaultClass];
	for (const [category, colors] of Object.entries(colorCategories)) {
		colors.forEach((color) => {
			if (category === 'muted') {
				shades.forEach((shade) => {
					classes.push(`muted-${color}-${shade}`);
				});
			} else {
				classes.push(`${category}-${color}`);
			}
		});
	}
	return classes;
};

/**
 * Function to get only hover color classes
 * @returns {*[]}
 */
export const getHoverColorClasses = () => {
	let classes = [defaultClass];
	for (const [category, colors] of Object.entries(colorCategories)) {
		colors.forEach((color) => {
			if (category === 'muted') {
				shades.forEach((shade) => {
					classes.push(`muted-${color}-${shade}-hover`);
				});
			} else {
				classes.push(`${category}-${color}-hover`);
			}
		});
	}
	return classes;
};

/**
 * Function to get only checked color classes
 * @returns {*[]}
 */
export const getCheckedColorClasses = () => {
	let classes = [defaultClass];
	for (const [category, colors] of Object.entries(colorCategories)) {
		colors.forEach((color) => {
			if (category === 'muted') {
				shades.forEach((shade) => {
					classes.push(`muted-${color}-${shade}-checked`);
				});
			} else {
				classes.push(`${category}-${color}-checked`);
			}
		});
	}
	return classes;
};

/**
 * Function to get only focus color classes
 * @returns {*[]}
 */
export const getFocusColorClasses = () => {
	let classes = [defaultClass];
	for (const [category, colors] of Object.entries(colorCategories)) {
		colors.forEach((color) => {
			if (category === 'muted') {
				shades.forEach((shade) => {
					classes.push(`muted-${color}-${shade}-focus`);
				});
			} else {
				classes.push(`${category}-${color}-focus`);
			}
		});
	}
	return classes;
};
