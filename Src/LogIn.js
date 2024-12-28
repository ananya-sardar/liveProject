import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import ActiveButton from "./Component/ActiveButton";
import auth from '@react-native-firebase/auth'
import { useNavigation } from "@react-navigation/native";

export default function  LogIn(){
	const [emailValue, setEmailValue]=useState()
	const [passwordValue, setPasswordValue] = useState()
    const Navigation=useNavigation()
	const getEamil=(val)=>{

		setEmailValue(val)
	}
	const getpassword = (val) => {

		setPasswordValue(val)
	}
	const getlogin=()=>{
      
		
		auth().signInWithEmailAndPassword(emailValue,passwordValue).then((user)=>{
			Navigation.navigate('Tab')
		})
		
	}

	return(
		<View style={{flex:1,justifyContent:"center"}} >
			<Text style={styles.label}>enter your email</Text>
			<TextInput value={emailValue} style={styles.inputtext} onChangeText={getEamil }/>

			<Text style={styles.label}>enter your password</Text>
			<TextInput value={passwordValue} onChangeText={getpassword} style={styles.inputtext} />
			<ActiveButton textname={'Log in'} functionLogin={getlogin}/>
		</View>
	)
}
const styles = StyleSheet.create({
	inputtext: {      
		borderRadius:15,
		borderWidth: 1,
		marginHorizontal: 20,
		height: 35,

	},
	label: {
		marginHorizontal: 20,
		marginTop: 20,
		// fontSize: 20,
		fontWeight: "bold",
		color: "black"
	},

	containerStyle: {
		borderWidth: 1,
		marginHorizontal: 20,
		padding: 10

	}
})