import s from "./style.module.css";
import { Dropdown } from "../Dropdown/Dropdown";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CaretDown } from "@phosphor-icons/react";

export function NavBar() {
	const [dropdown, setDropdown] = useState(false);

	const onMouseEnter = () => {
		if (window.innerWidth < 960) {
			setDropdown(true);
		} else {
			setDropdown(false);
		}
	};
	const onMouseLeave = () => {
		if (window.innerWidth < 960) {
			setDropdown(true);
		} else {
			setDropdown(false);
		}
	};

	return (
		<>
			<ul className={s.main_nav_list}>
				<li>
					<Link to="/" className={s.main_nav_link}>
						New Arrivals
					</Link>
				</li>
				<li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
					<Link to="/" className={s.main_nav_link}>
						Clothing <CaretDown size={14} />
					</Link>
					{dropdown && <Dropdown />}
				</li>
				<li>
					<Link to="/accessories" className={s.main_nav_link}>
						Accessories
					</Link>
				</li>
				<li>
					<Link to="/collections" className={s.main_nav_link}>
						Collections
					</Link>
				</li>
			</ul>
		</>
	);
}
