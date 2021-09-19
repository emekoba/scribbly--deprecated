import React, { useState, useContext } from "react";
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableOpacity,
	TouchableNativeFeedback,
} from "react-native";
import * as Animatable from "react-native-animatable";

import Icon from "../Style/Icon";
import { Brim } from "../../State/Control";

export default function Post({
	navigation,
	type,
	cover,
	ideaname,
	tags,
	date,
	username,
	userdp,
	description,
	structure,
	openModal,
	usePreview,
}) {
	const [control] = useContext(Brim);

	const [colors] = useState([
		"#EEDD82",
		"lightblue",
		"lightgreen",
		"#dd82ee",

		// "#8293ee",
		// "#f2476a",

		// "#82eedd",
		// "#2f95dc",
		// "tomato",
	]);

	const descriptionImg = [];

	let contributorImg = [],
		conLength = 0;

	let animate;

	let citations = getStats("citations"),
		saved = getStats("saved"),
		blah = getStats("saved"),
		post_tags = getTags();

	let text = getStyle("text"),
		card = getStyle("card"),
		desc = getStyle("desc");

	let libStyles = getLibStyles();

	function handleViewRef(ref) {
		animate = ref;
	}

	function animation(args) {
		animate.shake((10)[([, 90000], "ease-in")]);
	}

	function getDesCon() {
		structure.map((each) => {
			if (!isEmpty(each.paragraphs)) {
				each.paragraphs.map((par) => {
					if (par.type === "image") {
						descriptionImg.push(par.value);
					}
				});
			}

			if (each.contributor.dp !== "") {
				let duplicate = false;

				contributorImg.map((alreadystored) => {
					if (each.contributor.dp === alreadystored.dp) {
						duplicate = true;
					}
				});

				if (duplicate === false) {
					contributorImg.push(each.contributor);
				}
			}
		});

		conLength = contributorImg.length;
	}
	getDesCon();

	function getTags() {
		if (!isEmpty(tags)) {
			let tagArr = tags.map((each) => {
				return (
					<TouchableOpacity
						onPress={() => openTag(each)}
						style={{
							...x.tag,
							backgroundColor:
								colors[Math.floor(Math.random() * colors.length)],
						}}
						key={each}
					>
						<Text style={x.tag_text}>{each}</Text>
					</TouchableOpacity>
				);
			});

			return tagArr;
		} else {
			return null;
		}

		function openTag(args) {
			if (control.online === true) {
				navigation.navigate("Search", { tagname: args });
			}
		}
	}

	function getStyle(args) {
		let x;

		switch (args) {
			case "card":
				x = type === "library2" ? null : control.card;
				break;

			case "text":
				x = control.text;
				break;

			case "desc":
				x = "lightslategrey";
				break;

			case "bC":
				x = colors[Math.floor(Math.random() * colors.length)];
				break;

			default:
				break;
		}

		return x;
	}

	function postPressed() {
		animation("shake");

		setTimeout(() => {
			openIdea();
		});
	}

	function userPostPressed() {
		animation("shake");

		setTimeout(() => {
			openProfile();
		});
	}

	function openProfile() {
		navigation.navigate("Profile");
	}

	function openIdea() {
		navigation.navigate("Idea", {
			cover: cover,
			username: username,
			ideaname: ideaname,
			dp: userdp,
			structure: structure,
		});
	}

	function getStats(args) {
		let x = Math.floor(Math.random() * 300);

		return x;
	}

	function upvote() {}

	function downvote() {}

	function isEmpty(args) {
		if (Array.isArray(args) && args.length) {
			return false;
		} else {
			return true;
		}
	}

	function getLibStyles() {
		if (type === "private") {
			return {
				// borderWidth: 0.5,
				borderColor: "lightslategrey",
			};
		}

		if (type === "public") {
			return {
				// elevation: 2,
			};
		}
	}

	return (
		<Animatable.View
			ref={handleViewRef}
			useNativeDriver={true}
			// animation="bounceIn"
			style={{ width: type === "private" ? "50%" : null }}
		>
			{type === "feedlet" ? (
				<TouchableNativeFeedback
					background={TouchableNativeFeedback.Ripple(card)}
					onPress={postPressed}
					onLongPress={openModal}
				>
					<View style={{ ...x.post_feedlet, backgroundColor: card }}>
						<Image style={{ ...x.dp, ...x.feedlet_dp }} source={userdp} />

						<View style={x.topboard}>
							<View style={{ ...x.ideaname_username, paddingLeft: 10 }}>
								<Text
									style={{
										...x.ideaname_text,
										fontSize: 12,
										color: text,
									}}
								>
									{ideaname}
								</Text>
								<Text style={{ ...x.username_text, color: text }}>
									@{username}
								</Text>
							</View>
						</View>

						<View style={{ ...x.description, paddingTop: 25 }}>
							<Text
								style={{
									...x.description_text,
									fontSize: 13,
									color: desc,
								}}
							>
								{description}
							</Text>
						</View>
					</View>
				</TouchableNativeFeedback>
			) : (
				<>
					{type === "user" ? (
						<View style={{ ...x.post, backgroundColor: card }}>
							<View style={x.topboard}>
								<TouchableNativeFeedback onPress={userPostPressed}>
									<Image style={x.dp} source={userdp} />
								</TouchableNativeFeedback>

								<View style={x.ideaname_username}>
									<Text style={{ ...x.ideaname_text, color: text }}>
										{username}
									</Text>
									<Text style={{ ...x.username_text, color: text }}>
										{ideaname}
									</Text>
								</View>
							</View>

							<View style={{ ...x.menu, padding: 6 }}>
								<View style={x.user_stats}>
									<View style={x.sub_stat}>
										<Icon name="citations" />

										<Text style={{ ...x.sub_stat_text, color: text }}>
											{citations}
										</Text>
									</View>

									<View style={x.sub_stat}>
										<Icon name="post-unkwown" />

										<Text style={{ ...x.sub_stat_text, color: text }}>
											{blah}
										</Text>
									</View>

									<View style={x.sub_stat}>
										<Icon name="saved" />

										<Text style={{ ...x.sub_stat_text, color: text }}>
											{saved}
										</Text>
									</View>
								</View>

								<TouchableOpacity style={x.follow}>
									<Text style={x.follow_text}>follow</Text>
								</TouchableOpacity>
							</View>
						</View>
					) : (
						<TouchableNativeFeedback
							background={TouchableNativeFeedback.Ripple(card)}
							onPress={postPressed}
							onLongPress={openModal}
						>
							<View style={{ ...x.post, backgroundColor: card, ...libStyles }}>
								{type === "public" && (
									<View>
										<View style={x.topboard}>
											<Image style={x.dp} source={userdp} />

											<View style={x.ideaname_username}>
												<Text style={{ ...x.ideaname_text, color: text }}>
													{ideaname}
												</Text>
												<Text style={{ ...x.username_text, color: text }}>
													@{username}
												</Text>
											</View>

											<Text style={{ ...x.date, color: text }}>{date}</Text>
										</View>

										<View style={x.tags}>{post_tags}</View>

										<View style={x.stats}>
											<View style={{ flexDirection: "row" }}>
												<View style={x.sub_stat}>
													<Icon name="citations" />

													<Text
														style={{
															...x.sub_stat_text,
															color: text,
														}}
													>
														{citations}
													</Text>
												</View>

												<View style={x.sub_stat}>
													<Icon name="post-unkwown" />

													<Text
														style={{
															...x.sub_stat_text,
															color: text,
														}}
													>
														{blah}
													</Text>
												</View>

												<View style={x.sub_stat}>
													<Icon name="saved" />

													<Text
														style={{
															...x.sub_stat_text,
															color: text,
														}}
													>
														{saved}
													</Text>
												</View>
											</View>

											<View style={{ flex: 1, alignItems: "flex-end" }}>
												{Array.isArray(contributorImg) &&
												contributorImg.length ? (
													// isEmpty(contributorImg)
													<View style={x.contributors}>
														<Image
															style={{ ...x.contributors_dp, left: 25 }}
															resizeMode="cover"
															source={contributorImg[0].dp}
														/>

														{conLength >= 2 && (
															<Image
																style={{ ...x.contributors_dp, left: 15 }}
																resizeMode="cover"
																source={contributorImg[1].dp}
															/>
														)}

														{conLength >= 3 && (
															<Image
																style={x.contributors_dp}
																resizeMode="cover"
																source={contributorImg[2].dp}
															/>
														)}
														<Text style={x.contributors_num}>{conLength}</Text>
													</View>
												) : null}
											</View>
										</View>

										{description === "" ? null : (
											<View style={x.description}>
												<Text
													style={{
														...x.description_text,
														color: desc,
													}}
												>
													{description}
												</Text>
											</View>
										)}

										{!isEmpty(descriptionImg) ? (
											<>
												{usePreview !== false && (
													<View style={x.preview}>
														<Image
															style={x.preview_image}
															source={descriptionImg[0]}
														/>
													</View>
												)}
											</>
										) : null}

										<View style={x.menu}>
											<View style={{ flexDirection: "row", marginRight: 10 }}>
												<TouchableOpacity onPress={downvote} style={x.downvote}>
													<Icon name="downvote" />
												</TouchableOpacity>
												<Text
													style={{
														margin: 10,
														marginTop: 20,
														fontSize: 9,
														color: text,
													}}
												>
													20k
												</Text>
												<TouchableOpacity onPress={upvote} style={x.upvote}>
													<Icon name="upvote" />
												</TouchableOpacity>
											</View>
										</View>
									</View>
								)}

								{type === "private" && (
									<View>
										<View style={{ ...x.topboard, flexDirection: "column" }}>
											<View
												style={{
													...x.ideaname_username,
													// borderWidth: 1,
													paddingLeft: 6,
												}}
											>
												<Text style={{ ...x.ideaname_text, color: text }}>
													{ideaname}
												</Text>
											</View>

											{/* <Text style={{ ...x.date, color: text }}>{date}</Text> */}
										</View>

										<View
											style={{ ...x.tags, paddingLeft: 10, paddingRight: 10 }}
										>
											{post_tags}
										</View>

										<View
											style={{
												...x.description,
												paddingTop: isEmpty(post_tags) ? 0 : 25,
											}}
										>
											<Text style={{ ...x.description_text, color: desc }}>
												{description}
											</Text>
										</View>

										{!isEmpty(descriptionImg) ? (
											<>
												{usePreview !== false && (
													<View style={x.preview}>
														<Image
															style={x.preview_image}
															source={descriptionImg[0]}
														/>
													</View>
												)}
											</>
										) : null}
									</View>
								)}

								{type === "search" && (
									<View>
										<View style={x.topboard}>
											<Image style={x.dp} source={userdp} />

											<View style={x.ideaname_username}>
												<Text style={{ ...x.ideaname_text, color: text }}>
													{ideaname}
												</Text>
												<Text style={{ ...x.username_text, color: text }}>
													@{username}
												</Text>
											</View>

											<Text style={{ ...x.date, color: text }}>{date}</Text>
										</View>

										<View style={{ ...x.stats, marginTop: 0 }}>
											<View style={{ flexDirection: "row" }}>
												<View style={x.sub_stat}>
													<Icon name="citations" />

													<Text
														style={{
															...x.sub_stat_text,
															color: text,
														}}
													>
														{citations}
													</Text>
												</View>

												<View style={x.sub_stat}>
													<Icon name="saved" />

													<Text
														style={{
															...x.sub_stat_text,
															color: text,
														}}
													>
														{saved}
													</Text>
												</View>
											</View>

											<View style={{ flex: 1, alignItems: "flex-end" }}>
												{Array.isArray(contributorImg) &&
												contributorImg.length ? (
													<View style={x.contributors}>
														<Image
															style={{ ...x.contributors_dp, left: 25 }}
															resizeMode="cover"
															source={contributorImg[0].dp}
														/>

														{conLength >= 2 && (
															<Image
																style={{ ...x.contributors_dp, left: 15 }}
																resizeMode="cover"
																source={contributorImg[1].dp}
															/>
														)}

														{conLength >= 3 && (
															<Image
																style={x.contributors_dp}
																resizeMode="cover"
																source={contributorImg[2].dp}
															/>
														)}
														<Text style={x.contributors_num}>{conLength}</Text>
													</View>
												) : null}
											</View>
										</View>

										{description === "" ? null : (
											<View style={x.description}>
												<Text
													style={{
														...x.description_text,
														color: desc,
													}}
												>
													{description}
												</Text>
											</View>
										)}

										{!isEmpty(descriptionImg) ? (
											<View style={x.preview}>
												<Image
													style={x.preview_image}
													source={descriptionImg[0]}
												/>
											</View>
										) : null}

										<View style={x.menu}>
											<View style={{ flexDirection: "row", marginRight: 10 }}>
												<TouchableOpacity onPress={downvote} style={x.downvote}>
													<Icon name="downvote" />
												</TouchableOpacity>{" "}
												<Text
													style={{
														margin: 10,
														marginTop: 20,
														fontSize: 9,
														color: text,
													}}
												>
													20k
												</Text>
												<TouchableOpacity onPress={upvote} style={x.upvote}>
													<Icon name="upvote" />
												</TouchableOpacity>
											</View>
										</View>
									</View>
								)}
							</View>
						</TouchableNativeFeedback>
					)}
				</>
			)}
		</Animatable.View>
	);
}

const x = StyleSheet.create({
	post_feedlet: {
		margin: 10,
		marginLeft: 0,
		marginRight: 15,
		padding: 5,
		borderRadius: 15,
		width: 200,
		minHeight: 250,
		// borderWidth: 1,
		position: "relative",
	},

	feedlet_dp: {
		height: 30,
		width: 30,
		position: "absolute",
		right: -10,
		top: -10,
	},

	post: {
		margin: 10,
		marginBottom: 0,
		padding: 5,
		borderRadius: 10,
		// elevation: 2,
	},

	topboard: {
		flexDirection: "row",
		justifyContent: "space-between",
		// borderWidth: 1,
		padding: 10,
	},

	dp: {
		borderRadius: 50,
		width: 40,
		height: 40,
	},

	ideaname_username: {
		// borderWidth: 1,
		flex: 3,
		paddingLeft: 20,
		justifyContent: "center",
	},

	ideaname_text: {
		// fontFamily: 'Emporia',
		fontWeight: "bold",
		lineHeight: 20,
		paddingRight: 4,
	},

	username_text: {
		fontSize: 10,
		marginTop: 8,
	},

	date: {
		// borderWidth: 1,
		fontSize: 8,
		flex: 0.6,
		// paddingLeft: 10,
		paddingTop: 5,
		textAlign: "right",
	},

	tags: {
		// borderWidth: 1,
		paddingLeft: 20,
		paddingRight: 20,
		flexDirection: "row",
		flexWrap: "wrap",
	},

	tag: {
		// borderWidth: 1,
		paddingLeft: 10,
		paddingRight: 10,
		padding: 7,
		borderRadius: 50,
		alignItems: "center",
		justifyContent: "center",
		marginRight: 10,
		// elevation: 2,
		marginTop: 10,
	},

	tag_text: {
		fontSize: 10,
		// color: "white",
		// fontWeight: "bold",
	},

	stats: {
		height: 35,
		width: "100%",
		// borderWidth: 1,
		alignItems: "center",
		justifyContent: "flex-start",
		flexDirection: "row",
		paddingLeft: 10,
		paddingRight: 10,
		marginTop: 20,
	},

	sub_stat: {
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
		width: 80,
		// borderWidth: 1,
		flexDirection: "row",
	},

	sub_stat_text: {
		margin: 10,
		fontSize: 8,
		fontWeight: "bold",
	},

	saved: {
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
		width: 60,
		// borderWidth: 1,
	},

	contributors: {
		position: "relative",
		// borderWidth: 1,
		height: "100%",
		width: 70,
		marginLeft: 30,
	},

	contributors_dp: {
		height: 30,
		width: 30,
		borderRadius: 30 / 2,
		position: "absolute",
	},

	contributors_num: {
		fontSize: 10,
		// borderWidth: 1,
		maxWidth: 30,
		paddingLeft: 10,
		fontWeight: "bold",
		position: "absolute",
		right: 0,
		top: 10,
	},

	description: {
		// borderWidth: 1,
		padding: 18,
		paddingTop: 10,
	},

	description_text: {
		// borderWidth: 1,
		lineHeight: 25,
		fontWeight: "bold",
		letterSpacing: 0.5,
		flex: 1,
	},

	preview: {
		// borderWidth: 1,
		padding: 10,
		paddingTop: 0,
		paddingBottom: 10,
		width: "100%",
	},

	preview_image: {
		height: 200,
		width: null,
		borderRadius: 20,
	},

	menu: {
		// borderWidth:1,
		height: 45,
		flexDirection: "row",
		justifyContent: "flex-end",

		// borderTopWidth: 0.5,
		// borderColor: "lightslategrey",
		// marginTop: 5,
	},

	user_stats: {
		flex: 1,
		justifyContent: "space-between",
		flexDirection: "row",
		paddingRight: 10,
	},

	col_engagements: {
		borderWidth: 1,
	},

	col_citations: {
		borderWidth: 1,
	},

	col_followers: {
		borderWidth: 1,
	},

	follow: {
		flexDirection: "row",
		marginRight: 10,
		// borderWidth: 2,
		borderColor: "green",
		width: 80,
		height: 30,
		borderRadius: 50 / 2,
		backgroundColor: "#2f95dc",
		// backgroundColor: "lightgreen",
		justifyContent: "center",
		alignItems: "center",
		elevation: 2,
	},

	follow_text: {
		fontSize: 11,
		color: "white",
		textAlign: "center",
		// fontFamily: "Itim",
	},

	upvote: {
		// borderWidth: 1,
		justifyContent: "center",
		alignItems: "center",
	},

	downvote: {
		// borderWidth: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
