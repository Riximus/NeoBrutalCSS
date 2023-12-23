const basicColors = ['blue', 'green', 'pink', 'purple', 'yellow', 'orange'];
const shades = ['lighter', 'light', 'base', 'dark'];

const colorCategories = {
    neo: basicColors,
    feedback: ['danger', 'warning', 'success', 'info'],
    muted: basicColors // Muted colors will have shades
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
