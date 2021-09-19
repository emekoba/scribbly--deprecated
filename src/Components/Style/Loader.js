import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import Modal from "react-native-modal";

export default function Loader({ loading, opacity }) {
	const [colors] = useState([
		"lightslategrey",
		"black",
		"tomato",
		"limegreen",
		"dodgerblue",
	]);

	const [wheel, setwheel] = useState(colors[0]);

	useEffect(() => {
		// setInterval(() => {
		// 	setwheel(colors[Math.floor(Math.random() * colors.length)]);
		// }, 10000);
	}, []);

	return (
		<Modal
			isVisible={loading}
			backdropOpacity={opacity}
			animationIn="fadeIn"
			animationOut="fadeOut"
			useNativeDriver={true}
			hideModalContentWhileAnimating={true}
		>
			<ActivityIndicator size={50} color={wheel} />
		</Modal>
	);
}
