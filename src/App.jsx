import React from "react";
import "./App.css";
import Footer from "./components/Footer/footer";
import Home from "./components/Home/home";
import Main from "./components/Main/main";
import NavHorizontal from "./components/NavHorizontal/navHorizontal";
import Type from "./components/Type/type";

function App() {
	return (
		<>
			<div className="App">
				<Home />
				<Type />
				<NavHorizontal />
				<Main />
				<Footer />
			</div>
		</>
	);
}

export default App;
