import { Link } from "react-router-dom";
import "./style.module.css";
import React, { useState } from "react";
import { MenuItems } from "../Menuitems";

export function Dropdown() {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	return (
		<>
			<ul
				onClick={handleClick}
				className={click ? "dropdown_menu clicked" : "dropdown_menu"}
			>
				{MenuItems.map((item, index) => {
					return (
						<li className="dropdown_menu_list" key={index}>
							<Link
								to={item.path}
								className="dropdown_menu_listitem"
								onClick={() => setClick(false)}
							>
								{item.title}
							</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
}
