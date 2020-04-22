import React, { useState, useContext } from "react";
import styled from "styled-components";
import Checkbox from "../../../components/Checkbox";
import Ruler from "../../../styles/Ruler";
import { ResumeContext } from "../../../context/ResumeContext";
import SkillForm from "./SkillForm";

const SkillWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: baseline;

	span {
		display: block;
		color: #747d8c;
		background: #edf2f7;
		padding: 0.6rem 1rem;
		border-radius: 4px;
		margin-bottom: 1rem;
		font-size: 0.8rem;
		width: 90%;
	}

	i {
		color: #718096;
	}

	i:hover {
		color: ${props => props.theme.red};
	}
`;

const SkillsEditor = () => {
	const { state, setState } = useContext(ResumeContext);
	const { enable, items } = state.skills;

	const [checked, setChecked] = useState(enable);
	const toggleCheckbox = e => {
		setChecked(!checked);
		setState({
			...state,
			skills: {
				...state.skills,
				enable: e.target.checked
			}
		});
	};

	const removeSkill = id => {
		setState({
			...state,
			skills: {
				...state.skills,
				items: items.filter(item => item.id !== id)
			}
		});
	}

	return (
		<>
			<Checkbox
				text="Skills and Hobbies"
				checked={enable}
				onChange={toggleCheckbox}
			/>

			<Ruler />

			{items &&
				items.map(item => (
					<SkillWrapper key={item.id}>
						<span>{item.text}</span>
						<i className="fas fa-times" onClick={() => removeSkill(item.id)}></i>
					</SkillWrapper>
				))}

			<SkillForm />
		</>
	);
};

export default SkillsEditor;
