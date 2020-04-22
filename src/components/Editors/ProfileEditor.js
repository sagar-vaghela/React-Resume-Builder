import React, { useContext } from "react";
import Input from "../Input";
import { ResumeContext } from "../../context/ResumeContext";
import Ruler from "../../styles/Ruler";

export default ({ setEditorState }) => {
	const { state, setState } = useContext(ResumeContext);

	const onChange = e => {
		setState({
			...state,
			profile: {
				...state.profile,
				[e.target.name]: e.target.value
			}
		});
	};

	const {
		url,
		firstname,
		lastname,
		subtitle,
		addressline1,
		addressline2,
		addressline3,
		website,
		phone,
		email
	} = state.profile

	return (
		<>
			<form>
				<Input
					label="Photo Url"
					placeholder="https://i.imgur.com/"
					name="url"
					value={url}
					onChange={onChange}
				/>
				<Input
					label="First Name"
					placeholder="Jane"
					name="firstname"
					value={firstname}
					onChange={onChange}
				/>
				<Input
					label="Last Name"
					placeholder="Doe"
					name="lastname"
					value={lastname}
					onChange={onChange}
				/>
				<Input
					label="Subtitle"
					placeholder="Full Stack Developer"
					name="subtitle"
					value={subtitle}
					onChange={onChange}
				/>

				<Ruler />

				<Input
					label="Address Line 1"
					placeholder="1430  Platinum Drive"
					name="addressline1"
					value={addressline1}
					onChange={onChange}
				/>

				<Input
					label="Address Line 2"
					placeholder="Greensburg"
					name="addressline2"
					value={addressline2}
					onChange={onChange}
				/>

				<Input
					label="Address Line 3"
					placeholder="Pennsylvania"
					name="addressline3"
					value={addressline3}
					onChange={onChange}
				/>

				<Ruler />

				<Input
					label="Phone"
					placeholder="7244609702"
					name="phone"
					value={phone}
					onChange={onChange}
				/>

				<Input
					label="Website"
					placeholder="johndoe.dev"
					name="website"
					value={website}
					onChange={onChange}
				/>

				<Input
					label="Email"
					type="email"
					placeholder="johndoe@gmail.com"
					name="email"
					value={email}
					onChange={onChange}
				/>
			</form>
		</>
	);
};
