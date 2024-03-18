import s from "./style.module.css";
import dress from "../../assets/images/female dress.jpg";
import bottoms from "../../assets/images/female bottom.jpg";
import accessories from "../../assets/images/accessories.jpg";
import coords from "../../assets/images/female co-ord2.jpg";
import menTShirt from "../../assets/images/man tshirt.jpg";
import formals from "../../assets/images/men formal3.jpg";
import { Link } from "react-router-dom";

export function Hero() {
	return (
		<div className={s.hero_images}>
			<Link to="/women's clothing">
				<figure>
					<img src={dress} alt="Female dress" />
					<figcaption className={s.caption}>Dresses</figcaption>
				</figure>
			</Link>
			<Link to="/jewelery">
				<figure>
					<img src={accessories} alt="Female accessories" />
					<figcaption className={s.caption}>Accessories</figcaption>
				</figure>
			</Link>
			<Link to="#">
				<figure>
					<img src={bottoms} alt="Bottoms" />
					<figcaption className={s.caption}>Bottoms</figcaption>
				</figure>
			</Link>
			<Link to="/men's clothing">
				<figure>
					<img src={menTShirt} alt="Men T-Shirt" />
					<figcaption className={s.caption}>T-Shirts</figcaption>
				</figure>
			</Link>
			<Link to="#">
				<figure>
					<img src={coords} alt="Co-ord Set" />
					<figcaption className={s.caption}>Co-ords</figcaption>
				</figure>
			</Link>
			<Link to="/men's clothing">
				<figure>
					<img src={formals} alt="Mens Formals" />
					<figcaption className={s.caption}>Formals</figcaption>
				</figure>
			</Link>
		</div>
	);
}
