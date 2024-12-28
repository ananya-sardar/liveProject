import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
	name:"lifeProjectRedux",
	initialState:{
		userName:"anu",
		//  age:"20",
		memberValue:'',
		useremail:"",
		imgUrl:"",
		password:"",
		uid:"",
		mood:"dark"


	}
,

reducers:{
	setUserName:(state,action) =>{
		state.name= action.payload
	},
	setmemberValue:(state,action)=>{
		state.memberValue =action.payload
	},
	setUid: (state, action) => {
		state.uid = action.payload
	},
	setUserEmail: (state, action) => {
		state.useremail = action.payload
	}
	, setImgUrl: (state, action) => {
		state.imgUrl = action.payload
	},
	setPasdword:(state,action)=>{
		state.password=action.payload
	},
	setMood: (state, action) => {
		state.mood = action.payload
	}

}
})
export const { setUserName, setUid,setMood,setUserEmail,setPasdword,setmemberValue,setImgUrl}=userSlice.actions
export default userSlice.reducer