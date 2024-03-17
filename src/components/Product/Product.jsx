import s from "./style.module.css";
import { Link } from "react-router-dom";

export function Product(curElem) {
	const { id, title, price, category, desc, image } = curElem;
	return (
		<Link className={s.link} to="#">
			<div className={s.product_card}>
				<div className={s.product_img}>
					<img src={image} alt={title} />
				</div>
				<div className={s.caption}>
					<h4>{title}</h4>
					<p>Rs. {price}</p>
				</div>
			</div>
		</Link>
	);
}
