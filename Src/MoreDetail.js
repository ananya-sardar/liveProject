import React, { useEffect, useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Foundation from 'react-native-vector-icons/Foundation'
// import { Dropdown } from 'react-native-material-dropdown';
import { Dropdown } from "react-native-element-dropdown";
import Button from "./Component/Button";
import database from '@react-native-firebase/database'
import Ionicons from 'react-native-vector-icons/Ionicons'
import RadioFrom from 'react-native-simple-radio-button'
import auth from '@react-native-firebase/auth'
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { Allcolor } from "./Resorce/Utils/AllColor";
// import database from '@react-native-firebase/database'
// import Ionicons from 'react-native-vector-icons/Ionicons'

export default function Moredetails() {
	
	const Navigation=useNavigation()
	let educationItems = [{
		label: 'B.A', value: 'B.A',
	}, {
		label: 'B.com', value: 'B.com',
	}, {
		label: 'Bsc', value: 'Bsc',
	}, {
		label: 'B.plan', value: 'B.plan'
	}, {
		label: '10th', value: '10th'
	}, {
		label: '12th', value: '12th'
	}

	];
	const empolyItems = [
		{
			label: 'Business', value: 'Business',
		}, {
			label: 'self-employ', value: 'self-employ',
		}, {
			label: 'Job', value: 'job',
		}
	]
		const occupationItems = [
		{
			label: 'Manager', value: 'Manager',
		}, {
			label: 'Teachers', value: 'Teachers',
		}, {
			label: 'CEO', value: 'CEO',
		}, {
			label: 'Engineer', value: 'Engineer',
		}
	]
	const incomeItems = [
		{
			label:'1-1.5 Lakhs', value:'1-1.5 Lakhs',
		}, {
			label: '2-3 LakhS', value: '2-3 LakhS',
		}, {
			label: '3-4 Lakhs', value: '3-4 Lakhs',
		}, {
			label: '5-6 Lakhs', value: '5-6 Lakhs',
		}
	]
	const familyItems = [
		{
			label: 'Upper-Middle Class', value: 'Upper-Middle Class',
		}, {
			label: 'Upper Class', value: 'Upper Class',
		}, {
			label: 'High Class', value: 'High Class',
		},
		{
			label: 'Rich/Affluent', value: 'Rich/Affluent',
		}
	]
	const rdaiotems = [
		{
			label: 'Joint', value: 'Joint',
		}, {
			label: 'Nuclear', value: 'Nuclear',
		}
	]
	const [heightValue, setHeightValue] = useState("")
	const [physicValue, setPhysicValue] = useState("")
	const [educationValue, seteducationValue] = useState("")
	const [empolyvalue, setempolyvalue] = useState("")
	const [occupationValue, setoccupationValue] = useState("")
	const [incomeValue, setIncomeValue] = useState("")
	const [familyValue, setFamilyValue] = useState("")
	const [ftype, setftype] = useState("")

	
	const getHeight=(value)=>{
		setHeightValue(value)

	}
	const getPhysicStatus=(value)=>{
		setPhysicValue(value)
	}
	const fireCalls = () => {
		
		const time = Date.parse(new Date());
		
		database().ref("userDetails").child(auth().currentUser.uid).child('userPersonalDetailMore').set({
			heightValue,
			physicValue,
			educationValue,
			empolyvalue,
			occupationValue,
			incomeValue,
			familyValue,
			ftype
			

		})
		

		Alert.alert('Your details submited done');
		database().ref('MemberLIst').child('singelMember').set({
			MenUserData,
			WomenUserData
		})

		Navigation.navigate('Preferences')
		


	}
	const MenUserData = [
		{
			Name: "Suraj khan",
			Age: 26,
			Gender: 'Male',
			Religion: 'Islam',
			MotherTongue: "Bengali",
			MobileNumber: '1882759246',
			MaritialStatus: 'Singel',
			CountryLiveIn: 'India',
			StateLiVeIn: 'West Bengal',
			Height: '5ft 2in',
			PhysicalStatus: "Normal",
			EmployIn: 'Business',
			Ocupattion: 'Maneger',
			Incoume: "2-2.5lakhs",
			FamilyStatus: 'Upper Middle Class',
			FamilyType: 'joint',
			imageLink:'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300'


		},
		{
			Name: "SalMan khan",
			Age: 26,
			Gender: 'Male',
			Religion: 'Islam',
			MotherTongue: "Bengali",
			MobileNumber: '18827575446',
			MaritialStatus: 'Singel',
			CountryLiveIn: 'India',
			StateLiVeIn: 'West Bengal',
			Height: '5ft 2in',
			PhysicalStatus: "Normal",
			EmployIn: 'Teacher',
			Ocupattion: 'Teacher',
			Incoume: "3-3.5lakhs",
			FamilyStatus: 'Upper Middle Class',
			FamilyType: 'joint',
			imageLink:"https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=300"


		}, {
			Name: "Sujan Saha",
			Age: 28,
			Gender: 'Male',
			Religion: 'Hinduism',
			MotherTongue: "Bengali",
			Caste: 'Kshatriya',
			MobileNumber: '1882759246',
			MaritialStatus: 'Singel',
			CountryLiveIn: 'India',
			StateLiVeIn: 'West Bengal',
			Height: '5ft 2in',
			PhysicalStatus: "Normal",
			EmployIn: 'Business',
			Ocupattion: 'Maneger',
			Incoume: "2-2.5lakhs",
			FamilyStatus: 'Upper Middle Class',
			FamilyType: 'joint',
			imageLink:"https://images.pexels.com/photos/1808387/pexels-photo-1808387.jpeg?auto=compress&cs=tinysrgb&w=300"


		}, {
			Name: "Bipul Banerjee",
			Age: 28,
			Gender: 'Male',
			Religion: 'Hinduism',
			Caste: 'Brahmin',
			MotherTongue: "Bengali",
			MobileNumber: '1882759246',
			MaritialStatus: 'Singel',
			CountryLiveIn: 'India',
			StateLiVeIn: 'West Bengal',
			Height: '5ft 2in',
			PhysicalStatus: "Normal",
			EmployIn: 'Business',
			Ocupattion: 'Maneger',
			Incoume: "2-2.5lakhs",
			FamilyStatus: 'Upper Middle Class',
			FamilyType: 'joint',
			imageLink:'https://images.pexels.com/photos/4307884/pexels-photo-4307884.jpeg?auto=compress&cs=tinysrgb&w=300'


		}, {
			Name: "Robers Vadra",
			Age: 30,
			Gender: 'Male',
			Religion: 'Buddhism',
			MotherTongue: "English",
			MobileNumber: '1882759246',
			MaritialStatus: 'Singel',
			CountryLiveIn: 'India',
			StateLiVeIn: 'West Bengal',
			Height: '5ft 2in',
			PhysicalStatus: "Normal",
			EmployIn: 'Business',
			Ocupattion: 'Maneger',
			Incoume: "2-2.5lakhs",
			FamilyStatus: 'Upper Middle Class',
			FamilyType: 'joint',
			imageLink:"https://images.pexels.com/photos/7580994/pexels-photo-7580994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"


		}, {
			Name: "Micel junction",
			Age: 30,
			Gender: 'Male',
			Religion: 'Chistian',
			MotherTongue: "Bengali",
			MobileNumber: '1882759246',
			MaritialStatus: 'Singel',
			CountryLiveIn: 'India',
			StateLiVeIn: 'West Bengal',
			Height: '5ft 2in',
			PhysicalStatus: "Normal",
			EmployIn: 'Business',
			Ocupattion: 'Maneger',
			Incoume: "2-2.5lakhs",
			FamilyStatus: 'Upper Middle Class',
			FamilyType: 'joint',
			imageLink:"https://images.pexels.com/photos/5234256/pexels-photo-5234256.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
		}, {
			Name: "Ashis Bhatiya",
			Age: 32,
			Gender: 'Male',
			Religion: 'Hinduism',
			MotherTongue: "Bengali",
			MobileNumber: '1882759246',
			MaritialStatus: 'Singel',
			CountryLiveIn: 'India',
			StateLiVeIn: 'West Bengal',
			Height: '5ft 2in',
			PhysicalStatus: "Normal",
			EmployIn: 'Business',
			Ocupattion: 'Maneger',
			Incoume: "2-2.5lakhs",
			FamilyStatus: 'Upper Middle Class',
			FamilyType: 'joint',
			imageLink:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"


		}, {
			Name: "Asik khan",
			Age: 32,
			Gender: 'Male',
			Religion: 'Islam',
			MotherTongue: "Bengali",
			MobileNumber: '1882759246',
			MaritialStatus: 'Singel',
			CountryLiveIn: 'India',
			StateLiVeIn: 'West Bengal',
			Height: '5ft 2in',
			PhysicalStatus: "Normal",
			EmployIn: 'Business',
			Ocupattion: 'Maneger',
			Incoume: "2-2.5lakhs",
			FamilyStatus: 'Upper Middle Class',
			FamilyType: 'joint',
			imageLink:"https://images.pexels.com/photos/905470/pexels-photo-905470.jpeg?auto=compress&cs=tinysrgb&w=300"


		}, {
			Name: "Santu saha",
			Age: 34,
			Gender: 'Male',
			Religion: 'Hinduism',
			MotherTongue: "Bengali",
			MobileNumber: '1882759246',
			MaritialStatus: 'Singel',
			CountryLiveIn: 'India',
			StateLiVeIn: 'West Bengal',
			Height: '5ft 2in',
			PhysicalStatus: "Normal",
			EmployIn: 'Business',
			Ocupattion: 'Maneger',
			Incoume: "2-2.5lakhs",
			FamilyStatus: 'Upper Middle Class',
			FamilyType: 'joint',
			imageLink:'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

		},

	]
	const WomenUserData = [
		{
			Name: "Sarika khan",
			Age: 22,
			Gender: 'Female',
			Religion: 'Islam',
			MotherTongue: "Bengali",
			MobileNumber: '1882759246',
			MaritialStatus: 'Singel',
			CountryLiveIn: 'India',
			StateLiVeIn: 'West Bengal',
			Height: '5ft 2in',
			PhysicalStatus: "Normal",
			EmployIn: 'Business',
			Ocupattion: 'Maneger',
			Incoume: "2-2.5lakhs",
			FamilyStatus: 'Upper Middle Class',
			FamilyType: 'joint',
			imageLink:"https://tse3.mm.bing.net/th?id=OIP.MrtDS4IzCsz3q2qMnAYyJwHaJH&pid=Api&P=0&h=180"


		},
		{
			Name: "SalMa khan",
			Age: 22,
			Gender: 'Female',
			Religion: 'Islam',
			MotherTongue: "Bengali",
			MobileNumber: '18827575446',
			MaritialStatus: 'Singel',
			CountryLiveIn: 'India',
			StateLiVeIn: 'West Bengal',
			Height: '5ft 2in',
			PhysicalStatus: "Normal",
			EmployIn: 'Teacher',
			Ocupattion: 'Teacher',
			Incoume: "3-3.5lakhs",
			FamilyStatus: 'Upper Middle Class',
			FamilyType: 'joint',
			imageLink:"https://tse3.mm.bing.net/th?id=OIP.1-DB2RNg8vz2BNX89HpzYgAAAA&pid=Api&P=0&h=180"

		}, {
			Name: "Sojani Saha",
			Age: 24,
			Gender: 'Female',
			Religion: 'Hinduism',
			MotherTongue: "Bengali",
			Caste: 'Kshatriya',
			MobileNumber: '1882759246',
			MaritialStatus: 'Singel',
			CountryLiveIn: 'India',
			StateLiVeIn: 'West Bengal',
			Height: '5ft 2in',
			PhysicalStatus: "Normal",
			EmployIn: 'Business',
			Ocupattion: 'Maneger',
			Incoume: "2-2.5lakhs",
			FamilyStatus: 'Upper Middle Class',
			FamilyType: 'joint',
			imageLink:"https://tse4.mm.bing.net/th?id=OIP._Ne0gFSNXwcBfrMSzTYyNgHaKr&pid=Api&P=0&h=180"


		}, {
			Name: "Manimala Banerjee",
			Age: 24,
			Gender: 'Female',
			Religion: 'Hinduism',
			Caste: 'Brahmin',
			MotherTongue: "Bengali",
			MobileNumber: '1882759246',
			MaritialStatus: 'Singel',
			CountryLiveIn: 'India',
			StateLiVeIn: 'West Bengal',
			Height: '5ft 2in',
			PhysicalStatus: "Normal",
			EmployIn: 'Business',
			Ocupattion: 'Maneger',
			Incoume: "2-2.5lakhs",
			FamilyStatus: 'Upper Middle Class',
			FamilyType: 'joint',
			imageLink:"https://tse4.mm.bing.net/th?id=OIP.DRcrv5YAH-EdC4m4SJpPrgHaLH&pid=Api&P=0&h=180"


		}, {
			Name: "Englina Vadra",
			Age: 26,
			Gender: 'Female',
			Religion: 'Buddhism',
			MotherTongue: "English",
			MobileNumber: '1882759246',
			MaritialStatus: 'Singel',
			CountryLiveIn: 'India',
			StateLiVeIn: 'West Bengal',
			Height: '5ft 2in',
			PhysicalStatus: "Normal",
			EmployIn: 'Business',
			Ocupattion: 'Maneger',
			Incoume: "2-2.5lakhs",
			FamilyStatus: 'Upper Middle Class',
			FamilyType: 'joint',
			imageLink:"https://tse4.mm.bing.net/th?id=OIP.RaX6ItML3024aAIjbhw0QAHaLH&pid=Api&P=0&h=180"


		}, {
			Name: "Dekila junction",
			Age: 26,
			Gender: 'Female',
			Religion: 'Chistian',
			MotherTongue: "Bengali",
			MobileNumber: '1882759246',
			MaritialStatus: 'Singel',
			CountryLiveIn: 'India',
			StateLiVeIn: 'West Bengal',
			Height: '5ft 2in',
			PhysicalStatus: "Normal",
			EmployIn: 'Business',
			Ocupattion: 'Maneger',
			Incoume: "2-2.5lakhs",
			FamilyStatus: 'Upper Middle Class',
			FamilyType: 'joint',
			imageLink:'https://tse2.mm.bing.net/th?id=OIP.Abh16TPzsS_E6bhcFU8VPQHaE8&pid=Api&P=0&h=180'


		}, {
			Name: "Arsiya Bhatiya",
			Age: 28,
			Gender: 'Female',
			Religion: 'Hinduism',
			MotherTongue: "Bengali",
			MobileNumber: '1882759246',
			MaritialStatus: 'Singel',
			CountryLiveIn: 'India',
			StateLiVeIn: 'West Bengal',
			Height: '5ft 2in',
			PhysicalStatus: "Normal",
			EmployIn: 'Business',
			Ocupattion: 'Maneger',
			Incoume: "2-2.5lakhs",
			FamilyStatus: 'Upper Middle Class',
			FamilyType: 'joint',
			imageLink:"https://tse2.mm.bing.net/th?id=OIP.83rhNa-RLcQbvoTD8ri1cAHaLH&pid=Api&P=0&h=180"


		}, {
			Name: "Rubina khan",
			Age: 28,
			Gender: 'Female',
			Religion: 'Islam',
			MotherTongue: "Bengali",
			MobileNumber: '1882759246',
			MaritialStatus: 'Singel',
			CountryLiveIn: 'India',
			StateLiVeIn: 'West Bengal',
			Height: '5ft 2in',
			PhysicalStatus: "Normal",
			EmployIn: 'Business',
			Ocupattion: 'Maneger',
			Incoume: "2-2.5lakhs",
			FamilyStatus: 'Upper Middle Class',
			FamilyType: 'joint',
			imageLink:"https://tse2.mm.bing.net/th?id=OIP.88U_XTsYICEJKNBtXBG9gAHaLH&pid=Api&P=0&h=180"


		}, {
			Name: "Rina Saha",
			Age: 29,
			Gender: 'Female',
			Religion: 'Hinduism',
			MotherTongue: "Bengali",
			MobileNumber: '1882759246',
			MaritialStatus: 'Singel',
			CountryLiveIn: 'India',
			StateLiVeIn: 'West Bengal',
			Height: '5ft 2in',
			PhysicalStatus: "Normal",
			EmployIn: 'Business',
			Ocupattion: 'Maneger',
			Incoume: "2-2.5lakhs",
			FamilyStatus: 'Upper Middle Class',
			FamilyType: 'joint',
			imageLink:'https://www.nyu.edu/content/dam/nyu/photoBureau/images/16-0193-2.jpg'


		},

	]
	
	const seletor = useSelector(state => state.userName.mood)

      

	
	return (
		
       <View style={{flex:1,backgroundColor:seletor=='dark'?  Allcolor.active.primary:Allcolor.inActive.primary}}>

	   
		<ScrollView style={{ margin: 20 }}>
			<View style={{
				flexDirection: "row", justifyContent: "space-between"
			}}>
				<Ionicons name='checkmark-done' size={20} color={'green'} />
                <Text style={{color:seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor}}>Just a few more details and you are good to go</Text>
			</View>
				<Text style={{
					marginHorizontal: 20,
					marginTop: 20,
					// fontSize: 20,
					fontWeight: "bold",
					color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor
                    }}>HEIGHT
				</Text>
				<TextInput style={{
					borderWidth: 1,
					marginHorizontal: 20,
					height: 38,
					color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor,
					borderRadius: 18,
					borderColor: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor
				}} value={heightValue} onChangeText={getHeight}/>


			<Text style={{
					marginHorizontal: 20,
					marginTop: 20,
					// fontSize: 20,
					fontWeight: "bold",
					color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor
                    }}>PHYSICAL STATUS</Text>
				<TextInput style={{
					borderWidth: 1,
					marginHorizontal: 20,
					height: 38,
					color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor,
					borderRadius: 18,
					borderColor: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor
				}} value={physicValue} onChangeText={getPhysicStatus} />

			
			
			< Text style={{
					marginHorizontal: 20,
					marginTop: 20,
					// fontSize: 20,
					fontWeight: "bold",
					color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor
                    }}>
             EDUCATION
			</Text>
			<Dropdown
				
				    inputSearchStyle={styles.inputSearchStyle}
					itemTextStyle={{ color: seletor=='dark'?  Allcolor.active.primary:Allcolor.inActive.primary }}
					selectedTextStyle={{ color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor }}
					placeholderStyle={{ color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor }}
					style={{
						marginHorizontal: 16,
						height: 35,
						paddingHorizontal: 10,
						borderRadius: 20,
						borderColor: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor,
						// borderBottomColor: 'gray',
						borderWidth: 1,
					}}

				iconStyle={styles.iconStyle}
				data={educationItems}
				search
				maxHeight={150}
				labelField="label"
				valueField="value"
				placeholder="Choose"
				searchPlaceholder="Search..."
				value={educationValue}
				onChange={item => {
					seteducationValue(item.value);

				}}

			/>
			<Text style={{
					marginHorizontal: 20,
					marginTop: 20,
					// fontSize: 20,
					fontWeight: "bold",
					color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor
                    }}>EMPLOYED IN</Text>
			<Dropdown
			
					itemTextStyle={{ color: seletor=='dark'?  Allcolor.active.primary:Allcolor.inActive.primary }}
					selectedTextStyle={{ color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor }}
					placeholderStyle={{ color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor }}
					style={{
						marginHorizontal: 16,
						height: 35,
						paddingHorizontal: 10,
						borderRadius: 20,
						borderColor: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor,
						// borderBottomColor: 'gray',
						borderWidth: 1,
					}}

				inputSearchStyle={styles.inputSearchStyle}
				iconStyle={styles.iconStyle}
				data={empolyItems}
				search
				maxHeight={150}
				labelField="label"
				valueField="value"
				placeholder="STATE lIVING IN"
				searchPlaceholder="Search..."
				value={empolyvalue}
				onChange={item => {
					setempolyvalue(item.value);

				}}

			/>

			<Text style={{
					marginHorizontal: 20,
					marginTop: 20,
					// fontSize: 20,
					fontWeight: "bold",
					color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor
                    }}>
				OCCUPATIION
			</Text>
			<Dropdown
					itemTextStyle={{ color: seletor=='dark'?  Allcolor.active.primary:Allcolor.inActive.primary }}
					selectedTextStyle={{ color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor }}
					placeholderStyle={{ color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor }}
					style={{
						marginHorizontal: 16,
						height: 35,
						paddingHorizontal: 10,
						borderRadius: 20,
						borderColor: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor,
						// borderBottomColor: 'gray',
						borderWidth: 1,
					}}

				inputSearchStyle={styles.inputSearchStyle}
				iconStyle={styles.iconStyle}
				data={occupationItems}
				search
				maxHeight={150}
				labelField="label"
				valueField="value"
				placeholder="Choose"
				searchPlaceholder="Search..."
				value={occupationValue}
				onChange={item => {
					setoccupationValue(item.value);


				}}

			/>

			<Text style={{
					marginHorizontal: 20,
					marginTop: 20,
					// fontSize: 20,
					fontWeight: "bold",
					color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor
                    }}>
				ANNUAL INCOME
			</Text>
			<Dropdown
					itemTextStyle={{ color: seletor=='dark'?  Allcolor.active.primary:Allcolor.inActive.primary }}
					selectedTextStyle={{ color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor }}
					placeholderStyle={{ color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor }}
					style={{
						marginHorizontal: 16,
						height: 35,
						paddingHorizontal: 10,
						borderRadius: 20,
						borderColor: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor,
						// borderBottomColor: 'gray',
						borderWidth: 1,
					}}

				iconStyle={styles.iconStyle}
				data={incomeItems}
				maxHeight={150}
				labelField="label"
				valueField="value"
				placeholder="Choose"
				value={incomeValue}
				onChange={item => {
					setIncomeValue(item.value);


				}}

			/>

			<Text style={{
					marginHorizontal: 20,
					marginTop: 20,
					// fontSize: 20,
					fontWeight: "bold",
					color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor
                    }}>
				 FAMILY STATUS
			</Text>
			<Dropdown
					itemTextStyle={{ color: seletor=='dark'?  Allcolor.active.primary:Allcolor.inActive.primary }}
					selectedTextStyle={{ color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor }}
					placeholderStyle={{ color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor }}
					style={{
						marginHorizontal: 16,
						height: 35,
						paddingHorizontal: 10,
						borderRadius: 20,
						borderColor: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor,
						// borderBottomColor: 'gray',
						borderWidth: 1,
					}}

				iconStyle={styles.iconStyle}
				data={familyItems}
				maxHeight={150}
				labelField="label"
				valueField="value"
				placeholder="Choose"
				value={familyValue}
				onChange={item => {
					setFamilyValue(item.value);


				}}

			/>
			<Text style={{
					marginHorizontal: 20,
					marginTop: 20,
					// fontSize: 20,
					fontWeight: "bold",
					color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor
                    }}>FAMILY TYPE</Text>
			
			<RadioFrom
				radio_props={rdaiotems}
				// initial={value}
					labelStyle={{ color: seletor=='dark'?  Allcolor.active.textColor:Allcolor.inActive.textColor }}
				formHorizontal={true}
				labelHorizontal={false}
				buttonColor={'grey'}
				animation={true}

				onPress={(value) => {
					setftype(value)

				}
				}

				style={{ marginHorizontal: 10, }}
			/>

			
			<Button textname={'Complete Registration'}
		    functionFire={fireCalls}
			/>




		</ScrollView>
		</View>
	)
}
const styles = StyleSheet.create({
	inputtext: {
		borderWidth: 1,
		marginHorizontal: 20,
		height: 50,
		
	},
	label: {
		marginHorizontal: 20,
		marginTop: 20,
		// fontSize: 20,
		fontWeight: "bold",
		color: "black"
	},
	dropdown: {
		marginHorizontal: 20,
		height: 50,
		// borderBottomColor: 'gray',
		borderWidth: 1,
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

