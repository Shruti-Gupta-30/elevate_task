import { Product } from "../components/Product/Product";
import s from "./pages.css";
import { Header } from "../components/Header/Header";
import { useProductContext } from "../api/context/products_context";
import { useFilterContext } from "../api/context/filter_context";

export function All() {
	//
	const { filter_products } = useFilterContext();

	// if (isLoading) {
	// 	return <div>...Loading</div>;
	// }

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
