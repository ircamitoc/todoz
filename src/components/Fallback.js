import { Text, View, Image } from "react-native";
import React from "react";

const Fallback = () => {
	return (
		<View style={{ alignItems: "center", marginTop: 70 }}>
			<Image
				source={require("todoz/assets/Add-tasks-bro.png")}
				style={{ height: 300, width: 300 }}
			/>
			<View
				style={{
					backgroundColor: "#FF725E",
					paddingVertical: 12,
					paddingHorizontal: 12,
					borderRadius: 6,
                    elevation: 4,
					marginTop: 20,
				}}
			>
				<Text style={{ color: "#fff" }}>Start Adding Your Task</Text>
			</View>
		</View>
	);
};

export default Fallback;