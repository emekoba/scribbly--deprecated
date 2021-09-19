import React, { useRef, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

import Icon from "../Style/Icon";
import Phone from "../Style/constants/Phone";

export default function Float({ tint, zoomIn, zoomOut, other }) {
	const [float, setfloat] = useState({
		isOpen: false,
	});

	const floatRef = useRef();

	let animate;

	function handleViewRef(ref) {
		animate = ref;
	}

	function animation(args) {
		animate.bounceIn(800);
	}

	function floatButtonPressed() {
		animation();

		if (!float.isOpen) {
			floatRef.current.setNativeProps({
				style: {
					height: 280,
				},
			});

			setfloat({ isOpen: true });
		} else {
			floatRef.current.setNativeProps({
				style: {
					height: 60,
				},
			});

			setfloat({ isOpen: false });
		}
	}

	function getStyle(args) {
		let x;

		switch (args) {
			case "t":
				x = Phone.height / 2;
				break;

			default:
				break;
		}

		return x;
	}

	return (
		<View style={x.float} ref={floatRef}>
			{float.isOpen === true && (
				<>
					<Animatable.View
						style={x.sub_float_button}
						useNativeDriver={true}
						animation="bounceIn"
					>
						<TouchableOpacity onPress={zoomIn}>
							<Icon name="zoomIn_canvas" />
						</TouchableOpacity>
					</Animatable.View>

					<Animatable.View
						style={x.sub_float_button}
						useNativeDriver={true}
						animation="bounceIn"
					>
						<TouchableOpacity onPress={zoomOut}>
							<Icon name="zoomOut_canvas" />
						</TouchableOpacity>
					</Animatable.View>

					<Animatable.View
						style={x.sub_float_button}
						useNativeDriver={true}
						animation="bounceIn"
					>
						<TouchableOpacity onPress={other}>
							<Icon name="3_canvas" />
						</TouchableOpacity>
					</Animatable.View>

					<Animatable.View
						style={x.sub_float_button}
						useNativeDriver={true}
						animation="bounceIn"
					>
						<TouchableOpacity onPress={other}>
							<Icon name="4_canvas" />
						</TouchableOpacity>
					</Animatable.View>
				</>
			)}

			<Animatable.View
				style={x.float_button}
				ref={handleViewRef}
				useNativeDriver={true}
			>
				<TouchableOpacity activeOpacity={1} onPress={floatButtonPressed}>
					<Icon name="float_canvas" color={tint} />
				</TouchableOpacity>
			</Animatable.View>
		</View>
	);
}

const x = StyleSheet.create({
	float: {
		position: "absolute",
		// borderWidth: 1,
		right: 30,
		width: 60,
		height: 60,
		bottom: 50,
		justifyContent: "space-between",
		alignItems: "center",
	},

	float_button: {
		height: 55,
		width: 55,
		borderRadius: 55 / 2,
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

		elevation: 3,
	},

	sub_float_button: {
		height: 35,
		width: 35,
		borderRadius: 35 / 2,
		backgroundColor: "white",
		justifyContent: "center",
		alignItems: "center",
	},
});
