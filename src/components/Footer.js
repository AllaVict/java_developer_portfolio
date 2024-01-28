import "./footerStyle.css";

function Footer() {
    return (
        
        <footer className="footer">
            <div class="footer--container">
                <div >
                    <ul class="footer--links">
                        <li><a href="#home"> Home </a> </li>
                        <li><a href="#about"> About </a> </li>
                        <li><a href="#portfolio"> Portfolio </a></li>
                        <li><a href="#experience"> Experience </a></li>
                    </ul>
                </div>

                <div className="footer--social">
                    <a href="https://www.linkedin.com/in/alla-borodina/" target="_blank" rel="noreferrer"> <i class='bx bxl-linkedin'></i> </a>
                    <a href="https://github.com/AllaVict" target="_blank"rel="noreferrer" > <i class='bx bxl-github'></i> </a>
                    <a href="mailto:alla.borodina888@gmail.com"> <i class='bx bx-envelope'></i> </a>
                </div>

                <div className="footer--copy">
                    <p>&#169;2024 Made with &#10084;&#65039; by Alla Borodina</p>
                </div>
            </div>
    
        </footer>
    );
}

export default Footer;