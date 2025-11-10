import {StyleSheet, Text, View} from "react-native";

export default function List() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>List screen</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#25292e",
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		color: "#fff",
	},
});
