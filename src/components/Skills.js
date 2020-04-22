import React, { useContext } from "react";
import styled from "styled-components";
import { ResumeContext } from "../context/ResumeContext";
import { Wrapper } from "./Objective";

const SkillWrapper = styled.span`
	margin-right: 1.4rem;
	padding: 0.3rem 0.8rem;
	border-radius: 4px;
	background: ${props => props.theme.black};
	color: ${props => props.theme.white};
`;

const Skills = () => {
	const {
		state: { skills }
	} = useContext(ResumeContext);

	if (!skills.enable) {
		return null;
	}

	return (
		<Wrapper>
			<h4 style={{ marginBottom: "0.6rem" }}>Skills and Hobbies</h4>
			{skills.items &&
				skills.items.map(item => (
					<SkillWrapper key={item.id}>{item.text}</SkillWrapper>
				))}
		</Wrapper>
	);
};

export default Skills;
