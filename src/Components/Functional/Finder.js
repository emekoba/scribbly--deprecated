import React from "react";
import { StyleSheet, TextInput, Keyboard } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";

import Icon from "../Style/Icon";

export default function Finder({ finder, setfinder }) {
	let animate;

	function handleViewRef(ref) {
		animate = ref;
	}

	function bounce() {
		animate.bounceIn(800);
	}

	function slideBack() {
		animate.bounceOutRight(800);
	}

	function xPressed() {
		bounce();
		// slideBack();

		setTimeout(() => {
			setfinder({ ...finder, isOpen: false, input: "" });

			Keyboard.dismiss();
		});
	}

	return (
		<Animatable.View
			style={x.finder}
			animation="slideInRight"
			duration={300}
			ref={handleViewRef}
			useNativeDriver={true}
		>
			<TextInput
				style={x.input}
				onChangeText={(text) => setfinder({ ...finder, input: text })}
				value={finder.input}
				placeholder="search list..."
				placeholderTextColor="lightslategrey"
				autoFocus={true}
			/>

			<TouchableOpacity style={x.close} onPress={xPressed}>
				<Icon name="close_finder" />
			</TouchableOpacity>
		</Animatable.View>
	);
}

const x = StyleSheet.create({
	finder: {
		position: "absolute",
		width: "100%",
		alignSelf: "center",
		backgroundColor: "white",
		borderRadius: 5,
		flexDirection: "row",
		borderTopWidth: 0.3,
		borderBottomWidth: 0.3,
		borderColor: "lightslategrey",
		height: 50,
		// elevation: 2,
	},

	input: {
		paddingLeft: 20,
		fontSize: 13,
		flex: 1,
		fontFamily: "Nunito",
	},

	close: {
		height: "100%",
		width: 40,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 2,
	},
});
