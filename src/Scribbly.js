import React, { useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
	useFonts,
	Inter_900Black,
	Aclonica_400Regular,
	Itim_400Regular,
} from "@expo-google-fonts/dev";

import {
	Ubuntu_300Light,
	Ubuntu_500Medium,
	Ubuntu_700Bold,
	Ubuntu_400Regular,
} from "@expo-google-fonts/ubuntu";

import {
	Nunito_200ExtraLight,
	Nunito_300Light,
	Nunito_600SemiBold,
	Nunito_800ExtraBold,
	Nunito_900Black,
	Nunito_400Regular,
	Nunito_700Bold,
} from "@expo-google-fonts/nunito";

import {
	Cabin_400Regular,
	Cabin_500Medium,
	Cabin_600SemiBold,
	Cabin_700Bold,
} from "@expo-google-fonts/cabin";

import {
	Comfortaa_300Light,
	Comfortaa_400Regular,
	Comfortaa_500Medium,
	Comfortaa_600SemiBold,
	Comfortaa_700Bold,
} from "@expo-google-fonts/comfortaa";

import { DidactGothic_400Regular } from "@expo-google-fonts/didact-gothic";

import {
	DMMono_300Light,
	DMMono_300Light_Italic,
	DMMono_400Regular,
	DMMono_400Regular_Italic,
	DMMono_500Medium,
	DMMono_500Medium_Italic,
} from "@expo-google-fonts/dm-mono";

import { GloriaHallelujah_400Regular } from "@expo-google-fonts/gloria-hallelujah";

import {
	InknutAntiqua_300Light,
	InknutAntiqua_400Regular,
	InknutAntiqua_500Medium,
	InknutAntiqua_600SemiBold,
	InknutAntiqua_700Bold,
	InknutAntiqua_800ExtraBold,
	InknutAntiqua_900Black,
} from "@expo-google-fonts/inknut-antiqua";

import {
	LifeSavers_400Regular,
	LifeSavers_700Bold,
	LifeSavers_800ExtraBold,
} from "@expo-google-fonts/life-savers";

import { MajorMonoDisplay_400Regular } from "@expo-google-fonts/major-mono-display";

import {
	Mali_200ExtraLight,
	Mali_200ExtraLight_Italic,
	Mali_300Light,
	Mali_300Light_Italic,
	Mali_400Regular,
	Mali_400Regular_Italic,
	Mali_500Medium,
	Mali_500Medium_Italic,
	Mali_600SemiBold,
	Mali_600SemiBold_Italic,
	Mali_700Bold,
	Mali_700Bold_Italic,
} from "@expo-google-fonts/mali";

import {
	MartelSans_200ExtraLight,
	MartelSans_300Light,
	MartelSans_400Regular,
	MartelSans_600SemiBold,
	MartelSans_700Bold,
	MartelSans_800ExtraBold,
	MartelSans_900Black,
} from "@expo-google-fonts/martel-sans";

import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";

import { RibeyeMarrow_400Regular } from "@expo-google-fonts/ribeye-marrow";

import { AppLoading } from "expo";

import { Brim } from "./State/Control";
import Library from "./Pages/Library/Library";
import Feed from "./Pages/Feed/Feed";
import Profile from "./Pages/Profile/Profile";
import Search from "./Pages/Search/Search";
import Notifications from "./Pages/Notifications/Notifications";
import Icon from "./Components/Style/Icon";
import { View } from "react-native";

// console.disableYellowBox = true;

export default function Scribbly() {
	const [control] = useContext(Brim);

	const Tabs = createBottomTabNavigator();

	let [fontsLoaded] = useFonts({
		Inter: Inter_900Black,

		Aclonica: Aclonica_400Regular,

		Itim: Itim_400Regular,

		Nunito: Nunito_400Regular,
		NunitoBold: Nunito_700Bold,

		Ubuntu: Ubuntu_400Regular,
		Ubuntu_B: Ubuntu_700Bold,

		Comfortaa: Comfortaa_400Regular,
		Com_M: Comfortaa_500Medium,

		Cabin: Cabin_400Regular,

		DM: DMMono_400Regular,

		Ink: InknutAntiqua_400Regular,

		Life: LifeSavers_700Bold,

		Mali: Mali_400Regular,

		Martel: MartelSans_400Regular,
	});

	function getStyle(args) {
		let x;

		switch (args) {
			case "theme":
				x = control.primary;
				break;

			default:
				break;
		}

		return x;
	}

	if (!fontsLoaded) {
		return <View />;
	} else {
		return (
			<NavigationContainer>
				<Tabs.Navigator
					tabBarOptions={{
						inactiveBackgroundColor: getStyle("theme"),
						activeBackgroundColor: getStyle("theme"),
					}}
					// initialRouteName="Profile"
				>
					<Tabs.Screen
						name="Library"
						component={Library}
						options={{
							title: "",
							tabBarIcon: ({ focused }) => (
								<Icon name="library" focused={focused} />
							),
						}}
						initialParams={{ control: control }}
					/>

					{control.online === true && (
						<Tabs.Screen
							name="Feed"
							component={Feed}
							options={{
								title: "",
								tabBarIcon: ({ focused }) => (
									<Icon name="feed" focused={focused} />
								),
							}}
							initialParams={{ control: control }}
						/>
					)}

					{control.online === true && (
						<Tabs.Screen
							name="Search"
							component={Search}
							options={{
								title: "",
								tabBarIcon: ({ focused }) => (
									<Icon name="search" focused={focused} />
								),
							}}
							initialParams={{ control: control }}
						/>
					)}

					<Tabs.Screen
						name="Profile"
						component={Profile}
						options={{
							title: "",
							tabBarIcon: ({ focused }) => (
								<Icon name="profile" focused={focused} />
							),
						}}
					/>

					{control.online === true && (
						<Tabs.Screen
							name="Notifications"
							component={Notifications}
							options={{
								title: "",
								tabBarIcon: ({ focused }) => (
									<Icon name="notifications" focused={focused} />
								),
							}}
						/>
					)}
				</Tabs.Navigator>
			</NavigationContainer>
		);
	}
}
