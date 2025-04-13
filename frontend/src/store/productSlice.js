import {createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState={
    isLoading:false,
    data:[]
}

export const addProduct=createAsyncThunk("product/addProduct",async(formData)=>{
    let response= await fetch("http://localhost:3000/api/prodcut/add",{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
    })

    let result=await response.json()
    return result.data;
})

const productSlice=createSlice({
    name:"product",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(addProduct.pending,(state,action)=>{
            state.isLoading=true
        
        }).addCase(addProduct.fulfilled,(state,action)=>{
            state.isLoading=false
            state.formData=action.payload.data
        }).addCase(addProduct.rejected,(state,action)=>{
            state.isLoading=false
            state.formData=[]

        })
    }
})

export default productSlice.reducer