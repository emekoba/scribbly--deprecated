import React from "react";
import { View, StyleSheet } from "react-native";

const Bruv = React.forwardRef((props, ref) => {
	return <View ref={ref} style={x.bruv}></View>;
});
export default Bruv;

const x = StyleSheet.create({
	bruv: {
		// borderWidth: 1,
		height: 80,
		position: "absolute",
		bottom: 0,
		width: "100%",
		backgroundColor: "lightblue",
	},
});
