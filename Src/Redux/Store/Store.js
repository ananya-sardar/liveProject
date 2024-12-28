import { configureStore } from "@reduxjs/toolkit";
import lifeReducer from './../Slice/slice'
import userRegistedDetai from './../Slice/Slice2'


const store=configureStore({
	reducer:{
		userName:lifeReducer,
		userDetail:userRegistedDetai
	}
})
export default store