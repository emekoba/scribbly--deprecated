import React, { createContext, useState } from "react";
import { Resources } from "../Resources/Resources";

export const Brim = createContext();

export const Control = (props) => {
	const [control, setcontrol] = useState({
		//GLOBALS.................................................................

		online: true,

		thatone: "#8293ee",

		// primary: "#243447",
		// background: "#141d26",
		// card: "#243447",
		// text: "white",
		// border: "black",

		// // ..........................................................
		// primary: "#222831",
		// background: "#141d26",
		// card: "#222831",
		// text: "white",
		// border: "black",

		// // ..........................................................
		// primary: "#022c43",
		// background: "#141d26",
		// card: "#022c43",
		// text: "white",
		// border: "black",

		// // ..........................................................
		// primary: "lightslategrey",
		// background: "rgba(231, 238, 241, 0.438)",
		// card: "lightslategrey",
		// text: "white",
		// border: "black",

		// ..........................................................
		primary: "white",
		background: "rgba(231, 238, 241, 0.938)",
		card: "white",
		text: "black",
		border: "black",

		// ..........................................................
		// primary: "#121212",
		// background: "#121212",
		// card: "#1F1B24",
		// text: "white",
		// border: "black",

		"#2fbe74": {
			pri50: "#e4f6eb",
			pri500: "#00b25c",
			pri700: "#009145",
			pri800: "#007f39",
			sec700: "#be2f79",
			sec900: "#802764",
		},

		"#8b50da": {
			pri50: "#f0e7fa",
			pri500: "#752dd3",
			pri700: "#5d1ec4",
			pri800: "#4f17bd",
			sec700: "#679f00",
			sec900: "#256b00",
		},

		"#f69400": {
			pri50: "#fef2e0",
			pri500: "#f28800",
			pri700: "#e66900",
			pri800: "#dd4f00",
			sec700: "#0062f6",
			sec900: "#203ed7",
		},

		"#000000": {
			pri50: "#f5f5f5",
			pri500: "#555555",
			pri700: "#262626",
			pri800: "#000000",
			sec700: "#434343",
			sec900: "#000000",
		},

		logo: Resources.logo,
		full_logo: Resources.full_logo,

		//PROFILE.................................................................

		username: "kloverity",
		dp: Resources.dp,
		ideas: "",
		followers: "",
		engagements: "",
		citations: "",
	});

	return (
		<Brim.Provider value={[control, setcontrol]}>
			{props.children}
		</Brim.Provider>
	);
};
