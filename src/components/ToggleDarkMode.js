import { useState, useEffect } from 'react';

const ToggleDarkMode = () => {
    const [darkMode, setDarkMode] = useState('darkMode');

    useEffect(() => {
        if (darkMode === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light';
        });
    };

    return (
        <div id="darkMode-icon" onClick={toggleDarkMode}
            className={darkMode === 'dark' ? 'bx bx-sun' : 'bx bx-moon'}>
        </div>
    );
};

export default ToggleDarkMode;
