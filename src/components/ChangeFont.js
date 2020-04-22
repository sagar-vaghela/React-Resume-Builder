import React, { useContext } from "react";
import styled from "styled-components";
import { fonts } from "../styles/Theme";
import { ResumeContext } from "../context/ResumeContext";
import { Button } from "./Button";

const Wrapper = styled.div`
	margin-top: 1.5rem;
	font-size: 0.8rem;

	h5 {
		text-transform: uppercase;
		color: ${props => props.theme.grey};
		letter-spacing: 1.2px;
	}

	.fonts {
		display: flex;
		flex-wrap: wrap;
	}

	button {
		margin-right: 0.5rem;
		margin-bottom: 0.1rem;
	}
`;

export default ({ text, secondary }) => {
	const { state, setState } = useContext(ResumeContext);

	const onClick = font => {
		setState({
			...state,
			theme: {
				...state.theme,
				font
			}
		});
	};

	return (
		<Wrapper>
			<h5>Change Font</h5>
			<div className="fonts">
				{fonts.map(font => (
					<Button small text={font} key={font} onClick={() => onClick(font)} />
				))}
			</div>
		</Wrapper>
	);
};
