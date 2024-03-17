// Import some react tools
import ReactDOM from "react-dom/client";
// Import our first component : App
import { App } from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Clothing } from "./Pages/Clothing/Clothing.jsx";
import { Accessories } from "./Pages/Accessories/Accessories.jsx";
import { Collections } from "./Pages/Collections/Collections.jsx";
import { Dresses } from "./Pages/Dresses/Dresses.jsx";
import { Formals } from "./Pages/Formals/Formals.jsx";
import { AppProvider } from "./api/products.jsx";

// Target the root div
const rootDiv = document.getElementById("root");

// Transform the root div into a react node
const reactRoot = ReactDOM.createRoot(rootDiv);

// Inject our App component into the react node
reactRoot.render(
	<AppProvider>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/clothing" element={<Clothing />} />
				<Route path="/accessories" element={<Accessories />} />
				<Route path="/colections" element={<Collections />} />
				<Route path="/dresses" element={<Dresses />} />
				<Route path="/formals" element={<Formals />} />
			</Routes>
		</BrowserRouter>
	</AppProvider>
);
