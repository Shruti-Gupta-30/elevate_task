import { useProductContext } from "../../api/products";
import { Header } from "../../components/Header/Header";
import { Product } from "../../components/Product/Product";
import s from "./style.module.css";

export function Clothing() {
	const { isLoading, products } = useProductContext();

	if (isLoading) {
		return <div> ....Loading </div>;
	}
	console.log(products);
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
