import React, { useEffect, useState } from "react";
import { Alert, FlatList, Image, Modal, PermissionsAndroid, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import databsae from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { launchCamera } from "react-native-image-picker";
import storage from '@react-native-firebase/storage'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from "@react-navigation/native";
import Entypo from 'react-native-vector-icons/Entypo'
// import RazorpayCheckout from 'react-native-razorpay';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useDispatch, useSelector } from "react-redux";
import { setMood } from "./Redux/Slice/slice";
import { Allcolor } from "./Resorce/Utils/AllColor";
export default function Home(){
	const [getGenderVel, setGetGenderVel]=useState()
	const [profileImg,setProfileImg]=useState()
	const [isModal,setIsModal]=useState(false)

	 const Navigation=useNavigation()
	useEffect(() => {
	
		let dataOn = databsae().ref("userDetails").child(auth().currentUser.uid).child('userRegisterDetail')
		dataOn.on('value', (snapShort) => {
			let result = snapShort.val()
			
			
			setProfileImg(result.imgUrl)

			
			if (result.value == 'Female') {
				databsae().ref('MemberLIst').child('singelMember').child('MenUserData').once('value', (snapShort) => {
                    // console.log(snapShort.val())
					setGetGenderVel(snapShort.val())



				})
			} else {
				databsae().ref('MemberLIst').child('singelMember').child('WomenUserData').once('value', (snapShort) => {
					// console.log(snapShort.val())

					setGetGenderVel(snapShort.val())
				})

			}



		})
		return (() => {
			if (dataOn) {
				dataOn.off()
			}
		})


	})
	const logout = () => {
		auth().signOut()

	}
	


	const getImg = () => 
		Alert.alert('Upload Images from','', [
			{
				text: 'Cancel',
				onPress: () => console.log('Cancel pressed'),
				style: "cancel"

			},
			{
				text: "Camera",
				onPress:() => {
                  getimageFromCamera()
				}
			},
			{
				text: "Gallery",
				onPress:() => {
					console.log('no')
				}
			}
		])

	const getimageFromCamera=async ()=>{
		if(Platform.OS=='android'){
			try{
				const granted = await PermissionsAndroid.request(
						PermissionsAndroid.PERMISSIONS.CAMERA,
						{
							title: 'Camera permition',
							message: 'app needs access to your camera',
							buttonNeutral: 'Ask Me Later',
							buttonNegative: 'Cancel',
							buttonPositive: 'OK',

						},
					)
				if (granted == PermissionsAndroid.RESULTS.GRANTED) {
					uploadCameraImg();

				} else {
					denyClicked();

				}
			}catch(er){
				console.log('ERR::',er)

			}
		}
	}

	const uploadCameraImg=()=>{
		const options = {
			storegeOptions: {
				path: "images",
				mediaType: 'photo'
			}
		}
		launchCamera(options, Response => {
			//this
			if (Response.didCancel) {
				console.log('cancelles');

			} else if (Response.err) {
				console.log('error', Response.err)
			} else if (Response.customButton) {
				console.log('customButton');
			} else {
				setImageToFirebaseStorage(Response.assets[0].uri)



			}
		})
	}

	const userMoreInformatiion=(element)=>{
		Navigation.navigate('UserDetails', { useInformation:element.item })
	}

	const setImageToFirebaseStorage=async (imgUrlLink)=>{
		
		const reference = storage().ref('newUserProfile/singelUser')
		await reference.putFile(imgUrlLink)
		const url = await reference.getDownloadURL()
		setImageToFirebase(url)

	}
	const setImageToFirebase= async (filePath)=>{
		databsae().ref("userDetails").child(auth().currentUser.uid).child('userRegisterDetail').update({
		
			imgUrl:filePath
		})
	}
	const ModalOn=()=>{
		setIsModal(true)
	}
	const dispatch=useDispatch()
	
	const selector = useSelector(state => state.userName.mood)
	const changeMOod=()=>{
		if(selector=='dark'){
             dispatch(setMood("light"))

		}else{
			dispatch(setMood("dark"))

		}

	}
	
	
	const getMood = () => {

			Alert.alert('do you want change the mode','',[
				{text: "yes",
				onPress: () => {
					changeMOod()
					

				}
			    },
				{
					text: 'No',
					onPress: () => console.log('Cancel pressed'),
					style: "cancel"

				}
			   
			] )
		
		
		
	}
	return(
		
		<View style={{ flex: 1, backgroundColor: selector == 'dark' ? Allcolor.active.primary : Allcolor.inActive.primary }} >
			<StatusBar hidden />
			
			<View style={{
				flexDirection: 'row',
				borderColor: 'grey',
				borderWidth: 1,
				borderRadius: 35,
				margin: 13,
				padding: 2,
				flexDirection: "row",
				backgroundColor: selector =='dark' ? Allcolor.active.primary : Allcolor.inActive.primary,
				justifyContent: 'space-between',
				
            }} >
			  <View style={{flexDirection:"row"}}>
				    <TouchableOpacity onPress={getImg}>
						{(profileImg) ? <Image source={{ uri: profileImg }} style={styles.ModalImg2} /> : <Image source={{ uri:"https://cdn-icons-png.flaticon.com/512/5719/5719355.png"}} style={styles.ModalImg2} />}
						<AntDesign name="camera" color={'black'} style={{
							marginLeft: 25, position: "relative", bottom: 20,
							 backgroundColor: "grey", 
							 borderRadius: 25,
							  padding:2
                            }} size={20}/>
				   </TouchableOpacity> 
				<View>
						<Text style={{ color: selector == 'dark' ? Allcolor.active.textColor : Allcolor.inActive.textColor }}>Later</Text>
						{/* <TouchableOpacity onPress={() => {
							var options = {
								description: 'Credits towards consultation',
								image: 'https://i.imgur.com/3g7nmJC.jpg',
								currency:'INR',
								key: 'rzp_test_2VYHup8J177YIx',
								amount:'5000',
								name:'Acme Corp',
								order_id: '',
								prefill: {
									email: 'gaurav.kumar@example.com',
									contact: '9191919191',
									name: 'Gaurav Kumar'
								},
								theme: { color: '#53a20e' }
							}
							RazorpayCheckout.open(options).then((data) => {
								// handle success
								Alert(`Success: ${data.razorpay_payment_id}`);
							}).catch((error) => {
								// handle failure
								Alert(`Error: ${error.code} | ${error.description}`);
							});
						}}>
						<Text style={{fontWeight:"bold", color:selector=='dark'? Allcolor.active.textColor:Allcolor.inActive.textColor}}>Free Member <Text style={{ borderColor: "orange", borderWidth:1, color: 'orange', borderRadius: 15, textAlign: 'center', padding: 2 }}>Upgret</Text>
                        </Text>
					</TouchableOpacity>
					 */}
					

				</View>
				
			  </View>
			<View  style={{flexDirection:"row",	}}>
			<TouchableOpacity style={{margin:10}}>
						<AntDesign name='bells' size={30} color={selector == 'dark' ? Allcolor.active.textColor : Allcolor.inActive.textColor} />
			</TouchableOpacity>

				<TouchableOpacity style={{ marginVertical: 10 }} onPress={ModalOn}>
						<Ionicons name='reorder-three-outline' size={30} color={selector == 'dark' ? Allcolor.active.textColor : Allcolor.inActive.textColor} />
			</TouchableOpacity>
			
			</View>


		  </View> 
		 <FlatList
				data={getGenderVel}
				renderItem={(element) => {
					return (
						
						<View style={{
							backgroundColor:selector== 'dark' ? Allcolor.active.primary : Allcolor.inActive.primary,

							margin: 10,
							padding: 10,
							borderRadius:5
						}}>
							<Image source={{ uri: element.item.imageLink }} style={styles.img2} />
							<View style={{ marginLeft: 10 }}>
								<Text style={{
									fontWeight: 'bold',
									fontSize: 15,
									color:selector=='dark' ? Allcolor.active.textColor:Allcolor.inActive.textColor
                             }}>{element.item.Name}</Text>
								<Text style={{
									fontWeight: 'bold',
									fontSize: 15,
									color:"grey"
								}}>{element.item.Age}yrs {element.item.Religion} {element.item.EmployIn}
									<TouchableOpacity onPress={()=>userMoreInformatiion(element)}>
										<Text style={{ color: 'blue', fontWeight: "bold" }}> See More...</Text>

									</TouchableOpacity>
									   </Text>
									   
										</View>
							
							<View style={styles.line}>
    
							</View>

						</View>
					)


				}}
			/>
			<Modal 
			// animationType="slide"
				transparent={true}
				visible={isModal} 

				// visible={modalVisible}
				onRequestClose={() => {
					setIsModal(false);
				}}
				 animationIn="slideInLeft"
				animationOut="slideOutRight">
				<View style={{ backgroundColor:"rgba(0, 0, 0, 0.4)",flex:1}}>
					<View style={{ width: 290, height: '100%', flex: 1, alignSelf: "flex-end", backgroundColor: selector == 'dark' ? Allcolor.active.primary : Allcolor.inActive.primary}}>
						<TouchableOpacity onPress={()=>setIsModal(false) }>
							<AntDesign name="arrowleft" size={30} color={selector == 'dark' ? Allcolor.active.textColor : Allcolor.inActive.textColor} style={{ margin: 10 }} />
						</TouchableOpacity>

						<TouchableOpacity onPress={getImg}>
							{(profileImg) ? <Image source={{ uri: profileImg }} style={styles.ModalImg} /> : <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/5719/5719355.png" }} style={styles.ModalImg} />}
							<AntDesign name="camera" color={'black'} style={{
							alignSelf:'center', position: "relative", bottom: 35,left:20,backgroundColor:"grey",borderRadius:25,padding:5
							}} size={40} />
						</TouchableOpacity>
						<TouchableOpacity style={{ padding: 10, width: 150,alignSelf:"center", marginVertical:20,backgroundColor: "orange", borderRadius: 20 }}>
							<Text  style={{color:"white",textAlign:"center"}}>
								Upgret
							</Text>
						</TouchableOpacity>

				        <View style={{margin:20}}> 
							<TouchableOpacity style={{ flexDirection:"row",marginVertical:5}} onPress={() =>{Navigation.navigate('EditProfile')
								 setIsModal(false)}}>
								<FontAwesome name='edit' size={20} color={selector == 'dark' ? Allcolor.active.textColor : Allcolor.inActive.textColor}/>
								<Text style={{ marginHorizontal: 5, color: selector == 'dark' ? Allcolor.active.textColor : Allcolor.inActive.textColor }}>Edit Profile</Text>
								</TouchableOpacity>
								
							<TouchableOpacity style={{ flexDirection: "row", marginVertical: 5 }} onPress={()=>{
								Navigation.navigate('Preferences')
							}} >
								<MaterialCommunityIcons name='account-edit-outline' size={25} color={selector == 'dark' ? Allcolor.active.textColor : Allcolor.inActive.textColor} />
								<Text style={{ marginHorizontal: 5, color: selector == 'dark' ? Allcolor.active.textColor : Allcolor.inActive.textColor }}>Edit Preferences</Text>
							</TouchableOpacity>

							<TouchableOpacity style={{ flexDirection: "row", marginVertical: 5 }} onPress={() => Navigation.navigate('Chat')} >
								<Ionicons name='chatbubble-ellipses-outline' size={25} color={selector == 'dark' ? Allcolor.active.textColor : Allcolor.inActive.textColor} />
								<Text style={{ marginHorizontal: 5, color: selector == 'dark' ? Allcolor.active.textColor : Allcolor.inActive.textColor }}>Your chats</Text>
							</TouchableOpacity>
                             
							<TouchableOpacity style={{ flexDirection: "row", marginVertical: 5 }} onPress={getMood}>
								<MaterialIcons name='light-mode' size={25} color={selector == 'dark' ? Allcolor.active.textColor : Allcolor.inActive.textColor} />
 
								<Text style={{ color:selector== 'dark' ? Allcolor.active.textColor : Allcolor.inActive.textColor}}>Mood</Text>
							 </TouchableOpacity>

							<TouchableOpacity style={{ flexDirection: "row", marginVertical: 5 }} onPress={logout} >
								<Entypo name='log-out' size={25} color={selector == 'dark' ? Allcolor.active.textColor : Allcolor.inActive.textColor} />
								<Text style={{ marginHorizontal: 5, color: selector == 'dark' ? Allcolor.active.textColor : Allcolor.inActive.textColor }}>Log Out</Text>
							</TouchableOpacity>
						</View>
						
					</View>
					</View>
				

			</Modal>
		</View>
	)
}
const styles=StyleSheet.create({
	img:{
		height:30,
		width:30,
		marginTop:5,
		marginLeft:10,
		borderRadius:15,
		// borderRadius:10,

	},
	name:{
		fontWeight:'bold',
		fontSize:15,
		// color: selector == 'dark' ? Allcolor.active.textColor : Allcolor.inActive.textColor


	},

	
	line:{ 
		width:"100%",
		height:3,
		marginTop:10,
		backgroundColor:'grey'
	},
	img2:{
		width:300,
		height:300,
		borderRadius:40
	},
	ModalImg:{
		width:100,
		height:100,
		borderRadius:50,
		alignSelf:"center"

	},
	ModalImg2: {
		height: 40,
		width: 40,
		marginTop: 5,
		marginLeft: 10,
		borderRadius: 25,
		alignSelf: "center"

	}

})