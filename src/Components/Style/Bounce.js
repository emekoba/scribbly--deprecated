import React, { useState } from "react";
import * as Animatable from "react-native-animatable";

export default function Bounce(props) {
	let animate;

	function handleViewRef(ref) {
		animate = ref;
	}

	function bounce() {
		animate.bounceIn(800);
	}

	return (
		<Animatable.View ref={handleViewRef}>{props.children}</Animatable.View>
	);
}
