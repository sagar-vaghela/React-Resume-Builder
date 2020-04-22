import React, { createContext, useState } from "react";
import { v1 as uuid } from "uuid";

export const ResumeContext = createContext(null);

export const ResumeProvider = ({ children }) => {
	const [state, setState] = useState({
		profile: {
			url: "https://w.wallhaven.cc/full/83/wallhaven-83xpjk.jpg",
			firstname: "John",
			lastname: "Wick",
			subtitle: "Legendary Assasin",
			addressline1: "Matrix City",
			addressline2: "Wick County",
			addressline3: "Italy",
			phone: "9009907876",
			email: "johnwick@kicksass.com",
			website: "johnwick.kills"
		},
		objective: {
			enable: true,
			text: "To kill the people who killed by dog and burned down my house"
		},
		work: {
			enable: true,
			items: [
				{
					id: uuid(),
					name: "Hitman",
					role: "Dirty Stuff",
					start: "June 1998",
					end: "Aug 2010",
					description: "To kill people whom disobeyed torsov mob."
				}
			]
		},
		education: {
			enable: true,
			items: [
				{
					id: uuid(),
					name: "Kingpin University",
					major: "GunFu",
					grade: "7.2",
					start: "July 2004",
					end: "Oct 2008",
					description: "Learn how to effectively fight 5000 people at once."
				}
			]
		},
		certifications: {
			enable: true,
			items: [
				{
					name: "Kung Fu Marathon",
					authority: "Matrix City",
					description:
						"Fought with 100 people at once but I wore a face mask they don't 🤣"
				}
			]
		},
		skills: {
			enable: true,
			items: [
				{
					id: uuid(),
					text: "Kung-Fu"
				},
				{ id: uuid(), text: "Gun-Fu" },
				{ id: uuid(), text: "Pencil Kill" }
			]
		},
		languages: {
			enable: true,
			items: [
				{
					id: uuid(),
					name: "English",
					rating: 5
				},
				{ id: uuid(), name: "Spanish", rating: 4 }
			]
		},
		personalInformation: {
			enable: true,
			items: [
				{
					id: uuid(),
					key: "Date Of Birth",
					value: "31st Aug 1998"
				},
				{ id: uuid(), key: "Wife", value: "Helen Wick" },
				{ id: uuid(), key: "Dog", value: "Daisy" }
			]
		},
		theme: {
			font: "Montserrat",
			accent: "#9C27B0",
			textColor: "#4E4E4E",
			bg: "#FFF",
			black: "#212121",
			grey: "#718096",
			lightGrey: "#EAEEF4",
			bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
			white: "#FFF",
			red: "#F55C51"
		}
	});

	return (
		<ResumeContext.Provider value={{ state, setState }}>
			{children}
		</ResumeContext.Provider>
	);
};
