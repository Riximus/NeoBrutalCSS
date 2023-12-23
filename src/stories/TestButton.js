import '../../build/styles.css'; // Import your CSS framework

export const createTestButton = ({ colorClass, label, rounded = false }) => {
    const btn = document.createElement('button');
    btn.className = `neo-btn ${colorClass} ${rounded ? 'rounded' : ''}`;
    btn.innerText = label;
    return btn;
};

