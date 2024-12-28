
import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import UserDetails from "./UserDtails";
import { seRegistedName } from "./Redux/Slice/Slice2";

export default function Matches() {
	const dispatch=useDispatch()
	const [userVel, setUserVel] = useState({})
	const [genderVel, setGenderVel] = useState({})
	const [matchVel, setMatchVel] = useState({})

	const [usrUid, setUsrUid] = useState()

	// const hn = () => dispatch(seRegistedName({ registedName: "babu"  }))	
	return (
		<View>
			{/* <TouchableOpacity onPress={hn}>
				<Text>hi</Text>
			</TouchableOpacity> */}
			
			{/* <FlatList data={genderVel} renderItem={(element)=>{
				// console.log(element)
				return(
					<View>
						<Text> {element.item.Height}</Text>
						</View>
				)

			}}/> */}
			
		</View>
	)
}
const styles = StyleSheet.create({
	img: {
		height: 300,
		width: 300,
		alignSelf: "center",
		borderRadius: 10,

	},
	name: {
		color: "black",
		fontWeight: 'bold',
		fontSize: 15


	},

	textStyle: {
		color: "black"
	}

})