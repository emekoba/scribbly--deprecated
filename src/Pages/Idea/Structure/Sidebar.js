import React from "react";
import {
	StyleSheet,
	View,
	Text,
	TouchableNativeFeedback,
	ScrollView,
	Switch,
} from "react-native";
import Modal from "react-native-modal";

import Icon from "../../../Components/Style/Icon";

export default function SideBar({ bC, sidebar, setsidebar, idea, setidea }) {
	// let bC = getStyle("bC");

	function getStyle(args) {
		let x;

		switch (args) {
			case "bC":
				x = settings.background.alt;

				x = "white";
			default:
				break;
		}

		return x;
	}

	function closeSidebar() {
		setsidebar({ ...sidebar, isOpen: false });
	}

	function toggleIndent() {
		setidea((p) => ({
			...idea,
			book: {
				...idea.book,
				block: {
					...idea.book.block,
					indent: p.book.block.indent === true ? false : true,
				},
			},
		}));
	}

	function toggleStroke() {
		setidea((p) => ({
			...idea,
			book: {
				...idea.book,
				block: {
					...idea.book.block,
					stroke: p.book.block.stroke === true ? false : true,
				},
			},
		}));
	}

	function toggleBreak() {
		setidea((p) => ({
			...idea,
			book: {
				...idea.book,
				block: {
					...idea.book.block,
					break: p.book.block.break === true ? false : true,
				},
			},
		}));
	}

	function toggleCollapse() {
		setidea((p) => ({
			...idea,
			book: {
				...idea.book,
				block: {
					...idea.book.block,
					collapse: p.book.block.collapse === true ? false : true,
				},
			},
		}));
	}

	function toggleHighlight() {
		setidea((p) => ({
			...idea,
			book: {
				...idea.book,
				block: {
					...idea.book.block,
					highlight: p.book.block.highlight === true ? false : true,
				},
			},
		}));
	}

	function toggleTint() {
		setidea((p) => ({
			...idea,
			book: {
				...idea.book,
				block: {
					...idea.book.block,
					sidebar: {
						...idea.book.block.sidebar,
						multicolor: p.book.block.sidebar.multicolor === true ? false : true,
					},
				},
			},
		}));
	}

	function plus() {
		if (idea.book.block.text.size <= 16) {
			setidea((p) => ({
				...idea,
				book: {
					...idea.book,
					block: {
						...idea.book.block,
						text: { ...idea.book.block.text, size: p.book.block.text.size + 1 },
					},
				},
			}));
		}
	}

	function minus() {
		if (idea.book.block.text.size >= 14) {
			setidea((p) => ({
				...idea,
				book: {
					...idea.book,
					block: {
						...idea.book.block,
						text: { ...idea.book.block.text, size: p.book.block.text.size - 1 },
					},
				},
			}));
		}
	}

	return (
		<Modal
			isVisible={sidebar.isOpen}
			animationType="slide"
			animationIn="slideInRight"
			animationOut="slideOutRight"
			backdropOpacity={0.3}
			onBackButtonPress={closeSidebar}
			onBackdropPress={closeSidebar}
			useNativeDriver={true}
			style={{ margin: 0, alignItems: "flex-end" }}
		>
			<View style={{ ...x.sidebar, backgroundColor: bC }}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<Text style={[x.title]}>Block</Text>

					<View style={[x.item, x.sub, x.div]}>
						<View style={[x.sub_title]}>
							<Text style={[x.item_txt, x.bold]}>font</Text>
						</View>

						<View style={[x.sub, x.item]}>
							<Text style={[x.item_txt]}>family</Text>
						</View>

						<View style={[x.sub, x.item]}>
							<Text style={[x.item_txt]}>color</Text>
						</View>

						<View style={[x.sub, x.item, x.tug]}>
							<Text style={[x.item_txt]}>size</Text>

							<View style={[x.toggle, x.tug]}>
								<TouchableNativeFeedback
									onPress={minus}
									background={TouchableNativeFeedback.Ripple("grey")}
								>
									<View style={[x.button]}>
										<Icon name="side_minus" />
									</View>
								</TouchableNativeFeedback>

								<TouchableNativeFeedback
									onPress={plus}
									background={TouchableNativeFeedback.Ripple("grey")}
								>
									<View style={[x.button]}>
										<Icon name="side_plus" />
									</View>
								</TouchableNativeFeedback>
							</View>
						</View>

						<View style={{ height: 20 }} />
					</View>

					<View style={[x.item, x.sub, x.div]}>
						<View style={{ height: 20 }} />

						<View style={[x.sub_title]}>
							<Text style={[x.item_txt, x.bold]}>sidebar</Text>
						</View>

						<View style={[x.sub, x.item]}>
							<Oreo name="multicolor" style={{ paddingLeft: 0 }}>
								<Switch
									onValueChange={toggleTint}
									value={idea.book.block.sidebar.multicolor}
									thumbColor="#8293ee"
								/>
							</Oreo>
						</View>

						<View style={[x.sub, x.item]}>
							<Text style={[x.item_txt]}>tint</Text>
						</View>

						<View style={{ height: 20 }} />
					</View>

					<View style={[x.div]}>
						<Oreo name="highlight">
							<Switch
								onValueChange={toggleHighlight}
								value={idea.book.block.highlight}
								thumbColor="#8293ee"
							/>
						</Oreo>

						<Oreo name="break">
							<Switch
								onValueChange={toggleBreak}
								value={idea.book.block.break}
								thumbColor="#8293ee"
							/>
						</Oreo>

						<Oreo name="indent">
							<Switch
								onValueChange={toggleIndent}
								value={idea.book.block.indent}
								thumbColor="#8293ee"
							/>
						</Oreo>

						<Oreo name="stroke">
							<Switch
								onValueChange={toggleStroke}
								value={idea.book.block.stroke}
								thumbColor="#8293ee"
							/>
						</Oreo>

						<Oreo name="collapsible">
							<Switch
								onValueChange={toggleCollapse}
								value={idea.book.block.collapse}
								thumbColor="#8293ee"
							/>
						</Oreo>
					</View>
				</ScrollView>
			</View>
		</Modal>
	);
}

function Oreo(props) {
	return (
		<View style={[x.item, x.sub, { ...props.style }]}>
			<View style={[x.sub_title]}>
				<Text style={[x.item_txt]}>{props.name}</Text>
				{props.children}
			</View>
		</View>
	);
}

const x = StyleSheet.create({
	sidebar: {
		width: 250,
		height: "100%",
		padding: 10,
	},

	item: {
		minHeight: 60,
		justifyContent: "center",
	},

	item_txt: {
		color: "lightslategrey",
		fontFamily: "Ubuntu",
	},

	title: {
		fontWeight: "bold",
		fontSize: 17,
		marginTop: 20,
		marginBottom: 20,
		color: "#8293ee",
		fontFamily: "Ubuntu_B",
	},

	div: {
		borderBottomWidth: 0.5,
		borderColor: "#8293ee",
		paddingTop: 20,
	},

	sub: {
		paddingLeft: 20,
	},

	sub_title: {
		// borderWidth: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		paddingRight: 10,
		fontSize: 16,
		fontWeight: "bold",
		paddingBottom: 10,
		alignItems: "center",
	},

	tug: {
		flexDirection: "row",
		// borderWidth: 1,
		justifyContent: "space-between",
		alignItems: "center",
		marginRight: 5,
	},

	toggle: {
		borderWidth: 0.5,
		borderColor: "lightslategrey",
		height: 40,
		width: 80,
		borderRadius: 5,
	},

	button: {
		flex: 1,
		height: "100%",
		// borderWidth: 1,
		justifyContent: "center",
		alignItems: "center",
	},

	bold: {
		fontWeight: "bold",
	},
});
