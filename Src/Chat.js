import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";
import firestore from '@react-native-firebase/firestore';
import Feather from 'react-native-vector-icons/Feather'
import { GiftedChat } from "react-native-gifted-chat";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";
import { Allcolor } from "./Resorce/Utils/AllColor";
export default function Chat(){
	const user = auth().currentUser.uid
	const [textUser,setTextUser]=useState()
	// const [date, setDate] = useState()
	const selector = useSelector(state => state.userName.mood)


	const [count,setcount]=useState(1)

    const [text,setText]=useState()  
	const [data, setData]=useState([])
	
       function textUserFun(){
		   if (user =='kSS9il4GyKN93hzofQYrJBOchfz1'){
			   setTextUser('XmviUad3jfciqK3kG0y1nLgl9uY2')
			   
		   }else{
			   setTextUser('kSS9il4GyKN93hzofQYrJBOchfz1')
			 
		   }
            
	   }

	useEffect(()=>{
		  console.log(data,'i')
		textUserFun()
		const query = firestore().collection('chat').orderBy('date')

		
		const unsubScribe = query.onSnapshot((elem)=>{
			//
			let newArray = []
		
		  elem.forEach((element )=>{
			
			newArray.push(element.data())
			  setData(newArray)}
		
		);

			
		})

		return(()=>{
			unsubScribe()
		})  

	},[])
  
	

		
	
	const getText=(elem)=>{
		setText(elem)
		setcount(count+1)

	}
	const sendText=()=>{

		const timestamp= new Date()
		// console.log('ty',time)
		const getDatee=new Date().toLocaleDateString()
		const time = new Date().toLocaleTimeString()

		firestore().collection('chat').add({
			message: text,
		
			textFrom:auth().currentUser.uid,
			textTo:textUser,
		    date:getDatee,
			time:time ,

			createdAt: timestamp

		       
			
	     })
		
	setText()
	}	
         
		return(
		
		// <ScrollView>
		<View style={{padding:5,flex:1,
			justifyContent:"flex-end",
			backgroundColor: selector== 'dark' ? Allcolor.active.primary : Allcolor.inActive.primary}}
		>
		
			<View >
					
			<FlatList data={data} renderItem={(item) => {
						// console.log(item)
				return(
					// <View>
					// 	</View>
					<View >
						{/* <Text style={{ backgroundColor: "red", textAlign: "center" }}>{item.item.date}</Text> */}
						
						{(user == item.item.textFrom) ? 
							<View style={styles.viewStyleList}>
								<Text style={{color:'black'}} >{item.item.message}</Text> 
								<Text style={{ textAlign: "right" }}>{item.item.time}</Text>
							</View> 
							 : 
							<View style={styles.viewStyleList2} >
							 <Text style={styles.textstyle2}>{item.item.message}</Text>
								<Text style={{ textAlign: "right" }}>{item.item.time}</Text>
							 </View>
							 }
						
							 </View>
				
						

							
				)

			}}/>
			</View>
			<View style={{width:"100%",flexDirection:'row'}}>
					< TextInput onChangeText={getText} value={text} style={{borderWidth:1,
					height:35,
					width:300,
					borderColor: selector == 'dark' ? Allcolor.active.textColor : Allcolor.inActive.textColor,
					borderRadius:30,
					marginHorizontal:3
                }} />
			<TouchableOpacity onPress={sendText}>
					<Feather name="send" size={25} style={styles.iconstyle} />  

			</TouchableOpacity>
			</View>

	
		</View>
			// </ScrollView>
	)

}
const styles=StyleSheet.create({
	iconstyle:{
		backgroundColor:"#4da6ff",
		padding:6,

		borderRadius:30,

	},
	viewStyleList:{
		backgroundColor:'#b4d4fa',
		margin:5,
       width:130,
	   alignSelf:"flex-end",
	   padding:5,
	   borderTopLeftRadius:14,
		borderBottomLeftRadius: 14,
		borderBottomRightRadius: 14

	},
	viewStyleList2: {
		backgroundColor: "#cccccc",
		margin: 5,
		width: 130,
		padding: 5,
		borderTopRightRadius: 14,
		borderBottomLeftRadius: 14,
		borderBottomRightRadius: 14

	},

	textstyle:{
		//  backgroundColor:"#cccccc",
		//  padding:5,
		//  borderRadius:5,
		//  textAlign:'left',
		//  width:70,

        //  justifyContent:"flex-end",
		//  marginVertical:10
		 fontWeight:"bold"
		 
		},
	    TextInputstyle:{
        
	   },
	   timestyle:{
		   color: '#eeeeee',
		   textAlign:'right'


	   },
	textstyle2: {
		// backgroundColor: "#b4d4fa",
		color:'white',
	
		//  borderRadius: 5,
		textAlign: 'left',
		marginRight:4,
		// alignSelf:"baseline",
		// justifyContent:'flex-end',
		// width: 70,
	}
})