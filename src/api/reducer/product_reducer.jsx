const ProductReducer = (state, action) => {
	switch (action.type) {
		case "SET_LOADING":
			return {
				...state,
				isLoading: true,
			};

		case "SET_API_DATA":
			const mensData = action.payload.filter((curElem) => {
				return curElem.category === "men's clothing";
			});
			const womensData = action.payload.filter((curElem) => {
				return curElem.category === "women's clothing";
			});
			const jeweleryData = action.payload.filter((curElem) => {
				return curElem.category === "jewelery";
			});
			const electronicsData = action.payload.filter((curElem) => {
				return curElem.category === "electronics";
			});
			return {
				...state,
				isLoading: false,
				products: action.payload,
				mens: mensData,
				womens: womensData,
				jewelery: jeweleryData,
				electronics: electronicsData,
			};

		case "API_ERROR":
			return {
				...state,
				isLoading: false,
				irError: true,
			};

		default:
			return state;
	}
};

export default ProductReducer;
