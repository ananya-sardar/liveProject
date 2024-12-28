

import { Text, View, LogBox } from "react-native";
import { Value } from "react-native-reanimated";
import Main from "./Splash";
import { Provider } from "react-redux";
import store from "./Redux/Store/Store";

import Test from "./Test";
import Register from "./Register";
import Navigation from "./Navigation";
import Preferences from "./Preferences";
import {NewProps} from "./newProps";


export default function App(){
	LogBox.ignoreLogs(['Warning: ...']);
	return(
		<Provider store={store}>
           {/* <NewProps/> */}
			<Navigation/>
			
		    {/* <Preferences/> */}
		</Provider>
	
	) 

}