import react from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Criteria from "./criteria";
import Profileid from "./ProfileId";
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { Allcolor } from './Resorce/Utils/AllColor';
export default function Search(){
	const Tab = createMaterialTopTabNavigator()
	const seletor = useSelector(state => state.userName.mood)


	return(
		
		
			
				<Tab.Navigator 
			screenOptions={{
				// tabBarActiveTintColor: seletor == 'dark' ? Allcolor.active.textColor : Allcolor.inActive.textColor,
				// tabBarActiveTintColor:"red",
				tabBarPressColor: seletor == 'dark' ? Allcolor.inActive.primary : Allcolor.active.primary,
				tabBarStyle:{
					// backgroundColor:""
					backgroundColor: seletor == 'dark' ? Allcolor.active.primary : Allcolor.inActive.primary
                    // ,tabBarInactiveTintColor:"red"
				},
				
                   }}
				>
				<Tab.Screen name="By Criteria" component={Criteria} options={{tabBarActiveTintColor:"blue",tabBarInactiveTintColor:"black"}} />
		    	<Tab.Screen name="By Profile Id" component={Profileid} options={{ tabBarActiveTintColor: "blue", tabBarInactiveTintColor: "black" }}   />

				</Tab.Navigator>

		
			

		
	)
}