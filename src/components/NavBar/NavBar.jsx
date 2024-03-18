import s from "./style.module.css";
import { Dropdown } from "../Dropdown/Dropdown";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CaretDown } from "@phosphor-icons/react";

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
			<ul className={s.main_nav_list}>
				<li>
					<Link to="/all" className={s.main_nav_link}>
						All
					</Link>
				</li>
				<li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
					<Link to="/men's clothing" className={s.main_nav_link}>
						Men's Clothing <CaretDown size={14} />
					</Link>
					{/* {dropdown && (
						<ul className="dropdown_menu">
							{MenuItems.map((item, index) => {
								return (
									<li className="dropdown_menu_list" key={index}>
										<Link
											to={item.path}
											className="dropdown_menu_listitem"
											value={category}
											onClick={updateFilterValue}
										>
											{item.title}
										</Link>
									</li>
								);
							})}
						</ul>
					)} */}
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
		</>
	);
}
