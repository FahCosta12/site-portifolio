import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import CircleLoader from "react-spinners/CircleLoader";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";
import Contato from "./components/Contato/contato";
import Footer from "./components/Footer/footer";
import Home from "./components/Home/home";
import MoveToTop from "./components/MoveToTop/moveToTop";
import Nav from "./components/Nav/navBar";
import Sobre from "./components/Sobre/sobre";

function App() {
	const [loading, setloading] = useState(true);
	const location = useLocation();

	useEffect(() => {
		setloading(true);

		setTimeout(() => {
			setloading(false);
		}, 1900);
	}, []);

	return (
		<div>
			{loading ? (
				<div className="loader">
					<CircleLoader
						color={"#011c38"}
						loading={true}
						size={100}
						arial-label="Loading Spinner"
						data-testid="loader"
					/>
				</div>
			) : (
				<>
					<Nav />
					<MoveToTop />

					<TransitionGroup>
						<CSSTransition key={location.key} classNames="fade" timeout={500}>
							<Routes location={location}>
								<Route path="/" element={<Home />} />
								<Route path="/Sobre" element={<Sobre />} />
								<Route path="/Contato" element={<Contato />} />
							</Routes>
						</CSSTransition>
					</TransitionGroup>

					<Footer />
				</>
			)}
		</div>
	);
}

export default App;
