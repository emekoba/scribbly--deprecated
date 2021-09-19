import React from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";

import Phone from "../../Components/Style/constants/Phone";

export default function Cover({ settings }) {
	function getStyle(args) {
		let x;

		switch (args) {
			case "bC":
				x = settings.background.color;
				break;

			case "c":
				x = settings.font.color;
				break;

			case "h":
				x = Phone.height;
				break;

			default:
				break;
		}

		return x;
	}

	return (
		<View
			style={{
				...x.cover,
				backgroundColor: getStyle("bC"),
				height: getStyle("h"),
			}}
		>
			<ImageBackground
				style={{ height: "100%", width: "100%" }}
				source={settings.background.image}
			>
				<View style={x.top}>
					<View style={x.top_left}>
						<Text style={{ ...x.top_left_text, color: getStyle("c") }}>
							{settings.ideaname}
						</Text>
					</View>

					<View style={x.top_right}>
						<Image style={x.dp} source={settings.dp} />
					</View>
				</View>

				<View style={x.bottom}></View>
			</ImageBackground>
		</View>
	);
}

const x = StyleSheet.create({
	cover: {
		flex: 1,
		backgroundColor: "lightslategrey",
	},

	top: {
		// borderWidth: 1,
		flex: 1,
		flexDirection: "row",
	},

	top_left: {
		// borderWidth: 1,
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},

	top_left_text: {
		// borderWidth: 1,
		fontSize: 70,
	},

	top_right: {
		// borderWidth: 1,
		flex: 0.5,
		padding: 10,
		paddingTop: 30,
	},

	dp: {
		height: 130,
		width: 130,
		borderRadius: 130 / 2,
	},

	bottom: {
		// borderWidth: 1,
		flex: 0.5,
	},
});
