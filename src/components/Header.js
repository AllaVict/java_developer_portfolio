import "./headerStyle.css";
import ToggleDarkMode from "./ToggleDarkMode";

function Header(){
    return (
		<header className="header">

			<a href="" className="logo"> Portfolio </a>

			<nav class="navbar">
				<a href="#home"> Home </a>
				<a href="#about"> About </a>
				<a href="#portfolio"> Portfolio </a>
				<a href="#experience"> Experience </a>
				<a href="#contact"> Contact<span>Me</span> </a>
			</nav>
			<ToggleDarkMode/>
			<div id="menu-icon">  <i className='bx bx-menu'></i> </div>

		</header>
    );
}

export default Header;