import "./styles/main.css";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<Header />
			<Home />
			<About />
			<Footer/>
		</div>
	);
}

export default App;
