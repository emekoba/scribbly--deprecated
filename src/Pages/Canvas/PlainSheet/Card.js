import React, { useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableNativeFeedback,
} from "react-native";
import Draggable from "react-native-draggable";
import UrlPreview from "react-native-url-preview";

import Phone from "../../../Components/Style/constants/Phone";

export default function Card({
	value,
	type,
	settings,
	top,
	left,
	date,
	name,
	color,
	favicon,
}) {
	const [card, setcard] = useState({ height: 0, width: 0 });

	let innerContent = getInnerContent();

	let h = getStyle("h"),
		w = getStyle("w"),
		bC = getStyle("bC"),
		bo = getStyle("bo");

	// Image.getSize(value, (width, height) => {
	// 	console.log(height, width);
	// });

	function getStyle(args) {
		let x;

		switch (args) {
			case "bC":
				x = settings.block.color;
				// x = color;
				break;
			case "h":
				x = 350;
				x = Phone.height / 2.9;
				break;
			case "w":
				x = 450;
				x = Phone.width / 1.08;
				break;
			case "bo":
				x = color;
				break;
			default:
				break;
		}

		return x;
	}

	function setSize(e) {
		setcard({
			...card,
			height: e.nativeEvent.layout.height,
			width: e.nativeEvent.layout.width,
		});
	}

	function getInnerContent() {
		if (type === "text") {
			return (
				<TouchableNativeFeedback
					background={TouchableNativeFeedback.Ripple(color)}
					onPress={editText}
				>
					<Text style={x.text_card} onLayout={setSize}>
						{value}
					</Text>
				</TouchableNativeFeedback>
			);
		}

		if (type === "web") {
			return (
				<View style={x.web_card}>
					<View style={x.favicon}>
						<Image
							resizeMode="cover"
							source={favicon}
							style={{ height: "100%", width: "100%" }}
						/>
					</View>

					<TouchableNativeFeedback
						background={TouchableNativeFeedback.Ripple(color)}
						onPress={editLink}
					>
						<Text style={x.text_card}>{value}</Text>
					</TouchableNativeFeedback>

					{/* <UrlPreview text={value} containerStyle={{ minWidth: 50 }} /> */}
				</View>
			);
		}

		if (type === "image") {
			return (
				<TouchableNativeFeedback
					background={TouchableNativeFeedback.Ripple(color)}
					onPress={editImage}
				>
					<Image
						style={{
							...x.image_card,
							height: Phone.height / 2.9,
							width: Phone.width / 1.08,
						}}
						resizeMode="cover"
						source={value}
					/>
				</TouchableNativeFeedback>
			);
		}

		if (type === "audio") {
		}

		if (type === "doc") {
		}

		if (type === "citation") {
		}
	}

	function inView(isVisible) {
		console.log(value + " is now %s", isVisible ? "visible" : "hidden");
	}

	function editText() {}

	function editImage() {}

	function editLink() {}

	return (
		<View
			style={{
				...x.card,
				backgroundColor: bC,
				borderColor: bo,
				top: top + card.height,
				left: left + card.width,
			}}
		>
			<View style={x.info}>
				<Text style={x.name}>{name}</Text>
				<Text style={x.date}>{date}</Text>
			</View>

			{innerContent}
		</View>
	);
}

const x = StyleSheet.create({
	card: {
		borderTopWidth: 3,
		borderRadius: 3,
		position: "absolute",
		elevation: 5,
		padding: 5,
		paddingTop: 0,
	},

	info: {
		height: 30,
		flexDirection: "row",
		alignItems: "center",
		paddingLeft: 10,
		// backgroundColor: "white",
	},

	name: {
		fontSize: 10,
		// borderWidth: 1,
		flex: 1,
		fontWeight: "bold",
	},

	date: {
		fontSize: 10,
		// borderWidth: 1,
		width: 50,
	},

	text_card: {
		lineHeight: 26,
		maxWidth: 390,
		padding: 10,
		backgroundColor: "white",
		fontSize: 13,
		elevation: 3,
		// borderWidth: 0.3,
		borderColor: "lightslategrey",
	},

	web_card: {
		minWidth: 100,
		flexDirection: "row",
	},

	favicon: {
		height: 35,
		width: 35,
		margin: 5,
		marginLeft: 0,
	},

	image_card: {
		height: 300,
		width: 300,
		backgroundColor: "white",
	},
});
