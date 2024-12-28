// import react, { useState }  from "react";
// import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { View, FlatList, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import databsae from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'
import { useNavigation } from "@react-navigation/native";


export default function FilterUser({route}){
	const [data,setData]=useState({})
	

	useEffect(() => {
		const res = route.params.filterUser
		console.log('mkn',res)
		
		setData(res)
	},[])
	
	const Navigation = useNavigation()
	const [getGenderVel, setGetGenderVel] = useState()

	const userMoreInformatiion = (element) => {
	
		Navigation.navigate('UserDetails', { useInformation: element })
		
	}

	// useEffect(() => {
	// 	let dataOn = databsae().ref(auth().currentUser.uid).child('userRegisterDetail')
	// 	dataOn.on('value', (snapShort) => {
	// 		let result = snapShort.val()



	// 		if (result.value == 'Female') {
	// 			databsae().ref('MemberLIst').child('singelMember').child('MenUserData').once('value', (snapShort) => {

	// 				setGetGenderVel(snapShort.val())



	// 			})
	// 		} else {
	// 			databsae().ref('MemberLIst').child('singelMember').child('WomenUserData').once('value', (snapShort) => {
	// 				setGetGenderVel(snapShort.val())
	// 			})

	// 		}



	// 	})
	// 	return (() => {
	// 		if (dataOn) {
	// 			dataOn.off()
	// 		}
	// 	})


	// })

	return (
		<View>
			

						<View style={{
							backgroundColor: 'white',
							margin: 10,
							padding: 10,
							borderRadius: 5
						}}>
				        {data.imageLink ? <Image source={{ uri: data.imageLink }} style={styles.img2} />:null}
							<View style={{ marginLeft: 10 }}>
								<Text style={styles.name}>{data.Name}</Text>
								<Text style={styles.textStyle}>{data.Age}yrs {data.Religion} {data.EmployIn}
									<TouchableOpacity onPress={() => userMoreInformatiion(data)}>
										<Text style={{ color: 'blue', fontWeight: "bold" }}> See More...</Text>

									</TouchableOpacity>
								</Text>

							</View>

						</View>
		</View>
	)
}
const styles = StyleSheet.create({
	img: {
		height: 30,
		width: 30,
		marginTop: 5,
		marginLeft: 10,
		borderRadius: 15,
		// borderRadius:10,

	},
	name: {
		color: "black",
		fontWeight: 'bold',
		fontSize: 15


	},

	textStyle: {
		color: "black"
	},
	ViewStyle: {
		flexDirection: 'row',
		borderColor: 'grey',
		borderWidth: 1,
		borderRadius: 35,
		margin: 13,
		padding: 2,
		flexDirection: "row",
		justifyContent: 'space-between',
		backgroundColor: "white"
	},
	img2: {
		width: 300,
		height: 300,
		borderRadius: 40
	},
	ModalImg: {
		width: 100,
		height: 100,
		borderRadius: 50,
		alignSelf: "center"

	},
	ModalImg2: {
		height: 40,
		width: 40,
		marginTop: 5,
		marginLeft: 10,
		borderRadius: 25,
		alignSelf: "center"

	}

})