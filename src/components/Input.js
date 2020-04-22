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
`;

const Input = styled.input`
	display: block;
	background: #edf2f7;
	border: 1px solid #edf2f7;
	padding: 0.5rem 1rem;
	border-radius: 4px;
	font-size: 0.9rem;
	color: #2d3748;
	font-family: "Poppins", sans-serif;
	width: 95%;

	&::placeholder {
		color: #c0cbd7;
	}
`;

export default ({
	type = "text",
	label,
	placeholder,
	onChange,
	value,
	name,
}) => {
	return (
		<Wrapper>
			<Label>{label}</Label>
			<Input
				type={type}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</Wrapper>
	);
};
