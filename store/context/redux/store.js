import { configureStore } from "@reduxjs/toolkit"; 
import favoritesReducer from "./favorites";//BUrdaki isim önemli diil dosyada omayan bir isim de oluyor.


export const store = configureStore({
    reducer:{
        favoriteMeals: favoritesReducer
    }
});