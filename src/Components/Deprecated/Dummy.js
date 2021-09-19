import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Resources } from "../../Resources/Resources";
import Oof from "./Oof";

const Dummy = React.forwardRef((props, ref) => {
	const [image, setimage] = useState([
		{ image: Resources.background4, desc: "bruh" },
	]);

	return <View ref={ref} style={x.dummy}></View>;
});

export default Dummy;

const x = StyleSheet.create({
	dummy: {
		height: 200,
		width: "90%",
		backgroundColor: "lightslategrey",
		borderRadius: 10,
	},
});

{
	/* <Slider
				data={image}
				timer={2000}
				imageKey={"image"}
				local={false}
				// width={screenWidth}
				separator={0}
				loop={true}
				autoscroll={true}
				// currentIndexCallback={index => console.log('Index', index)}
				// onPress={item => alert(JSON.stringify(item))}
				indicator
				animation
			/> */
}

{
	/* <Oof /> */
}
