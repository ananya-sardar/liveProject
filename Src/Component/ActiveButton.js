import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ActiveButton({ textname, functionLogin }) {
	return (
		<TouchableOpacity style={styles.buttonbgcolor}
			onPress={functionLogin}
		>
			<Text style={styles.textstyle}>
				{textname}
			</Text>
		</TouchableOpacity>
	)
}
const styles = StyleSheet.create({
	buttonbgcolor: {
		borderColor: "#f57e3d",
		
		marginHorizontal: 20,
		marginTop: 10,
		padding: 2,
		borderWidth:1,
		borderRadius: 25,


	},
	textstyle: {
		color: '#f57e3d',
		textAlign: "center",
		fontSize: 20
	}
})