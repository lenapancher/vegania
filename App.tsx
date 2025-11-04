import "./global.css";
import {Text, View} from "react-native";
import React from "react";

export default function App() {
	return (
		<View className={styles.container}>
			<Text className={styles.title}>Home</Text>
			<View className={styles.separator} />
		</View>
	);
}

const styles = {
	container: `items-center flex-1 justify-center bg-white`,
	separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
	title: `text-xl font-bold`,
};
