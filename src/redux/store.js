import { configureStore } from "@reduxjs/toolkit";
import categories from './categoriesSlice.js';


export default configureStore({
    reducer: {
        categories : categories.reducer,
    },
})

