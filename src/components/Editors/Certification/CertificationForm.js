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

const ButtonList = styled.div`
	display: flex;
	justify-content: space-between;
`;

const CertificationForm = ({
	formId = "",
	formName = "",
	formAuthority = "",
	formDescription = "",
	headerText = "Add Certification",
	update
}) => {
	const { state, setState } = useContext(ResumeContext);
	const { items } = state.certifications;

	const [certificationForm, setCertificationForm] = useState({
		id: formId,
		name: formName,
		authority: formAuthority,
		description: formDescription
	});

	const { name, authority, description, id } = certificationForm;

	const [toggleForm, setToggleForm] = useState(true);

	const onChange = e => {
		setCertificationForm({
			...certificationForm,
			[e.target.name]: e.target.value
		});
	};

	const handleCertification = e => {
		e.preventDefault();

		const certification = { id: uuid(), name, authority, description };
		setState({
			...state,
			certifications: {
				...state.certifications,
				items: [...items, certification]
			}
		});
		setCertificationForm({
			name: "",
			authority: "",
			description: ""
		});
		setToggleForm(!toggleForm);
	};

	const deleteCertification = id => {
		setState({
			...state,
			certifications: {
				...state.certifications,
				items: items.filter(item => item.id !== id)
			}
		});
	};

	const updateCerfication = id => {
		setState({
			...state,
			certifications: {
				...state.certifications,
				items: items.map(item =>
					item.id === id
						? Object.assign({}, item, { name, authority, description })
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
					<form onSubmit={handleCertification}>
						<Input
							label="Name"
							placeholder="Reactjs Hackathon"
							name="name"
							value={name}
							onChange={onChange}
						/>

						<Input
							label="Authority"
							placeholder="Syntax FM"
							name="authority"
							value={authority}
							onChange={onChange}
						/>

						<Textarea
							rows="7"
							label="Description"
							placeholder="Built a chatbot using NodeJS headless API to render PDFs"
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
								onClick={() => updateCerfication(id)}
								minimal
							/>
							<ButtonWithIcon
								className="fas fa-trash"
								danger={true}
								text="Delete"
								onClick={() => deleteCertification(id)}
							/>
						</ButtonList>
					)}
				</>
			)}
		</Wrapper>
	);
};
export default CertificationForm;
