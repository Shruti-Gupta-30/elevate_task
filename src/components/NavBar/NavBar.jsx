import "./navbar.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";

export function NavBar() {
	const [menuIcon, setMenuIcon] = useState(false);

	return (
		<>
			{/* ALTERNATE WAY OF DESIGNING NAVBAR USING DROPDOWN ALSO SHOWN IN COMPONENTS FOLDER */}
			<div className={menuIcon ? "navbar active" : "navbar"}>
				<ul className="main_nav_list">
					<li>
						<Link to="/all" className="main_nav_link">
							All
						</Link>
					</li>
					<li>
						<Link to="/men's clothing" className="main_nav_link">
							Men's Clothing
						</Link>
					</li>
					<li>
						<Link to="/women's clothing" className="main_nav_link">
							Women's CLothing
						</Link>
					</li>
					<li>
						<Link to="/jewelery" className="main_nav_link">
							Jewelery
						</Link>
					</li>
					<li>
						<Link to="/electronics" className="main_nav_link">
							Electronics
						</Link>
					</li>
				</ul>

				<div className="mobile_navbar_btn ">
					<List
						size={32}
						className="mobile_nav_icon"
						onClick={() => setMenuIcon(true)}
					/>
					<X
						size={32}
						className="mobile_nav_icon close"
						onClick={() => setMenuIcon(false)}
					/>
				</div>
			</div>
		</>
	);
}
