// Helper function to create a header element
export const createHeader = (size, text, className) => {
    const header = document.createElement(size);
    header.textContent = text;
    header.className = className;
    return header;
};

// Helper function to create a text element
export const createText = (text, className) => {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    paragraph.className = className;
    return paragraph;
};

// Helper function to generate class names for typography
export const getTypographyClasses = () => {
    const baseClasses = ['neo-header', 'neo-text'];
    const suffixes = ['thin', 'light', 'extra-light', 'medium', 'semi-bold', 'bold', 'extra-bold', 'black'];
    const italicSuffixes = ['italic'];

    let classes = [];

    baseClasses.forEach(base => {
        // Add non-italic classes
        suffixes.forEach(suffix => {
            classes.push(`${base}--${suffix}`);
        });

        // Add italic classes for 'neo-text' only
        if (base === 'neo-text') {
            suffixes.forEach(suffix => {
                italicSuffixes.forEach(italic => {
                    classes.push(`${base}--${suffix}-${italic}`);
                });
            });
            // Add regular italic
            classes.push(`${base}--${italicSuffixes[0]}`);
        }
    });

    return classes;
};
