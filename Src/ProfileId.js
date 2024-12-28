import react from 'react'

import { Text, TextInput, View } from "react-native"
import { useSelector } from 'react-redux'
import { Allcolor } from './Resorce/Utils/AllColor'

export default function Profileid(){
	const seletor = useSelector(state => state.userName.mood)
	
	return(
		<View style={{flex:1,backgroundColor: seletor=='dark' ? Allcolor.active.primary:Allcolor.inActive.primary}}>
			<Text >Height</Text>
			<TextInput />

		</View>
	)
}