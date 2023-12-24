import '../../compiled/styles.css'; // Import your CSS framework

export const createTestButton = (
    {
        colorClass,
        label,
        rounded = false,
        shadow = false,
        size,
        shadowFixed = false,
    }) => {

    const btn = document.createElement('button');

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

    // Setting the class name of the button element
    btn.className =
        `
        neo-btn
        ${sizeClass}
        ${colorClass} 
        ${rounded ? 'rounded' : ''}
        ${shadow ? 'shadow' : ''}
        ${shadowFixed ? 'shadow-fixed' : ''}
        `;

    btn.innerText = label;
    return btn;

};

