import { configureStore } from "@reduxjs/toolkit";
import homeRuducer from './modules/home'
import entireReduce from './modules/entire'


const store = configureStore({
  reducer:{
    home: homeRuducer,
    entire: entireReduce
  }
})

export default store