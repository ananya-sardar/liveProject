import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Dimensions, Image, ImageBackground, PermissionsAndroid, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import database  from '@react-native-firebase/database'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { launchCamera } from "react-native-image-picker";
import Menu from "./Menu";
import { useDispatch, useSelector } from "react-redux";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP } from 'react-native-responsive-screen';
import { Allcolor } from "./Resorce/Utils/AllColor";


export default  function Splash(){
	

	const [indicat,setIndicat]=useState(false)
	let screenMood=Dimensions.get('screen')
	let heightMood = Dimensions.get('screen').height
	let widthMood = Dimensions.get('screen').width
	
	const [colorDision, setColorDision] = useState({})


	const seletor = useSelector(state => state.userName.mood)
	useEffect(() => {
		if (seletor == 'dark') {
			setColorDision(Allcolor.active)
		} else {
			setColorDision(Allcolor.inActive)

		}
	}, [colorDision])


	useEffect(()=>{
		setIndicat(false)

		return(()=>{
				setIndicat(false)
			
			

		})
	})
	// console.log(isPortaet)
	return(
		
		
		<ScrollView style={{ backgroundColor: colorDision.primary ,flex:1}} >
			<View style={{margin:wp('8%') }}>

			
				<Text style={{
					marginTop: wp('5%'),
					color: colorDision.textColor
                   }}>
				From Matrimony.com Group
			</Text>
			<Image source={require('../Src/assets/Images/AppLogo1.jpg')} style={{width:50,height:50,borderRadius:25}}/>

				<Text style={{
					color: colorDision.textColor,
					fontSize: wp("7%"),
					marginVertical: hp('2%'),
					fontWeight: "bold"
}}>
				Find Your Perfect Match With Interest Match
			</Text>

				<Text style={{
					color: colorDision.textColor,
					fontWeight: "bold"
				}}>
				<Text style={{color:'green',fontWeight:"bold"}}>
					#BeChoosy 
				</Text>
			With India's  Biggest Matrimony Service!
			</Text>
			</View>
			<View>
				<ImageBackground  style={styles.img1st}source={{ uri:"https://onehorizonproductions.com/wp-content/uploads/2023/02/Wedding-Couple-poses-shot-by-one-horizon-productions-scaled.webp"}}>
					<ActivityIndicator size={40} color={'white'} animating={indicat} style={{ alignSelf: "center",position:"absolute",bottom:6 }} />

				</ImageBackground>

			</View>
		</ScrollView>
			
			


	)

}


const styles=StyleSheet.create({
	viewahIEH:{
		  width: '10%',
			  height:hp('20%'),
			  backgroundColor:"red"

	},
	Group:{
		
	},
	Match:{
		
	},
	// service:,
    img1st:{
		width:wp('100%'),
		height:hp('65%'),
		borderRadius:10,
	 }
	
})