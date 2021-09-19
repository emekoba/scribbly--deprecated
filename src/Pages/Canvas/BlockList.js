import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Modal from "react-native-modal";

import Block from "../Idea/Structure/Block/Block";

export default function BlockList({
	bC,
	blocklist,
	setblocklist,
	structure,
	settings,
}) {
	function closeBlockList() {
		setblocklist({ ...blocklist, isOpen: false });
	}

	return (
		<Modal
			isVisible={blocklist.isOpen}
			animationType="slide"
			animationIn="slideInLeft"
			animationOut="slideOutLeft"
			backdropOpacity={0.3}
			onBackButtonPress={closeBlockList}
			onBackdropPress={closeBlockList}
			useNativeDriver={true}
			style={{ margin: 0, alignItems: "flex-start" }}
		>
			<View style={{ ...x.blocklist, backgroundColor: bC }}>
				<FlatList
					data={structure}
					keyExtractor={(item) => item.paragraphs[0].value}
					showsVerticalScrollIndicator={false}
					renderItem={({ item }) => (
						<Block
							mode="canvas_blocklist"
							type={item.type}
							paragraphs={item.paragraphs}
							structure={structure}
							contributor={item.contributor}
							settings={settings}
							tint={"red"}
							children={0}
						/>
					)}
				/>
			</View>
		</Modal>
	);
}

const x = StyleSheet.create({
	blocklist: {
		width: 280,
		height: "100%",
		padding: 10,
	},
});
