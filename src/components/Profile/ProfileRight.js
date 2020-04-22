import React from "react";
import styled from "styled-components";
import { PhoneIcon, MailIcon, WebIcon, LocationIcon } from "../Icons";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;

	svg {
		margin-right: 0.5rem;
		position: relative;
		top: 3.5px;
	}
`;

const ProfileRight = ({ phone, email, website, addressline3 }) => (
	<Wrapper>
		{phone && (
			<span>
				<PhoneIcon /> {phone}
			</span>
		)}

		{email && (
			<span>
				<MailIcon /> {email}
			</span>
		)}

		{website && (
			<span>
				<WebIcon />
				{website}
			</span>
		)}

		{addressline3 && (
			<span>
				<LocationIcon />
				{addressline3}
			</span>
		)}
	</Wrapper>
);

export default ProfileRight;
