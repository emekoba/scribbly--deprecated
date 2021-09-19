import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Icon from "../../../Components/Style/Icon";

export default function Pin({ tint, top, left, right, type }) {
	return (
		<View
			style={{
				...x.pin,
				left: left,
				right: right,
				top: top,
			}}
		>
			{left !== null && (
				<View
					style={{
						...x.triangle,
						backgroundColor: tint,
						borderTopLeftRadius: 20,
						borderBottomLeftRadius: 20,
						borderTopRightRadius: 0,
						borderBottomRightRadius: 0,
					}}
				/>
			)}

			<View style={x.sphere}>
				<Icon name={type} />
			</View>

			{right !== null && (
				<View style={{ ...x.triangle, backgroundColor: tint }} />
			)}
		</View>
	);
}

const x = StyleSheet.create({
	pin: {
		position: "absolute",
		// borderWidth: 1,
		height: 50,
		width: 50,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		zIndex: 5,
	},

	sphere: {
		height: 30,
		width: 30,
		borderRadius: 30 / 2,
		backgroundColor: "white",
		justifyContent: "center",
		alignItems: "center",
		elevation: 2,
	},

	triangle: {
		height: 10,
		width: 10,
		borderTopRightRadius: 20,
		borderBottomRightRadius: 20,
		margin: 3,
	},
});
