import React from "react";
import {
	StyleSheet,
	View,
	Image,
	FlatList,
	Text,
	TouchableOpacity,
} from "react-native";
import Icon from "../../../../Components/Style/Icon";

export default function MediaBox({
	media,
	blocktype,
	citationTapped,
	mediaTapped,
	tint,
	openViewer,
}) {
	const useDescription = false;

	let M = Object.entries(media).length;

	let MediaItems = [];

	let bC = getStyle("bC"),
		aI = getStyle("aI");

	function getStyle(args) {
		let x;

		switch (args) {
			case "bC":
				x = tint;
				x = "rgba(231, 238, 241, 0.938)";
				// x = "#8293ee";

				break;

			case "aI":
				x = blocktype === "query" ? "flex-end" : null;
				break;

			default:
				break;
		}

		return x;
	}

	function getMedia() {
		media.map((med) => {
			if (med.type === "image") {
				MediaItems.push(
					<TouchableOpacity
						style={x.medtile}
						key={med.value}
						onPress={() => openViewer("image", med.value)}
					>
						<Image
							style={{
								...x.media_image,
								borderColor: bC,
							}}
							resizeMode="contain"
							key={med.name}
							source={med.value}
						/>

						{useDescription === true && (
							<Text style={x.description}>{med.name}</Text>
						)}
					</TouchableOpacity>
				);
			}

			if (med.type === "video") {
				MediaItems.push(
					<TouchableOpacity
						style={x.medtile}
						key={med.value}
						onPress={() => openViewer("video", med.value)}
					>
						<View key={med.value} style={[x.media_video, x.constant]}>
							<Icon name="video" />
						</View>

						{useDescription === true && (
							<Text style={x.description}>{med.name}</Text>
						)}
					</TouchableOpacity>
				);
			}

			if (med.type === "audio") {
				MediaItems.push(
					<TouchableOpacity
						style={x.medtile}
						key={med.value}
						onPress={() => openViewer("audio", med.value)}
					>
						<View key={med.value} style={[x.media_audio, x.constant]}>
							<Icon name="audio" />
						</View>

						{useDescription === true && (
							<Text style={x.description}>{med.name}</Text>
						)}
					</TouchableOpacity>
				);
			}

			if (med.type === "doc") {
				MediaItems.push(
					<TouchableOpacity
						style={x.medtile}
						key={med.value}
						onPress={() => openViewer("doc", med.value)}
					>
						<View key={med.value} style={[x.media_docs, x.constant]}>
							<Icon name="doc" />
						</View>

						{useDescription === true && (
							<Text style={x.description}>{med.name}</Text>
						)}
					</TouchableOpacity>
				);
			}
		});
	}
	getMedia();

	if (M === 0) {
		return null;
	} else {
		return (
			<View>
				{media[0].type === "citation" ? (
					<View style={x.citationBox}></View>
				) : (
					<View style={{ ...x.mediaBox, justifyContent: aI }}>
						{MediaItems}
					</View>
				)}
			</View>
		);
	}
}

const x = StyleSheet.create({
	citationBox: {
		// height: 90,
		// backgroundColor: 'lightblue'
	},

	mediaBox: {
		// borderWidth: 1,
		paddingRight: 10,
		paddingLeft: 10,
		paddingBottom: 10, //work this out soon
		flexDirection: "row",
		flexWrap: "wrap",
	},

	medtile: {
		alignItems: "center",
		margin: 5,
		// marginTop: 0,
		// borderWidth: 1,
	},

	description: {
		fontSize: 10,
		// borderWidth: 1,
		paddingTop: 5,
		maxWidth: 60,
		paddingLeft: 2,
		fontFamily: "Ubuntu",
	},

	media_image: {
		borderRadius: 5,
		borderWidth: 3,
		height: 45,
		width: 60,
	},

	media_video: {
		backgroundColor: "rgba(187, 196, 205, 0.438)",
	},

	media_audio: {
		backgroundColor: "lightgreen",
	},

	media_docs: {
		backgroundColor: "lightblue",
	},

	constant: {
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 5,
		height: 45,
		width: 60,
		// borderWidth: 1,
	},
});
