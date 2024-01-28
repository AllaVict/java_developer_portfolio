import "./styles/main.css";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<Header/>
			<Home/>
			<About/>
			<Portfolio/>
			<Experience/>
			<Contact/>
			<Footer/>
		</div>
	);
}

export default App;
