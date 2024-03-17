import { SearchBar } from "../SearchBar/SearchBar";
import { Logo } from "../Logo/Logo";
import { UserCircle, ShoppingCartSimple } from "@phosphor-icons/react";
import { NavBar } from "../NavBar/NavBar";
import s from "./style.module.css";

export function Header() {
	return (
		<>
			<header className={s.header}>
				<div className={s.header_row1}>
					<div className={s.searchbar}>
						<SearchBar />
					</div>
					<div className={s.logo}>
						<Logo />
					</div>
					<div className={s.icons}>
						<UserCircle size={32} />
						<ShoppingCartSimple size={32} />
					</div>
				</div>
				<div className={s.main_nav}>
					<NavBar />
				</div>
			</header>
		</>
	);
}
