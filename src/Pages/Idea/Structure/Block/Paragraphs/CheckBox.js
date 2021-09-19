import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableNativeFeedback } from "react-native";

import Icon from "../../../../../Components/Style/Icon";

export default function CheckBox({ value, tint, type, checked, fS, fF, c }) {
	const [check, setcheck] = useState(checked);

	function toggleCheckbox() {
		setcheck((p) => (p === true ? false : true));
	}

	return (
		<View style={x.checkbox}>
			{type === "query" && (
				<TouchableNativeFeedback
					background={TouchableNativeFeedback.Ripple(tint)}
					onPress={toggleCheckbox}
				>
					<View style={x.check}>
						<View style={x.tick}>
							{check === true && (
								<Icon name="check" color={"lightslategrey"} color={tint} />
							)}
						</View>
					</View>
				</TouchableNativeFeedback>
			)}

			<Text style={{ ...x.text, fontSize: fS, fontFamily: fF, color: c }}>
				{value}
			</Text>

			{type === "clause" && (
				<TouchableNativeFeedback
					background={TouchableNativeFeedback.Ripple(tint)}
					onPress={toggleCheckbox}
				>
					<View style={x.check}>
						<View style={x.tick}>
							{check === true && (
								<Icon name="check" color={"lightslategrey"} color={tint} />
							)}
						</View>
					</View>
				</TouchableNativeFeedback>
			)}
		</View>
	);
}

const x = StyleSheet.create({
	checkbox: {
		flex: 1,
		flexDirection: "row",
		margin: 10,
		borderColor: "lightslategrey",
		borderRadius: 3,
		paddingLeft: 10,
		paddingRight: 10,
		padding: 5,
		backgroundColor: "white",
		elevation: 1,
		borderWidth: 0.3,
		alignItems: "center",
	},

	check: {
		height: 23,
		width: 23,
		margin: 10,
		marginTop: 10,
		borderWidth: 0.3,
		borderRadius: 2,
		position: "relative",
	},

	tick: {
		position: "absolute",
		right: 2,
	},

	text: {
		lineHeight: 26,
		maxWidth: 340,
		fontSize: 13,
		paddingLeft: 5,
		paddingRight: 5,
		flex: 1,
	},
});
