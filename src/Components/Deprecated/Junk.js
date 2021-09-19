//..............................................................................................
import React from "react";
import {
	StyleSheet,
	View,
	TextInput,
	TouchableOpacity,
	Text,
} from "react-native";
import * as Animatable from "react-native-animatable";

export default function Genesis({ genesis, setgenesis, addGenesis }) {
	let animate;

	function handleViewRef(ref) {
		animate = ref;
	}

	function bounce() {
		animate.bounceIn(500);
	}

	function getStyle(args) {
		let x;

		switch (args) {
			case "h":
				x = genesis.isOpen === true ? 100 : 0;
				break;

			default:
				break;
		}

		return x;
	}

	return (
		<Animatable.View
			ref={handleViewRef}
			animation="bounceInRight"
			useNativeDriver={true}
			style={x.genesis}
		>
			<View style={x.bruh}>
				<TextInput
					style={x.input}
					multiline={true}
					onChangeText={(text) => setgenesis({ ...genesis, input: text })}
					value={genesis.input}
					placeholder="..............."
					placeholderTextColor="tomato"
				/>

				<View style={x.submit}>
					<TouchableOpacity style={x.button} onPress={addGenesis}>
						<Text style={x.text}>Q</Text>
					</TouchableOpacity>

					<TouchableOpacity style={x.button}>
						<Text style={x.text}>C</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Animatable.View>
	);
}
const x = StyleSheet.create({
	genesis: {
		zIndex: 3,
		position: "absolute",
		width: "100%",
		padding: 20,
		minHeight: 120,
		// backgroundColor: "rgba(231, 238, 241, 0.938)",
	},

	bruh: {
		// borderWidth: 1,
		borderRadius: 5,
		backgroundColor: "white",
		borderColor: "lightslategrey",
		flexDirection: "row",
		elevation: 15,
	},

	input: {
		width: "100%",
		flex: 1,
		textAlignVertical: "top",
		padding: 15,
		backgroundColor: "white",
		borderWidth: 1,
		borderColor: "lightslategrey",
		borderRadius: 5,
	},

	submit: {
		// borderWidth: 1,
		width: 45,
		height: 80,
		alignSelf: "flex-end",
		justifyContent: "space-between",
		backgroundColor: "white",
		padding: 5,
		borderRadius: 5,
		// backgroundColor: "rgba(231, 238, 241, 0.938)",
	},

	button: {
		// borderWidth: 1,
		height: 30,
		width: "100%",
		backgroundColor: "tomato",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 2,
	},

	text: {
		// alignItems: "center",
		// justifyContent: "center",
		fontSize: 12,
	},
});

//..............................................................................................
import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "../Style/Icon";

export default function HeaderSettings({
	page,
	hdrsettings,
	closeHeaderSettings,
}) {
	function getStyle(args) {
		let x = 0;

		switch (args) {
			case "h":
				x = hdrsettings.isOpen === true ? 40 : 0;
				break;

			default:
				break;
		}

		return x;
	}

	return (
		<View style={{ ...x.settings, height: getStyle("h") }}>
			<View style={{ flex: 1 }}>
				<View style={x.row}></View>

				<View style={x.row}></View>
			</View>

			<TouchableOpacity style={x.close} onPress={closeHeaderSettings}>
				<Icon name="close_finder" />
			</TouchableOpacity>
		</View>
	);
}

const x = StyleSheet.create({
	settings: {
		// borderWidth: 0.8,
		borderColor: "lightslategrey",
		top: 10,
		position: "absolute",
		width: "92%",
		alignSelf: "center",
		backgroundColor: "white",
		zIndex: 5,
		borderRadius: 5,
		flexDirection: "row",
	},
});

//..............................................................................................

import React from "react";
import {
	StyleSheet,
	View,
	TextInput,
	TouchableOpacity,
	Text,
} from "react-native";
import * as Animatable from "react-native-animatable";

export default function Genesis({ genesis, setgenesis, addGenesis }) {
	let animate;

	function handleViewRef(ref) {
		animate = ref;
	}

	function bounce() {
		animate.bounceIn(500);
	}

	return (
		<Animatable.View
			ref={handleViewRef}
			animation="bounceInRight"
			useNativeDriver={true}
			style={x.genesis}
		>
			<View style={x.bruh}>
				<TextInput
					style={x.input}
					multiline={true}
					onChangeText={(text) => setgenesis({ ...genesis, input: text })}
					value={genesis.input}
					placeholder="..............."
					placeholderTextColor="tomato"
				/>

				<View style={x.submit}>
					<TouchableOpacity style={x.button} onPress={addGenesis}>
						<Text style={x.text}>Q</Text>
					</TouchableOpacity>

					<TouchableOpacity style={x.button}>
						<Text style={x.text}>C</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Animatable.View>
	);
}

const x = StyleSheet.create({
	genesis: {
		zIndex: 3,
		position: "absolute",
		width: "100%",
		padding: 10,
		minHeight: 100,
		borderColor: "rgba(231, 238, 241, 0.938)",
		borderWidth: 4,
		backgroundColor: "white",
		// elevation: 10,
	},

	bruh: {
		// borderWidth: 1,
		borderRadius: 5,
		backgroundColor: "white",
		borderColor: "lightslategrey",
		flexDirection: "row",
	},

	input: {
		width: "100%",
		flex: 1,
		textAlignVertical: "top",
		padding: 15,
		backgroundColor: "white",
		borderColor: "lightslategrey",
	},

	submit: {
		width: 38,
		height: 90,
		alignSelf: "flex-end",
		justifyContent: "space-between",
		backgroundColor: "white",
		borderRadius: 5,
	},

	button: {
		// borderWidth: 1,
		height: 35,
		width: "100%",
		backgroundColor: "#2f95dc",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 2,
		elevation: 2,
	},

	text: {
		// alignItems: "center",
		// justifyContent: "center",
		fontSize: 12,
	},

	button: {
		position: "absolute",
		bottom: 50,
		right: 40,
		height: 52,
		width: 52,
		borderRadius: 52 / 2,
		backgroundColor: "white",
		justifyContent: "center",
		alignItems: "center",

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	},
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	block_options: {
		// width: 100,
		// maxHeight: 100
		flex: 1,
	},

	block_options_top: {
		flex: 1,
		flexDirection: "row",
	},

	block_options_top_left: {
		flex: 1,
		borderRightWidth: 0.5,
		borderColor: "white",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "lightblue",
	},

	block_options_top_right: {
		flex: 1,
		// borderWidth: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "lightblue",
	},

	block_options_bottom: {
		flex: 1,
		// borderWidth: 1,
		flexDirection: "row",
	},

	block_options_bottom_left: {
		flex: 1,
		borderRightWidth: 0.5,
		borderTopWidth: 0.5,
		borderColor: "white",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "lightblue",
	},

	block_options_bottom_right: {
		flex: 1,
		borderTopWidth: 0.5,
		borderColor: "white",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "lightblue",
	},
});

// Image.getSize("myUri", (width, height) => { setState({ width, height }) });

// {mode === "canvas_blocklist" ? (
// 	<View
// 		style={{
// 			...x.uber_block,
// 			backgroundColor: settings.block.color,
// 			borderColor: s_bC,
// 			borderLeftWidth: s_L,
// 			borderRightWidth: s_R,
// 		}}
// 	>
// 		<Paragraphs
// 			mode={mode}
// 			paragraphs={paragraphs}
// 			settings={settings}
// 			type={type}
// 			tint={tint}
// 		/>
// 	</View>
// ) : (

//
//
//
///
//
//

<Swipeable
	renderLeftActions={swipeLeft}
	renderRightActions={swipeRight}
	rightThreshold={30}
	friction={3}
	onSwipeableLeftOpen={false}
></Swipeable>;

function swipeLeft() {
	return (
		<View
			style={{
				width: 100,
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "tomato",
			}}
		>
			<TouchableOpacity>
				<Icon name="block_delete" />
			</TouchableOpacity>
		</View>
	);
}

function swipeRight() {
	return (
		// <View style={{backgroundColor: 'white', flexDirection: 'row'}}>
		<View style={x.block_options}>
			<View style={x.block_options_top}>
				<View style={x.block_options_top_left}>
					<TouchableOpacity onPress={blockTapped}>
						<Icon name="block_bookmark" />
					</TouchableOpacity>
				</View>

				<View style={x.block_options_top_right}>
					<TouchableOpacity onPress={blockLongTap}>
						<Icon name="block_book" />
					</TouchableOpacity>
				</View>

				<View style={x.block_options_top_left}>
					<TouchableOpacity onPress={blockTapped}>
						<Icon name="block_bookmark" />
					</TouchableOpacity>
				</View>

				<View style={x.block_options_top_right}>
					<TouchableOpacity onPress={blockTapped}>
						<Icon name="block_book" />
					</TouchableOpacity>
				</View>
			</View>

			<View style={x.block_options_bottom}>
				<View style={x.block_options_bottom_left}>
					<Icon name="block_book2" />
				</View>

				<View style={x.block_options_bottom_right}>
					<TouchableOpacity onPress={blockLongTap}>
						<Icon name="block_print" />
					</TouchableOpacity>
				</View>
			</View>
		</View>
		// </View>
	);
}

// <Card
// type="image"
// value={each.value}
// settings={settings}
// top={300}
// left={getPos("y")}
// date={"05/18/97"}
// name={each.name}
// color={tint}
// key={each.value}
// />;

// cards.push(
// 	<>
// 		<Card
// 			type="web"
// 			value={"https://www.quora.com/Why-is-sharing-ideas-important"}
// 			settings={settings}
// 			top={30}
// 			left={900}
// 			date={"26/11/15"}
// 			name={""}
// 			color={tint}
// 			key={"https://www.quora.com/Why-is-sharing-ideas-important"}
//			favicon={Resources.Profile8}
// 		/>

// 		<Card
// 			type="web"
// 			value={"https://www.npmjs.com/package/react-native-url-preview"}
// 			settings={settings}
// 			top={500}
// 			left={1000}
// 			date={"26/11/15"}
// 			name={""}
// 			color={tint}
// 			key={"https://www.npmjs.com/package/react-native-url-preview"}
// 		/>
// 	</>
// );
