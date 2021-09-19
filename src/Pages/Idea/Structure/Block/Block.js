import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableOpacity,
	TouchableNativeFeedback,
} from "react-native";
import * as Animatable from "react-native-animatable";

import Paragraphs from "./Paragraphs/Paragraphs";
import Icon from "../../../../Components/Style/Icon";

const Block = React.forwardRef((props, ref) => {
	const {
		parent,
		mode,
		settings,
		contributor,
		hierarchy,
		type,
		selectBlock,
		navigation,
		tint,
		children,
		paragraphs,
		openViewer,
		structure,
	} = props;

	const [block, setblock] = useState({
		isSwiped: false,
		isOpen: true,
	});

	const [margin] = useState([
		// 0, 5, 8, 12, 16, 20, 24, 30, 34, 38, 42, 46

		0, 5, 9, 13, 17, 21, 25, 31, 35, 39, 43, 47,
	]);

	let numOfChildren = children.length;

	let s_L = type === "clause" ? 4 : 0,
		s_R = type === "query" ? 4 : 0,
		s_bC = getStyle("s_bC"),
		bT = getStyle("bT"),
		mB = getStyle("mB"),
		mR = getStyle("mR"),
		mL = getStyle("mL");

	useEffect(() => {
		if (block.isOpen === true) {
		}

		if (block.isOpen === false) {
		}
	});

	useEffect(() => {
		// console.log(ref.current);
	});

	function getStyle(args) {
		let x;

		switch (args) {
			case "mL":
				if (
					settings.block.indent === true &&
					mode !== "preview" &&
					type === "clause"
				) {
					x = margin[hierarchy];
				} else {
					x = null;
				}
				break;

			case "mR":
				if (
					settings.block.indent === true &&
					mode !== "preview" &&
					type === "query"
				) {
					x = margin[hierarchy];
				} else {
					x = null;
				}
				break;

			case "bT":
				if (settings.block.stroke === true && mode !== "preview") {
					x = 0.5;
				} else {
					x = null;
				}
				break;

			case "mB":
				if (settings.block.break === true && mode !== "preview") {
					x = 5;
				} else {
					x = 0;
				}
				break;

			case "s_bC":
				if (settings.block.sidebar.multicolor === true) {
					x = tint;
				} else {
					x = settings.block.sidebar.singular_color;
				}
				break;

			default:
				break;
		}

		return x;
	}

	function blockTapped() {
		if (mode === "canvas_blocklist") {
		} else {
			navigation.navigate("Canvas", {
				paragraphs: paragraphs,
				settings: settings,
				contributor: contributor,
				type: type,
				tint: tint,
				structure: structure,
			});
		}
	}

	function blockLongTap() {
		// navigation.navigate("Canvas", {
		// 	paragraphs: paragraphs,
		// 	settings: settings,
		// 	contributor: contributor,
		// 	type: type,
		// 	tint: tint,
		// 	structure: structure,
		// });
	}

	function openViewerReference(type, media) {
		openViewer(type, media);
	}

	return (
		<Animatable.View
			ref={ref}
			animation={type === "clause" ? "fadeInRight" : "fadeInLeft"}
			duration={500}
			useNativeDriver={true}
			key={paragraphs[0].value}
			style={{
				marginTop: mB,
				marginRight: mR,
				marginLeft: mL,
			}}
		>
			{type === "clause" && (
				<TouchableNativeFeedback
					background={
						settings.block.highlight === true
							? TouchableNativeFeedback.Ripple(tint)
							: TouchableNativeFeedback.Ripple("rgba(231, 238, 241, 0.938)")
					}
					onPress={blockTapped}
					onLongPress={blockLongTap}
				>
					<View
						style={{
							...x.block,
							backgroundColor: settings.block.color,
							borderColor: s_bC,
							borderLeftWidth: s_L,
							borderRightWidth: s_R,
							elevation: mode === "canvas_blocklist" ? 1 : 0,
						}}
					>
						<View style={{ ...x.content, borderTopWidth: bT }}>
							<View style={x.topboard}>
								{contributor.dp !== "" && mode !== "preview" && (
									<View style={x.contributor}>
										<View style={x.con_name_dp}>
											<Image
												style={x.con_dp}
												resizeMode="cover"
												source={contributor.dp}
											/>

											<Text style={x.con_name}>{contributor.name}</Text>
										</View>

										<View style={x.votes}>
											<TouchableOpacity style={x.vote_btn}>
												<Icon name="block_upvote" />
											</TouchableOpacity>

											<Text style={{ fontSize: 10 }}>{hierarchy}</Text>

											<TouchableOpacity style={x.vote_btn}>
												<Icon name="block_downvote" />
											</TouchableOpacity>
										</View>
									</View>
								)}

								<Paragraphs
									mode={mode}
									paragraphs={paragraphs}
									settings={settings}
									type={type}
									tint={tint}
									openViewerReference={openViewerReference}
								/>
							</View>

							{mode !== "preview" && numOfChildren > 0 && (
								<View style={x.menu}>
									<Text style={{ ...x.children, color: tint }}>
										{numOfChildren}
									</Text>
								</View>
							)}
						</View>
					</View>
				</TouchableNativeFeedback>
			)}
			{type === "query" && (
				<TouchableNativeFeedback
					background={
						settings.block.highlight === true
							? TouchableNativeFeedback.Ripple(tint)
							: TouchableNativeFeedback.Ripple("rgba(231, 238, 241, 0.938)")
					}
					onPress={blockTapped}
					onLongPress={blockLongTap}
				>
					<View
						style={{
							...x.block,
							backgroundColor: settings.block.color,
							borderColor: s_bC,
							borderLeftWidth: s_L,
							borderRightWidth: s_R,
							elevation: mode === "canvas_blocklist" ? 1 : 0,
						}}
					>
						<View style={{ ...x.content, borderTopWidth: bT }}>
							<View style={x.topboard}>
								{contributor.dp !== "" && mode !== "preview" && (
									<View
										style={{
											...x.contributor,
											alignSelf: "flex-end",
										}}
									>
										<View style={x.votes}>
											<TouchableOpacity style={x.vote_btn}>
												<Icon name="block_upvote" />
											</TouchableOpacity>

											<Text style={{ fontSize: 10 }}>{hierarchy}</Text>

											<TouchableOpacity style={x.vote_btn}>
												<Icon name="block_downvote" />
											</TouchableOpacity>
										</View>

										<View style={x.con_name_dp}>
											<Text style={x.con_name}>{contributor.name}</Text>
											<Image
												style={x.con_dp}
												resizeMode="cover"
												source={contributor.dp}
											/>
										</View>
									</View>
								)}

								<Paragraphs
									mode={mode}
									paragraphs={paragraphs}
									settings={settings}
									type={type}
									tint={tint}
									openViewerReference={openViewerReference}
								/>
							</View>

							{mode !== "preview" && numOfChildren > 0 && (
								<View style={x.menu}>
									<Text
										style={{
											...x.children,
											textAlign: "left",
											marginLeft: 10,
											color: tint,
										}}
									>
										{numOfChildren}
									</Text>
								</View>
							)}
						</View>
					</View>
				</TouchableNativeFeedback>
			)}
		</Animatable.View>
	);
});

export default Block;

const x = StyleSheet.create({
	block: {
		// borderWidth: 1,
		flexDirection: "row",
		backgroundColor: "white",
		// borderTopRightRadius: 10,
		// borderTopLeftRadius: 10,
		borderRadius: 5,
		borderColor: "#8293ee",
	},

	sidebar: {
		backgroundColor: "tomato",
		width: 4,
	},

	content: {
		// borderWidth: 1,
		flex: 1,
		justifyContent: "center",
	},

	topboard: {
		// borderWidth: 1,
		minHeight: 70,
		justifyContent: "center",
	},

	contributor: {
		// borderWidth: 1,
		paddingBottom: 0,
		padding: 3,
		paddingTop: 5,
		justifyContent: "space-between",
		width: "100%",
		flexDirection: "row",
	},

	con_name_dp: {
		// borderWidth: 1,
		flexDirection: "row",
		alignItems: "center",
		minWidth: 60,
		justifyContent: "space-between",
	},

	con_dp: {
		borderRadius: 50,
		// borderTopLeftRadius: 0,
		width: 23,
		height: 23,
		borderWidth: 1,
		margin: 6,
	},

	con_name: {
		fontSize: 11,
		// fontFamily: "Ubuntu",
		fontWeight: "bold",
	},

	votes: {
		// borderWidth: 1,
		height: 35,
		width: 80,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},

	vote_btn: {
		// borderWidth: 1,
		height: "100%",
		width: 30,
		justifyContent: "center",
		alignItems: "center",
	},

	menu: {
		// borderWidth: 1,
		height: 15,
	},

	children: {
		textAlign: "right",
		marginRight: 10,
		fontSize: 10,
		fontWeight: "bold",
	},
});
