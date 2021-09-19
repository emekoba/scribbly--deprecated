import React, { useContext, useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableOpacity,
	FlatList,
	ScrollView,
} from "react-native";
import {
	createStackNavigator,
	CardStyleInterpolators,
} from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useIsFocused } from "@react-navigation/native";
import Modal from "react-native-modal";
import { FAB, Switch } from "react-native-paper";

import { Brim } from "../../State/Control";
import { Library_ideas, Resources } from "../../Resources/Resources";
import Idea from "../Idea/Idea";
import Post from "../../Components/Functional/Post";
import Canvas from "../Canvas/Canvas";
import Icon from "../../Components/Style/Icon";
import Loader from "../../Components/Style/Loader";
import NewIdea from "./NewIdea";
import Empty from "./Empty";

import Masonry from "react-native-masonry-layout";

export default function Library({ navigation, route }) {
	const Stack = createStackNavigator();

	function hideBar() {
		navigation.setOptions({
			tabBarVisible: false,
		});
	}

	function showBar() {
		navigation.setOptions({
			tabBarVisible: true,
		});
	}

	return (
		<Stack.Navigator
			screenOptions={
				{
					// gestureEnabled: true,
					// gestureDirection: "horizontal",
					// transitionSpec: {
					// 	open: openConfig,
					// 	close: closeConfig,
					// },
					// ...TransitionPresets.SlideFromRightIOS,
				}
			}
		>
			<Stack.Screen
				name="Library_Main"
				component={Main}
				initialParams={{ control: route.params.control }}
			/>

			<Stack.Screen
				name="Idea"
				component={Idea}
				initialParams={{ control: route.params.control }}
			/>

			<Stack.Screen
				name="Canvas"
				component={Canvas}
				options={
					{
						// cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
					}
				}
				initialParams={{ control: route.params.control }}
			/>
		</Stack.Navigator>
	);
}

function Main({ navigation, route }) {
	const [control, setcontrol] = useContext(Brim);

	const premier = route.params.control;

	const [library, setlibrary] = useState({
		tabs: {
			private: { ...Library_ideas },

			shared: {},

			public: {},

			saved: {
				"Building the Ironman Suit": {
					username: "Baron Emekoba",
					userdp: Resources.profile2,
					date: "20/04/2020",
					tags: ["technology", "comics"],
					description:
						"Lets try to build the suit by going through all its components and debating all the potential tech needed to create these components",
					cover: {
						font: {
							size: 15,
							color: "white",
							contrast: 0.3,
						},

						background: {
							color: "rgba(164, 179, 193, 0.438)",
							image: "",
						},
					},
					structure: [
						{
							paragraphs: [
								{ type: "text", value: "Major Components", timestamp: "" },
								{
									type: "checkbox",
									name: "",
									value: "get pictures for every component",
								},
							],
							parent: "genesis",
							type: "clause",
							hierarchy: "",
							contributor: { name: "", dp: "" },
						},
						{
							paragraphs: [
								{ type: "text", value: "The armour", timestamp: "" },
							],
							parent: "Major Components",
							type: "clause",
							hierarchy: "",
							contributor: { name: "", dp: "" },
						},
						{
							paragraphs: [
								{ type: "text", value: "The Arc Reactor", timestamp: "" },
								{
									type: "image",
									name: "arc reactor model",
									value: require("../../Resources/Media/Photos/arcreactor.jpg"),
								},
								{
									type: "video",
									name: "arc react being used to fly and in combat",
									value: "some video",
								},
							],
							parent: "Major Components",
							type: "clause",
							hierarchy: "",
							contributor: { name: "", dp: "" },
						},
					],
				},
			},
		},
	});

	const [loading, setloading] = useState(false);

	const [newidea, setnewidea] = useState({
		isOpen: false,
	});

	const [modal, setmodal] = useState({
		isOpen: false,

		status: {
			private: true,
			shared: false,
			public: false,
		},
	});

	const Tab = createMaterialTopTabNavigator();

	const isFocused = useIsFocused();

	let T = library.tabs,
		privatelist = getPosts(T["private"]),
		sharedlist = getPosts(T["shared"]),
		savedlist = getPosts(T["saved"]),
		publiclist = getPosts(T["public"]);

	let privateT = privateTab,
		sharedT = sharedTab,
		publicT = publicTab,
		savedT = savedTab;

	let day = "10",
		month = "02",
		year = "2010";

	let bC = getStyle("bC");

	navigation.setOptions({
		title: "your Ideas",

		headerTitleStyle: {
			fontSize: 18,
			fontFamily: "NunitoBold",
		},

		headerTitleAlign: "center",

		headerStyle: { backgroundColor: premier.primary, elevation: 0 },

		headerRight: () => (
			<View style={x.header}>
				<TouchableOpacity style={x.search}>
					<Icon name="finder2" />
				</TouchableOpacity>

				<Image resizeMode="cover" style={x.profile_image} source={premier.dp} />
			</View>
		),

		headerLeft: () => (
			<Switch
				onChange={toggleOnline}
				value={control.online}
				style={{ width: 60 }}
				thumbColor={control.online === true ? "limegreen" : "tomato"}
			/>
		),
	});

	if (isFocused) {
		// showBar;
		navigation.dangerouslyGetParent().setOptions({ tabBarVisible: true });
		// setloading(false);
	}

	function toggleOnline() {
		setcontrol((p) => ({
			...control,
			online: p.online === true ? false : true,
		}));
	}

	function getStyle(args) {
		let x;

		switch (args) {
			case "bC":
				x = premier.background;
				// x = "white";
				break;

			case "jC":
				library.modal.type === "newidea" ? (x = "") : (x = "flex-end");
				break;

			default:
				break;
		}

		return x;
	}

	function getPosts(args) {
		if (Object.keys(args).length === 0 && args.constructor === Object) {
			return null;
		} else {
			return (
				<FlatList
					numColumns={2}
					data={Object.keys(args)}
					keyExtractor={(item) => item}
					ListFooterComponent={<View style={{ height: 10 }} />}
					renderItem={({ item }) => (
						<Post
							dp={args[item].userdp}
							username={args[item].username}
							userdp={args[item].userdp}
							tags={args[item].tags}
							date={args[item].date}
							ideaname={item}
							description={args[item].description}
							structure={args[item].structure}
							type="private"
							cover={args[item].cover}
							navigation={navigation}
							openModal={openModal}
							usePreview={args[item].usePreview}
						/>
					)}
					// showsVerticalScrollIndicator={false}
					// style={{ justifyContent: "space-between" }}
				/>
			);
		}
	}

	function openModal() {
		setmodal({ ...modal, isOpen: true });
	}

	function closeModal() {
		setmodal({ ...modal, isOpen: false });
	}

	function setStatus(args) {
		if (args === "public") {
			setmodal({
				...modal,
				status: {
					...modal.status,
					public: true,
					private: false,
					shared: false,
				},
			});
		}

		if (args === "shared") {
			setmodal({
				...modal,
				status: {
					...modal.status,
					public: false,
					private: false,
					shared: true,
				},
			});
		}

		if (args === "private") {
			setmodal({
				...modal,
				status: {
					...modal.status,
					public: false,
					private: true,
					shared: false,
				},
			});
		}
	}

	function newIdea() {
		setnewidea({ ...newidea, isOpen: true });
	}

	function masonry() {
		let x = [];
		let y;

		Object.entries(T["private"]).map(([key, value]) => {
			// console.log(value);
			x.push(
				<Post
					numColumns={2}
					dp={value.userdp}
					username={value.username}
					userdp={value.userdp}
					tags={value.tags}
					date={value.date}
					ideaname={key}
					description={value.description}
					structure={value.structure}
					type="private"
					cover={value.cover}
					navigation={navigation}
					openModal={openModal}
					usePreview={value.usePreview}
				/>
			);
		});

		// return x;
	}

	function privateTab() {
		return (
			<>
				{privatelist === null ? (
					<Empty bC={bC} />
				) : (
					<View
						style={{ ...x.library, backgroundColor: bC, flexDirection: "row" }}
					>
						{privatelist}

						{/* <ScrollView>{masonry()}</ScrollView> */}

						{/* {masonry()} */}

						{/* <Masonry
							addItems={[
								{ key: 1, text: "text1" },
								{ key: 1, text: "text1" },
							]}
							renderItem={(item) => (
								<View>
									<Text>item.key</Text>
								</View>
							)}
						/> */}
					</View>
				)}
			</>
		);
	}

	function sharedTab() {
		return (
			<>
				{sharedlist === null ? (
					<Empty bC={bC} />
				) : (
					<View style={{ ...x.library, backgroundColor: bC }}>
						{sharedlist}
					</View>
				)}
			</>
		);
	}

	function publicTab() {
		return (
			<>
				{publiclist === null ? (
					<Empty bC={bC} />
				) : (
					<View style={{ ...x.library, backgroundColor: bC }}>
						{publiclist}
					</View>
				)}
			</>
		);
	}

	function savedTab() {
		return (
			<>
				{savedlist === null ? (
					<Empty bC={bC} />
				) : (
					<View style={{ ...x.library, backgroundColor: bC }}>{savedlist}</View>
				)}
			</>
		);
	}

	function createIdea(name, description, tags) {
		setlibrary({
			...library,

			tabs: {
				...library.tabs,

				private: {
					[name]: {
						username: "Baron Emekoba",
						userdp: Resources.profile2,
						date: day + "/" + month + "/" + year,
						tags: tags,
						description: description,
						cover: {
							font: {
								size: 15,
								color: "white",
								contrast: 0.3,
							},

							background: {
								color: "rgba(164, 179, 193, 0.438)",
								image: "",
							},
						},
						structure: [],
					},

					...library.tabs.private,
				},
			},
		});
	}

	return (
		<>
			<Tab.Navigator
				tabBarOptions={{
					style: { backgroundColor: premier.primary },
					indicatorStyle: { height: 0 },
					// activeTintColor: "red",
					// inactiveTintColor: "black",
					labelStyle: {
						borderRadius: 30,
						padding: 10,
						// marginRight: 25,
						fontSize: 12,
						width: "100%",
						fontWeight: "bold",
						textTransform: "lowercase",
						backgroundColor: premier.background,
					},
				}}
			>
				<Tab.Screen name="private" component={privateT} />
				<Tab.Screen name="shared" component={sharedT} />
				<Tab.Screen name="public" component={publicT} />
				<Tab.Screen name="saved " component={savedT} />
			</Tab.Navigator>

			<Loader loading={loading} opacity={0} />

			<FAB
				style={{ ...x.button, backgroundColor: bC }}
				icon="plus"
				onPress={newIdea}
			/>

			<NewIdea
				newidea={newidea}
				setnewidea={setnewidea}
				createIdea={createIdea}
			/>

			<Modal
				isVisible={modal.isOpen}
				backdropOpacity={0.3}
				onBackButtonPress={closeModal}
				style={{ margin: 0, justifyContent: "flex-end" }}
				onBackdropPress={closeModal}
				useNativeDriver={true}
			>
				<View style={x.modal}>
					<View
						style={{ ...x.option, flexDirection: "column", marginBottom: 0 }}
					>
						<View style={{ flexDirection: "row" }}>
							<Icon name="status" />

							<View style={x.padding} />

							<Text style={{ ...x.option_text, color: "#8293ee" }}>
								Change Status
							</Text>
						</View>

						<View style={x.suboptions}>
							<View style={x.sub}>
								<Text style={x.sub_text}>public</Text>

								<Switch
									thumbColor={
										modal.status.public === true ? "#8293ee" : "#8293ee"
									}
									value={modal.status.public}
									onChange={() => setStatus("public")}
									trackColor="black"
								/>
							</View>

							<View style={x.sub}>
								<Text style={x.sub_text}>shared</Text>

								<Switch
									thumbColor={
										modal.status.shared === true ? "#8293ee" : "#8293ee"
									}
									value={modal.status.shared}
									onChange={() => setStatus("shared")}
									trackColor="black"
								/>
							</View>

							<View style={x.sub}>
								<Text style={x.sub_text}>private</Text>

								<Switch
									thumbColor={
										modal.status.private === true ? "#8293ee" : "#8293ee"
									}
									value={modal.status.private}
									onChange={() => setStatus("private")}
									trackColor="black"
								/>
							</View>
						</View>
					</View>

					<View style={x.option}>
						<Icon name="library_preview" />

						<View style={x.padding} />

						<Text style={{ ...x.option_text, color: "limegreen" }}>
							Show Preview
						</Text>

						<Switch thumbColor="limegreen" value={true} />
					</View>

					<View
						style={{ flexDirection: "row", justifyContent: "space-between" }}
					>
						<TouchableOpacity style={x.option}>
							<Icon name="library_delete" />

							<View style={x.padding} />

							<Text style={{ ...x.option_text, color: "tomato" }}>
								Delete Idea
							</Text>
						</TouchableOpacity>

						<TouchableOpacity style={x.option}>
							<Icon name="library_edit" />

							<View style={x.padding} />

							<Text style={{ ...x.option_text, color: "#8293ee" }}>
								Edit Idea
							</Text>
						</TouchableOpacity>
					</View>

					<TouchableOpacity style={x.option}>
						<Icon name="share" />

						<View style={x.padding} />

						<Text style={{ ...x.option_text, color: "lightslategrey" }}>
							Share Idea
						</Text>
					</TouchableOpacity>
				</View>
			</Modal>
		</>
	);
}

const x = StyleSheet.create({
	library: {
		position: "relative",
		flex: 1,
		// paddingLeft: 30,
		// paddingRight: 30,
	},

	col: {
		// borderWidth: 1,
		width: "50%",
	},

	header: {
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		// borderWidth: 1,
		width: 100,
		paddingRight: 15,
	},

	search: {
		borderWidth: 0.5,
		borderColor: "lightslategrey",
		height: 27,
		width: 27,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 30 / 2,
	},

	profile_image: {
		borderWidth: 1,
		height: 26,
		width: 26,
		borderRadius: 50,
		backgroundColor: "white",
		justifyContent: "center",
	},

	label_style: {
		borderRadius: 30,
		padding: 8,
		borderWidth: 0.8,
		borderColor: "lightslategrey",
		fontSize: 9,
		textAlignVertical: "center",
		textAlign: "center",
		height: 30,
		width: "100%",
		fontWeight: "bold",
		textTransform: "lowercase",
	},

	button: {
		position: "absolute",
		margin: 50,
		right: 0,
		bottom: 0,
	},

	modal: {
		height: 330,
		backgroundColor: "white",
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		padding: 20,
		justifyContent: "space-around",
	},

	option: {
		margin: 10,
		flexDirection: "row",
		// borderWidth: 1,
	},

	padding: {
		marginRight: 30,
	},

	option_text: {
		fontSize: 15,
		paddingRight: 30,
		fontWeight: "bold",
		// borderWidth: 1,
		textAlignVertical: "center",
	},

	suboptions: {
		height: 80,
		// borderWidth: 1,
		flexDirection: "row",
	},

	sub: {
		// borderWidth: 1,
		flex: 1,
		paddingTop: 10,
		justifyContent: "center",
		alignItems: "center",
		// flexDirection: "row",
	},

	sub_text: {
		fontWeight: "bold",
		paddingBottom: 10,
		color: "#8293ee",
	},
});
