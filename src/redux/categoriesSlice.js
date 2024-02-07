import { createSlice } from "@reduxjs/toolkit";

let categories = createSlice({
    name : 'categories',
    initialState : [{}],

    reducers : {
        updateCategories(state, action) {
            return action.payload;
        }
    }
})

export let { updateCategories } = categories.actions

export default categories