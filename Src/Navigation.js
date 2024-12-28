// 
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
// import { Settings, Text, Vibration, View, ViewBase } from "react-native";
import Main from "./Splash";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Map from "./App";

import Register from "./Register";
import Menu from "./Menu";
import { NavigationContainer } from "@react-navigation/native";
import Information from "./InforMation";
import Moredetails from "./MoreDetail";
import Splash from "./Splash";
import auth from '@react-native-firebase/auth'
import Home from "./Home";
import Matches from "./Matches";
import Mailbox from "./Mailbox";
import Chat from "./Chat";
import Search from "./Search";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import AsyncStorage from "@react-native-async-storage/async-storage";
import Preferences from "./Preferences";
import LogIn from "./LogIn";
import EditProfile from "./EditProfile";
import UserDetails from "./UserDtails";
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import FilterUser from "./FilterUser";
import HomeComponent from "./HomeComponen";
import { useSelector } from "react-redux";
import { Allcolor } from "./Resorce/Utils/AllColor";

export default function Navigation(){
	const [useruid,setUserUid]=useState('no')
	const [isSplash, setIsSplash] = useState(true)

	const [userState, setuserState] = useState(0)

	useEffect(() => {

		// setTimeout(() => {
        //       setIsSplash(false)
		// 	getuser()
		// }, 2000);
		
		getuser();
	})
	const getuser = async () => {
		auth().onAuthStateChanged((user) => {
		
			if (user) {
				// setUserUid(true)
				if(user.uid){
					setuserState(2)
				}
				else{
					setuserState(1)
				}
				
			}else{
				// setUserUid(false)
				setuserState(1)

			}
		});
		
		// let data=auth().currentUser

	    //     setTimeout(() => {
		// 		if(data){
		// 			setUserUid(true)
		// 		}else{
		// 			setUserUid(false)
		// 		}
				
		// 	}, 2000);
	
	
	}

	  
	return(
	
		<NavigationContainer>
			{/* <Auth/> */}
			{/* <SplashFunction/> */}
			{/* {(isSplash) ? <SplashFunction /> :(useruid)? <MainApp/>:<Auth/> } */}

			{(userState == 0) ? <SplashFunction /> : (userState == 2) ? <App /> : <Auth/>}
			{/* {(userState == 0) ? <SplashFunction /> : (userState == 2) ? <TabStack /> : <Auth/>} */}

		</NavigationContainer>
				
			 
	)
}


function Auth(){
	const Stack = createStackNavigator()
	return(

	<Stack.Navigator screenOptions={{headerShown:false}}>
			<Stack.Screen name="menu" component={Menu} options={{headerShown:false}} />
		<Stack.Screen name="REGISTER" component={Register} />
		<Stack.Screen name="Login" component={LogIn} />
	</Stack.Navigator>
	)
}


function TabStack() {
	const Tab=createBottomTabNavigator()
	const selector = useSelector(state => state.userName.mood)

	return (
		<Tab.Navigator screenOptions={{headerShown:false,
			tabBarActiveBackgroundColor: selector == 'dark' ? Allcolor.active.textColor : Allcolor.inActive.textColor
		    ,
			tabBarInactiveBackgroundColor: selector == 'dark' ? Allcolor.inActive.textColor : Allcolor.active.textColor   
		}}  >
			<Tab.Screen  name='Home' component={Home}
				options={{
					headerShown: false,
					// headerShown: false,
					tabBarIcon: ({ size,focused,color }) => (
						<AntDesign name="home" color={color} size={26} />
					)
                }}
			 
			/>
			<Tab.Screen name='Matches' component={Matches}
				options={{
					headerShown: false,
					tabBarIcon: ({ size,focused,color }) => (
						<Feather name="users" color={color} size={26} />
					)
				}}
			 />
			{/* <Tab.Screen name='Mailbox' component={Mailbox} 
			    options={{
					headerShown: false,
				    tabBarIcon: ({ size, focused, color }) => (
					   <AntDesign name="mail" color={color} size={26} />
				    )
			    }} 
			/> */}
			<Tab.Screen name='Chat' component={Chat} 
			  options={{
				   tabBarIcon: ({ size, focused, color }) => (
					  <Ionicons name="chatbox-ellipses-outline" color={color} size={26} />
				   )
			  }} 
			/>
			<Tab.Screen name='Search' component={Search}
				options={{
					tabBarIcon: ({ size, focused, color }) => (
						<AntDesign name="search1" color={color} size={26} />
					)
				}}
			 />

		</Tab.Navigator>
           
	)
}

function App(){
	const Stack = createStackNavigator()
	return (

		<Stack.Navigator screenOptions={{headerShown:false}}>
			<Stack.Screen name="InforMation" component={Information} />
			<Stack.Screen name="Tab" component={TabStack} />

			<Stack.Screen name="MoreDetail" component={Moredetails} />
			<Stack.Screen name="HomeComponent" component={HomeComponent} />

			<Stack.Screen name="EditProfile" component={EditProfile} />
			<Stack.Screen name="UserDetails" component={UserDetails} />

			<Stack.Screen name="FilterUser" component={FilterUser} />
			<Stack.Screen name="Preferences" component={Preferences} />
		</Stack.Navigator>
	)
}



function SplashFunction() {
	const Stack = createStackNavigator()
	return (

		<Splash/>
	)
}

