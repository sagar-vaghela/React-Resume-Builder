import React, { useState, useContext } from "react";
import Checkbox from "../../../components/Checkbox";
import Ruler from "../../../styles/Ruler";
import { ResumeContext } from "../../../context/ResumeContext";
import LanguageForm from "./LanguageForm";

const LanguageEditor = () => {
	const { state, setState } = useContext(ResumeContext);
	const { enable, items } = state.languages;

	const [checked, setChecked] = useState(enable);

	const toggleCheckbox = e => {
		setChecked(!checked);
		setState({
			...state,
			languages: {
				...state.languages,
				enable: e.target.checked
			}
		});
	};

	return (
		<>
			<Checkbox
				text="Languages"
				checked={enable}
				onChange={toggleCheckbox}
			/>

			<Ruler />

			{items &&
				items.map(item => (
					<LanguageForm
						key={item.id}
						formId={item.id}
						formName={item.name}
						formRating={item.rating}
						headerText={item.name}
						update={true}
					/>
				))}

			<LanguageForm />
		</>
	);
};

export default LanguageEditor;
