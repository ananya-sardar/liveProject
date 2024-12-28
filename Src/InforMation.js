import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import Foundation from 'react-native-vector-icons/Foundation'
// import { Dropdown } from 'react-native-material-dropdown';
import { Dropdown } from "react-native-element-dropdown";
import Button from "./Component/Button";
import database from '@react-native-firebase/database'
import Octicons from 'react-native-vector-icons/Octicons'
import auth from '@react-native-firebase/auth'
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Allcolor } from "./Resorce/Utils/AllColor";
export default function Information(){
	const [memberValue,seMemberValue]=useState("")
	const [getmember, setGetMember] = useState("")
	const [marriageValue, setMarriageValue] = useState("")
	const [caseValue, setCaseValue] = useState("")
	const [countryValue, setCountryValue] = useState("")
	const [stateValue, setStateValue] = useState("")
	const [doshValue, setDhosValue] = useState("")
	const [usrUid, setUsrUid] = useState("")
	
	const seletor = useSelector(state => state.userName.mood)


	
	 useEffect(()=>{
		 
		//  
		 datauser()
		 const user=auth().currentUser.uid
		//  console.log('kkl',user)
		 let dataOn = database().ref("userDetails").child(user).child('userRegisterDetail')
		 dataOn.on('value',(snapShort)=>{
			
						let result=snapShort.val()
					
					
						 seMemberValue(result.memberValue)
						
console.log(result)
					})
	            
		return(()=>{
			if(dataOn){
				dataOn.off()
			}
		})
		},[])
	

	const Navigation=useNavigation()
	const items= [
		{ label: 'married', value: 'married' },
		{ label: 'unmarried', value: 'unmarried' },
		{ label: 'singel', value: 'singel' },
		{ label: 'divorce', value: 'divorce' }

	];
	const casteitems=[
		{ label: 'Brahmins', value: 'Brahmins' },
		{ label: 'Kshatriyas', value: 'Kshatriyas' },
		{ label: 'Shudras', value: 'Shudras' },
		{ label: 'Dalits', value: 'Dalits' },
		{ label: 'Adivasis', value: 'Adivasis' }];
	let countryItems = [{
		label: 'India', value: 'India',
	}, {
		label: 'Afghanistan', value: 'Afghanistan',
	},  {
			label: 'Argentina', value: 'Argentina',
     },{
		label: 'Australia', value: 'Australia'
	},{
		label: 'Belgium', value: 'Belgium'}

	];
	const stateItems = [
		{
			label: 'West Bengal', value: 'West Bengal',
		}, {
			label: 'Anddhra Pradesh', value: 'Anddhra Pradesh',
		}, {
			label: 'Bihar', value: 'Bihar',
		}, {
			label: 'Manipur', value: 'Manipur'
		}, {
			label: 'panjab', value: 'panjab'
		}
           ]
	
	const getdhos=(value)=>{
		setDhosValue(value)

	}
	
	const datauser = async () => {
		auth().onAuthStateChanged((user) => {
			if (user) {
				
				setUsrUid(user)

				
			}
		});
		let data=auth().currentUser.uid
		if(data){

		setUsrUid(data)
		}
		// await AsyncStorage.getItem('user_Uid', (err, res) => {
		// 	setUsrUid(res)
		// })
	}

		const fireCalls=()=>{
		const time = Date.parse(new Date());
		let user=auth().currentUser.uid

		

			database().ref("userDetails").child(user).child('userpersonalDetails').set({
				marriageValue,
				caseValue,
				countryValue,
				stateValue,
				doshValue

		
			
		})

			Alert.alert('your information submited successfully')
			Navigation.navigate('MoreDetail')
		
		

		
	}

	
	return(
		
		<View style={{backgroundColor:seletor=='dark'?  Allcolor.active.primary:Allcolor.inActive.primary,flex:1}}>
			<View style={{ margin: 20 }}>

			
			<View style={{
				flexDirection: "row", justifyContent:"space-between",marginHorizontal:15}}>
				<Octicons name='checklist' size={30} color={'green'}  />
				<Text style={{color:seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor}}>Welcome,give us a few details about your..  <Text style={{color:seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor,fontWeight:"bold"}}>
			    	{memberValue}
					</Text> </Text>
			</View>
			
			<Dropdown
				style={{margin: 16,
				height: 35,
				paddingHorizontal:10,
				borderRadius:20,
				borderColor:seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor,
		// borderBottomColor: 'gray',
	            borderWidth: 1,}}
				itemTextStyle={{ color: seletor=='dark'?  Allcolor.active.primary:Allcolor.inActive.primary }}
				selectedTextStyle={{ color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor }}
				placeholderStyle={{ color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor }}
				iconStyle={styles.iconStyle}
				data={items}
				maxHeight={150}
				labelField="label"
				valueField="value"
				placeholder="MARITAL STATUS"
				value={marriageValue}
				onChange={item => {
					setMarriageValue(item.value);

				}}
				
			/>
		
			

			<Dropdown
				style={{margin: 16,
					height: 35,
					paddingHorizontal:10,
					borderRadius:20,
					borderColor:seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor,
					// borderBottomColor: 'gray',
					borderWidth: 1,}}
					itemTextStyle={{ color: seletor=='dark'?  Allcolor.active.primary:Allcolor.inActive.primary }}
					selectedTextStyle={{ color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor }}
					placeholderStyle={{ color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor }}

					iconStyle={styles.iconStyle}
					data={casteitems}
					search
					maxHeight={150}
					labelField="label"
					valueField="value"
					placeholder="STATE lIVING IN"
					searchPlaceholder="Search..."
					value={caseValue}
					onChange={item => {
						setCaseValue(item.value);
						

					}}
					
			/>
	           
			<Text style={{		marginHorizontal: 20,
					marginTop: 20,
					fontSize:25,
					fontWeight:"bold",
					color:seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor}}>
						DOSH(Optional)
			</Text>
				<TextInput style={{
					borderWidth: 1,
					marginHorizontal: 20,
					height:38,	
					color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor,
					borderRadius:18,
		            borderColor:seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor}} 
				   value={doshValue} onChangeText={getdhos} />
			 
			< Text style={{	
				marginHorizontal: 20,
				marginTop: 20,
				fontSize:25,
				fontWeight:"bold",
				color:seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor}}>
				Your Current Location
			</Text>
			<Dropdown
				style={{margin: 16,
				height: 35,
				paddingHorizontal:10,
				borderRadius:20,
				borderColor:seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor,
				// borderBottomColor: 'gray',
				borderWidth: 1,}}
				itemTextStyle={{ color: seletor=='dark'?  Allcolor.active.primary:Allcolor.inActive.primary }}
				selectedTextStyle={{ color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor }}
				placeholderStyle={{ color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor }}
				inputSearchStyle={styles.inputSearchStyle}
				iconStyle={styles.iconStyle}
				data={countryItems}
				search
				maxHeight={150}
				labelField="label"
				valueField="value"
				placeholder="COUNTRY LIVING IN"
				searchPlaceholder="Search..."
				value={countryValue}
				onChange={item => {
					setCountryValue(item.value);

				}}
				
			/>

			<Dropdown
				style={{margin: 16,
					height: 35,
					paddingHorizontal:10,
					borderRadius:20,
					borderColor:seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor,
					// borderBottomColor: 'gray',
					borderWidth: 1,}}
					itemTextStyle={{ color: seletor=='dark'?  Allcolor.active.primary:Allcolor.inActive.primary }}
					selectedTextStyle={{ color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor }}
					placeholderStyle={{ color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor }}
					inputSearchStyle={styles.inputSearchStyle}
					iconStyle={styles.iconStyle}
					data={stateItems}
					search
					maxHeight={150}
					labelField="label"
					valueField="value"
					placeholder="STATE lIVING IN"
					searchPlaceholder="Search..."
					value={stateValue}
					onChange={item => {
						setStateValue(item.value);

					}}
					
			/>
			<Button textname={'SUBMIT'}
			functionFire={fireCalls}
			/>
			</View>


			
		</View>
	)
}
const styles = StyleSheet.create({
	inputtext: {
		
	},
	label: {

	},
	dropdown: {
		
	},
	icon: {
		marginRight: 5,
	},
	placeholderStyle: {
		fontSize: 16,
	},
	selectedTextStyle: {
		fontSize: 16,
	},
	iconStyle: {
		width: 20,
		height: 20,
	},
	inputSearchStyle: {
		height: 40,
		fontSize: 16,
	},

})

