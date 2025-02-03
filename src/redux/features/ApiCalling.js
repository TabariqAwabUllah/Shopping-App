import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const categURL =  'https://api.escuelajs.co/api/v1/categories'
export const fetchCategories = createAsyncThunk('categoryApi', async ()=>{
    try {
       let getCateg = await fetch(categURL);
       if (!getCateg.ok) throw new Error("Failed to fetch categories");
       return await getCateg.json();
    } catch (error) {
       throw error;
    }
 });
    
    



export const categApiSlice = createSlice({
    name: 'categoryApi',
    initialState: {
        data:  null,
        isLoader: false,
        isError: false
    },
    extraReducers: (builder)=>{
        return (
        builder.addCase(fetchCategories.pending,(state, action)=>{
            state.isLoader = true;

        }),
        builder.addCase(fetchCategories.fulfilled, (state,action)=>{
            state.isLoader = false,
            state.data = action.payload
        }),
        builder.addCase(fetchCategories.rejected,(state, action)=>{
             state.isError = true;
             state.isLoader = false

        })
    )
    }
})

export default categApiSlice.reducer