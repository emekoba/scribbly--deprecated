import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import Structure from "./Structure/Structure";
import Icon from "../../Components/Style/Icon";
import Finder from "../../Components/Functional/Finder";
import SideBar from "./Structure/Sidebar";
import Block from "./Structure/Block/Block";

export default function Idea({ navigation, route }) {
	const isFocused = useIsFocused();

	const { control, cover, ideaname, username, dp, structure } = route.params;

	const [colorwheel] = useState([
		"red",
		"limegreen",
		"dodgerblue",
		"#EEDD82",

		"#f032e6",
		"#fabebe",
		"#008080",
		"#e6beff",
		"#9a6324",
		"#fffac8",
		"#800000",
		"#aaffc3",
		"#808000",
		"#ffd8b1",
		"#000075",
		"#808080",
		"#ffffff",
		"#3cb44b",
		"#000000",
		"#f58231",
		"#e6194b",
		"#911eb4",
		"#46f0f0",
		"#ffe119",
		"#4363d8",
		"#dd82ee",
		"#bcf60c",

		"tomato",
		"yellow",
		"purple",
		"#1A1A1A",
		"brown",
		"teal",
		"goldenrod",
	]);

	const [idea, setidea] = useState({
		cover: {
			useCover: true,

			ad: false,

			useUsername: true,

			dp: "",

			ideaname: "",

			username: "",

			font: {
				color: cover.font.color,

				size: cover.font.size,

				contrast: cover.font.contrast,
			},

			background: {
				image: cover.background.image,
				color: cover.background.color,
				size: "contain",
			},
		},

		book: {
			background: {
				color: "rgba(231, 238, 241, 0.138)",
				color: "rgba(231, 238, 241, 0.938)",
				alt: "white",
			},

			block: {
				color: "white",
				text: {
					color: "black",
					size: 14,
					family: "Nunito",
					// family: "Ubuntu",
					// family: "Comfortaa",
					// family: "Cabin",
					// family: "DM",
					// family: "Ink",
					// family: "Life",
					// family: "Mali",
					// family: "Martel",
					family: null,
				},

				collapse: true,
				indent: true,
				break: true,
				stroke: false,
				highlight: false,

				sidebar: {
					multicolor: true, // cannot change to true unless indent is true
					singular_color: colorwheel[17],
					singular_color: "lightslategrey",

					// singular_color: "white", // change to white/current theme if you want to remove the sidebar
				},

				clause: {
					visible: false,
				},

				query: {
					visible: true,
				},
			},
		},
	});

	const [finder, setfinder] = useState({
		isOpen: false,
		input: "",
	});

	const [sidebar, setsidebar] = useState({
		isOpen: false,
	});

	let pT = getStyle("pT"),
		bC = getStyle("bC");

	if (isFocused) {
		navigation.dangerouslyGetParent().setOptions({ tabBarVisible: false });
	}

	navigation.setOptions({
		title: "",

		headerStyle: {
			backgroundColor: control.primary,
			elevation: 0,
			// height: 200,
		},

		// headerLeftContainerStyle: {
		// 	justifyContent: "flex-start",
		// 	paddingTop: 20,
		// },
		// headerShown: false,

		headerRight: () => (
			<View style={x.header}>
				<TouchableOpacity style={x.circle} onPress={openSidebar}>
					<Icon name="settings_idea" />
				</TouchableOpacity>

				<TouchableOpacity style={x.circle} onPress={openFinder}>
					<Icon name="finder_idea" />
				</TouchableOpacity>

				<TouchableOpacity style={x.header_icon} onPress={openCanvas}>
					<Icon name="plus_idea" />
				</TouchableOpacity>
			</View>
		),
	});

	//open canvas if structure is empty...
	useEffect(() => {
		if (
			Array.isArray(route.params.structure) &&
			route.params.structure.length
		) {
		} else {
			navigation.navigate("Canvas", {
				paragraphs: [],
				settings: idea.book,
				contributor: "",
				structure: structure,
				type: "clause",
				tint: "red",
			});
		}
	}, []);

	function getStyle(args) {
		let x;

		switch (args) {
			case "bC":
				x = idea.book.background.color;

				x = "white";
				break;

			case "pT":
				x = finder.isOpen === true ? 50 : 0;
				break;

			default:
				break;
		}

		return x;
	}

	function openFinder() {
		setfinder({ ...finder, isOpen: true });
	}

	function openSidebar() {
		setsidebar({ ...sidebar, isOpen: true });
	}

	function openCanvas() {
		navigation.navigate("Canvas", {
			paragraphs: [],
			settings: idea.book,
			contributor: "",
			structure: structure,
			type: "clause",
			tint: "red",
		});
	}

	return (
		<View style={{ ...x.idea, backgroundColor: bC, paddingTop: pT }}>
			<Structure
				dp={dp}
				ideaname={ideaname}
				username={username}
				pre_struct={structure}
				settings={idea.book}
				navigation={navigation}
				colors={colorwheel}
				filter={finder.input}
				sidebar={sidebar}
				setsidebar={setsidebar}
			/>

			<SideBar
				bC={control.card}
				sidebar={sidebar}
				setsidebar={setsidebar}
				idea={idea}
				setidea={setidea}
			/>

			{finder.isOpen && <Finder finder={finder} setfinder={setfinder} />}
		</View>
	);
}

const x = StyleSheet.create({
	idea: {
		flex: 1,
		position: "relative",
		// marginTop: 30,
	},

	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: 170,
		// borderWidth: 1,
		height: "100%",
		alignItems: "center",
		paddingRight: 20,
		// alignItems: "flex-start",
		// paddingTop: 20,
	},

	header_icon: {
		borderWidth: 0.5,
		borderColor: "lightslategrey",
		height: 30,
		width: 33,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 2,
	},

	circle: {
		// borderWidth: 0.5,
		borderColor: "lightslategrey",
		height: 32,
		width: 32,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 32 / 2,
	},
});
