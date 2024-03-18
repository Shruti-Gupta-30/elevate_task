// Import some react tools
import ReactDOM from "react-dom/client";
// Import our first component : App
import { App } from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppProvider } from "./api/context/products_context.jsx";
import { FilterContextProvider } from "./api/context/filter_context.jsx";
import { ProductList } from "./components/ProductList/ProductList.jsx";
import { All } from "./Pages/All.jsx";
import { Mens } from "./Pages/Mens.jsx";
import { Womens } from "./Pages/Womens.jsx";
import { Jewelery } from "./Pages/Jewelery.jsx";
import { Electronics } from "./Pages/Electronics.jsx";

// Target the root div
const rootDiv = document.getElementById("root");

// Transform the root div into a react node
const reactRoot = ReactDOM.createRoot(rootDiv);

// Inject our App component into the react node
reactRoot.render(
	<AppProvider>
		<FilterContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/all" element={<All />} />
					<Route path="/jewelery" element={<Jewelery />} />
					<Route path="/electronics" element={<Electronics />} />
					<Route path="/women's clothing" element={<Womens />} />
					<Route path="/men's clothing" element={<Mens />} />
				</Routes>
			</BrowserRouter>
		</FilterContextProvider>
	</AppProvider>
);
