import React, { useState, useContext } from "react";
import Checkbox from "../../../components/Checkbox";
import Ruler from "../../../styles/Ruler";
import { ResumeContext } from "../../../context/ResumeContext";
import PersonalInfoForm from "./PersonalInfoForm";

const PersonalInfoEditor = () => {
	const { state, setState } = useContext(ResumeContext);
	const { enable, items } = state.personalInformation;

	const [checked, setChecked] = useState(enable);

	const toggleCheckbox = e => {
		setChecked(!checked);
		setState({
			...state,
			personalInformation: {
				...state.personalInformation,
				enable: e.target.checked
			}
		});
	};

	return (
		<>
			<Checkbox
				text="Add Personal Information"
				checked={enable}
				onChange={toggleCheckbox}
			/>

			<Ruler />

			{items &&
				items.map(item => (
					<PersonalInfoForm
						key={item.id}
						formId={item.id}
						formKey={item.key}
						formValue={item.value}
						headerText={item.key}
						update={true}
					/>
				))}

			<PersonalInfoForm />
		</>
	);
};

export default PersonalInfoEditor;
