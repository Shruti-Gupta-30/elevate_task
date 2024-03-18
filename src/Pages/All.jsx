import { Product } from "../components/Product/Product";
import s from "./pages.css";
import { Header } from "../components/Header/Header";
import { useProductContext } from "../api/context/products_context";

export function All() {
	const { isLoading, products } = useProductContext();

	if (isLoading) {
		return <div>...Loading</div>;
	}

	return (
		<>
			<Header />
			<div className={s.product_grid}>
				{products.map((curElem) => {
					return <Product key={curElem.id} {...curElem} />;
				})}
			</div>
		</>
	);
}
