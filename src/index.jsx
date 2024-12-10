import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
import "./index.css";

const trackingId = 'G-0XXSEWXWRJ';

const AppWithAnalytics = () => {
	React.useEffect(() => {
		const script = document.createElement('script');
		script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
		document.body.appendChild(script);

		window.dataLayer = window.dataLayer || [];
		function gtag() {
			window.dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', trackingId);
	}, []);

	return <App />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<AppWithAnalytics />
	</BrowserRouter>
);
