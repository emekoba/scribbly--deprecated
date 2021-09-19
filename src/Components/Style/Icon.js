import {
	Ionicons,
	Entypo,
	MaterialCommunityIcons,
	Octicons,
	AntDesign,
	MaterialIcons,
	Feather,
	SimpleLineIcons,
	FontAwesome,
	FontAwesome5,
	Foundation,
	Fontisto,
	Zocial,
	EvilIcons,
} from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "./constants/Colors";

export default function Icon({ name, focused, color }) {
	return (
		<View>
			{/* VIEWER................................................................................................................................................. */}

			{name === "close_viewer" && (
				<FontAwesome name="close" size={20} color={color} />
			)}

			{name === "next_viewer" && (
				<MaterialCommunityIcons name="skip-next" size={25} color={color} />
			)}

			{/* GENESIS................................................................................................................................................. */}

			{name === "gen_1" && (
				<Fontisto name="arrow-swap" size={20} color="#EEDB82" />
			)}

			{name === "gen_2" && <Feather name="bold" size={19} color="#8293ee" />}

			{name === "gen_3" && (
				<MaterialCommunityIcons
					name="timeline-text-outline"
					size={18}
					color="lightgreen"
				/>
			)}

			{name === "gen_4" && (
				<MaterialCommunityIcons name="sort-variant" size={20} />
			)}

			{name === "gen_5" && <AntDesign name="link" size={18} color="tomato" />}

			{name === "gen_delete" && (
				<AntDesign name="delete" size={21} color="tomato" />
			)}

			{/* SIDEBAR................................................................................................................................................. */}

			{name === "side_font" && (
				<MaterialIcons name="text-fields" size={17} color="#8293ee" />
			)}

			{name === "side_bar" && (
				<MaterialCommunityIcons
					name="page-layout-sidebar-left"
					size={16}
					color="#8293ee"
				/>
			)}

			{name === "side_plus" && <Entypo name="plus" size={20} color="#8293ee" />}

			{name === "side_minus" && (
				<Feather name="minus" size={20} color="#8293ee" />
			)}

			{/* IDEA................................................................................................................................................. */}

			{/* {name === "plus_idea" && <FontAwesome5 name="plus" size={17} />} */}
			{/* #2e3d7c #282528*/}

			{name === "plus_idea" && <Octicons name="plus" size={18} />}

			{/* {name === "plus_idea" && <Feather name="pen-tool" size={17} />} */}

			{name === "settings_idea" && <Feather name="settings" size={19} />}

			{name === "finder_idea" && <Feather name="search" size={20} />}

			{name === "close_modal" && (
				<MaterialIcons name="close" size={20} color="lightslategrey" />
			)}

			{name === "close_finder" && (
				<MaterialIcons name="close" size={20} color="tomato" />
			)}

			{/* SEARCH................................................................................................................................................. */}

			{name === "search_icon" && (
				<FontAwesome name="search" size={18} color="#2f95dc" />
			)}

			{name === "search_filter" && (
				<MaterialCommunityIcons
					name="filter-variant"
					size={25}
					color="#2f95dc"
				/>
			)}

			{/* LIBRARY................................................................................................................................................. */}

			{name === "new_pen" && (
				<MaterialCommunityIcons
					name="fountain-pen-tip"
					size={23}
					color="#8293ee"
				/>
			)}

			{name === "plus_library" && (
				<Entypo
					name="plus"
					size={40}
					color="tomato"
					// color="#8293ee"
				/>
			)}

			{name === "share" && (
				<Entypo name="share" size={22} color="lightslategrey" />
			)}

			{name === "status" && (
				<FontAwesome5 name="user-astronaut" size={20} color="#8293ee" />
			)}

			{name === "library_delete" && (
				<AntDesign name="delete" size={20} color="tomato" />
			)}

			{name === "library_edit" && (
				<Foundation name="pencil" size={20} color="#8293ee" />
			)}

			{name === "library_preview" && (
				<MaterialIcons name="slideshow" size={22} color="limegreen" />
			)}

			{name === "share2" && (
				<Feather name="radio" size={22} color="lightslategrey" />
			)}

			{name === "library_edit2" && (
				<FontAwesome5 name="pen-nib" size={19} color="#8293ee" />
			)}

			{/* HEADER................................................................................................................................................. */}

			{name === "finder2" && <FontAwesome5 name="search" size={11} />}

			{/* MEDIABOX................................................................................................................................................. */}

			{name === "video" && (
				<MaterialIcons name="video-label" size={20} color="lightslategrey" />
			)}

			{name === "audio" && (
				<MaterialIcons name="audiotrack" size={20} color="lightslategrey" />
			)}

			{name === "image" && (
				<MaterialIcons name="video-label" size={20} color="lightslategrey" />
			)}

			{name === "doc" && (
				<Entypo name="documents" size={20} color="lightslategrey" />
			)}

			{/* BLOCK................................................................................................................................................. */}

			{name === "check" && (
				<MaterialCommunityIcons name="check-all" size={18} color={color} />
			)}

			{name === "block_child" && (
				<MaterialCommunityIcons
					name="timeline-text-outline"
					size={18}
					color={color}
				/>
			)}

			{name === "block_upvote" && (
				<Entypo name="thumbs-up" size={15} color="lightgreen" />
			)}
			{/* #A4D1A2 #c9ffaf */}

			{name === "block_downvote" && (
				<Entypo name="thumbs-down" size={15} color="pink" />
			)}

			{name === "block_upvote4" && (
				<Feather name="arrow-up" size={15} color="lightgreen" />
			)}

			{name === "block_downvote4" && (
				<Feather name="arrow-down" size={15} color="tomato" />
			)}

			{name === "block_upvote3" && (
				<AntDesign name="up" size={15} color="lightslategrey" />
			)}

			{name === "block_downvote3" && (
				<AntDesign name="down" size={15} color="lightslategrey" />
			)}

			{name === "block_upvote2" && (
				<FontAwesome5
					name="chevron-circle-up"
					size={18}
					color="rgba(231, 238, 241, 90.238)"
				/>
			)}

			{name === "block_downvote2" && (
				<FontAwesome5
					name="chevron-circle-down"
					size={18}
					color="rgba(231, 238, 241, 90.238)"
				/>
			)}

			{name === "block_delete" && (
				<MaterialCommunityIcons name="delete-outline" size={25} color="white" />
			)}

			{name === "block_bookmark" && (
				<FontAwesome name="bookmark" size={20} color="lightslategrey" />
			)}

			{name === "block_book" && (
				<Feather name="book" size={20} color="lightslategrey" />
			)}

			{name === "block_book2" && (
				<FontAwesome name="book" size={20} color="lightslategrey" />
			)}

			{name === "block_print" && (
				<FontAwesome name="print" size={20} color="lightslategrey" />
			)}

			{/* CANVAS................................................................................................................................................. */}

			{name === "5" && (
				<Ionicons name="md-checkbox-outline" size={22} color={color} />
			)}

			{name === "4" && (
				<FontAwesome name="life-saver" size={16} color={color} />
			)}

			{name === "3" && (
				<MaterialCommunityIcons
					name="facebook-workplace"
					size={20}
					color={color}
				/>
			)}

			{name === "2" && (
				<MaterialCommunityIcons name="checkbook" size={28} color={color} />
			)}

			{name === "1" && <FontAwesome5 name="plus" size={16} color={color} />}

			{name === "1-alt" && <FontAwesome name="user" size={16} color={color} />}

			{name === "card_canvas" && (
				<MaterialIcons name="web-asset" size={28} color={color} />
			)}

			{name === "web_card" && (
				<MaterialIcons name="web" size={50} color="#36454f" />
			)}

			{name === "text_card" && (
				<MaterialCommunityIcons
					name="card-text-outline"
					size={50}
					color="#36454f"
				/>
			)}

			{name === "video_card" && (
				<Entypo name="video" size={40} color="#36454f" />
			)}

			{name === "image_card" && (
				<Feather name="image" size={45} color="#36454f" />
			)}

			{name === "audio_card" && (
				<FontAwesome5 name="file-audio" size={39} color="#36454f" />
			)}

			{name === "doc_card" && (
				<Entypo name="documents" size={40} color="#36454f" />
			)}

			{name === "web_card_pin" && (
				<MaterialIcons name="web" size={18} color="#36454f" />
			)}

			{name === "text_card_pin" && (
				<MaterialCommunityIcons
					name="card-text-outline"
					size={18}
					color="#36454f"
				/>
			)}

			{name === "video_card_pin" && (
				<Entypo name="video" size={18} color="#36454f" />
			)}

			{name === "image_card_pin" && (
				<Feather name="image" size={18} color="#36454f" />
			)}

			{name === "audio_card_pin" && (
				<FontAwesome5 name="file-audio" size={18} color="#36454f" />
			)}

			{name === "doc_card_pin" && (
				<Entypo name="documents" size={18} color="#36454f" />
			)}

			{name === "zoomIn_canvas" && (
				<Feather name="zoom-in" size={18} color="#36454f" />
			)}

			{name === "zoomOut_canvas" && (
				<Feather name="zoom-out" size={18} color="#36454f" />
			)}

			{name === "3_canvas" && (
				<FontAwesome5 name="file-audio" size={18} color="#36454f" />
			)}

			{name === "4_canvas" && (
				<Entypo name="documents" size={18} color="#36454f" />
			)}

			{/* FEED................................................................................................................................................. */}

			{name === "report" && (
				<MaterialIcons name="report" size={25} color="tomato" />
			)}

			{name === "save2" && <Feather name="save" size={25} color="limegreen" />}

			{name === "hide" && (
				<MaterialCommunityIcons name="file-hidden" size={25} color="blue" />
			)}

			{name === "user" && <EvilIcons name="user" size={32} color="purple" />}

			{name === "refresh" && (
				<Feather name="refresh-ccw" size={23} color="purple" />
			)}

			{name === "upvote" && (
				<Entypo
					name="arrow-up"
					size={20}
					style={x.postIcon}
					color={Colors.tabIconSelecteddull}
				/>
			)}

			{name === "downvote" && (
				<Entypo
					name="arrow-down"
					size={20}
					style={x.postIcon}
					color={Colors.tabIconSelecteddull}
				/>
			)}

			{name === "post-unkwown" && (
				<MaterialCommunityIcons
					name="newspaper"
					size={20}
					color="rgba(231, 238, 250, 0.938)"
					// color="#96caed"
				/>
			)}

			{name === "citations" && (
				<FontAwesome5
					name="paperclip"
					size={18}
					color="rgba(231, 238, 250, 0.938)"
					// color="#96caed"
				/>
			)}

			{name === "saved" && (
				<FontAwesome5
					name="book-reader"
					size={18}
					color="rgba(231, 238, 250, 0.938)"
					// color="#96caed"
				/>
			)}

			{/* TAB................................................................................................................................................. */}

			{/*  30, 21 23, 25, 25 ...smaller icons  */}

			{name === "library" && (
				<Ionicons
					name="md-book"
					size={25}
					style={x.tabIcon}
					color={focused ? Colors.tabIconSelected1 : Colors.tabIconDefault}
				/>
			)}

			{name === "feed" && (
				<AntDesign
					name="switcher"
					size={22}
					style={x.tabIcon}
					color={focused ? Colors.tabIconSelected2 : Colors.tabIconDefault}
				/>
			)}

			{name === "search" && (
				<Octicons
					name="search"
					size={23}
					style={x.tabIcon}
					color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
				/>
			)}

			{name === "profile" && (
				<MaterialCommunityIcons
					name="face-profile"
					size={28}
					style={x.tabIcon}
					color={focused ? Colors.tabIconSelected4 : Colors.tabIconDefault}
				/>
			)}

			{name === "notifications" && (
				<Entypo
					name="notification"
					size={27}
					style={x.tabIcon}
					color={focused ? Colors.tabIconSelected3 : Colors.tabIconDefault}
				/>
			)}
		</View>
	);
}

const x = StyleSheet.create({
	modalIcon: {
		padding: 15,
	},

	postIcon: {
		flex: 1,
		marginTop: 15,
	},

	tabIcon: {
		marginTop: 18,
	},
});
