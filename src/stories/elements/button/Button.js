import '../../../../compiled/styles.css';

export const createButton = (
    {
        colorClass,
        hoverColorClass,
        label,
        borderRadius,
        shadow = false,
        size,
        shadowFixed = false,
    }) => {

    const btn = document.createElement('button');

    // Check if hoverColorClass has a value, if so, add it to the button's class list
    /*if (hoverColorClass) {
        btn.classList.add(hoverColorClass);
    }*/

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

    // Construct the class name string
     // Filter out any falsey values and join
    // Setting the class name of the button element
    btn.className = [
        'neo-btn',
        sizeClass,
        colorClass,
        hoverColorClass,
        borderRadius,
        shadow ? 'shadow' : '',
        shadowFixed ? 'shadow-fixed' : ''
    ].filter(Boolean).join(' ');

    btn.innerText = label;
    return btn;

};

