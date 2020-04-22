import React, { useState, useContext } from "react";
import styled from "styled-components";
import { v1 as uuid } from "uuid";
import { ResumeContext } from "../../../context/ResumeContext";
import Input from "../../../components/Input";
import { ButtonWithIcon } from "../../../components/Button";

const Wrapper = styled.div`
	border: 1px solid #edf2f7;
	border-radius: 4px;
	padding: 0.4rem 0.8rem;
	margin-bottom: 1.4rem;
	margin-top: 0.5rem;

	h4 {
		margin-bottom: 0.2rem;
	}

	label {
		margin-top: 1.3rem;
	}

	form {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		align-content: center;

		button {
			position: relative;
			top: 1.4px;
		}
	}
`;

const FormHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: baseline;
`;

const SkillForm = () => {
	const { state, setState } = useContext(ResumeContext);
	const { items } = state.skills;

	const [skill, setSkill] = useState("");

	const [toggleForm, setToggleForm] = useState(true);

	const handleSkill = e => {
		e.preventDefault();

		setState({
			...state,
			skills: {
				...state.skills,
				items: [...items, { id: uuid(), text: skill }]
			}
		});
		setSkill("");
		setToggleForm(!toggleForm);
	};

	return (
		<Wrapper>
			<FormHeader>
				<h4>Add Skills and Hobbies</h4>

				{toggleForm && (
					<i
						className="fas fa-chevron-down"
						onClick={() => setToggleForm(!toggleForm)}
					></i>
				)}

				{!toggleForm && (
					<i
						className="fas fa-chevron-up"
						onClick={() => setToggleForm(!toggleForm)}
					></i>
				)}
			</FormHeader>

			{!toggleForm && (
				<form onSubmit={handleSkill}>
					<Input
						placeholder="3D Modelling"
						name="text"
						value={skill}
						onChange={e => setSkill(e.target.value)}
					/>
					<ButtonWithIcon medium={true} className="fas fa-plus" type="submit" />
				</form>
			)}
		</Wrapper>
	);
};
export default SkillForm;
