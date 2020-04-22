import React, { useContext } from "react";
import styled from "styled-components";
import { colors } from "../styles/Theme";
import { ResumeContext } from '../context/ResumeContext';

const Wrapper = styled.div`
	margin-top: 0.6rem;

	h5 {
		text-transform: uppercase;
		color: ${props => props.theme.grey};
		letter-spacing: 1.2px;
	}

	.color {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-top: 1rem;
	}

	span {
		margin-bottom: 1rem;
		margin-right: 1rem;
	}
`;

const ColorIcon = styled.span`
	color: ${props => props.color};
	height: 18px;
	width: 18px;
	border-radius: 50%;
	display: inline-block;
	cursor: pointer;
`;

const ColorChange = ({ text, secondary }) => {
	const { state, setState } = useContext(ResumeContext);

	const onClick = color => {
		if (!secondary) {
			setState({
				...state,
				theme: {
					...state.theme,
					accent: color
				}
			})
		} else {
			setState({
				...state,
				theme: {
					...state.theme,
					textColor: color
				}
			})
		}
	};

	return (
		<Wrapper>
			<h5>{text}</h5>
			<div className="color">
				{colors.map(color => (
					<ColorIcon
						style={{ backgroundColor: color }}
						key={color}
						color={color}
						onClick={() => onClick(color)}
					/>
				))}
			</div>
		</Wrapper>
	);
};

export default ColorChange;
