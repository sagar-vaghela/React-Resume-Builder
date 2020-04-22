import React, { useContext } from "react";
import styled from "styled-components";
import { ResumeContext } from "../context/ResumeContext";
import { Wrapper } from "./Objective";

const EducationWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0.6rem 0;

	h3 {
		font-weight: 700;
		letter-spacing: 1.3px;
	}

	.major {
		font-size: 0.9rem;
		font-weight: 100;
	}

	.description {
		margin-top: 0.6rem;
		font-size: 0.9rem;
	}

	.grade {
		display: block;
		font-weight: 700;
		letter-spacing: 1.3px;
		text-align: center;
	}

	.duration {
		display: block;
		font-size: 0.9rem;
	}
`;

const Education = props => (
	<EducationWrapper>
		<div>
			<h3>{props.item.name}</h3>
			<span className="major">{props.item.major}</span>
			<p className="description">{props.item.description}</p>
		</div>
		<div>
			<span className="grade">{props.item.grade} CGPA</span>
			<span className="duration">
				({props.item.start} - {props.item.end})
			</span>
		</div>
	</EducationWrapper>
);

export default () => {
	const {
		state: { education }
	} = useContext(ResumeContext);

	if (!education.enable) {
		return null;
	}

	return (
		<Wrapper>
			<h4>Education</h4>
			{education.items &&
				education.items.map(item => <Education item={item} key={item} />)}
		</Wrapper>
	);
};
