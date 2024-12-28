import React, { useEffect, useState } from "react";
import { Alert,  ScrollView, StyleSheet, Text, TextInput,  View } from "react-native";
import RadioForm from 'react-native-simple-radio-button';
import Button from "./Component/Button";
import ActiveButton from "./Component/ActiveButton";
import auth from '@react-native-firebase/auth'
import { Dropdown } from "react-native-element-dropdown";
import database from '@react-native-firebase/database'
import { useNavigation } from "@react-navigation/native";
import {  useDispatch, useSelector } from "react-redux";
import { setUserEmail } from "./Redux/Slice/slice";
import { Allcolor } from "./Resorce/Utils/AllColor";

export default function Register(){
	const [colorDision, setColorDision] = useState({})
 const dispatch=useDispatch()
	
	const seletor = useSelector(state => state.userName.mood)
	// useEffect(() => {
	// 	if (seletor == 'dark') {
	// 		setColorDision(Allcolor.active)
	// 	} else {
	// 		setColorDision(Allcolor.inActive)

	// 	}
	// },[colorDision])

	
        const navigation=useNavigation()
	const member=[
		{
			label:"self",value:"self"
		},{
			label: "Friend", value: "Friend"
		},{
			label: "Sister", value: "Sister"
		},{
			label: "Brother", value: "Brother"
		},{
			label: "Daugther", value: "Daugther"},{
			label: "son", value: "son"}

		
	]
	const religion=[
		{ label: 'hinduism', value:'hinduism'},
		{ label: 'islam', value: 'islam' },
		{ label: 'Christianity', value: 'Christianity' },
		{ label: 'Judaism', value:'Judaism'},
		{ label: 'Buddhism', value: 'Buddhism' },
		{ label: 'Jainism', value: 'Jainism' },
		{ label: 'Taoism', value: 'Taoism' }





	]
	const MTONGUE=[
		{ label: 'Bengali', value: "Bengali" },
		{ label: 'Hindi', value:"Hindi"},
		{ label: 'English', value: "English" },
		{ label: 'Spanish', value: "Spanish" },
		{ label: 'Arabic', value: "Arabic" },
		{ label: 'Russian', value: "Russian" }

	]

	const [memberValue, setMemberValue] = useState("")
	const [religionValue, setReligionValue] = useState("")
	const [mTungeValue, setMTungeValue] = useState("")

	const [email, setEmail] = useState("")
	const [name, setName] = useState("")
	const [Number, setNumber] = useState("")
	const [value, setValue] = useState("")
	const [password, setPassword] = useState("")
	const items = [
		{ label: 'Male', value: 'Male' },
		{ label: 'Female', value: 'Female' }
	];
	
	const getEmail=(value)=>{
		setEmail(value)
		
	}
	const getPassword = (value) => {
		setPassword(value)
		

	}
	const getName=(value)=>{
		setName(value)

	}
	const getNumber=(value)=>{

		setNumber(value)
	}
	const functionCalls=()=>{
		if(!memberValue){
			Alert.alert('Whom are you opening an account for')
		}else if(!name){
			Alert.alert(
				'provied Name'
			)}else if (!email) {
			Alert.alert(
				'provied email'
			)
		} else if (!password) {
			Alert.alert(
				'provied password'
			)}else {
			auth().createUserWithEmailAndPassword(email, password).then(async (user) => {
				
				    //  
                   const imgUrl=''
                   database().ref("userDetails").child(user.user.uid).child('userRegisterDetail').set({
					   memberValue,
					   name,
					    value,
					   religionValue,
					   mTungeValue,
					   Number,
					   email,
					   imgUrl,
					   password,

					
				   })

			    	let res = user.user.email
			
				dispatch(setUserEmail({ userEmail: res, setUid: user.user.uid, setmemberValue:memberValue }))		
                    // navigation.navigate('InforMation')
				navigation.navigate('Tab')
			
			})
			



			




		}
		


	}
	const functionLogincall=()=>{
		navigation.navigate('Login')
	}
	return(
		// <View>
		// 	<Text>hi</Text>
		// </View>
	
		
		<ScrollView>

		
			<View style={{ flex:1,backgroundColor: seletor=='dark'?  Allcolor.active.primary:Allcolor.inActive.primary}}>
			

				<Text style={{ textAlign: "center", marginTop: 10, fontSize: 20, color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor}}>LAKHS OF HAPPY MARRIAGES</Text>
				<Text style={{ textAlign: "center", color: "black", fontSize: 20, color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor }}>YOU COULD BE NEXT</Text>
				<Text style={{marginHorizontal:25,
	              	marginTop:20,
					color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor,
		            fontWeight:"bold"}}>ACCOUNT CREATE FOR</Text>
				<Dropdown
					data={member}
					maxHeight={150}
					labelField="label"
					valueField="value"
					// placeholder="ACCOUNT CREATE FOR"
					value={memberValue}
					style={{
						borderWidth: 1,
						borderRadius: 20,
						marginHorizontal: 20,
						padding: 5,

						borderColor: seletor == 'dark' ? Allcolor.inActive.primary : Allcolor.active.primary,
						// color: seletor == 'dark' ? Allcolor.active.primary : Allcolor.inActive.primary,

					}}

					itemTextStyle={{ color: seletor == 'dark' ? Allcolor.active.primary : Allcolor.inActive.primary }}

					onChange={item => {
						setMemberValue(item.value);

					}}
					
					selectedTextStyle={{ color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor }}
					placeholderStyle={{ color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor }}


				/>
				

				<Text style={{marginHorizontal:25,
		          marginTop:20,
				  color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor,
		         fontWeight:"bold"}}>NAME</Text>
				<TextInput style={{
					borderWidth: 1,
					marginHorizontal: 20,
					padding: 0,
					height: 35,
					borderRadius: 20
					,
					color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor,

					borderColor: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor
				}} value={name} onChangeText={getName} />


			   <Text style={{marginHorizontal:25,
		            marginTop:20,
					color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor,
		            fontWeight:"bold"}}>GENDER</Text>
				<RadioForm
					radio_props={items}
					// initial={value}
					// style={{}}
					formHorizontal={true}
					labelHorizontal={false}
					buttonColor={'grey'}
					animation={true}
					labelStyle={{color:seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor}}
					
					onPress={(val)=>{
						// console.log(val)
						setValue(val)

					}
					}
					
					style={{ marginHorizontal: 10, color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor }}
				/>
			<Text style={{marginHorizontal:25,
		             marginTop:20,
					color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor,
		             fontWeight:"bold"}}>RELIGION</Text>
			<Dropdown
					data={religion}
					maxHeight={150}
					labelField="label"
					valueField="value"
					
					// placeholder="ACCOUNT CREATE FOR"
					value={religionValue}
					style={{
						borderWidth: 1,
						borderRadius: 20,
						marginHorizontal: 20,
						padding: 5,

						borderColor: seletor == 'dark' ? Allcolor.inActive.primary : Allcolor.active.primary,
						// color: seletor == 'dark' ? Allcolor.active.primary : Allcolor.inActive.primary,

					}}

					// itemTextStyle={{ color: seletor == 'dark' ? Allcolor.active.primary : Allcolor.inActive.primary }}

					onChange={item => {
						setReligionValue(item.value);

					}}
					selectedTextStyle={{ color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor }}
					placeholderStyle={{ color:seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor }}


				/>
				<Text style={{marginHorizontal:25,
		             marginTop:20,
					color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor,
		             fontWeight:"bold"}}>MOTHER TONGUE</Text>
				<Dropdown
					data={MTONGUE}
					maxHeight={150}
					labelField="label"
					valueField="value"
					search
					searchPlaceholder="Search Here"
					value={mTungeValue}
					onChange={item => {
						setMTungeValue(item.value);

					}}
					style={{
						borderWidth: 1,
						borderRadius: 20,
						marginHorizontal: 20,
						padding: 5,

						borderColor: seletor == 'dark' ? Allcolor.inActive.primary : Allcolor.active.primary,
						// color: seletor == 'dark' ? Allcolor.active.primary : Allcolor.inActive.primary,

					}}
					
					itemTextStyle={{ color: seletor=='dark'?  Allcolor.active.primary:Allcolor.inActive.primary}}
					selectedTextStyle={{ color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor }}
					placeholderStyle={{ color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor }}



				/>

				
			

			<Text style={{marginHorizontal:25,
		          marginTop:20,
					color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor,
		           fontWeight:"bold"}}>
					MOBILE NUMBER
			</Text>
				<TextInput style={{
					borderWidth: 1,
					marginHorizontal: 20,
					padding: 0,
					height: 35,
					borderRadius: 20
					,
					color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor,

					borderColor: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor
				}} value={Number} onChangeText={getNumber} />

			<Text style={{marginHorizontal:25,
		           marginTop:20,
					color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor,
		            fontWeight:"bold"}}  >
						EMAIL
			</Text>
			<TextInput style={ {borderWidth:1,
		          marginHorizontal:20,
		           padding:0,
		          height:35,
		          borderRadius:20,
		    		color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor,
		          borderColor: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor}}
				   value={email} onChangeText={getEmail} />

			<Text style={{marginHorizontal:25,
		            marginTop:20,
					color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor,
		            fontWeight:"bold"}}>
						PASSWORD
			</Text>
				<TextInput                                
				     style={{borderWidth:1,
		          marginHorizontal:20,
		          padding:0,
		          height:35,
		          borderRadius:20
				  ,
				  color:seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor,
				  
		         borderColor: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor}}
				  value={password} onChangeText={getPassword} />
         
				{/* <TouchableOpacity style={{ padding: 20, backgroundColor: "orange" }} onPress={submitToDatabase}>
			<Text>hi</Text> */}
		 {/* </TouchableOpacity> */}

		       <Button textname={'Register Free'} 
					functionFire={functionCalls}/>
			  
				<ActiveButton textname={'log in'} functionLogin={functionLogincall}/>
				<Text style={{ textAlign: "center", color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor }}>By clicking this button,you accept out trems and conditions & Privacy policy</Text>

		</View>
		</ScrollView>

	)

}
const styles=StyleSheet.create({
	// inputtext:{
	// 	borderWidth:1,
	// 	marginHorizontal:20,
	// 	padding:0,
	// 	height:35,
	// 	borderRadius:20,
	// 	borderColor: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor

	// },
    //  label:{
	// 	marginHorizontal:25,
	// 	marginTop:20,
	// 	color: colorDision.primary,
	// 	fontWeight:"bold"
	//  },
	 containerStyle:{
		borderWidth:1,
		borderRadius:20,
		marginHorizontal:20,
		padding:5,
		
		borderColor:'black',
		color:'white'
		
	 }
})