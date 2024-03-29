import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/product_reducer";

const AppContext = createContext();

const API = "https://fakestoreapi.com/products";

const initialState = {
	isLoading: false,
	isError: false,
	products: [],
	mens: [],
	womens: [],
	jewelery: [],
	electronics: [],
};

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const getProducts = async (url) => {
		dispatch({ type: "SET_LOADING" });
		try {
			const response = await axios.get(url);
			const products = await response.data;
			dispatch({ type: "SET_API_DATA", payload: products });
			console.log(products);
		} catch (error) {
			dispatch({ type: "API_ERROR" });
		}
	};

	useEffect(() => {
		getProducts(API);
	}, []);

	return (
		<AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
	);
};

const useProductContext = () => {
	return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
