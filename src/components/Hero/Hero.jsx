import s from "./style.module.css";
import dress from "../../assets/images/female dress.jpg";
import bottoms from "../../assets/images/female bottom.jpg";
import accessories from "../../assets/images/accessories.jpg";
import coords from "../../assets/images/female co-ord2.jpg";
import menTShirt from "../../assets/images/man tshirt.jpg";
import formals from "../../assets/images/men formal3.jpg";

export function Hero() {
	return (
		<div className={s.hero_images}>
			<figure>
				<img src={dress} alt="Female dress" />
				<figcaption className={s.caption}>Dresses</figcaption>
			</figure>
			<figure>
				<img src={accessories} alt="Female accessories" />
				<figcaption className={s.caption}>Accessories</figcaption>
			</figure>
			<figure>
				<img src={bottoms} alt="Bottoms" />
				<figcaption className={s.caption}>Bottoms</figcaption>
			</figure>
			<figure>
				<img src={menTShirt} alt="Men T-Shirt" />
				<figcaption className={s.caption}>ST-hirts</figcaption>
			</figure>
			<figure>
				<img src={coords} alt="Co-ord Set" />
				<figcaption className={s.caption}>Co-ords</figcaption>
			</figure>
			<figure>
				<img src={formals} alt="Mens Formals" />
				<figcaption className={s.caption}>Formals</figcaption>
			</figure>
		</div>
	);
}
