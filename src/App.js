import React from "react";
import "./App.css";
import Footer from "./components/Footer/footer";
import Main from "./components/Main/main";
import NavHorizontal from "./components/NavHorizontal/navHorizontal";

function App() {
	return (
		<div className="App">
			<NavHorizontal />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
