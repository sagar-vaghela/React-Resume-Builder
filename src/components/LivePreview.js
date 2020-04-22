import React, { useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import { PanZoom } from "react-easy-panzoom";
import { PageContext } from "../context/PageContext";
import { ResumeContext } from "../context/ResumeContext";

import Profile from "./Profile";
import Objective from "./Objective";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Certification from "./Certification";
import Skills from "./Skills";
import Languages from "./Languages";
import PersonalInformation from "./PersonalInformation";

const FlexWrapper = styled.div`
	display: flex;
	justify-content: center;
	font-family: ${props => props.theme.font};
	color: ${props => props.textColor};
	font-family: ${props => props.font};

	h1,
	h4 {
		color: ${props => props.accent};
	}

	svg {
		fill: ${props => props.accent};
	}
`;

const Wrapper = styled.div`
	background: ${props => props.bg};
	width: 637px;
	height: 1250px;
	padding: 1rem 1.8rem;
	box-shadow: ${props => props.theme.bs};
`;

const LivePreview = () => {
	const pageRef = useRef(null);
	const panZoomRef = useRef(null);

	const { setPageRef, setPanZoomRef } = useContext(PageContext);
	const {
		state: { theme }
	} = useContext(ResumeContext);

	useEffect(() => {
		setPageRef(pageRef);
		setPanZoomRef(panZoomRef);
	}, [setPageRef, setPanZoomRef]);

	return (
		<FlexWrapper
			accent={theme.accent}
			textColor={theme.textColor}
			font={theme.font}
		>
			<PanZoom
				ref={panZoomRef}
				autoCenter
				autoCenterZoomLevel="0.9"
				style={{ outline: "none" }}
			>
				<Wrapper ref={pageRef} bg={theme.bg}>
					<Profile />
					<Objective />
					<WorkExperience />
					<Education />
					<Certification />
					<Skills />
					<Languages />
					<PersonalInformation />
				</Wrapper>
			</PanZoom>
		</FlexWrapper>
	);
};

export default LivePreview;
