import React, { useState } from "react";
import {
	StyleSheet,
	View,
	TouchableOpacity,
	ScrollView,
	TextInput,
	Text,
	Image,
} from "react-native";
import Modal from "react-native-modal";

import Icon from "../Style/Icon";
import { Resources } from "../../Resources/Resources";
import Phone from "../Style/constants/Phone";
import Block from "../../Pages/Idea/Structure/Block/Block";

export default function Genesis({
	parent,
	settings,
	genesis,
	setgenesis,
	addNewBlock,
}) {
	const [input, setinput] = useState("");

	const [preview, setpreview] = useState(0);

	let bC = getStyle("bC"),
		fF = getStyle("fF"),
		bCT = getStyle("bCT"),
		bD = getStyle("bD");

	parent = "genesizs";

	function getStyle(args) {
		let x;

		switch (args) {
			case "bD":
				// x = genesis.background;
				x = "white";
				break;

			case "bC":
				x = genesis.background;
				x = "white";
				break;

			case "bCT":
				x = null;
				break;

			case "fF":
				x = genesis.fontFamily;
				break;

			default:
				break;
		}

		return x;
	}

	function closeModal() {
		setgenesis({ ...genesis, isOpen: false });
	}

	function newClause() {
		if (input !== "") {
			addNewBlock("clause", "genesis", input);
		}

		setinput("");

		closeModal();
	}

	function newQuery() {
		if (input !== "") {
			addNewBlock("query", "genesis", input);
		}

		setinput("");

		closeModal();
	}

	function setHeight(event) {
		setpreview(event.nativeEvent.layout.height);
	}

	return (
		<Modal
			isVisible={genesis.isOpen}
			animationType="slide"
			animationIn="slideInRight"
			animationOut="bounceOutDown"
			onBackButtonPress={closeModal}
			backdropOpacity={1}
			backdropColor={bD}
			useNativeDriver={true}
			style={{ margin: 0 }}
		>
			<View style={{ ...x.genesis, backgroundColor: bC }}>
				<View style={x.header}>
					<TouchableOpacity style={x.close_modal} onPress={closeModal}>
						<Icon name="close_modal" />
					</TouchableOpacity>
				</View>

				<ScrollView
					pagingEnabled={true}
					snapToOffsets={[0, 215 + preview]}
					decelerationRate="fast"
				>
					{parent !== "genesis" && (
						<View style={x.block_info}>
							<View style={x.preview} onLayout={setHeight}>
								<Block
									paragraphs={[
										{
											type: "checkbox",
											value: "hopefully this fucking works",
										},
									]}
									type="clause"
									mode="preview"
									settings={settings}
									tint="red"
									children=""
									contributor=""
								/>
							</View>

							<View style={x.block_information}>
								<View style={x.leftSide}></View>

								<View style={x.rightSide}>
									<View style={x.right_topSide}></View>

									<View style={x.right_bottomSide}>
										<TouchableOpacity
											style={x.submit}
											onPress={() => addNewBlock("query")}
										>
											<Text style={x.submit_text}>Q</Text>
										</TouchableOpacity>

										<TouchableOpacity
											style={x.submit}
											onPress={() => addNewBlock("clause")}
										>
											<Text style={x.submit_text}>C</Text>
										</TouchableOpacity>
									</View>
								</View>
							</View>
						</View>
					)}

					<View
						style={{
							...x.inputbox,
							backgroundColor: bCT,
							height: Phone.height,
						}}
					>
						<TextInput
							style={{ ...x.input, fontFamily: fF }}
							multiline={true}
							onChangeText={(text) => setinput(text)}
							value={input}
							placeholder="type anything.........."
							placeholderTextColor="rgba(187, 196, 905, 7.438)"
						/>
					</View>
				</ScrollView>

				<View style={x.footer}>
					<TouchableOpacity style={x.icon} onPress={newClause}>
						<Icon name="gen_5" />
					</TouchableOpacity>

					<TouchableOpacity style={x.icon} onPress={newClause}>
						<Icon name="gen_4" />
					</TouchableOpacity>

					<TouchableOpacity style={x.icon} onPress={newClause}>
						<Icon name="gen_3" />
					</TouchableOpacity>

					<TouchableOpacity style={x.icon} onPress={newClause}>
						<Icon name="gen_2" />
					</TouchableOpacity>

					<TouchableOpacity
						style={{ ...x.icon, width: 60 }}
						onPress={newClause}
					>
						<Icon name="gen_1" />
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	);
}

const x = StyleSheet.create({
	genesis: {
		flex: 1,
	},

	header: {
		height: 55,
		justifyContent: "space-around",
		alignItems: "center",
		borderColor: "lightslategrey",
		paddingTop: 5,
		flexDirection: "row",
		borderBottomWidth: 0.3,

		justifyContent: "flex-end",
	},

	close_modal: {
		padding: 15,
		paddingTop: 17,
	},

	icon: {
		borderWidth: 0.5,
		borderColor: "lightslategrey",
		height: 30,
		width: 33,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 2,
	},

	inputbox: {
		padding: 10,
		flex: 1,
	},

	input: {
		minHeight: 600,
		textAlignVertical: "top",
		padding: 10,
		paddingTop: 20,
	},

	footer: {
		height: 55,
		backgroundColor: "white",
		borderTopWidth: 0.3,
		borderColor: "#8293ee",
		justifyContent: "space-around",
		flexDirection: "row",
		alignItems: "center",
	},

	//.....................................................................................................................

	block_info: {
		flex: 1,
		backgroundColor: "rgba(187, 196, 205, 0.438)",
		// backgroundColor: "#8293ee",
	},

	preview: {
		margin: 5,
	},

	block_information: {
		height: 200,
		backgroundColor: "white",
		marginBottom: 5,
		flexDirection: "row",
	},

	leftSide: {
		borderRightWidth: 5,
		borderColor: "rgba(187, 196, 205, 0.438)",
		// borderColor: "#8293ee",

		flex: 2,
	},

	rightSide: {
		// borderWidth: 1,
		flex: 1,
	},

	right_topSide: {
		borderBottomWidth: 5,
		borderColor: "rgba(187, 196, 205, 0.438)",
		flex: 1,
		// borderColor: "#8293ee",
	},

	right_bottomSide: {
		// borderWidth: 1,
		flex: 1,
		justifyContent: "space-around",
		alignItems: "center",
		flexDirection: "row",
		paddingLeft: 10,
		paddingRight: 10,
	},

	submit: {
		// borderWidth: 1,
		height: 30,
		width: 30,
		backgroundColor: "tomato",
		borderRadius: 2,
		elevation: 3,
	},

	submit_text: {
		textAlign: "center",
		textAlignVertical: "center",
		fontSize: 13,
		flex: 1,
	},
});
