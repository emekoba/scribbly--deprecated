import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	TextInput,
	FlatList,
} from "react-native";

import Icon from "../../Components/Style/Icon";
import { Feed_ideas } from "../../Resources/Resources";
import Post from "../../Components/Functional/Post";

export default function Search({ navigation, route }) {
	const { control } = route.params;

	const [tags] = useState([
		"Religion",
		"Science",
		"Education",
		"Radio",
		"Companies",
		"Politics",
		"Celebrities",
	]);

	const [search, setsearch] = useState({
		filter: "contacts",
		input: "",
	});

	let bC = getStyle("bC");

	useEffect(() => {
		let x = route.params;

		setsearch({ ...search, input: "#" });
	}, [route]);

	function getTags() {
		let tagArr = tags.map((each) => {
			return (
				<TouchableOpacity
					onPress={() => openTag(each)}
					style={{
						...x.tag,
					}}
					key={each}
				>
					<Text style={x.tag_text}>{each}</Text>
				</TouchableOpacity>
			);
		});

		return tagArr;

		function openTag(args) {
			setsearch({ ...search, input: `#${args}` });
		}
	}

	function getPosts(args) {
		return (
			<>
				<FlatList
					data={Object.keys(args)}
					keyExtractor={(item) => item}
					ListFooterComponent={<View style={{ height: 10 }} />}
					renderItem={({ item }) => (
						<Post
							username={args[item].username}
							userdp={args[item].userdp}
							tags={args[item].tags}
							date={args[item].date}
							ideaname={item}
							description={args[item].description}
							structure={args[item].structure}
							type="user"
							cover={args[item].cover}
							navigation={navigation}
							openModal={openModal}
						/>
					)}
				/>
			</>
		);
	}

	function getStyle(args) {
		let x;

		switch (args) {
			case "bC":
				x = control.background;
				break;

			default:
				break;
		}

		return x;
	}

	function openModal() {}

	return (
		<View style={x.container}>
			<View style={x.search}>
				<View style={x.search_icon}>
					<Icon name="search_icon" />
				</View>

				<TextInput
					style={x.search_input}
					onChangeText={(text) => setsearch({ ...search, input: text })}
					value={search.input}
					placeholder="ideaname,   username,    tag(s)"
					placeholderTextColor="rgba(231, 238, 250, 0.938)"
				/>

				<TouchableOpacity style={x.filter}>
					<Icon name="search_filter" />
				</TouchableOpacity>
			</View>

			<View style={x.tagList}>
				<ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
					{getTags()}
				</ScrollView>
			</View>

			<View style={{ ...x.bottom, backgroundColor: bC }}>
				{getPosts(Feed_ideas)}
			</View>
		</View>
	);
}

const x = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: 30,
	},

	search: {
		// borderWidth: 1,
		flexDirection: "row",
		padding: 10,
	},

	search_icon: {
		width: 30,
		marginRight: 10,
		justifyContent: "center",
		alignItems: "center",
	},

	search_input: {
		// borderWidth: 1,
		flex: 1,
	},

	filter: {
		width: 30,
		marginLeft: 10,
		justifyContent: "center",
		alignItems: "center",
		// borderWidth: 1,
	},

	tagList: {
		flexDirection: "row",
		// borderWidth: 1,
		height: 45,
		padding: 5,
	},

	tag: {
		// borderWidth: 1,
		backgroundColor: "rgba(231, 238, 241, 0.938)",
		paddingLeft: 10,
		paddingRight: 10,
		padding: 7,
		borderRadius: 50,
		alignItems: "center",
		justifyContent: "center",
		marginLeft: 15,
		height: 30,
	},

	tag_text: {
		padding: 5,
		fontSize: 10,
		fontWeight: "bold",
	},

	bottom: {
		flex: 1,
	},
});
