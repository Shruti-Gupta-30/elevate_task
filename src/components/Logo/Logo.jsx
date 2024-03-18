import { Link } from "react-router-dom";
import s from "./style.module.css";

export function Logo() {
	return (
		<>
			<Link to="/" className={s.logo}>
				Eflyer
			</Link>
		</>
	);
}
