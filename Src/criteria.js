
import React, { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import ActiveButton from "./Component/ActiveButton";
import databsae from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'
import { useNavigation } from "@react-navigation/native";
import { Dropdown } from "react-native-element-dropdown";
import { useSelector } from "react-redux";
import { Allcolor } from "./Resorce/Utils/AllColor";
export default function Criteria() {

	const [getAge,setGetAge] = useState()
	const [getRelligon, setGetRelligon] = useState()
	const [getHeight, setGetHeight] = useState()
	const [data,setData]=useState()
	const [copyData,setCopyData]=useState()
	const Navigation=useNavigation()
     
	const seletor = useSelector(state => state.userName.mood)


	const religion = [
		{ label: 'Hinduism', value: 'Hinduism' },
		{ label: 'Islam', value: 'Islam' },
		{ label: 'Chistian', value: 'Chistian' },
		{ label: 'Buddhism', value: 'Buddhism' },
	]
	const getAgeFun = (val) => {
		setGetAge(val)
	}
	const getRelligionFun = (val) => {
		setGetRelligon(val)

	}
	const getHeightFun = (val) => {
		setGetHeight(val)
	}
	const functionCall = () => {
		data.forEach((item)=>{
			
			if(item.Age == getAge){
            
				
					Navigation.navigate('FilterUser', { 'filterUser': item })
				
					
				
			}
		})

	}
	useEffect(() => {
		let dataOn = databsae().ref("userDetails").child(auth().currentUser.uid).child('userRegisterDetail')
		dataOn.on('value', (snapShort) => {
			let result = snapShort.val()
		    
			if   (result.value == 'Female') {
			    	databsae().ref('MemberLIst').child('singelMember').child('MenUserData').once('value', (snapShort) => {
					setData(snapShort.val())



				})
			} else {
				databsae().ref('MemberLIst').child('singelMember').child('WomenUserData').once('value', (snapShort) => {
					setData(snapShort.val())
				})

			}



		})
		return (() => {
			if (dataOn) {
				dataOn.off()
			}
		})


	})

	return (
		<View style={{ flex: 1, backgroundColor: seletor =='dark'?Allcolor.active.primary:Allcolor.inActive.primary}}>
			<Text style={{
				marginHorizontal: 38,

				color: seletor == 'dark' ? Allcolor.active.textColor : Allcolor.inActive.textColor,
				position: "relative",
				fontWeight: "bold",
				top: 40,
            }}>Age</Text>
			<TextInput style={{
				borderBottomWidth: 1,
				marginHorizontal: 30,
				textAlign: "right"
				,
				color: seletor == 'dark' ? Allcolor.active.textColor : Allcolor.inActive.textColor
            }} value={getAge} onChangeText={getAgeFun} />
			<Dropdown
				data={religion}
				maxHeight={150}
				labelField="label"
				valueField="value"
				style={{
					borderBottomWidth: 1,
					marginHorizontal: 30,
					textAlign: "right",
					marginTop: 35
                     }}
				placeholder="Religion"
				value={getRelligon}
				// placeholderStyle={{
                //     color:'red',
				// 	fontWeight: "bold",
				// 	marginLeft:5
				// 	}}
				
				// style={styles.containerStyle}
				onChange={item => {
					setGetRelligon(item.value);

				}}
				// itemTextStyle={{ backgroundColorcolor: seletor == 'dark' ? Allcolor.active.primary : Allcolor.inActive.primary }}
				selectedTextStyle={{ color: seletor == 'dark' ? Allcolor.active.textColor : Allcolor.inActive.textColor}}
				placeholderStyle={{ color: seletor == 'dark' ? Allcolor.active.textColor : Allcolor.inActive.textColor}}



			/>
			{/* <TextInput style={styles.inputtext} value={getRelligon} onChangeText={getRelligionFun} /> */}
			{/* <Text style={styles.label}>Height</Text>
			<TextInput style={styles.inputtext} value={getHeight} onChangeText={getHeightFun} />
			<Text style={styles.label}>Mother Tongue</Text>
			<TextInput style={styles.inputtext} value={getHeight} onChangeText={getHeightFun} />
			<Text style={styles.label}>Religion</Text>
			<TextInput style={styles.inputtext} value={getHeight} onChangeText={getHeightFun} />
              
			 */}
  
			<ActiveButton textname={'Search'} functionLogin={functionCall} />

		
		</View>
	)
}
const styles = StyleSheet.create({
	inputtext: {
		
		// marginTop:20

	},
	label: {
		
		// left:8
	}

})