import {Tabs} from "expo-router";
import {Entypo, Feather, MaterialCommunityIcons} from "@expo/vector-icons";

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarActiveTintColor: "#FFC9B9",
				tabBarInactiveTintColor: "#000000",
			}}>
			<Tabs.Screen
				name="home"
				options={{
					tabBarIcon: ({color}) => (
						<Feather name="home" size={24} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="scan"
				options={{
					tabBarIcon: ({color}) => (
						<MaterialCommunityIcons
							name="barcode-scan"
							size={24}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="list"
				options={{
					tabBarIcon: ({color}) => (
						<Entypo name="list" size={24} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
