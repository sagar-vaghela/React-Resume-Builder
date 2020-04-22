import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./Button";

import ProfileEditor from "./Editors/ProfileEditor";
import ObjectiveEditor from "./Editors/ObjectiveEditor";
import WorkEditor from "./Editors/Work/WorkEditor";
import EducationEditor from "./Editors/Education/EducationEditor";
import CertificationEditor from "./Editors/Certification/CertificationEditor";
import SkillsEditor from "./Editors/Skills/SkillsEditor";
import LanguageEditor from "./Editors/Languages/LanguageEditor";
import PersonalInfoEditor from "./Editors/PersonalInformation/PersonalInfoEditor";

const Wrapper = styled.div`
	background: white;
	padding: 1rem 1.5rem;
	width: 280px;
	z-index: 2;

	i.fas {
		cursor: pointer;
	}
`;

const NextPrev = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 98%;
`;

const Editor = () => {
	const editors = [
		"PROFILE",
		"OBJECTIVE",
		"WORK",
		"EDUCATION",
		"CERTIFICATION",
		"SKILLS",
		"LANGUAGE",
		"PERSONAL INFORMATION"
	];
	const [editorState, setEditorState] = useState(editors[0]);

	let text;

	switch (editorState) {
		case "PROFILE":
			text = "Profile";
			break;
		case "OBJECTIVE":
			text = "Objective";
			break;
		case "WORK":
			text = "Work Experience";
			break;
		case "EDUCATION":
			text = "Education";
			break;
		case "CERTIFICATION":
			text = "Certifications";
			break;
		case "SKILLS":
			text = "Skills and Hobbies";
			break;
		case "LANGUAGE":
			text = "Languages";
			break;
		case "PERSONAL INFORMATION":
			text = "Personal Information";
			break;
		default:
			text = "Not found";
			break;
	}

	const nextEditor = () => {
		const currentEditor = editorState;

		if (editors.indexOf(currentEditor) === editors.length - 1) {
			setEditorState(editors[0]);
		} else {
			const index = editors.indexOf(currentEditor);
			setEditorState(editors[index + 1]);
		}
	};

	const prevEditor = () => {
		const currentEditor = editorState;

		if (editors.indexOf(currentEditor) === 0) {
			setEditorState(editors[editors.length - 1]);
		} else {
			const index = editors.indexOf(currentEditor);
			setEditorState(editors[index - 1]);
		}
	};

	return (
		<Wrapper>
			<NextPrev>
				<i className="fas fa-chevron-left" onClick={prevEditor}></i>
				<Button text={text} />
				<i className="fas fa-chevron-right" onClick={nextEditor}></i>
			</NextPrev>

			{editorState === "PROFILE" && <ProfileEditor />}

			{editorState === "OBJECTIVE" && <ObjectiveEditor />}

			{editorState === "WORK" && <WorkEditor />}

			{editorState === "EDUCATION" && <EducationEditor />}

			{editorState === "CERTIFICATION" && <CertificationEditor />}

			{editorState === "SKILLS" && <SkillsEditor />}

			{editorState === "LANGUAGE" && <LanguageEditor />}

			{editorState === "PERSONAL INFORMATION" && <PersonalInfoEditor />}
		</Wrapper>
	);
};

export default Editor;
