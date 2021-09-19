import React, { useState, useContext } from "react";
import { StyleSheet, View, Text, Button, FlatList, Image } from "react-native";
import { Brim } from "../../State/Control";
import { Resources } from "../../Resources/Resources";

export default function Topic({ navigation }) {
	const [control] = useContext(Brim);

	navigation.setOptions({
		title: "",

		headerStyle: {
			backgroundColor: control.primary,
			elevation: 0,
			height: 200,
		},

		headerLeftContainerStyle: {
			justifyContent: "flex-start",
			paddingTop: 20,
		},
	});

	function getPost() {
		return;
		<FlatList data />;
	}

	return (
		<View style={x.topic}>
			<Text style={x.text}>Topic</Text>
		</View>
	);
}

const x = StyleSheet.create({
	topic: {
		flex: 1,
		backgroundColor: "rgba(231, 238, 241, 0.938)",
		alignItems: "center",
		justifyContent: "center",
	},

	text: {
		color: "red",
		fontSize: 30,
		marginBottom: 40,
	},

	logo: {
		width: 100,
		height: 17,
	},

	user: {
		right: 15,
		borderWidth: 1,
		height: 26,
		width: 26,
		borderRadius: 50,
		backgroundColor: "white",
		justifyContent: "center",
	},
});
