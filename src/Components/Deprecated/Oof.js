import React, { Component } from "react";
import {
	SafeAreaView,
	Dimensions,
	StyleSheet,
	ScrollView,
	View,
} from "react-native";

import { FlatListSlider } from "react-native-flatlist-slider";

export default class extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					image:
						"https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
				},
				{
					image:
						"https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80",
				},
				{
					image:
						"https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
				},
				{
					image:
						"https://images.unsplash.com/photo-1568700942090-19dc36fab0c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
				},
				{
					image:
						"https://images.unsplash.com/photo-1584271854089-9bb3e5168e32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
				},
			],
		};
	}

	render() {
		const screenWidth = Math.round(Dimensions.get("window").width);
		return (
			<View>
				<FlatListSlider
					data={this.state.data}
					timer={5000}
					onPress={() => null}
					indicatorContainerStyle={{ position: "absolute", bottom: 20 }}
					indicatorActiveColor={"#8e44ad"}
					indicatorInActiveColor={"#ffffff"}
					indicatorActiveWidth={30}
					animation
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	separator: {
		height: 20,
	},
	contentStyle: {
		paddingHorizontal: 16,
	},
});

{
	/* <FlatListSlider
	data={this.state.data}
	timer={2000}
	imageKey={"image"}
	local={false}
	width={screenWidth}
	separator={0}
	loop={true}
	autoscroll={true}
	currentIndexCallback={(index) => console.log("Index", index)}
	onPress={(item) => alert(JSON.stringify(item))}
	indicator
	animation
/>
<FlatListSlider
	data={this.state.data}
	width={275}
	timer={4000}
	component={<Preview />}
	onPress={(item) => alert(JSON.stringify(item))}
	indicatorActiveWidth={40}
	contentContainerStyle={styles.contentStyle}
/> */
}
