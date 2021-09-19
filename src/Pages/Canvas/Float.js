import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { FAB, Portal, Provider } from "react-native-paper";

export default function Float({ tint }) {
	const [state, setState] = useState({ open: false });

	const onStateChange = ({ open }) => setState({ open });

	const { open } = state;

	return (
		<Provider>
			<Portal>
				<FAB.Group
					open={open}
					fabStyle={{ backgroundColor: tint }}
					style={x.float}
					icon={open ? "close" : "settings"}
					actions={[
						{ icon: "plus", onPress: () => console.log("Pressed add") },
						{
							icon: "star",
							label: "Star",
							onPress: () => console.log("Pressed star"),
						},
						{
							icon: "email",
							label: "Email",
							onPress: () => console.log("Pressed email"),
						},
						{
							icon: "bell",
							label: "Remind",
							onPress: () => console.log("Pressed notifications"),
						},
					]}
					onStateChange={onStateChange}
					onPress={() => {
						if (open) {
							// do something if the speed dial is open
						}
					}}
				/>
			</Portal>
		</Provider>
	);
}

const x = StyleSheet.create({
	float: {
		paddingRight: 20,
		paddingBottom: 20,
	},
});
