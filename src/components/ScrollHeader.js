import { useEffect } from 'react';

const ScrollHeader = () => {

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('.header');
            header.classList.toggle('sticky', window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return null;
};

export default ScrollHeader;

