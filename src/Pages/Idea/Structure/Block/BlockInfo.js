import React from "react";
import {
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
	ScrollView,
	TextInput,
	Text,
} from "react-native";
import Modal from "react-native-modal";

import Icon from "../../../../Components/Style/Icon";
import { Resources } from "../../../../Resources/Resources";

export default function BlockInfo({
	modal,
	setmodal,
	addNewBlock,
	closeModal,
}) {
	return (
		<Modal
			isVisible={modal.isOpen}
			animationType="slide"
			onBackButtonPress={closeModal}
			backdropColor="white"
			backdropOpacity={1}
			useNativeDriver={true}
			style={{ margin: 0 }}
		>
			<View style={x.block_info}>
				<View style={x.topside}>
					<TouchableOpacity style={x.close_modal} onPress={closeModal}>
						<Icon name="close_modal" />
					</TouchableOpacity>
				</View>

				<View style={x.bottomside}>
					<ScrollView snapToAlignment="start">
						<View style={x.preview}>{modal.block.preview}</View>

						<View style={x.block_information}>
							<View style={x.leftSide}></View>

							<View style={x.rightSide}>
								<View style={x.right_topSide}></View>

								<View style={x.right_bottomSide}>
									<TouchableOpacity
										style={x.submit}
										onPress={() => addNewBlock("query")}
									>
										<Text style={x.submit_text}>Q</Text>
									</TouchableOpacity>

									<TouchableOpacity
										style={x.submit}
										onPress={() => addNewBlock("clause")}
									>
										<Text style={x.submit_text}>C</Text>
									</TouchableOpacity>
								</View>
							</View>
						</View>

						<View style={x.inputbox}>
							<TextInput
								style={x.input}
								multiline={true}
								onChangeText={(text) =>
									setmodal({ ...modal, input: { ...modal.input, text: text } })
								}
								value={modal.input.text}
								placeholder="submit clause or query..."
								placeholderTextColor="tomato"
							/>
						</View>

						<View style={x.addMedia}>
							<ScrollView horizontal={true}>
								<TouchableOpacity>
									<Image
										style={x.media}
										resizeMode="cover"
										source={Resources.background3}
									/>
								</TouchableOpacity>

								<TouchableOpacity>
									<Image
										style={x.media}
										resizeMode="cover"
										source={Resources.background5}
									/>
								</TouchableOpacity>

								<TouchableOpacity>
									<Image
										style={x.media}
										resizeMode="cover"
										source={Resources.background6}
									/>
								</TouchableOpacity>

								<TouchableOpacity>
									<Image
										style={x.media}
										resizeMode="cover"
										source={Resources.background7}
									/>
								</TouchableOpacity>
							</ScrollView>
						</View>
					</ScrollView>
				</View>
			</View>
		</Modal>
	);
}

const x = StyleSheet.create({
	close_modal: {
		padding: 15,
		paddingTop: 17,
	},

	block_info: {
		flex: 1,
		backgroundColor: "rgba(187, 196, 205, 0.438)",
	},

	topside: {
		// borderWidth: 1,
		height: 50,
		flexDirection: "row",
		justifyContent: "flex-end",
		backgroundColor: "white",
	},

	bottomside: {
		marginTop: 0,
		margin: 6,
		flex: 1,
	},

	preview: {
		marginTop: 5,
		marginBottom: 5,
		backgroundColor: "white",
		// borderWidth: 1,
	},

	block_information: {
		height: 200,
		backgroundColor: "white",
		marginBottom: 5,
		flexDirection: "row",
	},

	leftSide: {
		borderRightWidth: 5,
		borderColor: "rgba(187, 196, 205, 0.438)",
		flex: 2,
	},

	rightSide: {
		// borderWidth: 1,
		flex: 1,
	},

	right_topSide: {
		borderBottomWidth: 5,
		borderColor: "rgba(187, 196, 205, 0.438)",
		flex: 1,
	},

	right_bottomSide: {
		// borderWidth: 1,
		flex: 1,
		justifyContent: "space-around",
		alignItems: "center",
		flexDirection: "row",
		paddingLeft: 10,
		paddingRight: 10,
	},

	submit: {
		// borderWidth: 1,
		height: 30,
		width: 30,
		backgroundColor: "tomato",
		borderRadius: 2,
		elevation: 3,
	},

	submit_text: {
		textAlign: "center",
		textAlignVertical: "center",
		// color: "white",
		fontSize: 13,
		flex: 1,
		// fontWeight: "bold",
	},

	inputbox: {
		backgroundColor: "white",
		marginBottom: 5,
	},

	input: {
		// borderWidth: 1,
		minHeight: 100,
		textAlignVertical: "top",
		padding: 15,
	},

	addMedia: {
		height: 130,
		backgroundColor: "white",
		flexDirection: "row",
		alignItems: "center",
		paddingLeft: 5,
		paddingRight: 5,
	},

	media: {
		height: 100,
		width: 100,
		margin: 5,
		marginRight: 10,
		borderRadius: 10,
	},
});
