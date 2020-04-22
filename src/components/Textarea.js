import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	margin-bottom: 1rem;
`;

const Label = styled.label`
	display: block;
	text-transform: uppercase;
	color: #718096;
	font-size: 0.85rem;
	margin-bottom: 0.3rem;
	font-weight: 500;
  letter-spacing: 2.3px;
`;

const TextArea = styled.textarea`
	display: block;
	background: #EDF2F7;
	border: 1px solid #EDF2F7;
	padding: 0.5rem 1rem;
	border-radius: 4px;
	font-size: 0.9rem;
	color: #2D3748;
	font-family: "Poppins", sans-serif;
	width: 95%;
letter-spacing: 1.3px;

	&::placeholder {
		color: #C0CBD7;
	}
`;

export default ({
	type = "text",
	label,
	placeholder,
	onChange,
	value,
	name,
	rows = "15"
}) => {
	return (
		<Wrapper>
			<Label>{label}</Label>
			<TextArea
				rows={rows}
				type={type}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</Wrapper>
	);
};
