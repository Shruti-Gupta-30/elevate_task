import { Product } from "../Product/Product";
import s from "./style.module.css";
import { useFilterContext } from "../../api/context/filter_context";
import { Header } from "../Header/Header";
import { useProductContext } from "../../api/context/products_context";

export function ProductList() {
	// const { isLoading, products } = useProductContext();

	// if (isLoading) {
	// 	return <div>...Loading</div>;
	// }
	const { filter_products } = useFilterContext();

	// const getUniqueData = (data, property) => {
	// 	let newVal = data.map((curElem) => {
	// 		return curElem[property];
	// 	});
	// 	newVal = ["All", ...new Set(newVal)];
	// 	console.log(newVal);
	// };

	// const categoryOnlyData = getUniqueData(all_products, "category");

	return (
		<>
			<Header />
			<div className={s.product_grid}>
				{filter_products.map((curElem) => {
					return <Product key={curElem.id} {...curElem} />;
				})}
			</div>
		</>
	);
}
