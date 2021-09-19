// @refresh reset
import { LogBox } from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";

const config = {
	apiKey: "AIzaSyCYO3Rdo7qpJ0U_QXhizKicTVyXxipp0l0",
	authDomain: "scribbly-edb53.firebaseapp.com",
	databaseURL: "https://scribbly-edb53.firebaseio.com",
	projectId: "scribbly-edb53",
	storageBucket: "scribbly-edb53.appspot.com",
	messagingSenderId: "952001192851",
	appId: "1:952001192851:web:8add488223d66283a1be66",
};

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

LogBox.ignoreLogs(["Setting a timer for a long period of time"]);

export const fs = firebase.firestore();
export const rdb = firebase.database();
