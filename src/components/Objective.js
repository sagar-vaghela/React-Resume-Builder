import React, { useContext } from "react";
import styled from "styled-components";
import { ResumeContext } from "../context/ResumeContext";

export const Wrapper = styled.div`
	margin: 1.6rem 0;

	h4 {
		margin-bottom: 0.4rem;
		text-transform: uppercase;
		font-weight: 700;
		letter-spacing: 1.2px;
	}
`;

const Objective = ({ text }) => {
	const {
		state: { objective }
	} = useContext(ResumeContext);

	if (!objective.enable) {
		return null;
	}

	return (
		<Wrapper>
			<h4>Objective</h4>
			<span>{objective.text}</span>
		</Wrapper>
	);
};

export default Objective;
