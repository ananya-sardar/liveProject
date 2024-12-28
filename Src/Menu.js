import React, { useEffect, useState } from "react"
import {  Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP } from 'react-native-responsive-screen';
import Button from "./Component/Button";
// import ActiveButton from "./Component/activeButton";
import messaging from '@react-native-firebase/messaging'
import { useNavigation } from "@react-navigation/native";
import ActiveButton from "./Component/ActiveButton";
import { useSelector } from "react-redux";
import { SelectCountry } from "react-native-element-dropdown";
import { Allcolor } from "./Resorce/Utils/AllColor";
export default function Menu({...props}){
	
    const Navigation=useNavigation() 
	const fireCall=()=>{
		Navigation.navigate('REGISTER')

	}
	const seletor = useSelector(state => state.userName.mood)
	
	
	return(
		<View style={{ flex: 1, backgroundColor: seletor=='dark'? Allcolor.active.primary:Allcolor.inActive.primary }}>
			<View>
				<Image source={require('./assets/Images/LogInBgImage.jpg')} style={styles.img1st} />
				<Image source={require('./assets/Images/AppLogo.jpg')}  style={{width:100,height:100,borderRadius:50,alignSelf:"center",position:"relative",bottom:50,borderWidth:2,borderColor:"grey"}}  />

			</View>
			<View>
				<Text style={{ color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor, fontWeight: "bold", textAlign: 'center', fontSize: 20,marginTop:60 }}>Matrimony</Text>
				<Text style={{ textAlign: "center", color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor,fontWeight:"bold",marginVertical:10}}>matchmaking experience.
					Millions of registered members.lakhs of happy marriages
				</Text>

				
				<Button textname={'Create accont'} functionFire={fireCall} /> 
				<ActiveButton textname={'sign up'} functionLogin={()=>{
					Navigation.navigate('Login')
				}}/>				
			</View>
			

		
		</View>
	)
}

const styles=StyleSheet.create({
	img1st:{
		height:hp('50%'),
		width:wp('100%'),
		borderBottomRightRadius:hp('21%'),
		borderBottomLeftRadius: hp('35%'),

	},
	img2nd:{
		width:100,
		height:100,
		borderRadius:50,
		position:"absolute",
		alignSelf:'center',
		marginTop:330
	}

})