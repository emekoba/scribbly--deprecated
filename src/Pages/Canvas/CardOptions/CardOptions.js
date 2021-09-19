import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";

import Icon from "../../../Components/Style/Icon";
import NewText from "./NewText";

export default function CardOptions({ tint, setcardoptions, createNewCard }) {
	const [options, setoptions] = useState({
		type: "buttons",
	});

	function closeOptions() {
		setcardoptions({ isOpen: false });
	}

	function addNewBlock() {}

	function newText() {
		setoptions({ ...options, type: "input" });
	}

	function newAudio() {
		setoptions({ ...options, type: "input" });
	}

	function newImage() {
		setoptions({ ...options, type: "input" });
	}

	function newWeb() {
		setoptions({ ...options, type: "input" });
	}

	function newDoc() {
		setoptions({ ...options, type: "input" });
	}

	function newVideo() {
		setoptions({ ...options, type: "input" });
	}

	return (
		<>
			{options.type === "buttons" && (
				<Modal
					isVisible={true}
					backdropOpacity={0.5}
					onBackButtonPress={closeOptions}
					style={{ alignItems: "center" }}
					onBackdropPress={closeOptions}
					useNativeDriver={true}
					animationIn="fadeIn"
					animationOut="fadeOut"
				>
					<View style={x.buttons}>
						<View style={x.m_header}>
							<Text style={x.m_title}>New Card</Text>
							<Icon name="card_canvas" color={tint} />
						</View>

						<View style={x.row}>
							<TouchableOpacity style={x.button} onPress={newWeb}>
								<Icon name="web_card" />
								<Text style={x.b_name}>web</Text>
							</TouchableOpacity>

							<TouchableOpacity style={x.button} onPress={newText}>
								<Icon name="text_card" />
								<Text style={x.b_name}>text</Text>
							</TouchableOpacity>

							<TouchableOpacity style={x.button} onPress={newImage}>
								<Icon name="image_card" />
								<Text style={x.b_name}>image</Text>
							</TouchableOpacity>
						</View>

						<View style={x.row}>
							<TouchableOpacity style={x.button} onPress={newAudio}>
								<Icon name="audio_card" />
								<Text style={x.b_name}>audio</Text>
							</TouchableOpacity>

							<TouchableOpacity style={x.button} onPress={newDoc}>
								<Icon name="doc_card" />
								<Text style={x.b_name}>document</Text>
							</TouchableOpacity>

							<TouchableOpacity style={x.button} onPress={newVideo}>
								<Icon name="video_card" />
								<Text style={x.b_name}>video</Text>
							</TouchableOpacity>
						</View>

						<View style={{ height: 30 }} />
					</View>
				</Modal>
			)}

			{options.type === "input" && (
				<NewText closeOptions={closeOptions} addNewBlock={addNewBlock} />
			)}
		</>
	);
}

const x = StyleSheet.create({
	buttons: {
		height: 270,
		width: 300,
		backgroundColor: "white",
		borderRadius: 10,
	},

	m_header: {
		// borderWidth: 1,
		height: 40,
		justifyContent: "space-between",
		padding: 10,
		paddingRight: 20,
		flexDirection: "row",
		marginBottom: 15,
	},

	m_title: {
		// borderWidth: 1,
		height: 25,
		textAlignVertical: "bottom",
		paddingLeft: 10,
		fontWeight: "bold",
		color: "lightslategrey",
	},

	row: {
		// borderWidth: 1,
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},

	button: {
		borderWidth: 0.5,
		// flex: 1,
		margin: 10,
		height: 75,
		width: 75,
		borderRadius: 10,
		borderColor: "lightslategrey",
		justifyContent: "center",
		alignItems: "center",
	},

	b_name: {
		// fontWeight: "bold",
		color: "lightslategrey",
		fontSize: 8,
		// borderWidth: 1,
		paddingTop: 5,
	},
});
