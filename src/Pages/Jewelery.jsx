import { useProductContext } from "../api/context/products_context";
import { Header } from "../components/Header/Header";
import { Product } from "../components/Product/Product";
import s from "./pages.css";

export function Jewelery() {
	const { isLoading, jewelery } = useProductContext();

	if (isLoading) {
		return <div>...Loading</div>;
	}

	return (
		<>
			<Header />
			<div className={s.product_grid}>
				{jewelery.map((curElem) => {
					return <Product key={curElem.id} {...curElem} />;
				})}
			</div>
		</>
	);
}
