import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./products_context";
import reducer from "../reducer/filter_reducer";

const FilterContext = createContext();

const initialState = {
	filter_products: [],
	all_products: [],
	filters: {
		text: "",
	},
};

export const FilterContextProvider = ({ children }) => {
	const { products } = useProductContext();

	const [state, dispatch] = useReducer(reducer, initialState);

	//update the filter values
	const updateFilterValue = (event) => {
		let name = event.target.name;
		let value = event.target.value;

		return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
	};
	//To reload products when required
	useEffect(() => {
		dispatch({ type: "FILTER_PRODUCTS" });
	}, [products, state.filters]);

	useEffect(() => {
		dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
	}, [products, state.filters]);
	return (
		<FilterContext.Provider value={{ ...state, updateFilterValue }}>
			{children}
		</FilterContext.Provider>
	);
};

export const useFilterContext = () => {
	return useContext(FilterContext);
};
