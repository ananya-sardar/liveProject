import React, { useEffect, useState } from "react";
import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { exp, Value } from "react-native-reanimated";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useSelector } from "react-redux";
import { Allcolor } from "./Resorce/Utils/AllColor";
user
export default function UserDetails({route}){
	const [,setUser]=useState('')
	let res = route.params.useInformation
		// setUser(res)
	let userGender = res.Gender
	

	// useEffect(()=>{
	// })
	const selector = useSelector(state => state.userName.mood)

	return(
		<ScrollView>
			<View style={{ backgroundColor: selector=='dark' ? Allcolor.active.primary : Allcolor.inActive.primary }} >
		
			<Image source={{ uri: res.imageLink }} style={{width:'100%',height:300}}/>
			<View style={styles.mainViewStyle}>
					<Text style={{
				 	color:selector =='dark'?Allcolor.active.textColor : Allcolor.inActive.textColor
                    ,fontWeight:'bold',fontSize:25}}>{res.Name}</Text>
				<View style={styles.viewStyle} >
					<FontAwesome name='user-circle' color={'#80dfff'} size={15} />
						<Text style={{ color:selector =='dark'?Allcolor.active.textColor : Allcolor.inActive.textColor }}> {res.Age}Yrs,{res.Height}</Text>
				</View> 
				<View style={styles.viewStyle} >
					<FontAwesome name='shopping-bag' color={'#80dfff'} size={15} />
						<Text style={{ color:selector =='dark'?Allcolor.active.textColor : Allcolor.inActive.textColor }}> {res.EmployIn}/{res.Ocupattion}</Text>
				</View> 
				<View style={styles.viewStyle} >
					<FontAwesome name='user-circle' color={'#80dfff'} size={15} />
						<Text style={{ color:selector =='dark'?Allcolor.active.textColor : Allcolor.inActive.textColor }}> {res.StateLiVeIn}</Text>
				</View> 
			</View>
				<View style={{ padding: 5, backgroundColor: "#dadada", marginTop: 5 }}></View>
			<View style={styles.mainViewStyle}>
				{(userGender == 'Male') ? <Text style={{color:selector =='dark'?Allcolor.active.textColor : Allcolor.inActive.textColor
	            ,fontSize:18,
	            fontWeight:"bold"}}>His Basic Details</Text> : <Text style={{color:selector =='dark'?Allcolor.active.textColor : Allcolor.inActive.textColor
				,fontSize:18,
				fontWeight:"bold"}}>Her Basic Details</Text>}
				<View style={styles.viewStyle} >
					<FontAwesome name='user-circle' color={'#80dfff'} size={25} />
					<View >
							<Text style={{ fontSize: 15, color:selector =='dark'?Allcolor.active.textColor : Allcolor.inActive.textColor,marginLeft:5,}}>Age</Text>
						<Text style={{ fontSize: 15,color:"grey"}}> {res.Age}Years</Text>

					</View>
				</View> 
				<View style={styles.viewStyle} >
					<MaterialCommunityIcons name='human-male-height' color={'#80dfff'} size={25} />
					<View >
						<Text style={{ fontSize: 15, color:selector =='dark'? Allcolor.active.textColor:Allcolor.inActive.textColor, marginLeft: 5, }}>Physique</Text>
						<Text style={{ fontSize: 15 ,color:"grey"}}> {res.PhysicalStatus} | {res.Height}</Text>

					</View>
				</View> 
				<View style={styles.viewStyle} >
					<Foundation name='comments' color={'#80dfff'} size={25} />
					<View >
						<Text style={{ fontSize: 15, color:selector =='dark'? Allcolor.active.textColor:Allcolor.inActive.textColor, marginLeft: 5, }}>Spoken Languages</Text>
						<Text style={{ fontSize: 15,fontWeight:"bold" ,color:'grey'}}> {res.MotherTongue}<Text>(Mother Tongue)</Text></Text> 

					</View>
				</View> 
				<View style={styles.viewStyle} >
					<Ionicons name='fast-food-outline' color={'#80dfff'} size={25} />
					<View >
							<Text style={{ fontSize: 15, color:selector =='dark'?Allcolor.active.textColor : Allcolor.inActive.textColor }}>Eating Habits</Text>
						<Text style={{ fontSize: 15,color:"grey" }}>Any</Text>

					</View>
				</View> 
				<View style={styles.viewStyle} >
					<FontAwesome5 name='ring' color={'#80dfff'} size={25} />
					<View >
							<Text style={{ fontSize: 15, color:selector =='dark'?Allcolor.active.textColor : Allcolor.inActive.textColor }}>Maritial Status</Text>
						<Text style={{ fontSize: 15,color:"grey" }}>{res.MaritialStatus}</Text>

					</View>
				</View> 
				<View style={styles.viewStyle} >
					<FontAwesome5 name='ring' color={'#80dfff'} size={25} />
					<View >
						<Text style={{ fontSize: 15, color:selector =='dark'?Allcolor.active.textColor : Allcolor.inActive.textColor }}>Lives in</Text>
						<Text style={{ fontSize: 15,color:"grey" }}>{res.StateLiVeIn}</Text>

					</View>
				</View>
				<View style={styles.viewStyle} >
					<FontAwesome6 name='flag' color={'#80dfff'} size={25} />
					<View >
							<Text style={{ fontSize: 15, color:selector =='dark'?Allcolor.active.textColor : Allcolor.inActive.textColor }}>Citizenship </Text>
						<Text style={{ fontSize: 15, marginLeft:2,color:"grey"}}>{res.CountryLiveIn}</Text>

					</View>
				</View> 
			</View>
				<View style={{ padding: 5, backgroundColor: "#dadada", marginTop: 5 }}></View>
			<View style={styles.mainViewStyle}>
					{(userGender == 'Male') ? <Text style={{color:selector =='dark'?Allcolor.active.textColor : Allcolor.inActive.textColor
						,fontSize:18,
						fontWeight:"bold"}}>His Religious Details</Text> : <Text style={{color:selector =='dark'?Allcolor.active.textColor : Allcolor.inActive.textColor
						,fontSize:18,
						fontWeight:"bold"}}> Her Religious Details</Text>}
					<View style={styles.viewStyle} >
						<MaterialCommunityIcons name='hands-pray' color={'#80dfff'} size={25} />
						<View >
							<Text style={{ fontSize: 15, color:selector =='dark'? Allcolor.active.textColor:Allcolor.inActive.textColor, marginLeft: 5, }}>Religion</Text>
							<Text style={{ fontSize: 15, marginLeft: 5,color:"grey" }}>{res.Religion}</Text>

						</View>
					</View>
			</View>
				<View style={{ padding: 5, backgroundColor: "#dadada" ,marginTop:5}}></View>
			<View style={styles.mainViewStyle}>
					{(userGender == 'Male') ? <Text style={{color:selector =='dark'?Allcolor.active.textColor : Allcolor.inActive.textColor
						,fontSize:18,
						fontWeight:"bold"}}> About His Family</Text> : <Text style={{color:selector =='dark'?Allcolor.active.textColor : Allcolor.inActive.textColor
						,fontSize:18,
						fontWeight:"bold"}}>About Her Family</Text>}
					<View style={styles.viewStyle} >
						<MaterialIcons name='family-restroom' color={'#80dfff'} size={25} />
						<View >
							<Text style={{ fontSize: 15, color:selector =='dark'? Allcolor.active.textColor:Allcolor.inActive.textColor, }}>Family Type</Text>
							<Text style={{ fontSize: 15,color:"grey" }}>{res.FamilyType}</Text>

						</View>
					</View>
					<View style={styles.viewStyle} >
						<Ionicons name='home' color={'#80dfff'} size={25} />
						<View >
							<Text style={{ fontSize: 15, color:selector =='dark'? Allcolor.active.textColor:Allcolor.inActive.textColor, }}>Family Status</Text>
							<Text style={{ fontSize: 15,color:"grey" }}>{res.FamilyStatus}</Text>

						</View>
					</View>


			</View>

		</View>
		</ScrollView>
	)
}

const styles=StyleSheet.create({
	viewStyle: {
		flexDirection: "row", 
		marginTop: 10

	 },
	mainViewStyle: {
		marginTop:10, 
		paddingHorizontal: 20 },
	// textStyle:{
	// 	color:selector =='dark'?Allcolor.active.textColor : Allcolor.inActive.textColor
	//  fontSize:18,
	//  fontWeight:"bold"r
	// }

})