import React, { useState, useContext } from "react";
import TextArea from "../Textarea";
import Ruler from "../../styles/Ruler";
import { ResumeContext } from "../../context/ResumeContext";
import Checkbox from "../Checkbox";

export default () => {
	const { state, setState } = useContext(ResumeContext);
	const [checked, setChecked] = useState(state.objective.enable);

	const toggleCheckbox = e => {
		setChecked(!checked);
		setState({
			...state,
			objective: {
				...state.objective,
				enable: e.target.checked
			}
		});
	};

	const { text } = state.objective;

	const handleTextarea = e => {
		setState({
			...state,
			objective: {
				...state.objective,
				[e.target.name]: e.target.value
			}
		});
	};

	return (
		<>
			<Checkbox
				checked={checked}
				onChange={toggleCheckbox}
				text="Objective"
			/>
			<Ruler />
			<TextArea
				name="text"
				onChange={handleTextarea}
				label="Objective"
				placeholder="To become a better developer and help my organization to grow"
				value={text}
			/>
		</>
	);
};
