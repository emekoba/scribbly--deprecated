import React, { useState } from "react";
import {
	StyleSheet,
	View,
	TouchableOpacity,
	ScrollView,
	TextInput,
} from "react-native";
import Modal from "react-native-modal";

import Icon from "../../../Components/Style/Icon";
import Phone from "../../../Components/Style/constants/Phone";

export default function NewText({ closeOptions, addNewBlock }) {
	const [newtext, setnewtext] = useState({
		parent: "",
		background: "white",
		input: "",
	});

	let bC = getStyle("bC"),
		fF = getStyle("fF"),
		bD = getStyle("bD");

	function getStyle(args) {
		let x;

		switch (args) {
			case "bD":
				// x = text.background;
				x = "white";
				break;

			case "bC":
				x = newtext.background;
				x = "white";
				break;

			case "fF":
				x = newtext.fontFamily;
				break;

			default:
				break;
		}

		return x;
	}

	function closeModal() {
		closeOptions();
	}

	function footerPressed() {}

	return (
		<Modal
			isVisible={true}
			animationType="slide"
			animationIn="slideInRight"
			animationOut="slideOutRight"
			onBackButtonPress={closeModal}
			backdropOpacity={1}
			backdropColor={bD}
			useNativeDriver={true}
			style={{ margin: 0 }}
		>
			<View style={{ ...x.text, backgroundColor: bC }}>
				<View style={x.header}>
					<TouchableOpacity style={x.close_modal} onPress={closeModal}>
						<Icon name="close_modal" />
					</TouchableOpacity>
				</View>

				<ScrollView>
					<View
						style={{
							...x.inputfield,
							height: Phone.height,
						}}
					>
						<TextInput
							style={{ ...x.input, fontFamily: fF }}
							multiline={true}
							onChangeText={(text) => setnewtext({ ...newtext, input: text })}
							value={newtext.input}
							placeholder=".........."
							placeholderTextColor="tomato"
							spellCheck={true}
						/>
					</View>
				</ScrollView>

				<View style={x.footer}>
					<TouchableOpacity style={x.icon} onPress={footerPressed}>
						<Icon name="gen_5" />
					</TouchableOpacity>

					<TouchableOpacity style={x.icon} onPress={footerPressed}>
						<Icon name="gen_4" />
					</TouchableOpacity>

					<TouchableOpacity style={x.icon} onPress={footerPressed}>
						<Icon name="gen_3" />
					</TouchableOpacity>

					<TouchableOpacity style={x.icon} onPress={footerPressed}>
						<Icon name="gen_2" />
					</TouchableOpacity>

					<TouchableOpacity
						style={{ ...x.icon, width: 60 }}
						onPress={footerPressed}
					>
						<Icon name="gen_1" />
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	);
}

const x = StyleSheet.create({
	text: {
		flex: 1,
	},

	header: {
		height: 55,
		justifyContent: "space-around",
		alignItems: "center",
		borderColor: "lightslategrey",
		paddingTop: 5,
		flexDirection: "row",
		justifyContent: "flex-end",
		borderBottomWidth: 0.3,
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
		borderColor: "lightslategrey",
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
});
