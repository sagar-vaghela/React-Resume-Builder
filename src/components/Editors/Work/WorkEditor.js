import React, { useState, useContext } from "react";
import Checkbox from "../../../components/Checkbox";
import Ruler from "../../../styles/Ruler";
import { ResumeContext } from "../../../context/ResumeContext";
import WorkExperienceForm from "./WorkExperienceForm";

const WorkEditor = () => {
	const { state, setState } = useContext(ResumeContext);
	const { enable, items } = state.work;

	const [checked, setChecked] = useState(enable);

	const toggleCheckbox = e => {
		setChecked(!checked);
		setState({
			...state,
			work: {
				...state.work,
				enable: e.target.checked
			}
		});
	};

	return (
		<>
			<Checkbox
				text="Work Experience"
				checked={enable}
				onChange={toggleCheckbox}
			/>

			<Ruler />

			{items &&
				items.map(item => (
					<WorkExperienceForm
						key={item.id}
						formId={item.id}
						formName={item.name}
						formRole={item.role}
						formStart={item.start}
						formEnd={item.end}
						formDescription={item.description}
						headerText={item.name}
						update={true}
					/>
				))}

			<WorkExperienceForm />
		</>
	);
};

export default WorkEditor;
