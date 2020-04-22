import React, { useContext } from "react";
import styled from "styled-components";
import { ResumeContext } from "../context/ResumeContext";

const Wrapper = styled.div`
	h4 {
		color: ${props => props.theme.accent};
		margin-bottom: 0.4rem;
		text-transform: uppercase;
		font-weight: 700;
		letter-spacing: 1.2px;
	}
`;

const Table = styled.div`
	border-left: 1px solid ${props => props.theme.lightGrey};
	border-right: 1px solid ${props => props.theme.lightGrey};
	border-top: 1px solid ${props => props.theme.lightGrey};
	width: 70%;
`;

const KeyValueWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0.4rem 1rem;
	border-bottom: 2px solid ${props => props.theme.lightGrey};
`;

const KeyValue = props => (
	<KeyValueWrapper>
		<span>{props.item.key}</span>
		<span>{props.item.value}</span>
	</KeyValueWrapper>
);

const PersonalInformation = () => {
	const {
		state: { personalInformation: info }
	} = useContext(ResumeContext);

	if (!info.enable) return null;

	return (
		<Wrapper>
			<h4>Personal Information</h4>
			<Table>
				{info.items &&
					info.items.map(item => <KeyValue key={item.id} item={item} />)}
			</Table>
		</Wrapper>
	);
};

export default PersonalInformation;
