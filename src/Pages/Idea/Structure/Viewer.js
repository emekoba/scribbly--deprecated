import React from "react";
import {
	StyleSheet,
	View,
	TouchableOpacity,
	Text,
	Image,
	ImageBackground,
} from "react-native";

import Icon from "../../../Components/Style/Icon";
import ZoomableView from "@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView";
import { Resources } from "../../../Resources/Resources";

export default function Viewer({ viewer, setviewer, top, left, theme }) {
	let height = 200;
	let width = 200;

	function closeViewer() {
		setviewer({ ...viewer, isOpen: false, type: "", media: "" });
	}

	return (
		<>
			{viewer.isOpen === true && (
				<>
					{viewer.type === "audio" && (
						<View style={{ ...x.audio, backgroundColor: "white" }}></View>
					)}

					{viewer.type === "image" && (
						<View style={{ ...x.image, top: 30, left: 30 }}>
							{/* <ZoomableView
								zoomEnabled={true}
								maxZoom={1.2}
								minZoom={1}
								zoomStep={0.1}
								initialZoom={1}
								movementSensibility={1}
								style={{
									// borderWidth: 1,
									// width: "50%",
									flexDirection: "row",
									alignItems: "center",
								}}
							> */}

							<Image
								source={viewer.media}
								resizeMode="contain"
								style={{
									height: height,
									width: width,
									borderRadius: 5,
								}}
							/>

							<View style={x.topboard}>
								<TouchableOpacity style={x.top_item} onPress={closeViewer}>
									<Icon name="close_viewer" color="tomato" />
								</TouchableOpacity>

								<TouchableOpacity style={x.top_item}>
									<Icon name="next_viewer" color="#8293ee" />
								</TouchableOpacity>
							</View>

							{/* </ZoomableView> */}
						</View>
					)}
				</>
			)}
		</>
	);
}

const x = StyleSheet.create({
	topboard: {
		// borderWidth: 1,
		height: 100,
		paddingLeft: 10,
		paddingRight: 10,
		justifyContent: "space-between",
		// flexDirection: "row",
		paddingBottom: 20,
	},

	top_item: {
		// borderWidth: 1,
		height: 30,
		width: 40,
		alignItems: "center",
		justifyContent: "center",
	},

	image: {
		position: "absolute",
		// borderWidth: 1,
		flexDirection: "row",
		alignItems: "center",
		borderColor: "red",
	},

	audio: {
		position: "absolute",
		height: 60,
		width: "100%",
		bottom: 0,
		borderTopWidth: 0.3,
		borderColor: "#8293ee",
	},
});
