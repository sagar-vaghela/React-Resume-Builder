import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	margin: 1.2rem 0 2rem 0;
	display: flex;
	align-items: center;

	span {
		background: #edf2f7;
		padding: 0.3rem 1rem;
		border-radius: 4px;
		display: inline-block;
		margin-left: 0.7rem;
		width: 180px;
	}

	i.fa-check {
		position: relative;
		right: 22px;
		margin: none;
	}
`;

const Checkbox = styled.input`
	appearance: none;
	width: 30px;
	height: 30px;
	background-color: #fff;
	border: 2px solid #a0aec0;
	border-radius: 2px;
`;

export default ({ text, checked, onChange }) => {
	return (
		<Wrapper>
			<Checkbox type="checkbox" checked={checked} onChange={onChange} />
			{checked && <i className="fas fa-check"></i>}
			<span>{text}</span>
		</Wrapper>
	);
};
