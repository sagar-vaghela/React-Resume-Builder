import React, { useContext, useState } from "react";
import { Button } from "./Button";
import { ResumeContext } from "../context/ResumeContext";

const ToggleTheme = () => {
	const [ theme, setTheme ] = useState("light");
	const { state, setState } = useContext(ResumeContext);

	const toggleTheme = () => {
		if (theme === "light") {
			setState({
				...state,
				theme: {
					...state.theme,
					textColor: "#FFF",
					bg: "#181818"
				}
			});
			setTheme('dark');
		} else {
			setState({
				...state,
				theme: {
					...state.theme,
					textColor: "#4E4E4E",
					bg: "#FFF"
				}
			});
			setTheme('light');
		}
	};

	return (
		<Button text={theme === "light" ? "Dark" : "Light"} onClick={toggleTheme} />
	);
};

export default ToggleTheme;
