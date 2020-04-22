import React from "react";
import styled from "styled-components";
import Avatar from "../../styles/Avatar";

const Wrapper = styled.div`
	display: flex;
	justify-content: space-around;

	.profile-info h1 {
		font-weight: 500;
		font-size: 1.4rem;
	}

	.profile-info .bold {
		font-weight: bold;
	}

	.profile-info .address {
		margin-top: 1rem;
		font-size: 0.9rem;

		span {
			display: block;
		}
	}
`;

const ProfileLeft = ({
	url,
	firstname,
	lastname,
	subtitle,
	addressline1,
	addressline2,
	addressline3
}) => (
	<Wrapper>
		{url && <Avatar src={url} alt="Resume Photograph" />}

		<div className="profile-info">
			<h1>
				{firstname} {lastname}
			</h1>

			<span className="bold">{subtitle}</span>

			<div className="address">
				<span>{addressline1}</span>
				<span>{addressline2}</span>
				<span>{addressline3}</span>
			</div>
		</div>
	</Wrapper>
);

export default ProfileLeft;
