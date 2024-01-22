import "./headerStyle.css";

function Header(){
    return (
			<header className="header">
				<a href="#!" className="logo"> Portfolio </a>

				<nav class="navbar">
					<a href="#home" className="active"> Home </a>
					<a href="#about"> About </a>
					{/* <a href="#portfolio"> Portfolio </a>
					<a href="#skills">  Skills<span>&</span>Experience </a>
					<a href="#contact"> Contact </a> */}
				</nav>
{/* 
				<div className="bx bx-moon" id="darkMode-icon"> </div> */}
			</header>
    );
}

export default Header;