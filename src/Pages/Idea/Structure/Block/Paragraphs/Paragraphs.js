import React from "react";
import { View, Text, StyleSheet } from "react-native";

import MediaBox from "../MediaBox";
import CheckBox from "./CheckBox";

export default function Paragraph({
	mode,
	paragraphs,
	settings,
	type,
	tint,
	openViewerReference,
}) {
	let blockContent = getContent();

	let fS = getStyle("fS"),
		fF = getStyle("fF"),
		fC = getStyle("fC"),
		tA = getStyle("tA");

	function getStyle(args) {
		let x;

		switch (args) {
			case "fS":
				x = mode === "canvas_blocklist" ? 8 : settings.block.text.size;
				break;

			case "fF":
				x = settings.block.text.family;
				break;

			case "fC":
				x = settings.block.text.color;
				break;

			case "tA":
				x = type === "query" ? "right" : null;
				break;

			default:
				break;
		}

		return x;
	}

	function getContent() {
		let content = [];
		let media = [];

		paragraphs.map((par) => {
			switch (par.type) {
				case "text":
					content.push(
						<Text
							key={par.value}
							style={{
								...x.text,
								fontSize:
									mode === "canvas_blocklist" ? 11 : settings.block.text.size,
								fontFamily: settings.block.text.family,
								color: settings.block.text.color,
								textAlign: type === "query" ? "right" : null,
							}}
						>
							{par.value}
						</Text>
					);
					break;

				case "checkbox":
					content.push(
						<CheckBox
							key={par.value}
							value={par.value}
							tint={tint}
							type={type}
							checked={par.checked}
							fS={mode === "canvas_blocklist" ? 11 : settings.block.text.size}
							fF={settings.block.text.family}
							c={settings.block.text.color}
						/>
					);
					break;

				default:
					mode === "canvas_blocklist" ? null : media.push(par);

					break;
			}
		});

		content.push(
			// mode !== "preview" && (
			<MediaBox
				key={media}
				media={media}
				tint={tint}
				blocktype={type}
				openViewer={openViewerReference}
			/>
			// )
		);

		return content;
	}

	return <View>{blockContent}</View>;
}

const x = StyleSheet.create({
	congress: {
		flex: 1,
		flexDirection: "row",
		margin: 10,
		borderColor: "lightslategrey",
		borderRadius: 3,
		paddingLeft: 10,
		paddingRight: 10,
		padding: 5,
		backgroundColor: "white",
		elevation: 2,
		borderWidth: 0.3,
		alignItems: "center",
	},

	text: {
		// borderWidth: 1,
		lineHeight: 24,
		flex: 1,
		textAlignVertical: "center",
		// letterSpacing: 0.3,
		padding: 10,
	},
});
