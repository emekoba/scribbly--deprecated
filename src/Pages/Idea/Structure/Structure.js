import React, { useState, useRef, useEffect } from "react";
import {
	StyleSheet,
	View,
	FlatList,
	ScrollView,
	Text,
	Image,
} from "react-native";
import { SwipeableFlatList } from "react-native-swipeable-flat-list";

import Block from "./Block/Block";
import Loader from "../../../Components/Style/Loader";
import Phone from "../../../Components/Style/constants/Phone";
import Viewer from "./Viewer";
import { FAB } from "react-native-paper";

export default function Structure({
	ideaname,
	username,
	dp,
	pre_struct,
	settings,
	navigation,
	colors,
	filter,
}) {
	const [structure, setstructure] = useState(pre_struct);

	const [loading, setloading] = useState(false);

	const [viewer, setviewer] = useState({ isOpen: true, type: "", media: "" });

	const [scroll, setscroll] = useState(false);

	const flatList = useRef();

	const bruv = useRef();

	const [sorted, setsorted] = useState();

	let blocklist = generateNewBlocksFrom(sorted, "array", "flatlist");

	let bC = getStyle("bC");

	useEffect(() => {
		setsorted(Sort(structure));
	}, [structure]);

	function getHierarchyOf(who) {
		let omega;
		let pops;
		let krane = getParentOf(who);

		if (krane === "genesis") {
			omega = 0;
		} else {
			pops = getObjectOf(krane, "string");

			if (pops.hierarchy === "") {
				if (pops.parent === "genesis") {
					omega = 1;
				} else {
					omega = recursiveHierarchy(pops.paragraphs[0].value) + 1;
				}
			}
		}

		function recursiveHierarchy(pop) {
			let daemos;

			if (getObjectOf(pop, "string").hierarchy === "") {
				let poppa = getObjectOf(getParentOf(pop), "string");

				if (poppa.parent === "genesis") {
					daemos = 1;
				} else {
					daemos = recursiveHierarchy(poppa.paragraphs[0].value) + 1;
				}
			}

			return daemos;
		}

		return omega;
	}

	function getParentOf(who) {
		return getObjectOf(who, "string").parent;
	}

	function getChildrenOf(ParentCalling) {
		let childName;
		let childNameArr = [];

		if (ParentCalling === null) {
			structure.map((each) => {
				childName = each.paragraphs[0].value;

				if (ParentCalling === each.parent) {
					childNameArr.push(childName);
				}
			});
		} else {
			structure.map((each) => {
				childName = each.paragraphs[0].value;

				if (ParentCalling === each.parent) {
					childNameArr.push(childName);
				}
			});
		}
		return childNameArr;
	}

	function isEmpty(args) {
		if (Array.isArray(args) && args.length) {
			return false;
		} else {
			return true;
		}

		// (type === "obj") {
		// 	for (var key in args) {
		// 		if (args.hasOwnProperty(key)) return false;
		// 	}

		// 	return true;
		// }
	}

	function getObjectOf(value, type) {
		let obj;

		if (type === "array") {
			obj = [];

			value.map((eachval) => {
				structure.map((eachobj) => {
					if (eachval === eachobj.paragraphs[0].value) {
						obj.push(eachobj);
					}
				});
			});
		}

		if (type === "string") {
			structure.map((each) => {
				if (each.paragraphs[0].value === value) {
					obj = each;
				}
			});
		}

		return obj;
	}

	function isAParent(who) {
		if (isEmpty(getChildrenOf(who))) {
			return false;
		} else {
			return true;
		}
	}

	function Sort(unsorted) {
		let gamma = [];

		let filtered = [];

		filtered = unsorted.filter((each) => {
			return (
				each.paragraphs[0].value.toLowerCase().indexOf(filter.toLowerCase()) !==
				-1
			);
		});

		filtered.map((person) => {
			let p = person.paragraphs[0].value;

			gamma.push(p);

			if (isAParent(p)) {
				runEpsilon(p);
			}
		});

		function runEpsilon(parent) {
			let x = getChildrenOf(parent);

			x.map((each) => {
				gamma.push(each);
				if (isAParent(each)) {
					runEpsilon(each);
				}
			});
		}
		gamma = [...new Set(gamma)];

		return getObjectOf(gamma, "array");
	}

	function getStats(args) {
		let c = 0,
			q = 0;

		structure.map((block) => {
			if (block.type === "clause") {
				c++;
			}

			if (block.type === "query") {
				q++;
			}
		});

		if (args === "full") {
			return structure.length;
		}

		if (args === "clauses") {
			return c;
		}

		if (args === "queries") {
			return q;
		}
	}

	function generateNewBlocksFrom(who, data_type, scrolltype) {
		if (data_type === "string") {
			let block = getObjectOf(who, "string"),
				hierarchy = getHierarchyOf(who);

			return (
				<Block
					paragraphs={block.paragraphs}
					type={block.type}
					mode="preview"
					settings={settings}
					tint={colors[hierarchy]}
					children=""
					contributor=""
				/>
			);
		}

		if (data_type === "array") {
			if (scrolltype === "flatlist") {
				return (
					<>
						<FlatList
							ref={flatList}
							data={who}
							keyExtractor={(item) => item.paragraphs[0].value}
							renderItem={({ item }) => {
								let hierarchy = getHierarchyOf(item.paragraphs[0].value),
									children = getChildrenOf(item.paragraphs[0].value);

								return (
									<Block
										paragraphs={item.paragraphs}
										parent={item.parent}
										type={item.type}
										hierarchy={hierarchy}
										overrideIndent={false}
										structure={structure}
										contributor={item.contributor}
										selectBlock={(name) => selectBlock(name)}
										settings={settings}
										navigation={navigation}
										tint={colors[hierarchy]}
										children={children}
										openViewer={openViewer}
									/>
								);
							}}
							onEndReached={showScrollup}
							onScrollToTop={hideScrollUp}
							ListHeaderComponent={
								<Header
									dp={dp}
									username={username}
									ideaname={ideaname}
									theme={settings.block.color}
									full={getStats("full")}
									c_num={getStats("clauses")}
									q_num={getStats("queries")}
								/>
							}
							ListFooterComponent={!isEmpty(structure) && <Footer />}
						/>
					</>
				);
			}

			if (scrolltype === "scrollview") {
				let blocks = [];

				Sort(who).map((each) => {
					let children = getChildrenOf(each.paragraphs[0].value),
						hierarchy = getHierarchyOf(each.paragraphs[0].value);

					blocks.push(
						<Block
							// ref={each.paragraphs[0].value}
							paragraphs={each.paragraphs}
							parent={each.parent}
							type={each.type}
							hierarchy={hierarchy}
							overrideIndent={false}
							structure={structure}
							contributor={each.contributor}
							selectBlock={(name) => selectBlock(name)}
							settings={settings}
							navigation={navigation}
							tint={colors[hierarchy]}
							children={children}
						/>
					);
				});

				return <ScrollView>{blocks}</ScrollView>;
			}

			if (scrolltype === "swipe") {
				return (
					<SwipeableFlatList
						data={who}
						renderLeft={({ item }) => <Text style={{ width: 40 }}>left</Text>}
						renderRight={({ item }) => (
							<Text style={{ width: 100 }}>right</Text>
						)}
						renderItem={({ item }) => {
							let hierarchy = getHierarchyOf(item.paragraphs[0].value),
								children = getChildrenOf(item.paragraphs[0].value);

							return (
								<Block
									// ref={item.paragraphs[0].value}
									key={item.paragraphs[0].value}
									paragraphs={item.paragraphs}
									parent={item.parent}
									type={item.type}
									hierarchy={hierarchy}
									overrideIndent={false}
									structure={structure}
									contributor={item.contributor}
									selectBlock={(name) => selectBlock(name)}
									settings={settings}
									navigation={navigation}
									tint={colors[hierarchy]}
									children={children}
									openViewer={openViewer}
								/>
							);
						}}
						keyExtractor={(item) => item.paragraphs[0].value}
					/>
				);
			}
		}
	}

	function selectBlock(name) {
		setinputbox({
			...inputbox,
			isOpen: true,
			parent: name,
			block: generateNewBlocksFrom(name, "string"),
		});
	}

	function getStyle(args) {
		let x;

		switch (args) {
			case "bC":
				if (settings.block.break === true) {
					x = settings.background.color;
				} else {
					x = settings.background.alt;
				}
				break;

			default:
				break;
		}

		return x;
	}

	function showScrollup() {
		setscroll(true);
	}

	function hideScrollUp() {
		setscroll(false);
	}

	function scrollToTop() {
		flatList.current.scrollToOffset({ animated: true, offset: 0 });

		hideScrollUp();
	}

	function openViewer(type, media) {
		setviewer({ ...viewer, isOpen: true, type: type, media: media });
	}

	function collapse() {
		bruv.current.setNativeProps({
			style: {
				height: 0,
			},
		});
	}

	function addNewBlock(type, parent, input) {
		if (parent === "genesis") {
			if (input !== "") {
				setstructure([
					...structure,
					{
						paragraphs: [{ type: "text", value: input }],
						parent: "genesis",
						type: type,
						hierarchy: "",
						contributor: { name: "", dp: "" },
						media: [],
					},
				]);
			}
		} else {
			if (input !== "") {
				setstructure([
					...structure,
					{
						paragraphs: [{ type: "text", value: input }],
						parent: parent,
						type: type,
						hierarchy: "",
						contributor: { name: "", dp: "" },
						media: [],
					},
				]);
			}
		}
	}

	return (
		<View style={{ ...x.structure, backgroundColor: bC }}>
			{loading === true ? (
				<Loader loading={loading} opacity={0} />
			) : (
				<View style={x.blockList}>{blocklist}</View>
			)}

			<Viewer viewer={viewer} setviewer={setviewer} top={30} left={100} />

			{scroll === true && (
				<FAB
					style={x.fab}
					small
					icon="chevron-double-up"
					onPress={scrollToTop}
				/>
			)}
		</View>
	);
}

function Header({ dp, username, ideaname, theme, full, c_num, q_num }) {
	let bo = 0,
		bc = "#8293ee";

	return (
		<View
			style={{
				...x.header,
				backgroundColor: theme,
				borderRightWidth: bo,
				borderLeftWidth: bo,
				borderColor: bc,
			}}
		>
			<View style={x.profile}>
				<Image style={x.profile_img} source={dp} resizeMode="cover" />

				<Text style={x.profile_txt}>{username}</Text>
			</View>

			<View style={{ flex: 1 }}>
				<Text style={x.ideaname}>{ideaname}</Text>

				<View style={x.stats}>
					<View style={x.stat_item}>
						<Text style={[x.stat_text, x.stat_header]}>Blocks</Text>
						<Text style={x.stat_text}>{full}</Text>
					</View>

					<View style={x.stat_item}>
						<Text style={[x.stat_text, x.stat_header]}>Clauses</Text>
						<Text style={x.stat_text}>{c_num}</Text>
					</View>

					<View style={x.stat_item}>
						<Text style={[x.stat_text, x.stat_header]}>Queries</Text>
						<Text style={x.stat_text}>{q_num}</Text>
					</View>
				</View>
			</View>
		</View>
	);
}

function Footer({ getStats }) {
	let bo = 0,
		bc = "#8293ee";

	return (
		<View
			style={{
				...x.footer,
				height: Phone.height - 330,
				borderRightWidth: bo,
				borderLeftWidth: bo,
				borderColor: bc,
			}}
		>
			{/* <Text style={x.foot_text}>
										last Modified: <Text> 13/04/2015</Text>
									</Text>

									<Text style={x.foot_text}>
										date Created: <Text> 05/05/2010</Text>
									</Text> */}
		</View>
	);
}

const x = StyleSheet.create({
	header: {
		flexDirection: "row",
		height: 200,
		marginBottom: 1,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
		elevation: 2,
		paddingRight: 30,
		shadowColor: "lightslategrey",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
	},

	profile: {
		width: 150,
		justifyContent: "center",
		alignItems: "center",
		paddingBottom: 20,
		// borderWidth: 1,
	},

	profile_img: {
		height: 80,
		width: 80,
		borderRadius: 80 / 2,
	},

	profile_txt: {
		paddingTop: 30,
		fontSize: 11,
		fontFamily: "Comfortaa",
	},

	ideaname: {
		height: 60,
		marginTop: 15,
		textAlign: "center",
		textAlignVertical: "center",
		fontSize: 18,
		fontFamily: "NunitoBold",
		color: "#8293ee",
		color: "lightslategrey",
		// borderWidth: 1,
		borderColor: "lightslategrey",
		flex: 1,
	},

	stats: {
		// borderWidth: 1,
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "flex-start",
	},

	stat_item: {
		// borderWidth: 1,
		height: 90,
		flex: 1,
	},

	stat_header: {
		textAlignVertical: "bottom",
		fontSize: 13,
		// color: "#8293ee",
	},

	stat_text: {
		fontSize: 10,
		fontWeight: "bold",
		// borderWidth: 1,
		flex: 1,
		textAlign: "center",
		textAlignVertical: "center",
	},

	structure: {
		flex: 1,
		backgroundColor: "red",
	},

	footer: {
		marginTop: 6,
		backgroundColor: "white",
		alignItems: "flex-end",
		padding: 20,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
	},

	foot_text: {
		fontSize: 12,
		marginBottom: 20,
		// fontWeight: "bold",
	},

	fab: {
		position: "absolute",
		margin: 30,
		marginRight: 25,
		right: 0,
		bottom: 0,
		width: 32,
		height: 32,
		justifyContent: "center",
		alignItems: "center",
		elevation: 3,
		borderWidth: 0.5,
		borderColor: "lightslategrey",
		backgroundColor: "white",
	},
});
