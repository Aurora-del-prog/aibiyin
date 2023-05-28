import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name:"home",
  initialState:{
    productList:[]
  }
})

export default homeSlice.reducer