import React, { useEffect, useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Button from "./Component/Button";
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth' 
import { useNavigation } from "@react-navigation/native";
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Allcolor } from "./Resorce/Utils/AllColor";
import { useSelector } from "react-redux";
export default function Preferences(){
	const [getage,setGetAge]=useState(null)
	const [getHeigh, setGetHeight] = useState(null)
	const [getMarragie, setGetMarragie] = useState()
	const [getToungr, setGetTounge] = useState()
	const [getPhysical, setGetphysical] = useState()
	const [getEatting, setGetEatting] = useState()
	const [getDrinking, setGetDrinking] = useState()
	const [geEmploy, setGetEmploy] = useState()
	const [getOccupation, setgetOccupation] = useState()
	const [getIncome,setGetIncome]=useState()
	const navigation=useNavigation()
	
	const seletor = useSelector(state => state.userName.mood)



	
	const ageFun=(value)=>{
         setGetAge(value)
	}
	const HeightFun = (value) => {
		setGetHeight(value)
	}
	const MarrageFun = (value) => {
		setGetMarragie(value)
	}
	const TongeFun = (value) => {
		setGetTounge(value)
	}
	const  PhysicalFun= (value) => {
		setGetphysical(value)
	}
	const EateFun = (value) => {
		setGetEatting(value)
	}
	const DrinkFun = (value) => {
		setGetDrinking(value)
	}
	const empolyFun = (value) => {
		setGetEmploy(value)
	}
	const occupationFun = (value) => {
		setgetOccupation(value)
	}
	const incomeFun = (value) => {
		setGetIncome(value)
	}
	const fireCalls=()=>{
		let user = auth().currentUser

		const time = Date.parse(new Date());
		database().ref("userDetails").child(user.uid).child('userPreferencesDetail').set({
			getHeigh,
			getage,
			getMarragie,
			getPhysical,
			getDrinking,
			getEatting,
			getOccupation,
			geEmploy,
			getIncome,
			getToungr


			})
		
		Alert.alert('you Preferences submitetd done')	
		navigation.navigate('Tab')
       

	}
	const PREFERgOBACK=()=>{
		navigation.goBack()
	}
	return(
		<View style={{ flex: 1, backgroundColor:seletor=='dark'?  Allcolor.active.primary:Allcolor.inActive.primary}}>
		
			
			<ScrollView >
				<TouchableOpacity style={{ marginLeft: 15, marginTop: 5 }} onPress={PREFERgOBACK}>
					<AntDesign name='arrowleft' color={'black'} size={30} />
				</TouchableOpacity>
				<View style={{ padding: 20 }}>

			
					<Text style={{color:'grey'}}>Matches recommended by us are based on <Text style={{
						color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor,
						fontWeight: "bold"
                      }}>Acceptable matches
					  </Text>criteria and at times might go slightly beyond your preferences Trun on 'compul0ary' to get matches exactly as per your prefrences</Text>
					<Text style={{color:seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor,
					fontWeight:"bold"
					}}>Basic preferences</Text>

				<Text style={{marginTop: 10,
		fontSize: 25,
		fontWeight: "bold",
		color:seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor}} >Age</Text>
					<TextInput style={{
						borderBottomWidth: 1, borderColor: seletor == 'dark' ? Allcolor.active.textColor : Allcolor.inActive.textColor,
		    color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor}} value={getage} onChangeText={ageFun}/>
				<Text style={{marginTop: 10,
		fontSize: 25,
		fontWeight: "bold",
		color:seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor}} >Height</Text>
					<TextInput style={{
						borderBottomWidth: 1, borderColor: seletor == 'dark' ? Allcolor.active.textColor : Allcolor.inActive.textColor,
		color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor}} value={getHeigh} onChangeText={ HeightFun} />
				<Text style={{marginTop: 10,
		fontSize: 25,
		fontWeight: "bold",
		color:seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor}}>Maritial Status</Text>
					<TextInput style={{
						borderBottomWidth: 1, borderColor: seletor == 'dark' ? Allcolor.active.textColor : Allcolor.inActive.textColor,
		color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor}} value={getMarragie} onChangeText={MarrageFun } />
				
				<Text style={{marginTop: 10,
		fontSize: 25,
		fontWeight: "bold",
		color:seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor}}>Mother Tonge</Text>
					<TextInput style={{
						borderBottomWidth: 1, borderColor: seletor == 'dark' ? Allcolor.active.textColor : Allcolor.inActive.textColor,
		 color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor}} value={getToungr} onChangeText={TongeFun} />
				<Text style={{marginTop: 10,
		fontSize: 25,
		fontWeight: "bold",
		color:seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor}}>Physical Status</Text>
					<TextInput style={{
						borderBottomWidth: 1, borderColor: seletor == 'dark' ? Allcolor.active.textColor : Allcolor.inActive.textColor,
		      color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor}} value={getPhysical} onChangeText={PhysicalFun } />
				<Text style={{marginTop: 10,
		fontSize: 25,
		fontWeight: "bold",
		color:seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor}}>Eating Habit</Text>
					<TextInput style={{
						borderBottomWidth: 1, borderColor: seletor == 'dark' ? Allcolor.active.textColor : Allcolor.inActive.textColor,
		        color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor}} value={getEatting} onChangeText={EateFun } />
				<Text style={{marginTop: 10,
		fontSize: 25,
		fontWeight: "bold",
		color:seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor}}>Drinking Habit</Text>
					<TextInput style={{
						borderBottomWidth: 1, borderColor: seletor == 'dark' ? Allcolor.active.textColor : Allcolor.inActive.textColor,
		 color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor}} value={getDrinking} onChangeText={DrinkFun } />
				<Text style={{marginTop: 10,
		fontSize: 25,
		fontWeight: "bold",
		color:seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor}}>Empolyed in</Text>
					<TextInput style={{
						borderBottomWidth: 1, borderColor: seletor == 'dark' ? Allcolor.active.textColor : Allcolor.inActive.textColor,
		 color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor}} value={geEmploy} onChangeText={ empolyFun} />
				<Text style={{marginTop: 10,
		fontSize: 25,
		fontWeight: "bold",
		color:seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor}}>Occupation</Text>
					<TextInput style={{
						borderBottomWidth: 1, borderColor: seletor == 'dark' ? Allcolor.active.textColor : Allcolor.inActive.textColor,
		 color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor}} value={getOccupation} onChangeText={occupationFun } />
				<Text style={{marginTop: 10,
		fontSize: 25,
		fontWeight: "bold",
		color:seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor}}>Annual income</Text>
					<TextInput style={{
						borderBottomWidth: 1, borderColor: seletor == 'dark' ? Allcolor.active.textColor : Allcolor.inActive.textColor,
		 color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor}} value={getIncome} onChangeText={ incomeFun} />
		    <Button textname={'Save & Continue'} functionFire={fireCalls}/>
		    <View style={{padding:40}}></View>
				</View>	
		</ScrollView>
		</View>
	)
}
