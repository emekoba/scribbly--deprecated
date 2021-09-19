import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Empty({ bC }) {
	return (
		<View style={{ ...x.empty, backgroundColor: bC }}>
			<Text style={x.empty_text}>Add New Idea</Text>
		</View>
	);
}

const x = StyleSheet.create({
	empty: {
		position: "relative",
		flex: 1,
		// justifyContent: "center",
		alignItems: "center",
		paddingTop: 80,
	},

	empty_text: {
		// color: "tomato",
		fontSize: 30,
		fontFamily: "Ubuntu",
		color: "lightslategrey",
	},
});
