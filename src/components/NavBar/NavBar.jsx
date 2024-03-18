import s from "./style.module.css";
import { Dropdown } from "../Dropdown/Dropdown";
import { useState } from "react";
import { Link } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";

export function NavBar() {
	const [dropdown, setDropdown] = useState(false);

	const onMouseEnter = () => {
		setDropdown(true);
	};
	const onMouseLeave = () => {
		setDropdown(false);
	};

	return (
		<>
			{/* ALTERNATE WAY OF DESIGNING NAVBAR USING DROPDOWN ALSO SHOWN IN COMPONENTS FOLDER */}
			<ul className={s.main_nav_list}>
				<li>
					<Link to="/all" className={s.main_nav_link}>
						All
					</Link>
				</li>
				<li>
					<Link to="/men's clothing" className={s.main_nav_link}>
						Men's Clothing
					</Link>
				</li>
				<li>
					<Link to="/women's clothing" className={s.main_nav_link}>
						Women's CLothing
					</Link>
				</li>
				<li>
					<Link to="/jewelery" className={s.main_nav_link}>
						Jewelery
					</Link>
				</li>
				<li>
					<Link to="/electronics" className={s.main_nav_link}>
						Electronics
					</Link>
				</li>
			</ul>

			{/* <div className={s.mobile_navbar_btn}>
				<List size={32} className={s.mobile_nav_icon} />
				<X size={32} className={s.mobile_nav_icon} />
			</div> */}
		</>
	);
}
