import { Link } from "react-router-dom";
import "./style.module.css";
import React, { useState } from "react";
import { MenuItems } from "../Menuitems";
import { useFilterContext } from "../../api/context/filter_context";

export function Dropdown() {
	// const [click, setClick] = useState(false);

	// const handleClick = () => setClick(!click);
	// const {
	// 	filters: { category },
	// 	all_products,
	// 	updateFilterValue,
	// } = useFilterContext();

	// const getUniqueData = (data, property) => {
	// 	let newVal = data.map((curElem) => {
	// 		return curElem[property];
	// 	});
	// 	newVal = ["All", ...new Set(newVal)];
	// 	console.log(newVal);
	// };

	// const categoryOnlyData = getUniqueData(all_products, "category");
	return (
		<>
			{/* <ul className="dropdown_menu">
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
			</ul> */}
		</>
	);
}
