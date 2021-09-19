import React, { useState } from "react";
import {
	View,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";

import Icon from "../../Components/Style/Icon";

export default function NewIdea({ newidea, setnewidea, createIdea }) {
	const [input, setinput] = useState({
		name: "",
		description: "",
		tags: [],
	});

	function closeModal() {
		setnewidea({ ...newidea, isOpen: false });
	}

	function submit() {
		if (input.name !== "") {
			createIdea(input.name, input.description, input.tags);

			closeModal();

			setinput("");
		}
	}

	return (
		<Modal
			isVisible={newidea.isOpen}
			backdropOpacity={0.1}
			animationIn="bounceIn"
			animationOut="bounceOut"
			onBackButtonPress={closeModal}
			onBackdropPress={closeModal}
			useNativeDriver={true}
			style={{ alignItems: "center" }}
		>
			<View style={x.newIdea}>
				<View style={x.header}>
					<Text style={[x.title]}>New Idea</Text>

					<Icon name="new_pen" />
				</View>

				<View style={x.ideaname}>
					<TextInput
						style={x.input}
						multiline={true}
						onChangeText={(text) => setinput({ ...input, name: text })}
						value={input.name}
						placeholder="ideaname..."
					/>
				</View>

				<View style={x.description}>
					<TextInput
						style={x.input}
						multiline={true}
						onChangeText={(text) => setinput({ ...input, description: text })}
						value={input.description}
						placeholder="description..."
					/>
				</View>

				<View style={x.tags}></View>

				<View style={x.menu}>
					<TouchableOpacity activeOpacity={0.7} onPress={submit}>
						<Text style={x.button}>Done</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	);
}

const x = StyleSheet.create({
	newIdea: {
		height: 400,
		width: 300,
		backgroundColor: "white",
		borderRadius: 10,
	},

	title: {
		fontWeight: "bold",
		height: "100%",
		textAlignVertical: "center",
		color: "lightslategrey",
	},

	input: {
		// borderWidth: 1,
		flex: 1,
		textAlignVertical: "top",
		padding: 10,
		paddingTop: 20,
		fontSize: 15,
	},

	header: {
		// borderWidth: 1,
		height: 60,
		padding: 10,
		fontWeight: "bold",
		color: "lightslategrey",
		borderColor: "#8293ee",
		flexDirection: "row",
		justifyContent: "space-between",
	},

	ideaname: {
		borderLeftWidth: 4,
		flex: 1,
		borderColor: "#8293ee",
		marginBottom: 10,
	},

	description: {
		borderLeftWidth: 4,
		flex: 2,
		marginBottom: 10,
		borderColor: "#8293ee",
	},

	tags: {
		// borderWidth: 1,
		flex: 1.5,
		borderRightWidth: 4,
		borderColor: "#8293ee",
		marginBottom: 10,
	},

	menu: {
		// borderWidth: 1,
		// flex: 0.8,
		alignItems: "flex-end",
		padding: 5,
		paddingRight: 10,
		paddingBottom: 10,
	},

	button: {
		height: 35,
		width: 60,
		// borderWidth: 1,
		textAlign: "center",
		textAlignVertical: "center",
		backgroundColor: "#8293ee",
		color: "white",
		borderRadius: 7,
		fontSize: 12,
	},
});
