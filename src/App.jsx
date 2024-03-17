import s from "./style.module.css";
// import { SearchBar } from "./components/SearchBar/SearchBar";
// import { Logo } from "./components/Logo/Logo";
// import { UserCircle, ShoppingCartSimple } from "@phosphor-icons/react";
// import { NavBar } from "./components/NavBar/NavBar";
import { Hero } from "./components/Hero/Hero";
import { Header } from "./components/Header/Header";

export function App() {
	return (
		<div className={s.main_container}>
			<Header />

			<div className={s.hero}>
				<Hero />
			</div>
		</div>
	);
}
