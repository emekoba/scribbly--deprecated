import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import ZoomableView from "@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView";

import Phone from "../../../Components/Style/constants/Phone";
import Pin from "./Pin";
import Card from "./Card";
import { Resources } from "../../../Resources/Resources";

export default function PlainSheet({ paragraphs, type, settings, tint }) {
	const [plainsheet, setplainsheet] = useState({
		modal: {
			isOpen: false,
		},

		board: {
			scroll: true,
			zoom: 1,
		},
	});

	let PINS = getPins(),
		CARDS = getCards();

	function getCards() {
		let x = 0,
			y = 0;

		let cards = [];

		paragraphs.map((each) => {
			cards.push(
				<Card
					type={each.type}
					value={each.value}
					settings={settings}
					top={30 + y}
					left={30 + x}
					date={"12/05/20"}
					name=""
					color={tint}
					key={each.value}
					favicon=""
				/>
			);

			(x += 0), (y += 100);
		});

		return cards;
	}

	function getPos(args) {
		if (args === "x") {
			return Math.floor(Math.random() * 3200 + 30);
		}
		if (args === "y") {
			return Math.floor(Math.random() * Phone.height + 300);
		}
	}

	function getPins() {
		return (
			<>
				<Pin type="web_card_pin" top={50} left={null} right={0} tint={tint} />
				<Pin
					type="image_card_pin"
					top={600}
					left={0}
					right={null}
					tint={tint}
				/>
				<Pin type="text_card_pin" top={300} left={null} right={0} tint={tint} />
			</>
		);
	}

	return (
		<View
			style={{
				...x.plainsheet,
				borderColor: tint,
				borderLeftWidth: type === "clause" ? 4 : 0,
				borderRightWidth: type === "query" ? 4 : 0,
			}}
		>
			<ScrollView
				horizontal={true}
				persistentScrollbar={true}
				scrollEnabled={plainsheet.board.scroll}
			>
				<ZoomableView
					zoomEnabled={false}
					maxZoom={10}
					minZoom={0.9}
					zoomStep={0.2}
					initialZoom={plainsheet.board.zoom}
					movementSensibility={5}
					onZoomBefore={() => {
						setplainsheet({
							...plainsheet,
							board: { ...plainsheet.board, scroll: false },
						});
					}}
					onZoomEnd={() => {
						setplainsheet({
							...plainsheet,
							board: { ...plainsheet.board, scroll: true },
						});
					}}
					bindToBorders={true}
					style={{ ...x.board }}
				>
					{CARDS}
				</ZoomableView>
			</ScrollView>

			{PINS}
		</View>
	);
}

const x = StyleSheet.create({
	plainsheet: {
		height: Phone.height - 56,
		flexDirection: "row",
		backgroundColor: "rgba(164, 179, 193, 0.238)",
		position: "relative",
	},

	board: {
		// backgroundColor: "rgba(164, 179, 193, 0.238)",
		width: 3200,
		position: "relative",
	},
});
