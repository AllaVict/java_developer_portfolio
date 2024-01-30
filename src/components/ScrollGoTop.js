import React from 'react';
import "./footerStyle.css";

const ScrollGoTop = () => {
    const [position, setPosition] = React.useState({ top: 0, left: 0 })
    React.useEffect(() => {
        window.scroll({
            top: position.top,
            left: position.left,
            behavior: 'smooth'
        })
    })

    const scrollTop = React.useRef()
    React.useEffect(() => {
        window.addEventListener('scroll', (e) => {
            window.scrollY > 200
                ? scrollTop.current.style.display = 'inline-block'
                : scrollTop.current.style.display = 'none'
        })
    })

    return (
        <>
              <div onClick={() => setPosition({ ...position, position: { top: 0, left: 0 } })}
                className="footer--iconTop" ref={scrollTop}   >
                <a href="#home"> <i class='bx bxs-up-arrow-alt' ></i> </a>
            </div>
        </>
    )
}


export default ScrollGoTop;