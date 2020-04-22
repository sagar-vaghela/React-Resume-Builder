import React, { useContext } from "react";
import styled from "styled-components";
import ProfileLeft from "./ProfileLeft";
import ProfileRight from "./ProfileRight";
import { ResumeContext } from '../../context/ResumeContext';

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	padding-bottom: 1.4rem;
	border-bottom: 2px solid ${props => props.theme.lightGrey};
	margin-top: 2rem;
`;

const Profile = () => {
	const { state: { profile } } = useContext(ResumeContext);

	return (
	<Wrapper>
		<ProfileLeft 
			url={profile.url}
			firstname={profile.firstname}
			lastname={profile.lastname}
			subtitle={profile.subtitle}
			addressline1={profile.addressline1}
			addressline2={profile.addressline2}
			addressline3={profile.addressline3}
		/>

		<ProfileRight 
			website={profile.website}
			phone={profile.phone}
			email={profile.email}
			addressline3={profile.addressline3}
		/>
	</Wrapper>
);

}
export default Profile;
