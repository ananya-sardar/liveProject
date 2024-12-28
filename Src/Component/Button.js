import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Button({ textname,functionFire}){
	// const onButtonPress = () => {
	// 	functionFire();
	// }

	return(
		<TouchableOpacity style={styles.buttonbgcolor}
			onPress={ functionFire}>
		<Text style={styles.textstyle}>
           {textname}
		</Text>
		</TouchableOpacity>
	)
}
const styles=StyleSheet.create({
	buttonbgcolor:{
		backgroundColor: "#f57e3d",
		marginHorizontal:20,
		marginTop:10,
		padding:5,
		borderRadius:25,
		

	},
	textstyle:{
		color:'white',
		textAlign:"center",
		fontSize:20
	}
})