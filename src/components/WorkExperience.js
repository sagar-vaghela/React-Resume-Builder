import React, { useContext } from "react";
import styled from "styled-components";
import { ResumeContext } from "../context/ResumeContext";
import { Wrapper } from "./Objective";

const WorkWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0.6rem 0;

	h3 {
		font-weight: 700;
		letter-spacing: 1.3px;
	}

	.role {
		font-size: 0.9rem;
		font-weight: 100;
	}

	.description {
		margin-top: 0.6rem;
		font-size: 0.9rem;
	}
`;

const Work = props => (
	<WorkWrapper>
		<div>
			<h3>{props.item.name}</h3>
			<span className="role">{props.item.role}</span>
			<p className="description">{props.item.description}</p>
		</div>
		<div>
			<span>
				({props.item.start} - {props.item.end})
			</span>
		</div>
	</WorkWrapper>
);

const WorkExperience = () => {
	const {
		state: { work }
	} = useContext(ResumeContext);

	if (!work.enable) {
		return null;
	}

	return (
		<Wrapper>
			<h4>Work Experience</h4>
			{work.items && work.items.map(item => <Work item={item} key={item} />)}
		</Wrapper>
	);
};

export default WorkExperience;
