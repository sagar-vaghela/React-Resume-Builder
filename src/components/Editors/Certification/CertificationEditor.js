import React, { useState, useContext } from "react";
import Checkbox from "../../../components/Checkbox";
import Ruler from "../../../styles/Ruler";
import { ResumeContext } from "../../../context/ResumeContext";
import CertificationForm from "./CertificationForm";

const CertificationEditor = () => {
	const { state, setState } = useContext(ResumeContext);
	const { enable, items } = state.certifications;

	const [checked, setChecked] = useState(enable);

	const toggleCheckbox = e => {
		setChecked(!checked);
		setState({
			...state,
			certifications: {
				...state.certifications,
				enable: e.target.checked
			}
		});
	};

	return (
		<>
			<Checkbox
				text="Add Certification"
				checked={enable}
				onChange={toggleCheckbox}
			/>

			<Ruler />

			{items &&
				items.map(item => (
					<CertificationForm
						key={item.id}
						formId={item.id}
						formName={item.name}
						formAuthority={item.authority}
						formDescription={item.description}
						headerText={item.name}
						update={true}
					/>
				))}

			<CertificationForm />
		</>
	);
};

export default CertificationEditor;
