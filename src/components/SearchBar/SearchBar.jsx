import { useState } from "react";
import s from "./style.module.css";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useFilterContext } from "../../api/context/filter_context";
import { Link } from "react-router-dom";

export function SearchBar() {
	const {
		filters: { text },
		updateFilterValue,
	} = useFilterContext();

	const [visible, setVisible] = useState(false);

	const handleClick = () => {
		setVisible(!visible);
	};
	return (
		<div className={s.search}>
			<form
				onSubmit={(e) => e.preventDefault()}
				style={visible ? { display: "block" } : { display: "none" }}
			>
				<input
					className={s.input_box}
					type="text"
					name="text"
					value={text}
					onChange={updateFilterValue}
					placeholder="SEARCH"
				/>
			</form>
			<MagnifyingGlass onClick={handleClick} size={26} />
		</div>
	);
}
