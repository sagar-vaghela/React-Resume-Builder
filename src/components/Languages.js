import React, { useContext } from "react";
import styled from "styled-components";
import { ResumeContext } from "../context/ResumeContext";
import { Wrapper } from "./Objective";
import { StarIcon } from "./Icons";

const LanguageWrapper = styled.span`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-bottom: 1rem;

	.wrapper {
		display: flex;
		justify-content: space-between;
	}

	svg {
		margin: 0 0.2rem;
	}
`;

export default () => {
	const {
		state: { languages }
	} = useContext(ResumeContext);

	if (!languages.enable) {
		return null;
	}

	return (
		<Wrapper>
			<h4 style={{ marginBottom: "0.6rem" }}>Languages Known</h4>
			{languages.items &&
				languages.items.map(item => {
					let { name, rating, id } = item;
					rating = Number(rating);

					return (
						<LanguageWrapper key={id}>
							<div className="wrapper">
								<span>{name}</span>

								<div className="stars">
									{[...Array(rating)].map((_, i) => (
										<StarIcon key={i} />
									))}
								</div>
							</div>
						</LanguageWrapper>
					);
				})}
		</Wrapper>
	);
};
