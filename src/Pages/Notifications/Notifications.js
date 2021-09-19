import React, { useState } from "react";
import { StyleSheet, View, Text, Button, FlatList } from "react-native";

export default function Notifications() {
	const [notifications, setnotifications] = useState({
		"kloverity just followed you": {
			user: "kloverity",
			recipient: "",
			date: {
				time: "",
				day: "",
				month: "",
				year: "",
			},
		},
	});

	function getPost() {
		return;
		<FlatList data />;
	}

	return (
		<View style={x.container}>
			<Text style={x.text}>Notifications</Text>
		</View>
	);
}

const x = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},

	text: {
		color: "red",
		fontSize: 30,
		marginBottom: 40,
	},
});
