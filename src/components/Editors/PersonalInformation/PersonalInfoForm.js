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

	h4 {
		margin-bottom: 0.2rem;
	}

	label {
		margin-top: 1.3rem;
	}
`;

const FormHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: baseline;
`;

const ButtonList = styled.div`
	display: flex;
	justify-content: space-between;
`;

const PersonalInfoForm = ({
	formId = "",
	formKey = "",
	formValue = "",
	headerText = "Add Personal Information",
	update
}) => {
	const { state, setState } = useContext(ResumeContext);
	const { items } = state.personalInformation;

	const [personalInfoForm, setPersonalInfoForm] = useState({
		id: formId,
		key: formKey,
		value: formValue
	});

	const { id, key, value } = personalInfoForm;

	const [toggleForm, setToggleForm] = useState(true);

	const onChange = e => {
		setPersonalInfoForm({
			...personalInfoForm,
			[e.target.name]: e.target.value
		});
	};

	const handleEducation = e => {
		e.preventDefault();

		const newInfo = { id: uuid(), key, value };
		setState({
			...state,
			personalInformation: {
				...state.personalInformation,
				items: [...items, newInfo]
			}
		});
		setPersonalInfoForm({
			key: "",
			value: ""
		});
		setToggleForm(!toggleForm);
	};

	const deletePersonalEducation = id => {
		setState({
			...state,
			personalInformation: {
				...state.personalInformation,
				items: items.filter(item => item.id !== id)
			}
		});
	};

	const updatePersonalEducation = id => {
		setState({
			...state,
			personalInformation: {
				...state.personalInformation,
				items: items.map(item =>
					item.id === id
						? Object.assign({}, item, {key, value})
						: item
				)
			}
		});
		setToggleForm(!toggleForm)
	};

	return (
		<Wrapper>
			<FormHeader>
				<h4>{headerText}</h4>
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
				<>
					<form onSubmit={handleEducation}>
						<Input
							label="Key"
							placeholder="Date Of Birth"
							name="key"
							value={key}
							onChange={onChange}
						/>

						<Input
							label="Value"
							placeholder="9th Aug 1990"
							name="value"
							value={value}
							onChange={onChange}
						/>

						{!update && (
							<ButtonWithIcon
								className="fas fa-plus"
								type="submit"
								text="Add"
							/>
						)}
					</form>
					{update && (
						<ButtonList>
							<ButtonWithIcon
								className="fas fa-pencil-alt"
								onClick={() => updatePersonalEducation(id)}
								minimal
							/>
							<ButtonWithIcon
								className="fas fa-trash"
								danger={true}
								text="Delete"
								onClick={() => deletePersonalEducation(id)}
							/>
						</ButtonList>
					)}
				</>
			)}
		</Wrapper>
	);
};
export default PersonalInfoForm;
