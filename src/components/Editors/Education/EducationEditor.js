import React, { useState, useContext } from "react";
import Checkbox from "../../../components/Checkbox";
import Ruler from "../../../styles/Ruler";
import { ResumeContext } from "../../../context/ResumeContext";
import EducationForm from "./EducationForm";

const WorkEditor = () => {
	const { state, setState } = useContext(ResumeContext);
	const { enable, items } = state.education;

	const [checked, setChecked] = useState(enable);

	const toggleCheckbox = e => {
		setChecked(!checked);
		setState({
			...state,
			education: {
				...state.education,
				enable: e.target.checked
			}
		});
	};

	return (
		<>
			<Checkbox
				text="Add Education"
				checked={enable}
				onChange={toggleCheckbox}
			/>

			<Ruler />

			{items &&
				items.map(item => (
					<EducationForm
						key={item.id}
						formId={item.id}
						formName={item.name}
						formMajor={item.major}
						formGrade={item.grade}
						formStart={item.start}
						formEnd={item.end}
						formDescription={item.description}
						headerText={item.name}
						update={true}
					/>
				))}

			<EducationForm />
		</>
	);
};

export default WorkEditor;
