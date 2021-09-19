import React, { useRef, useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableNativeFeedback } from "react-native";

import Dummy from "../../Components/Deprecated/Dummy";
import { fs, rdb } from "../../Components/Functional/Firebase";

export default function Profile() {
	let first = useRef("a");

	const [idea, setidea] = useState("");

	function turnBlack() {
		// if (first.current === "a") {
		first.current.setNativeProps({
			style: {
				backgroundColor: "red",
			},
		});
		// }
	}

	useEffect(() => {
		// fs.collection("ideas")
		// 	.get()
		// 	.then((snapshot) => {
		// 		let changes = snapshot.docChanges();
		// 		changes.forEach((change) => {
		// 			if (change.type === "added") {
		// 				renderList(change.doc);
		// 			}
		// 		});
		// 	})
		// 	.catch();
		// rdb.ref().push({ name: "Russell", surname: "Emekoba" });
	}, []);

	function renderList(doc) {
		// console.log(doc.data());

		setidea(doc.data().scribbly[0]);
	}

	return (
		<View style={x.container}>
			<Text>Input from database: {idea} </Text>

			<Dummy ref={first} />

			<TouchableNativeFeedback
				background={TouchableNativeFeedback.Ripple("red")}
				onPress={turnBlack}
			>
				<View style={x.touch}>
					<Text style={x.text}>Text Here</Text>
				</View>
			</TouchableNativeFeedback>
		</View>
	);
}

const x = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
	},

	header: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		backgroundColor: "lightslategrey",
		zIndex: 1000,
	},

	text: {
		color: "red",
		fontSize: 30,
		marginBottom: 40,
	},

	touch: {
		marginTop: 100,
	},
});
