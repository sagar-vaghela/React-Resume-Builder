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

const ExperienceForm = ({
	formId = "",
	formName = "",
	formRating = "",
	headerText = "Add Languages",
	update
}) => {
	const { state, setState } = useContext(ResumeContext);
	const { items } = state.languages;

	const [languageForm, setLanguageForm] = useState({
		id: formId,
		name: formName,
		rating: formRating
	});

	const { name, rating, id } = languageForm;

	const [toggleForm, setToggleForm] = useState(true);

	const onChange = e => {
		console.log(languageForm)
		setLanguageForm({
			...languageForm,
			[e.target.name]: e.target.value
		});
	};

	const handleLanguage = e => {
		e.preventDefault();

		const language = { id: uuid(), name, rating };
		setState({
			...state,
			languages: {
				...state.languages,
				items: [...items, language]
			}
		});
		setLanguageForm({
			name: "",
			rating: ""
		});
		setToggleForm(!toggleForm);
	};

	const deleteLanguage = id => {
		setState({
			...state,
			languages: {
				...state.languages,
				items: items.filter(item => item.id !== id)
			}
		});
	};

	const updateLanguage = id => {
		setState({
			...state,
			languages: {
				...state.languages,
				items: items.map(item =>
					item.id === id
						? Object.assign({}, item, {name, rating})
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
					<form onSubmit={handleLanguage}>
						<Input
							label="Name"
							placeholder="English"
							name="name"
							value={name}
							onChange={onChange}
						/>

						<Input
							label="Rating"
							placeholder="1 - 5"
							name="rating"
							value={rating}
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
								onClick={() => updateLanguage(id)}
								minimal
							/>
							<ButtonWithIcon
								className="fas fa-trash"
								danger={true}
								text="Delete"
								onClick={() => deleteLanguage(id)}
							/>
						</ButtonList>
					)}
				</>
			)}
		</Wrapper>
	);
};

export default ExperienceForm;
