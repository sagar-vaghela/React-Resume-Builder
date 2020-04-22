import React, { useState, useContext } from "react";
import styled from "styled-components";
import { v1 as uuid } from "uuid";
import { ResumeContext } from "../../../context/ResumeContext";
import Input from "../../../components/Input";
import Textarea from "../../../components/Textarea";
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

const Duration = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const ButtonList = styled.div`
	display: flex;
	justify-content: space-between;
`;

const ExperienceForm = ({
	formId = "",
	formName = "",
	formMajor = "",
	formGrade = "",
	formStart = "",
	formEnd = "",
	formDescription = "",
	headerText = "Add Education",
	update
}) => {
	const { state, setState } = useContext(ResumeContext);
	const { items } = state.education;

	const [educationForm, setEducationForm] = useState({
		id: formId,
		name: formName,
		major: formMajor,
		grade: formGrade,
		start: formStart,
		end: formEnd,
		description: formDescription
	});

	const { name, major, grade, start, end, description, id } = educationForm;

	const [toggleForm, setToggleForm] = useState(true);

	const onChange = e => {
		setEducationForm({
			...educationForm,
			[e.target.name]: e.target.value
		});
	};

	const handleEducation = e => {
		e.preventDefault();

		const education = { id: uuid(), name, major, grade, start, end, description };
		setState({
			...state,
			education: {
				...state.education,
				items: [...items, education]
			}
		});
		setEducationForm({
			name: "",
			major: "",
			grade: "",
			start: "",
			end: "",
			description: ""
		});
		setToggleForm(!toggleForm);
	};

	const deleteEducation = id => {
		setState({
			...state,
			education: {
				...state.education,
				items: items.filter(item => item.id !== id)
			}
		});
	};

	const updateEducation = id => {
		setState({
			...state,
			education: {
				...state.education,
				items: items.map(item =>
					item.id === id
						? Object.assign({}, item, {name, major, grade, start, end, description})
						: item
				)
			}
		});
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
							label="Name"
							placeholder="MIT"
							name="name"
							value={name}
							onChange={onChange}
						/>

						<Input
							label="Major"
							placeholder="Software Engineering"
							name="major"
							value={major}
							onChange={onChange}
						/>

						<Input
							label="Grade"
							placeholder="7.2 CGPA"
							name="grade"
							value={grade}
							onChange={onChange}
						/>

						<Duration>
							<Input
								label="Start Date"
								placeholder="May 2001"
								name="start"
								value={start}
								onChange={onChange}
							/>
							<Input
								label="End Date"
								placeholder="Aug 2005"
								name="end"
								value={end}
								onChange={onChange}
							/>
						</Duration>

						<Textarea
							rows="7"
							label="Description"
							placeholder="Got my software engineering degree at the prestigious MIT"
							name="description"
							value={description}
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
								onClick={() => updateEducation(id)}
								minimal
							/>
							<ButtonWithIcon
								className="fas fa-trash"
								danger={true}
								text="Delete"
								onClick={() => deleteEducation(id)}
							/>
						</ButtonList>
					)}
				</>
			)}
		</Wrapper>
	);
};
export default ExperienceForm;
