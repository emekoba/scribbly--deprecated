import React, { useContext, useState } from "react";
import {
	StyleSheet,
	View,
	TouchableOpacity,
	ScrollView,
	Image,
	Alert,
	ImageBackground,
} from "react-native";

import BlockList from "./BlockList";
import PlainSheet from "./PlainSheet/PlainSheet";
import CardOptions from "./CardOptions/CardOptions";
import Icon from "../../Components/Style/Icon";
import Float from "./Float";
import { Resources } from "../../Resources/Resources";
import { Brim } from "../../State/Control";

export default function canvas({ navigation, route }) {
	const R = route.params,
		paragraphs = R.paragraphs,
		type = R.type,
		settings = R.settings,
		contributor = R.contributor,
		structure = R.structure,
		tint = R.tint;

	const [control] = useContext(Brim);

	const [canvas, setcanvas] = useState({
		cards: {},

		board: {
			scroll: true,
			zoom: 1,
		},

		background: {
			none: null,
			one: Resources.background2,
			two: Resources.background5,
			three: Resources.background6,
			four: Resources.background7,
		},
	});

	const [blocklist, setblocklist] = useState({
		isOpen: false,
	});

	const [cardoptions, setcardoptions] = useState({
		isOpen: false,
	});

	const SHEETS = getSheets();

	navigation.setOptions({
		title: "",

		headerStyle: { backgroundColor: control.primary, elevation: 0 },

		headerRight: () => (
			<View style={x.header}>
				<TouchableOpacity style={x.header_icon} onPress={openBlockList}>
					<Icon name="3" color={tint} />
				</TouchableOpacity>

				<TouchableOpacity
					style={{ ...x.header_icon, width: 65 }}
					onPress={tidyLayout}
				>
					<Icon name="2" color={tint} />
				</TouchableOpacity>

				<TouchableOpacity style={x.header_icon} onPress={openCardOptions}>
					<Icon name="1" color={tint} />
				</TouchableOpacity>

				{contributor.dp !== "" && (
					<Image
						source={contributor.dp}
						style={{
							...x.header_icon,
							borderWidth: 0.5,
						}}
					/>
				)}
			</View>
		),
	});

	function tidyLayout() {
		Alert.alert("yo!", "Dont really know what to use this for yet", [
			{
				text: "oh, ok",
			},
		]);
	}

	function openBlockList() {
		setblocklist({ isOpen: true });
	}

	function openCardOptions() {
		setcardoptions({ isOpen: true });
	}

	function zoomIn() {}

	function zoomOut() {
		setplainsheet({ ...canvas, board: { ...canvas.board, zoom: 0.9 } });
	}

	function getSheets() {
		return (
			<>
				<PlainSheet
					paragraphs={paragraphs}
					type={type}
					settings={settings}
					tint={tint}
				/>

				<PlainSheet
					paragraphs={paragraphs}
					type={type}
					settings={settings}
					tint={tint}
				/>
			</>
		);
	}

	function createNewCard() {}

	return (
		<View style={x.canvas}>
			<ImageBackground
				style={{ width: "100%", height: "100%" }}
				source={canvas.background.two}
			>
				<ScrollView pagingEnabled={true} showsVerticalScrollIndicator={false}>
					{SHEETS}

					<BlockList
						bC={"white"}
						blocklist={blocklist}
						setblocklist={setblocklist}
						structure={structure}
						settings={settings}
					/>

					{cardoptions.isOpen === true && (
						<CardOptions
							tint={tint}
							setcardoptions={setcardoptions}
							createNewCard={createNewCard}
						/>
					)}
				</ScrollView>

				<Float tint={tint} zoomIn={zoomIn} zoomOut={zoomOut} />
			</ImageBackground>
		</View>
	);
}

const x = StyleSheet.create({
	canvas: {
		flex: 1,
	},

	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		height: "100%",
		alignItems: "center",
		paddingRight: 20,
	},

	header_icon: {
		borderWidth: 0.5,
		// elevation: 1,
		borderColor: "lightslategrey",
		height: 30,
		width: 33,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 2,
		marginLeft: 15,
	},
});
