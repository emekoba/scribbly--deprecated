import React, { useState } from "react";
import {
	StyleSheet,
	View,
	TouchableOpacity,
	ScrollView,
	TextInput,
	Text,
	Image,
	Keyboard,
} from "react-native";
import Modal from "react-native-modal";

import Icon from "../../../Components/Style/Icon";
import Phone from "../../../Components/Style/constants/Phone";

export default function InputBox({ inputbox, setinputbox, addNewBlock }) {
	const [input, setinput] = useState("");

	const [preview, setpreview] = useState(0);

	let bC = getStyle("bC"),
		fF = getStyle("fF"),
		bCT = getStyle("bCT"),
		bD = getStyle("bD"),
		bBW = getStyle("bBW");

	function getStyle(args) {
		let x;

		switch (args) {
			case "bD":
				// x = inputbox.background;
				x = "white";
				break;

			case "bC":
				x = inputbox.background;
				x = "white";
				break;

			case "bCT":
				x = null;
				break;

			case "fF":
				x = inputbox.fontFamily;
				break;

			case "bBW":
				x = inputbox.parent === "genesis" ? 0.3 : null;
				break;

			default:
				break;
		}

		return x;
	}

	function closeModal() {
		setinputbox({ ...inputbox, isOpen: false });
	}

	function newClause() {
		Keyboard.dismiss();

		if (input !== "") {
			addNewBlock("clause", inputbox.parent, input);
		}

		setinput("");

		closeModal();
	}

	function newQuery() {
		Keyboard.dismiss();

		if (input !== "") {
			addNewBlock("query", inputbox.parent, input);
		}

		setinput("");

		closeModal();
	}

	function setHeight(event) {
		setpreview(event.nativeEvent.layout.height);
	}

	return (
		<Modal
			isVisible={inputbox.isOpen}
			animationType="slide"
			animationIn="slideInRight"
			animationOut="slideOutRight"
			onBackButtonPress={closeModal}
			backdropOpacity={1}
			backdropColor={bD}
			useNativeDriver={true}
			style={{ margin: 0 }}
		>
			<View style={{ ...x.inputbox, backgroundColor: bC }}>
				<View style={{ ...x.header, borderBottomWidth: bBW }}>
					<TouchableOpacity style={x.close_modal} onPress={closeModal}>
						<Icon name="close_modal" />
					</TouchableOpacity>
				</View>

				<ScrollView
					// pagingEnabled={true}
					// snapToOffsets={[0, 215 + preview]}
					decelerationRate="fast"
					// showsVerticalScrollIndicator={false}
				>
					{inputbox.parent !== "genesis" && (
						<View style={x.block_info}>
							<View style={x.preview} onLayout={setHeight}>
								{inputbox.block}
							</View>

							<View style={x.block_information}>
								<View style={x.leftSide}></View>

								<View style={x.rightSide}>
									<View style={x.right_topSide}>
										<TouchableOpacity style={x.delete}>
											<Icon name="gen_delete" />
										</TouchableOpacity>
									</View>

									<View style={x.right_bottomSide}>
										<TouchableOpacity style={x.submit} onPress={newQuery}>
											<Text style={x.submit_text}>Q</Text>
										</TouchableOpacity>

										<TouchableOpacity style={x.submit} onPress={newClause}>
											<Text style={x.submit_text}>C</Text>
										</TouchableOpacity>
									</View>
								</View>
							</View>
						</View>
					)}

					<View
						style={{
							...x.inputfield,
							backgroundColor: bCT,
							height: Phone.height,
						}}
					>
						<TextInput
							style={{ ...x.input, fontFamily: fF }}
							multiline={true}
							onChangeText={(text) => setinput(text)}
							value={input}
							placeholder=".........."
							placeholderTextColor="tomato"
							spellCheck={true}
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
	inputbox: {
		flex: 1,
	},

	header: {
		height: 55,
		justifyContent: "space-around",
		alignItems: "center",
		borderColor: "#8293ee",
		paddingTop: 5,
		flexDirection: "row",
		justifyContent: "flex-end",
	},

	close_modal: {
		padding: 15,
		paddingTop: 17,
	},

	inputfield: {
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

	icon: {
		borderWidth: 0.5,
		borderColor: "lightslategrey",
		height: 30,
		width: 33,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 2,
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
		justifyContent: "center",
		alignItems: "flex-end",
		paddingRight: 25,
	},

	delete: {
		height: 40,
		width: 40,
		borderRadius: 2,
		borderWidth: 0.5,
		// elevation: 3,
		justifyContent: "center",
		alignItems: "center",
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
