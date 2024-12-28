import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import database from "@react-native-firebase/database";
import auth from '@react-native-firebase/auth';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather'
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function EditProfile(){
	const [getUserVal, setGetUserVal] = useState({})
	const [usrUid,setUsrUid]=useState()
	const [userinfor,setUserInfor]=useState({})
	const [getUserMoreVal, setGetUserMoreVal] = useState({})

	const [profileImg, setProfileImg] = useState()

	const Navigation = useNavigation()
	useEffect(() => {
		let dataOn = database().ref("userDetails").child(auth().currentUser.uid).child('userRegisterDetail')
		dataOn.on('value', (snapShort) => {
			let result = snapShort.val()
			// console.log(result)
			if(result){
			setGetUserVal(result)

						setProfileImg(result.imgUrl)

			}
		})
		return (() => {
			if (dataOn) {
				dataOn.off()
			}
		})


	})
	useEffect(()=>{
		// datauser()
		let dataOn = database().ref("userDetails").child(auth().currentUser.uid).child('userpersonalDetails')
         dataOn.on('value',(snapShort)=>{
			let res=snapShort.val()
			// console.log('klk',res)
			setUserInfor(res)
			

		 })

		let NewData = database().ref("userDetails").child(auth().currentUser.uid).child('userPersonalDetailMore')
		NewData.on('value', (snapShort) => {
			let res = snapShort.val()
			// console.log('knk',res)
			setGetUserMoreVal(res)


		})

		// let UpdateDate = database().ref(auth().currentUser.uid).child('userPersonalDetailMore').child('singel')
		// UpdateDate.on('value', (snapShort) => {
		// 	let res = snapShort.val()
		// 	setGetUserMoreVal(res)

		// 	console.log('kkl', res)

		// })
		 return(()=>{
			if(dataOn){
				dataOn.off()
			}
			if(NewData){
				NewData.off()
			}
		 })

	})
	// const datauser = async () => {
	// 	auth().onAuthStateChanged((user) => {
	// 		if (user) {
	// 			setUsrUid(res)
				
	// 		}
	// 	});
		
	// }

	return(
		<ScrollView>
		 <View >
			{(profileImg) ? <Image source={{ uri: profileImg }} style={styles.ModalImg} /> : <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/5719/5719355.png" }} style={styles.ModalImg} />}
			<View style={{ marginHorizontal: 20,marginTop:10, }}>
				<View style={{flexDirection:"row"}}>
					<MaterialCommunityIcons name='note-text-outline' color={'#4da6ff'}  size={25}/>
			       <Text style={styles.label}>Besic details</Text>
					<Entypo style={{marginHorizontal:140,marginVertical:5}} name='edit' color={'black'} size={20}/>
				</View>
			   <View style={{marginRight:30,flexDirection:"row",justifyContent:"space-between"}}>
					<Text style={{ color: "black" }}>Name </Text>
					{(getUserVal.name) ? <Text>{getUserVal.name}</Text> : <TouchableOpacity><Text style={styles.detailStyle}>+Add Details</Text></TouchableOpacity>}

			   </View>
				<View style={{ marginRight: 30, flexDirection: "row", justifyContent: "space-between" }}>
					<Text style={{ color: "black" }}>Number </Text>	
					{(getUserVal.Number) ? <Text>{getUserVal.Number}</Text>: <TouchableOpacity><Text style={styles.detailStyle}>+Add Details</Text></TouchableOpacity> }
				</View>
				<View style={{ marginRight: 30, flexDirection: "row", justifyContent: "space-between" }}>
					<Text style={{ color: "black" }}>Mother Tongue </Text>
					{(getUserVal.mTungeValue) ? <Text>{getUserVal.mTungeValue}</Text> : <TouchableOpacity><Text style={styles.detailStyle}>+Add Details</Text></TouchableOpacity>}
				</View>
				<View style={{ marginRight: 30, flexDirection: "row", justifyContent: "space-between" }}>
					<Text style={{ color: "black" }}>Maritial Status </Text>
					{(userinfor.marriageValue) ? <Text>{userinfor.marriageValue}</Text> : <TouchableOpacity><Text style={styles.detailStyle}>+Add Details</Text></TouchableOpacity>}
				</View>
				<View style={{ marginRight: 30, flexDirection: "row", justifyContent: "space-between" }}>
					<Text style={{ color: "black" }}>Number </Text>
					{(getUserVal.value) ? <Text>{getUserVal.value}</Text> : <TouchableOpacity><Text style={styles.detailStyle}>+Add Details</Text></TouchableOpacity>}
				</View>
				<View style={{ marginRight: 30, flexDirection: "row", justifyContent: "space-between" }}>
					<Text style={{ color: "black" }}>Profile Created By </Text>
					{(getUserVal.memberValue) ? <Text>{getUserVal.memberValue}</Text> : <TouchableOpacity><Text style={styles.detailStyle}>+Add Details</Text></TouchableOpacity>}
				</View>
				 <View style={{ marginRight: 30, flexDirection: "row", justifyContent: "space-between" }}>
					<Text style={{ color: "black" }}>Height </Text>
					{(getUserVal.religionValue) ? <Text>{getUserMoreVal.heightValue}</Text> : <TouchableOpacity><Text style={styles.detailStyle}>+Add Details</Text></TouchableOpacity>}
				</View>
					<View style={{ marginRight: 30, flexDirection: "row", justifyContent: "space-between" }}>
					<Text style={{ color: "black" }}>Physical Status </Text>
					{(getUserMoreVal.physicValue) ? <Text>{getUserVal.physicValue}</Text> : <TouchableOpacity><Text style={styles.detailStyle}>+Add Details</Text></TouchableOpacity>}
				</View>
			 
			 <View style={styles.line}></View>
		
			</View>

			<View style={{ marginHorizontal: 20 }}>
				<View style={{ flexDirection: "row" }}>
					<Feather name='book' color={'#4da6ff'} size={25} />
					<Text style={styles.label}>Religious Information</Text>
					<Entypo style={{ marginHorizontal: 90, marginVertical: 5 }} name='edit' color={'black'} size={20} />
				</View>
				<View style={{ marginRight: 30, flexDirection: "row", justifyContent: "space-between" }}>
					<Text style={{ color: "black" }}>Religion </Text>
					{(getUserVal.religionValue) ? <Text>{getUserVal.religionValue}</Text> : <TouchableOpacity><Text style={styles.detailStyle}>+Add Details</Text></TouchableOpacity>}

				</View>
				<View style={{ marginRight: 30, flexDirection: "row", justifyContent: "space-between" }}>
					<Text style={{ color: "black" }}>Caste </Text>
					{(userinfor.caseValue) ? <Text>{userinfor.caseValue}</Text> : <TouchableOpacity><Text style={styles.detailStyle}>+Add Details</Text></TouchableOpacity>}
				</View>
				<View style={{ marginRight: 30, flexDirection: "row", justifyContent: "space-between" }}>
					<Text style={{ color: "black" }}>Dosh </Text>
					{(userinfor.doshValue) ? <Text>{userinfor.doshValue}</Text> : <TouchableOpacity><Text style={styles.detailStyle}>+Add Details</Text></TouchableOpacity>}
				</View>
				

				<View style={styles.line}></View>

			</View>

			<View style={{ marginHorizontal: 20 }}>
				<View style={{ flexDirection: "row" }}>
					<Entypo name='graduation-cap' color={'#4da6ff'} size={25} />
					<Text style={styles.label}>Professional Information</Text>
					<Entypo style={{ marginHorizontal: 70, marginVertical: 5 }} name='edit' color={'black'} size={20} />
				</View>
				<View style={{ marginRight: 30, flexDirection: "row", justifyContent: "space-between" }}>
					<Text style={{ color: "black" }}>Education Category </Text>
					{(getUserMoreVal.educationValue) ? <Text>{getUserMoreVal.educationValue}</Text> : <TouchableOpacity><Text style={styles.detailStyle}>+Add Details</Text></TouchableOpacity>}

				</View>
				<View style={{ marginRight: 30, flexDirection: "row", justifyContent: "space-between" }}>
					<Text style={{ color: "black" }}>Occupation </Text>
					{(getUserMoreVal.occupationValue) ? <Text>{getUserMoreVal.occupationValue}</Text> : <TouchableOpacity><Text style={styles.detailStyle}>+Add Details</Text></TouchableOpacity>}
				</View>
				<View style={{ marginRight: 30, flexDirection: "row", justifyContent: "space-between" }}>
					<Text style={{ color: "black" }}>Employed in </Text>
					{(getUserMoreVal.empolyvalue) ? <Text>{getUserMoreVal.empolyvalue}</Text> : <TouchableOpacity><Text style={styles.detailStyle}>+Add Details</Text></TouchableOpacity>}
				</View>
				<View style={{ marginRight: 30, flexDirection: "row", justifyContent: "space-between" }}>
					<Text style={{ color: "black" }}>Annual Income </Text>
					{(getUserMoreVal.incomeValue) ? <Text>{getUserMoreVal.incomeValue}</Text> : <TouchableOpacity><Text style={styles.detailStyle}>+Add Details</Text></TouchableOpacity>}
				</View>


				<View style={styles.line}></View>

			</View>

			<View style={{ marginHorizontal: 20 }}>
				<View style={{ flexDirection: "row" }}>
					<Entypo name='location-pin' color={'#4da6ff'} size={25} />
					<Text style={styles.label}>Location</Text>
					<Entypo style={{ marginLeft: 170, marginVertical: 5 }} name='edit' color={'black'} size={20} />
				</View>
				<View style={{ marginRight: 30, flexDirection: "row", justifyContent: "space-between" }}>
					<Text style={{ color: "black" }}> Country </Text>
						{(userinfor.countryValue) ? <Text>{userinfor.countryValue}</Text> : <TouchableOpacity><Text style={styles.detailStyle}>+Add Details</Text></TouchableOpacity>}

				</View>
				<View style={{ marginRight: 30, flexDirection: "row", justifyContent: "space-between" }}>
					<Text style={{ color: "black" }}> State</Text>
						{(userinfor.stateValue) ? <Text>{userinfor.stateValue}</Text> : <TouchableOpacity><Text style={styles.detailStyle}>+Add Details</Text></TouchableOpacity>}
				</View>
				<View style={styles.line}></View>

			</View>

				<View style={{ marginHorizontal: 20 }}>
					<View style={{ flexDirection: "row" }}>
						<MaterialCommunityIcons name='account-group-outline' color={'#4da6ff'} size={25} />
						<Text style={styles.label}> Family Details</Text>
						<Entypo style={{ marginHorizontal: 140, marginVertical: 5 }} name='edit' color={'black'} size={20} />
					</View>
					
					<View style={{ marginRight: 30, flexDirection: "row", justifyContent: "space-between" }}>
						<Text style={{ color: "black" }}>Family Type </Text>
						{(getUserMoreVal.occupationValue) ? <Text>{getUserMoreVal.ftype}</Text> : <TouchableOpacity><Text style={styles.detailStyle}>+Add Details</Text></TouchableOpacity>}
					</View>
					<View style={{ marginRight: 30, flexDirection: "row", justifyContent: "space-between" }}>
						<Text style={{ color: "black" }}>Family Status </Text>
						{(getUserMoreVal.familyValue) ? <Text>{getUserMoreVal.familyValue}</Text> : <TouchableOpacity><Text style={styles.detailStyle}>+Add Details</Text></TouchableOpacity>}
					</View>
					


					<View style={styles.line}></View>

				</View>
		</View> 
		</ScrollView>
	)
}
const styles = StyleSheet.create({
	// img: {
	// 	height: 30,
	// 	width: 30,
	// 	marginTop: 5,
	// 	marginLeft: 10,
	// 	borderRadius: 15,
	// 	// borderRadius:10,

	// },
	// name: {
	// 	color: "black",
	// 	fontWeight: 'bold',
	// 	fontSize: 15


	// },

	textStyle: {
        
		 color:"grey"
		
	},
	detailStyle: {

		color: "blue"

	},
	// ViewStyle: {
	// 	flexDirection: 'row',
	// 	borderColor: 'grey',
	// 	borderWidth: 1,
	// 	borderRadius: 35,
	// 	margin: 13,
	// 	padding: 2,
	// 	flexDirection: "row",
	// 	justifyContent: 'space-between',
	// 	backgroundColor: "white"
	// },
	// img2: {
	// 	width: 300,
	// 	height: 300,
	// 	borderRadius: 40
	// },
	label:{
      color:"black",
	  fontWeight:"bold",
	  marginHorizontal:10,
	  marginVertical:5
	},
	ModalImg: {
		width:'100%',
		height:250,
		alignSelf: "center"

	},
	line:{
		backgroundColor:"grey",
		height:1,
		marginVertical:20
	}
	// ModalImg2: {
	// 	height: 40,
	// 	width: 40,
	// 	marginTop: 5,
	// 	marginLeft: 10,
	// 	borderRadius: 25,
	// 	alignSelf: "center"

	// }

})