import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const userSlice=createSlice({
	name:"userRegisterInfo",
	initialState:{
	registedName:"anu"
	},

	reducers:{
		seRegistedName:(state,action)=>{
                state.registedName=action.payload
		}
	}
})

export const {seRegistedName}=userSlice.actions
export default  userSlice.reducer