const basicColors = ['blue', 'green', 'pink', 'purple', 'yellow', 'orange', 'white'];
const shades = ['lighter', 'light', 'base', 'dark'];

const colorCategories = {
    neo: basicColors,
    feedback: ['danger', 'warning', 'success', 'info'],
    muted: basicColors.filter(color => color !== 'white') // Muted colors will have shades
};

export const getAllColorClasses = () => {
    let classes = [];
    for (const [category, colors] of Object.entries(colorCategories)) {
        colors.forEach(color => {
            if (category === 'muted') {
                shades.forEach(shade => {
                    classes.push(`muted-${color}-${shade}`);
                });
            } else {
                classes.push(`${category}-${color}`);
            }
        });
    }
    return classes;
};


// Function to get only hover color classes
export const getHoverColorClasses = () => {
    let classes = [];
    for (const [category, colors] of Object.entries(colorCategories)) {
        colors.forEach(color => {
            if (category === 'muted') {
                shades.forEach(shade => {
                    classes.push(`muted-${color}-${shade}-hover`);
                });
            } else {
                classes.push(`${category}-${color}-hover`);
            }
        });
    }
    return classes;
};

export const getCheckedColorClasses = () => {
    let classes = [];
    for (const [category, colors] of Object.entries(colorCategories)) {
        colors.forEach(color => {
            if (category === 'muted') {
                shades.forEach(shade => {
                    classes.push(`muted-${color}-${shade}-checked`);
                });
            } else {
                classes.push(`${category}-${color}-checked`);
            }
        });
    }
    return classes;
}
