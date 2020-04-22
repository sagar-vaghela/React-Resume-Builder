import React, { useContext } from "react";
import styled from "styled-components";
import { ResumeContext } from "../context/ResumeContext";
import { Wrapper } from "./Objective";

const CertificationWrapper = styled.div`
	margin: 0.6rem 0;

	h3 {
		font-weight: 700;
		letter-spacing: 1.3px;
	}

	.authority {
		font-size: 0.9rem;
		font-weight: 100;
	}
	
	.description {
		margin-top: 0.6rem;
		font-size:0.9rem;
	}
`;

const Certification = props => (
	<CertificationWrapper>
		<div>
		<h3>{props.item.name}</h3>
		<span className="authority">{props.item.authority}</span>
		<p className="description">{props.item.description}</p>
		</div>
	</CertificationWrapper>
);

export default () => {
	const {
		state: { certifications }
	} = useContext(ResumeContext);

	if (!certifications.enable) {
		return null;
	}

	return (
		<Wrapper>
			<h4>Certifications</h4>
			{certifications.items && certifications.items.map(item => <Certification item={item} key={item} />)}
		</Wrapper>
	);
};
