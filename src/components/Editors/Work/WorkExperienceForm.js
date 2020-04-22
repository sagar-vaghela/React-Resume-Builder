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

const WorkExperienceForm = ({
	formId = "",
	formName = "",
	formRole = "",
	formStart = "",
	formEnd = "",
	formDescription = "",
	headerText = "Add Experience",
	update
}) => {
	const { state, setState } = useContext(ResumeContext);
	const { items } = state.work;

	const [workForm, setWorkForm] = useState({
		id: formId,
		name: formName,
		role: formRole,
		start: formStart,
		end: formEnd,
		description: formDescription
	});

	const { name, role, start, end, description, id } = workForm;

	const [toggleForm, setToggleForm] = useState(true);

	const onChange = e => {
		console.log("clicked");
		console.log(e.target.name);
		console.log(e.target.value);
		console.log(workForm);

		setWorkForm({
			...workForm,
			[e.target.name]: e.target.value
		});
	};

	const handleWorkExperience = e => {
		e.preventDefault();

		const workExp = { id: uuid(), name, role, start, end, description };
		setState({
			...state,
			work: {
				...state.work,
				items: [...items, workExp]
			}
		});
		setWorkForm({
			name: "",
			role: "",
			start: "",
			end: "",
			description: ""
		});
		setToggleForm(!toggleForm);
	};

	const deleteWorkExperience = id => {
		console.log(id);
		setState({
			...state,
			work: {
				...state.work,
				items: items.filter(item => item.id !== id)
			}
		});
	};

	const updateWorkExperience = id => {
		console.log(id);
		setState({
			...state,
			work: {
				...state.work,
				items: items.map(item =>
					item.id === id
						? Object.assign({}, item, {name, role, start, end, description})
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
					<form onSubmit={handleWorkExperience}>
						<Input
							label="Name"
							placeholder="Amazon"
							name="name"
							value={name}
							onChange={onChange}
						/>
						<Input
							label="Role"
							placeholder="Full Stack Developer"
							name="role"
							value={role}
							onChange={onChange}
						/>

						<Duration>
							<Input
								label="Start Date"
								placeholder="May 2005"
								name="start"
								value={start}
								onChange={onChange}
							/>
							<Input
								label="End Date"
								placeholder="Aug 2006"
								name="end"
								value={end}
								onChange={onChange}
							/>
						</Duration>

						<Textarea
							rows="7"
							label="Description"
							placeholder="Worked in various interesting technologies"
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
								onClick={() => updateWorkExperience(id)}
								minimal
							/>
							<ButtonWithIcon
								className="fas fa-trash"
								danger={true}
								text="Delete"
								onClick={() => deleteWorkExperience(id)}
							/>
						</ButtonList>
					)}
				</>
			)}
		</Wrapper>
	);
};
export default WorkExperienceForm;
