import React, { useState } from "react";
import {
	StyleSheet,
	View,
	Image,
	FlatList,
	Text,
	TouchableOpacity,
	ScrollView,
	Platform,
	StatusBar,
} from "react-native";
import {
	createStackNavigator,
	CardStyleInterpolators,
} from "@react-navigation/stack";
import Modal from "react-native-modal";
import { useIsFocused } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";

import { Feed_ideas, Resources } from "../../Resources/Resources";
import Post from "../../Components/Functional/Post";
import Idea from "../Idea/Idea";
import Canvas from "../Canvas/Canvas";
import Icon from "../../Components/Style/Icon";
import Loader from "../../Components/Style/Loader";
import Topic from "../Topic/Topic";
import Animated from "react-native-reanimated";

export default function Feed({ navigation, route }) {
	const Stack = createStackNavigator();

	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Feed_Main"
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

			<Stack.Screen name="Topic" component={Topic} />
		</Stack.Navigator>
	);
}

function Main({ navigation, route }) {
	const { control } = route.params;

	const [feed, setfeed] = useState({
		modal: {
			isOpen: false,
		},
	});

	const [loading, setloading] = useState(false);

	const [topics] = useState([
		{ name: "Technology", image: Resources.background2 },
		{ name: "Medicine", image: Resources.background3 },
		{ name: "Games", image: Resources.background5 },
		{ name: "Education", image: Resources.background10 },
		{ name: "Sports", image: Resources.background6 },
		{ name: "politics", image: Resources.background7 },
		{ name: "Real Estate", image: Resources.background8 },
		{ name: "Money", image: Resources.background9 },
	]);

	const isFocused = useIsFocused();

	const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

	const HEADER_HEIGHT = Platform.OS == "ios" ? 115 : 70;

	const scrollY = new Animated.Value(0);

	const diffClamp = Animated.diffClamp(scrollY, 0, HEADER_HEIGHT);

	const headerY = Animated.interpolate(diffClamp, {
		inputRange: [0, HEADER_HEIGHT],
		outputRange: [0, -HEADER_HEIGHT],
	});

	if (isFocused) {
		navigation.dangerouslyGetParent().setOptions({ tabBarVisible: true });
	}

	let feedlist = getPosts();

	let page = getStyle("page"),
		card = getStyle("card");

	navigation.setOptions({
		title: "",

		headerStyle: {
			backgroundColor: control.primary,
			elevation: 0,
		},

		headerShown: true,

		headerTitle: () => (
			<Image resizeMode="contain" style={x.logo} source={Resources.logo} />
		),
		headerTitleAlign: "center",

		headerRight: () => (
			<Image resizeMode="cover" style={x.user} source={control.dp} />
		),
	});

	function getStyle(args) {
		let x;

		switch (args) {
			case "page":
				x = control.background;
				break;

			case "card":
				x = control.card;
				break;

			default:
				break;
		}

		return x;
	}

	function getPosts() {
		function getFeedlet() {
			return (
				<View style={x.feedlet}>
					<View style={x.feedlet_header}>
						<Text style={x.feedlet_text}>popular Ideas</Text>

						<TouchableOpacity style={{ width: 50, alignItems: "center" }}>
							<Icon name="refresh" />
						</TouchableOpacity>
					</View>

					<FlatList
						data={Object.keys(Feed_ideas)}
						keyExtractor={(item) => item}
						horizontal={true}
						showsHorizontalScrollIndicator={false}
						renderItem={({ item }) => (
							<Post
								username={Feed_ideas[item].username}
								userdp={Feed_ideas[item].userdp}
								tags={Feed_ideas[item].tags}
								date={Feed_ideas[item].date}
								ideaname={item}
								description={Feed_ideas[item].description}
								structure={Feed_ideas[item].structure}
								type="feedlet"
								cover={Feed_ideas[item].cover}
								navigation={navigation}
								openModal={openModal}
							/>
						)}
					/>
				</View>
			);
		}

		function listHeader() {
			return (
				<View style={x.top}>
					<View style={x.welcome}>
						<Text style={x.welcome_text}>Welcome Russell </Text>

						<Text style={x.stats_text}>
							<Text style={{ fontSize: 30, width: 100 }}>
								{/* {Object.keys(Feed_ideas).length} */}
							</Text>

							<Text>unexplored Ideas</Text>
						</Text>
					</View>

					<View style={x.bruh}>
						{/* <Image
									style={x.bruh2}
									resizeMode="contain"
									source={Resources.doodle1}
								/> */}
						<View style={x.bruh2}></View>
					</View>
				</View>
			);
		}

		return (
			<>
				<FlatList
					data={Object.keys(Feed_ideas)}
					keyExtractor={(item) => item}
					ListHeaderComponent={getTopics}
					ListFooterComponent={getFeedlet}
					showsVerticalScrollIndicator={false}
					renderItem={({ item }) => (
						<Post
							username={Feed_ideas[item].username}
							userdp={Feed_ideas[item].userdp}
							tags={Feed_ideas[item].tags}
							date={Feed_ideas[item].date}
							ideaname={item}
							description={Feed_ideas[item].description}
							structure={Feed_ideas[item].structure}
							type="public"
							cover={Feed_ideas[item].cover}
							navigation={navigation}
							openModal={openModal}
						/>
					)}
					// onScroll={Animated.event([
					// 	{
					// 		nativeEvent: { contentOffset: { y: scrollY } },
					// 	},
					// ])}
					// bounces={false}
					// scrollEventThrottle={16}
					// style={{ paddingTop: HEADER_HEIGHT }}
				/>
			</>
		);
	}

	function getTopics() {
		let t = [];

		topics.map((each) => {
			t.push(
				<BoxPost
					key={each.name}
					topic={each.name}
					image={each.image}
					navigation={navigation}
				/>
			);
		});

		function BoxPost({ topic, image, navigation }) {
			let animate;

			function handleViewRef(ref) {
				animate = ref;
			}

			function animation(args) {
				animate.bounceIn(800);
			}

			function boxPressed() {
				animation();

				setTimeout(() => {
					navigation.navigate("Topic");
				});
			}

			return (
				<Animatable.View
					ref={handleViewRef}
					useNativeDriver={true}
					// animation="swing"
				>
					<TouchableOpacity
						style={{ ...x.boxpost, backgroundColor: card }}
						activeOpacity={1}
						onPress={boxPressed}
					>
						<Image style={x.boxpost_image} source={image} resizeMode="cover" />
						<Text style={x.boxpost_text}>{topic}</Text>
					</TouchableOpacity>
				</Animatable.View>
			);
		}

		return (
			<View style={x.topics}>
				<Text style={x.topics_header}>Topics</Text>

				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
					<View style={x.topics_list}>{t}</View>
				</ScrollView>
			</View>
		);
	}

	function openModal() {
		setfeed({
			...feed,
			modal: { ...feed.modal, isOpen: true },
		});
	}

	function closeModal() {
		setfeed({
			...feed,
			modal: { ...feed.modal, isOpen: false },
		});
	}

	return (
		<View style={{ ...x.feed, backgroundColor: page }}>
			{/* <StatusBar backgroundColor={control.primary} barStyle="dark-content" />

			<Animated.View
				style={{
					...x.header,
					height: HEADER_HEIGHT,
					backgroundColor: control.primary,
					transform: [{ translateY: headerY }],
				}}
			>
				<Image resizeMode="contain" style={x.logo} source={Resources.logo} />
			</Animated.View> */}

			{feedlist}

			<Loader loading={loading} opacity={0} />

			<Modal
				isVisible={feed.modal.isOpen}
				backdropOpacity={0.3}
				onBackButtonPress={closeModal}
				style={{ margin: 0, justifyContent: "flex-end" }}
				onBackdropPress={closeModal}
				useNativeDriver={true}
			>
				<View style={x.modal}>
					<TouchableOpacity style={x.option}>
						<Icon name="report" />

						<View style={x.padding} />

						<Text style={{ ...x.option_text, color: "tomato" }}>
							Report Post
						</Text>
					</TouchableOpacity>

					<TouchableOpacity style={x.option}>
						<Icon name="save2" />

						<View style={x.padding} />

						<Text style={{ ...x.option_text, color: "limegreen" }}>
							Save to Library
						</Text>
					</TouchableOpacity>

					<TouchableOpacity style={x.option}>
						<Icon name="hide" />

						<View style={x.padding} />

						<Text style={{ ...x.option_text, color: "blue" }}>
							Hide from Feed
						</Text>
					</TouchableOpacity>

					<TouchableOpacity style={x.option}>
						<Icon name="user" />

						<View style={x.padding} />

						<Text style={{ ...x.option_text, color: "purple" }}>
							Go to Creators Page
						</Text>
					</TouchableOpacity>
				</View>
			</Modal>
		</View>
	);
}

const x = StyleSheet.create({
	header: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		zIndex: 1000,
		elevation: 1000,
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "center",
		paddingTop: 10,
	},

	feedlet: {
		// borderWidth: 1,
		paddingTop: 30,
		paddingBottom: 20,
		padding: 10,
	},

	feedlet_header: {
		// borderWidth: 1,
		padding: 10,
		paddingLeft: 15,
		height: 60,
		width: "90%",
		flexDirection: "row",
		justifyContent: "space-between",
	},

	feedlet_text: {
		fontSize: 18,
		fontWeight: "bold",
		// fontFamily: "Emporia",
	},

	topics: {
		// borderWidth: 1,
		height: 230,
		paddingTop: 20,
		// paddingLeft: 6,
		// paddingRight: 6,
	},

	topics_header: {
		// borderWidth: 1,
		padding: 10,
		paddingLeft: 30,
		height: 40,
		fontWeight: "bold",
		fontSize: 18,
		// color: "blue",
		// fontFamily: "Itim",
	},

	topics_list: {
		height: 140,
		flexDirection: "row",
		padding: 10,
	},

	boxpost: {
		height: 130,
		width: 120,
		// borderWidth: 1,
		marginRight: 20,
		alignItems: "center",
		padding: 10,
		borderRadius: 10,
		// elevation: 2,
	},

	boxpost_image: {
		flex: 1,
		height: "100%",
		width: "100%",
		borderRadius: 8,
	},

	boxpost_text: {
		textAlign: "center",
		fontSize: 10,
		paddingTop: 15,
		fontWeight: "bold",
	},

	feed: {
		flex: 1,
		// paddingTop: 25,
	},

	logo: {
		width: 100,
		height: 17,
	},

	user: {
		right: 15,
		borderWidth: 1,
		height: 26,
		width: 26,
		borderRadius: 50,
		backgroundColor: "white",
		justifyContent: "center",
	},

	top: {
		height: 150,
		flexDirection: "row",
	},

	welcome: {
		// borderWidth: 1,
		flex: 2,
	},

	welcome_text: {
		paddingLeft: 20,
		paddingTop: 40,
		fontSize: 25,
		// fontFamily: "Emporia",
		// color: "darkblue",
		// borderWidth: 1,
		fontWeight: "bold",
	},

	stats_text: {
		paddingLeft: 20,
		paddingTop: 20,
		fontSize: 12,
		// fontFamily: "Emporia",
		// color: "darkblue",
		textAlignVertical: "center",
		// borderWidth: 1,
		marginRight: 50,
		fontWeight: "bold",
	},

	bruh: {
		flex: 0.8,
		// borderWidth: 1,
		margin: 20,
	},

	bruh2: {
		// borderWidth: 1,
		borderRadius: 100,
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,

		backgroundColor: "white",
		flex: 1,
		elevation: 2,
		width: "100%",
		height: "100%",
	},

	modal: {
		height: 290,
		backgroundColor: "white",
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		padding: 20,
		justifyContent: "space-around",
	},

	option: {
		margin: 10,
		flexDirection: "row",
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
});
