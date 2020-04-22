import React from "react";
import styled, { css } from "styled-components";

const ButtonWrapper = styled.button`
	padding: 0.2rem 0.6rem;
	background: #4a5568;
	background: #718096;
	border: 1px solid #718096;
	margin: 1rem 0;
	color: #fff;
	border-radius: 4px;
	font-weight: 500;
	font-size: ${props => (props.small ? "0.75rem" : "1rem")};
	font-family: "Poppins", sans-serif;
	cursor: pointer;

	&:hover {
		background: #4a5568;
		border: 1px solid #4a5568;
	}
`;

const ButtonWithIconWrapper = styled.button`
	display: flex;
	justify-content: space-evenly;
	align-items: baseline;
	padding: 0.2rem 1rem;
	background: #718096;
	border: 1px solid #718096;
	margin: 1rem 0;
	color: #fff;
	border-radius: 4px;
	font-weight: 500;
	font-size: 1rem;
	font-family: "Poppins", sans-serif;
	cursor: pointer;

	i {
		margin-right: 0.5rem;
	}

	&:hover {
		background: #4A5568;
		border: 1px solid #4A5568;
	}

	${props =>
		props.danger &&
		css`
			background: #e53e3e;
			border: 1px solid #e53e3e;

			&:hover {
				background: #c53030;
				border: 1px solid #c53030;
			}
		`}

	${props =>
		props.minimal &&
		css`
			background: #fff;
			border: 1px solid #a0aec0;
			padding: 0.2rem 0.4rem;

			i {
				margin-right: 0.1rem;
				color: #4a5568;
			}

			&:hover {
				background: #fff;
				border: 1px solid #a0aec0;
			}
		`}

	${props =>
		props.medium &&
		css`
			padding: 0;
			i {
				margin: 0;
				padding: 0.5rem 0.8rem;
			}
		`}
`;

export const Button = ({ danger = false, small = false, text, onClick, type }) => (
	<ButtonWrapper danger={danger} onClick={onClick} type={type} small={small}>
		{text}
	</ButtonWrapper>
);

export const ButtonWithIcon = ({
	className,
	danger = false,
	minimal = false,
	medium = false,
	text,
	onClick,
	type
}) => (
	<ButtonWithIconWrapper
		minimal={minimal}
		danger={danger}
		medium={medium}
		onClick={onClick}
		type={type}
	>
		<i className={className}></i>
		{text}
	</ButtonWithIconWrapper>
);
